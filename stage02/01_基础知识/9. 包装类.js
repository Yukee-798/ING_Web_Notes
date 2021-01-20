/*
一、回顾一下JavaScript中的数据类型
    1. 基本数据类型
        String Number Boolean Null Undefined

    

    2. 引用数据类型
        Object

二、包装类
    1. 作用：JavaScript中为我们提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象

    2. 方法
        方法 说明
        String() 将string转为String对象
        Number() 将number转为Number对象
        Boolean() 将boolean转为Boolean对象


    3. 例子
    ```javascript
    var num = new Number(3);
    var str = new String("hello");
    var bool = new Boolean(true);
    ```

    注意：在实际开发过程中并不会这样来使用，因为对象之间比较的是内存地址与基本数据类型之间比较不一样

    4. 自动装箱
        当我们对一些基本数据类型变量去调用一些属性和方法的时候：
            浏览器会自动将其转换为包装类，然后再调用属性和方法
            调用完毕之后，包装类对象会销毁并转换为原来的基本数据类型

        例子：
            var s = 123;
            s.hello = "你好"; // 创建 Number包装类对象后销毁
            console.log(s.hello); // 创建一个新的 Number包装类对象并读取hello属性，返回undefined

        






*/
