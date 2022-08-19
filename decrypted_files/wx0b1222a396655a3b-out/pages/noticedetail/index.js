var t = require("../../wxParse/wxParse.js"), a = getApp();

Page({
    data: {
        info: {}
    },
    onLoad: function(e) {
        getApp().editTabBar();
        var o = this;
        console.log(e), wx.request({
            url: "https://open.flames-tech.cn/plugin/notice-api/notice-detail",
            data: {
                key: e.key
            },
            header: {
                token: a.globalData.token
            },
            success: function(a) {
                if (console.log(a), 1 == a.data.state && a.data.info) {
                    var e = a.data.info.content;
                    t.wxParse("content", "html", e, o, 5), o.setData({
                        info: a.data.info
                    });
                }
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }
});