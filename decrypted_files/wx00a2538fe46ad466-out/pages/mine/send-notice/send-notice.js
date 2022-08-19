var e = require("../../../wxParse/wxParse.js"), o = getApp();

Page({
    data: {},
    onLoad: function(n) {
        var a = this;
        wx.request({
            url: o.globalData.url + o.globalData.parameter + "&do=sysset",
            header: {
                Cookie: o.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(o) {
                var n = o.data.result.sysset.release_notes;
                e.wxParse("article", "html", n, a, 5);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});