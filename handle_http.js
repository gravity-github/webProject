var http = require('http');
var server = http.createServer(function(req,res){
    if (req.url == '/'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write('<html><body><p>This is home page</p></body></html>');
        res.end();
    }
    else if (req.url == '/student'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write('<html><body><p>This is student page</p></body></html>');
        res.end();
    }
    else if (req.url == '/admin'){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write('<html><body><p>This is admin page</p></body></html>');
        res.end();
    }
    else{
        res.end('Invalid Request');
    }
});

server.listen(8001);
console.log('Node.js web server at port 8000 is running');