/*
一、原型 prototype
    1. 每个一个函数都有一个 prototype属性 ，它默认指向一个 Object实例实空对象(原型对象)【有例外】 ，原型对象是通过调用构造函数 Object() 来创建的
    2. JS中内置的一些对象，比如Date,Number... 它们所有的方法都是保存在其构造函数的 prototype 原型对象中的
    3. 函数的原型对象中默认存在两个属性：
        constructor：指向当前函数对象
        __proto__：原型对象的原型对象
    4. 给构造函数的原型对象添加属性 ，实例对象也可以调用其中的属性

二、显式原型与隐式原型
    1. 显示原型：每一个函数中存在的 prototype 属性就是显示原型
    2. 隐示原型：每一个实例对象都有一个 __proto__ 属性就是隐示原型 ，每个函数都是 Function的实例 ，所以函数对象中也有 __proto__
    3. 实例对象中隐示原型属性 __proto__ 与 构造函数中 显示原型属性 prototype 指向同一个原型对象
    4. 过程：
        (1) 定义一个构造函数对象 ，函数对象中生成 prototype 属性指向原型对象
        (2) 通过该构造函数实例化一个对象时 ，构造函数中的 this 指向创建的新对象 
        (3) 为该新对象添加一个 __proto__ 属性：this.__proto__ = prototype ，实例的隐示原型指向构造函数显示原型
        (4) 返回 this
        (3) 经过上面4个过程就成功通过构造函数创建了一个新对象

    5. 内存分布图详见备忘录

    注意：
        (1) 关于原型对象 ，在页面加载的时候就会自动调用 new Object() 创建一个原型对象 ，用来初始化一些方法 (误)
        (2) prototype 存在于函数中
        (3) 实例对象的隐示原型等于构造函数的显示原型
        (4) __proto__ 存在于实例对象中 ，函数是 Function 的实例 new Function() ，所以函数中也有 __proto__
        (5) 所有函数的 __proto__ 属性都一样 ，等于 Function.prototype

三、关于实例对象调用属性的过程
    1. 当我们访问对象的一个属性或方法时， 它会现在自身的中寻找， 如果有就直接使用
    2. 如果没有则会去 对象.__proto__ 中去找 ， 找到就使用
    3. 如果其原型对象中也没有， 则会去 对象.__proto__.__proto__ 中去寻找 ，即 Object.prototype ，找到就使用
    4. 如果依旧没找到则会去 对象.__proto__.__proto__.__proto__ 中去找 ，即 Object.prototype.__proto__ ，因为这个值是 null 那么返回undefined

    注意： 对象.__proto__.__proto__ === Object.prototype

四、原型链
    1. 当我们访问一个对象的属性时
        (1) 先在自身的属性中找 ，找到就返回
        (2) 如果自身中没找到 ，沿着 __proto__ 这条链向上去找 ，找到则返回
        (3) 如果最终都没有找到则返回 undefined

    2. 作用：查找对象的属性 ，继承属性给实例对象

五、补充
    1. 一般普通函数显示原型指向的对象：空的Object实例对象 ，fn.prototype instanceof Object // true
        Function.prototype instanceof Object // true

    2. 例外：
        Object.prototype 即 Object 函数的原型对象并不是 Object的实例， Object.prototype instanceof Object // false

    3. 所有函数 包括Function构造函数本身 ，都是Function的实例

    4. Object的原型对象是原型链的尽头 ，因为 Object.prototype.__proto__ 为 null


六、原型属性问题
    1. 读取一个对象的属性时会自动到原型链中去找
    2. 设置对象属性时会直接在当前对象中设置属性，不会在原型链上去设置覆盖之前设置过的属性
    3. 对象的方法一般定义在原型中 ，属性一般设置给对象本身


七、练习题：见备忘录

八、原型链继承
    让子类型的原型指向父类型的一个实例对象
    Sub.prototype = new Supper();


*/

console.log({}.__proto__ === Object.prototype);
