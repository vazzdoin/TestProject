Ext.define('MyApp.store.GridStoreApi', {
	extend: 'Ext.data.Store',
	alias: 'store.GridStoreApi',
	remoteFilter: true,
	proxy: {
		type: 'ajax',
		url: 'https://jsonplaceholder.typicode.com/users'
	},
	autoLoad: true
})