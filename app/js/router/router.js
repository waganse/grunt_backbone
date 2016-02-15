define([
    'backbone',
    'view/view',
    'model/model'
], function(Backbone, Views, Models) {
    "use strict";

    var AppRouter;

    AppRouter = Backbone.Router.extend({
        appView: null,

        itemCollection: null,

        routes: {
            '': 'all',
            '!': 'all',
            '!/': 'all',
            '!/:page(/)': 'page'
        },

        initialize: function() {
            if (this.appView) {
                this.appView.render();
            } else {
                this.itemCollection = new Models.ItemCollection();
                this.appView = new Views.AppView();
            }
        },

        all: function() {
            console.log('all');
        },

        page: function(page) {
            console.log(page);
        }

    });

    return AppRouter;
});