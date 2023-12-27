weekDays = document.querySelector('.days-of-week');

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const todayDay = new Date();

const allDays = () => {
    week.forEach((item, i) => {
        let newdiv = document.createElement('div'); // Для каждого элемента week создаём div
        if (i === +todayDay.getDay()-1) { // Если текущий день недели то от номера текущей даты отнимаем единицу, так как массив у нас начинается с нуля
            console.log(todayDay.getDay());
            newdiv.classList.add('today'); // Добавляем класс (делаем жирным)
            newdiv.textContent = week[i]; // Вставляем текст
        }
        if (item == 'Saturday' || item == 'Sunday') { // Если выходные то
            newdiv.classList.add('italic'); // Делаем дополнительно курсивом (Даже если уже жирным выделено)
            newdiv.textContent = week[i]; // Вставляем текст
        } else {
            newdiv.textContent = week[i]; // Если не текущий день и не выходные, то просто вставляем текст без стилей
        }
        weekDays.appendChild(newdiv); // Добавляем новый див в div @day

    });
}

allDays();