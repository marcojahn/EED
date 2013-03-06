var mongoose = require('mongoose'),
    Lieferant = mongoose.model('Lieferant');

exports.list = function (req, res) {
    // model/artile/list()
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

exports.update = function (req, res) {
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
};