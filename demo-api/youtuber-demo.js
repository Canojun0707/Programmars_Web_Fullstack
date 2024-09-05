const express = require("express")
const app = express()

app.listen(2586)

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

const db = new Map()
db.set(1,utuber1)
db.set(2,utuber2)
db.set(3,utuber3)

//REST API 설계
app.get('/utuber/:id', function(req,res){
    
    let id = parseInt(req.params.id)
    const youtuber = db.get(id)
    if (db.get(id) == undefined)
    {
        res.json({
            message : "유튜버 정보를 찾을 수 없음"
        })
    }
    else {
    res.json(youtuber)
    }
})