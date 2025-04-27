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

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", 'Введите корректное значение');
    };
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        // а далее внесем код, который не пропустит пустые поля при заполнении пользователем
        if ((typeof(a)) === 'string' // ответ должен быть строкой
            && (typeof(a)) != null // ответ не должен быть null
            && (typeof(b)) != null // ответ не должен быть null
            && a != '' // ответ не должен быть пустым
            && b != '' // ответ не должен быть пустым
            && a.length < 50 ) // в ответе не более 50 символов
        {
            console.log('done');
            appData.expenses[a] = b;
        } else {i--};
    };
}
chooseExpenses()

// Оформить расчет дневного бюджета и вывод на экран этого значения как одну функцию (detectDayBudget)
function detectDayBudget() {
    appData.moneyPerDay = +(appData.budget / 30).toFixed();    
    alert('Ежедневный бюджет: ' + appData.moneyPerDay +" руб.");
}

// Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)
function detectLevel() {    
    if (appData.moneyPerDay < 500) {
        console.log('Минимальный уровень достатка')
    } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка')
    } else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 5000) {
        console.log('Достойный уровень достатка')
    } else if (appData.moneyPerDay > 5000) {
        console.log('Хорошо живём!)')
    } else { console.log('Не понятно')};
}


// Пишем функцию, которая посчитает накопления с депозита, если он есть
function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент&');

        appData.monthIncome = +save/100/12*percent;
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

//Создать функцию для определения необязательных расходов (chooseOptExpenses)
function optionalExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", ''),
            b = prompt("Сумма?", '');
        // а далее внесем код, который не пропустит пустые поля при заполнении пользователем
        if ((typeof(a)) === 'string' // ответ должен быть строкой
            && (typeof(a)) != null // ответ не должен быть null
            && (typeof(b)) != null // ответ не должен быть null
            && a != '' // ответ не должен быть пустым
            && b != '' // ответ не должен быть пустым
            && a.length < 50 ) // в ответе не более 50 символов
        {
            console.log('done');
            appData.optionalExpenses[a] = b;
        } else {i--};
    };
};
optionalExpenses();