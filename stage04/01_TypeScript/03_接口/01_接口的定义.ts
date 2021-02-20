// 用于定义类的结构

interface IPerson {
    name: string;
    age: number;

    say(): void;
    
}

// 接口可以重复定义，作用是追加
interface IPerson {
    gender: string;
}

class User implements IPerson {
    name: string;
    age: number;
    gender: string;
    say(): void {

    }

    login(username: string, password: string): void {

    }
}


// 接口定义函数结构

interface IFunc {
    (username: string, password: string): void;
}

const myFunc: IFunc = function(username, password) {

}