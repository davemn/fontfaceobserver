function makeLocals(grunt, srcFiles){
  return function(){
    var src = '';
    for(var i=0; i < srcFiles.length; i++){
      src += grunt.file.read('./src/'+srcFiles[i]) + '\n';
    }
    
    return { srcFiles: src };
  };
}

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['dist'],
    
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
        src: ['src/**/*.js']
      }
    },
    
    /* Underscore templates, for using Grunt templates in plain JS files */
    template: {
      full: {
        options: { data: makeLocals(grunt, ['dom.js', 'ruler.js', 'observer.js']) },
        files: { 'dist/FontFaceObserver.js': ['FontFaceObserver.js.template'] }
      }
    },
    
    uglify: {
      dist: {
        files: { 'dist/FontFaceObserver.min.js': ['dist/FontFaceObserver.js'] }
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  
  grunt.registerTask('strict', ['clean', 'jshint', 'template', 'uglify']);
  grunt.registerTask('default', ['clean', 'template', 'uglify']);
};