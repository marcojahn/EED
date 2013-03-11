Ext.define('EED.store.Bestellungen', {
    extend: 'Ext.data.Store',

    model: 'EED.model.Bestellung',

    storeId: 'Bestellungen',

    proxy: {
        //type: 'memory'
        type: 'rest',
        url: 'http://localhost:3000/bestellung'
    },

    autoSync: true,

    sorters: {
        property: 'lieferant',
        direction: 'ASC'
    },

    groupField: 'lieferant'
});