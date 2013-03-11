var mongoose = require('mongoose'),
    Lieferant = mongoose.model('Lieferant');

module.exports = function (app) {

    // Lieferant routes
    var lieferant = require('../controllers/Lieferant');
    app.get('/lieferant', lieferant.list);
    // app.get('/lieferant/:id', lieferant.read);
    app.post('/lieferant', lieferant.create);
    app.put('/lieferant/:id', lieferant.update);
    // app.del('/lieferant/:id', lieferant.delete);

    // Bestellung routes
    var bestellung = require('../controllers/Bestellung');
    app.get('/bestellung', bestellung.list);
    app.post('/bestellung', bestellung.create);
    // app.del('/bestellung/:id', bestellung.delete);

    // home route
    app.get('/', function (req, res) {
        var body = 'EED';
        res.send(body);
    });
};