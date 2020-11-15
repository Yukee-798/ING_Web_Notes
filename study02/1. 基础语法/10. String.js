/*
一、字符串基本概念
    1. 字符串在底层中以字符数组形式保存
    2. 因此对应字符串，可以通过数组形式来获取长度和访问其字符
        例子：
            var str = "Hello World!"
            console.log(str.length); // 12
            console.log(str[0]); // H
二、常用方法
    1. charAt()

    2. charCodeAt()
        返回字符的Unicode编码

    3. String.fromCharCode()
        通过Unicode编码获取字符

    4. concat()
        说明：连接多个字符串

        例子：
            var newStr =  str.concat("abc", "efg");

    5. indexOf()
        说明：可在 start 的开始的下标开始寻找子串第一次出现的位置，没找到则返回-1
        
    6. lastIndexOf()
        说明：从后往前找

    
    7. slice(start, ?end)
        返回[start, end)区间子串，可以传入负值


    8. substring(start, ?end)
        返回[start, end) 区间子串，不能传入负值，当传入的 end 比 start 大的时候会自动调整它们之间的顺序

    
    9. split()
        拆分字符串到字符串数组中

    10. toUpperCase()

    11. toLowerCase()

    12. valueOf()

    13. trim()







*/


var str = 123;
console.log();