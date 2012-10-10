/**
 * @class adeaMobile.view.EventsOthers
 * @extends Object
 * Description
 */
Ext.define('adeaMobile.view.EventsOthers', {
    extend: 'Ext.navigation.View',
    xtype: 'eventsotherspanel',

    config: {
        title: 'Other Events',
		items : {
			xtype: 'list',
			itemTpl: '{title}',
			title: 'Other Events',
			store: Ext.create('adeaMobile.store.EventsOthers')
		}
    }
});