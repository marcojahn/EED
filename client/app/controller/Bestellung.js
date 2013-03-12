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

    /*viewConfig: {
        listeners: {
            itemdblclick: this.updateBestellung
        }
    },*/

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
        var form = this.getBestellungForm().getForm(),
            record = Ext.create('EED.model.Bestellung');
        form.loadRecord(record);
        form.clearInvalid();
    },

    removeBestellung: function (grid, rowIndex, colIndex) {
        grid.getStore().removeAt(rowIndex);
    },

    saveBestellung: function () {
        var form = this.getBestellungForm().getForm(),
            record = form.getRecord();

        console.log(record)

        form.updateRecord(record);

        if (record.phantom === true) {
            this.getBestellungenStore().add(record);
        } else {
            //this.getBestellungenStore().add(record);
            var gridRecord = this.getBestellungenStore().getById(record.get('bestellungId'));
            gridRecord.set('lieferant', record.get('lieferant'));
            gridRecord.set('bestellung', record.get('bestellung'));
            gridRecord.set('preis', record.get('preis'));
            gridRecord.set('besteller', record.get('besteller'));
            this.getBestellungenStore().sync();
        }

        form.reset();
        this.initForm();
    },

    updateBestellung: function (view, record) {
        var form = this.getBestellungForm().getForm();
        form.loadRecord(record);
        form.clearInvalid();
    }
});