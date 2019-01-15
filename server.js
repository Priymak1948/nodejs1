var http = require("http");
function start() {
function onRequest(request, response) {
console.log("Request received.");
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello World");
response.end();
}
http.createServer(onRequest).listen(3000);
console.log("Server has started.");
}
exports.start = start;