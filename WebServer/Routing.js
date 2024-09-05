const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Home');
    } else if (req.url === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('About');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  });
  
  server.listen(3000, () => {
    console.log('Running 3000 port.');
  });