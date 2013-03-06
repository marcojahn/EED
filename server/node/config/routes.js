var mongoose = require('mongoose'),
    Lieferant = mongoose.model('Lieferant');

module.exports = function (app) {

    // Lieferant routes
    var lieferant = require('../controllers/Lieferant');
    app.get('/lieferant', lieferant.list);
    app.post('/lieferant', lieferant.create);
    app.put('/lieferant/:id', lieferant.update);

    // Bestellung routes


    // home route
    app.get('/', function (req, res) {
        var body = 'EED';
        res.send(body);
    });
};