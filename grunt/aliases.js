// Register Grunt tasks
//
// Manage grunt tasks here instead of `grunt.registerTask`.
// Refer: <https://github.com/firstandthird/load-grunt-config#aliases>

'use strict';

var grunt = require('grunt');

module.exports = {

  // Generate precompiled resources
  compile: [
    'clean:tmp',
    'wiredep',
    'sprite',
    'webfont',
    'stylus',
    'autoprefixer',
    'requirejs'
  ],

  // Start localhost server
  serve: function (target) {
    if (target === 'dist') {
      grunt.task.run([
        'browserSync:dist'
      ]);
    }
    else {
      grunt.task.run([
        'compile',
        'ssi',
        'browserSync:app',
        'watch'
      ]);
    }
  },

  // Validate and test
  test: function (target) {
    if (target !== 'skip-compile') {
      grunt.task.run([
        'compile'
      ]);
    }
    grunt.task.run([
      'newer:csslint',
      'newer:jshint',
      'newer:jscs'
    ]);
  },

  // Build and distribute files
  build: function (target) {
    if (target !== 'skip-compile') {
      grunt.task.run([
        'compile'
      ]);
    }
    grunt.task.run([
      'clean:dist',
      'copy:dist',
      'bower',
      'imagemin',
      'useminPrepare',
      'concat',
      'cssmin',
      'uglify',
      'modernizr',
      'filerev',
      'usemin',
      'htmlmin'
    ]);
  },

  // Default `grunt` alias
  default: [
    'compile',
    'test:skip-compile',
    'build:skip-compile'
  ]

};
