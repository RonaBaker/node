const http = require('http');

function sleep(n) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}

function init(){
    http.Server((req, res) => {
        sleep(2000);
        res.writeHead(200);
        res.end();
      }).listen(8001);
}

module.exports.createHttpServer = init;
