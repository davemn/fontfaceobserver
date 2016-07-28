module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['dist'],
    
    // copy: {
    //   dist: {
    //     files: [
    //       { expand: true, dest: 'dist', src: ['index.{html,js}'] },
    //       { expand: true, dest: 'dist/pages', cwd: 'pages', src: ['*.html', '*.css', '*.js', '*.obj', '*.png'] },
    //     ]
    //   }
    // },
        
    jshint: {
      options: {
        asi      : true,
        browser  : true,
        browserify: true,
        eqeqeq   : false,
        eqnull   : true,
        esversion: 6,
        expr     : true,
        jquery   : true,
        latedef  : true,
        laxbreak : true,
        nonbsp   : true,
        strict   : true,
        undef    : true,
        unused   : false,
        devel    : true
        /* globals: { FontFaceObserver: false } */
      },
      site: {
        src: ['dom.js', 'ruler.js', 'FontFaceObserver.js']
      }
    },
    
    browserify: {
      site: {
        files: {
          'dist/bundle.js': ['dom.js', 'ruler.js', 'FontFaceObserver.js']
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  
  grunt.registerTask('strict', ['clean', 'jshint', 'browserify']);
  
  grunt.registerTask('default', ['clean', 'browserify']);
};