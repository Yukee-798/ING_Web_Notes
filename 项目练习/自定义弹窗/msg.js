




((window, document) => {
    
    // 创建了一个Msg类的构造函数
    let Msg = options => void this._init(options);

    // 对Msg类的原型对象中设置一个初始化方法
    // 相当于给Msg类设置初始化成员方法
    Msg.prototype._init = ({ content = '' }) => {

        this.content = content;
        this._createElement();
    }

    // 给Msg类设置创建元素的成员方法
    Msg.prototype._createElement = () => {
        // 创建弹框
         let warp = document.createElement('div');
         warp.className = 'msg-container';
         warp.innerHTML = 
         `<div class="msg-header">
            <span>确定删除</span>
            <span class="msg-header-close-btn">x</span>
          </div>
          <div class="msg-body">
            <div class="msg-body-icon">
                <div class="msg-body-icon-wrong">误</div>
            </div>
            <div class="msg-body-content">真的要删除吗...</div>
          </div>
         <div class="msg-footer">
            <button type="button" class="msg-footer-btn msg-footer-cancel-btn">算了吧</button>
            <button type="button" class="msg-footer-btn msg-footer-confirm-btn">好的</button>
         </div>`;

         // Msg对象的_el属性就是弹框对象
         this._el = warp;
    }
    Msg.prototype._show = el => void document.body.appendChild(el);

    window.$Msg = Msg;
})(window, document);


