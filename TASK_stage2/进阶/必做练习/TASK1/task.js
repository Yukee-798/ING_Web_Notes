var btn_left_push = document.getElementById('left-push');
var btn_right_push = document.getElementById('right-push');
var btn_left_pop = document.getElementById('left-pop');
var btn_right_pop = document.getElementById('right-pop');
var input_text = document.getElementById('input-text');
var input;
// 要求只能输入数字
var reg = /^[0-9]{1,}$/;
var div_queue = document.getElementById('div-queue');
var queue = [];

initEvent();

function initEvent() {
    // 给div_queue绑定一个委托事件，点击其子元素则删除
    div_queue.onclick = (event) => {
        if (event.target.toString() === '[object HTMLDivElement]') {
            div_queue.removeChild(event.target);
        }
    };

    // 左侧入点击事件
    btn_left_push.onclick = () => {
        // 如果输入失败
        if (!getInput()) {
            return;
        }
        // 输入成功则插入元素
        let element = document.createElement('div');
        element.innerHTML = input;
        push('left', element);
    }
    // 右侧入点击事件
    btn_right_push.onclick = () => {
        if (!getInput()) {
            return;
        }

        // 输入成功则插入元素
        let element = document.createElement('div');
        element.innerHTML = input;
        push('right', element);

    }
    // 左侧出点击事件
    btn_left_pop.onclick = () => {
        pop('left');
    }
    // 右侧出点击事件
    btn_right_pop.onclick = () => {
        pop('right')
    }

    function push(direction, element) {
        if (direction === 'left') {
            // 如果div_queue中没有子元素
            if (queue.length == 0) div_queue.appendChild(element);
            else div_queue.insertBefore(element, div_queue.firstElementChild);
            queue.unshift(input);

        } else if (direction === 'right') {
            div_queue.appendChild(element);
            queue.push(input);
        }
    }

    function pop(direction) {
        // 如果queue长度为0
        if (queue.length == 0) {
            alert('队列为空，无法取出元素！');
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

    function getInput() {
        // 先接受输入的数字
        input = input_text.value.trim();

        if (!reg.test(input)) {
            alert('输入有误，请输入数字！');
            input_text.value = '';
            // 输入失败
            return false;
        }
        input_text.value = '';
        // 输入成功
        return true;
    }
}