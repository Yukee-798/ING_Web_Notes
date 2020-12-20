## JavaScript 中的 this

### 一、什么是 this ?
---
在 JavaScript 中 `this` 关键字一般指的是 **函数调用时** 所在的 **环境上下文** ，存储了 **环境上下文对象的内存地址** ，根据**函数的调用的方式**不同 ，其 `this` 会指向不同的对象 ，我们可以通过 `this` 关键字在函数内部中操作其指向的对象 ，看看下面的例子。

```javascript
// 定义 person 对象
var person = {
	name: 'momo',
	age: 18,
	gender: '男',

	say: function() {
		console.log('我的名字是 ' + this.name + ' ，今年' + this.age + '岁');
	}
};

// 全局作用域中定义一个 say 函数
function say()  {
	console.log(this);
}

person.say(); // 打印：我的名字是 momo ，今年18岁
say(); // 等价于 window.say() 打印：Window
```

上面的例子中 ，通过 person 对象调用 say 函数的时候 ，函数内部中的 `this` 指的就是调用它的 person 对象 ，因此可以通过 `this` 来访问 person 对象的 name 属性和 age 属性 。直接调用全局作用域中的 say 函数的时候等价于 `window.say()` 因此 ，全局作用域中的 say 函数中的 `this` 指向的就是 `window` 对象 。

```javascript
function fn() {
	console.log(this.age);
}

var obj = {
	age: 18,
	fn: fn
};

fn(); // undefined
obj.fn(); // 18
```

上面的例子中 ，直接调用 fn 函数相当于 window.fn() ，由于 window 对象中没有 age 属性所以输出 undefined ，而通过 obj 对象调用 fn 函数 ，则会输出它的 age 属性 。

<br/>


### 二、构造函数中的 this
---
```javascript
// 构造函数的定义
function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	
	this.say = function() {
		console.log('我的名字是 ' + this.name + ' ，今年' + this.age + '岁');
	}
}

// 通过构造函数创建 person 对象
var person = new Person('momo', 18, '男');
person.say(); // 打印：我的名字是 momo ，今年18岁
```

构造函数中的 `this` 的用法与上面普通函数的用法没多少区别 ，这里主要讲一下构造函数是如何创建一个对象的 。在使用 `new` 关键字调用构造函数后 ，会在堆内存空间中创建一个新的对象 ，然后构造函数中的 `this` 就储存了堆空间这个新的对象内存地址 ，最后会默认返回这个 `this` 。上面的例子中将构造函数的返回值 ，也就是 `this` 存储的内存地址赋值给了 person 变量 。

<br/>

### 三、修改函数中的 this 指向
---
在 JavaScript 中还提供了修改函数中 `this` 指向的方法 ，可以通过 `call()` 、 `apply()` 和 `bind()` 函数来修改某个函数调用时 `this` 指向的对象 。

```javascript
/* =============== call 与 apply ============ */
function say(a, b) {
    console.log('我是' + this.value + ' ' + a + '，' + b);
}

var red = {
    value: '红色',
    redSay: say
};

var green = {
    value: '绿色',
    greenSay: say
};

red.redSay(1, 2); // 我是红色 1，2
green.greenSay(3, 4); // 我是绿色 3，4

// 将 redSay 函数中的 this 指向改为 green 对象
red.redSay.call(green, 1, 2); // 我是绿色 1，2
red.redSay.apply(green, [3, 4]); // 我是绿色 3，4
```

从上面的例子可以看出来 `call()` 和 `apply()` 是由函数对象调用的 ，传入的第一个参数就是指定该函数对象中 `this` 的指向 ，后面传入的参数就是通过 `call / apply` 调用指定函数时传入的参数 ，`call()` 与 `apply()` 的主要差异就是 `call()` 传入第一个参数以后 ，后面传入的所有参数都是调用指定函数时传入的参数 ，`apply()` 则将这些参数封装到了一个数组中 。

关于 `call()` 和 `apply()` 的用法基本相同 ，下面来介绍一下 `bind()` ，先看一个例子 。
```javascript
window.name = 'window';

var person = {
    name: 'momo',
    say: function(a, b) {
        console.log('我的名字是' + this.name + ' ' + a + '，' + b);
    }
}
var mSay = person.say;

// 丢失了 person 对象的 this
mSay(1, 2); // 我的名字是window 1, 2

// 重新给 mSay 的 this 绑定为 person 对象 
mSay = mSay.bind(person);

// 此时 mSay 中的 this 就是 person 对象了
mSay(1, 2); // 我的名字是momo 1, 2

// 下面的写法与上面等价
mSay.bind(person, 1, 2)();
mSay.bind(person)(1, 2);
```
从上面的例子可以看出使用 `bind()` 来修改函数的 `this` 的时候并不会执行该函数 ，而是 **返回一个新的函数对象** ，这个新的函数对象中的 `this` 被修改为了指定的对象 ，其余的函数体内部代码与修改前的一样 。

