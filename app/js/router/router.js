define([
    'backbone',
    'underscore',
    'view/view',
    'model/model'
], function(Backbone) {
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
            console.log('initialize');
        },

        all: function() {
            console.log('alla');
        },

        page: function(page) {
            console.log(page);
        }

    });

    return AppRouter;
});