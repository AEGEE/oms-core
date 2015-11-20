module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    mocha_istanbul: {
      coverage: {
        src: 'test'
      }
    },
    coveralls: {
      default: {
        src: 'coverage/*.info'
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },
    jshint: {
      options: {
        eqnull: true,
        newcap: true,
        indent: 2,
        noempty: true,
        node: true
      },
      all: {
        src: ['*.js', 'test/**/*.js']
      }
    },
    jsonlint: {
      all: {
        src: ['*.json']
      }
    },
    gjslint: {
      options: {
         flags: [
           '--disable 220' // ignore missing documentation
         ],
        reporter: {
          name: 'console'
        }
      },
      all: {
        src: ['*.js', 'test/**/*.js'],
      }
    },
    fixjsstyle: {
      options: {
        reporter: {
          name: 'console'
        }
      },
      all: {
        src: ['*.js', 'test/**/*.js'],
      }
    }
  });

  // Load modules with task definitions
  grunt.loadNpmTasks('grunt-gjslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.loadNpmTasks('grunt-coveralls');

  // Register custom tasks
  grunt.registerTask('default', ['jshint', 'gjslint', 'coverage', 'coveralls']);
  grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
};