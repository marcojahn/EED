// module dependencies
var express = require('express'),
    fs = require('fs');

// load configuration
var mongoose = require('mongoose');

// bootstrap db connection
mongoose.connect('mongodb://localhost/eed');

// bootstrap models
var models_path = __dirname + '/models';
fs.readdirSync(models_path).forEach(function (file) {
    require(models_path+'/'+file)
});

var app = express();

// express config
app.use(express.compress({
    filter: function (req, res) {
        return /json|text|javascript|css/.test(res.getHeader('Content-Type'));
    },
    level: 9
}));
app.use(function(req, res, next) {
    console.log('writing content type');
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

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/', function (req, res) {
    var body = 'Hello world';
    res.send(body);
});


// Lieferant controller (+mongoose)
var Lieferant = mongoose.model('Lieferant');


app.get('/lieferant', function (req, res) {
    console.log('get /lieferant ' + new Date().getTime());

    // model/artile/list()
    Lieferant.find({}, function (err, articles) {
        if (err) console.log(err);
        res.send(articles);
    });



});

app.post('/lieferant', function (req, res) {
    var lieferant = new Lieferant();
    lieferant.save(function (err, lieferant) {
        if (err) {
            console.log('error lieferant.save:');
            console.log(err);
        }

        res.send(lieferant);
    });
});

app.put('/lieferant/:id', function (req, res) {
    console.log('put /lieferant');

    // TODO read notes: http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
    // if defaults/setters/validators/middleware should apply, load first, then modify and save

    //console.log(req.body);
    Lieferant
        .findByIdAndUpdate(req.params.id, req.body, function (err, lieferant) {
            //if (err) res.send(err);
            //if (!lieferant) res.send(new Error('Failed to load Lieferant: ' + req.params.id));
            if (err) console.log(err);
            if (!lieferant) console.log(new Error('Failed to load Lieferant: ' + req.params.id));


            res.send(lieferant);
        });
});

app.listen(3000);
console.log('Listening on port 3000');