/**
 * Created by debasishmohapatra on 28/06/17.
 */

const fs = require("fs");

module.exports = function (req, res, next) {

	var extensionRegex = /\.\S+/g;
	var prependBase = process.env.BASE_PATH;

	if (req.url.search(extensionRegex) === -1) {
		console.log("2*******" + req.url + "********");
		console.log("CWD::", process.env);

		fs.readFile('./' + prependBase + "/index.html", "binary", function (err, file) {
			if (err) {
				res.writeHead(500, { "Content-Type": "text/plain" });
				res.write(err + "\n");
				res.end();
				return;
			}

			res.writeHead(200);
			res.write(file, "binary");
			res.end();
		});

	} else if (req.url.indexOf('bower_components') === -1) {
		req.url = '/' +  prependBase + req.url;
		console.log("3*******" + req.url + "********");
		next();
	} else {
		console.log("4*******" + req.url + "********");
		next();
	}
};
