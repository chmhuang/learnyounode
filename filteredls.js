//print list of files in dir, filtered by extension
// first arg is path
// second arg is extension wanted (with no . prefixed)
// use asyn IO
// node filteredls.js path txt

var fs = require('fs');
path = process.argv[2];
extension = process.argv[3];
fs.readdir(path, function(err, lst) {
	for (var i = 0; i < lst.length; i++) {
		if (lst[i].split('.')[1] === extension) { 
			console.log(lst[i]);
		};
	};
});