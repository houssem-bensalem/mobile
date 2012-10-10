Ext.define('adeaMobile.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            adeaEvent: 'eventsadeapanel',
			adeaOtherEvents: 'eventsotherspanel'
        },
        control: {
            'eventsadeapanel list': {
				itemtap: 'showEvent'
			},
			'eventsotherspanel list' : {
				itemtap: 'showOtherEvent'
			}
        }
    },

	showEvent: function(list, index, element, record)
	{
		this.getAdeaEvent().push({
			xtype: 'panel',
			title: record.get('title'),
			html: record.get('content'),
			scrollable: true,
			styleHtmlContent: true
		});
	},
	showOtherEvent: function(list, index, element, record)
	{
		this.getAdeaOtherEvents().push({
			xtype: 'panel',
			title: record.get('title'),
			html: record.get('content'),
			scrollable: true,
			styleHtmlContent: true
		});
	}

});