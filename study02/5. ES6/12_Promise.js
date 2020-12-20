/* 
一、基本概念
    1. Promise 是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果
    2. 什么是同步、异步？
        比如说一个程序中的 for 循环、alert() 方法会阻断程序继续往下进行：同步任务会阻塞程序的执行
        setTimeout、setInterval：异步任务不会阻塞程序执行
    3. Promise 有三个状态：pending（ 进行中）、 fulfilled（ 已成功） 和rejected（ 已失败）

二、基本使用
    const p = new Promise(function(resolve, reject) {
        if ( 异步操作成功 ) {
            resolve(value);
        } else {
            reject(error);
        }
    });


    // Promise 实例生成以后，可以用 then 方法分别指定 resolved状态和 rejected 状态的回调函数。

    promise.then(function (value) {
        // success
    }, function (error) {
        // failure
    });

三、使用 Promise 封装 AJAX

    const p = new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.apiopen.top/getJoke');

        xhr.send();


        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        state: xhr.status,
                        tip: '请求失败！'
                    });
                }
            }
        }
    });

    // 处理请求结果
    p.then(value => {
        console.log(value);
    }, reason => {
        console.log(reason.state, reason.tip);
    })

四、关于 then 方法
    1. 关于 promise 的 then 方法有一个返回值，这个返回结果也是一个 Promise 对象

    2. 返回的 Promise 对象的状态由 then 的两个回调函数的返回结果决定
        (1) 如果回调函数返回的结果是 非 promise 类型的值，那么状态为成功，并且 value 就是这个返回值
        (2) 如果回调函数返回的结果是一个 promise 对象，那么promise 对象返回结果的状态就是 then 返回 promise 对象的状态
        (3) 抛出错误，那么 then 方法返回的 promise 对象状态就是失败，并且失败值就是抛出的值

五、关于 catch 方法
    作用：相当于 then 的第二个回调方法，用于指定当 promise 为失败状态时的回调函数

    const p = new Promise((resolve, reject) => {
        if ( 异步操作成功 ) {
            resolve(value);
        } else {
            reject(error);
        }
    });

    // promise 为成功状态时回调
    p.then(value => {})

    // promise 为失败状态时回调
    p.catch(error => {})
*/
