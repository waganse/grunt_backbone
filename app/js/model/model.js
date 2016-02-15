define([
    'jquery',
    'backbone',
    'underscore',
], function($, Backbone) {
    "use strict";
    
    var ItemCollection,
        ItemModel;

    ItemModel = Backbone.Model.extend();

    ItemCollection = Backbone.Collection.extend({
        api: '',

        model: ItemModel,

        url: function() {
            return this.api;
        },

        parse: function(response) {
            if (response.error) {
                return response;
            }

            return response.data;
        }
    });

    return {
        ItemModel: ItemModel,
        ItemCollection: ItemCollection
    };
});