Ext.define('EED.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'EED.view.lieferant.LieferantVerwaltung',
        'EED.view.bestellung.BestellungUebersicht'
    ],

    layout: 'border',

    initComponent: function () {
        this.items = [
            {
                region: 'north',
                title: false,
                bodyPadding: 10,
                html: '<h1 class="app-headline">Eschborn Essensbestellung</h1>',
                border: 0
            },
            {
                region: 'south',
                title: '&copy; 2013 Marco Jahn & Remko Plantenga',
                split: false
            },
            {
                region: 'west',
                collapsed: true,
                collapsible: true,
                title: 'Navigation',
                width: 250,

                html: 'navigation'
            },
            {
                region: 'center',
                xtype: 'tabpanel', // TabPanel itself has no title
                activeTab: 0, // First tab active by default

                items: [
                    {
                        xtype: 'bestellung-uebersicht'
                    },
                    {
                        xtype: 'lieferant-lieferantverwaltung'
                    },
                    {
                        title: 'DEV',
                        items: [{
                            xtype: 'button',
                            text: 'Delete Cookie',
                            handler: function () {
                                Ext.state.Manager.clear('username');
                                window.location.reload();
                            }
                        }]
                    }
                ],

                defaults: {
                    closable: true // all children are closeable by default
                }
            }
        ];

        this.callParent(arguments);
    }
});