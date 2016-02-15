define([
    'jquery',
    'backbone',
    'underscore',
    'const'
], function($, Backbone, _, CONST) {
    'use strict';

    var ItemCollection,
        ItemModel,
        TypeCollection;

    ItemModel = Backbone.Model.extend();

    ItemCollection = Backbone.Collection.extend({
        model: ItemModel,

        url: function() {
            return CONST.API_URL;
        },

        parse: function(response) {
            var res = [];

            if (response.error) {
                return response;
            }

            _.each(response.records, function(item) {
                res.push({
                    case: item.fields.Case,
                    type: item.fields.Type
                });
            });
            return res;
        }
    });

    TypeCollection = Backbone.Collection.extend({
        url: function() {
            return CONST.API_URL_TYPE;
        },

        parse: function(response) {
            var res = [];

            if (response.error) {
                return response;
            }

            _.each(response.records, function(item) {
                res.push({
                    name: item.fields.Name,
                    detail: item.fields.Details
                });
            });
            return res;
        }
    });

    return {
        ItemCollection: ItemCollection,
        ItemModel: ItemModel,
        TypeCollection: TypeCollection
    };
});