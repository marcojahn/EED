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
                return Ext.String.format('<a href="{0}" target="_blank">{1}</a>', value, value)
            }
        }}
    ],

    tbar: [
        {
            text: 'Lieferant hinzufügen',
            iconCls: 'lieferant-add',
            handler: function () {
                // TODO zugriff besser

                var rowediting = Ext.ComponentManager.get('lieferant-lieferantengrid').plugins[0];
                var store = Ext.StoreManager.get('Lieferanten');

                rowediting.cancelEdit();

                // create lieferant
                var r = Ext.create('EED.model.Lieferant', {
                    lieferant: 'Lieferant-Name',
                    adresse: '',
                    telefon: '',
                    url: 'http://www.google.de'
                });

                store.insert(0, r);
                rowediting.startEdit(0, 0);
            }
        },
        {
            text: 'Lieferant löschen',
            itemId: 'lieferant-remove',
            iconCls: 'lieferant-remove',
            handler: function () {
                // TODO zugriff besser

                var sm = Ext.ComponentManager.get('lieferant-lieferantengrid').getSelectionModel();
                var rowediting = Ext.ComponentManager.get('lieferant-lieferantengrid').plugins[0];
                var store = Ext.StoreManager.get('Lieferanten');

                rowediting.cancelEdit();
                store.remove(sm.getSelection());
                if (store.getCount() > 0) {
                    sm.select(0);
                }
            },
            disabled: true
        }
    ],

    selType: 'rowmodel',

    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToMoveEditor: 1,
            autoCancel: false
        })
    ],

    listeners: {
        'selectionchange': function (view, records) {
            // TODO zugriff besser

            Ext.ComponentManager.get('lieferant-lieferantengrid').down('#lieferant-remove').setDisabled(!records.length);
        }
    }
});