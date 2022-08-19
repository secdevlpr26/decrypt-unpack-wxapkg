getApp();

var n = require("../../request/api.js");

Page({
    data: {
        imgUrl: n.API_IMG
    },
    onLoad: function(o) {
        var e = this;
        console.log(o), wx.request({
            url: n.nearDetail(o.admin_id),
            success: function(n) {
                console.log(n), e.setData({
                    detail: n.data.re,
                    content: o.content,
                    name: o.name,
                    fengmian: o.img
                });
            }
        });
    },
    copy: function() {
        wx.setClipboardData({
            data: this.data.name,
            success: function(n) {
                console.log(n), wx.getClipboardData({
                    success: function(n) {
                        console.log(n);
                    }
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