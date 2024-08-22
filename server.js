let http = require('http'); // Node.js module
let url = require('url');

function start(route,handle)    {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        route(pathname, handle,response);
    }
    
    http.createServer(onRequest).listen(8888);
}

exports.start = start; //밖에서도 start()함수가 실행