var n = require("../../../component/message/message.js");

Page({
    data: {
        message: {}
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    show: function() {
        n.show.call(this, {
            content: "请输入正确的手机号码",
            icon: "tip"
        });
    },
    hide: function() {
        n.hide.call(this);
    }
});