Ext.define('EED.controller.Lieferant', {
    extend: 'Ext.app.Controller',

    models: ['Lieferant'],
    stores: ['Lieferanten'],

    onLaunch: function () {
        console.log('controller lieferanten onLaunch');
        this.getLieferantenStore().load();
    }
});