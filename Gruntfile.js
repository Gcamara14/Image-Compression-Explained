module.exports = function(grunt) {


	// CSS CONCATENATION ORDER
	var cssFileList = [
		// 'css/bootstrap.min.css',
		// 'css/slick.css',
		// 'css/base.css',
		// 'css/fonts.css',
		// 'css/design-patterns.css',
		// 'css/panels.css',
		// 'css/accordionate.css',
		// 'css/forms.css',
		// 'css/client.css',
		// 'css/gardenburger-2.0.0.css',
		// 'css/social.css',
		// 'css/minicart.css',
		// 'css/module.carousel.css',
		// 'css/module.blog.css',
		// 'css/module.events.css',
		// 'css/module.gallery.css',
		// 'css/module.trade.css',
		// 'css/module.wines.css',
		// 'css/module.accolades.css',
		// 'css/module.search.css',
		// 'css/module.recipes.css',
		// 'css/jquery.fancybox.min.css',
		// 'css/accessibility.css',
		// 'css/rte.css'
	];

	// JAVASCRIPT CONCATENATION ORDER
	var jsFileList = [
		// 'js/jquery-1.11.1.js',
		// 'js/jquery-migrate-1.3.0.min.js',
		// 'js/bootstrap.min.js',
		// 'js/masonry.js',
		// 'js/imagesloaded.min.js',
		// 'js/jquery.accordionate.js',
		// 'js/jquery.ba-throttle-debounce.min.js',
		// 'js/jquery.gardenburger-2.0.0.js',
		// 'js/smooth-scroll.min.js',
		// 'js/jquery.navify-0.4.js',
		// 'js/jquery.panels.js',
		// 'js/jquery.matchHeight.js',
		// 'js/accolades.js',
		// 'js/search-nav-flip.js',
		// 'js/jquery.instastream.js',
		// 'js/init.js',
		// 'js/jquery.bxslider.min.js',
		// 'js/slick.min.js',
		// 'js/jquery.fancybox.min.js',
		// 'js/accessibility.js',
		// 'js/lozad.min.js'
	];

	// CART CSS CONCATENATION ORDER
	var cssFileListCart = [
		// 'xe/css/mpx-client.css',
		// 'xe/css/mpx-catalog.css',
		// 'xe/css/minicart.css'
		//'xe/css/**/*.css',			// This grabs all .css files -- feel free to disable and list manually instead
		// '!xe/css/styles.min.css'	// Exclude concatenated file
	];

	// CART JAVASCRIPT CONCATENATION ORDER
	var jsFileListCart = [
		// 'xe/js/jquery-1.12.4.min.js',	// Be sure to comment jQuery and migrate out if it's included elsewhere, such as in the wrapper!
		// 'xe/js/jquery-migrate-1.4.1.min.js',
		// 'xe/js/js.cookie.js',
		// 'xe/js/jquery.ba-throttle-debounce.min.js',
		// 'xe/js/jquery.noticeable.js',
		// 'xe/js/jquery.mask.js',
		// 'xe/js/cart-management.js',
		// 'xe/js/product-view-switch.js',
		// 'xe/js/product-detail-tabs.js',
		// 'xe/js/jquery.navify-cart.js',
		// 'js/smooth-scroll.min.js',
		// 'js/jquery.gardenburger-2.0.0.js',
		// 'js/bootstrap.min.js',
		// 'js/accessibility.js',
		// 'xe/js/init.js',
		// 'xe/js/tweaks.js'
		// 'js/CartScripts.min.js'
		//'xe/js/**/*.js',			// This grabs all .js files -- feel free to disable and list manually instead
		// '!xe/js/scripts.min.js'	// Exclude concatenated file
	];


	grunt.initConfig({

		stylus: {
			compile: {
				options: {
					use: [
						function() { return require('autoprefixer-stylus')('last 2 versions', 'ie 8'); }
					],
					banner: '/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\nTHIS FILE IS COMPILED. EDIT THE ORIGINAL STYLUS FILE IN SRC/, NOT THIS!!\n\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
					compress: false
				},
				files: [
					{
						extDot: "last",
						expand: true,
						flatten: true,
						src: ['css/src/*.styl'],
						ext: '.css',
						dest: 'css/'
					},
					{
						extDot: "last",
						expand: true,
						flatten: true,
						src: ['xe/css/src/*.styl'],
						ext: '.css',
						dest: 'xe/css/'
					}
				],
			},
		},

		watch: {
			stylus: {
				files: ['css/src/**/*.styl','xe/css/src/*.styl'],
				options: {
					spawn: false,
				},
			},
		},

		concat: {
			all: {
				files: [
					{
						src: cssFileList,
						dest: 'css/production/styles.min.css'
					},
					{
						options: {
							separator: ';\n'
						},
						src: jsFileList,
						dest: 'js/production/scripts.min.js'
					},
					{
						src: cssFileListCart,
						dest: 'xe/css/production/styles.min.css'
					},
					{
						options: {
							separator: ';\n'
						},
						src: jsFileListCart,
						dest: 'xe/js/production/scripts.min.js'
					}
				]
			}
		},

		cssmin: {
			all: {
				options: {
					"keepSpecialComments": 0
				},
				files: [
					{
						expand: true,
						src: 'css/production/styles.min.css'
					},
					{
						expand: true,
						src: 'xe/css/production/styles.min.css'
					}
				]
			}
		},

		uglify: {
			all: {
				files: [
					{
						expand: true,
						src: 'js/production/scripts.min.js'
					},
					{
						expand: true,
						src: 'xe/js/production/scripts.min.js'
					}
				]
			}
		},

	});

	grunt.event.on('watch', function (action, filepath) {
		var
			dst, ext, files;
		dst = filepath.split('.');
		ext = dst.slice(-1);
		if (ext == 'styl') {
			// construct destination path
			dst.splice(-1,1,'css');
			dst = dst.join('.').split(/[/\\]/);
			dst.splice(-2,1);
			dst = dst.join('/');

			if (action != 'deleted') {
				// replace stylus task dynamic pattern
				files = {};
				files[dst] = filepath;
				grunt.config('stylus.compile.files', files);
				grunt.task.run('stylus:compile');
			} else {
				// delete obsolete css file
				grunt.file.delete(dst);
				grunt.log.writeln('File "' + dst + '" deleted.');
			}

		}
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task
	grunt.registerTask('default', ['stylus:compile']);
	grunt.registerTask('production', ['stylus:compile','concat','cssmin','uglify']);
};