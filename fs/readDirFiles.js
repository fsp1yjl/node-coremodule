// read all file of a certain dirtory recursively

const fs = require('fs');
const path = require('path');

function getAllFile(dir, processDir) {
    fs.stat(dir, function(err,stats) {
        //console.log('dddddd:',arguments)
        processDir(dir, stats, function next() {
            if(stats.isFile()) {
                //console.log('file:',dir);
                arr.push(dir);
                //console.log("in arr:",arr)
            } else if( stats.isDirectory()) {
                fs.readdir(dir,function(err,files) {
                    //console.log('files:',files)
                    files.forEach((item)=>{
                        getAllFile(path.join(dir,item),processDir);
                    })
                })
            }
        })
    })
}


var arr = [];
getAllFile(path.resolve(process.cwd(),'../' ), function processDir(dir,stats,next){
    next();
})


setTimeout(function() {
    console.log("arr::",arr)
}, 2000);

