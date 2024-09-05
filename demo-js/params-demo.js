const express = require('express');
const app = express();

//products/__ 빈칸에 오는 값을 n에 대입
app.get('/products/:n', function(req, res){
    
    let number = parseInt(req.params.n - 10);

    console.log(number);
        res.json({
            num: number  // 세미콜론(;) 대신 콤마(,) 사용
        });
})

app.get('/watch', function(req, res){
    const query = req.query
    
    const {v, t} = req.query;
    console.log(query.v);
    console.log(query.t);

    res.json({
        video : v,
        timeline : t
    });
})

// 포트 : 2586 -> localhost:2586
app.listen(2586);
