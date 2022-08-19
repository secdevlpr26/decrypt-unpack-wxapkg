var a = require("../../utils/server");

Page({
    data: {},
    onLoad: function(n) {
        var t = this, o = getApp().globalData.userInfo.user_id;
        a.getJSON("/User/crashList", {
            user_id: o
        }, function(a) {
            var n = a.data;
            t.setData({
                datas: n
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});