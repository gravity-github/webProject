var fs = require('fs')
fs.readFile('/home/gravity/Data/web/nodejs/index.html',(err,html) => {
    if(err){
        throw err;
    }
    console.log(html)
});