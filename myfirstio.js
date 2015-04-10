// myfirstio
var fs = require('fs')
var file_path = process.argv[2]
var buf = fs.readFileSync(file_path)
var splitted_line = buf.toString().split('\n')
var num_lines = splitted_line.length - 1
console.log(num_lines)