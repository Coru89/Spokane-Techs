'use strict';

module.exports = {
	server: {
		path: 'http://localhost:<%= connect.options.port %>'
	},
	production: {
		path: '<%= config.url %>'
	}
};
