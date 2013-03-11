Ext.define('EED.model.Bestellung', {
    extend: 'EED.model.EEDEntity',

    idProperty: 'bestellungId',

    fields: [
        {name: 'bestellungId', mapping: '_id'},
        {name: 'besteller', defaultValue: Ext.state.Manager.get('username', 'unbekannt')},
        {name: 'lieferant'},
        {name: 'bestellung'},
        {name: 'preis'}
    ]
});