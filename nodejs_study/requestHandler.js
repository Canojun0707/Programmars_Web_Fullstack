//router가 route를 분배해서 route를 알려준는 역할

function main(response) {
    console.log('main');

    response.writeHead(200, {'Content-Type': 'text/html'}); // (정상, response 타입은 html이다)
    response.write('Main page'); //write body를 줄였다고 보면 됌
    response.end(); //전송 
}

function login(response) {
    console.log('login');

    response.writeHead(200, {'Content-Type': 'text/html'}); // (정상, response 타입은 html이다)
    response.write('login page'); //write body를 줄였다고 보면 됌
    response.end(); //전송 
}

function name(response) {
    console.log('changjun');

    response.writeHead(200, {'Content-Type': 'text/html'}); // (정상, response 타입은 html이다)
    response.write('hello im changjun'); //write body를 줄였다고 보면 됌
    response.end(); //전송 
}

let handle = {}; // key:value 
handle['/'] = main;
handle['/login'] = login;
handle['/name'] = name;

exports.handle = handle;