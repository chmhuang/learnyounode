const http = require('http');
const bl = require('bl');
var cnt = 0
var responses = []

first_url = process.argv[2];
second_url = process.argv[3];
third_url = process.argv[4];

var httpGet = function(index) {
	http.get(process.argv[index], function(response) {
		index = index - 2
		response.pipe(bl(function(err, data) {
		cnt = cnt + 1;
		responses[index] = data.toString();
		if (cnt == 3) {
			for (var i = 0; i < 3; i++) {
				console.log(responses[i]);
			}
		}
		}))
	})
}
for (var i = 2 ; i < 5; i++) {
	httpGet(i);
}
/*
http.get(first_url, function(response) {
	response.pipe(bl(function(err, data) {
	cnt += 1;
	responses[0] = (data.toString());
	if (cnt == 3) {
		for (var i = 0; i < 3; i++) {
			console.log(responses[i]);
		}
	};
}))});

http.get(second_url, function(response) {
	response.pipe(bl(function(err, data) {
	cnt += 1;
	responses[1] = (data.toString());
	if (cnt == 3) {
		for (var i = 0; i < 3; i++) {
			console.log(responses[i]);
		}
	};
}))});

http.get(third_url, function(response) {
	response.pipe(bl(function(err, data) {
	cnt += 1;
	responses[2] = (data.toString());
	if (cnt == 3) {
		for (var i = 0; i < 3; i++) {
			console.log(responses[i]);
		}
	}
}))});
*/