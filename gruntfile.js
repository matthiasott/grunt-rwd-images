module.exports = function(grunt) {
  grunt.initConfig({

    /* grunt-imageoptim configuration */
    responsive_images: {
      default: {
        options: {
          sizes: [
            {
              width: 1600,
              quality: 60
            },
            {
              width: 1280,
              quality: 70
            },
            {
              width: 1024,
              quality: 70
            },
            {
              width: 960,
              quality: 70
            },
            {
              width: 800,
              quality: 70
            },
            {
              width: 640,
              quality: 70
            },
            {
              width: 480,
              quality: 70
            },
            {
              width: 320,
              quality: 70
            }
          ]
        },
        files: [{
          expand: true,
          src: ['img-*.{jpg,gif,png}'],
          cwd: './src/img',
          dest: './dist/img/original'
        }]
      },
      /* --> add more subtasks here! */
    },

    /* copy original files to `optimized` folder */
    copy: {
      main: {
        files: [
          // makes all src relative to cwd 
          {expand: true, cwd: 'dist/img/original/', src: ['**'], dest: 'dist/img/optimized/'},
        ],
      },
    },

    /* grunt-imageoptim configuration */
    imageoptim: {
      default: {
        options: {
          jpegMini: false,
          imageAlpha: true,
          quitAfter: true
        },
        files: [{
          src: ['dist/img/optimized']
        }]
      }
    },

    /* watch for changes / new images and start default task */
    watch: {
      images: {
        files: ['src/img/**/*'],
        tasks: ['default'],
        options: {
          spawn: false,
          atBegin: true,
        },
      },
    },
  });
  
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['responsive_images', 'copy', 'imageoptim']);
};