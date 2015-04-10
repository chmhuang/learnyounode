var fs = require('fs');
module.exports = function(path, ext, someCallback) {
	var filtered_ls = [];
	fs.readdir(path, function(err, lst) {
		if (err)
			return someCallback(err)
		for (var i = 0; i < lst.length; i++) {
			if (lst[i].split('.')[1] === ext) { 
				// create a list that stores the filtered ls
				filtered_ls.push(lst[i]);
			};
		};
		someCallback(null, filtered_ls);
	});
};
