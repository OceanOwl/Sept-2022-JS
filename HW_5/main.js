// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function pPryamo(a,b) {
//     return a * b;
// }
//
// let xxx = pPryamo(10, 20);
// console.log(xxx);


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function pKola(PI, r) {
//     return PI * r * r;
// }
//
// let xxx = pKola(3.14, 10);
// console.log(xxx);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function pCylin(PI, r, h) {
//     return 2 * (PI * r * h);
//
// }
//
// let xxx = pCylin(3.14, 2, 3,);
// console.log(xxx);


// - створити функцію яка приймає масив та виводить кожен його елемент
// function arrayPrint (arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
//
// }
// arrayPrint([1,2,3])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(tag, text) {
//     document.write(`<${tag}>${text}</${tag}>`)
//
// }
//
// paragraph('p', 'text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function liWithText(text, number) {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//
//     document.write(`</ul>`);
//
//
// }
//
// liWithText('asd', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function fakeElem() {
//     document.write(`<ul>`);
//     for (let i = 0; i < arguments.length; i++) {
//         const argument = arguments[i];
//                 document.write(`<li>${arguments[i]}</li>`)
//
//     }
//
//     document.write(`</ul>`);
//
// }
//
// fakeElem(123, 'aaa', true);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// forArray(users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]) ;
// function forArray() {
//     for (let i = 0; i < users.length; i++) {
//         const user = users[i];
//         console.log(users[i])
//
//     }
//
// }


// - створити функцію яка повертає найменьше число з масиву
// aaa(xxx = [1, 2])
//
// function aaa() {
//
//     for (const argument of arguments) {
//         if (argument[0] > argument[1]) {
//             console.log(argument[0])
//         } else {
//             console.log(argument[1])
//         }
//     }
//
// }


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function plus() {
//     return arguments[0] + arguments[1] + arguments[2];
//
// }
//
// plus(1, 2, 10);
// console.log(plus(1, 2, 10));