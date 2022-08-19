var t = getApp(), a = require("../../../utils/config.js"), o = "";

Page({
    data: {},
    chooseAddr: function(t) {
        var a = t.currentTarget.dataset.index, o = this.data.items, n = getCurrentPages();
        n[n.length - 2].setData({
            info: o[a],
            webType: 1
        }), wx.navigateBack({
            data: 1
        });
    },
    onLoad: function(t) {
        var a = this, n = t.eqId;
        o = wx.getStorageSync("3rdsession"), a.getBookcase(n);
    },
    getBookcase: function(n) {
        var e = this;
        wx.request({
            url: a.getBookcase,
            data: {
                eqId: n,
                long: t.globalData.long,
                lat: t.globalData.lat,
                sessionKey: o,
                schoolId: t.globalData.schoolId
            },
            success: function(t) {
                if (200 == t.data.type) {
                    t.data.content;
                    var a = t.data.date;
                    e.setData({
                        items: a
                    });
                } else wx.showToast({
                    title: t.data.content,
                    icon: "none"
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
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