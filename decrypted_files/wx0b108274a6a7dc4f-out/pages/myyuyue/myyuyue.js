var n = require("../../request/api.js"), o = getApp();

Page({
    data: {},
    onLoad: function(e) {
        var t = this;
        wx.request({
            url: n.myyuyeu(o.globalData.openid),
            success: function(n) {
                console.log(n), t.setData({
                    list: n.data.order
                });
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