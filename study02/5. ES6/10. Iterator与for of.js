/*
一、Iterator的基本内容
    1. 概念： 它是一种接口， 为各种不同的数据结构提供统一的访问机制。 
             任何数据结构只要部署 Iterator 接口， 就可以完成遍历操作（ 即依次处理该数据结构的所有成员）。

    2. 遍历器的作用：
        一是为各种数据结构， 提供一个统一的、 简便的访问接口；
        二是使得数据结构的成员能够按某种次序排列；
        三是 ES6 创造了一种新的遍历命令 for... of 循环， Iterator 接口主要供 for... of 消费。

    3. Iterator 的遍历过程：
        （1） 创建一个指针对象， 指向当前数据结构的起始位置。 也就是说， 遍历器对象本质上， 就是一个指针对象。

        （2） 第一次调用指针对象的 next 方法， 可以将指针指向数据结构的第一个成员。

        （3） 第二次调用指针对象的 next 方法， 指针就指向数据结构的第二个成员。

        （4） 不断调用指针对象的 next 方法， 直到它指向数据结构的结束位置。

            每一次调用 next 方法， 都会返回数据结构的当前成员的信息。 
            具体来说， 就是返回一个包含 value 和 done 两个属性的对象。 
            其中， value 属性是当前成员的值， done 属性是一个布尔值， 表示遍历是否结束。

二、默认的 Iterator 接口
    1. 概念：
        (1) 默认的 Iterator 接口部署在数据结构的 Symbol.iterator 属性中
        (2) 一个数据结构只要具有 Symbol.iterator 属性， 就可以认为是“ 可遍历的”
        (3) Symbol.iterator 属性本身是一个函数， 就是当前数据结构默认的遍历器生成函数。 
            执行这个函数， 就会返回一个遍历器。
        

    2. 原生具备 Iterator 接口的数据结构
        Array
        Map
        Set
        String
        TypedArray
        函数的 arguments 对象
        NodeList 对象

    3. 数组使用遍历器
        let arr = ['a', 'b', 'c'];
        let iter = arr[Symbol.iterator]();
        iter.next() // { value: 'a', done: false }
        iter.next() // { value: 'b', done: false }
        iter.next() // { value: 'c', done: false }
        iter.next() // { value: undefined, done: true }

    4. 一个对象如果要具备可被 for... of 循环调用的 Iterator 接口， 
        就必须在 Symbol.iterator 的属性上部署遍历器生成方法 (目前作了解)

三、遍历数据结构
    1. 使用遍历器 + while
        let arr = [1, 2, 3, 4];
        let iter = arr[Symbol.iterator]();
        let result = iter.next();
        while (!result.done) {
            console.log(result.value);
            result = iter.next();
        }

    2. 使用 for of
        一个数据结构只要部署了Symbol.iterator 属性， 就被视为具有 iterator 接口， 就可以用 for... of 循环遍历它的成员。 
        也就是说，for... of 循环内部调用的是数据结构的 Symbol.iterator 方法。

        (1) 数组的遍历：
            const arr = [1, 'green', 'blue'];

            // 这里的 e 就表示 arr 中的每个元素，数组中有几个元素那么 for 循环就会执行几次 
            for (let e of arr) {
                console.log(e); 
            }
            
            注意：
                (1) 使用 for of 就可以替代 forEach() 方法了
                (2) for in 和 for of 的区别
                        for... in 循环读取键名，for... of 循环读取键值。 
                        如果要通过for... of 循环， 获取数组的索引， 可以借助数组实例的 entries 方法和 keys 方法


        (2) Set 的遍历：

            var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
            // e 就是每次遍历从 Set 集合中取出的元素
            for (let e of engines) {
                console.log(e);
            }

            注意：
                (1) 遍历元素顺序会按照存入元素的顺序依次遍历出来
                (2) 每次拿到的元素是一个是一个值


        (3) Map 的遍历

            var map = new Map();
            map.set(1001, { name: 'momo', age: 18});
            map.set(1002, { name: 'dwd', age: 19});
            map.set(1003, { name: 'moerdan', age: 20});

            for (let [key, value] of map) {
                console.log(key + ": " + '[' + value.name + ', ' + value.age + ']');
            }

            注意：
                (1) 遍历元素顺序会按照存入元素的顺序依次遍历出来
                (2) 每次拿到的元素是一个数组，其中包含 key 和 value 两个元素


*/