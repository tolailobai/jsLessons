// 54-2.7 85-2.8 122-2.9 

console.log('Урок 2.4 - операторы');
    'use strict';
    // z = 5;
    // console.log(z);

    // alert('Привет Братишка');
    // console.log('Едрить твою налево');
    // let age = confirm('Вам есть 18?');
    // console.log(age);
    // const answer = prompt("Your name","Ivan");
    // console.log(answer);

    // Игра угадай число
    // const number = 7;
    // let result = false;

// while (!result) {
//   const answer = prompt('Угадай число от 1 до 10?');
//   if (answer === null) {
//     break;
//   }
//   switch (+answer) {
//     case number - 2:
//     case number + 2:
//       alert('Уже теплее!');
//       break;
//     case number - 1:
//     case number + 1:
//       alert('Горячо!');
//       break;
//     case number:
//       alert('Ты угадал! Это число {$number}.');
//       result = true;
//       break;
//     default:
//       alert('Холодно!');
//   }
// }

// оператор И &&
// let a = true,
//     b = true,
//     c = false,
//     d = false;
// console.log(a && b); console.log(a && c);
// // оператор ИЛИ ||
// console.log(b || c); console.log(c || d);
// // оператор отрицания ! (в данном случае инвертирования)
// console.log(a && !c);

// console.log('Урок 2.5');
console.log('Задание 2.7');
// let money = prompt('Ваш бюджет на месяц?',''),
//     time = prompt('Введите дату в формате YYYY-MM-DD','');
// console.log(money);
// console.log(time);
// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: {},
//     savings: false,
// };

// // let firstExpenses = prompt('Введите обязательную статью расходов в этом месяце','');
// // let price = prompt('Во сколько обойдется?','');

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a2 = prompt("Во сколько обойдется?", ''),
// 	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	a4 = prompt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

// // let expenses = {
// //     firstExpenses,price
// // }
// alert(appData.budget/30);
// console.log(appData);
// console.log(expenses);
console.log('Урок 2.8 - if');
// if (2*4==8) {
//     console.log('Точно');
// } else {
//     console.log('неТ');
// }

// let num = 50;
// if (num < 49) {
//     console.log('неверно')
// } else if (num>100) {
//     console.log('многовато')
// } else {
//     console.log('верно')
// }

// тернарный оператор
// (num == 50) ? console.log('Верно!') : console.log('неверно');
// использование SWITCH с CASE
// switch (num) {
//     case num < 49:
//         console.log('неверно');
//         break;
//     case num > 100:
//         console.log('много');
//         break;
//     case num >80:
//         console.log('все еще много');
//         break;
//     case 50:
//         console.log('верно');
//         break
//     default:
//         console.log('Что пошло не так');
//         break
// }

console.log('Урок 2.9 - циклы');
// let numa = 49;
// while (numa < 55) {
//     console.log(numa);
//     numa++;
// };

// let numb = 49;
// do {
//     console.log(numb);
//     numb++;
// }
// while (numb < 54);

// for (let i = 1; i < 8; i++) {
//     if (i == 4) {continue}
//     if (i == 6) {break}
//     console.log(i);
// }

console.log('Урок 2.10 - Пишем приложение Часть 1');
// let money = +prompt("Ваш бюджет на месяц?", ''),
// 	time = prompt('Введите дату в формате YYYY-MM-DD', '');

// let appData = {
// 	budget: money,
// 	expenses: {},
// 	optionalExpenses: {},
// 	income: [],
// 	timeData: time,
// 	savings: false
// };

// for (let i = 0; i < 2; i++) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	    b = prompt("Во сколько обойдется?", '');
//     // а далее внесем код, который не пропустит пустые поля при заполнении пользователем
//     if ((typeof(a)) === 'string' // ответ должен быть строкой
//         && (typeof(a)) != null // ответ не должен быть null
//         && (typeof(b)) != null // ответ не должен быть null
//         && a != '' // ответ не должен быть пустым
//         && b != '' // ответ не должен быть пустым
//         && a.length < 50 ) // в ответе не более 50 символов
//     {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {i--};
// };


// другой вариант цикла
// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
// // а далее внесем код, который не пропустит пустые поля при заполнении пользователем
// if ((typeof(a)) === 'string' // ответ должен быть строкой
//     && (typeof(a)) != null // ответ не должен быть null
//     && (typeof(b)) != null // ответ не должен быть null
//     && a != '' // ответ не должен быть пустым
//     && b != '' // ответ не должен быть пустым
//     && a.length < 50 ) // в ответе не более 50 символов
//    {
//     console.log('done');
//     appData.expenses[a] = b;
//     }
//     else {console.log('Фигня');
//         i--;
//     }
//     i++;
// } while (i < 2);




// appData.moneyPerDay = appData.budget / 30;

// alert('Ежедневный бюджет: ' + appData.moneyPerDay +" руб.");

