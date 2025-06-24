let box = document.querySelector('.box'),
    btn = document.querySelector('.btn');

let width = box.offsetWidth,
    height = box.offsetHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().left);
console.log(document.documentElement.clientWidth); // viewport width
console.log(document.documentElement.clientHeight); // viewport height

document.documentElement.scrollTop = 0; // возвращает viewport в начало

// btn.addEventListener('click', function() {
//     box.style.height = box.scrollHeight + 'px';
//     console.log(box.getBoundingClientRect());
// })



// 'use strict';
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


btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }
    showThis();
})

// ДЗ 3.8
let age = document.getElementById('age');
function showUser(surname, name) {
    console.log("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
console.log(showUser.apply(age, ['Tolai', 'Rongin', 'Sergeevich']));

// стрелочная функция не имеет своего контекста вызова, её контекст вызова это родительский
btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    }
    show();
})

class Options {
        constructor(height, width, bg, fontSize, textAlign) {
            this.height = height + 'px';
            this.width = width + 'px';
            this.backgroundColor = bg;
            this.fontSize = fontSize + 'px';
            this.textAlign = textAlign;
            console.log(this);
        }
        createDiv() {
            let elem = document.createElement('div');
            document.body.appendChild(elem);
            elem.style.cssText = `height: ${this.height}; width: ${this.width}; background-Color: ${this.backgroundColor}; font-Size: ${this.fontSize}; text-align: ${this.textAlign}`;
            // this.style.height = height + 'px';
            // this.style.width = width + 'px';
            // this.style.backgroundColor = bg;
            // this.style.fontSize = fontSize + 'px';
            // this.style.textAlign = textAlign;            
        }
    };

const newDiv = new Options(100, 100, 'yellow', 16, 'left');
newDiv.createDiv();

let rub = document.querySelector('.rub'),
    usd = document.querySelector('.usd');

rub.addEventListener('input', () =>{
    let request = new XMLHttpRequest();
    // request.open(methos, url, async, login, password);
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // request.send(body); когда отправляем информацию
    request.send(); //отправляем запрос за ответом к серверу

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            usd.value = rub.value / data.usd;
        } else {
            usd.value = 'Что-то пошло не так!';
        }
    });
});

let formElement = document.getElementById('regForm');

formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    // НИЖНИЙ БЛОК КОДА - БЕЗ ИСПОЛЬЗОВАНИЯ FORMDATA. formData здесь лишь как переменная
    let formData1 = {};
    for (const element of formElement.elements) {        
        // чтоб в formData не попали служебные поля с пустыми ключ:значение ("":"")
        // если у элемента нет атрибута name, то он пропусается
        if (!element.name) {
            continue
        };
        // не корректно работает checkbox - изначально отправляет первый пункт (хотя ничего не выбрано)
        if (element.type === 'checkbox') {
            formData1[element.name] = element.checked;
            continue // прерываем итерацию
        } // то есть в значении используем не Value, а checked

        // проблема с radio (gender). Так как два элемента Radio, то он берет значение последнего (Женский). Исправляем:
        if (element.type === 'radio' && !element.checked) {
            continue
        }

        formData1[element.name] = element.value


// А ТЕПЕРЬ ИСПОЛЬЗУЯ ОБЪЕКТ FormData
        const formData = new FormData(formElement);

        console.log('formData:', formData); // так не сработает, так как FormData не обычный объект. Он имеет map структуру
        console.log(Object.fromEntries(formData)); // а этот вариант сработает
    };
    console.log('formData1:', formData1);
})

let loadFormElement = document.querySelector('.load-todo-form'),
    resultElement = document.querySelector('.result');

loadFormElement.addEventListener('submit' , function(event) {
    event.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        console.log('response:', response)

        return response.json()
    })
      .then((json) => {
        console.log(json)

        const {id, title, completed} = json

        resultElement.innerHTML = `
            <input
                id='todo-${id}'
                type='checkbox'
                ${completed ? 'checked' : ''}
            />
            <label for="todo-${id}'>${title}</label>
        `
    });
    // result.textContent = json;
})