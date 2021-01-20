## 移动Web开发基础概念

### 1 像素
---
#### 1.1 分辨率
> 以物理像素作为基准，不同设备的物理像素单位大小不同
#### 1.2 物理像素 (设备像素)
> 物理像素只与设备有关
#### 1.3 CSS像素 (逻辑像素)
> 实际开发中使用的像素
#### 1.4 设备像素比 (dpr)
> dpr = 物理像素 / CSS像素
> dpr = 2，表示1个 CSS 像素用 2x2 个设备像素来绘制
#### 1.5 标清屏和高清屏
> 标清屏下(Standard)，一个 CSS 像素由一个物理像素描述，dpr = 1
> 高清屏下(Retina)，一个 CSS 像素由 2x2 的缩小物理像素描述，dpr = 2
#### 1.6 缩放
> 缩放改变的是CSS像素的大小
#### 1.7 PPI/DPI
> 每英寸的物理像素点 (对角线英寸)
> PPI: pixels per inch
> DPI: dots per inch

<br/>

### 2 视口 (viewport)
---
> 在html的head标签内：
> ```html
> <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no,maximue-sacle=1,minimum-scale=1">
> ```
> 含义：将页面的视口宽度调整为设备的宽度
> 还可以将content改为"initial-scale=1"，意思就是缩放比为1，即不缩放，只有当页面视口与设备宽度一致时才不会缩放，所以与上面的等价，通常情况下为了兼容不同的浏览器，需要两种都写上去

<br/>

### 3 CSS属性之box-sizing
---
#### 3.1 回顾一下盒子模型
> 一个盒子就是在页面中所占据的空间大小，从外层算起，margin(不可见)，下层是border，再下层是padding，最内层就是content。
#### 3.2 box-sizing: content-box
> 该取值为默认值，盒子模式下，margin看不见，border包含了padding、content，此时增大padding，会在原来content的基础上向外扩展padding，增大了盒子的占位，该状态下宽高属性对应的是content的宽高。
#### 3.3 box-sizing: border-box
> 盒子模式下，margin看不见，border包含了padding、content，此时增大padding，会在原来border的基础向内挤压content，盒子的占位不会改变，该状态下宽高对应的是border以内的宽高。


<br/>

### 4 图标字体
---
详见教程视频

<br/>

## 5 Flex布局
---
### 5.1 什么是Flex布局
> flexible box，弹性盒子布局
### 5.2 基本概念
1. Flex容器：采用Flex布局的元素就是Flex容器
    ```css
    .box { display: flex | inline-flex; }
    ```
2. Flex项目：Flex容器的所有**子元素**自动成为Flex项目(孙子元素不会成为Flex项目)
3. Flex布局概念图，详见备忘录
4. 容器内的项目无论是块级还是行内元素，均会按照主轴进行排列


### 5.3 容器的属性

