Ext.define('EED.controller.Bestellung', {
    extend: 'Ext.app.Controller',

    models: ['Bestellung'],
    stores: ['Bestellungen'],

    refs: [
        {
            ref: 'bestellungForm',
            selector: 'bestellung-bestellungformular'
        }
    ],

    onLaunch: function () {
        this.getBestellungenStore().load();

        this.control({
            'bestellung-bestellunggrid': {
                'bestellungdelete': this.removeBestellung
            },
            'bestellung-bestellunggrid gridview': {
                'itemdblclick': this.updateBestellung
            },
            'bestellung-bestellungformular button[action=bestellungsave]': {
                click: this.saveBestellung
            }
        });

        this.initForm();
    },

    initForm: function () {
        var record = Ext.create('EED.model.Bestellung');
        this.loadFormWithRecord(record);
    },

    loadFormWithRecord: function (record) {
        var form = this.getBestellungForm().getForm();
        form.loadRecord(record);
        form.clearInvalid();
    },

    removeBestellung: function (grid, rowIndex, colIndex) {
        grid.getStore().removeAt(rowIndex);
        var form = this.getBestellungForm().getForm();
        form.clearInvalid();
    },

    saveBestellung: function () {
        var form = this.getBestellungForm().getForm(),
            record = form.getRecord();

        form.updateRecord(record);

        if (record.phantom === true) {
            this.getBestellungenStore().add(record);
        } else {
            // update is a custom overwrite!
            this.getBestellungenStore().update(record);
        }

        form.reset();
        this.initForm();
    },

    updateBestellung: function (view, record) {
        this.loadFormWithRecord(record);
    }
});