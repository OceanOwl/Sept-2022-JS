// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function foo(a, b, c) {
//     if (a > b && a > c){
//         console.log(a)
//     }
//     else if (b > a && b > c) {
//         console.log(b)
//     }
//     else if (c > b && c > a) {
//         console.log(c)
//     }
//         }
// foo(1,2,3)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function foo(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a)
//     } else if (b < a && b < c) {
//         console.log(b)
//     } else if (c < b && c < a) {
//         console.log(c)
//     }
// }
//
// foo(1, 2, 3)


// - створити функцію яка повертає найбільше число з масиву

// const arr = [1, 2, 3, 4, 5];
// let max = function (arr) {
//     let max = arr[0];
//     for (let item of arr) {
//         if (item > max)
//             max = item;
//
//     }
//     return max
// }
// console.log(max(arr));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const arr = [1, 2, 3];
// const xxx = (array) => {
//     let mid = 0;
//     for (let item of array) {
//         mid += item;
//     }
//   return mid/arr.length
// }
// console.log(xxx(arr));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// const xx = (...arguments) => {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (const item of arguments) {
//         if (item > max) {
//             max = item;
//         }
//         if (item < min) {
//             min = item;
//         }
//     }
//     console.log(max);
//     return min
// }
//
// let x = xx(1, 2, 3);
// console.log(x);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arr = [];
// const xxx = () => {
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * 100)
//     }
//     console.log(arr)
// }
// xxx()

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let arr = [];
// const xxx = (limit) => {
//     for (let i = 0; i < limit; i++) {
//         arr[i] = Math.round(Math.random() * 100)
//     }
//     console.log(arr)
// }
// xxx(10)


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1, 2, 3];
// console.log(arr.reverse(arr));
//
//
//

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
const xxx = (...arguments) => arguments.length === 2 ? arguments[0] + arguments[1] : arguments[0];
let xxx1 = xxx('abc', 1);
console.log(xxx1);
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// let arr1 = [1, 2, 3, 4];
// let arr2 = [2, 3, 4, 5];
// function foo(array1, array2) {
//     let result = []
//     let result1 = array1.length>=array2.length? array1:array2
//     for (let i = 0; i < result1.length; i++) {
//         result[i] = (array1[i] || 0) + (array2[i] || 0);
//
//     }
// return result
// }
//
// console.log(foo(arr1, arr2));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// let arr = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'}
// ];
//
// function foo(array) {
//     let arr2 = []
//     for (let i = 0, j = 0; i < array.length; i++) {
//         for (const item in array[i]) {
//             arr2[j++] = item
//         }
//     }
//     return arr2
//
// }
//
// console.log(foo(arr));
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let arr = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'}
// ]
//
//
//
// function foo(array) {
//     let arr2 = []
//     for (let i = 0, j = 0; i < array.length; i++) {
//         for (const item in array[i]) {
//             arr2[j++] = array[i][item]
//         }
//     }
//     return arr2
//
// }
//
// console.log(foo(arr));