/*
一、本节涉及内容
    1. 字符串扩展
    2. 正则扩展
    3. 数值扩展
    4. 函数扩展
    5. 对象扩展
    6. 数组扩展

二、字符串扩展
    1. 模版字符串
        作用：可以不通过 + 来拼接字符串
        语法：`${ 嵌入字符串的内容 }`，{} 内部可以调用具有返回值的方法，执行一些代码
        例子：
            function Person(name, age) {
                this.name = name;
                this.age = age;

                this.say = function () {
                    console.log(`我的名字是${ this.name }，我今年${this.age}岁`);
                }
            }

        应用：
            // 通过该方法获取服务端信息
            const getCourseList = function() {
                return {
                    status: true,
                    msg: '获取成功',
                    data: [ {
                        id: 1,
                        title: 'Vue 入门',
                        data: 'xxxx-01-09'
                    }, {
                        id: 2,
                        title: 'ES6 入门',
                        data: 'xxxx-01-09'
                    }, {
                        id: 3,
                        title: 'React 入门',
                        data: 'xxxx-01-09'
                    } ]
                }
            }

            // 用获取到的信息渲染出列表

            // 先获取数据
            const { status, msg, data: dataList } = getCourseList();

            if (status) {
                let arr = [];

                // 遍历dataList
                dataList.forEach(function({ id, title, data }}) {
                    // 对 arr 中 push hmtl字符串
                    arr.push(
                        `<li>id: ${ id }, title: ${ title }, data: ${ data }</li>`
                    );
                });

                // 将 arr 数组转为字符串然后给 ul 渲染出列表
                let html = arr.join('');
                let ul = document.createElement('ul');
                ul.innerHTML = html;

                document.appendChild(ul);

            }


    2. 部分新方法
        (1) 补全长度 padStart() / padEnd()
            作用：如果某个字符串不够指定长度， 会在头部或尾部补全。
            例子：
                'x'.padStart(5, 'ab') // 'ababx'
                'x'.padStart(4, 'ab') // 'abax'
                'x'.padEnd(5, 'ab') // 'xabab'
                'x'.padEnd(4, 'ab') // 'xaba'

        (2) repeat() 复制一个字符串
            例子：
                'x'.repeat(10); // 赋值10个


        (3) includes(), startsWith(), endsWith()
            作用：
                判断参数字符串是否包含在原字符串、在原字符串开头、在原字符串结尾
                可以传入第二个参数，用来指定搜索的起始下标

        (4) trimStart()， trimEnd()
            
            

    3. 使用 for of 新的遍历方式来遍历字符串中的每一个字符
        例子：
            for (let char of 'abcdef') {
                console.log(char);
            }

            有一个字符就会循环几次，其中char就是字符串中的每一个字符

    4. Unicode表示法
        JS中以 \u 开头的字符串，就会把它识别为Unicode码
        识别的范围为 \u0000 - \uffff
        超出这个范围的，需要加上{}才能识别
        比如："\u{41}" 表示 "A"，"\u{1f436}" 是🐶

    5. 获取某个字符的Unicode码
        '🐶'.codePointAt(0).toString(16) // 返回 '1f436'
        'A'.codePointAt(0).toString(16) // 返回 '41'



三、数值扩展
    1. 进制表示法
        二进制：0b开头
        八进制：0o开头
        十六进制：0x开头

        例子：
            let a = 0b1001;
            let b = 0o200;
            let c = 0x1f3f;

    2. 新的方法
        Number.isFinite(), Number.isNaN()
        Number.parseInt(), Number.parseFloat()
        Number.isInteger()

    
    3. 安全数
        Number.MAX_SAFE_INTEGER
        Number.MIN_SAFE_INTEGER
        Number.isSafeInteger()

    4. 幂运算符 **
        2 ** 3 // 表示2的3次方

    5. Math 的扩展
        
    6. BigInt

四、函数扩展
    1. 默认参数

        // 调用该函数的时候只传入一个参数，则 b 会设置为默认值
        function fn(a, b = 100) {
            console.log(a + ' ' + b); 
        }

        // 还可以是一个表达式
        function fn(a, b = 100 + a) {
            console.log(a + ' ' + b);
        }

        // 与解构赋值结合起来用
        function People({ name, age = 10 } = { name: 1 }) {
            console.log(name + ' ' + age);
        }

        People(); // 什么都没传入的话可以理解为传入了一个undefined
                    那么name就是undefined，age默认为10，但是这里又为行参设置了一个默认对象，name则为1


    2. ... 运算符在函数参数上的聚合作用
        
        场景：直接调用 func(1, 2, 3, 4)，传入了 4 个参数，在函数的定义中，形参直接将传入的所有参数聚合为数组
        例子：
            var sum = (...numArr) => {
                console.log(numArr);
            }

            sum(1, 2, 3, 4);

        还可以来聚合剩余参数
        function(a, b, ...c) {}

    3. 箭头函数 

        (1) 无参函数的定义
            let fun = () => {};
        
        (2) 当函数形参只有一个的时候可以去掉括号
            let fun = num => {};

        (3) 使用箭头函数定义的函数会自动返回有返回值的单行表达式，不管你 return 与否都会有返回值
            var sum = (a, b) => a + b; // 这个函数会默认返回 a + b 的值，因为 a + b 这个表达式有返回值
            var f = v => v; // 调用f函数传入v返回v
        (4) 当语句只有一条，我们不需要返回值的时候

            // 把它变成多行表达式的形式
            var sum = (a, b) => {
                a + b;
            };

            // 加上 void 关键字
            var sum = (a, b) => void (a + b);

        (5) 箭头函数内部是没有 arguments 属性的！一般通过 ...运算符 使用在函数形参来获取传入的参数

        (6) 箭头函数的 this 始终指向的是其定义时候所处上下文的对象，而不是调用的时候指向的对象，并且这个this不可变


            

五、数组的扩展
    1. 与扩展运算符结合使用，作为函数调用到实参
        例子：
            func(a, b, c) {};
            func(...[1, 2, 3]); // 这就把1,2,3三个参数传给了 a b c

            // 找到一个数组中到最大值
            Math.max(...[4, 7, 0, 1, 9]);
            Math.max.apply(null, [4, 5, 0, 1, 9]); // 与上面的等价

            接受生成器函数的yield
            function *g() {
                console.log(1);
                yield 'hello';
                console.log(2);
                yield 'world';
            }
            console.log([...g()]); // 待补充


    2. 新的方法
        (1) Array.from() 将类数组对象 / Iterable可遍历对象(包括 Set, Map, String) 转为数组

            补充一下：如何创建一个类数组

                属性名必须为 纯数字 或者 字符串类型数字，然后有一个长度属性
                let obj = {
                    0: 1,
                    1: 2,
                    2: 3,
                    length: 3
                }

            参数1：传入一个类数组对象、Iterable对象
            参数2：
                传入一个回调函数，在调用 Array.from() 方法时会自动调用回调函数
                会依次传入对象的每个属性的取值，然后在函数体内可以操作这个参数并返回到新数组中
                注意！！！这个回调函数一定要有返回值，否则新数组中的元素全为 undefined

            例子：
                let obj = {
                    0: 1,
                    1: 2,
                    2: 3,
                    length: 3
                }
                // 会将类数组对象中元素取值 * 2 后返回到新数组中
                Array.from(obj, item => item * 2);


        (2) Array.of() 将传入的所有参数转为数组
            let arr = Array.of(1, 2, 3, 'momo');

        (3) fill() 填充数组
            作用：用于指定元素来 填充一个只有长度的空数组 / 覆盖原有的数组元素
            例子：
                const arr = new Array(10).fill(0); // 用 0 来初始化这个数组
                [1, 2, 3].fill(-1); // 原来的数组会被 -1 覆盖
                [1, 2, 3, 4, 5].fill(0, 1, 3); // 从下标 1 ～ 3 用 0 填充数组
                
        (4) Array.includes() 判断数组中是否含有某个元素

                

        (5) keys() 返回数组的迭代器对象

        (6)

        (7)
    


六、对象扩展


七、Set 与 Map 数据结构

八、Promise

九、Generator 生成器函数

十、Class




*/


let obj = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
}
// 会将类数组对象中元素取值 * 2 后返回到新数组中
let arr = Array.from(obj, item => {
    item * 2 + 1;
});
console.log(arr);


// function* g() {
//     console.log(1);
//     yield 'hello';
//     console.log(2);
//     yield 'world';
// }


// function g() {
//     console.log(1);
//     // yield 'hello';
//     console.log(2);
//     // yield 'world';
// }
// console.log(g());