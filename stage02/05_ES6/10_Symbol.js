/*
一、基本概念
    1. 概念：
        ES6 引入了新的原始数据类型 Symbol，表示独一无二的值，它是 JS 中的第七种数据类型
        类似于字符串。

    2. 特点：
        (1) Symbol 的值是唯一的，用来解决命名冲突问题
        (2) Symbol 值不能与其他数据类型进行运算
        (3) Symbol 定义的对象属性不能使用 for...in 循环遍历，但是可以使用 Reflect.ownKeys 来获取对象所有的键名

二、创建 Symbol 

    let s = Symbol();
    let s2 = Symbol('莫二蛋');
    let s3 = Symbol('莫二蛋');
    console.log(s2 === s3); // false

    let s4 = Symbol.for('莫二蛋');
    let s5 = Symbol.for('莫二蛋');
    console.log(s4 === s5); // true

    Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，
    主要是为了在控制台显示，或者转为字符串时，比较容易区分。

三、Symbol 的主要作用
    对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。
    凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突

    由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，
    就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。

    案例：
        在一个对象中我们想为其添加 up 和 down 方法，但是我们不知道它原来本身是否有这两个方法
        为了不覆盖原来的代码，我们可以用 Symbol 作为其属性名，添加对应方法

        let game = {...

        let methods = {
            up: Symbol('up'),
            down: Symbol('down')
        };

        game[methods.up] = function() {};
        game[methods.down] = function() {};


        // ================ 使用 symbol 作为对象的属性名 ===============

        let mySymbol1 = Symbol('say');
        let mySymbol2 = Symbol('eat');
        let obj = {
            [mySymbol1]: function () {
                console.log('hello');
            }
        }

        obj[mySymbol2] = function () {
            console.log('eat');
        }

        obj[mySymbol2]();

三、Symbol 的内置值(了解)
*/

