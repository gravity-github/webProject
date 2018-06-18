var express = require('express');
var app = express();
app.use(express.static(__dirname+'public'));
app.use('/images',express.static(__dirname+'public/images'));
var server=app.listen(5000);