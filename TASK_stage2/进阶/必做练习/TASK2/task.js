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
            // 如果div_queue中没有子元素
            if (queue.length == 0) div_queue.appendChild(element);
            else div_queue.insertBefore(element, div_queue.firstElementChild);
            queue.unshift(input);

        } else if (direction === 'right') {
            div_queue.appendChild(element);
            queue.push(input);
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
            div_queue.removeChild(div_queue.firstElementChild);
            queue.shift();
        } else if (direction === 'right') {
            div_queue.removeChild(div_queue.lastElementChild);
            queue.pop();
        }
    }
}