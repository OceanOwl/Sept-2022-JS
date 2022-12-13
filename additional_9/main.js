let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let reduce = users.reduce((previousValue, user) => {
//         previousValue.address.push(user.address);
//         return previousValue
//     },
//
// {address: []}
// );
// console.log(reduce);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (const user of users) {
//     let divElement = document.createElement('div');
//     divElement.innerHTML = `${user.name}${user.age}${user.status}${user.address}`
//     document.body.append(divElement);
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users) {
//     let div1 = document.createElement('div');
//     div1.innerHTML = `${user.name}`
//     document.body.append(div1);
//
//     let div2 = document.createElement('div');
//     div2.innerHTML = `${user.age}`
//     document.body.append(div2);
//
//     let div3 = document.createElement('div');
//     div3.innerHTML = `${user.status}`
//     document.body.append(div3);
//
//     let div4 = document.createElement('div');
//     div4.innerHTML = `${user.address}`
//     document.body.append(div4);
//
//     let mainDiv = document.createElement('div');
//     document.body.append(mainDiv);
//     mainDiv.append(div1, div2, div3, div4);
//
//
//     console.log(mainDiv);
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (const user of users) {
//
//     let mainDiv = document.createElement('div');
//     document.body.append(mainDiv);
//
//     let div1 = document.createElement('div');
//     div1.innerHTML = `${user.name}`
//     mainDiv.append(div1);
//
//     let div2 = document.createElement('div');
//     div2.innerHTML = `${user.age}`
//     mainDiv.append(div2);
//
//     let div3 = document.createElement('div');
//     div3.innerHTML = `${user.status}`
//     mainDiv.append(div3);
//
//
//     let ul = document.createElement('ul');
//     mainDiv.append(ul);
//
//     for (const adress in user.address) {
//         let li = document.createElement('li');
//         li.innerText = `${adress}`;
//         ul.append(li);
//     }
//
// }

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
let titleDiv = document.createElement('div')
titleDiv.setAttribute('id', 'content')
document.body.append(titleDiv);

let title = document.createElement('h1');
title.innerText = `${'Правила бойцовского клуба'}`
document.body.append(title)

let mainDiv = document.createElement('div');
document.body.append(mainDiv);

for (const rule of rules) {

    let ruleItem = document.createElement('div');
    ruleItem.classList.add('rules')
    mainDiv.append(ruleItem);

    let ruleTitle = document.createElement('h2');
    ruleTitle.innerText = `${rule.title}`
    ruleItem.append(ruleTitle);

    let ruleDescription = document.createElement('p');
    ruleDescription.innerHTML = `${rule.body}`
    ruleItem.append(ruleDescription);


}

// за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт, всі заголовки покласти в (масив) характеристику headings,всі параграфи покласти в характеристику (масив) paragraphs

function foo(body) {
    let elementsByTagName = document.getElementsByTagName('h1')[0];
    JSON.stringify(elementsByTagName);
    obj.headings.push(elementsByTagName);

    let elementsByTagNameH2 = document.getElementsByTagName('h2')[0];
    JSON.stringify(elementsByTagNameH2);
    obj.headings.push(elementsByTagNameH2);

    let p = document.getElementsByTagName("p");
    for (const pElement of p) {
        obj.paragraphs.push(pElement);
    }

}

let obj = {headings: [], paragraphs: []}
foo(document.body);
console.log(obj);