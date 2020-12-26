// 1. 引入 express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

// 客户端发送请求报文的时候，在请求行中第二段内容的url路径为 '/server'
// 则会执行该回调函数，并由 response 做出响应
// 补充：该响应只会接受GET请求
app.get('/server', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", '*');
    // 设置响应响应体
    response.send(`<button>GET请求，出现按钮!</button>`);
});

// 接受POST请求
// app.post('/server', (request, response) => {
//     // 设置响应头，设置允许跨域
//     response.setHeader("Access-Control-Allow-Origin", "*");
//     response.setHeader("Access-Control-Allow-Headers", "*" );
//     // 设置响应响应体
//     response.send(`<button>POST请求，出现按钮!</button>`);
// });

// 可以接受任何类型请求
app.all('/server', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    // 设置响应响应体
    response.send(`<button>POST请求，出现按钮!</button>`);
});


app.all('/server-json', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    // 设置响应响应体，将结果返回给客户端
    // 传递一个对象过去
    const person = {
        name: 'momo',
        gender: 0
    };
    response.send(JSON.stringify(person));
});

// 模拟服务端响应延时
app.get('/server-delay', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");

    // 延时3s再响应请求
    setTimeout(()=>{
        const a = 'hello';
        response.send(a);
    },3000);
});

// JQuery 服务
app.get('/server-JQuery', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");

    // 延时3s再响应请求
    // setTimeout(() => {
        const a = {
            name: 'momo',
            age: 18
        };
        response.send(JSON.stringify(a));
    // }, 3000);
});

app.all('/server-JQuery', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");

    // 延时3s再响应请求
    // setTimeout(() => {
    const a = { name: 'momo', age: 18};
    response.send(JSON.stringify(a));
    // }, 3000);
});

// axios 服务
app.all('/server-axios', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");

    // 延时3s再响应请求
    // setTimeout(() => {
    const a = {
        name: 'momo',
        age: 18
    };
    response.send(JSON.stringify(a));
    // }, 3000);
});

// 4. 监听端口启动服务 
app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中....");
});




// 终端中当前文件夹下 nodemon server.js 开启服务