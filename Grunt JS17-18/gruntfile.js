module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
     
      dist: {
        src: ['js/libs/*.js'        
        ],

        dest: 'js/script.main.js'
      },
       css: {
                src: ['css/styles/*.css'],
                dest: 'css/style.css'
            }
    },
    uglify: {
    build: {
        src: 'js/script.main.js',
        dest: 'js/script.main.min.js'
    }

  
    },
   
    watch: {
    scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        },
    }
},
cssmin: {
            dist: {
                src: 'css/style.css',
                dest: 'css/style.min.css'
            }
        },

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

 
  

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};