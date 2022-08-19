function o(o, t, e) {
    return t in o ? Object.defineProperty(o, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[t] = e, o;
}

var t = getApp(), e = "", a = require("../../../utils/config.js"), n = 0;

Page({
    data: {
        imgRootPath: a.imgRootPath,
        noCover: "../../../images/no_cover.png"
    },
    onLoad: function(o) {
        var t = this;
        e = wx.getStorageSync("3rdsession"), t.getHavingOrderBook();
    },
    imgError: function(t) {
        var e = "books[" + t.currentTarget.dataset.index + "].pic1";
        this.setData(o({}, e, "no_cover"));
    },
    getHavingOrderBook: function() {
        var o = this;
        wx.showLoading({
            title: "加载中.....",
            mask: !0
        }), wx.request({
            url: a.getHavingOrderBook,
            data: {
                sessionKey: e,
                schoolId: t.globalData.schoolId
            },
            success: function(t) {
                200 == t.data.type ? (o.setData({
                    books: t.data.date
                }), wx.hideLoading(), n = 0) : (wx.hideLoading(), n = 0, wx.showToast({
                    title: t.data.content,
                    icon: "none"
                }));
            },
            fail: function(o) {
                wx.hideLoading(), n = 0, wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    cancel: function(o) {
        var t = o.currentTarget.dataset.id;
        if (1 == n) return !1;
        this.cancelOrder(t);
    },
    cancelOrder: function(o) {
        var i = this;
        wx.showLoading({
            title: "取消中.....",
            mask: !0
        }), wx.request({
            url: a.cancelOrder,
            data: {
                sessionKey: e,
                id: o,
                schoolId: t.globalData.schoolId
            },
            success: function(o) {
                wx.hideLoading(), 200 == o.data.type ? (wx.showToast({
                    title: "取消预约成功",
                    icon: "none",
                    mask: !0
                }), i.getHavingOrderBook()) : (n = 0, wx.showToast({
                    title: o.data.content,
                    icon: "none",
                    mask: !0
                }));
            },
            fail: function(o) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    obtainCode: function(o) {
        var t = o.currentTarget.dataset.id;
        this.obtainBookCode(t);
    },
    obtainBookCode: function(o) {
        wx.request({
            url: a.obtainBookCode,
            data: {
                sessionKey: e,
                id: o,
                schoolId: t.globalData.schoolId
            },
            success: function(o) {
                200 == o.data.type ? wx.showModal({
                    title: "取书码",
                    content: "您的取书码为：" + o.data.date,
                    showCancel: !1
                }) : wx.showToast({
                    title: o.data.content,
                    icon: "none"
                });
            },
            fail: function(o) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    }
});