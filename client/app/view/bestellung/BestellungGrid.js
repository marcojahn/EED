Ext.define('EED.view.bestellung.BestellungGrid', {
    extend: 'Ext.grid.GridPanel',

    requires: [
        'EED.store.Bestellungen'
    ],

    id: 'bestellung-bestellunggrid',

    alias: 'widget.bestellung-bestellunggrid',

    store: 'Bestellungen',

    title: 'Bestellungsübersicht',

    height: 300,
    width: 600,

    features: [{
        id: 'group',
        ftype: 'groupingsummary',
        enableGroupingMenu: false
    }],

    initComponent: function () {
        this.columns = this.buildColumns();

        this.callParent(arguments);

        this.addEvents('bestellungdelete');
    },

    buildColumns: function () {
        return [
            {
                header: 'Besteller',
                width: 100,
                dataIndex: 'besteller',
                hideable: false,
                summaryType: 'count',
                summaryRenderer: function (value, summaryData, dataIndex) {
                    return ((value === 0 || value > 1) ? '(' + value + ' Bestellungen)' : '(1 Bestellung)');
                }
            },
            {
                header: 'Bestellwunsch',
                flex: 1,
                dataIndex: 'bestellung',
                summaryRenderer: function () {return '';}
            },
            {
                header: 'Lieferant',
                width: 150,
                dataIndex: 'lieferant',
                summaryRenderer: function () {return '';}
            },
            {
                header: 'Preis',
                width: 60,
                dataIndex: 'preis',
                hideable: false,
                renderer: function (value) {
                    return Ext.util.Format.currency(value, ' €', 2, true);
                },
                summaryType: 'sum',
                summaryRenderer: function (value) {
                    return Ext.util.Format.currency(value, ' €', 2, true);
                }
            },
            {
                xtype: 'actioncolumn',
                hideable: false,
                width: 50,
                items: [
                    {
                        icon: './img/icon-delete.png',
                        tooltip: 'Löschen',
                        handler: function (grid, rowIndex, colIndex) {
                            this.fireEvent('bestellungdelete', grid, rowIndex, colIndex);
                        },
                        scope: this
                    }
                ]
            }
        ];
    }
});