// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let string = 'hello world';
// let string = 'lorem ipsum';
// console.log(string.length);
// let string = 'javascript is cool';
// console.log(string.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let string = 'hello world';
// console.log(string.toUpperCase());
// let string = 'lorem ipsum';
// console.log(string.toUpperCase());
// let string = 'javascript is cool';
// console.log(string.toUpperCase())


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let string = 'HELLO WORLD';
// console.log(string.toLowerCase())
// let string = 'LOREM IPSUM';
// console.log(string.toLowerCase())
// let string = 'JAVASCRIPT IS COOL';
// console.log(string.toLowerCase())


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string';
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let split = str.split(' ');
// console.log(split);
// ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// function sortNums(direction) {
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter(function (item) {
//     return item.monthDuration > 5;
// })
// console.log(filter)

// -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort(function (a,b) {
//     return b.monthDuration - a.monthDuration;
//
// }))


//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
let deck = [
    {cardSuit: 'Spade', value: 6, color: 'Black'},
    {cardSuit: 'Clubs', value: 6, color: 'Black'},
    {cardSuit: 'Hearts', value: 6, color: 'Red'},
    {cardSuit: 'Diamonds', value: 6, color: 'Red'},
    {cardSuit: 'Spade', value: 7, color: 'Black'},
    {cardSuit: 'Clubs', value: 7, color: 'Black'},
    {cardSuit: 'Hearts', value: 7, color: 'Red'},
    {cardSuit: 'Diamonds', value: 7, color: 'Red'},
    {cardSuit: 'Spade', value: 8, color: 'Black'},
    {cardSuit: 'Clubs', value: 8, color: 'Black'},
    {cardSuit: 'Hearts', value: 8, color: 'Red'},
    {cardSuit: 'Diamonds', value: 8, color: 'Red'},
    {cardSuit: 'Spade', value: 9, color: 'Black'},
    {cardSuit: 'Clubs', value: 9, color: 'Black'},
    {cardSuit: 'Hearts', value: 9, color: 'Red'},
    {cardSuit: 'Diamonds', value: 9, color: 'Red'},
    {cardSuit: 'Spade', value: 10, color: 'Black'},
    {cardSuit: 'Clubs', value: 10, color: 'Black'},
    {cardSuit: 'Hearts', value: 10, color: 'Red'},
    {cardSuit: 'Diamonds', value: 10, color: 'Red'},
    {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Jack', color: 'Red'},
    {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
    {cardSuit: 'Spade', value: 'King', color: 'Black'},
    {cardSuit: 'Clubs', value: 'King', color: 'Black'},
    {cardSuit: 'Hearts', value: 'King', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
    {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'}
];
// let filter = deck.filter((card) => cardSuit === 'Clubs' && value === 'Ace');
// console.log(filter);

// let filter = deck.filter((card) => value === 6);
// console.log(filter);

// let filter = deck.filter((card) => cardSuit ==='Hearts'&& cardSuit ==='Diamonds');
// console.log(filter);

// let filter = deck.filter((card) => cardSuit ==='Diamonds');
// console.log(filter);

// let filter = deck.filter((card) => cardSuit === 'Diamonds' && value > 6);
// console.log(filter);


//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let reduce = deck.reduce((accumulator, item) =>{
// if (cardSuit ==='spades'){
//     accumulator.spades.push(deck.cardSuite)
// }
//     if (cardSuit ==='diamonds'){
//         accumulator.diamonds.push(deck.cardSuite)
//
// }
//     if (cardSuit ==='hearts') {
//         accumulator.hearts.push(deck.cardSuite)
//     }
//
//         if (cardSuit ==='clubs') {
//             accumulator.clubs.push(deck.cardSuite)
//         }
//
// {spades:[], diamonds:[], hearts:[], clubs:[]});
//
//     console.log(reduse);