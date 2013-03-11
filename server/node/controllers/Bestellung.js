var mongoose = require('mongoose'),
    Bestellung = mongoose.model('Bestellung');

exports.list = function (req, res) {
    Bestellung.find({}, function (err, bestellungen) {
        if (err) console.log(err);
        res.send(bestellungen);
    });
};

exports.create = function (req, res) {
    var bestellung = new Bestellung(req.body);

    bestellung.save(function (err, bestellung) {
        if (err) console.log(err);
        if (!bestellung) console.log(new Error('Failed to save bestellung: ' + bestellung));

        res.send(bestellung);
    });
};