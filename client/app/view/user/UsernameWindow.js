Ext.define('EED.view.user.UsernameWindow', {
    extend: 'Ext.window.Window',

    id: 'user-usernamewindow',
    alias: 'widget.user-usernamewindow',

    title: 'Username',
    height: 160,
    width: 300,
    layout: 'fit',

    initComponent: function () {
        this.loginForm = this.buildForm();

        this.items = [
            this.loginForm
        ];

        this.callParent(arguments);

        this.addEvents('usernamevalid', 'usernameinvalid');
    },

    buildForm: function () {
        var me = this; // TODo replace

        return {
            xtype: 'form',
            header: false,
            layout: 'anchor',
            id: 'userlogin',
            defaults: {
                anchor: '100%',
                labelWidth: 100,
                listeners: {
                    specialkey: function (field, event) {
                        if (event.getKey() == event.ENTER) {
                            this.up('#userlogin').submit();
                        }
                    }
                }
            },
            bodyPadding: '20 10',
            defaultType: 'textfield',
            items: [
                {
                    fieldLabel: 'Username:',
                    name: 'username',
                    allowBlank: false,
                    value: Ext.state.Manager.get('username', '')
                }
            ],
            submit: function () {
                var form = this.getForm(),
                    userNameField = form.findField('username');

                if (form.isValid()) {
                    Ext.state.Manager.set('username', userNameField.getValue());
                    me.fireEvent('usernamevalid');
                    me.close();
                } else {
                    me.fireEvent('usernameinvalid');
                }
            },
            buttons: [{
                text: 'Login',
                formBind: true,
                disabled: true,
                handler: function () {
                    this.up('#userlogin').submit();
                }
            }]
        }
    }
});