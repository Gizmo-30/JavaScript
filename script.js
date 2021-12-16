/* 2 lesson start */

// метод console.log()
console.log(1) /* это способ вывода информации в когсоль разработчика */

// тиып данных
console.log('Строка'); /* Строковый тип данных */
console.log(25); /* числовой тип данных */
console.log('25'); /* Строкоый тип данных  string*/
console.log(true);/* булевый тип данных правда  */
console.log(false);/* булевый тип данных ложь */

// var name = 'John';
// var year = 40;
// var bool = true;
// var und;

console.log(name);
console.log(year);
console.log(bool);
console.log(und);

console.log('Я ' + name + ' мне ' + year + ' лет ');  /* Склеивание строк - КОНКАТЕНАЦИЯ , пробел тоже символ  */
console.log(' ');

var allInfo = 'Я ' + name + ' мне ' + year + ' лет '

console.log(allInfo);

console.log(6 + 3);
console.log(6 - 3);
console.log('6' + 3);
console.log(6 * 3);
console.log(6 / 3);
console.log(6 % 5); /* Остаток от деления */


// console.log('6 + 3 =' + (6 + 3));
// var str = +prompt('Введите свое имя')

// console.log(str);

// alert('str')

/* 2 lesson end */

/* 3 lesson start */

// Условия в  js

//  в условиях делаем проверку на TRUE и FALSE

/* 

== - не строгая сравнение. '2' == 2 = true
=== - строгая сравнение. '2' === 2 = false. Проверяет также по типу данных

> = возвращает true если операнд слева больше операнд справа 
< = возвращает true если операнд справа больше операнд слева
=> - возвращает true если операнд слева больше ил равен операнду слева
<= - возвращает true если операнд слева меньше ил равен операнду слева
!= - возвращает true если операнды не равны друг другу 2 != 3 = true
!== - '2' !== 3 = false

*/

// console.log(1 == 1);/* true */
// console.log('1' == 1);/* true */
// console.log('2' === 2); /* false*/
// console.log('3' !== 5);

/*
if(условие){
    тело условия
}
 */

// if(1 == 1) {
//     console.log("верно")
// };

// var a = prompt("Введиет слово Привет")

// if( a == "Привет") {
//     console.log("вы ввели правильное слово");
// } else {
//     console.log("Ошибка");
// }

// var b =  prompt("Введиет цифру")

// if(b === 1){
//     console.log("Значение и тип равны");
// } else if( b == 1) {
//     console.log("значение равны");
// }

// if(b == 1){
//     console.log(b + " равен 1");
// }else if(b > 1) {
//     console.log(b + ' больше одного');
// }else {
//     console.log("ошибка");
// }

/*
&& - 2 амперсанта гооврят нам о том что у нас есть два обязательных условия. a >= b && a == b
isNaN() - isNaN("asd") = true. isNaN(5) = false isNaN не смотрет на тип данных
! - НЕ. !isNaN("asd") = false. !isNaN(5) = true
Number - меняет тип данных на числовой
 */


// var a = prompt("введите первое число")
// var b = prompt("введите второе число")

// a = Number(a)
// b = Number(b)

// if(a > b && !isNaN(a) && !isNaN(b)){
//     console.log(a + ' больше ' + b)
// }else if(a < b && !isNaN(a) && !isNaN(b)) {
//     console.log(a + " меньше " + b);
// }else if(a == b && !isNaN(a) && !isNaN(b)){
//     console.log(a + " равно " + b);
// } else {
//     if(isNaN(a) && isNaN(b)) {
//         console.log("Оба числа введены не верно");
//     } else if(isNaN(a)) {
//         console.log("Первое число введено не верно");
//     } else {
//         console.log("Второе число введено не правильно");
//     }
// }

/* 
|| - оператор ИЛИ в js. ищет первый true.

*/

// var str = prompt("Введите секретное слово");

// if(str == "я"){
//     console.log("вы угадали секретное слово");
// }else if(str == "Я") {
//     console.log("вы угадали секретное слово");
// }else if(str == "I") {
//     console.log("вы угадали секретное слово");
// }else if(str == "i") {
//     console.log("вы угадали секретное слово");
// }else {
//     console.log("Ошибка");
// }


// if(str == "я" || str == "Я" || str == "I" || str == "i"){
//     console.log("вы угадали секретное слово");
// }else {
//     console.log("Ошибка");
// }

// var day = +prompt("Введите день недели")

// day = Number(day)

