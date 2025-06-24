// 100
function foo() {};
// 102
function foo2(x) {};
// 104
function foo3() {
    return 42
};
foo3();

// 106
const foo = function() {};
// 108
let five = () => {}; // мой вариант
(function(){}); // верный вариант
// 110
let func = (y) => {body};
() => {} // верный варинат
// 112
let f = function foo() {};
// 114
let f2 = function() {};
// 116
let f3 = () => {};
// 118
let x = 5;
function fooDouble(x) {
    return x*2
};
console.log(fooDouble(x));
// 120
function fooDouble(z) {
    return z=z*2
};
fooDouble(4);
// 122
function sun(a,b) {
    return a+b;
};
// 124
let func5 = (a,b) => {
    return a+b
}
console.log(func5(3,6));
// верный вариант
((a,b) => {
    return a+b
}) (3,6);
// 126
function foo4(x) {};
console.log(foo4(42)); // undefined
// 128
function foo6(x) {};
console.log(foo6(42,7));
// 130
function foo7(x,y) {}
console.log(foo7(42));
// 132
function foo8(x,y,z) {
    return x+y
}
console.log(foo8(1,2,3));

// ВЛОЖЕННЫЕ ФУНКЦИИ
// 200
function goo() {
    function bar() {};
};
// 202
function goo() {
    function bar() {
        function baz() {};
    };
};
// 204
function goo(a) {
    function bar(b) {};
};
// 206
function goo(a) {
    function bar(b) {}
    console.log(bar());
}
// 208
function goo(a) {
    function bar(b) {};
};
console.log(goo(a));
// 212
function goo(a) {   
    function bar(b) {return b*2};
    console.log(bar(4));
    return a*2+bar(4);
    // return a*3+bar(7);
};
console.log(goo(2));
// 214
function goo(a) {
    function bar(b) {return b*2};
    return a + bar(3);
};
console.log(goo(4));
// 216
function goo(a) {
    function bar(b) {return b*2};
    // return a + bar(b=a);
    return a + bar(a);
}
console.log(goo(4));
// 218
function goo(a) {
    return (function (x) {return x}) (a);
};
console.log(goo(10));
// Замыкания
// 300
function goo() {
    let x = 42;
    function bar() {
        let y = x*2;
    // console.log(y);
    }
    bar();
    console.log(y);
}
goo();
console.log(y);
// 302
function goo() {
    let x = 42;
    function bar() {
        let x = 7;
    }
    bar();
    return x;
}
console.log(goo()); //x === 42 потому что x внутри bar() переопределяется только для окружения внутри bar()
// 304
function goo() {
    const x = 42;
    function bar() {
        const x = 7;
        function baz() {
            return x;
        };
        return baz();
    }
    return bar();
}
console.log(goo()); //result foo is 7, потому что x переопределяется в bar

// Callbacks
// 400
function goo(f) {
    return f();
}
console.log(goo(()=>{return 42}));
// 402
function goo(wow) {
    return wow();
}
console.log(goo(function(){return 42}));
// 404
function goo(f) {
    return f()
}
function bar() {
    return 42;
}
console.log(goo(bar));
// 406
function goo(f) {
    return f();
}
function bar() {
    return 42;
}
goo(bar()); //TypeError: f is not a function, потому что f это не ф-я, а результат вызванной bar() 42