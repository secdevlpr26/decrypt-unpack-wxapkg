var e = require("../../request/api.js"), n = require("../../wxParse/wxParse.js");

Page({
    data: {},
    onLoad: function(o) {
        var t = this;
        console.log(o), wx.request({
            url: e.getBannerDetail(o.id),
            success: function(e) {
                console.log(e), t.setData({
                    detail: e.data.re
                });
                var o = JSON.parse(t.data.detail.content);
                n.wxParse("article", "html", o, t, 5);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});