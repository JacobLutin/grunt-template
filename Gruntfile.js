module.exports = function(grunt) {
	grunt.initConfig({
		coffee: {
			options: {
				bare: true
			},
			scripts: {
				expand: true,
				flatten: true,
				cwd: 'coffee/',
				src: ['*.coffee'],
				dest: 'js/',
				ext: '.js'
			}
		},
		jade: {
			compile: {
				options: {
			  		data: {
						debug: false,
						expanded: true
					},
					pretty: true
				},
				files: [{
					expand: true,
					cwd: 'jade/',
					src: ['*.jade'],
					dest: '',
					ext: '.html'
				}]
		 	}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: [{
					expand: true,
					cwd: 'sass/',
					src: ['*.scss'],
					dest: 'css/',
					ext: '.css'
				}]
			}
		},
		watch: {
			options: {
				livereload: true
			},
			scripts: {
				files: ['coffee/*.coffee', 'sass/*.scss', 'jade/*.jade', 'js/*.js'],
				tasks: ['process']
			}
		},
		concat: {
			js: {
				src: ['js/*.js'],
				dest: 'dist/js/all.js'
			}, 
			css: {
				src: ['css/*.css'],
				dest: 'dist/css/all.css'
			}
		},
		uglify: {
			js: {
				options: {
					banner: '/* Created by Jacob Lutin | 2014 */\n'
				},
				files: {
					'dist/js/all.min.js': ['dist/js/all.js']
				}
			}
		},
		cssmin: {
			css: {
				options: {
					banner: '/* Created by Jacob Lutin | 2014 */\n'
				},
				files: {
					'dist/css/all.min.css': ['dist/css/all.css']
				}
			}
		},
		connect: {
			server: {
				options: {
					hostname: '*',
					port: 8000,
					livereload: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-newer');

	grunt.registerTask('process', ['newer:coffee', 'newer:sass', 'newer:jade', 'concat', 'uglify', 'cssmin']);
	grunt.registerTask('default', ['coffee', 'jade', 'sass', 'concat', 'uglify', 'cssmin', 'connect', 'watch']);
}  