```css
/* display设置容器采用何种flex布局 */
display: flex | inline-flex;
/* 
flex 说明：
    1. 让容器采用块级flex布局，整个容器具有块级元素特性，其width沾满整行
    2. 容器内的项目无论是块级还是行内元素均按照容器的主轴进行排列 

inline-flex 说明：
    1. 让容器采用行内flex布局，整个容器具有行内元素特性，其width根据其内容而定，但同时也可以设置宽高，类比inline-block
    2. 容器内的项目无论是块级还是行内元素均按照容器的主轴进行排列 
*/


/* flex-direction设置容器主轴方向(项目的排列方向) */
flex-direction: row | row-reverse |column | colum-reverse;
/* 
row 说明：
    默认值，主轴为水平方向，起点在左端

row-reverse 说明：
    主轴为水平方向，起点在右端

column 说明：
    主轴为垂直方向，起点在上端

column-reverse 说明：
    主轴为垂直方向，起点在下端
*/


/* 默认情况下项目都排在一条轴线上，如果一条轴线排列不下项目，flex-warp用于定义如何如何换行 */
flex-warp: nowarp | warp | warp-reverse;
/* 
nowarp 说明：
    默认值，不换行，如果一条轴线排列不下项目，那么会挤压项目的width

warp 说明：
    如果一条轴线排列不下，会自动换行，后面排列不下的项目会换行到第一行的下方

warp-reverse 说明：
    如果一条轴线排列不下，会自动换行，后面排列不下的项目会换行到第一行的上方
*/


/* flex-direction 和 flex-warp 的简写形式，默认值为row nowarp */
flex-flow: <flex-direction> | <flex-warp>

/* 定义项目在主轴上的对齐方式 */
justify-content: flex-start | flex-end | center | space-between | space-around;
/* 
flex-start: 
    默认值，项目靠主轴开始位置排列(左对齐，前提是主轴方向为row)

flex-end:
    项目靠主轴结束的位置排列(右对齐，同上)

center:
    项目排列到主轴的中心

space-between:
    项目在容器主轴的两端对齐，然后中间的间隙平均分布

space-around:
    每个项目两侧的margin相等(不考虑相邻合并)，所以项目间的间距是项目与容器边框(左右)间距的两倍
*/



/* 定义项目在交叉轴(垂直)上如何对齐 */
align-items: flex-start | flex-end | center | baseline | stretch;
/* 
flex-start:
    项目在垂直方向上靠交叉轴起点对齐

flex-end:
    项目在垂直方向上靠交叉轴终点对齐

center:
    项目在垂直方向上居中对齐

baseline:
    项目在垂直方向上按照基线对齐

stretch:
    默认值，项目如果没有设置高度或者为auto，那么其高度会自动占满整个容器高度，如果交叉轴在水平方向，那么同理为宽度！
*/



/* 定义多根轴线(项目有两行及以上)在交叉轴上的对齐方式，若项目只有一行那么不起作用 */
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
/* 
flex-start:
    整体多行项目在交叉轴方向上靠交叉轴起点对齐     

flex-end:
    整体多行项目在交叉轴方向上靠交叉轴终点对齐(如果出现了三行项目，最后一行只有一个，此时用flex-end只会整体靠交叉轴终点对齐，前两行右边的元素依旧与容器有边界)  
center:
    整体多行项目在交叉轴方向上居中

space-between:
    整体多行项目在交叉轴方向上，两端靠交叉轴端点对齐，每行中间的空隙均匀分布
    
space-around:
    整体多行项目在交叉轴方向上，两侧的margin相等(不考虑边界合并)，那么每行行距与容器边框的比例为2:1

stretch:
    默认值，如果容器中的项目不设置在交叉轴方向上的高 or 宽，或者设置为auto，那么整体多行项目会在该方向上填充满(对于整体来说，最后一行也可能会有空隙)
*/

```


### 5.4 项目的属性
```css
/* 定义项目的排列顺序  */
order: <Integer>;
/* 
取值说明：
    order的数值越小，该项目就离主轴起始端越近，默认为0
*/


/* 定义项目占据剩余空间的权重，权重越大，所占空间越大 */
flex-grow: <Integer>;
/* 
取值说明：
    默认值为0，此时就算项目在容器有剩余空间也不会进行扩展
    假设有3个项目，flex-grow值分别为1 2 1，那么它们会以1:2:1的比例分配完容器剩余空间

注意：只有当容器还有剩余空间当时候，该属性才对项目有效
*/
 

/* 定义项目在容器中空间不够时的缩小权重，权重越大，缩小程度越大 */
flex-shrink: <Integer>;
/* 
取值说明：
    默认值为1，此时当所在的主轴空间不够时，所有项目会等比例缩小到恰好占满容器，如果项目在容器中装不下时，此时把所有项目的felx-shrink取值为0，那么它们就不会缩小了，项目会溢出容器，取值为0表示该项目不缩小

注意：只有当项目在容器装不下的时候，该属性对项目才有效
*/


/* 定义项目在分配多余空间之前，项目占据的主轴空间，优先级比witdh/height更高 */
flex-basis: <length> | auto;
/* 
取值说明：
    默认值为auto即项目原本大小，如果主轴水平，给项目设置了flex-basis属性，那么该属性会替代原来项目的witdh大小
*/


/* grow or shrink | basis 简写属性 */
flex: flex-grow/flex-shrink | flex-basis;
/* 
说明：
    默认值为：0 1 auto
    快捷取值：flex: auto 表示 flex: 1 1 auto
            flex: none 表示 flex: 0 0 auto    
*/

/* 定义项目在交叉轴上的对齐方式，可以覆盖容器属性中的align-items */
align-self: auto | flex-start | flex-end | center | baseline | stretch;
/* 
取值说明：
    默认值为auto，即继承父容器的align-items取值
    如果没有父容器，那么等同于stretch

其余取值说明对照容器属性中的align-items
*/
```
### 5.5 实例


