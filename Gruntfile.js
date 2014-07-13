/*global module */
module.exports = function( grunt ) {
  
  'use strict';

  grunt.initConfig({

    uglify: {
      options: {
        mangle: {
          except: ['Rundiv']
        }
      },
      dist: {
        files: {
          'build/Rundiv.min.js': 'Rundiv.js'
        }
      }
    }

  });

  // build
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('build', 'uglify');
  grunt.registerTask('default', 'build');
};