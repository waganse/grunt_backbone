// Watch updates and run predefined tasks
//
// grunt-contrib-watch: <https://github.com/gruntjs/grunt-contrib-watch>

'use strict';

module.exports = {

  // Reload Grunt config
  grunt: {
    files: [
      'Gruntfile.js',
      'grunt/*.js'
    ],
    options: {
      reload: true
    }
  },

  // Inject Bower components
  bower: {
    files: ['bower.json'],
    tasks: ['wiredep']
  },

  // Validate JavaScript
  js: {
    files: ['<%= path.scripts %>/**/*.js'],
    tasks: ['newer:jshint', 'requirejs']
  },

  // Handle CSS files
  css: {
    files: ['<%= path.css %>/**'],
    tasks: ['newer:autoprefixer', 'newer:csslint']
  },

  // Generate CSS sprites
  sprite: {
    files: ['<%= path.sprites %>/*.png'],
    tasks: ['sprite']
  },

  // Generate font icons
  webfont: {
    files: ['<%= path.glyphs %>/*.svg'],
    tasks: ['webfont']
  },

  // Compile Stylus
  stylus: {
    files: ['<%= path.styles %>/**'],
    tasks: ['stylus']
  },

  // Compile HTML with SSI
  ssi: {
    files: ['<%= path.markups %>/**/*.html'],
    tasks: ['ssi']
  }

};
