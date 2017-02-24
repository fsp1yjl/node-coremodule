const xlsx = require('node-xlsx');
const fs = require('fs');


// build xlsx file string and wrie to a file named text.xlsx
// the new file will got two sheet named of test1 and text2
const data = [[1, 2, 3], [true, false, null, 'sheetjs']]; 
let file = xlsx.build([{name:'test1',data:data},{name:'text2',data:data}]);
fs.writeFileSync('text.xlsx',file);


//read file content from centern file
// return a object with teh same structure when the file build 
const file_buffer = xlsx.parse(fs.readFileSync('text.xlsx'));
console.log('file_buffer:',JSON.stringify(file_buffer));
/*
for(var i in file_buffer) {
	console.log('i::',i);
	console.log('buffer[i]:',file_buffer[i]);
}
*/
const file_text = xlsx.parse('text.xlsx');
console.log('file_text:',JSON.stringify(file_text));
