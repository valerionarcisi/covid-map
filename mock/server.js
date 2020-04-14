
const jsonServer = require('json-server');
const db = require('./db/db.json');

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

server.get('/data', (req, res) => {
  res.jsonp(db);
});

server.use(router);
server.listen(9999, () => {
  console.log('JSON Server is running');
});
