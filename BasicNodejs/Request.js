const http = require('http');

const server = http.createServer((req,res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Hello, Node.js!');
});
server.listen(3000, () => {
    console.log('Running port 3000');
  });