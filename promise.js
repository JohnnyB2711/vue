/*function f0 (str,time) {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve(str);
        }, time);
    });
}
let a = Promise.all([ f0("promise1 resolved", 2000), f0("promise2 resolved", 5000)]);
    a.then(arr => console.log(...arr))



function f0 (str) {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve(str);
        }, 5000);
    })
}

f0("promise resolved").then(str => console.log(str))*/
//Задание 1
/*function add(arg1) {
    return function (arg2) {
        return arg1+arg2
    }
}
add(5)(2)*/
//Задание 1 (со стрелочной функцией)
/*var add = arg1 => arg2 => arg1+arg2
add(5)(2)*/
//Факториал
/*
const faktorial = n => {
    if (n===0){
        return 1
    }
    else{
        return n*faktorial(n-1)
    }
}
faktorial(3)*/
//Контекст задача 1
/*
function a() {
    console.log(this);
}
let s = new a()
 s.a = "Hello"*/
//Контекст задача 2
/*var str = {
    value: 'Hello',
    func: function (name, surname) {
        console.log(this.value + ", " + name + " " + surname);
    }
}
str.func("Ivan", "Petrov")*/
//Контекст задача 2 (2 способ)
/*
var str = {
    value: 'Hello'
};
var a = function (name, surname) {
    console.log(this.value + ", " + name + " " + surname);
}
let f=a.bind(str)
f("Ivan", "Petrov")
*/
//Массив reduce()/splice()
const array = [1, 2, 3, 4, 0, 1, 0, 5];
const x = array.reduce((sum, el, i, arr) => {
    if (el===0) {
        arr.splice(i);
    }
    return (sum += el);
}, 0);
console.log(x)