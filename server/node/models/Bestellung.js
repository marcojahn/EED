var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BestellungSchema = new Schema({
    besteller: {type: String, default: null},
    lieferant: {type: String, default: null},
    bestellung: {type: String, default: null},
    preis: {type: Number, default: null}
});

mongoose.model('Bestellung', BestellungSchema);