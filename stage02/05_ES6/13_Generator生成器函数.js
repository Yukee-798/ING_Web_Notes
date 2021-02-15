/*
一、基本概念
    1. 生成器就是一个特殊的函数
    2. 作用：异步编程的解决方案


二、生成器函数的定义与执行

    function* gen() {
        console.log('1');
        yield '执行完第一板块';
        console.log('2');
        console.log('3');
        yield '执行完第二板块';
        console.log('4');
        console.log('5');
        yield '执行完第三板块';
        console.log('6');
    }

    // 调用完生成器函数后会产生一个迭代器对象
    let iter = gen();

    // 迭代器每次调用 next 函数就会执行生成器函数中一个 yield 板块的代码
    // next 返回的 value 就是 yield 后面的描述
    iter.next();
    iter.next();


    助记：
        第一个 next 从 getnerator 函数体第一行开始执行到 yield 前一行停止
        第二个 next 从 停住的

三、生成器函数的参数传递 
    1. 生成器函数上的参数设置
        function* gen(arg) {}

        很正常的使用，不赘述了

    2. 生成器函数产生的迭代器中的 next 方法中也可以传入参数
        第二次调用 next 方法传入的参数，就是第一个 yeild 的返回值

        function* gen() {
            console.log(111);
            let one = yield '执行完第一板块';

            console.log(one);
            console.log(222);
            let two = yield '执行完第二板块';
        }

        let iter = gen();
        iter.next(); 

        iter.next('我是第一个 yeild 的返回值');

四、生成器结合异步编程案例
        需求：间隔 1s 输出 111，再间隔 2s 输出 222，再间隔 3s 输出 333

        使用定时器：
            setTimeout(() => {
                console.log(111);
                setTimeout(() => {
                    console.log(222);
                    setTimeout(() => {
                        console.log(333);
                    }, 3000);
                }, 2000);
            }, 1000)
        

        使用生成器函数：
            function one() {
                setTimeout(() => {
                    console.log(111);
                    iter.next();
                }, 1000)
            }

            function two() {
                setTimeout(() => {
                    console.log(222);
                    iter.next();
                }, 2000)
            }

            function three() {
                setTimeout(() => {
                    console.log(333);
                    iter.next();
                }, 3000)
            }

            function * gen() {
                yield one();
                yield two();
                yield three();
            }

            let iter = gen();
            iter.next();

        需求：先获取用户数据 再获取订单数据 最后获取商品数据

            function getUsers() {
                setTimeout(() => {
                    let data = '用户数据';
                    iter.next(data);
                }, 1000)
            }

            function getOrders() {
                setTimeout(() => {
                    let data = '订单数据';
                    iter.next(data);
                }, 1000)
            }

            function getGoods() {
                setTimeout(() => {
                    let data = '商品数据';
                    iter.next(data);
                }, 1000)
            }

            function * gen() {
               let users = yield getUsers();
               let orders = yield getOrders();
               let goods = yield getGoods();
            }

            let iter = gen();
            iter.next();
*/

function getUsers() {
    setTimeout(() => {
        let data = '用户数据';
        iter.next(data);
    }, 1000)
}

function getOrders() {
    setTimeout(() => {
        let data = '订单数据';
        iter.next(data);
    }, 1000)
}

function getGoods() {
    setTimeout(() => {
        let data = '商品数据';
        iter.next(data);
    }, 1000)
}

function* gen() {
    let users = yield getUsers();
    console.log(users);
    
    let orders = yield getOrders();
    console.log(orders);

    let goods = yield getGoods();
    console.log(goods);

}

let iter = gen();
iter.next();