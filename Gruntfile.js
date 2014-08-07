module.exports = function(grunt) {
	require('time-grunt')(grunt);
	require('load-grunt-config')(grunt, {
		config: {
			pkg: require('./package.json')
		}
	});
};