// switch (day) {
//     case 1:
//         alert("Понедельник");
//         break;
//     case 2:
//         alert("Вторник");
//         break;
//     case 3:
//         alert("Среда");
//         break;
//     case 4:
//         alert("четверг");
//         break;
//     case 5:
//         alert("Пятница");
//         break;
//     case 6:
//         alert("суббота");
//         break;
//     case 7:
//         alert("Воскресенье");
//         break;
//     default:
//         alert("Такого дня не существует");
//         break;
// }

/* 3 lesson end */

/* 4 lesson start */

// Циклы

/* 
++ - Прибавка на один. 5++ = 6 (5 + 1)

i - итератор

var i = 0;

i++ = 1

*/

// var i = 0;

// console.log(++i); /* Префикс - сначало прибавляет единицу потом выводит */

// console.log(i++); /* Постфикс - выводит потом прибавляет единицу*/

// console.log(i);

// Цикл While

// var i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++
// }


// do while

// do {
//     var x = +prompt('Введите число')
// } while (isNaN(x) || x != 2);{
//     console.log(x);
// }

// var i = 0;

// do {
//     console.log(i);
//     i++ 
// } while (i < 5);


// цикл for

/* 

for(начало; условие; шаг;){
    
}

*/

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i);

// let - объявление локальной переменной 

// for (let i = 0; i < 10; i++) {
//         console.log(i);
// }

// console.log(i);

// for( let i = 11; i <= 33; i++){
//     console.log(i);
// }

// let a = +prompt('Введите число')

// if(!isNaN(a)) {
//     console.log(a);
// } else {
//     console.log(10);
// }

/* 

тернарный оператор условие ? если условие true : если условие false

*/

// a = !isNaN(a) ? a : 10

// console.log(a);

// for (let i = 0; i <= a; i++) {
//     console.log(i);
// }

// let a = 1

// for (let i = 1; i <= 5; i++) {
//     a = a * i;
// }

// console.log(a);

/* 4 lesson end */


/* 5 lesson start */

// Функции в js. function


// декларационная функция. function -имя функции- () {}

// function sum() {
//     let num = 5 + 5;
//     return num;
// }

// console.log(sum());


// function sum(num1, num2) {
//     let num = num1 + num2
//     return num
// }

// console.log(sum(10));

// function sum(num1 = 10, num2 = 15) {
//     let num = num1 + num2
//     return num
// }

// console.log(sum(30, 50));

// let number = 10

// console.log(sum(1, number));

// console.log(sum(1, sum(5,6)));

// let answer = sum()

// console.log(answer);


// Math - это работа с математикой в JS
// Math.random() - отдает случайные числа от 0 до 1 ( 1 никогда не выводится )
// Math.floor() - округляет друобное число до минимального целого -- 12,9 - 12, 12.1 - 12
// Math.ceil() - округляет дробное число до максимального целого -- 12,9 - 13, 12.1 - 13
// Math.round() - округляет до ближайшего целого


// console.log(Math.random());


// let rand = Math.random()

// console.log(rand);

// console.log(Math.floor(12.9));

// console.log(Math.ceil(99.9));

// console.log(Math.round(99.3));

// let num = Math.floor(Math.random() * (20 + 1))

// console.log(num);

// let num = Math.floor(Math.random() * (30 + 1))

// function random(min, max) {
//     let num = Math.floor(Math.random() * (max + 1 - min) + min)
//     return num
// }

// console.log(random(10,50));
// console.log(random(1,5));

// let num1 = random(1,10)
// let num2 = random(1,100)

// console.log(num1);
// console.log(num2);


// var a = +prompt('Введите от')
// var b = +prompt('Введите до')

// function random(a, b) {
//     let fan = Math.floor(Math.random() * (b + 1 - a) + a)
//     return fan;
// }

// i = 1

// while (i <= 10) {
//     let c = random(a,b)
//     let d = random(a,b)
//     let f = +prompt(c + ' + ' + d + ' = ' + ' ? ')
//     console.log(c + ' + ' + d + ' = ' + ( c + d ) + ' ( ваш ответ ' + f + ' )');
//     i++
// }

// for (let i = 1; i <= 10; i++) {
//     let c = random(a, b)
//     let d = random(a, b)
//     let f = +prompt(c + ' + ' + d + ' = ' + ' ? ')
//     console.log(c + ' + ' + d + ' = ' + (c + d) + ' ( ваш ответ ' + f + ' )')
// }

/* 5 lesson end */


/* 6 lesson start */

