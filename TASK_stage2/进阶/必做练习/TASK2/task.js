var data = [];
var sort_timer;
var $ = function (id) {
    return document.getElementById(id);
}
$('widget').addEventListener('click', e => {
    // 获取输入的数据
    let input = Number($('input-data').value.trim());

    switch (e.target.id) {
        case "btn-left-push":
            // 检测输入，如果输入不合法则break
            if (!checkInput(input)) break;
            // 如果输入的数据超过50则break
            if (data.length > 50) {
                alert('队列已满，无法继续添加数据！')
                break;
            }
            // 向左插入元素
            data.unshift(input);
            $('input-data').value = '';

            // 重新渲染div-queue
            render();

            break;
        case "btn-right-push":
            if (!checkInput(input)) break;
            if (data.length > 50) {
                alert('队列已满，无法继续添加数据！')
                break;
            }
            data.push(input);
            $('input-data').value = '';

            render();

            break;
        case "btn-left-pop":
            if (data.length == 0) {
                alert('队列为空，无法弹出数据！');
                break;
            }
            alert(data.shift());
            render();

            break;
        case "btn-right-pop":
            if (data.length == 0) {
                alert('队列为空，无法弹出数据！');
                break;
            }
            alert(data.pop());
            render();
            break;
        case "btn-sort":
            let i = data.length - 1,
                j = 1,
                inerval = $('input-interval').value;

            // 判断一下定时器是否开启，防止开启多个定时器
            if (sort_timer == undefined)
                // 用定时器模拟循环结构，在里面实现冒泡排序！！！想了好久！！！！！
                sort_timer = setInterval(() => {
                    if (i >= 0) {
                        if (j <= i) {
                            let element1 = $(`${j - 1}`);
                            let element2 = $(`${j}`);

                            element1.style.background = 'green';
                            element2.style.background = 'green';

                            setTimeout(() => {
                                element1.style.background = 'red';
                                element2.style.background = 'red';
                            }, Number($('input-interval').value) * 2);

                            if (data[j - 1] > data[j]) {
                                [data[j], data[j - 1]] = [data[j - 1], data[j]];
                                render(j - 1, j);
                            }
                            j++;
                        } else {
                            i--;
                            j = 1;
                        }
                    } else {
                        clearInterval(sort_timer);
                        sort_timer = undefined;
                    }
                }, inerval);

            break;
        case "btn-random":
            for (let i = 0; i < 50; i++) {
                data[i] = Math.round(Math.random() * 90 + 10);
            }
            render();
            break;
    }
});

// 渲染的时候让指定交换的元素的高度缓慢上升
function render(...arr) {

    if (arr.length != 0) {
        // 先获取两个待交换的元素
        let element1 = $(`${ arr[0] }`);
        let element2 = $(`${ arr[1] }`);

        element1.style.background = 'blue';
        element2.style.background = 'blue';

        setTimeout(() => {
            element1.style.background = 'red';
            element2.style.background = 'red';
        }, Number($('input-interval').value) * 2);

        // 同时设置高度变化的动画
        transform(element1, 'height', data[arr[0]] * 2, (Number($('input-interval').value) / 2) - 5, 5);
        transform(element2, 'height', data[arr[1]] * 2, (Number($('input-interval').value) / 2) - 5, 5);

    } else {
        let content = '';
        for (let i = 0; i < data.length; i++) {
            content += `<div id="${ i }", style="height:${ data[i] * 2 }px;"></div>`
        }
        $('div-queue').innerHTML = content;     
    }
}

function checkInput(input) {
    if (isNaN(input) || input < 10 || input > 100) {
        alert('输入的数据不合法，请重新输入！');
        $('input-data').value = '';
        return false;
    }
    return true;
}

function transform(obj, attr, targetStatus, interval, speed, callback = () => {}) {

    // 如果第一次为这个元素开启定时器
    if (obj.animation == undefined) obj.animation = {};

    // 防止开启多个同一个定时器，导致动画加速， BUG:如果在上一个动画结束之前，这样无法在同级设置同一个属性的动画了！！
    // 在上一个同级同属性动画执行完毕后，再为该定时器设置新的同级属性动画
    // 动画结束后，就会在obj.animation中删除相关的属性
    if (obj.animation[attr] == undefined) {
        obj.animation[attr] = {};

        obj.animation[attr].target = targetStatus;
        obj.animation[attr].timer = setInterval(() => {

            // 实时获取当前属性的取值
            let currentValue = parseInt(getComputedStyle(obj)[attr]);

            // 如果目标属性的取值小于当前属性取值则 speed 取负
            if (speed > 0 && currentValue > targetStatus) speed = -speed;

            // 更新属性取值
            let newValue = currentValue + speed;

            // 左移时 newValue 小于目标值 或者 右移时 newValue 大于目标值 则把 newValue 设置为目标值
            // 目的是让动画结束后元素能准确处于目标属性取值
            if ((speed < 0 && newValue < targetStatus) || (speed > 0 && newValue > targetStatus)) {
                newValue = targetStatus;
            }

            obj.style[attr] = newValue + 'px';
            // 当前属性取值处于目标状态时停止动画
            if (currentValue === targetStatus) {
                clearInterval(obj.animation[attr].timer);

                // 删除定时器中的相关属性
                delete obj.animation[attr];
                // 动画执行完毕后执行回调函数
                callback();
            }
        }, interval)
    } else {
        // 第二次使用同一个属性设置动画：
        // 如果该属性动画仍存在说明还没有执行完

        // 如果当前设置的属性值与上一个设置的属性值相同则没必要再开启定时器来判断
        if (targetStatus != obj.animation[attr].target) {

            // 开一个定时器，每隔 10ms 来判断上一个同类动画是否执行完
            let tempTimer = setInterval(() => {

                // 如果属性已经不存在animation对象中，说明已经执行完该动画
                if (!(attr in obj.animation)) {
                    // 开启新动画
                    transform(obj, attr, targetStatus, interval, speed, callback);

                    // 停止判断
                    clearInterval(tempTimer);
                    tempTimer = null;
                }
            }, 10);
        }
    }
}