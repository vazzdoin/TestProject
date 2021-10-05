Ext.define('MyApp.view.main.ExtraView', {
	extend: 'Ext.container.Container',
	xtype: 'ExtraView',
	controller: 'extra',
	items: [
		{
			title: 'Extra tab',
			html: 'New tab content data.'
		},
		{
			xtype: 'button',
			name: 'ClickButton',
			itemId: 'clickButton',
			text: "Click"
		},
		{
			items: [{
            	xtype: 'GridTest'
        	}] 
		},
		{
			items: [{
            	xtype: 'SearchForm'
        	}] 
		}
	]
});
