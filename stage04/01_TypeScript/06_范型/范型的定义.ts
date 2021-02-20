/* 
    在定义类或函数时，类型不明确，可以使用范型

    范型的定义：在字面量后面定义
*/

function fn(a: any): any {
    return a;
}

// 尽量不使用 any 的原则下，可以使用范型来改写上面代码
function fn2<T>(a: T): T {
    return a;
}

// 调用
fn2(10); // 自动推断
fn2<string>('hello'); // 手动指定


// 限制范型范围
interface ILength {
    length: number;
}

type TLength = {
    length: number
}


// 传入的参数必须有 length 属性
function fn3<T extends TLength>(a: T): number {
    return a.length;
}


// 范型在类中的使用
class MyClass<T> {
    constructor(public name: T) {}
}

const mClass = new MyClass<string>('hello');


// 交换一个元组的两个元素
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}