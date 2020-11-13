/*
一、本节涉及内容
    1. 数组的解构赋值
    2. 对象的解构赋值
    3. 字符串的解构赋值
    4. 数值与布尔值的解构赋值
    5. 函数参数的解构赋值

二、基本概念
    解构赋值：是一种 JS 语法，可以让值从数组、属性从对象中提取到不同到变量中

三、数组的解构赋值
    1. 基本知识点
        (1) 基本用法
            const arr = [1, 2, 3, 4];
            let [a, b, c, d] = arr; // 将数组的值依次赋值给 a, b, c, d 变量

            let [e, f] = arr; // 将数组的前两个元素值赋值给 e 和 f

            let [ , g] = arr; // 将数组的第二个元素值赋值给 g

            比较复杂的操作
            const arr2 = [1, 2, 3, [4, 5, 6, [-1, -2, -3]]];
            // 给变量 h 赋值为 -3
            let [ , , , [ , , , [ , , h]]] = arr2;

        (2) 扩展运算符 ...
            const arr1 = [1, 2, 3];
            const arr2 = ['a', 'b', 'c'];
            const arr3 = [4, 5, 6];

            语法：...数组名
            作用：获取这个数组的所有元素，只能用于给其他数组初始化

            // 合并这三个数组赋值给arr4
            const arr4 = [...arr1, ...arr2, ...arr3];

        (3) 扩展运算符与解构赋值一起使用
            const arr1 = [1, 2, 3 ,4];
            const [a, ...b] = arr1; // 让数组第一个元素赋值给 a，后面剩余元素作为子数组赋值 给b

            注意：这里 const[a, ...b] 带有扩展运算符的变量只能放在最后面，否则会报错

        (4) 设置默认值
            const arr1 = [1, 2, 3];
            const [a, b, c, d] = arr1; // 此时 d 没有匹配，会被赋值为undefined

            // 给 d 设置一个默认值
            const [a, b, c, d = 10] = arr1; // 如果 d 没有匹配或则匹配为undefined，则会赋值为默认值

    2. 应用
        (1) 通过数组的解构赋值来快速交换两个变量值
            let a = 10, b = -10;

            // 左边是数组解构赋值的形式，右边是一个数组
            [a, b] = [b, a];

        (2) 直接接受函数返回值为数组的数组内容
            场景：
                有一个函数可以通过 id 来获取用户的信息，实现的方式是通过一个数组来返回该用户的所有信息
                在接受这个返回值的时候，可以通过数组的解构赋值来直接取出这些信息

            例子：
                function getUserInfo(id) {
                    var person = getPerson(id);
                    
                    return [
                    true,
                    person,
                    '请求成功'
                    ];
                }

                let [status, data, msg] = getUserInfo("1666134");
            
四、对象的解构赋值
    1. 基本知识点
        (1) 基本用法
            const obj = {
                name: 'kl',
                age: 18
            };

            // 通过对象的解构来取出对象的属性
            var { name, age } = obj;
            
            注意：这里变量的赋值匹配不是通过属性的顺序，是通过变量名称来匹配的

            比较复杂的用法
            const player = {
                nickName: 'momo',
                skill: [
                    {
                        skillName: '全都吃掉！',
                        damage: 200
                    },

                    {
                        skillName: '嘻嘻',
                        damage: 100
                    },

                    {
                        skillName: '喝冰阔落',
                        damage: 2000
                    }
                ]
            }

            // 获取palyer的三个技能对象
            var { skill: [ skill1, skill2, skill3 ] } = player
            这里就从对象的skill数组中依次给skill1、skill2、skill3赋值了

            // 获取player的第一个技能对象和第二技能的名称
            var { skill: [ skill1, { skillName } ] } = player;

            // 获取player的第三个技能对象的名称
            var { skill: [ , , { skillName } ] } = player;
            
            // 获取player的每一个技能对象的名称
            var { skill: [ { skillName: skillName1 }, { skillName: skillName2 }, { skillName: skillName3 } ] };
            这里通过冒号给skillName重新命名，以便区分


        (2) 结合扩展运算符
            
            获取剩余属性：

                var obj = {
                    name: 'kl',
                    age: 18,
                    gender: 'boy'
                };

                // name 之后剩余的属性会封装为一个对象传给 other 变量
                var { name, ...other } = obj;

             获取整个对象的属性：

                语法：...对象名
                作用：获取整个对象的属性，只能用于给其他对象初始化

                var obj1 = {
                    name: 'kl',
                    age: 18,
                    gender: 'boy'
                };

                // 这里相当于用 obj1 的属性重新创建了一个新的匿名对象
                console.log({
                    ...obj1
                });

                var obj2 = {
                    name: 'momo',
                    age: 20,
                    gender: 'girl'
                };

                var couple = {
                    hansband: {
                        ...obj1
                    },
                    wife: {
                        ...obj2
                    }
                };


        (3) 如何对已经声明的变量通过对象的解构来给其赋值
            场景：
                var obj1 = {
                    name: 'kl',
                    age: 18,
                    gender: 'boy'
                };

                var name;

                // 现在想通过对象的解构来给 name 变量赋值
                { name } = obj1; // 报错，这里会把花括号当作一个块级作用域
                
            解决方法：
                ( { name } ) = obj1;

        (4) 设置默认值

            // 假如用户在注册信息的时候没有设置性别
            let obj = {
                name: 'momo',
                age: 20,
            }

            // 现在要来获取用户信息
            let { name, age, gender = 'boy' } = obj;

            // 定义了三个变量，前两个变量匹配 obj 对象相关属性
                如果没有匹配且没有设置默认值则为undefined，如果设置了默认值且没有匹配则为默认值
                
    2. 应用
        使用对象传参来实现传入乱序参数
        
        // 实现 a - b + c 的计算，如果没传入对应参数则默认为0
        function count ({ a = 0, b = 0, c = 0 }) {
            return a - b + c;
        }

        count({ a: 3, b: 10 });

    3. 一次性获取一个函数的多个返回值 (返回一个对象)
        功能类似于数组解构赋值

五、字符串的解构赋值
    1. 基本内容
        (1) 基本用法
            var [ a, b, c ] = "hello";
            // 这里按照字符串的索引，用 hel 依次给 a、b、c 赋值了

        (2) 结合扩展运算符
            var [ a, ...b ]  = "bilibili";
            // 这里将b字符后面的每一个字符封装为字符数组赋值给了变量b

    2. 应用
        将一个字符串分解为字符数组
        var str = "hello";
        var [ ...charArr1 ] = str;
        var charArr2 = str.split("");
        var charArr3 = [ ...str ];

六、数值与布尔值的解构赋值(了解)


七、函数参数的解构赋值
    
    // 交换数组中liang g
    function swap() {

    }




                
                
                
                
        
        
*/

// let sum = ([...numArr]) => {
//     // let sum = 0;
//     // numArr.forEach((element) => {
//     //     sum += element;
//     // });
//     // return sum;
//     console.log(mumArr);
// };

// var sum = ([...numArr]) => {
//     console.log(numArr);
// }
// sum([1, 2, 3, 4]);


// var sum = function (...numArr)  {
//     console.log(numArr);
// }
// sum(1, 2, 3, 4);

