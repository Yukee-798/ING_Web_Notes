/*
一、面向对象三大特性
    多态、继承、封装

二、ES6中的类
    class Person {
        // 成员属性的声明
        name;
        age;

        // 构造函数
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

    2. 静态方法的定义：在成员方法前面加上 static 关键字

    3. 静态属性的定义：在

四、getter 与 setter

五、类表达式

六、name 属性中的 new.target 属性

七、在 ES5 中模拟类 
    

*/


class Person {
    #id;
    name;
    static menbers = 0;
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.#id = id;
        Person.menbers++;
    }
}
let p1 = new Person('kl', 18, 123);
// let p2 = new Person('momo', 18);
// let p3 = new Person('dwd', 18);
console.log(p1.#id);


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

