var t = getApp(), o = require("../../../utils/config.js"), a = "";

Page({
    data: {
        none: !1
    },
    chooseBookcase: function(t) {
        var o = t.currentTarget.dataset.index, a = this.data.items, n = getCurrentPages();
        n[n.length - 2].setData({
            bookcase: a[o],
            addressType: 1
        }), wx.navigateBack({
            data: 1
        });
    },
    onLoad: function() {
        var t = this;
        a = wx.getStorageSync("3rdsession"), t.getBookcase();
    },
    getBookcase: function() {
        var a = this;
        wx.request({
            url: o.queryBookcase,
            data: {
                long: t.globalData.long,
                lat: t.globalData.lat,
                schoolId: t.globalData.schoolId
            },
            success: function(t) {
                if (console.log(t), 200 == t.data.type) {
                    t.data.content;
                    var o = t.data.date;
                    null != o && o.length > 0 ? a.setData({
                        none: !1
                    }) : a.setData({
                        none: !0
                    }), a.setData({
                        items: o
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