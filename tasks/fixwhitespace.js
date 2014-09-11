module.exports = function(grunt) {
  grunt.registerTask('fixwhitespace', function() {
    var cwd = grunt.option('cwd');
    grunt.config.set('cwd', cwd);
    grunt.task.run('trimtrailingspaces');
  });
};
