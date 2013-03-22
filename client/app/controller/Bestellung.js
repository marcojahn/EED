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

    /**
     * Launch Methode des Controllers.
     */
    onLaunch: function () {
        // Laden der Bestellungen
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

        // Formular initialisieren
        this.createEmptyRecordAndBindToForm();
    },

    /**
     * Erstellt ein leeres <i>Bestellung</i> Model und verknüpft es mit dem Formular.
     */
    createEmptyRecordAndBindToForm: function () {
        var newRecord = Ext.create('EED.model.Bestellung');
        this.loadFormWithRecord(newRecord);
    },

    /**
     * Verknüpft das Formular mit dem übergebenen Model und resetted die Validierung.
     *
     * @param {EED.model.Bestellung} record Bestellung Model
     */
    loadFormWithRecord: function (record) {
        var form = this.getBestellungForm().getForm();
        form.loadRecord(record);
        form.clearInvalid();
    },

    /**
     * Entfernt eine Bestellung aus dem Store.
     *
     * @param {Ext.grid.Panel} grid GridPanel
     * @param {Number} rowIndex Index des ausgewählten Eintrages.
     */
    removeBestellung: function (grid, rowIndex) {
        grid.getStore().removeAt(rowIndex);
        var form = this.getBestellungForm().getForm();
        form.clearInvalid();
    },

    /**
     * Speichert eine Bestellung.
     */
    saveBestellung: function () {
        var form = this.getBestellungForm().getForm(),
            record = form.getRecord();

        form.updateRecord(record);

        // TODO: look for getter
        if (record.phantom === true) { // neuer Eintrag
            this.getBestellungenStore().add(record);
        } else {
            // update is a custom overwrite!
            this.getBestellungenStore().update(record);
        }

        form.reset();
        this.createEmptyRecordAndBindToForm();
    },

    /**
     * Ausgewählten Eintrag in das Formular laden um ihn zu aktualisieren.
     *
     * @param {Ext.grid.View} view GridPanel View.
     * @param {EED.model.Bestellung} record Ausgewähltes Bestellung Model aus dem Grid.
     */
    updateBestellung: function (view, record) {
        this.loadFormWithRecord(record);
    }
});