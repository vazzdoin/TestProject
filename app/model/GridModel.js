Ext.define('MyApp.model.GridModel',{
	extend: 'Ext.data.Model',
	alias: 'model.GridModel',
	fields:[
		{name: 'name'/*, type:'int'*/},
		{email: 'email'},
		{phone: 'phone'}
	]
})