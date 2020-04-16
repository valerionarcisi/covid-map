
const jsonServer = require('json-server');
const db = require('./db/db.json');

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/dpc-covid19-ita-province-latest.json', (req, res) => {
  res.jsonp(db);
});

server.use(router);
server.listen(9999, () => {
  console.log('JSON Server is running');
});
