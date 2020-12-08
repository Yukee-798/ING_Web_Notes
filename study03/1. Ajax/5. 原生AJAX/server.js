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

app.post('/server', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", '*');
    // 设置响应响应体
    response.send(`<button>POST请求，出现按钮!</button>`);
});

// 4. 监听端口启动服务 
app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中....");
});
