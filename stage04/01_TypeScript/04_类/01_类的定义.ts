class Person {

    // 实例属性
    name: string
    age: number

    // 只读
    static readonly nationality: string = 'China'

    // 类属性/静态属性
    static count: number = 0;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        Person.count++;
    }
}

const p1: Person = new Person('momo', 18);
const p2: Person = new Person('momo', 18);
const p3: Person = new Person('momo', 18);

console.log(Person.count);

/* 
    实例属性：通过实例来访问
    类属性：通过类名来访问
    readonly：加在属性名前面，表示该属性为只读，无法修改

*/