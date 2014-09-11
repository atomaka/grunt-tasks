module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['/tmp/test/*'],
        tasks: 'fixwhitespace',
        options: {
          spawn: false,
        },
      },
    },
    trimtrailingspaces: {
      main: {
        src: ['<%= cwd %>/**/*'],
        options: {
          filter: 'isFile',
          encoding: 'utf8',
          failIfTrimmed: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-trimtrailingspaces');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', []);
  grunt.loadTasks('tasks');
};
