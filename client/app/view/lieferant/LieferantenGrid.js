Ext.define('EED.view.lieferant.LieferantenGrid', {
    extend: 'Ext.grid.GridPanel',

    requires: [
        'EED.store.Lieferanten'
    ],

    id: 'lieferant-lieferantengrid',

    alias: 'widget.lieferant-lieferantengrid',

    store: 'Lieferanten',

    title: 'Lieferantenliste',

    height: 400,

    columns: [
        {header: 'id', dataIndex: 'lieferantId', editor: undefined},
        {header: 'Lieferant', dataIndex: 'lieferant', flex: 1, editor: 'textfield'},
        {header: 'Adresse', dataIndex: 'adresse', width: 250, editor: 'textfield'},
        {header: 'Telefon', dataIndex: 'telefon', width: 150, editor: 'textfield'},
        {header: 'Webseite', dataIndex: 'url', width: 150, editor: 'textfield', renderer: function (value) {
            if (value) {
                return Ext.String.format('<a href="{0}" target="_blank">{1}</a>', value, value);
            }
        }}
    ],

    tbar: [
        {
            text: 'Lieferant hinzufügen',
            iconCls: 'lieferant-add',
            action: 'lieferant-add'
        },
        {
            text: 'Lieferant löschen',
            iconCls: 'lieferant-remove',
            action: 'lieferant-remove',
            disabled: true
        }
    ],

    selType: 'rowmodel',

    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToMoveEditor: 1,
            autoCancel: false,
            pluginId: 'rowediting'
        })
    ]
});