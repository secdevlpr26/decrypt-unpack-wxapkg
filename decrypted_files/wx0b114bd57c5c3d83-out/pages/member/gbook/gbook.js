var o = require("../../../utils/server");

Page({
    data: {
        ad: {}
    },
    onLoad: function(o) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    formSubmit: function(n) {
        wx.showToast({
            title: "正在提交...",
            icon: "loading",
            duration: 1e4
        }), console.log("form发生了submit事件，携带数据为：", n.detail.value);
        var e = n.detail.value;
        if (e.name && e.email && e.content) {
            var t = getApp().globalData.userInfo.user_id;
            if (!(t > 0)) return wx.hideLoading(), wx.showToast({
                title: "请先登录...",
                icon: "loading",
                duration: 1e3
            }), !1;
            o.getJSON("/User/gbook/user_id/" + t + "/name/" + e.name + "/email/" + e.email + "/content/" + e.content, function(o) {
                var n = o.data.msg;
                wx.hideLoading(), wx.showToast({
                    title: n,
                    icon: "success",
                    duration: 1e3
                });
            });
        } else wx.hideLoading(), wx.showToast({
            title: "请填写资料！",
            icon: "loading",
            duration: 2e3
        });
    },
    formReset: function() {
        console.log("form发生了reset事件");
    }
});