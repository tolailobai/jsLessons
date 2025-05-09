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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = +(appData.budget / 30).toFixed();    
        alert('Ежедневный бюджет: ' + appData.moneyPerDay +" руб.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 500) {
            console.log('Минимальный уровень достатка')
        } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка')
        } else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 5000) {
            console.log('Достойный уровень достатка')
        } else if (appData.moneyPerDay > 5000) {
            console.log('Хорошо живём!)')
        } else { console.log('Не понятно')};
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');
    
            appData.monthIncome = +save/100/12*percent;
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptionalExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        };
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)','');
        if ((typeof(items)) === 'string' // ответ должен быть строкой
        && (typeof(items)) != null // ответ не должен быть null
        && items != '' // ответ не должен быть пустым
        && items.length < 50 ) {
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?',''));
        appData.income.sort();
        appData.income.forEach(function(item, i) {
            console.log((i+1) + ' Способ доп. заработка: ' + item);
        });
        }
        else {
            alert('Неверно введено, введите заново');
        }
    }
};

for (let key in appData) {
    console.log(key + 'Наша программа включает в себя данные: ' + appData[key])
};

