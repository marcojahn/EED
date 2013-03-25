Ext.onReady(function () {
    Ext.override(Ext.data.proxy.Ajax, {
        actionMethods: {
            create : 'POST',
            read   : 'GET',
            update : 'PUT',
            destroy: 'DELETE'
        },

        startParam: undefined,
        limitParam: undefined,
        pageParam: undefined,
        sortParam: undefined,
        groupParam: undefined,
        filterParam: undefined,

        buildUrl: function(request) {
            var me        = this,
                operation = request.operation,
                records   = operation.records || [],
                record    = records[0],
                format    = me.format,
                url       = me.getUrl(request),
                id        = record ? record.getId() : operation.id;

            if (operation.action === 'destroy' && id) {
                if (!url.match(/\/$/)) {
                    url += '?deleteId=';
                }

                url += id;
            }

            if (format) {
                if (!url.match(/\.$/)) {
                    url += '.';
                }

                url += format;
            }

            request.url = url;

            return me.callParent(arguments);
        }
    });

    Ext.override(Ext.data.proxy.Rest, {
        startParam: undefined,
        limitParam: undefined,
        pageParam: undefined,
        sortParam: undefined,
        groupParam: undefined,
        filterParam: undefined
    });
});