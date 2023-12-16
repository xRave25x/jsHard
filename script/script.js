let num = 266219;
let numDegree;

const numMultiple = (num) => num.toString().split('').reduce((res, item) => item * res, 1)
console.log(numMultiple(num));

const numMult = numMultiple(num);

numDegree = numMult ** 3;
console.log(numDegree);
console.log(String(numDegree).slice(0,2));