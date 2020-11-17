var btn_left_push = document.getElementById('btn-left-push');
var btn_right_push = document.getElementById('btn-right-push');
var btn_left_pop = document.getElementById('btn-left-pop');
var btn_right_pop = document.getElementById('btn-right-pop');
var btn_sort = document.getElementById('btn-sort');
var btn_random = document.getElementById('btn-random');
var input_interval = document.getElementById('input-interval');
var input_data = document.getElementById('input-data');
var div_queue = document.getElementById('div-queue');


var queue = [];
var input = '';
var reg = /^[0-9]{1,}$/;

initEvent();



function initEvent() {
    btn_left_push.onclick = () => {
        if (!getInput()) {
            return;
        }
        var element = document.createElement('div');
        element.style.height = `${ Number(input) * 2 }px`;
        push('left', element);
    }
    btn_right_push.onclick = () => {
        if (!getInput()) {
            return;
        }
        var element = document.createElement('div');
        element.style.height = `${ Number(input) * 2 }px`;
        push('right', element);
    }
    btn_left_pop.onclick = () => {
        pop('left');
    }
    btn_right_pop.onclick = () => {
        pop('right');
    }
    btn_sort.onclick = () => {

    }

    // 随机生成50组数据(取值在10-100)
    btn_random.onclick = () => {
        // 如果队列中有元素存在则清空队列
        if (queue.length > 0) clear();

        for (let i = 0; i < 50; i++) {
            let element = document.createElement('div');
            element.style.height = `${ Math.round((Math.random() * 90 + 10)) * 2 }px`;
            push('left', element);
        }
    }
}

// 清空队列中的所有元素
function clear() {
    let elementCounts = queue.length;
    for (let i = 0; i < elementCounts; i++) {
        pop('left');
    }
}

// 获取输入的数字到input中
function getInput() {
    input = input_data.value.trim();
    // 输入有误
    if (!reg.test(input) || Number(input) > 100 || Number(input) < 10) {
        alert('输入数据有误，请重新输入！');
        input_data.value = '';
        return false;
    }
    input_data.value = '';
    return true;
}


function push(direction, element) {

    if (queue.length <= 50) {
        if (direction === 'left') {

            // 先让原来的所有元素向右移动 15px
            let temp = div_queue.firstElementChild;
            while (temp != null) {
                temp.style.left = (parseInt(getComputedStyle(temp).left) + 15) + 'px';
                temp = temp.nextElementSibling;
            }

            // 插入新元素
            div_queue.insertBefore(element, div_queue.firstElementChild);
            queue.unshift(Number(input));

        } else if (direction === 'right') {
            // 找到栈顶元素
            let temp = div_queue.firstElementChild;
            while (temp != null && temp.nextElementSibling != null) {
                temp = temp.nextElementSibling;
            }

            // 如果 temp 为 null 则说明栈为空，否则其为栈顶元素
            if (temp == null) {
                div_queue.append(element);
            } else {
                // 获取栈顶元素的left， left + 15 即为压栈元素的偏移量
                element.style.left = (parseInt(getComputedStyle(temp).left) + 15) + 'px';
                div_queue.appendChild(element);
                queue.push(Number(input));
            }
        }
    } else {
        alert('队列中已经无法再添加元素！');
    }

}

function pop(direction) {
    // 如果queue长度为0
    if (queue.length == 0) {
        alert('队列为空，无法再弹出元素！');
    } else {
        if (direction === 'left') {




            // div_queue.removeChild(div_queue.firstElementChild);
            // queue.shift();

        } else if (direction === 'right') {



            // div_queue.removeChild(div_queue.lastElementChild);
            // queue.pop();
        }
    }
}


/*
    参数：
        obj: 元素对象
        attr: 需要修改的属性名称
        targetStatus: 属性的目标取值
        interval: 动画速度
        speed: 动画速度
        callback: 回调函数，在当前动画执行完毕后执行

    功能：用于元素的宽高变化、绝对定位变化等动画操作
*/

function transform(obj, attr, targetStaus, interval, speed, callback = () => {}) {


    // 如果该attr在timer中已存在
    if (obj.timer == null) obj.timer = {};
    // console.log(attr in obj.timer);
    if (attr in obj.timer) {
        clearInterval(obj.timer[attr]);
        // console.log(1);
    }

    obj.timer[attr] = setInterval(() => {

        // 实时获取当前属性的取值
        let currentValue = parseInt(getComputedStyle(obj)[attr]);
        // console.log(currentValue);

        // 如果目标属性的取值小于当前属性取值则 speed 取负
        if (speed > 0 && currentValue > targetStaus) speed = -speed;

        // 更新属性取值
        let newValue = currentValue + speed;

        // 左移时 newValue 小于目标值 或者 右移时 newValue 大于目标值 则把 newValue 设置为目标值
        // 目的是让动画结束后元素能准确处于目标属性取值
        if ((speed < 0 && newValue < targetStaus) || (speed > 0 && newValue > targetStaus)) {
            newValue = targetStaus;
        }

        obj.style[attr] = newValue + 'px';
        // 当前属性取值处于目标状态时停止动画
        if (currentValue == targetStaus) {
            clearInterval(obj.timer[attr]);

            // 动画执行完毕后执行回调函数
            callback();
        }
    }, interval)
}