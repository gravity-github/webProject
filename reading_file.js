var fs = require('fs');
fs.readFile('app.js','utf8',function(err,data){
    if(err) throw err ;
    console.log(data);
});