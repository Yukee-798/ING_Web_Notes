/*
一、函数的调用方式
    (1) 直接调用 test();
    (2) 通过对象来调用 obj.test();
    (3) 通过 new 来调用 new test();
    (4) test.call/apply(obj); 让 test临时成为 obj对象的方法来调用


二、回调函数
    1. 什么是回调函数？
        (1) 由你自己定义
        (2) 不由你自己调用
        (3) 由浏览器调用

    2. 常见的回调函数
        (1) DOM 事件
        (2) 定时器：循环定时器、延时定时器
        (3) ajax 请求回调函数
        (4) 生命周期回调函数

三、立即执行函数 (IIEF)
    (function() {
        
    })();

    作用：
        (1) 隐藏实现，不会污染全局命名空间
        (2) 编码 JS模块
    例子：
        (function() {
            var a = 1;
            function test() {
                console.log(++a);
            }
            
            // 向外露出一个全局函数
            window.$ = function() {
                return { test: test }
            }

        })();

        // 在全局作用域中打印出a的值
        $().test();


四、函数中的 this
    1. 练习：如下

    2. this 是什么？
     (1) 任何函数本质上都是通过某个对象来调用的
     (2) 所有函数内部都有一个变量 this
     (3) 它的值是调用函数的当前对象
    
    3. 如何确定 this 的值？
     (1) test()：window
     (2) new test()：新创建的对象
     (3) p.test()：p
     (4) p.test.call(obj)：obj





*/

function Person(color) {
    console.log(this);
    this.color = color;

    this.getColor = function() {
        console.log(this);
        return this.color;
    }

    this.setColor = function() {
        console.log(this);
        this.color = color;
    }
}   

Person('red'); // this 是 window

var p = new Person('yellow'); // this 是 调用构造函数时创建的对象的内存地址

p.getColor(); // this 就是上面的那个内存地址

var obj = {};

p.setColor.call(obj, 'black'); // this 是 obj引用指向的对象的内存地址

var test = p.setColor;
test(); // this 是 window

function fun1() {
    function fun2() {
        console.log(this);
    }
    fun2();
}

fun1(); // this 是 window