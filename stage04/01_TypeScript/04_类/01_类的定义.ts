(function() {
    class Person {

        // 实例属性（私有，只能在本类中被访问）
        private _name: string
        private _age: number

        // 只读
        static readonly nationality: string = 'China'

        // 类属性/静态属性
        static count: number = 0;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
            Person.count++;
        }

        get name() {
            return this._name;
        }

        set name(name: string) {
            if (name.length > 5) {
                throw '名字长度不能超过5'
            }
            this._name = name;
            
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
    修饰符：
        public: 在任何位置可以访问
        protected: 只有在本类和子类中可以访问
        private: 只有在本类可以访问
    特殊语法：
        class Person {
            // 可以不用再写 this._name = name ...
            constructor(private _name: string, private _age: number) {}
            get name() {
                return this._name;
            }
        }

*/
})()

