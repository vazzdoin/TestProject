Ext.define('MyApp.view.main.GridTest',{
	extend: 'Ext.grid.Panel',
	xtype: "GridTest",
	title: "Grid Test Table",
	// store: {type: 'GridStore'}, //Static data store
	store: {type: 'GridStoreApi'}, // Dynamic data from API
	columns: [
		{text:"Name", dataIndex: 'name', flex: 1, 
			filter: {
				type: 'string'
			}
		},
		{text:"Email", dataIndex: 'email', flex: 1},
		{text:"Phone", dataIndex: 'phone', flex: 1},
		{text:"Website", dataIndex: 'website', flex: 1}
	],
	height: 300,
	width: 800,
	plugins: 'gridfilters',
	id: 'gridTest',
	selModel: {
		injectCheckbox: 'first',
		checkOnly: true,
		model: 'SIMPLE',
		type: 'checkboxmodel'
	},
	buttons: [
		{
			text: "Select All",
			handler: function() {
				Ext.getCmp('gridTest').getSelectionModel().selectAll();
			}
		},
		{
			text: 'Remove All',
			handler: function() {
				Ext.getCmp('gridTest').getSelectionModel().deselectAll();
			}
		},
		{
			text: 'Get Selected Data',
			handler: function() {
				var data = Ext.getCmp('gridTest').getSelectionModel().getSelection();
				console.log(data);
			}
		}
	]
});