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
		}
	});

	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.registerTask("default", ["clean", "browserify", "copy"]);
};