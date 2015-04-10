// print number of newlines in a file
// takes in command line arg

var fs = require('fs')
var file_path = process.argv[2]
var contents;
var count = 0
fs.readFile(file_path, function(err, data) {
	if (err) throw err;
	contents = data.toString()
	console.log(contents.split('\n').length - 1)
});