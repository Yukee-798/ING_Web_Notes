// 抽象类只用于被继承，不能创建对象

abstract class Animal {
    abstract name: string;
    abstract type: string;


    // 抽象方法只用来被重写的，只能定义在抽象类中
    abstract say(): void;
}

