/*
一、基本定义
    1. 函数也是一种对象
    2. 函数中可以封装一些功能代码，在需要时可以执行这些代码

二、函数对象的创建
    1. 语法:
        var fun = new Function();
    
    2. 将代码封装进去
        var fun = new Function("console.log("Hello World!")");

    3. 调用函数
        fun();

        用下面方式定义函数时，调用函数可以在声明函数之前
        function fn1 () {}
        该方式会在所有代码执行之前就定义好

        但用下面这种方式则会报错
        var fun = function() {}
        因为带 var 关键字的变量会提前在所有代码的第一行进行声明，如果在函数定义之前调用，则调用的是一个只声明而未定义变量

    4. JS中正规使用函数方式
        上面只需要理解，下面才是实际开发过程中的使用方式
        语法：
            function 函数名(行参) {
                函数体
            }

    5. 匿名函数的使用
        (1) 用一个括号扩起来才不会报错
            (function(形参) {

            })

        (2) 此时可以用一个变量来接受该函数对象
            var fun2 = function(形参) {

            }

        (3) 立即执行函数
            (function(a, b) {
                console.log(a + b);
            })(1, 2);
            此时一运行代码，就会立刻执行该函数，输出 3

三、形参与实参
    1. 形参
        function fn1 (a, b, c) {}
    
    2. 实参
        fn1(1, 2, 3);
        fn1(1, 2); 少传入了一个参数，那么 c 就会为 undefined
        fn1(1, 2, 3, 4, 5); 多传入了参数，那么后面多的会被忽略掉

四、返回值
    1. 语法：
        function fn(a, b) {
            return a + b;
        }

        function fn2() {
            console.log("Hello");
            return;
        }
    
    2. 作用：
        该函数执行完毕后，会返回一个 a + b 的值
        如果没有返回值，直接return 或者 函数自己执行完毕，那么会返回一个undefined

    3. 返回值为可以为函数对象
        




    

五、对象作为实参传入函数中
    1. 一般对象 
        var person = {name: "momo", age: 18};
        fun(person);

    2. 传入函数对象
        function fun1 () {
            console.log("hello");
        }

        function fun2(a) {
            a();
        }

        fun2(fun1);

六、为对象设置函数
    1. 说明：对象的属性值可以是任何数据类型，那么肯定可以为其设置函数对象
    2. 语法：
        方法一：
            var obj = {
                name: "momo", 
                age: 12, 
                gender: "girl"
            };

            obj.toString = function() {
                console.log("name=" + obj.name + " age=" + obj.age + " gender=" + obj.gender);
            }

        方法二：
            var obj = {
                name: "momo",
                age: 12,
                gender: "girl",
                toString: function () {
                    console.log("name=" + obj.name + " age=" + obj.age + " gender=" + obj.gender);
                }
            };

七、for...in... 语句枚举对象中的属性
    1. 语法：
        var obj = {
            name: "momo",
            age: 12,
            gender: "girl",
            toString: function () {
                console.log("name=" + obj.name + " age=" + obj.age + " gender=" + obj.gender);
            }
        };

        for(var n in obj) {
            if (n != toString) console.log(obj[n]);
            else {
                console.log("===========执行方法啦！===========");
                obj[n]();
            }
        }

    2. 作用：枚举obj对象中的每个属性名，其中 n 就表示 obj对象 的属性名，这里的 n 一定为string类型
    
    3. 注意：并不能用 obj.n 来使用属性，因为obj对象中并没有属性n，而 n 是个字符串，所以可以通过 obj[n]来使用属性
        体会一下 obj["n"] 是等价于 obj.n 的

        obj.n 的意义是，从obj对象中寻找属性名的字符串为 n 的属性，这里的 n 不能是变量，就是直接表示字符串
        obj[n] 的意义是，从obj对象中寻找属性名的字符串为 变量n 的值 的属性，这里的 n 表示字符串变量


八、关于this
    1. 根据函数调用的不同，this会指向不同的对象
    2. 例子：
        函数定义：function fn1() { console.log(this); }
        函数调用：fn1(); 输出 window

        var obj = { fn2: function() { console.log(this); } };
        函数调用：obj.fn2(); 输出Object

    3. 小结一下this的各种情况
        (1) 以函数形式调用，如 fun()，则函数中的 this 就是 window
        (2) 以方法形式调用，如 obj1.fun()，则方法中的 this 就是调用该方法的上一级对象
        (3) 以构造函数方式调用，如 new People()，则 this 就是调用构造函数时创建的对象
        (4) 使用call() 或 apply() 调用函数，如 fun.call()，则 this 就是 call 或 apply 方法中指定的那个对象


九、构造函数
    1. 构造函数的定义：JS中的构造函数就是一个普通的函数，创建方式与普通函数没有区别
    2. 构造函数的调用：
           - 使用 new 关键字来调用构造函数
           - 执行流程
                (1) 使用new调用构造函数之后，会立刻创建一个新的对象
                (2) 将新建的对象设置为函数中的this
                (3) 执行构造函数中的代码
                (4) 将新建的对象作为返回值返回

    3. 例子
        function Person(age, name, gender) {
            this.age = age;
            this.name = name;
            this.gender = gender;
        }

        var person = new Person(18, "丁文迪", "女");


十、instanceof
        对象名 instanceof 类名，用于判断对象是否为类的实例


十一、原型 prototype 
    1. 我们创建的每一个函数，解析器都会在函数对象中添加一个属性prototype
    2. 这个属性对应着一个原型对象
    3. 如果一个函数作为普通函数调用，那么prototype没有任何作用
    4. 当函数作为构造函数调用时，它所创建所有对象都会有一个属性(隐含属性)指向该构造函数的原型对象
    5. 我们可以通过__proto__来访问该对象

    原型对象的作用：
        原型对象就相当于一个公共区域，该类的所有实例都可以访问到这个原型对象
        ！！！我们可以将所有实例化对象共有的内容添加到该原型对象中

    属性的调取方式：
        当我们访问对象的一个属性或方法时，它会现在自身的中寻找，如果有就直接使用
        如果没有则会去原型对象中找，找到就使用
        如果原型对象中也没有，则会去原型对象的原型对象中去寻找
        ... 如果依旧没有，那么会一直找下去直到找到Object，Object没有原型，那么就会停止寻找，返回undefined

    助记模型：
        有一个原型对象，该原型对象被构造函数中的prototype属性指向
        另外该类的所有实例化对象中的__proto__属性也指向了该原型对象

十二、in 与 hasOwnProperty
        in 可以检查一个对象中是否含有某个属性，但是在原型对象中设置的属性也会被检查出来

        hasOwnProperty可以检查只存在与对象中(不包括原型对象中的属性)的属性
        例子 p1.hasOwnProperty("hasOwnProperty"); 返回false

        关于hasOwnProperty函数对象存在的位置：
            存在于原型对象的原型对象中，即 p1.__proto__.proto.hasOwnProperty("hasOwnProperty");
            ！！！实质上就是存在于Object对象中

十三、对象中的toString方法
        toString方法实际上也是存在于最终原型对象Object中

十四、call() 和 apply() 方法
    1. 基本概念
        - 这两个方法都是函数对象的方法，通过函数对象来调用
        - 在这两个方法中可以传入一个对象参数
    
    2. 作用：传入的对象会成为函数执行时的this


    3. call() 与 apply() 的一点小差异
        (1) call() 方法可以在传入的对象后面，再传入函数对应的实际参数并调用函数

            例子：
            function fn1(a, b) {};
            var obj1 = {};
            fn1.call(obj1, 2, 3);

        (2) apply() 方法与上面不同的是需要将实际参数封装到一个数组里

            例子：
            function fn2(a, b) {};
            var obj2 = {};
            fn2.call(obj1, [2, 3]);

十五、arguments
    1. 基本概念：在调用函数时，浏览器每次都会传入两个隐含的参数
        - 函数的上下文对象：this
        - 封装实参的对象 arguments

        助记：fn1(1, 2, arguments, this);

    2. arguments 概念
        (1) arguments 是一个类数组对象(不是数组，类似数组)
        (2) 可以通过索引来操作数据(arguments[0])，也可以获取长度(arguments.length)
        (3) 调用函数时，我们传入的参数都会在 arguments 中保存

    
    3. 应用与补充
        (1) 通过上面的特性，在调用函数时，即使我们不设置函数的行参，我们通过 arguments 也可以获取传入函数的实参
            例子：

                function add () {
                    console.log(arguments[0] + arguments[1]);
                }

                add(1, 2);


        (2) callee属性
            函数的隐藏实参 arguments 中有一个 callee 属性，其指代的就是当前函数对象本身

            例子：无限递归
                function fn1() {
                    arguments.callee(); // 等价于 fn1();
                }

        
*/






function add(a , b) {
    console.log(a + b);
    add(a + 1, b + 1);
}

add(1, 2);








// var obj = {
//     name: "momo",
//     age: 12,
//     gender: "girl",
//     toString: function () {
//         console.log("name=" + obj.name + " age=" + obj.age + " gender=" + obj.gender);
//     }
// };

// console.log("123" == "123");

// for (var n in obj) {
// if (n != "toString") console.log(obj[n]);
// else {
//     console.log("===========执行方法啦！===========");
//     obj[n]();
// }
//     console.log(typeof n);
// }




// var obj = {
//     name: "momo",
//     age: 12,
//     gender: "girl",
//     toString: function () {
//         console.log("name=" + obj.name + " age=" + obj.age + " gender=" + obj.gender);
//     }
// };
// obj.toString = function () {
//     console.log("name=" + obj.name + " age=" + obj.age + " gender=" + obj.gender);
// }

// obj.toString();


// (function (a, b) {
//     console.log(a + b);
// })(1, 2);




// var fun = new Function("console.log(\"Hello World!\")");
// var fun2 = function(n1, n2) {
//     console.log(n1 + n2);
// }

// function isEven(n) {
//     return n % 2 == 0 ? true: false;
// }

// console.log(isEven(9));