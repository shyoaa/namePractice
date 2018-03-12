
// let 声明的变量，只有在let的代码快中有效 不存在变量声明的提升 相同作用域内不能重复声明一个变量


{
    let a =1;
    var b =2;
}
console.log(b);
//console.log(a);
console.log(c);
var  c =3;

const d = 4;
console.log(d);

var fn =()=>{   //ES6 函数表达式 ，
 console.log('hello');
}
fn();
// 相等于
var fn1 =function () {
    console.log('hello');
}
fn1();

var fn3=(x) => x*2

console.log(fn3(3));
//相等于
var f4 =function (x) {
    return x*2;
}
console.log(f4(3));

function f5(name,age) {
    this.name =name;
    this.age =age;
}
f5.prototype.talk = function () {
    console.log('hello world');
}

var ff = new f5();
ff.talk();

//ES6的写法

class f6 {
    constructor(name,age){
        this.name =name;
        this.age =age;
    }
    talk(){
        console.log('talk talk');
    }
}

var fff = new f6();

fff.talk();

//Promise 用于异步编程，可以避免无限嵌套的回调函数，用法：

/*var p =Promise(function (resolve,reject) {
    if(){
        resolve(value)
    }else {
        resolve(error);
    }
})*/
