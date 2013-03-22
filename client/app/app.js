Ext.onReady(function () {

    Ext.application({
        name: 'EED',
        autoCreateViewport: false, // prevent viewport creation

        requires: [
            'EED.view.user.UsernameWindow',
            'EED.view.Viewport'
        ],

        controllers: [
            'EED.controller.Lieferant',
            'EED.controller.Bestellung'
        ],

        /**
         * Shows and handles username dialog if no cookie value is set.
         * Runs bootstrap if setting is done or exists.
         */
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
                // call parent and continue bootstrap
                Ext.app.Application.prototype.onBeforeLaunch.call(this);
            }
        },

        /**
         * Launch application and create viewport
         */
        launch: function () {
            Ext.create('EED.view.Viewport');
        }
    })
});