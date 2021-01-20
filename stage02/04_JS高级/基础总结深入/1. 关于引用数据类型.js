/*
    n 个引用变量指向同一个对象，通过某一个变量修改了对象的内容后，其余的引用的也能看见对象被修改后的数据



    做一下下面两道题
    1. 
        var obj1 = {age: 18};
        var obj2 = {age: 19};

        function fn1(obj) {
            obj.age = 20;
        }

        function fn2(obj) {
            obj = {age: 20};
        }

        // 关于传参，实际上就是简单的变量之间的赋值

        fn1(obj1); // 将 obj1 的内存地址传入 fn1 中的 obj 参数中，然后修改该内存地址指向的对象的 age 属性
        fn2(obj2); // 将 obj2 的内存地址传入 fn2 中的 obj 参数中，然后又重新将 obj 中的内存地址指向了一个新的对象
                    该方法执行完后这个新对象就会被回收

        console.log(obj1.age); // 20
        console.log(obj2.age); // 19

    2. 
        var a = 3;
        function(a) {
            a = a + 1;
        }
        fn(a); // 将 全局变量中 a 的值赋值给了函数中参数 a，执行完 a = a + 1 后实际上是函数内部的变量 a 变成了 4
        console.log(a); // 3



*/