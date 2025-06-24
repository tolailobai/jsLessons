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
// let a;
// console.log(a); // получим undefined , null - это когда переменная не была даже объявлена
// console.log('TO STRING');
// console.log(typeof(String(4)));
// console.log(typeof(4 + '5'));
// console.log('red' + false);
// console.log('TO NUMBER');
// console.log(typeof(Number(4)));
// console.log(typeof(+'5'));
// console.log(5 + +'5');
// console.log(typeof(parseInt('15px', 10)));
// console.log(typeof('blue' / 10)); console.log('blue' / 10);
// console.log('TO BOOLEAN');
// console.log(typeof(Boolean('red')));
// console.log(typeof(!!'5'));
// let x = 5;
// console.log(++x);
// console.log([] + false - null + true);
// console.log([] + false); // пустой массив при сложении превращается в строку, соответственно второе слагаемое, также превращается в строку
// let y = 1;
// let x = y = 2;
// console.log(y);
// console.log([] + 1 + 2);
// console.log('1'[0]);
// console.log(2 && 1 && 5 && 3);
// let a = '2'; let b = '';
// console.log(!!( a && b ));
// console.log( a && b );
// console.log(null || 4 && 3 || null );
// a = [1, 2, 3]; b = [1, 2, 3];
// console.log(a == b);
// console.log(+"Infinity"); //результат это число - но записанное словом
// console.log('е'>'Ж');
// console.log(0 || "" || 2 || undefined || true || falsе);
// console.log('154'[1]); // из строки "154" получаем второй символ (так как [1]=2), получаем "5" 
// console.log('абвг'[2]);

console.log('Урок 2.22 - Получение элементов со страницы');

console.log('Урок 2.28 - Мобильные события. Регулярные выражения');

let herName = 'Carolina 1978';
let reg =/a/ig;
// метод search ищет нужный символ и выдает первый попавшийся, иначе -1
console.log(herName.search(reg)); // выдаст 1
// метод matsh ищет либо первый, либо все (g - global) символы и выдаёт результат в виде массив
console.log(herName.match(reg)); // выдаст [ 'a', 'a' ]
// метод replace заменяет символ
console.log(herName.replace(/./g, '*')); // выдаст *************
// метод test
console.log(reg.test(herName)); // выдаст True

// классы символов  \d - digits, \w - words, \s - spaces
console.log(herName.match(/\d/g)); // выдаст [ '1', '9', '7', '8' ]

let model = 'Samsung 24f5l9';
console.log(model.match(/\d\d\w\d\w\d/i)); // выдаст [ '24f5l9', index: 8, input: 'Samsung 24f5l9', groups: undefined ]

console.log('Урок 3.01 - Скрипты и время их выполнения. setTimeout и setInterval');
// setTimeout(func, 3000);
// function func() {
//     console.log("3 сек прошло")
// }

// let timerId = setTimeout(func2, 4000);
// function func2() {
//     console.log('Приветик')
// };
// clearTimeout(timerId);

// let timerId2 = setInterval(func3, 3500);
// function func3() {
//     console.log('1,2,3...')
// }

// // Рекурсивный вызов
// let timerId3 = setTimeout(function log() {
//     console.log('Привет');
//     setTimeout(log, 2000)
// })

console.log('Урок 3.5');
// let p = 45;
// let o = p.toString().padStart(3,0);
// console.log(o);
// console.log(typeof(o));
console.log('Урок 3.6 - Конструкторы и классы');
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     };
// };

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 36);

// console.log(ivan);
// console.log(alex);
// console.log(alex.hello() + " " + ivan.hello());

// // Использование prototype для создания новых методов в нашем функции-конструкторе
// User.prototype.exit = function() {
//     console.log('Пользователь ' + this.name + ' ушел из чата');
// };
// console.log(ivan.exit());
console.log('Урок 3.7 - This. Контекст вызова и как его использовать');
// // 1 вариант - стандартный вызов функции
// function showLog() {
//     console.log(this)
// }
// showLog();

// function showThis(a, b) {
//     console.log(this); // даст window
//     function sum() {
//         console.log(this); // даст window
//         // return this.a + this.b; // даст NaN
//         return a + b; 
//     }
//     console.log(sum());
// }
// showThis(4,5);
// showThis(2,3);

// // 2
// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// }
// obj.sum();

// // но
// let obj2 = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout(); // выдаст window, так как функция shout теряет контекст, так как она вызвана не как метод объекта, а просто как функция внутри функции
//     }
// }
// obj2.sum();

// // 4 Ручное присваивание this
// let user = {
//     name: 'john',
// };

// function sayName() {
//     console.log(this);
//     console.log(this.name);
// };
// // насильно связываем объект и функцию (расположенные рядом выше), т. е. навязываем контекст вызова
// // в этом нам помогут 3 метода: call и apply и bind
// console.log(sayName.call(user));
// console.log(sayName.apply(user));
// // в чем же разница. Рассморим ниже пример более сложной функции - с аргументами
// function sayName2(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// };
// console.log(sayName.call(user, 'Peter')); // call принимает аргумент в виде строки
// console.log(sayName.apply(user, ['Snow'])); // если нужно передать несколько аргументов. Здесь можно передать массив

// //
// function count(number) {
//     return this * number;
// }
// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));
console.log('Урок 3.8 - Дом задание');
let age = '30';
function showUser(surname, name) {
    console.log("Пользователь " + surname + " " + name + ", его возраст " + this);
}
let output = showUser.apply(age, ['Tolai', 'Rongin', 'Sergeevich']);


