// 声明一个变量 a，同时指定它的类型为 number
let a: number = 10;

// 这里默认给 b 设置为了 number 类型
let b = 123;

// 给形参限制类型
function add (a: number, b: number) {
    return a + b;
}

// 同时给函数返回值限定为 string 类型
function addToString (a: number, b: number): string {
    return String(a + b);
}