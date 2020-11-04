/*
一、数组的创建
    var arr1 = new Array();
    var arr2 = new Array(1, 2, 3, 4);
    var arr3 = new Array(10); // 创建一个长度为10的数组
    var arr4 = [1, 2, 3, 4, 8, 9];

二、向数组中添加元素
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
    arr[3] = 4;

三、获取数组长度
    arr.length 等于 数组最大索引 + 1

四、修改数组长度
    arr.length = 2;
    那么多余的元素会被删除

五、向数组尾部添加元素
    arr[arr.length] = 8;


六、二维数组
    var arr = [[1, 2, 3], [4, 5, 6]];

七、常用方法
    1. push()
        说明：该方法可以向原数组末尾添加一个或多个元素并返回数组新的长度
        例子：
            var len = arr.push(4, 5, 6, 7);

    2. pop()
        说明：删除并返回数组最后一个元素
        例子：
            var n = arr.pop();


    3. unshift()
        说明：向数组的开头添加一个或多个元素并返回数组新的长度
        例子：
            arr.unshift(1, 2, 3, 4);
    
    4. shift()
        说明：删除并返回数组的头部元素

    5. slice()
        说明：传入 start, end 下标提取原数组在该区间内的元素返回一个新的数组，不会影响原数组
            第二个参数可以省略不写，那么默认为从 start 到 数组尾部
            参数可以传入负值，表示从后往前数，传入 -1 就表示数组末尾开始的前一位

        例子：
            var arr = [1, 2, 4, 5, 6, 0];
            var newArr1 = arr.slice(3, arr.length - 1);
            var newArr2 = arr.slice(3, -1); 下标 3 开始到数组倒数第二个元素 

    6. splice()
        说明：传入 start 和 n 从原数组中删除起始下标后对应数量的元素，并返回删除的元素数组，并且可以从删除的位置后面依次添加新的元素
            start: 起始下标
            n: 删除元素的个数
            第三个参数及以后...: 表示从start下标位置添加的新元素

        例子：
            var arr = [1, 2, 3, 4];
            var deletedElements = arr.splice(2, 3);


            var arr = [0, 2, 7, 9, 10];
            arr.splice(1, 3, "a", "b", "c");
            console.log(arr); // [ 0, 'a', 'b', 'c', 10 ]


    7. concat()
        说明：连接两个或者多个数组返回一个新数组，不会对原数组产生影响
        例子：
            var arr1 = [1, 3, 5, 7, 9];
            var arr2 = [2, 3, 4, 5, 6];
            var arr3 = ["hahahahah", "xixixixixii"];
            var newArr = arr1.concat(arr2, arr3); // [1, 3, 5, 7, 9, 2, 3, 4, 5, 6, "hahahahah", "xixixixixii"]

    8. join()
        说明：将数组转换为一个字符串，可以传入一个字符串指定为数组中元素之间的连接符，默认为,
        例子：
            var arr = [1, 2, 3, "bili"];
            var str1 = arr.join(); // 1,2,3,bili
            var str2 = arr.join("-"); // 1-2-3-bili

    9. reverse()
        说明：直接在原数组中颠倒元素的排列次序
        例子：
            var arr = [1, 2, 3];
            arr.reverse(); // [3, 2, 1]


    10. sort()
        说明：直接对原数组中的元素按照Unicode编码进行排序
        注意：如果是数字的话也会按照Unicode编码排序，那么可能会得到错误的结果
        例子：
            var arr1 = ["c", "d", "e", "a", "f"];
            arr1.sort(); // [ 'a', 'c', 'd', 'e', 'f' ]

            var arr2 = [1, 2, 33, 11, 0, 1];
            arr2.sort(); // 排序有错：[ 0, 1, 1, 11, 2, 33 ]

            我们可以在sort参数中指定一个回调函数来定制排序规则：
                (1) 回调函数需要两个形参：a, b
                (2) 浏览器会分别使用数组中的元素传入回调函数，使用哪些元素并不确定，但是 a 元素一定在 b元素前面
                (3) 回调函数返回值 > 0，则会交换 a 元素与 b 元素在原数组中的位置
                    回调函数返回值 < 0，则会交换保持 a 元素位置与 b 元素位置不变
                    回调函数返回值 = 0，则表示 a 元素与 b 元素值相等


                // 数值数组升序排列
                arr.sort(function(a, b) {
                    return a - b;
                });

                // 数值数组降序排列
                arr.sort(function(a, b) {
                    return b - a;
                });


            



八、forEach()
    1. 作用：可以用来遍历数组
    2. 需要传入一个函数对象，通常直接使用匿名函数
    3. 这种由我们创建，而不由我们调用的称为回调函数，通常由浏览器自己调用

    4. 数组中有几个元素，该方法就会执行几次，每次执行时，浏览器会传入三个实参到匿名函数中
        第一个参数：数组中的元素
        第二个参数：元素对应的下标
        第三个参数：数组对象本身

        arr.forEach(
            function(element, index, arr) {
                console.log(element);
            }
        );
    





*/

var cnt = 0;
var arr2 = [1, 2, 33, 11, 0, -1, 100];
arr2.sort(function(a, b) {
    cnt++;
});

console.log(cnt);






// // 去除数组中的重复数字
// var arr = [1, 1, 2, 3, 0, 9, 8, 8, 0];
// // 1 2 3 0 9 8 
// var flag = new Array(10);
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//         if (arr[j] == arr[i] && j != i) {
//             arr.splice(j, 1);
//         }
//     }

// }


// console.log(arr);










// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.toString = function() {
//     return "[ name = "+ this.name + " age = " + this.age  + " ]";
// };

// var p1 = new Person("momo", 18);
// var p2 = new Person("dudu", 17);
// var p3 = new Person("kl", 19);
// var p4 = new Person("bili", 9);
// var p5 = new Person("didi", 2);

// var arr = [];
// arr.push(p1 ,p2 ,p3 ,p4 ,p5);
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i].age >= 18) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);