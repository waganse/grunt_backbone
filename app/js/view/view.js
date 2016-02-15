define([
    'jquery',
    'backbone',
    'underscore',
    'model/model',
    'template'
], function($, Backbone, _, Models, JST) {
    "use strict";
    
    var AppView,
        ItemListView,
        ItemView;

    AppView = Backbone.View.extend({

        el: $('#container'),

        itemListView: null,

        timer: null,

        events: {
            'keydown .js-search-input': 'onKeydownSearch'
        },

        initialize: function() {
            _.bindAll(this, 'render');
            this.render();
        },

        render: function() {
            this.itemListView = new ItemListView({
                collection: new Models.ItemCollection()
            });
        },

        onKeydownSearch: function() {
            var self = this;

            clearTimeout(this.timer);
            this.timer = setTimeout(function() {
                self.itemListView.reset();
            }, 1000);
        }

    });

    ItemListView = Backbone.View.extend({

        itemViews: [],

        el: $('#item-list'),

        typeCollection: null,

        initialize: function() {
            _.bindAll(this, 'render', 'add');
            this.render();
        },

        render: function() {
            var self = this;

            self.typeCollection = new Models.TypeCollection();

            self.typeCollection
                .fetch({ reset: true, wait: true, dataType: 'json' })
                .done(function() {
                    self.collection
                        .fetch({ reset: true, wait: true, dataType: 'json' })
                        .done(function() {
                            self.add();
                        })
                        .fail(function(response) {
                            console.log(response);
                        });
                })
                .fail(function(response) {
                    console.log(response);
                });

        },

        add: function() {
            var self = this;
console.log(self.typeCollection.models);
console.log(self.collection.models);
            self.collection.each(function(model) {
                self.itemViews.push(new ItemView({
                    model: model
                }));
            });
        },

        reset: function() {
            _.each(this.itemViews, function(view) {
                view.close();
            });
            this.itemViews.length = 0;

            this.collection.remove(this.collection.models);
            this.$el.empty();
            this.unbind();
            this.render();
        }

    });

    ItemView = Backbone.View.extend({

        parentEl: $('#item-list'),

        initialize: function() {
            _.bindAll(this, 'render');
            this.render();
        },

        render: function() {
            this.parentEl.append(JST.item(this.model.toJSON()));
        },

        close: function() {
            this.unbind();
            this.remove();
        }

    });

    return {
        AppView: AppView,
        ItemListView: ItemListView,
        ItemView: ItemView
    };
});