// if (appData.moneyPerDay < 500) {
//     console.log('Минимальный уровень достатка')
// } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
//     console.log('Средний уровень достатка')
// } else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 5000) {
//     console.log('Достойный уровень достатка')
// } else if (appData.moneyPerDay > 5000) {
//     console.log('Хорошо живём!)')
// } else { console.log('Не понятно')};

console.log('2.11 Функции');
// let numc = 20;
// let nume = 70;
// console.log(numc);
// function actionOnNumc() {
//     numc = 10;
//     numd = 45;
//     let nume = 85;
//     console.log(nume);
// }
// actionOnNumc();
// console.log(numc);
// console.log(numd);
// console.log(nume);

// // функция для осуществления сложения
// function sum(a,b) {
//     return ( a + b );
// };
// console.log(sum(3,4));
// console.log(sum(5,6));

// // return для возврата переменной из функции
// function returnVar() {
//     let num = 50;
//     return num;
// };
// let anotherNum = returnVar();
// console.log(anotherNum);
// // стрелочная функция =>
// let summury = (c,d) => c + d;
// console.log(summury(8,9));

// // свойство - это вспомогательные значения, их очень много всяких, пример:
// let instr = 'Saxophone';
// console.log(instr.length);
// // методы - это вспомогательные функции, позволяют изменять контент:
// console.log(instr.toUpperCase());
// console.log(instr.toLowerCase());

// let twelve = '12.5';
// console.log(typeof(twelve));
// console.log(Math.round(twelve));

// let fiftynPx = '15.4px';
// console.log(parseInt(fiftynPx));
// console.log(parseFloat(fiftynPx));

console.log('2.12 Функции. Практика');

// let money, time;

// function start() {
//     money = +prompt("Ваш бюджет на месяц?", ''),
// 	time = prompt('Введите дату в формате YYYY-MM-DD', '');

//     while(isNaN(money) || money == "" || money == null) {
//         money = +prompt("Ваш бюджет на месяц?", 'Введите корректное значение');
//     };
// }
// start();

// let appData = {
// 	budget: money,
// 	expenses: {},
// 	optionalExpenses: {},
// 	income: [],
// 	timeData: time,
// 	savings: true
// };

// function chooseExpenses() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//             b = prompt("Во сколько обойдется?", '');
//         // а далее внесем код, который не пропустит пустые поля при заполнении пользователем
//         if ((typeof(a)) === 'string' // ответ должен быть строкой
//             && (typeof(a)) != null // ответ не должен быть null
//             && (typeof(b)) != null // ответ не должен быть null
//             && a != '' // ответ не должен быть пустым
//             && b != '' // ответ не должен быть пустым
//             && a.length < 50 ) // в ответе не более 50 символов
//         {
//             console.log('done');
//             appData.expenses[a] = b;
//         } else {i--};
//     };
// }
// chooseExpenses()

// // Оформить расчет дневного бюджета и вывод на экран этого значения как одну функцию (detectDayBudget)
// function detectDayBudget() {
//     appData.moneyPerDay = +(appData.budget / 30).toFixed();    
//     alert('Ежедневный бюджет: ' + appData.moneyPerDay +" руб.");
// }

// // Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)
// function detectLevel() {    
//     if (appData.moneyPerDay < 500) {
//         console.log('Минимальный уровень достатка')
//     } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
//         console.log('Средний уровень достатка')
//     } else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 5000) {
//         console.log('Достойный уровень достатка')
//     } else if (appData.moneyPerDay > 5000) {
//         console.log('Хорошо живём!)')
//     } else { console.log('Не понятно')};
// }


// // Пишем функцию, которая посчитает накопления с депозита, если он есть
// function checkSavings() {
//     if (appData.savings == true) {
//         let save = +prompt('Какова сумма накоплений?'),
//             percent = +prompt('Под какой процент?');

//         appData.monthIncome = +save/100/12*percent;
//         alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
//     }
// }

// checkSavings();

// //Создать функцию для определения необязательных расходов (chooseOptExpenses)
// function chooseOptionalExpenses() {
//     for (let i = 0; i < 3; i++) {
//         let questionOptExpenses = prompt("Статья необязательных расходов?", '');
//         appData.optionalExpenses[i] = questionOptExpenses;
//         console.log(appData.optionalExpenses);
//     };
// };
// chooseOptionalExpenses();

console.log('Урок 2.13 - Callback функции');
// function first() {
//     setTimeout(
//         function() {
//             console.log('Я учу ')
//         }, 500
//     )
// }
// function second() {
//     console.log('JS');
// }
// first(); second();

// function learnJS(lang, callback) {
//     console.log('Я учу ' + lang);
//     callback();
// }
// // learnJS('JavaScript', function() {
// //     console.log("Прошёл урок 2.13")
// // })
// // или
// function done() {
//     console.log("Прошёл урок 2.13")
// };
// learnJS('JavaScript', done);

