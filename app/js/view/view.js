define([
    'jquery',
    'backbone',
    'underscore'
], function($, Backbone, _) {
    "use strict";
    
    var AppView;

    AppView = Backbone.View.extend({

        el: $('#container'),

        events: {
            'click .js-click': 'onClickEl'
        },

        initialize: function() {
            _.bindAll(this, 'render');
            this.render();
        },

        render: function() {
        },

        onClickEl: function() {
        },

    });

    return {
        AppView: AppView
    };
});