const lang = 'en';
const masRu = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const masEn = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];

if (lang === 'ru'){
    console.log(masRu);
} else if (lang === 'en'){
    console.log(masEn);
};

switch (lang) {
    case 'ru':
        console.log(masRu);
        break;
    case 'en':
        console.log(masEn);
        break;
};

const mas = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(mas[lang]);

let namePerson = 'Артем';

namePerson === 'Артем' ? 'Директор' : 'Александр' ? 'Преподователь' : 'Студент';