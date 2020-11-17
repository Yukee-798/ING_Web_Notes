/*
一、本节涉及内容
    1. let 与 块级作用域
    2. const

二、先回顾一下 js 中的作用域 和 用var声明变量的特定
    1. js 中的作用域只分为全局作用域和函数作用域
    2. var 声明的变量会提前在该作用域的最前方声明
    3. 变量提升：如果一个变量没有被声明var，那么他会在当前作用域里找var的声明，当前作用域没找到就会去上一层作用域找
               如果一直没找到则该变量就会变成window的属性，即全局变量


三、块级作用域
    是ES6中新增的作用域，通俗来讲就是一对花括号 {...}
    例如：
        if () {}
        switch () {}
        for () {}
        try {} catch () {}
        {}



三、let 声明的变量特点
    1. 只在当前块级作用域中有效 
        例子：

            for (let i = 10; i > 0; i--) {}
            console.log(i); // 报错，因为 i 变量由let声明，只在for的块级作用域中可见

            for (var a = 10; a > 0; a--) {}
            console.log(a); // 输出0，a 变量由 var 声明，并且在全局作用域中，那么在全局可见

    2. 用 const 和 let 声明的变量不能再被重新声明
        例子：
            var a = 100;
            var a = 200; // a 被重新赋值为200

            let b = 100;
            let b = 200; // 报错

            const c = 100;
            const c = 100; // 报错

    3. let 声明的变量不存在变量重声，即不会提前在 作用域最开始声明
        例子：
            console.log(a); // 报错
            let a = 100; 

    4. 暂时性死区
    
       如果区块中存在let和const命令，这个区块对这些命令声明的变量，
       从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

        例子：
            var a = 100;
            {
                console.log(a); // 报错
                let a;
            }


    5. 关于 for 循环
        设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
        这两个作用域是独立的

        for (let i = 0; i < 3; i++) {
            let i = 'abc';
            console.log(i);
        } // 输出三行abc

        循环体内的 let i 让 i 暂时性死区，被封闭在了循环体作用域内

        for (let i = 10; i > 0; i--) {
            console.log(i);
            let i = 0;
        }

        上面代码会报错



    6. let 声明变量的应用
        生成10个按钮，每次点击按钮的时候弹出1-10

        实现：
            方式一
                for (var i = 1; i <= 10; i++) {
                    var btn = document.createElement("button");
                    btn.type = "button";
                    btn.innerHTML = i;
                    btn.onclick = () => {
                        alert(i);
                    }
                    document.body.appendChild(btn);
                }

                注意：每次点击按钮只会弹出11，因为这里按钮的响应函数是在for 循环结束后再执行的
                     for 循环结束后，i 最终等于11，那么弹出也是11

            方式二
                for (var i = 1; i <= 10; i++) {
                    ((x) => {
                        var btn = document.createElement("button");
                        btn.type = "button";
                        btn.innerHTML = x;
                        btn.onclick = () => {
                            alert(x);
                        }
                        document.body.appendChild(btn);
                    })(i);
                }
                
                这里的实现就不会弹出11了，而是满足1-10需求的，因为for循环内部是一个立即执行函数
                i只是被当作一个实参传入了x中，而按钮的响应函数提示的就是x的值

            方式三
                使用let实现
                for (let i = 1; i <= 10; i++) {
                    var btn = document.createElement("button");
                    btn.type = "button";
                    btn.innerHTML = i;
                    btn.onclick = () => {
                        alert(i);
                    }
                    document.body.appendChild(btn);
                }

                解释：每次循环的i都是独立的，因此就算最后一个i为11，也不会影响前面的i
                
                    

        

四、const 声明量
    1. 定义：被const 声明的量是常量，不可以修改其内容
    2. 注意事项：
        (1) 常量必须在声明的时候赋值
        (2) 不能重复声明
        (3) 不存在变量提升(自动在当前作用域最开始声明)
        (4) 只在当前块级作用域可见

    3. 常量为引用类型的时候可以修改该引用类型的成员
        例子：
            const person = {
                name: '小明';
                age: 14;
            };

            person.age = 15;

       那么怎么防止常量引用类型的成员被修改呢？
            使用Object.freeze(引用类型)
            Object.freeze(person); // 此时就不能再修改增删person的成员内容了


    4. ES6之前声明常量的方式 (了解)



*/




{
    let i = 32;

    function print() {
        console.log(i);
        
    }
    print();
}