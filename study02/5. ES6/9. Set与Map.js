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
            
 
        (2) forEach()





*/
// let person1 = {};
// let person2 = {}
// let set = new Set();
// set.add(person1);
// set.add(person2);
// console.log(set);


console.log(new Set().add(1).add(2)); // {1, 2}