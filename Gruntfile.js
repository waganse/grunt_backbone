// Grunt base configuration
//
// This Gruntfile.js is based on "load-grunt-config" module.
// Config files are separated and put into `grunt/` directory.
// load-grant-config: <https://github.com/firstandthird/load-grunt-config>

'use strict';

module.exports = function (grunt) {

  // Display the execution time.
  require('time-grunt')(grunt);

  // Initialize with "load-grunt-config".
  require('load-grunt-config')(grunt, {

    // Define variables for grunt config here.
    config: {
      path: {
        app:        'app',
        dist:       'dist',
        distIgnore: '**/_*/**',     // Excluded directories or files of distribution, e.g. Sass directory.
        tmp:        '.tmp/dist',
        markups:    'app',
        includes:   'app/inc',
        styles:     'app/_stylus',
        scripts:    'app/js',
        images:     'app/img',
        sprites:    'app/img/_sprites',
        glyphs:     'app/img/_glyphs',
        html:       'app',
        css:        '.tmp/dist/css',
        js:         '.tmp/dist/js'
      }
    }

  });

  // Load additional plugins.
  grunt.loadNpmTasks('main-bower-files');

};
