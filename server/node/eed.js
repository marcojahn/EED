// module dependencies
var express = require('express'),
    fs = require('fs');

// load configuration
var env = process.env.NODE_ENV || 'development',
    config = require('./config/config')[env],
    mongoose = require('mongoose');

// bootstrap db connection
mongoose.connect(config.db);

// bootstrap models
var models_path = __dirname + '/model';
fs.readdirSync(models_path).forEach(function (file) {
    require(models_path+'/'+file)
});

var app = express();

// express settings
require('./config/express')(app, config);

// Bootstrap routes
require('./config/routes')(app);

// Start the app by listening on <port>
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express app started on port ' + port);