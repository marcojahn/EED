Ext.onReady(function () {

    // apply cookie provider
    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

    // enable CORS
    // enabling CORS uses a "pre-flight" request
    // http://www.w3.org/TR/cors/#resource-preflight-requests
    // http://thelab.athome-training.com/tutoriel/ajax-cross-domain-on-jersey-restfull-webservices -> Cross origin resource sharing
    Ext.data.Connection.prototype.useDefaultXhrHeader = false;
    // Can also be specified in the request options
    //Ext.Ajax.cors = true;

    Ext.Ajax.defaultHeaders = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept-Charset': 'UTF-8'
    };

    Ext.ns('EED.application');

    Ext.application({
        name: 'EED',
        autoCreateViewport: false,

        requires: [
            'EED.view.user.UsernameWindow',
            'EED.view.Viewport'
        ],

        controllers: [
            'EED.controller.Lieferant'
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