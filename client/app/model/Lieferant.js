Ext.define('EED.model.Lieferant', {
    extend: 'EED.model.EEDEntity',

    idProperty: 'lieferantId',

    fields: [
        {name: 'lieferantId', mapping: '_id'},
        {name: 'lieferant'},
        {name: 'adresse'},
        {name: 'telefon'},
        {name: 'url'}
    ]
});