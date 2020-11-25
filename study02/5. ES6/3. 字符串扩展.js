/*


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

    在JS代码中使用Unicode码来表示特殊字符：
        '\u四位编码' 如：'\u2310'，四位编码的范围是 0000 - ffff，编码如果超出这个范围则需要加上大括号 '\u{1f436}'

    在HTML中使用Unicode码来表示特殊字符：
        <span>&#编码的十进制</span>，比如我想使用 Unicode码 为 2310 的字符，那么需要将 2310 转为 10进制 然后再填进去
        这里的编码范围可以任意


5. 获取某个字符的Unicode码
    '🐶'.codePointAt(0).toString(16) // 返回 '1f436'
    'A'.codePointAt(0).toString(16) // 返回 '41'


*/
