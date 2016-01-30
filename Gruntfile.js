module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({
    
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "style/decheryweb.css" : "style/decheryweb.less"
                }
            }
        },

		jshint: {
			// all: ['js/*.js']
		},

        watch: {
            styles: {
                files: ['style/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true,
                    livereload: true
                }
            }
        }
        
    });

    grunt.registerTask('default', ['less','watch']);

};
