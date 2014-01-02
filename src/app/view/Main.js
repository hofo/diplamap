Ext.define('Diplamap.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Diplamap'
                },

                html: [
                    "Welcome to Diplamap, an object locator and explorer for the Digital Public Library of America."
                ].join("")
            }
        ]
    }
});