/* let amount = +prompt('Введите кол-во примеров')

function radomExam(min,max) {
    return Math.floor(Math.random() * (max-min) + min)
}

function randomSym() {
    return Math.floor(Math.random() * (5 - 1) + 1)
}

for (let i = 0; i < amount; i++) {
    let examNum1 = radomExam(1,20);
    let examNum2 = radomExam(1,20);
    let examSym = randomSym();
    let exam = 0
    
    if(examSym == 1) {
        exam = examNum1 + examNum2;
        examSym = '+'
    } else if(examSym == 2){
        exam = examNum1 - examNum2;
        examSym = '-'
    }else if(examSym == 3){
        exam = examNum1 * examNum2;
        examSym = '*'
    }else if(examSym == 4){
        exam = examNum1 / examNum2;
        examSym = '/'
    }
    
    let answer = +prompt(examNum1 + examSym + examNum2)
    console.log(exam == answer ? ' ваш ответ верный - ' + answer : ' Ваш ответ не верный -' + answer + ' ! ' + ' верный ответ ' + exam);
} */



// Объекты в JS

// const - неизменяемая переменная. Константе

// let a = 21
// console.log(a);
// a = a + 2
// console.log(a);
// a = 50
// console.log(a);
// const a = 20;
// console.log(a);
// a = 20
// console.log(a);

// {}
// typeof

// const obj = {}

// console.log(typeof function () {});

// const obj = {
//     name: 'John',
//     age: 25
// }

// console.log(obj);

// console.log('name' in obj);
// console.log('age' in obj);
// console.log('form' in obj);

// console.log(obj.age);

// obj.from = 'Ташкент'

// console.log(obj);

// console.log('from' in obj);

// console.log(obj.from);

// const obj = {
//     name: 'John',
//     age: 25
// }

// obj.from = 'Ташкент'

// obj.name
// obj.age
// obj.from

// for(const key in obj) {
//     // console.log(' ключ ' + key + ' значение ключа ' + obj[key]);

//     console.log(`Kлюч ${key} значение ключа ${obj[key]}`);  /* Шаблонный строки */
// }

// this - обращаеися к самому объекту в котором он используется

// const user = {
//     name: 'Ivan',
//     age: 30,
//     ageAdd: function () {
//         return ++this.age
//     }

// }



// console.log(user.ageAdd());

// user.name = 'John'

// console.log(user);

// const users = {
//     '1': {
//         job: 'Backend',
//         age: 25
//     },
//     '1': {
//         job: 'Fronted',
//         age: 40
//     }
// }

// for (const key in users) {
//     console.log(users[key]);
//     for (const newkey in users[key]) {
//         console.log(users[key][newkey]);
//     }
// }

/* 6 lesson end */


/* 7 lesson start */

// Массивы в JS. array [].


// let a = [];

// console.log(typeof a);

// let num = [1,2,3,4,5,6,7,8,9,10];

// console.log(num);

// console.log(num[3]);

// console.log(num.length);


// let str = 'hello world';

// console.log(str.length);

// let num = [1,2,3,4,5,6,7,8,9,10,11];

// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);
// console.log(num[3]);
// console.log(num[4]);
// console.log(num[5]);
// console.log(num[6]);
// console.log(num[7]);
// console.log(num[8]);

// for(let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }


// for(let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// let names = ['Alex', 'John', 'Ivan', 'Marina'];


// console.log(names[2]);

// for(let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// let num = [0,1,2,3,4,5,6,7,8,9,10,11,12];

// let sum = 0

// for(let i = 0; i < num.length; i++) {
//     sum +=  num[i]
// }

// console.log(sum);

// let names = ['Alex', 'John', 'Ivan', 'Marina'];

// for(const key in names) {
//     console.log(names[key]);
// }

// for(let value of names) {
//     console.log(value);
// }

// let users = [{
//     name: 'Alex',
//     age: 20
// }, 
// {
//     name: 'John',
//     age: 30
// }, 
// {
//     name: 'Ivan',
//     age: 40
// }]


// for(let value of users) {
//     // console.log(value);
//     for(const key in value) {
//         console.log(value[key]);
//     }
// }

// let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/* 7 lesson end */


/* 8 lesson start */

// $ Методы массивов


// $ push() - добавить элемент в конец массива
// let arr = [1,2,3,4,5,6,7,8,9,10]
// arr.push(11)
// // console.log(arr);
// for(let i = 0; i <= 10; i++){
//     arr.push(i)
// }
// console.log(arr);


// $ pop() - удаляет элемент с конца массива
// let arr = [1,2,3,4,5,6,7,8,9,10]
// arr.pop()
// console.log(arr);


// $ unshift() - добавляет элемент в начало массива
// let arr = [1,2,3,4,5,6,7,8,9,10]
// arr.unshift(100)
// console.log(arr);


// $ shift() - удаляет элемен с начало массива
// let arr = [1,2,3,4,5,6,7,8,9,10]
// arr.shift()
// console.log(arr);


