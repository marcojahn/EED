Ext.define('EED.view.bestellung.BestellungFormular', {
    extend: 'Ext.form.Panel',

    id: 'bestellung-bestellungformular',

    alias: 'widget.bestellung-bestellungformular',

    title: 'Neue Bestellung',

    bodyPadding: 20,
    autoHeight: true,
    width: 500,

    defaults: {
        anchor: '100%',
        labelWidth: 150,
        allowBlank: false,
        msgTarget: 'side'
    },

    initComponent: function () {
        this.items = this.buildItems();

        this.buttons = this.buildButtons();

        this.callParent(arguments);
    },

    buildItems: function () {
        return [
            {
                xtype: 'combobox',
                name: 'lieferant',
                fieldLabel: 'Lieferant',
                store: 'Lieferanten',
                queryMode: 'local',
                displayField: 'lieferant',
                valueField: 'lieferant'
            },
            {
                xtype: 'textfield',
                name: 'bestellung',
                fieldLabel: 'Bestellung'
            },
            {
                xtype: 'numberfield',
                name: 'preis',
                fieldLabel: 'Preis',
                minValue: 0,
                hideTrigger: true,
                keyNavEnabled: false,
                mouseWheelEnabled: false
            },
            {
                xtype: 'textfield',
                name: 'besteller',
                fieldLabel: 'Besteller'
            }
        ]
    },

    buildButtons: function () {
        return [
            {
                text: 'Bestellung eintragen',
                formBind: true,
                disabled: true,
                action: 'bestellungsave'
            }
        ];
    }
});