var $ = id => document.getElementById(id);
var data = [];
// 记录哪个数据需要标识
var flag = [];
$('widgets').addEventListener('click', e => {
    switch (e.target.id) {
        case 'btn-insert':
            data.push(...getData());
            $('textarea-data').value = '';
            render();
            break;

        case 'btn-search':
            render($('input-search').value);
            $('input-search').value = '';
            break;

    }
});

// 以 换行符、制表符、回车、逗号、空格、减号、/ 、* 、\ 、顿号 、下划线 来分割字符串
function getData() {
    let reg = /[\n\t\r,，\s-/\*\\、_]+/g;
    let strArr = $('textarea-data').value.split(reg);
    return strArr;
}

function render(...arr) {
    if (arr.length == 0) {
        let str = '';
        for (let i = 0; i < data.length; i++) {
            str += `<span>${data[i]}</span>`;
        }
        $('container').innerHTML = str;
    } else {
        // 每次查询前恢复一下标识
        render();

        // 先获取输入的内容
        let content = arr[0];

        // 遍历data数组，获取每一个数据
        for (let i = 0; i < data.length; i++) {
            if (data[i].includes(content == '' ? '  ' : content)) {
                // 标记
                flag[i] = 1;
            }
        }

        let str = '';
        for (let i = 0; i < data.length; i++) {
            let style1 = `<span style="color: red;">${data[i]}</span>`;
            let style2 = `<span>${data[i]}</span>`;
            // 如果有flag对应下标有标记则使用style1来渲染
            str += (flag[i] == 1 ? style1 : style2);
        }
        $('container').innerHTML = str;

        // 回溯flag数组
        flag.length = 0;
    }

}