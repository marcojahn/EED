Ext.define('EED.common.data.Store', {
    extend: 'Ext.data.Store',

    constructor: function () {
        this.callParent(arguments);
        this.getProxy().on('exception', function (proxy, response, options) {
            if (this.onProxyException) {
                this.onProxyException.call(this, proxy, response, options);
            } else {
                this.rejectChanges();

                if (window.console) {
                    console.log(proxy, response, options);
                }
                Ext.Msg.show({
                    title: 'Error',
                    msg: 'Error</br>' +
                        'reason: ' + response.statusText + '<br />' +
                        'timedout: ' + response.timedout + '<br />' +
                        'service: ' + proxy.url,
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });

                // options.getRecords()[0].getId()
            }
        }, this);
    }
});