module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      build: {
        src: ['src/sweeten.js'],
        dest: 'build/sweeten.js'
      }
    },
    min: {
      dist: {
        src: ['src/sweeten.js'],
        dest: 'build/sweeten.min.js'
      }
    },
    watch: {
      files: ['src/sweeten.js'],
      tasks: 'build'
    }
  });
  
  grunt.registerTask('build', 'concat min');
  
};