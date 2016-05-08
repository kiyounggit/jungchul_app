var http = require('http');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type' : 'text/plain'});
  res.end('Hello World by Jeongchul \n');
}).listen(3000,'192.168.0.14');
console.log('Server running at http://127.0.0.1:1337/ made in JeongChul');
