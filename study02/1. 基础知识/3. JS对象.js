/*  
一、回顾一下JS中的数据类型
    基本数据类型：
    - String 字符串
    - Number 数值
    - Boolean 布尔值
    - Null 空值
    - Undefined 未定义

    引用数据类型：
    - Object 对象

二、对象的分类
    1. 内建对象
        - 由ES标准中定义的对象，在任何的ES的实现中都可以使用
        - 比如：Math String Number Boolean Function Object...

    2. 宿主对象
        - 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象
        - 比如 BOM DOM

    3. 自定义对象
        - 由开发人员自己创建的对象

三、创建对象
    1. 使用new关键字来创建对象，var obj = new Object();
    2. 属性
        (1) 定义：在对象中保存的值称为属性

        (2) 向对象中添加属性：对象.属性名 = 属性名
                obj.name =  "丁文迪";
                obj.age = 18;

        (3) 读取对象中的属性
                语法：对象.属性名
                如果读取对象中没有保存的属性，则会返回unifined

        (4) 删除对象的属性
                语法：delete obj.name;

        (5) 关于对象的属性名
                不强制遵循标识符的规范：比如可以设置为 obj.var = 12;
                但是不能设置为 obj.123 = 789;
                如果要用特殊的标识符，则需要 对象["属性名"] = 属性值;
                                        obj["123"] = 789;
                                        此时要取出对象值则用：obj["123"]


        (6) 使用[]方式去操作属性会更加灵活
                obj[n]，可以在[]中传入一个变量(字符串)从而读取obj对象中属性名为变量n的属性
                eg:
                    obj["name"] = 789;
                    var n = "name";
                    打印 obj[n] 控制台显示789

        (7) in 运算符
                作用：可以检查一个对象中是否包含某个属性
                语法：属性名字符串 in 对象


        (8) 补充一下，关于对象的属性名加引号与不加引号
                var person = {
                    'name': 123,
                    'age': 456,
                    gender: 1
                };

                属性的调用：person.name 和 person['name']均可
                          person.age 和 person['gender']均可

        
        3. 对象字面量
            (1) 作用：另一种创建对象的方式
            (2) 语法：var obj = {}; 等价于 var obj = new Object();
            (3) 特性：使用对象字面量创建对象的时候可以直接指定对象中的属性
                        var obj = {
                                    name: "莫莫", 
                                    age: 18, 
                                    num: 1001
                                  };
                
                注意：属性可以加引号也可以不加，但是使用一些特殊的标识符则必须加引号，如"7987&^%!@"

            (4) 以对象作为属性
                        var obj = {
                                    name: "kl",
                                    age: 18,
                                    lover: {name: "dwd", age: 18}
                                };

*/

var person = {
    'name': "莫莫",
    'age': 20,
    gender: 0
};

var person2 = {
    'name': "kl",
    'age': 20,
    gender: 1
};

let str = '123';

console.log([...str]);