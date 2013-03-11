var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LieferantSchema = new Schema({
    lieferant: {type: String, default: 'neuer Lieferant'},
    adresse: {type: String, default: null},
    telefon: {type: String, default: null},
    url: {type: String, default: null}
});

LieferantSchema.methods = {
    testableMethod: function () {
        console.log('foo');
    }
};

LieferantSchema.statics = {
    staticTestableMethod: function () {
        console.log('bar');
    }
};

mongoose.model('Lieferant', LieferantSchema);