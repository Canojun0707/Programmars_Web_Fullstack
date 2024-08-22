let server = require('./server'); //'./'라는 뜻은같은 디렉토리 파일
let router = require('./router');
let requestHandler = require('./requestHandler');

server.start(router.route, requestHandler.handle);