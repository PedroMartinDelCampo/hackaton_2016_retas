module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      local: {
        options: {
            port: 9007,
            base: '.'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-connect');

  grunt.registerTask('default', ['connect']);

};