// $ splice() - удаляет элемент под определенным индексом
// let names = ['alex', 'John', 'Ivan', 'Marina',]
// names.splice(1, 2)
// console.log(names);


// $ slice() - создает новый массив (копию) и изменяет
// let fruits = ['apple','bannana','plum','orange','pineapple',]
// let result = fruits.slice(2, 5)
// console.log(result);


// $ reverse() - переварачивает массив наоборот
// let fruits = ['apple','bannana','plum','orange','pineapple',]
// fruits.reverse()
// console.log(fruits);

// $ split() - деалет из строки массив
// let str = 'hello, world'
// let res = str.split(' ')
// console.log(res);


// $ join() - из массива делает строку
// let names = ['Ivan', 'Alex', 'John']
// let res = names.join(' - ')
// console.log(res);


// $ forEach() - метод для пребора массива
// let fruits = ['apple','bannana','plum','orange','pineapple',]
// fruits.forEach(element => {
//     console.log(element);
// })

// $ sort() - сортирует массив
// let num = [2,1,3,5,4,10,6]
// num.sort(function (a,b) {
//     return a - b 
// })
// console.log(num);
// let arr = ['арбуз','Вишня','бананы',]
// arr.sort()
// console.log(arr);


// $ map() - создает новый массив (копию) и изменяет

// $ toLowerCase() - переводит строку в нижный регистр
// $ toUpperCase() - преводит строку в верхний регистр

// let names = ['IVan', 'jOhn', 'ALEX', 'marinA']
// let res = names.map(name => name.toUpperCase())
// console.log(res);
// console.log(names);


// filter() - фильтрует элементы массива
// let arr = [
//     {
//         name: 'Alex',
//         age:20
//     },
//     {
//         name: 'John',
//         age:50
//     },
//     {
//         name: 'Ivan',
//         age:25
//     },
//     {
//         name: 'Alex',
//         age:40
//     },
// ]

// arr.forEach(element => {
//     if (element.age < 30) {
//         console.log(element.name, element.age);
//     }
// });

// let res = arr.filter(item => item.age < 30) 
// console.log(res);

// every/some 

// let arr = [4, 'aqwe', 'asfsad']
// console.log(arr.some(item => typeof (item) === 'number'));/* выводит true если хоть один элемент массива подходит под условие */
// console.log(arr.every(item => typeof (item) === 'number'));/* выводит true только в том случае когда каждый элемент массива подходит под условие */

// const sum = (a, b) => {
//     return a + b
// }

// sum(a, b)


/* 8 lesson end */

/* 6 MONTH START */
/* 1 LESSON START  */

// function func(num1, num2) {
//     return num1 + num2 
// }

// console.log(func(1, 2));

// const func = (num1, num2) => num1 + num2 

// console.log(func(2, 4));

// const obj = {
//     method: function () {
//         return this 
//     },
//     name: 'asdf'
// }

// console.log(obj.method());

// const obj = {
//     method: function () {
//         const sum = () => {
//             this
//         }
//     },
//     name: 'asdf'
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.forEach((item, i) => {
//     console.log(item);
// })

// let res = arr.sort(function (a,b) {
//     return a - b
// })

// console.log(res);

/* Способ получить элементе по id */
// const box = document.getElementById('box')
// console.log(box);


/* Получает элемент по названию тега */
// const btns = document.getElementsByTagName('button')
// console.log(btns);
// btns.forEach(btn => {
//     console.log(btn);     /* Их за того что Foreach вышло после etElementsByTagName оно не рабоате с ним (можно for или for of) */
// });

// for (let i = 0; i < btns.length; i++) {
//     console.log(btns[1]);
// }


/* Получает элемент по названию класса */
// const circle = document.getElementsByClassName('circle')      /* Их за того что Foreach вышло после getElementsByClassName оно не рабоате с ним (можно for или for of) */
// console.log(circle);

/* Новый метод получения элементов со страниц */
const circle = document.querySelectorAll('.circle')

circle.forEach(item => {
    item.addEventListener('click', () => {
        // if (item.style.background == 'blue') {
        //     item.style.background = 'red'
        // }else{
        //     item.style.background = 'blue'
        // }

        // item.classList.add('yellow')

        // contains() - проверяет есть ли такой класс

        // if (item.classList.contains('yellow')) {
        //     item.classList.remove('yellow')
        // }else{
        //     item.classList.add('yellow')
        // }

        item.classList.toggle('yellow')

        item.style.marginLeft = 'left'
    })

/* 1 LESSON END */
/* 6 MONTH END*/
