
console.log(1=='1');
console.log(1==='1');

var arr = [12,13,14,15,16];

arr.forEach((num,index) => {
 console.log(num +" : " + index);
});

var map1 = arr.map((num)=>{
    return num*2;
})
console.log(map1);

// 匿名函数主要在IIFE中执行 声明的变量不会暴露出来
(function () {

})();

/*setTimeout(()=>{console.log('setTimeOut')},1000);*/

function add(x,y) {
    return x+y;
}

console.log(add.call(null,12,32));
console.log(add.apply(null,[43,545]));

var  arr = [1,2,3,4,5];
function dup(arr) {
    return arr.concat(arr);
}

console.log(dup(arr));

// ES5的语法
function Es5Person(name) {
    this.name = name ;
    this.sleep =function () {
        console.log('1111');
    }
}
// ES6语法
class Es6Person {
    constructor(name) {
        this.name = name ;
    }
    sleep () {
        console.log('2222');
    }
}

var p1 = new Es5Person('张三');
var p2 = new Es6Person('李四');
console.log(p1);
console.log(p2);

const  liuNen = {
    name: '刘能',
    sleep: function () {
        console.log('喜欢睡觉！');
    }
};
console.log(liuNen);
console.log('--------------------');
// 对象转字符串(方法不会被序列化，只保留属性)
var obj1 = {name: '张三', hello: function () {}};
console.log(JSON.stringify(obj1));

// 字符串转对象（字符串内容要用双引号包裹，单引号包裹无法识别）
var obj2 = '{"name": "张三"}';
console.log(JSON.parse(obj2));

// Object number function boolean undefined

// parseInt(),parseFloat(),Number(); == , ===

//split('') 切割数组 join('') 数组转化为字符串
// push(), pop() ,unshift() ,shift()  事件绑定和普通事件有什么区别
/*
* IE 和DOM 事件流的区别
* 执行的顺序不一样 ，参数不一样，事件不加on , this 指向问题
* */
/*
var ev =ev || window.event ;
var target =ev.srcElement || ev.target;

Object.call(null,x,y,z);
Object.apply(null,[x,y,z]);*/

//17.解释jsonp的原理，以及为什么不是真正的ajax
// 1,动态创建script,回调函数，Ajax是页面请求无刷新造作

//js 的本地对象，内置对象，宿主对象的区别
//本地对象是可以实例化的Array,obJ,regexp，可以通过new 进行实例化的
// 内置对象是不可以进行实例化的 如 Math(), 宿主对象是浏览器自带的如，window ,document

function soft(arr) {
    var obj = {};
    var newArr = [];
    for (var i= 0 ; i < arr.length ; i++){
        if(!obj[arr[i]]){
            newArr.push(arr[i]);
            obj[arr[i]] =1;
        }
    }
    return newArr ;
}

console.log(soft([1,2,3,4,1,2,3,4,32]));

var arr = [21,22,23,24,25];
function res(arr) {
    return arr.concat(arr);
}
console.log(res(arr));

var obj = '{"name": "jack"}';
console.log(JSON.parse(obj));
var obj1= {"name" : "jack1"}; // json对象
// ----> json字符串
console.log(JSON.stringify(obj1));

function gp(url,fn) {
    var obj = new XMLHttpRequest();
    obj.open('GET',url,true);
    obj.onreadystatechange = function () {
        if(obj.readyState == 4 && obj.status ==200 || obj.status==304){
            loading.style.display='none';
        }else {
            alert('哈哈不能点击');
        }
    }
    obj.send(null);
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

var fun1 = function (a,b,c) {
    console.log('length : ' + arguments.length);
    for (var i in arguments) {
        console.log(arguments[i]);
    }
}

fun1('1','q');

function strRepeat(str,num){

    return  new Array(num + 1).join(str);

}

console.log(strRepeat("hello", 3));

function trim(str) {
    if(str & typeof str ==='string'){
        return str.replace(/(^s*)|(s*)$/g,"");
    }
}

var arr = [[1,2],[3,4]];

function jw(arr) {
    return Array.prototype.concat.apply([],arr);
}

console.log(jw(arr));

var obj = {name:'jack',age:21,sex: 'male'};

function Oa(obj) {
    var newA =[];
    for (var i in obj){
        newA.push(obj[i]);
    }
    return newA;
}

console.log(Oa(obj));


function getQueryObject(url) {
    url = url == null ? window.location.href : url;
    var search = url.substring(url.lastIndexOf("?") + 1);
    var obj = {};
    var reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg, function (rs, $1, $2) {
        var name = decodeURIComponent($1);
        var val = decodeURIComponent($2);
        val = String(val);
        obj[name] = val;
        return rs;
    });
    return obj;
}