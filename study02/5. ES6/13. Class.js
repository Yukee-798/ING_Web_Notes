/*
一、面向对象三大特性
    多态、继承、封装

二、ES6中的类
    
    (1) 类的数据类型就是函数， 类本身就指向构造函数。
    (2) 类的所有方法都定义在类的 prototype 属性上面
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

五、类表达式
    const Person = class P {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

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

七、在 ES5 中模拟类 
    

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

