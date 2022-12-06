// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     console.log(this);
// }
//
// let arr = [];
// arr.push(
//     new User(1, 'kokos', 'kokosovich', 'kokoskokosovich@gmail.com', 123123123),
//     new User(2, 'kokos', 'kokosovich', 'kokoskokosovich@gmail.com', 123123123),
//     new User(3, 'kokos', 'kokosovich', 'kokoskokosovich@gmail.com', 123123123),
//     new User(4, 'kokos', 'kokosovich', 'kokoskokosovich@gmail.com', 123123123),
//     new User(5, 'kokos', 'kokosovich', 'kokoskokosovich@gmail.com', 123123123),
//     new User(6, 'kokos', 'kokosovich', 'kokoskokosovich@gmail.com', 123123123),
//     new User(7, 'kokos', 'kokosovich', 'kokoskokosovich@gmail.com', 123123123),
//     new User(8, 'kokos', 'kokosovich', 'kokoskokosovich@gmail.com', 123123123),
//     new User(9, 'kokos', 'kokosovich', 'kokoskokosovich@gmail.com', 123123123),
//     new User(10, 'kokos', 'kokosovich', 'kokoskokosovich@gmail.com', 123123123)
// )
// console.log(arr);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filter = arr.filter(function (user){
//     return user.id % 2 === 0;
// })
// console.log(filter);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = arr.sort(function (a,b) {
//     if (a.id>b.id)
//         return 1
//     if (a.id<b.id)
//         return -1
//
// })
// console.log(sort);


//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let arr = [];
// arr.push(
//     new Client(1,'someName','someSurname','someEmail',1231212, [2] ),
//     new Client(1,'someName','someSurname','someEmail',1231212, [5] ),
//     new Client(1,'someName','someSurname','someEmail',1231212, [4] ),
//     new Client(1,'someName','someSurname','someEmail',1231212, [6] ),
//     new Client(1,'someName','someSurname','someEmail',1231212, [1] ),
//     new Client(1,'someName','someSurname','someEmail',1231212, [3] ),
//     new Client(1,'someName','someSurname','someEmail',1231212, [8] ),
//     new Client(1,'someName','someSurname','someEmail',1231212, [7] ),
//     new Client(1,'someName','someSurname','someEmail',1231212, [0] ),
//     new Client(1,'someName','someSurname','someEmail',1231212, [9] )
// )
//
// let sortArr = arr.sort(function (a, b) {
//     if (a.order > b.order)
//         return 1
//     if (a.order < b.order)
//         return -1
//
// });
// console.log(sortArr);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Cars(model, producer, yearOfProduction, engineCapacity, maxSpeed) {
//     this.model = model;
//     this.producer = producer;
//     this.yearOfProduction = yearOfProduction;
//     this.engineCapacity = engineCapacity;
//     this.maxSpeed = maxSpeed;
//     this.drive = function () {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     }
//     this.info = function () {
//         return `model:${this.model}, producer:${this.producer},year Of Production:${this.yearOfProduction} `
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maxSpeed = this.maxSpeed + newSpeed
//
//     }
//     this.changeYear = function (newValue) {
//         return this.yearOfProduction = newValue
//     }
//     this.addDriver = function () {
//         return {name:'Vasya', age:31}
//
//     }
//
//
// }
//
// let car1 = new Cars('a3', 'audi', 2022, '3.0', 123)
// console.log(car1);
// console.log(car1.drive())
// console.log(car1.info());
// console.log(car1.increaseMaxSpeed(20))
// console.log(car1.changeYear(1960))
// console.log(car1.addDriver());


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Cars {
//     constructor(model, producer, yearOfProduction, engineCapacity, maxSpeed) {
//         this.model = model;
//         this.producer = producer;
//         this.yearOfProduction = yearOfProduction;
//         this.engineCapacity = engineCapacity;
//         this.maxSpeed = maxSpeed;
//     }
//
//     drive() {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     }
//
//     info() {
//         return `model:${this.model}, producer:${this.producer},year Of Production:${this.yearOfProduction} `
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         return this.maxSpeed = this.maxSpeed + newSpeed
//
//     }
//
//     changeYear(newValue) {
//         return this.yearOfProduction = newValue
//
//     }
//
//     addDriver() {
//         return {name: 'Vasya', age: 31}
//     }
// }
//
// let car1 = new Cars('a3', 'audi', 2022, '3.0', 123)
//
// console.log(car1.drive());
// console.log(car1.info());
// console.log(car1.increaseMaxSpeed(10));
// console.log(car1.changeYear(10));
// console.log(car1.addDriver());
// console.log(car1);


//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
//
// class Princesses {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
//
// }
//
// let arr = [];
// arr.push(
//     new Princesses('Anna', 123, 1),
//     new Princesses('Rapunzel', 234, 2),
//     new Princesses('Cinderella', 345, 3)
// )
//
// class Prince {
//     constructor(name, age, perfectMatch) {
//         this.name = name;
//         this.age = age;
//         this.perfectMatch = perfectMatch;
//     }
// }
// let prince1 =new Prince('Aladdin', 1000, 2)
// arr.push(prince1)
// console.log(arr);
// let match = arr.filter(function (person) {
//     return person.footSize === 2;
//
// })
// console.log(match);
// const perfectMatch = match.concat(prince1);
// console.log(perfectMatch);

// function foo(princes) {
//     return princes.footSize === 2;
//
// }
//
// console.log(arr.find(foo));

//
//
// for (const arrElement of arr) {
//     console.log(arrElement);
//     if (arrElement.footSize === arrElement.perfectMatch) {
//         let couple = arrElement.concat(arrElement);
//         console.log(couple);
//     }

// }
