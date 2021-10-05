Ext.define('MyApp.view.main.SearchForm', {
	extend: 'Ext.form.Panel',
	xtype: 'SearchForm',
	title: "Form",
	defaultType: 'textfield',
	items: [
		{
			fieldLabel: "First Name",
			name: 'firstName'
		},
		{
			fieldLabel: "Last Name",
			name: 'lastName'
		},
		{
			fieldLabel: "Email",
			name: 'email'
		},
		{
			fieldLabel: "DOB",
			name: 'dob',
			xtype: 'datefield'
		}
	],
	buttons: [
		{
			text: 'Submit',
			handler: function() {
				var data =  this.up('form');
				console.log("Form Data : "+data.getForm().getValues());
			}
		}
	]
})