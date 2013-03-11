var vows = require('vows'),
    sinon = require('sinon'),
    assert = require('assert'),
    mongoose = require('mongoose'),
    LieferantModel = require('../../model/Lieferant.js'),
    LieferantController = require('../../controller/Lieferant.js');

vows.describe('Lieferant').addBatch({
    'A Lieferant': {
        'returns a list': function () {
            // console.log(mongoose.model('Lieferant').prototype.testableMethod); // ok
            // console.log(mongoose.model('Lieferant').staticTestableMethod); //
            var result = {
                "__v":0,
                "_id":"513755f91d95505c5e000001",
                "url":"",
                "telefon":"",
                "adresse":"Mustergasse 22",
                "lieferant":"Pizza Aquario"
            };

            var stub = sinon.stub(mongoose.Model, "find");
            stub.callsArgWith(1, undefined, result);

            // TODO move + complete
            var responseApi = {
                send: function (input) {
                    //assert.equal(result, input);
                }
            };

            var mock = sinon.mock(responseApi);
            mock.expects('send').once().withArgs(result);
            LieferantController.list(undefined, responseApi);

            mock.verify();
        }
    }
}).export(module);