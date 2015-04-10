// prints list of files filtered by extension
// argv[2] = path_dir
// argv[3] = ext

var fs = require('fs');
var mymod = require('./main_mod.js');
var path = process.argv[2];
var ext = process.argv[3];

mymod(path, ext, function(err, lst) {
	// do the print here
	//if (err) throws err;
	for (var i = 0; i < lst.length; i++) {
		console.log(lst[i]);
	}
});
