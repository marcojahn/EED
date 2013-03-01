Ext.define('EED.model.Lieferant', {
    extend: 'EED.model.EEDEntity',

    idProperty: 'lieferantId',

    fields: [
        {name: 'lieferantId', defaultValue: null, useNull: true},
        {name: 'lieferant'},
        {name: 'adresse'},
        {name: 'telefon'},
        {name: 'url'}
    ]
});