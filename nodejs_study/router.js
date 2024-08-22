function route(pathname, handle,response)    {
    console.log('pathname : ' + pathname);

    if (typeof handle[pathname] == 'function')  {
        handle[pathname](response);
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'}); // (정상, response 타입은 html이다)
        response.write('Not found'); //write body를 줄였다고 보면 됌
         response.end(); //전송
    }
}
exports.route = route;