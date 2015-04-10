module.exports = function (file_path, ext, callback_fn)
var callback_fn = function (file_path, ext) {
	var fs = require('fs');
	fs.readdir(file_path, function(err, lst) {
		for (var i = 0; i < lst.length; i++) {
			if (lst[i].split('.')[1] === ext) { 
				console.log(lst[i]);
			};
		};
	});
};