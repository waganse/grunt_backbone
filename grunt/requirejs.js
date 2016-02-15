// requirejs & almond
// grunt-requirejs: <https://github.com/asciidisco/grunt-requirejs>

'use strict';

module.exports = {

    main: {
        options: {
            almond: true,
            mainConfigFile: '<%= path.scripts %>/require-config.js',
            baseUrl: '<%= path.scripts %>',
            name : 'main',
            out: '<%= path.js %>/app.min.js',
            optimize: 'uglify',
            // optimize: 'none',
            preserveLicenseComments: true
        }
    }

};
