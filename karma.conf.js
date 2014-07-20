// Karma configuration
// Generated on Tue Jul 08 2014 22:24:52 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai-sinon'],


    // list of files / patterns to load in the browser
    files: [
      'setup.js',
      'apps/video/index.html',
      'shared/js/lazy_loader.js',
      'shared/js/l10n.js',
      'shared/js/l10n_date.js',
      'shared/js/media/media_utils.js',
      'shared/test/unit/load_body_html_helper.js',
      'shared/test/unit/mocks/mock_screen_layout.js',
      'shared/test/unit/mocks/mock_video_stats.js',
      'shared/test/unit/mocks/mocks_helper.js',
      'apps/video/js/video_utils.js',     
      'apps/video/test/unit/mock_l10n.js',
      'apps/video/test/unit/mock_metadata.js',
      'apps/video/test/unit/mock_mediadb.js',
      'apps/video/test/unit/mock_thumbnail_group.js',
      'apps/video/test/unit/mock_thumbnail_item.js',
      'apps/video/test/unit/mock_video_player.js',
      'apps/video/js/thumbnail_list.js',         
      'apps/video/js/video.js',   
      'apps/video/test/unit/video_utils_test.js',      
      'apps/video/test/unit/video_test.js'
    ],

	client:{
		mocha:{
		 ui: 'tdd'
		}
	},
    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['FirefoxNightly'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
