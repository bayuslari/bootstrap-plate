const sass = require('node-sass');

module.exports = function(grunt){
  grunt.initConfig({
    sass: {
      options: {
        style: 'compressed',
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: {
          'assets/css/style.min.css': ['assets/scss/style.scss']
        }
      }
    },
    cssmin: {  
      sitecss: {  
        options: {  
          banner: '/* My minified plugin css file */',
          sourceMap: true
        },
        files: {  
          'assets/css/plugin.min.css': [  
              'assets/css/plugins/owl.carousel.min.css',
              'assets/css/plugins/select2.min.css'
            ]
        }
      }  
    },
    uglify: {
      options: {  
          compress: true,
          sourceMap: true
      },  
      build: {
        files: {
          'assets/js/app.min.js': ['assets/js/app.js'],
          'assets/js/plugin.min.js': [ 'assets/js/plugins/bootstrap.min.js', 'assets/js/plugins/owl.carousel.min.js', 'assets/js/plugins/select2.min.js']
        }
      }
    },
    codekit: {
      files: {
        src: ['assets/kit/**/*.kit'],
        dest: ''
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      cssmin: {
        files: ['assets/css/**/*'],
        tasks: ['cssmin'],
        options: { livereload: true },
      },
      scss: {
        files: ['assets/scss/**/*'],
        tasks: ['sass'],
        options: { livereload: true },
      },
      uglify: {
        files: ['assets/js/**/*'],
        tasks: ['uglify'],
        options: { livereload: true },
      },
      codekit: {
        files: ['assets/kit/**/*'],
        tasks: ['codekit'],
        options: { livereload: true },
      },
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: '',
          hostname: '0.0.0.0',
          protocol: 'http',
          livereload: true
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['connect','watch']);
  require('load-grunt-tasks')(grunt);
}
