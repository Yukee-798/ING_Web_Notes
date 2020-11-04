# CSS网页布局基础
## 1 行布局
---
### 1.1 基础的行布局

```css
/* css: */
    * {
        padding: 0;
        margin: 0;
    }

    .container {
        width: 800px;
        height: 1000px;
        background: gray;
        margin: 0 auto;
        text-align: center;
    }
```
```html
<!-- html: -->
    <div class="container">页面内容</div>
```
> 实现的效果：页面有块灰色的背景居中，但是改变窗口大小并不能让背景自适应居中。

<br/>

### 1.2 行布局自适应

> 将上面 container 的 width 属性改为百分比，如: 80% ，那么无论如何改变窗口大小，container 始终占据页面 80% 的大小并且居中显示。

<br/>

### 1.3 行布局自适应限制最大宽

> 给上面的 container 增加一个 max-width: 1000px，并把 width 设置为 90%，最开始时container宽度为 1000px ，当页面宽度减小到 1000px 以后，container 宽度自适应为页面 90% 。

<br/>

### 1.4 行布局垂直水平居中
```html
<!-- html: -->
    <div class="container">页面内容</div>
```

方法1：

```css
/* css: */
    * {
        padding: 0;
        margin: 0;
    }

    .container {
        position: absolute;
        width: 800px;
        height: 200px;
        max-width: 1000px;
        background: gray;            
        text-align: center;
        top: 50%;
        left: 50%;
        margin-top: -100px;
        margin-left: -400px;
    }
```
> 绝对定位 top 和 left 偏移量为 50%，上边距为 height 一半， 左边距为 width 一半且为负值，该方法无论如何改变页面大小，==均可以保持 container 处于水平垂直居中==。


<br/>

方法2：

```css
/* css: */
    * {
        padding: 0;
        margin: 0;
    }

    .container {
        position: absolute;
        width: 800px;
        height: 200px;
        max-width: 1000px;
        background: gray;            
        text-align: center;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto auto;
    }
```
> 绝对定位 top right bottom left 偏移量均为 0，设置外边距 margin: auto auto，该方法如果改变了页面大小，无法保持 container 始终处于水平垂直居中。

<br/>

### 1.5 行布局固定宽
### 1.6 行布局某部位自适应
### 1.7 行布局导航随屏幕滚动 


## 2 多列布局
## 3 圣杯布局
## 4 双飞翼布局