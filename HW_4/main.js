// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let someText = [
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
// ]
// for (let i = 0; i < someText.length; i++) {
//     const someTextElement = someText[i];
//     document.write(`<div>${someTextElement.smTxt}</div>`)
//
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
//
// let someText = [
//     {smTxt:'text', index:0},
//     {smTxt:'text', index:1},
//     {smTxt:'text', index:2},
//     {smTxt:'text', index:3},
//     {smTxt:'text', index:4},
//     {smTxt:'text', index:5},
//     {smTxt:'text', index:6},
//     {smTxt:'text', index:7},
//     {smTxt:'text', index:8},
//     {smTxt:'text', index:9},
//     ]
// for (let i = 0; i < someText.length; i++) {
//     const someTextElement = someText[i];
//     document.write(`<div>${someTextElement.smTxt} ${someTextElement.index}</div>`)

// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let someText = [
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
//     {smTxt:'text'},
// ];
//     let i = 0;
// while (i < someText.length) {
//     document.write(`<h2>${someText[i].smTxt}</h2>`)
//     i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let someText = [
//     {smTxt:'text', index:0},
//     {smTxt:'text', index:1},
//     {smTxt:'text', index:2},
//     {smTxt:'text', index:3},
//     {smTxt:'text', index:4},
//     {smTxt:'text', index:5},
//     {smTxt:'text', index:6},
//     {smTxt:'text', index:7},
//     {smTxt:'text', index:8},
//     {smTxt:'text', index:9},
//     ];
// let i = 0;
// while (i < someText.length) {
//     document.write(`<h2>${someText[i].smTxt} ${someText[i].index}</h2>`)
//     i++;
// }


//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву


//

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let i = 0; i < listOfItems.length; i++) {
    const listOfItem = listOfItems[i];
    document.write(`<ul>
<li>${listOfItem}</li>
</ul>`)

}
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//

//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    document.write(`
<div class="product-card">
<img src="${product.image}" alt="" class="product-image">
<h3 class="product-title">${product.title}  -  ${product.price} UAH</h3>
</div>


`)

}


// --------------------
//     є масив
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (let user of users) {
    // debugger;
    if (user.age > 30) {
        console.log(`${user.name} ${user.age} ${user.status}`)
    }
    if (user.status) {
        document.write(`<div class="true">
                            <h4>${user.name}</h4>
                                <p>${user.age} ${user.status}</p>
                       </div>`)
    }
    if (!user.status) {
        document.write(`<div class="false">
                            <h4>${user.name}</h4>
                                <p>${user.age} ${user.status}</p>
                        </div>`)
    }

}


