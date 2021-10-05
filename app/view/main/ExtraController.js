Ext.define('MyApp.view.main.ExtraController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.extra',
	init: function() {
		this.control({
			'#clickButton' : {
				click: 'onClickPress'
			}
		})
	},
	onClickPress: function() {
		alert("Button Cliked");
	}
});