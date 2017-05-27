module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
        options: {
          sourceMap: true
        },
        dist: {
          files: {
            'style.css': '*.sass'
          }
        }
      },
    jshint: {
      all: ['*.js']
    }
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'jshint']);

};
