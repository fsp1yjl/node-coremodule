
console.log("dirname:" + __dirname);
console.log("filename:" + __filename);
/*
for(var i in global)
{
console.log("global:" + global[i].toString());
}
*/

Object.prototype.show = function(header,text) {
    console.log(header + ":"+ text);
};

process.show("pid",process.pid);

process.show("process version",process.version);

process.show("tittle",process.tittle);

process.show("arch",process.arch);

process.show("platform",process.platform);

process.show("mainModule",Object.keys(process.mainModule));

process.show("execArgv",process.execArgv);


process.show("memoryUseage",JSON.stringify(process.memoryUsage()));



