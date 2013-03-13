Ext.define('EED.view.bestellung.BestellungUebersicht', {
    extend: 'Ext.container.Container',

    requires:[
        'EED.view.bestellung.BestellungFormular',
        'EED.view.bestellung.BestellungGrid'
    ],

    id: 'bestellung-uebersicht',

    alias: 'widget.bestellung-uebersicht',

    title: 'Bestellung Übersicht',

    padding: 20,

    initComponent: function () {
        this.items = this.buildItems();

        this.callParent(arguments);
    },

    buildItems: function () {
        return [
            {
                xtype: 'bestellung-bestellungformular'
            },
            {
                xtype: 'bestellung-bestellunggrid'
            }
        ]
    }
});