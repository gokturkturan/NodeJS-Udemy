const http = require("http");
const routes = require("./routes");

console.log(routes.someText);
const server = http.createServer(routes.handler); // => {
//console.log(req.url, req.method, req.headers);
//process.exit();
//});

server.listen(3000);
