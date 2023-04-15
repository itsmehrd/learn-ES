const http = require('http');

const onServerCreate = (request, response) => {
//   response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Content-Type', 'text/html');
  response.write(`<h1></h1>Hello Harish!</h1>`);
  response.end();
};

const server = http.createServer(onServerCreate);
server.listen('4200');
