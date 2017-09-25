module.exports = function(grunt) {
  
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      mustache_render: {
        options: {
          // Task global options go here 
        },
        your_target: {
          options: {
            // Target specific options go here 
          },
          files : [
            {
              expand: true,
              src: 'template/*.mustache',
              data: 'common-data.json',
              dest: 'html/',
              ext: '.html'
            }
          ]
        },
      },
      watch: {
        scripts: {
          files: ['template/**'],
          tasks: ['mustache_render'],
          options: {
            spawn: false,
          },
        },
      },
    });

    grunt.loadNpmTasks('grunt-contrib-watch')
  
    grunt.loadNpmTasks('grunt-mustache-render')
  
    // Default task(s).
    grunt.registerTask('default', ['mustache_render']);
  
  };