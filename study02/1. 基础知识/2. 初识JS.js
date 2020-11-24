/*
一、JS 代码编写位置
    1. 直接写到 html 标签内
        例子：
            <div onclick="var a = 123; alert('你点我干嘛？'); console.log(a);"></div>

    2. 可以写到超链接的 href 属性中
        例子：
            <a href="javascript:alert('让你点你就点？'); console.log(123);">你点我一下嘛</a>

    3. 写到script标签内

    4. 外部引入js文件
        <script src="输入js文件的地址"></script> 引入之后就不能在script中写代码了

    


二、var 变量的声明的特点
    1. var 只区分全局作用域和函数作用域，块级作用域对其无效

    2. var 声明的变量会提前在该作用域的最前方声明

    3. var 可以重定义变量，后定义的覆盖前面定义的

    4. 如果一个变量没有被声明var，那么他会在当前作用域里找var的声明，
        当前作用域没找到就会去上一层作用域找，
        如果一直没找到则该变量就会变成window的属性，即全局变量

    


三、数据类型
    1. 基本数据类型
        (1) String
        (2) Number (数值)表示整数或浮点数
        (3) Boolean
        (4) Null
        (5) Undefined 无定义，派生于null，所有undefined == null 返回ture

    2. 引用数据类型
        Object、Function、Array、Set、Map


    3. typeof操作符
        (1) 语法: typeof 变量, typeof (变量)
        (2) 返回值为string类型， 取值可能为string / number / boolean / object / undefined / function


    4. String基本数据类型需要注意的点
        (1) 单引号和双引号都可以用来表示字符串
        (2) 同类引号不能嵌套，只能单引号嵌套双引号或者双引号嵌套单引号
        (3) 转义字符是主对象 '\'，正则表达式的字面量形式是副对角线 /

    5. Number基本数据类型需要注意的点
        (1) JS中的整数、浮点数都是Number数值基本数据类型
        (2) -Infinity -Number.MAX_VALUE -Number.MAX_SAFE_INTEGER 0 关于Number的上下限详见备忘录
        (3) Number.MAX_VALUE = 1.79 * 10^308
        (4) Number.MIN_VALUE = 5 * 10^324，大于0的最小的浮点数
        (5) JS 中浮点数值的计算不是很精准
        (6) Number的特殊取值
                NaN：
                    (1) 如果控制台输出 3 - "abc"，那么就会输出NaN
                    (2) typeof (3 - "abc") 输出 number
                    (3) 如何涉及NaN的操作， 返回的结果都是NaN， 如： NaN / 10 返回 NaN
                    (4) NaN == NaN 返回false

                Infinity：超出 Number.MAX_VALUE 范围的值

        补充：
            isNaN(n)
            作用： 检测输入的参数n是否为非数值， 返回boolean
            注意： 会先使用Number()强转n为数值， 然后再判断其是否为非数值
            如： isNaN("16"); 返回false


    6. Null 与 Undefined
        (1) Null 类型 和 Undefined 类型取值只有一个，分别为 null 和 undefined
        (2) null 这个值专门用来表示空的对象
        (3) undefined 用来表示未定义的变量
        (4) 使用 typeof null 会返回一个 Object

    7. 基本数据类型的强制类型转换
        (1) 其他数据类型 --> String
                方式一：被转数据类型.toString()
                    - 该方式不能将 Null 和 Undefined 数据类型转为 String
                
                方式二：String(被转数据类型)
                    - 可以将任何基本数据类型转为 String
                    - 底层对于 Number 和 Boolean 实际上也是调用的 toString()，但对于 Null 和 Undefined 就不会调用 toString 了
        
        (2) 其他数据类型 --> Number
                方式一：Number(被转数据类型)
                    - String 转 Number
                        1. 对于纯数字字符串，可以转为实际数值，对于非存数字字符串会被转为NaN
                        2. 空字符串和纯空格字符串会被转为 0

                    - Boolean 转 Number
                        1. flase 转为 0
                        2. true 转为 1

                    - Null 转 Number
                        null 转为 0

                    - Undefined 转 Number
                        undefined 转为 NaN

                方式二： parseInt(被转换数据类型) / parseFloat(被转换数据类型)
                    - 该方式只用于字符串
                    - 可以将字符串中开头的数值部分提取出来转为数值类型
                    - 如果字符串开头为非数值，那么一定返回 NaN
                    - 如果对非String类型使用该方法，会先将转为String然后再操作

        (3) 其他数据类型 --> Boolean
                方式：Boolean(被转数据类型)
                    - Number 转 Boolean
                        除了 0、NaN 是 false，其余都是 true

                    - String 转 Boolean
                        除了空串是 false 其余都是 true

                    - Null 和 Undefined 转 Boolean
                        false

                    - 任何引用数据类型转 Boolean 
                        true

    8. 其他进制的数字
        16进制：0x开头，var num = 0xcafe;
        8进制：0o开头，var num = 0o8;
        2进制：0b开头，var num = 0b1001;

        将指定进制数转为10进制
        parseInt('ff',16)
 
四、算数运算符
    1. + , -, *, /,%
        (1) 对非数值类型的值进行运算的时候会先将它们转为Number类型再运算
        (2) 任何数据类型与 NaN 运算都是 NaN (字符串拼接除外)
        (3) 任何数据类型与字符串相加都会先转为字符串然后进行拼串
        (4) 

*/
console.log(NaN + true);




/*






四、算数操作符
    1. +,-,*,/,%
        运算的时候(除去 + )会先把运算的变量转为number(隐式转换)，然后进行运算
        "123" - 123 返回number类型 0
        "123" + 123 返回string类型 123123

        注意：如果使用 +，当运算的变量中有一个字符串，那么就会变成字符串的拼接


    2. ++,-- 与上面同理

    3. +=,*=,/=,%=
        对于 += 来说：当运算的变量中有一个字符串，那么就会变成字符串的拼接

        其余运算会自动强转为number


        规律：
            有 + 又有字符串则为字符串的拼接
            其余情况下会先把变量调用Number()

五、比较运算符
    只需要注意 == 与 ===
             != 与 !==

    ==: 只比较变量的值是否相等
    ===: 不仅要比较值还要比较数据类型

六、逻辑与或
    7 && 0 返回 0
    9 && "hello" 返回"hello"

    "" && 9 && 0 返回""

    99 && 0 && 1 返回 0

    当第一个数为非boolean时，隐式转换为boolean类型时为ture，则返回其后面的变量值
    当第一个数为非boolean时，隐式转换为boolean类型时为flase，则返回其第一个变量值
    如果有一个操作数null，undefined,NaN，则返回null/undefined/NaN
             
*/


