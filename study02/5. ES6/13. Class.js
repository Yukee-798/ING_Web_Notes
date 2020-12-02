/*
一、面向对象三大特性
    多态、继承、封装

二、ES6中的类
    
    (1) 类的数据类型就是函数， 类本身就指向构造函数。
    (2) 类的所有方法都定义在类的 prototype 属性上面，除非用显示定义属性在实例上，如：this.name = 'momo'
    (3) 类相当于实例对象的原型， 所有在类中定义的方法， 都会被实例继承
    (4) prototype 对象的 constructor 属性， 直接指向“ 类” 的本身
    (5) 枚举类中的方法属性只能使用 Object.getOwnPropertyNames(类名)，Object.keys(类名)不可用
    (6) 类不存在变量提升，意思就是在创建一个实例对象的时候，该对象的类必须在其之前定义好


    class Person {
        // 成员属性的声明
        name = '';
        age = 1;

        // 构造函数：会默认返回当前类的对象实例，使用 new 类名() 调用
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        // 成员方法
        toString() {
            return `name: ${this.name}, age: ${this.age}, gender: ${this.gender}`;
        }
    }

    播放器类的创建见下面代码




三、静态属性与静态方法
    1. 特点：
        不会被类的实例所拥有，只能通过类名来调用

    2. 静态方法：
        (1) 定义方式：在成员方法前面加上 static 关键字
        (2) 静态方法的this指向该类本身
        (3) 静态方法可以与成员方法同名
        (4) 父类的静态方法可以被子类继承

    3. 静态属性的定义：
        (1) 在类外使用类名.属性名给一个类添加静态属性
        (2) 在类中使用 static 属性名 = xx; 给一个类添加静态属性


四、getter 与 setter
    1. 作用：给属性提供一个钩子，在获取属性值和设置属性值的时候可以做一些额外的事情
       形如：
        get name() {} // 此时只要是访问 this.name 就会执行一次 get name() 方法
            这里调用 this.name 就相当于 Java中 this.getName()

        set age(val) {} // 此时只要是修改 this.age 的值就会执行一次 set age() 方法
            这里调用 this.name = 'kl' 就相当于 Java中 this.setName('kl')

        注意：set 和 get 后面是这两个方法的名字，并不是我们要访问的属性名，与 Java 不同的地方就是
            调用该方法的形式改变了！！ 

    2. ES5中的 getter / setter
        (1) 在对象字面量中直接设置 get 和 set 方法
            var obj = {
                _name: 'momo',
                get name() {
                    return this._name;
                },

                set name(val) {
                    this._name = val;
                }
            };
        
        (2) 使用 Object.defineProperty(对象, 属性名字符串, {关于属性的描述} (传入的是一个对象))
            
            使用例子：

                // 给对象设置一个 age 属性 取值为 Number 类型的 18 ，并且可枚举
                Object.defineProperty(obj, 'age', {
                    value: 18,
                    enumerable: true // 不设置则不可枚举
                }); 

                // 为对象的 _name属性 设置 get 和 set 方法
                // 
                Object.defineProperty(obj, 'name', {
                    get: function() {
                        return this._name;
                    }
                    set: function(val) {
                        this._name = val;
                    }
                });

    3. ES6 中 set 和 get 方法的使用
            class Person {

                _name;
                _age;

                constructor(name, age) {
                    this._name = name;
                    this._age = age;
                }

                get name() {
                    return this._name;
                }

                set name(val) {
                    this._name = val;
                }

                get age() {
                    return this._age;
                }

                set age(val) {
                    this._age = val;
                }
            }

    4. 关于 get 和 set 方法的使用场景
            对于贪吃蛇的 _status 状态我们给其设置 get status 和 set status 方法  
            set status(val) {
                switch(val) {
                    case UserAction.PAUSE: 
                        // 这里就写让蛇暂停的方法
                    break;

                    case UserAction.RUNNING:
                        // 这里就写让蛇运动的方法
                    break;

                    case UserAction.RESTART:
                        // 这里刷新页面

                    break;
                }
            }

五、类表达式
    const Person = class P {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    // 类也可以不用名称
    const Person = class {}

    注意：
        (1) 类名 P 只能在class的内部可用
        (2) 在class外部只能用 Person这个引用

    这里的 Person 变量存储了 P构造函数对象的地址

    使用类表达式可以写出立即执行的class
    let p1 = new class P {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }('momo', 18);

六、name 属性中的 new.target 属性
    1. name 属性：用于获取类名
        const Human = class {}
        console.log(Human.name); // Human

        const Human = class P {}
        console.log(Human.name); // P




七、在 ES5 中模拟类(了解)

八、ES6中的继承
    1. 作用：让子类获得父类的方法、属性，可以扩充新的方法和属性
    2. 语法：
        class Sup {}
        class Sub extends Sup {}
    3. super 关键字

        作为函数调用：
            (1) 在子类的构造器中必须先通过 super() 调用父类构造去塑造出自己的 this 对象，得到与父类同样的实例属性和方法
            (2) 调用 super() 时，会创建一个 当前类的 this 对象并且包含了其父类的所有方法和属性！注意父类的方法属性都是绑定在this上的
        
        作为对象使用：
            (1) super 在子类的非静态方法中表示父类的 prototype
                    - 此时通过 super 调用父类的方法的时候，父类方法中的 this 指向的是当前子类的实例
                    - super.x = 3 == this.x = 3

            (2) super 在子类的静态方法中表示其父类
                    - 此时调用通过 super 调用父类方法，方法中的 this 指向子类(不是子类实例)
            
九、类中的 proto 与 prototype
    1. 子类本身

        （1）子类的 proto 属性，表示构造函数的继承，总是指向父类。
        （2）子类 prototype 属性的 proto 属性，表示方法的继承，总是指向父类的 prototype 属性。

    2. 子类实例的 proto 
        子类实例的 proto 属性的 proto 属性，指向父类实例的 proto 属性。也就是说，子类的原型的原型，是父类的原型。
    

*/






// 播放器类
class AudioPlayer {
    // 传入一个之后要将播放器插入的父容器
    constructor(container) {
        this.container = document.querySelector(container);

        // 歌单
        this.songsList = [];

        // 播放器的HTML结构
        this.dom = null;

        // H5内置播放器对象
        this.audio = new Audio();

        // 建立对象的时候直接调用getSongs()方法从服务端获取歌
        this.getSongs();

        // 创建播放器HTML结构
        this.createElement();

        // 为播放器的HTML结构绑定事件
        this.bindEvent();

        // 将播放器渲染到指定的容器中
        this.render();
    }

    getSongs() {
        this.songsList = [{
            cover: '', // 封面
            name: '', // 歌曲名
            url: '', // 资源地址
            singer: {} // 歌手信息
        }];
    }
    // 生成播放器对象的HTML结构
    createElement() {
        let div = document.createElement('div');
        div.innerHTML =
            `<div id="play">播放按钮</div>
         <div>进度条</div>`;
        this.dom = div;
    }

    bindEvent() {
        this.container.addEventListener('click', e => {
            switch (e.target.id) {
                case 'play':
                    console.log('开始播放！');
                    break;
            }
        });
    }

    render() {
        this.container.appendChild(this.dom);
    }
}