Ext.define('EED.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'EED.view.lieferant.LieferantVerwaltung'
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
                collapsible: true,
                title: 'Navigation',
                width: 250,

                // could use a TreePanel or AccordionLayout for navigational items
                //xtype : 'navigation-gridtree'
                html: 'navigation'

            },
            {
                region: 'center',
                xtype: 'tabpanel', // TabPanel itself has no title
                activeTab: 1, // First tab active by default

                items: [
                    {
                        title: 'Bestellungen',
                        html: 'panel 1'
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
                    closable: true
                }
            }
        ];

        this.callParent(arguments);
    }
});