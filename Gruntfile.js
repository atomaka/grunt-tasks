module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    trimtrailingspaces: {
      main: {
        src: ['/tmp/test/*'],
        options: {
          filter: 'isFile',
          encoding: 'utf8',
          failIfTrimmed: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-trimtrailingspaces');

  grunt.registerTask('default', []);
  grunt.registerTask('fixwhitespace', ['trimtrailingspaces']);
};
