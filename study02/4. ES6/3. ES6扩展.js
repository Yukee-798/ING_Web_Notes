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


    3. 新的Unicode表示法和遍历方式


*/
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.say = function () {
        console.log(`我的名字是${ this.name }，我今年${this.age}岁`);
    }
}

var person = new Person('kl', 16);
person.say();