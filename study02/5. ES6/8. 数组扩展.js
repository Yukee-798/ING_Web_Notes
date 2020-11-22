/*
1. 与扩展运算符结合使用， 作为函数调用到实参 
    例子：
    func(a, b, c) {};
    func(...[1, 2, 3]); // 这就把1,2,3三个参数传给了 a b c

    // 找到一个数组中到最大值
    Math.max(...[4, 7, 0, 1, 9]);
    Math.max.apply(null, [4, 5, 0, 1, 9]); // 与上面的等价

    接受生成器函数的yield
 
    function* g() {
        console.log(1);
        yield 'hello';
        console.log(2);
        yield 'world';
    }
    console.log([...g()]); // 待补充


2. 新的方法
    (1) Array.from() 将类数组对象 / Iterable可遍历对象(包括 Set, Map, String) 转为数组

        补充一下： 如何创建一个类数组

        属性名必须为 纯数字 或者 字符串类型数字， 然后有一个长度属性
        let obj = {
            0: 1,
            1: 2,
            2: 3,
            length: 3
        }

        参数1： 传入一个类数组对象、 Iterable对象
        参数2：
        传入一个回调函数， 在调用 Array.from() 方法时会自动调用回调函数
        会依次传入对象的每个属性的取值， 然后在函数体内可以操作这个参数并返回到新数组中
        注意！！！ 这个回调函数一定要有返回值， 否则新数组中的元素全为 undefined

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
            作用： 用于指定元素来 填充一个只有长度的空数组 / 覆盖原有的数组元素
            例子：
            const arr = new Array(10).fill(0); // 用 0 来初始化这个数组
            [1, 2, 3].fill(-1); // 原来的数组会被 -1 覆盖
            [1, 2, 3, 4, 5].fill(0, 1, 3); // 从下标 1 ～ 3 用 0 填充数组

    (4) Array.includes() 判断数组中是否含有某个元素



    (5) keys() 返回数组的迭代器对象

    (6)

    (7)


*/