/**
 * @class adeaMobile.store.EventsOthers
 * @extends Object
 * Description
 */
Ext.define('adeaMobile.store.EventsOthers', {
    extend: 'Ext.data.Store',
    
    config: {
        autoLoad: true,
		fields: ['title', 'author', 'content'],
		root: {
			leaf: false
		},
		proxy: {
			type: 'jsonp',
			url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
			reader: {
                   type: 'json',
                   rootProperty: 'responseData.feed.entries'
               }
		}
    }
});