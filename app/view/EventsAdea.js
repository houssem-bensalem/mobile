/**
 * @class adeaMobile.view.EventsAdea
 * @extends Object
 * Description
 */
Ext.define('adeaMobile.view.EventsAdea', {
    extend: 'Ext.navigation.View',
    xtype: 'eventsadeapanel',
	
    config: {
        title: 'Adea Events',
		items : {
			xtype: 'list',
			itemTpl: '{title}',
			title: 'Adea Events',
			store: Ext.create('adeaMobile.store.EventsAdea')
		}
    }
});