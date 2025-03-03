const jsonServer = require("json-server");
const server = jsonServer.create();

const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});

module.exports = server;
