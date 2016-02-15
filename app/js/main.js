require([
    'backbone',
    'underscore',
    'router/router'
], function(Backbone, _, AppRouter) {
    "use strict";
    
    new AppRouter();

    Backbone.history.start();

    if (!location.hash) {
        Backbone.history.navigate('!/', {
            replace: true
        });
    }
});