console.log('Урок 2.14 - Объекты');
// let options = {
//     width: 1024,
//     height: 800,
//     name: 'test'
// };
// console.log(options.name);
// options.bool = false; // создаем новую пару КЛЮЧ:ЗНАЧЕНИЕ
// options.colors = {
//     border: "black",
//     bg: "red"
// };
// delete options.bool;
// console.log(options);
// // цикл FOR IN . Походу планируем перебирать в объекте каждое свойство или метод с помощью key
// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// };
// options.new = {
//     fruit: 'apple',
//     colour: 'green'
// }
// console.log(options);
// console.log(Object.keys(options).length);

console.log('Урок 2.15 - Массивы и псевдомассивы');

// let arr = [1,2,'third',4,5];      console.log(arr);
// arr.pop();                  console.log('удаление последнего элемента ' + arr);  // удаление последнего элемента
// arr.push("5");              console.log('добавление в конец нового элемента "5" ' + arr);  // добавление в конец нового элемента "5"
// arr.shift();                console.log(arr + ' удаление первого элемента');  // удаление первого элемента
// arr.unshift("1");           console.log(arr + ' вставка первым элементом "1"');  // вставка первым элементом "1"
// console.log('последний элемент массива имеет тип ' + typeof(arr[4]) + ', а 2ой элемент - ' + typeof(arr[1]));
// // перебор элементов массива
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // ИЗБЕГАТЬ ЗАДАНИЯ НОМЕРА ЭЛЕМЕНТА:
// // arr[99] = '99-ый элемент'; console.log(arr);

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')');
// });

// let mass = [1,3,4,6,7];
// for (let key in mass) {
//     console.log(key + " : " + mass[key]);
// }
// for (let key in mass) {
//     console.log(key);
// }
// for (let key of mass) {
//     console.log(key);
// }
console.log('Метод SPLIT для массивов');
// let ans = prompt('',''),
//     array = [];
// array = ans.split(','); // полученный ответ пользователя разбиваем на элементы массива, при этом в данном случае разделитель - ","
// console.log(array);

// //для отправки массива одной строкой на сервер 
// let array2 = ['away','jZz','pp','123'],
//     i = array2.join('; ');
//     console.log(i); // получим одну строку, где все значения объединятся через указанный разделитель

// // для СОРТИРОВКИ массива, например по алфавиту, используется метод SORT - сортирует все как строки

// let isa = array2.sort();
// console.log(isa);
// let arrNum = [4,55,2,7,5,9,3,1,]; console.log(arrNum);
// console.log(arrNum.sort());
// // для того чтобы SORT адекватно работал с цифрами, нужно использовать CALLBACK-function
// function compareNum(a,b) {
//     return a-b;
// };
// console.log(arrNum.sort(compareNum));

// console.log('Функция-конструктор');
// function User(name,age) {
//     this.name = name;
//     this.age = age;
//     this.isAdmin = false;
// }
  
// let user = new User("Tolai",39);

// console.log('Пользователь с именем ' + user.name + ' имеет возраст ' + user.age + ' лет и статус админа: ' + user.isAdmin); // Tolai
// console.log(user.name); // Tolai
// console.log(user.age); //39
// console.log(user.isAdmin); // false

console.log('Урок 2.18 - испекция кода (отладка)');
function hello() {
    console.log('Привет');
}
hello();

function hi() {
    console.log('Здорова');
}
hi();

let arrray = [1, 15, 4, 30, 42, 100],
    iArr = arrray.sort(compareNum2);

function compareNum2(a,b) {
    return a-b;
}
console.log(arrray);

console.log('Урок 2.19 - Динамическая типизация в JS');
let a;
console.log(a); // получим undefined , null - это когда переменная не была даже объявлена
console.log('TO STRING');
console.log(typeof(String(4)));
console.log(typeof(4 + '5'));
console.log('red' + false);
console.log('TO NUMBER');
console.log(typeof(Number(4)));
console.log(typeof(+'5'));
console.log(5 + +'5');
console.log(typeof(parseInt('15px', 10)));
console.log(typeof('blue' / 10)); console.log('blue' / 10);
console.log('TO BOOLEAN');
console.log(typeof(Boolean('red')));
console.log(typeof(!!'5'));
let x = 5;
console.log(++x);
console.log([] + false - null + true);
let y = 1;
let x = y = 2;
console.log(y);
console.log([] + 1 + 2);
console.log('1'[0]);
console.log(2 && 1 && 5 && 3);
let a = '2'; let b = '';
console.log(!!( a && b ));
console.log( a && b );
console.log(null || 4 && 3 || null );
a = [1, 2, 3]; b = [1, 2, 3];
console.log(a == b);
console.log(+"Infinity");
console.log('е'>'Ж');
console.log(0 || "" || 2 || undefined || true || falsе);