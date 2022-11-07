//- Є змінна х, якій ви надаєте довільне числове значення.Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 1;
if (a > 0) {
    console.log('true');
} else {
    console.log('false')
}
let b = 0;
if (b > 0) {
    console.log('true');
} else {
    console.log('false')
}
let c = -3;
if (c > 0) {
    console.log('true');
} else {
    console.log('false')
}


//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число(в першу, другу, третю или четверту частину години).
let time = 59;
if (time <= 15) {
    console.log('first');
} else if (time > 15 && time <= 30) {
    console.log('second');

} else if (time > 30 && time <= 45) {
    console.log('third');
} else if (time > 45 && time <= 59) {
    console.log('fourth')
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 28;
if (day <= 10) {
    document.write('first');
} else if (day <= 20 && day >= 10) {
    document.write('second');
} else (day > 20 && day <= 31);
document.write('third');

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
switch (+prompt('what day of the week is today')) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default:
        console.log('??????');

}


// - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .Також потрібно врахувати коли введені рівні числа.
let x = 1;
let y = 2;
if (x > y) {
    console.log(x);
} else if (x < y) {
    console.log(y)
} else if (x === y) {
    console.log(x, y);
}


//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let xx = '' || 'default';
console.log(xx);
