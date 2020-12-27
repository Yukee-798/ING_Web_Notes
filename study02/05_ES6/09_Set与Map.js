/*
一、Set
    1. 基本概念
        Set类似于数组，但是Set集合中没有重复的元素

    2. Set集合的创建
        let set = new Set([1, 2, 3, 4]);
        let set = new Set('1222345'); // { '1', '2', '3', '4', '5' }
        可以在构造方法中传入一个具有迭代器接口的对象

    3. 基本用法
        数组去重 [...new Set([1, 1, 2, 3, 4])]   /    Array.from(new Set([1, 2, 3, 4, 3]));
        字符串去重[...new Set('哈哈哈莫莫大笨比')].join('') / Array.from(new Set('哈哈哈莫莫大笨比'));

    4. 关于Set集合中判断重复元素的原理
        底层算法类似于 ===，但是与 === 不同的是 NaN 是等于自身的
        另外，关于引用数据类型，不同的对象地址就算内容相同也无法去重的

    5. 属性
        size 获取Set集合内的元素个数

    6. 操作方法
        (1) add() 添加元素，返回引用本身
            console.log(new Set().add(1).add(2)); // { 1, 2 }

        (2) delete() 删除元素，返回布尔值表示删除是否成功
            Set s = new Set([1, 2, 3]);
            s.delete(1);

        (3) has() 判断是否含有某个元素


        (4) clear() 清空集合

    7. 遍历方法
        (1) keys()、values()、entries()

            Set.prototype.keys()： 返回键名的遍历器
            Set.prototype.values()： 返回键值的遍历器
            Set.prototype.entries()： 返回键值对的遍历器

            详见Iterator章节
            
 
        (2) forEach()

            let set = new Set([1, 4, 9]);
            set.forEach((value, key) => console.log(key + ' : ' + value))
            // 1 : 1
            // 4 : 4
            // 9 : 9

    8. 将Set转为数组

        let set = new Set(['red', 'green', 'blue']);
        let arr1 = [...set];
        let arr2 = Array.from(set);

        // ['red', 'green', 'blue']

    9. 数组中的 map 和 filter 方法间接用于 Set

        let set = new Set([1, 2, 3]);
        set = new Set([...set].map(x => x * 2));
        // 返回Set结构：{2, 4, 6}

        let set = new Set([1, 2, 3, 4, 5]);
        set = new Set([...set].filter(x => (x % 2) == 0));
        // 返回Set结构：{2, 4}

        应用：实现集合的并集、交集、差集
            let a = new Set([1, 2, 3]);
            let b = new Set([4, 3, 2]);

            // 并集
            let union = new Set([...a, ...b]);
            // Set {1, 2, 3, 4}

            // 交集
            let intersect = new Set([...a].filter(x => b.has(x)));
            // set {2, 3}

            // （a 与 b 的）差集
            let difference = new Set([...a].filter(x => !b.has(x)));
            // Set {1}




*/
