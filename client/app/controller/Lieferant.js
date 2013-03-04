Ext.define('EED.controller.Lieferant', {
    extend: 'Ext.app.Controller',

    models: ['Lieferant'],
    stores: ['Lieferanten'],

    refs: [{
        ref: 'lieferantengridDeleteButton',
        selector: '#lieferant-lieferantengrid button[action=lieferant-remove]'
    }, {
        ref: 'lieferantengrid',
        selector: '#lieferant-lieferantengrid'
    }],

    onLaunch: function () {
        this.getLieferantenStore().load();

        this.control({
            '#lieferant-lieferantengrid button[action=lieferant-add]': {
                click: this.addLieferant
            },
            '#lieferant-lieferantengrid button[action=lieferant-remove]': {
                click: this.removeLieferant
            },
            '#lieferant-lieferantengrid': {
                selectionchange: this.selectLieferant
            }
        });
    },

    addLieferant: function () {
        var store = this.getLieferantenStore(),
            rowediting = this.getLieferantengrid().getPlugin('rowediting');

        rowediting.cancelEdit();

        // create lieferant
        var r = Ext.create('EED.model.Lieferant', {
            lieferant: 'Lieferant-Name',
            adresse: '',
            telefon: '',
            url: 'http://www.google.de'
        });

        store.insert(0, r);
        rowediting.startEdit(0, 0);
    },

    removeLieferant: function () {
        var sm = this.getLieferantengrid().getSelectionModel(),
            store = this.getLieferantenStore(),
            rowediting = this.getLieferantengrid().getPlugin('rowediting');

        rowediting.cancelEdit();
        store.remove(sm.getSelection());
        if (store.getCount() > 0) {
            sm.select(0);
        }
    },

    selectLieferant: function (selModel, records) {
        this.getLieferantengridDeleteButton().setDisabled(!records.length)
    }
});