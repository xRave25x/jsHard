const arr = [24443, 45678, 45234, 34578, 24567, 34597, 23417]
let filteredArr = arr.filter(i => String(i)[0] == 2 || String(i)[0] == 4);

const Natural = (x) => {
    for (let i = 2; i * i <= x; i == 2 ? i++ : i += 2)
        if (x % i == 0) return false;
    return x > 1;
}

const res = [...Array(100)].reduce((a, _, i) => a.concat(Natural(i) ? `Делители числа ${i}: 1 и ${i}` : []), []).join('\n');

console.log(filteredArr);
console.log(res);