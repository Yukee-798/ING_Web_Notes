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

            注意：指定的补齐

            
        


    3. 新的Unicode表示法和遍历方式


五、函数扩展
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

*/

            var sum = (a, b) => void (a + b);

console.log(sum(1, 2));
