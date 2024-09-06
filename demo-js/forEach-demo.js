const arr=[1,2,3,4,5];


// curreantValue:현재값
//index : 인덱스 위치
//arry : 배열 전체 호출
arr.forEach(function (currentValue, index, array){
    console.log(`currentValue : ${currentValue}, index : ${index}, array: ${array}`);
})