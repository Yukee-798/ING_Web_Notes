/*
1. 分类
    基本数据类型：
        String 
        Number 
        Boolean 
        undefined：派生于null，undefined == null 返回 true
        null

    引用数据类型:
        Object
        Function：一种特别的对象 (可以执行)
        Array

2. 判断

        typeof：返回数据类型的 **字符串表达** 
            可以判断 undefined / 数值 / 布尔型 / 字符串 / 函数类型 / object 类型
            不能判断 null 与 object，object 与 array
        instanceof：判断对象的具体类型
        == / ===：双等号会进行自动类型转换，三等号不会

        (1) 基本类型的判断

            判断一个变量是否为字符串、数字、Boolean，需要使用 typeof a === 'string' / 'number' / 'boolean'
            判断一个变量是否为undefined、null，需要使用 === 全等符合
            注意：type of null 返回的是 'object'

        (2) undefined 与 null 的区别

            变量声明后没有赋值则为 undefined
            变量声明后赋值为 null

            null 的用法：
                var b = null;
                b = [1, 2, 3];
                b = null; // 回收堆内层
                
3. 严格区分变量类型和数据类型
    数据的类型：
        * 基本类型：1,2,'momo',undefined,null存放在栈空间
        * 对象类型：存放在堆内存的对象
        
    变量的类型：
        * 基本类型：保存的基本类型的数据
        * 引用类型：保存的对象的堆内存地址值





*/

console.log(typeof []);
