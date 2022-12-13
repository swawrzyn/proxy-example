const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const https = require("https");
const httpProxy = require("http-proxy");

// get certs
execSync(path.resolve(__dirname, "create-certs.sh"));

const options = {
  key: fs.readFileSync(path.join(__dirname, "key.pem"), "utf8"),
  cert: fs.readFileSync(path.join(__dirname, "cert.pem"), "utf8"),
};

const PORT = 443;

const proxy = httpProxy.createProxyServer();

const server = https.createServer(options, function (req, res) {
  if (req.url.substring(0, 4) === '/api') {
    proxy.web(req, res, { target: "http://localhost:3000" });
  } else {
    proxy.web(req, res, { target: "http://localhost:3001" });
  }
});

// server.on("upgrade", function (req, socket, head) {
//   proxy.ws(req, socket, head);
// });

console.log(`starting proxy server on port ${PORT}.`);

server.listen(PORT);