<br/>

### 四、其他需要注意的地方
---
1. 直接在全局作用域中使用 `this` ，其表示的是 `window` 对象 。
2. 在 ES6 中箭头函数内部的 `this` 指向的是箭头函数定义时的上下文对象 ，不由调用它的对象来决定 。

	```javascript
	// 直接在全局作用域中用 this 赋值
	var a = this;
	console.log(a); // Window 对象
	
	
	window.name = 'window';
	var obj = {
		name: 'obj',
		fn1: () => void console.log(this.name),
		fn2: function () {
			let f = () => void console.log(this.name);
			f();
		},
		fn3: function() {
			let f = function() {
				console.log(this.name);
			};
			f(); // 等价于 window.f();
		}
	}
	obj.fn1(); // window
	obj.fn2(); // obj
	obj.fn3(); // window
	```

<br/>

### 五、练习
```javascript
var obj = {
  foo: function () { console.log(this.bar) },
  bar: 1
};

var foo = obj.foo;
var bar = 2;

obj.foo(); // 1
foo(); // 2
```
```javascript
window.name = 'window';
var obj = {
	name: 'obj',
	fn1: function() {
		console.log(this.name);
	},
	fn2: function() {
		function fn() {
			console.log(this.name);
		}
		fn();
	},
	fn3: () => {
		console.log(this.name);
	}
}

obj.fn1(); // obj
obj.fn2(); // window
obj.fn3(); // window
obj.fn3.call(this); // window

var fn4 = obj.fn1;
fn4(); // window
```

<br/>
<br/>

