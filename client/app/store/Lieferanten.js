Ext.define('EED.store.Lieferanten', {
    extend: 'Ext.data.Store',

    model: 'EED.model.Lieferant',

    storeId: 'Lieferanten',

    proxy: {
        type: 'ajax',
        url: 'http://localhost/eed/server/lieferanten.php'
    },

    autoSync: true
});