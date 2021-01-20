/* 
    1. 三个基本类型：number, string, boolean

    2. 字面量类型

        // 变量 gender 的取值只能为 male 或者 female
        let gender: 'male' | 'female';

    3. any 类型
        (1) let a: any; // 变量 a 可以为任何类型

        (2) 声明变量但是不指定类型，会默认为 any 类型 (隐式 any)

            let a;

        (3) any 类型的值可以赋值给任何类型

            let gender: 'male' | 'female';
            let c: any = 10;
            gender = c;

    4. unknown 类型
        与 any 相似，唯一区别就是 unknow 类型值不能赋值给别的类型值

    5. void
        一般用于函数返回值类型的设置

        // 表示该函数返回值为空
        funtion fn(): void {}

    6. never
        // 设置函数没有返回值
        function err(): never {
            throw new Error('error');
        }

    7. object 类型

        let a: object; // 一般不这么用

        // 限制变量 b 一定是一个对象，并且只拥有 name 和 age 属性
        let b: {name: string, age: number};

        // gender 属性可选，有无都行
        let c: {name: string, age: number, gender?: string}

        // 至少得有 name 属性
        // [propName: string]: any 表示 字符串类型属性名: 取值类型为 any
        let d: {name: string, [propName: string]: any}

        // 限制变量 e 必须为函数，只有两个参数，返回值必须为 number
        let e = (a: number, b: number) => number;

    8. Array 类型
        
        let a: string[]; // 声明一个字符串数组
        let a: Array<string>;

    9. 元组类型
        
        let a: [string, string]; // a 为一个固定长度的数组，其中元素为两个 string 类型

    10. enum 枚举类型
        
        enum Gender {
            MALE = 0,
            FEMALE = 1
        }

        let p: {name: string, gender: Gender};
        p = {
            name: 'momo',
            gender: Gender.FEMALE
        }
    
    

补充：
    (1) 类型断言

        a = <string>b;
        a = b as string; // 让编译器把 b 变量当作 string 类型来处理

    (2) | 与 &

        // z 对象满足其中一个属性，或者同时满足，但是不能有其他属性
        let z: {name: string} | {age: number}

        // x 对象必须同时满足，并且没有其他属性
        let x: {name: string} & {age: number}

    (3) 类型别名
        let myType = string;
        let a: myType;

        let genderType = '男' | '女' | '保密';
        let gender: genderType;
        


*/

let z: { name: string } | { age: number }
let x: { name: string } & { age: number }



let gender: 'male' | 'female';

let c: any = 10;
gender = c;


