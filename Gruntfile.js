module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      local: {
        options: {
            port: 9007,
            base: '.'
        }
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'css/app.css': 'scss/app.scss',       // 'destination': 'source'
        }
      }
    },
    watch : {
      sass: {
        files: ['scss/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect']);

};