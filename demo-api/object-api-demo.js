const express = require('express');
const app = express();

let utuber1 = {
    channelTitle : "숏박스",
    sub : "123만명",
    videoNum : "993개"
}

let utuber2 = {
    channelTitle : "침착맨",
    sub : "777만명",
    videoNum : "910개"
}

let utuber3 = {
    channelTitle : "수탉",
    sub : "100만명",
    videoNum : "500개"
}
//products/__ 빈칸에 오는 값을 n에 대입
app.get('/:nickname', function(req, res){
    
    const {nickname} = req.params
    if (nickname === "@sutak_istp"){
        res.json(utuber3)
        console.log(utuber3);
    }
    
    else if (nickname == "@ChimChakMan_Official")
    {
        res.json(utuber2)
        console.log(utuber2);
    }
    else if (nickname == "@shortbox"){
        res.json(utuber1)
        console.log(utuber1);
    }
    else
        console.log(nickname);
})
// 포트 : 2586 -> localhost:2586
app.listen(2674);
