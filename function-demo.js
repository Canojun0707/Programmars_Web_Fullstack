const express = require('express')

function add1(x,y)  {
    return x+y;
}

let add2 = function(x,y) {
    return x+y
}

let add3 = (x,y) => { 
    return x+y
}

let add4 = (x,y) => x+y

console.log(add1(1,3))
console.log(add2(1,3))
console.log(add3(1,3))
console.log(add4(1,3))