## JavaScript 中的闭包机制
### 一、什么是闭包？
---
先看下面一个场景 ，fn1 函数中嵌套了一个 fn2函数 ，为了方便后面的描述 ，这里把 fn1 函数称为外部函数 ，fn2 函数称为内部函数 。
```javascript
function fn1() {
    var a = 3;

    var fn2 = function() {
        console.log(a);
    }
}
```
通过 Chrome 调试一下 ，查看 fn2 函数对象中的内部有哪些数据 。
![](https://tva1.sinaimg.cn/large/0081Kckwly1gll6tyqpzaj30xi0es779.jpg)
可以看见 fn2 内部函数中存在一个 Closure 对象 ，其保存了外部函数中定义的变量 a 的数据 ，实际上这个 Closure 对象就是 fn2 内部函数的闭包对象 。这里直接给出结论 ，**闭包是一个对象 ，其存在于内部函数对象中 ，保存了内部函数所使用的外部函数中定义的数据** 。
<br/>

### 二、闭包的产生条件
---
1. 函数嵌套 。
2. 内部函数使用了在外部函数中定义的数据 。
3. 指执行了外部函数 。

详细说明一下闭包对象产生的整个流程 。首先在一个 **函数嵌套** 的场景下 ，并且 **内部函数使用了外部函数定义的数据** ，然后再 **执行外部函数** ，当代码执行到 **内部函数定义完毕** 时 ，此时内部函数中就已经生成了一个闭包对象 ，其 **存储了内部函数使用的外部函数中定义的数据** 。


<br/>

### 三、闭包的生命周期
---
1. 闭包的产生：在 **函数嵌套** 场景下 ， **内部函数使用了在外部函数中定义的数据** ，在执行外部函数时 ，**内部函数定义完毕** ，此时内部函数中就产生了闭包对象 。
2. 闭包的死亡：在 **堆区的内部函数对象没有被栈区的变量引用** 时 ，此时堆区的内部函数对象就会被 GC 当作垃圾数据回收 ，同时存在于内部函数对象中的闭包对象就会死亡 。

```javascript
function fn1() {
      var a = 3;
      
	  // 当 fn2 函数对象定义完毕时 ，其内部产生了闭包对象
      function fn2() {
          console.log(a);
      }
      return fn2;
  }

// 调用 fn1 函数 ，将 fn2 函数对象的内存地址赋值给 fn3 对象 
var fn3 = fn1();
// 中断 fn3 于 fn2 对象之间的引用 ，fn2 被 GC 回收 ，闭包对象死亡
fn3 = null;
```
<br/>

### 四、闭包的应用
---
```javascript
function fn1() {
    let a = 3;

    function fn2() {
        a++;
        console.log(a);
    }
    return fn2;
}

var fn = fn1();
fn(); // 4
fn(); // 5
```
在 fn1 函数执行完毕后 ，其内部的局部变量 a 已经被释放 ，但是由于闭包机制的存在 ，fn2 函数对象保存了这个局部变量的数据 ，延长了局部数据的存活时间 。
```javascript
function fn1(time) {
    let i = 1;

    setInterval(function() {
        i++;
        console.log(i);
    }, time);
}

fn1(2000);
```
定时器的回调函数中的闭包对象存储了 fn1 外部函数中的局部变量 i 的数据 ，因此在 fn1 函数调用完毕并且释放完内存空间后 ，仍能够对局部变量 i 的数据进行累加 。

<br/>

### 五、练习
---
```javascript
var name = 'The Window';
var object = {
	name: 'My Object',
	// 方法中产生了闭包对象吗？ 无
	getNameFunc: function() {
		return function() {
			return this.name;
		};
	}
};
console.log(object.getNameFunc()()); // The Window
```

先记住一点 ，看是哪个对象调用的哪个函数 ，那么这个函数中的 this 指向的就是这个对象 。本例中通过 `obj.getNameFunc()` ，返回了一个函数 ，然后再到全局作用域中调用这个函数 ，实际上就是 `Window` 对象调用的这个函数 ，所以 `obj.getNameFunc()` 返回的这个函数中的 `this` 指向的就是 `Window` 对象 。

```javascript
var name2 = 'The Window';
var object2 = {
	name2: 'My Object',
	// 方法中产生了闭包对象吗？ 
	// 内部函数使用了 that 变量 ，产生了闭包对象存储了 that 的值
	// 此时如果不及时用一个引用来指向返回的这个方法 ，那么就会被 GC 回收
	getNameFunc: function() {
		var that = this;
		return function() {
			return that.name2;
		};
	}
};
console.log(object2.getNameFunc()()); // My Object
```

本例中先分析 ，带有 `this` 的是哪个函数 ，可以知道 `getNameFunc` 这个函数中带有 `this` ，并且这个函数是由 `object2` 来调用的 ，所以这个函数中的 `this` 指向的就是 object2 这个对象 ，然后将 `this` 存储的内存地址赋值给了 `that` 变量 ，那么 `that` 与 `this` 等价 ，`object2.getNameFunc()` 返回的函数中的 `that` 就是 `getNameFunc` 中的 this ，指向的是 `object2` 这个对象 。

```javascript
function fun(n, o) {
	console.log(o);
	return {
		fun: function(m) {
			// 这个 fun(m, n) 是调用的哪个？ 外层的 fun
			// 存在闭包对象吗 ？
			// 内部函数使用了外部函数的 n 变量，所以存在闭包对象
			return fun(m ,n);
		}
	};
}
var a = fun(0); a.fun(1); a.fun(2); a.fun(3);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1); c.fun(2); c.fun(3);
```

<br/>

### 六、闭包的优缺点
---
**优点**
1. 局部变量数据被保存起来没有被销毁 ，随时可以被调用 ，**延长了局部变量数据的存活时间** 。
2. 只有函数内部的子函数才能读取局部变量 ，可以**避免全局污染** 。

**缺点**
1. 函数执行完后 ，函数内部的局部变量数据存储在闭包对象中 ，占用内存时间长，如果不及时释放会影响性能 。
2. 容易导致内存泄漏 。
<br/>

### 七、关于内存溢出和内存泄漏
---
1. 内存溢出：内存溢出是一种程序运行错误 ，当程序的运行需要的内存超过了剩余的内存时就会抛出内存溢出的错误 。
2. 内存泄漏：占用的内存没有被及时释放 。

注意：内存泄漏累积多了就容易出现内存溢出的错误 ，比如：意外的全局变量 ，没有关闭的循环定时器 ，闭包 。

防止内存溢出的方法：
1. 完成需求后记得 clear 定时器 。
2. 减少全局变量的使用 。
3. 尽量使用原型对象去定义函数 。
4. 闭包执行完成后，将引用的局部变量赋值为 null 。

