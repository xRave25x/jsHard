const dateBlock = document.getElementById('current_date_time_block');
const secondDateBlock = document.getElementById('second_date_block');
const currentDateBlock = document.getElementById('current_date_time_block2');


firstDateTime = () => {
    

    const currentDatetime = new Date();
    const day = currentDatetime.toLocaleString('default', { weekday: 'long' }) + ', ' + zero_first_format(currentDatetime.getDate());
    const month = currentDatetime.toLocaleString('default', { month: 'long' });
    const year = currentDatetime.getFullYear();
    const hours = zero_first_format(currentDatetime.getHours());
    const minutes = zero_first_format(currentDatetime.getMinutes());
    const seconds = zero_first_format(currentDatetime.getSeconds());

    const getDeclination = (num, a, b, c) => {

        if (num == 1 || num % 10 == 1 && num != 11) {
        return a;
        } else if ((num >= 2 && num <= 4) || (num % 10 >= 2 && num % 10 <= 4 && (num < 10 || num > 20))) {
        return b;
        } else {
        return c;
        }
    }
    const getDeclinationHours = (hours) => {
        return getDeclination(hours, 'час', 'часа', 'часов')
    }
    const getDeclinationMinutes = (minutes) => {
        return getDeclination(minutes, 'минута', 'минуты', 'минут')
    }
    const getDeclinationSeconds = (seconds) => {
        return getDeclination(seconds, 'секунда', 'секунды', 'секунд')
    }

    return 'Сегодня ' + day+" "+month+" "+year+' года'+", "+hours+' '+getDeclinationHours(hours)+" "+minutes+' '+getDeclinationMinutes(minutes)+" "+seconds+' '+getDeclinationSeconds(seconds);
}


zero_first_format = (value) =>
{
    if (value < 10)
    {
        value='0'+value;
    }
        return value;
}
date_time = () =>{
        
    const currentDatetime = new Date();
    const day = zero_first_format(currentDatetime.getDate());
    const month = zero_first_format(currentDatetime.getMonth()+1);
    const year = currentDatetime.getFullYear();
    const hours = zero_first_format(currentDatetime.getHours());
    const minutes = zero_first_format(currentDatetime.getMinutes());
    const seconds = zero_first_format(currentDatetime.getSeconds());

    return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
}

setInterval(()=> {
    secondDateBlock.innerHTML = date_time();
}, 1000);

currentDateBlock.innerHTML = firstDateTime();