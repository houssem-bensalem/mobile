/**
 * @class adeaMobile.view.Events
 * @extends Object
 * Description
 */
Ext.define('adeaMobile.view.Events', {
    extend: 'Ext.tab.Panel',
	xtype: 'eventspanel',
	
	config: {
		ui: 'light',
    	title: 'Events',
		iconCls: 'calendar2',
		scrollable: true,
		tabBar: {
			layout: {
				pack: 'center'
			}
		},
		defaults: {
			scrollable: true
		},
		activeTab: 1,
		
		items : [
			{
				xtype: 'eventsadeapanel'
			},
			{
				xtype: 'eventsotherspanel'
			}
		]
    }
});