// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let cutstring =(str,n)=>{
//     let newArr = [];
//     for (let i = 0; i < str.length; i+=n) {
//         newArr.push(str.slice(i, n + i));
//
//     }
//     return newArr;
// }
// let cutstring1 = cutstring('наслаждение', 3);
// console.log(cutstring1);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
//     let str1 = 'Каждый охотник желает знать';
// let cutStr = (str, lenght) => str.slice(0, lenght);
// let cutStr1 = cutStr(str1,7);
//
// console.log(cutStr1);


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//     let str = "HTML JavaScript PHP";
// let insert_dash = (str) => str
//     .split(' ')
//     .join('-')
//     .toUpperCase();
// let dash = insert_dash(str);
// console.log(dash);


//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'hello okten school';
// let change =(str)=>str
//     .split(' ')
//     .map(value => value[0].toUpperCase()+value.slice(1))
//     .join(' ')
// let change1 = change(str);
// console.log(change1);
//
//


// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry..Potter'
// let n11 = n1
//     .replaceAll('.', ' ')
//     .replaceAll('  ', ' ')
// console.log(n11);
// console.log(n11.length);
// let n2 = 'Ron---Whisley'
// let n22 = n2
//     .replaceAll('-',' ')
//     .replaceAll('   ',' ')
// console.log(n22);
// let n3 = 'Hermione__Granger'
// let n33 = n3
//     .replaceAll('_',' ')
//     .replaceAll('  ',' ')
// console.log(n33);


// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
// let arr = [];
//
// function foo() {
//     for (let i = 1; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//         return  arr
//     }
//     foo()
// // console.log(arr.sort(function (a,b) {
// //     if (a>b)
// //         return 1
// //     if (a<b)
// //         return -1
//
// // }))
// let filter = arr.filter(function (item) {
//     return item%2===0
// })
// console.log(filter);

//


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
// let checkEmail = (str) =>{
//     if (!str
//         .startsWith('@')&& str
//         .includes('@')&&str
//         .includes('.',str
//         .indexOf('@')+3)){
//         console.log('ok')
//     }
//     else {
//         console.log('u should try again')
//     }
// }
// checkEmail('someemail@gmail.com')
// checkEmail('someeMAIL@gmail.com')
// checkEmail('someeMAIL@i.ua')
// checkEmail('some.email@gmail.com')

//
// - є масивlet
//
// const coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb',
//             'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let newSortedArray = coursesArray.sort(function (a,b) {
//     if (a.modules.length>b.modules.length)
//         return -1
//     if (a.modules.length>b.modules.length)
//         return 1
//
// })
// console.log(newSortedArray);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// //
// let symb = "о";
// let str = "Астрономия это наука о небесных объектах";
//
// const count = (str, symb) => {
//     let count = 0;
//     let split = str.split('');
//
//     for (const item of split) {
//         if (item === symb) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(count(str, symb));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//     let str = "Сила тяжести приложена к центру масс тела";
// let cutString = (str, n) => str
//     .substring(0, n);
// console.log(cutString(str, 5));

//
//


// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню