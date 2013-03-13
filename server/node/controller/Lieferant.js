var mongoose = require('mongoose'),
    Lieferant = mongoose.model('Lieferant');

exports.list = function (req, res) {
    Lieferant.find({}, function (err, lieferanten) {
        if (err) console.log(err);
        res.send(lieferanten);
    });
};

exports.create = function (req, res) {
    var lieferant = new Lieferant();

    lieferant.save(function (err, lieferant) {
        if (err) {
            console.log('error lieferant.save:');
            console.log(err);
        }

        res.send(lieferant);
    });
};

exports.createNG = function (req, res) {
    // todo same as ::create but .create is delegated to model itself for creating a new one and returning it
    // if possible
};

exports.update = function (req, res) {
    // TODO read notes: http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
    // if defaults/setters/validators/middleware should apply, load first, then modify and save

    Lieferant
        .findByIdAndUpdate(req.params.id, req.body, function (err, lieferant) {
            //if (err) res.send(err);
            //if (!lieferant) res.send(new Error('Failed to load Lieferant: ' + req.params.id));
            if (err) console.log(err);
            if (!lieferant) console.log(new Error('Failed to load Lieferant: ' + req.params.id));

            res.send(lieferant);
        });
};

exports.delete = function (req, res) {
    var id = req.query.deleteId;

    Lieferant.findById(id, function (err, lieferant) {
        if (err) console.log(err);
        if (!lieferant) console.log(new Error('Failed deleting Lieferant with id: ' + id));

        lieferant.remove();
        res.send(lieferant);
    });
};