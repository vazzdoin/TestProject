/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyApp.Application',

    name: 'MyApp',

    requires: [
        // This will automatically load all classes in the MyApp namespace
        // so that application classes do not need to require each other.
        'MyApp.*'
    ],
    launch: function() {
        viewport=Ext.getCmp('viewport');
        view=Ext.create('MyApp.view.main.ExtraView');
        target=viewport.down('#viewport-target');
        target.add(view)
    },

    // The name of the initial view to create.
    mainView: 'MyApp.view.main.Main',
    autoCreateViewport: true
});
