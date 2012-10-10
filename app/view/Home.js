/**
 * @class adeaMobile.view.Home
 * @extends Object
 * Description
 */
Ext.define('adeaMobile.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',

    config: {
        title: 'Home',
		iconCls: 'home',
		
		cls: 'home',
		scrollable: true,
		styleHtmlContent:true,
		
		html: [
            '<img src="http://www.adeanet.org/adeaPortal/images/img_charte/fr_12.jpg" width="360px"/>',
            '<h3>Welcome to adea portal</h3>'


        ].join("")
    }
});