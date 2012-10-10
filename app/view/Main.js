Ext.define("adeaMobile.view.Main", {
    extend: 'Ext.tab.Panel',

    config: {
        tabBarPosition: 'bottom',

        items: [
			{
				xtype: 'homepanel'
			},
			{
				xtype: 'tabpanel',
				title: 'News',
				iconCls: 'star'
			},
			{
				xtype: 'eventspanel'
			},
			{
				xtype: 'tabpanel',
				title: 'Publications',
				iconCls: 'bookmarks'
			},
			{
				xtype: 'tabpanel',
				title: 'Search',
				iconCls: 'search'
			}
        ]
    }
});
