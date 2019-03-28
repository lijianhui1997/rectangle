module.exports = function (grunt) {
  grunt.initConfig({
    htmlhint: {
      options: {
                htmlhintrc: '.htmlhintrc'
                        
      },
            src: ['*.html']
                  
    },
    csslint: {
      options: {
                csslintrc: '.csslintrc'
                        
      },
            src: ['*.css']
                  
    },
    eslint: {
      options: {
                configFile: '.eslintrc.json'
                        
      },
            target: ['*.js']
                  
    },
    mocha: {
      test: {
                src: ['test/index.html'],
                      
      },
      options: {
                run: true,
                        reporter: 'Spec'
                                
      }
    }                
  });

    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-mocha');

     // grunt.registerTask('default', ['eslint']);
     grunt.registerTask('unitTest', ['mocha']);
      
};
