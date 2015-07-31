/*jshint node:true */

module.exports = function(grunt) {
  'use strict';

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      all: 'dist'
    },

    cssmin: {
      all: {
        files: {
          'dist/main.css': 'src/*.css'
        }
      }
    },

    copy: {
      all: {
        files: [
          {
            cwd: 'src/',
            src: ['*.{html,jpg,png}'],
            dest: 'dist/',
            expand: true
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('foo', function() {
    console.log('I am in a foo!');
  });

  grunt.registerTask('bar', function() {
    console.log('I am in a bar!');
  });

  grunt.registerTask('foobar', ['foo', 'bar']);

  grunt.registerTask('build', [
    'clean',
    'cssmin',
    'copy',
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};