var stream = require('stream').Readable;
var fs = require('fs');

//stream.push('dddd');
ins = stream();
//console.log('stream:',stream);
//console.log('ins:',ins._read);

// every implementation of readable stream should have a method _read()
class MyReadable extends stream {
	constructor(options) {
		super(options);
		this._max = 30;
		this._index = 1;
	}
	_read() {
		var i = this._index++;
		if( i > this._max) { this.push(null);}
		else { var str = ''+ i; var buf = Buffer.from(str,'ascii'); this.push(buf);}
	}

}
//console.log((new MyReadable())._read())
var rd = new MyReadable();
rd._read();
// pipe the stream to a file name dd.txt
rd.pipe(fs.createWriteStream('dd.txt'))
