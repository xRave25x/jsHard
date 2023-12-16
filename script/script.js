
let num = 266219 ;
let numX;
const numXnum = (num) => num.toString().split('').reduce((res, item) => item * res, 1)
console.log(numXnum(num))



numX = num ** 3;
console.log(numX);

console.log(String(numX).slice(0,2));