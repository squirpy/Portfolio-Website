module.exports = function(grunt) {
	grunt.initConfig({


		sass: {
        	dist: {
            	files: {
                	'OUTPUT/css/styles.css': 'INPUT/sass/styles.scss'
                }
            }
        }, //sass

		watch: {
			options: {
				spawn: false,
				livereload:true
			},
			scripts: {
				files: ['OUTPUT/**/*.html', 
				'INPUT/scripts/**/*.js'],
				tasks: ['concat']
			},
			css: {
				files: ['INPUT/css/**/*.css',
				'INPUT/sass/**/*.scss'],
			   tasks: ['sass']
			}
		},


		// eslint: {
		// 	target: ['gruntfile.js', 'INPUT/scripts/AHfullpage.js']
		// },
		

		// concat_css: {
		//     options: {
		//     },
		//     all: {
		//       src: ["INPUT/css/*.css"],
		//       dest: "OUTPUT/css/styles.css"
		//     }
		//   }, //concat_css



		concat : {
			dist: {
			src:['INPUT/scripts/*.js'],
			dest: 'OUTPUT/js/script.js'
			}
		},  //concat

		bower_concat: {
      		all: {
				dest: {
					js: 'INPUT/js/bower.js',
					css: 'OUTPUT/css/bower.css'
				},
				mainFiles: {
					'jquery': [
				  	'dist/jquery.js'
				  	],


				  	'fullpage.js': [ 
				  	'jquery.fullpage.js', 
				  	'jquery.fullpage.css'
				  	],



				  'owl.carousel': [
				  	'dist/owl.carousel.js',
				  	'dist/assets/owl.carousel.css', 
				  	'dist/assets/owl.theme.css', 
				  	'dist/assets/owl.transitions.css'
				  	]
				}
			}
    	}, // bower-concat


		connect: {
		 server: {
				options: {
					hostname: 'localhost',
					port: 3000,
					base: 'OUTPUT/',
					livereload: true
				}
			}
		} //connect

	}); //initConfig


	// grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	// grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-bower-concat');
	

	grunt.registerTask('default', ['bower_concat', 'concat', 'connect', 'watch']);

}; //wrapper function