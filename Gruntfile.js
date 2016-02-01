module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
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
                    "style/decheryweb.css" : "style/*.less"
                }
            }
        },

        uglify: {
			my_target: {
				files: {
					'js/index.min.js': 'js/index.js'
				},
                options: {
                    'report': 'min'
                }
			}
		},

		jshint: {
			// all: ['js/*.js']
		},

        watch: {
            styles: {
                files: ['style/*.less', 'js/index.js'], // which files to watch
                tasks: ['less', 'uglify'],
                options: {
                    nospawn: true,
                    livereload: true
                }
            }
        }
        
    });

    grunt.registerTask('default', ['less','watch']);

};
