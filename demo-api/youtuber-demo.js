const express = require("express")
const app = express()

app.listen(7777)

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

let dbKeyNumber = 1;

const db = new Map()

db.set(dbKeyNumber++,utuber1)
db.set(dbKeyNumber++,utuber2)
db.set(dbKeyNumber++,utuber3)
//REST API 설계
app.get('/utubers/:id', function(req,res){
    
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

//db 전체 조회
app.get('/utubers/',(req,res)=>{

    //객체를 담을 변수
    let utubers = {};
    
    //forEach : 배열을 순회하는데 사용
    db.forEach(function(value,key){
        utubers[key] = value;
    })
    res.json(utubers)
})

app.use(express.json())
app.post('/utubers',(req,res) => {
    
    //등록 :Map(db)에 저장(put) 해야함
    db.set(dbKeyNumber++,req.body)

    res.json({
        message : db.get(dbKeyNumber-1).channelTitle + "님 어서오세요"
    })
})

//id값에 따라 삭제하는 기능
app.delete('/utubers/:id',function(req, res){

    let id = parseInt(req.params.id)
    if(db.get(id) == undefined) {

        res.json({
            message : `요청한 id : ${id}은 없는 유저입니다.`
        })
    }
    else {
        const channelTitle = db.get(id).channelTitle
        db.delete(id)

        res.json({
            message : `요청한 id : ${id}의 ${channelTitle}��의 정보를 ��제하��습니다.`
        })
    }
})
//전체 삭제 기능
app.delete('/utubers',function(req, res){

    if(db.size >= 1){
    db.clear() //db 전체 삭제
    res.json({
        message : "all utuber delete"
    })
}
    else {
    res.json({
        message : "db is empty"
    })
}
})
//수정
app.put('/utubers/:id',function(req, res){

    let id = parseInt(req.params.id)
    let oldTitle = db.get(id).channelTitle
    if(db.get(id) == undefined) {
        res.json({
            message : `요청한 id : ${id}은 없는 유저입니다.`
        })
    }
    else {
        const newTitle = req.body
        db.set(id,newTitle)

        res.json({
            message : `${oldTitle}님에서  ${newTitle.channelTitle}로 변경되었습니다.`
        })
    }
})