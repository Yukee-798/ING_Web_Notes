// 1. 引入 express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/', (request, response) => {
    // 设置响应
    response.send('HELLO EXPRESS');
});

// 4. 监听端口启动服务 
app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中....");
});

// 在当前文件夹目录下打开终端输入 node 4.express基本使用.js 就会开启服务
// 在服务器开启的那个终端窗口(node) 按下 ctr+c 即可中断服务
// 注意：端口号(8000)不能重复开启
// 在浏览器中输入 127.0.0.1:8000/ 就会显示响应体的返回
