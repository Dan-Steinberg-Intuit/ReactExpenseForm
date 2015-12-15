module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);
	grunt.initConfig({
		clean: ["dist", "tmp"],

		browserify: {
			options: {
				transform: [ require("grunt-react").browserify ]
			},
			files: {
				src: ["dev/js/**/*.js"],
				dest: "dist/js/main.js"
			},
		},

		copy: {
     		main: {
         		files: [
           			// Copy HTML
           			{expand: true, flatten: true, src: ["dev/index.html"], dest: "dist/", filter: "isFile"},
           			// Copy CSS
           			{expand: true, flatten: true, src: ["dev/css/**"], dest: "dist/css", filter: "isFile"},
           			// Copy images
           			{expand: true, flatten: true, src: ["dev/img/**"], dest: "dist/img", filter: "isFile"},
				] 
			}
		},

	    express: {
	      all: {
	        options: {
	          port:9000,
	          hostname: 'localhost',
	          bases: ['./dist'],
	          livereload: true
	        }
	      }
	    },

	    watch: {      
	      files: ['dev/**'],
	      tasks: ["clean",  "browserify", "copy"],
	      options: {
	        livereload: true,
	      },
	    }
	});

	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.registerTask("default", ["clean", "browserify", "copy"]);
  	grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.loadNpmTasks('grunt-express');

  	grunt.registerTask('server', ['express', 'watch']);
};