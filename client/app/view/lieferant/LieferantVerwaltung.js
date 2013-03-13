Ext.define('EED.view.lieferant.LieferantVerwaltung', {
    extend: 'Ext.container.Container',

    requires: [
        'EED.view.lieferant.LieferantenGrid'
    ],

    id: 'lieferant-lieferantverwaltung',

    alias: 'widget.lieferant-lieferantverwaltung',

    title: 'Lieferanten Verwaltung',

    padding: 20,

    initComponent: function () {
        this.items = this.buildItems();

        this.callParent(arguments);
    },

    buildItems: function () {
        return [
            {
                xtype: 'lieferant-lieferantengrid'
            }
        ];
    }
});