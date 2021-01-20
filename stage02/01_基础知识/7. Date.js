/*
一、基本概念
    1. Date对象用来表示时间
        var date = new Date();

    2. 直接打印时间对象：输出的是new Date()这个对象创建的那个时刻
        console.log(new Date());

二、创建一个指定的时间对象
    1. 语法：
        var date = new Date("12/03/2016 11:30:25");


三、常用方法
    1. getDate()
        说明：获取当前日期对象是一个月的几号
        例子：
            var d1 = new Date("12/03/2020 11:30:25");
            var date = d1.getDate(); // 返回 3 表示3号


    2. getDay()
        说明：获取当前日期对象是星期几，返回值在 0～6 之间
        例子：
            var d2 = new Date();
            var day = d2.getDay(); // 返回 5 表示今天周五

        注意：返回的值在 0-6 内，其中返回0表示周天


    3. getMonth()
        说明：获取当前日期对象的月份，返回值在 0～11 之间
        例子：
            var d3 = new Date("12/14/2000");
            var month = d3.getMonth(); // 返回 11 表示12月份 

    
    4. getFullYear()
        说明：获取当前日期对象的年份
        例子：
            var d4 = new Date("12/14/2000");
            var year = d4.getFullYear(); // 返回 2000 表示 2000年


    5. 其他获取时间对象数据的方法
        还有获取小时、分钟、秒、毫秒的方法，具体可以查文档

    6. getTime()
        说明：获取当前日期对象的时间戳，即从格林威治标准时间的 1970年1月1日 0时 0分 0秒 到当前日期对象时间的毫秒数
        例子：
            var d5 = new Date("12/14/2000");
            var ms = d5.getTime(); // 976723200000


    7. Date.now()
        说明：获取当前日期对象的时间戳
        例子：
            var time = Date.now();


*/

           var d5 = new Date("12/14/2000");
           var ms = d5.getTime(); // 
console.log(ms);

