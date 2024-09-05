const express = require('express');
const app = express();

let nodejsBook = {
    title : "nodejs를 공부해보자",
    name : "changjun",
    description : "이 책은 cano가 지음"
}

app.get('/test',function(req,res)   {
    res.json({
        say : "test"

    });})

app.get('/test/1',function(req,res)   {
    res.json({
        say : "one!!"

    });
})

app.get('/hello',function(req,res)   {
    res.json({
        say:"안녕하세요"
    });
})
app.get('/bye',function(req,res)   {
    res.json({
        say : "안녕히계세요"

    });
})

app.get('/product1',function(req,res){

    res.json(nodejsBook);
})
// 포트 : 2586 -> localhost:2586
app.listen(2586);