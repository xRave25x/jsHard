const nameM = 111;


function test(str) {
    if (typeof str !== 'string') {
    alert('Вы ввели не верное значение');
    return;
    }

    str = str.trim(); 
    return str.length > 30 ? str.slice(0, 30) + '...' : str;
}

test(nameM);

