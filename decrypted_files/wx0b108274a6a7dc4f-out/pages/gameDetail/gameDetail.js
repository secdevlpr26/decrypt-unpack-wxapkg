getApp();

var e = require("../../request/api.js"), t = require("../../wxParse/wxParse.js");

Page({
    data: {},
    getDetail: function() {
        var n = this;
        wx.request({
            url: e.getGame(),
            success: function(e) {
                console.log(e), n.setData({
                    detail: JSON.parse(e.data.re.content)
                });
                var a = n.data.detail;
                t.wxParse("article", "html", a, n, 5);
            }
        });
    },
    onLoad: function(e) {
        this.getDetail();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});