console.log('Урок 3.9 - ES6. Интерполяция');
let nameI = 'Ivan',
    ageI = 30,
    mail = 'ex@mail.ru';
console.log('Пользователю ' + nameI + ' ' + ageI + ' лет. Его почтовый адрес: ' + mail);
console.log(`Пользователю ${nameI} ${ageI} лет. Его почтовый адрес: ${mail}`);

// const и let
// особенность var - в циклах не создаётся массив i
function makeArray() {
    var items = [];

    // for (var i = 0; i < 10; i++) {
    for (let i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }
    return items;
}
var arrra = makeArray();
arrra[1]();
arrra[3]();
arrra[7]();

// стрелочные функции
let fun = () => {
    console.log(this);
};
fun();

let objec = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};
objec.sayNumber();


console.log('Урок 3.12 - Параметры по умолчанию');
// старый вариант (до ES6), который не был достаточно надежен
function calcOrDouble(number, basis) {
    basis = basis || 2; // проверка basis на то, что этот аргумент был передан, иначе basis = 2
    console.log(number * basis);
}
calcOrDouble(5, 6); // 30
calcOrDouble(10);  // 20

// новый вариант (ES6)
function calcOrDouble2(number, basis = 2) {
    console.log(number * basis);    
}
calcOrDouble2(7);  // 14

console.log('Урок 3.13 - Классы');

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}
const square = new Rectangle(10,10);
console.log(square);
console.log(square.calcArea());


console.log('Урок 3.14 - Spread операторы');

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [video, blogs, 'vk', 'FB'];
console.log(internet); // выдаст массив, в котором помимо 2х строк еще 2 массива
let internet2 = [...video, ...blogs, 'vk', 'FB'];
console.log(internet2); // выдаст ОДИН массив со всеми данными

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a+b+c);
}
let numbersTri = [2, 5, 7];
log(numbersTri); // выдаст массив и 2 undefined 
log(...numbersTri); // выдаст 2 5 7

 class Options {
        constructor(height, width, fontSize, textAlign) {
            // this.height = height;
            // this.width = width;
            // this.backgroundColor = bg;
            // this.fontSize = fontSize;
            // this.textAlign = textAlign;
        }
        createDiv() {
            document.body.appendChild(div);
            this.style.height = height + 'px';
            this.style.width = width + 'px';
            // this.style.background-color = bg;
            this.style.fontSize = fontSize + 'px';
            this.style.textAlign = textAlign;            
        }
    };

const newDiv = new Options(100, 100, 16, 'left');
newDiv.createDiv();

console.log('Урок 4.1 - JSON');

let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: '#FFF',
    }
}
// переводим в формат JSON
let toJSON = JSON.stringify(options); // выдаст {"width":1366,"height":768,"background":"red","font":{"size":"16px","color":"#FFF"}}
// переводим обратно из JSON
let fromJSON = JSON.parse(toJSON);
console.log(toJSON);
console.log(fromJSON);

const today = new Date();
console.log(today);
let dayOfMonth = today.getDate();
console.log(dayOfMonth);
let year = today.getFullYear();
console.log(year);
let monthOfYear = today.getMonth()
console.log(monthOfYear);
let newYear = today.setFullYear(2025,6,1);
console.log(newYear);

console.log('Урок 4.4 - Promis');
btn.addEventListener('click', function() {
    console.log('КлиК!')
})

// в кафе. Заказываем кофе...
function orderCoffee() {
  console.log("Заказ принят! Ваш кофе готовится...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve("Ваш заказ готов!");
      } else {
        reject("Извините, у нас сломалась кофемашина");
      }
    // Имитация задержки в 2 секунды
    }, 2000); 
  });
}
// но код выше не выдает результатов. Для этого нужны .then и .catch
orderCoffee()
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.error(error); 
  })
  .finally(() => {
    console.log("Актуальные акции ищите в нашем приложении!");
  });


// создаем такую приколюху
let drink = 1;
function shoot(arrow, headshot, fail) {
    console.log('Вы сделали выстрел...');

    setTimeout(function() {
        Math.random() > .5 ? headshot({}) : fail("Вы промахнулись!");
    }, 3000)
};
shoot({},
    function(mark) {
        console.log('Вы попали в цель!');
        win(mark, buyBeer, giveMoney);
    }, function(miss) {
        console.error(miss);
        loose();
});
// теперь дополним код двумя следствиями
function win() {
    console.log('Вы победили!');
    (drink == 1) ? buyBeer() : giveMoney();
};
function loose() {
    console.log('Вы проиграли!')
};
function buyBeer() {
    console.log('Вам купили пиво');
};
function giveMoney() {
    console.log('Вам дали башли');
};

// Запишем всю эту программку с помощью Promise
let drink = 1;
function shoot(arrow) {
    console.log('Вы сделали выстрел...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject("Вы промахнулись!");
        }, 3000)
    });

    return promise;
};

shoot({})
    .then(mark => console.log('Вы попали в цель!'))
    .then(win)
    .catch(loose);

let myPromise2 = new Promise(function(resOlve, rejEct) {
    console.log('Начали...');
    setTimeout(function() {
        Math.random() > .5 ? resOlve('Ура') : rejEct('Sorry');
    },2000);

    

})

let promise = new Promise(function(resolve, reject) {resolve(1);setTimeout(() => resolve(2), 1000);});promise.then(console.log('ewqrf'));

'use strict'
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));