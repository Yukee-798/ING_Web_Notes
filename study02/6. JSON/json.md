## 使用场景
---
&emsp;在前后端分离的开发环境下，JS中的对象只有JS语言直接能够识别，如果我们想要向后端传输数据，那么必须使用前后端语言均能够识别的数据格式，其中 JSON 就是如今主流的格式。JSON 在开发中主要用来数据的交互。

## 什么是 JSON ?
---
&emsp;JSON(JavaScript Object Notation --- JavaScript 对象表示法) 就是一个特殊格式的字符串，这个字符串可以被任意的语言所识别，并且可以转换为任意语言中的对象。JSON 和 JavaScript 中的对象格式一样，只不过 JSON 字符串中的属性名必须加上双引号。

## JSON 中允许的值
---
1. 字符串
2. 数值
3. 布尔值
4. null
5. 普通对象
6. 数组

```json
'{"name": "momo", "age": 18, "gender": 0}'
'[1, 2, 3, 4, 5]'
'{"arr": [1, 2, 3], "order": 1}'
'[{}, {}, {}]'
```

## JSON 与 JavaScript 中的对象相互转换
---
使用`JSON.parse()`将 JSON 字符串转为 JavaScript 的对象。
```javascript
var json1 = '{"name": "momo", "age": 18, "gender": 0}';
var obj = JSON.parse(json1); // 将上面的 json 字符串转换为了 object 类型
console.log(obj.name, obj.age, obj.gender); 

var json2 = '[1, 2, 3, 4, 5]';
var arr = JSON.parse(json2); // 将上面的 json 字符串转换为了 Array 类型
```
使用`JSON.stringify()`将 JavaScript 的对象转为 JSON 字符串
```javascript
var obj = {name: 'momo', age: 10, gender: 0};
var json = JSON.stringify(obj); // 将上面的对象转为了 JSON 字符串

```


