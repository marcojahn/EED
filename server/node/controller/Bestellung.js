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

exports.update = function (req, res) {
    console.log('bestellung update')
    Bestellung
        .findByIdAndUpdate(req.params.id, req.body, function (err, bestellung) {
            if (err) console.log(err);
            if (!bestellung) console.log(new Error('Failed to load Bestellung: ' + req.params.id));

            res.send(bestellung);
        });
};

exports.delete = function (req, res) {
    var id = req.query.deleteId;
    Bestellung.findById(id, function (err, bestellung) {
        if (err) console.log(err);
        if (!bestellung) console.log(new Error('Failed deleting Bestellung with id: ' + id));

        bestellung.remove();
        res.send(bestellung);
    })
};