
const express = require('express');
const app = express();
const bodyParser = require("body-parser")

const fs = require('fs')


app.use(bodyParser.text({
                    limit : '20mb',
                    type: function(){ return true }}))
// .use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));



app.use('/upload',function(req,res,next){
    //console.log(req.body.imgName);

    //console.log(req);
   // console.log('req.body:',req.body);
    let param = JSON.parse(req.body);
    console.log("name:",param.imgName)
   
    let base64Data = param.imgData.replace(/^data:image\/\w+;base64,/, "")
    let buf = new Buffer(base64Data,'base64');
    let name = param.imgName;
    //let fd = fs.openSync(name,'w');
    //console.log('fd::',fd)
    fs.writeFile(name,buf,function(err){
        console.log('dppppppp')
        if(err) {
            res.send(err);
        } else {
            console.log('hhh')
            res.send('success');
        }
    })
    next();
})

app.use(function(req,res,next){
    res.sendfile("public/a.html");
})

app.listen(4001,function(){console.log('listening on port 4001')});




