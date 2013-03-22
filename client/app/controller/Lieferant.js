Ext.define('EED.controller.Lieferant', {
    extend: 'Ext.app.Controller',

    models: ['Lieferant'],
    stores: ['Lieferanten'],

    refs: [
        {
            ref: 'lieferantengridDeleteButton',
            selector: '#lieferant-lieferantengrid button[action=lieferant-remove]'
        },
        {
            ref: 'lieferantengrid',
            selector: '#lieferant-lieferantengrid'
        }
    ],

    /**
     * Launch Methode des Controllers.
     */
    onLaunch: function () {
        // Laden der Lieferanten
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

    /**
     * Neuen Lieferanten hinzufügen.
     */
    addLieferant: function () {
        var store = this.getLieferantenStore(),
            rowediting = this.getLieferantengrid().getPlugin('rowediting');

        rowediting.cancelEdit(); // evtl. bestehenden Edit Prozess beenden

        // Neuen Lieferant erzeugen
        var r = Ext.create('EED.model.Lieferant');

        store.insert(0, r); // Lieferant an erster Stelle hinzufügen
        rowediting.startEdit(0, 0); // Edit Prozess für neuen Datensatz starten
    },

    /**
     * Lieferanten löschen.
     */
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

    /**
     * Selektion eines Mandanten aktiviert oder deaktiviert den delete Button.
     *
     * @param {Ext.selection.Model} selModel SelectionModel des Grids.
     * @param {EED.model.Lieferant[]} records Liste ausgwählter Lieferanten.
     */
    selectLieferant: function (selModel, records) {
        this.getLieferantengridDeleteButton().setDisabled(!records.length);
    }
});