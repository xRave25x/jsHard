const arr = ['24443', '45678', '45234', '34578', '24567', '34597', '23417']
let filteredArr = arr.filter(i => (i)[0] == 2 || (i)[0] == 4); // через filter

console.log(filteredArr);

arr.forEach((item) => {
    if (item.startsWith('2') || item.startsWith('4')) { // через цикл forEach с применением .startWith()
        console.log(item);
    }
});


for(let i = 2; i <= 100; i++){
    let primeNum = true;

    for(let j = 2; j < i; j++) {

        if(i % j == 0) {
            primeNum = false;
            break;
        }
    }

    if (primeNum) {
        console.log(i, 'Делители этого числа: 1 и ' + i);
    }
}

