const date = new Date();

const dateBlock = document.getElementById('current_date_time_block');
const secondDateBlock = document.getElementById('second_date_block');
const currentDateBlock = document.getElementById('current_date_time_block2');

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

const dateUp = date.toLocaleString("ru", options);

secondDateBlock.innerHTML = dateUp;

    function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }
    function date_time()
    {
        const current_datetime = new Date();
        const day = zero_first_format(current_datetime.getDate());
        const month = zero_first_format(current_datetime.getMonth()+1);
        const year = current_datetime.getFullYear();
        const hours = zero_first_format(current_datetime.getHours());
        const minutes = zero_first_format(current_datetime.getMinutes());
        const seconds = zero_first_format(current_datetime.getSeconds());

        return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
    }
    dateBlock.innerHTML = date_time();

    setInterval(()=> {
        currentDateBlock.innerHTML = date_time();
    }, 1000);
