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
	savings: true,
    chooseExpenses: function () {
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
};


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
            percent = +prompt('Под какой процент?');

        appData.monthIncome = +save/100/12*percent;
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

//Создать функцию для определения необязательных расходов (chooseOptExpenses)
function chooseOptionalExpenses() {
    for (let i = 0; i < 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?", '');
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    };
};
chooseOptionalExpenses();
