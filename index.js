const http = require('http')

function returnHtmlDiv(req, res){
    res.writeHead(200);
    res.end("This is an Other Function")
}

const server = http.createServer(returnHtmlDiv)

server.listen(5000)