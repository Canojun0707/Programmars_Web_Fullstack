function first()    {
    console.log("첫 번째");
}

function second()   {
    console.log("두 번째");
}

function third()   {
    console.log("세 번째");
}

first();
setTimeout(second,2000); //2초 뒤에 second를 실행
third();