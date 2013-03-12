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
                'itemclick': function () {console.log('item clicked')},
                'itemdblclick': function () {console.log('item double clicked')}
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

        form.updateRecord(record);

        this.getBestellungenStore().add(record);
        form.reset();
        this.initForm();
    },

    updateBestellung: function (view, record, item, index, e, eOpts) {
        console.log('update bestellung')
        console.log(view)
        console.log(record)
        console.log(item)
    }
});