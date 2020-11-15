/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 
 */
function addAqiData() {
    var city_input = document.getElementById('aqi-city-input');
    var air_input = document.getElementById('aqi-value-input');
    var city = city_input.value.trim();
    var air = air_input.value.trim();

    // 判断字符串是否为中文字符或英语字母的正则表达式
    var reg1 = /^([\u4e00-\u9fa5]|[A-z]){1,}$/;
    // 判断字符串是否为数字
    var reg2 = /^[0-9]{1,}$/;

    if (!reg1.test(city)) {
        alert('输入的城市名称有误，请重新输入！');
        city_input.value = '';
    } else if (!reg2.test(air)) {
        alert('输入的空气指数有误，请重新输入！');
        air_input.value = '';
    } else aqiData[city] = Number(air);


}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var table = document.getElementById('aqi-table');
    var trs = [];
    var dataList = Object.keys(aqiData);
    if (dataList.length != 0) {
        trs[0] = `<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>`;
        dataList.forEach(element => {
            trs.push(`<tr><td>${ element }</td><td>${ aqiData[element] }</td><td><button>删除</button></td></tr>`);
        });

        table.innerHTML = trs.join('');
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(btn) {
    delete aqiData[btn.parentElement.parentElement.firstElementChild.innerHTML];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById('add-btn').onclick = () => {
        addBtnHandle();
    };

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    document.getElementById('aqi-table').onclick = event => {
        if (event.target.toString() == '[object HTMLButtonElement]') delBtnHandle(event.target);
    };

}

init();