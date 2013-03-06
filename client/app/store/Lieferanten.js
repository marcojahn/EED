Ext.define('EED.store.Lieferanten', {
    extend: 'Ext.data.Store',

    model: 'EED.model.Lieferant',

    storeId: 'Lieferanten',

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/lieferant'
    },

    autoSync: true
});