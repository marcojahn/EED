// TODO connect-mongo
var express = require('express');

module.exports = function (app, config) {
    // app.set('showStackError', true); // TODO

    // should be used before express.static
    app.use(express.compress({
        filter: function (req, res) {
            return /json|text|javascript|css/.test(res.getHeader('Content-Type'));
        },
        level: 9
    }));

    app.use(express.logger('dev'));

    app.configure('development', function () {
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    //app.configure(function () {
        app.use(function (req, res, next) {
            res.contentType('application/json');
            next();
        });

        app.use(express.bodyParser());
        app.use(express.methodOverride());

        // ## CORS
        var allowCrossDomain = function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

            // intercept OPTIONS method
            if ('OPTIONS' == req.method) {
                res.send(200);
            }
            else {
                next();
            }
        };
        app.use(allowCrossDomain);

        // routes should be at the last
        app.use(app.router);

        // assume "not found" in the error msgs
        // is a 404. this is somewhat silly, but
        // valid, you can do whatever you like, set
        // properties, use instanceof etc.
        app.use(function (err, req, res, next) {
            // treat as 404
            if (~err.message.indexOf('not found')) return next();

            // log it
            console.error(err.stack);

            // error page
            res.status(500).render('500', { error: err.stack })
        });

        // assume 404 since no middleware responded
        app.use(function (req, res, next) {
            res.status(404).render('404', { url: req.originalUrl })
        });
    //});
};