const arr=[1,2,3,4,5];

// curreantValue:현재값
//index : 인덱스 위치
//arry : 배열 전체 호출
const foreachArr = arr.forEach(function (currentValue, index, array){
    return currentValue * 2;
})

const mappArr = arr.map(function (currentValue, index, array){
    return currentValue * 2;
})

console.log(`forEach : ${foreachArr}`)
console.log(`map : ${mappArr}`)