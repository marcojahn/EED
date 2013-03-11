Ext.onReady(function () {

    Ext.data.Connection.timeout = 5000;
    Ext.Ajax.timeout = 5000;

    Ext.ns('EED.application');

    Ext.application({
        name: 'EED',
        autoCreateViewport: false,

        requires: [
            'EED.view.user.UsernameWindow',
            'EED.view.Viewport'
        ],

        controllers: [
            'EED.controller.Lieferant',
            'EED.controller.Bestellung'
        ],

        onBeforeLaunch: function () {
            if (!Ext.state.Manager.get('username', false)) {
                var usernameWindow = Ext.widget('user-usernamewindow');

                usernameWindow.on('usernamevalid', function () {
                    Ext.app.Application.prototype.onBeforeLaunch.call(this);
                }, this);
                usernameWindow.on('usernameinvalid', function () {
                });

                usernameWindow.show();
            } else {
                Ext.app.Application.prototype.onBeforeLaunch.call(this);
            }
        },

        launch: function () {
            Ext.create('EED.view.Viewport');
        }
    })
});