const through2 = require('through2');
const fs = require('fs');
console.log('through2*****************:',through2);
console.log('**************');
var write = through2(function (chunk, enc, callback) {
    for (var i = 0; i < chunk.length; i++)
      if (chunk[i] == 97)
        chunk[i] = 122 // swap 'a' for 'z'

    this.push(chunk)
console.log('this:::',this.constructor)
    callback()
   })
write.on('data',function () {console.log('ppppwwwwww')});
console.log('write:::::',write)
fs.createReadStream('ex.txt')
  .pipe(write)
  .pipe(fs.createWriteStream('out.txt'))
  .on('finish', function () {
    console.log('finish process');
  })
