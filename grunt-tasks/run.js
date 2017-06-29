/**
 * Created by debasishmohapatra on 28/06/17.
 */


var run= {
	copy_middleware : {
		exec: 'cp middleware.js ./node_modules/live-server/middleware'
	},

	start_dev_server: {
		exec: 'export BASE_PATH=<%= sourceDir %> && ./node_modules/.bin/live-server --middleware=middleware'
	},

	start_prod_server: {
		exec: 'export BASE_PATH=dist && ./node_modules/.bin/live-server --middleware=middleware'
	}

};

module.exports = function (grunt) {
	return run;
};