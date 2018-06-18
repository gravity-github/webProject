var express = require('express');
var app = express();
app.get('/', function(req,res){
    res.send('<html><body><p>Hello</p></body></html>');
});
var server = app.listen(5000,function(){
    console.log('Node Serverr is running');
});