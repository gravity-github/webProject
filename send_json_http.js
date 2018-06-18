var http = require('http');
var server = http.createServer(function(req,res){
    if (req.url == '/data'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify({message:'Hello World'}));
        res.end();
    }
});

server.listen(4000);
console.log('Server running at port 4000');