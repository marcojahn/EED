module.exports = {
    development: {
        root: require('path').normalize((__dirname + '/..')),
        app: 'EED (ExtJS, Nodejs, Mongoose Demo)',
        db: 'mongodb://localhost/eed'
    },
    test: {},
    production: {}
};