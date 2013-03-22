Ext.onReady(function () {
    // application namespace
    Ext.ns('EED.application');

    // reduce ajax timeouts
    Ext.override(Ext.Ajax.timeout, { timeout: 5000 });
    Ext.override(Ext.data.Connection, { timeout: 5000 });
    Ext.override(Ext.data.proxy.Ajax, { timeout: 5000 });

    // apply cookie provider
    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

    // enable CORS
    // enabling CORS uses a "pre-flight" request
    // http://www.w3.org/TR/cors/#resource-preflight-requests
    // http://thelab.athome-training.com/tutoriel/ajax-cross-domain-on-jersey-restfull-webservices -> Cross origin resource sharing
    Ext.data.Connection.prototype.useDefaultXhrHeader = false;
    // Can also be specified in the request options
    // Ext.Ajax.cors = true;

    Ext.Ajax.defaultHeaders = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept-Charset': 'UTF-8'
    };
});