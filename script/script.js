const weekDays = document.querySelector('.days-of-week');

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const todayDay = new Date();

const allDays = () => {
    week.forEach((item, i) => {
        let newdiv = document.createElement('div');
        if (i === +todayDay.getDay()-1) { 
            newdiv.classList.add('today'); 
            newdiv.textContent = week[i]; 
        }
        if (item == 'Saturday' || item == 'Sunday') { 
            newdiv.classList.add('italic'); 
            newdiv.textContent = week[i];
        } else {
            newdiv.textContent = week[i];
        }
        weekDays.appendChild(newdiv); 

    });
}

allDays();