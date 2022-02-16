const http = require('http');
const cafe = require('./cafe');

http.createServer(function(req,res){
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(cafe.cafe.apply("americano"));
        read.end();
}).listen(8080);