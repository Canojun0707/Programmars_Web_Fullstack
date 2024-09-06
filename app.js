const express = require('express')
const app = express()
const port = 7777

//get : 조회
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//app.use() : 미들웨어 등록하는 함수
/*
express.json : 
클라이언트가 보낸 HTTP 요청의 본문(body)이
json형태일 경우 req.body에 객체 형태로 저장
*/
app.use(express.json())

//post(등록) : 생성
//body에 데이터가 담김
app.post('/test',(req,res)=> {
  console.log(req.body.message);
  res.json(req.body);
})
