var vows = require('vows'),
    sinon = require('sinon'),
    assert = require('assert'),
    express = require('express'),
    mongoose = require('mongoose'),
    LieferantController = require('../../controller/Lieferant.js');

var result = {
    '__v':0,
    '_id':'513755f91d95505c5e000001',
    'url':'',
    'telefon':'',
    'adresse':'Mustergasse 22',
    'lieferant':'Pizza Aquario'
};

vows.describe('Lieferant controller').addBatch({
    'calling list': {
        topic: function () {
            var stub = sinon.stub(mongoose.Model, 'find');
            stub.callsArgWith(1, undefined, result);

            var mock = sinon.mock(express.response);
            mock.expects('send').once().withArgs(result);

            LieferantController.list(undefined, express.response);

            return mock;
        },
        'calls response.send with result': function (topic) {
            // console.log(mongoose.model('Lieferant').prototype.testableMethod); // ok
            // console.log(mongoose.model('Lieferant').staticTestableMethod); //
            topic.verify();
            topic.restore();
        }
    }
}).addBatch({
    'calling create': {
        topic: function () {
            var stub = sinon.stub(mongoose.model('Lieferant').prototype, 'save');
            stub.callsArgWith(0, undefined, result);

            this.mock = sinon.mock(express.response);
            this.mock.expects('send').once().withArgs(result);

            LieferantController.create(undefined, express.response);

            process.nextTick(this.callback);
        },
        'calls response.send with result': function () {
            this.mock.verify();
            this.mock.restore();
        }
    }
}).export(module);