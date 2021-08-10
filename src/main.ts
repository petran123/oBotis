import * as http from "http";

let server = http.createServer(requestListener);

function requestListener(req: http.IncomingMessage, res: http.ServerResponse) {

    switch (req.url) {
        case "/testing/":
            res.writeHead(200);
            res.end("this may get a little annoying");
            break;
        case "/":
        default:
            res.writeHead(200);
            res.end("hello world!");
    }
}



server.listen(9999);
console.log("server open!");