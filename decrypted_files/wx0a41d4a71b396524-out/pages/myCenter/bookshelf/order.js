function o(o, e, t) {
    return e in o ? Object.defineProperty(o, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[e] = t, o;
}

var e = getApp(), t = "", n = 0, a = require("../../../utils/config.js"), i = 0;

Page({
    data: {
        imgRootPath: a.imgRootPath,
        noCover: "../../../images/no_cover.png",
        index: 1
    },
    onLoad: function(o) {
        var e = this, n = o.ids.split(",");
        t = wx.getStorageSync("3rdsession"), e.getNeedOrderBook(n);
    },
    bindPickerChange: function(o) {
        console.log("picker发送选择改变，携带值为", o.detail.value), console.log("e", o), this.setData({
            index: o.detail.value
        });
    },
    imgError: function(e) {
        var t = "books[" + e.currentTarget.dataset.index + "].pic1";
        this.setData(o({}, t, "no_cover"));
    },
    getNeedOrderBook: function(o) {
        var n = this;
        wx.request({
            url: a.getNeedOrderBook,
            data: {
                sessionKey: t,
                ids: JSON.stringify(o),
                long: e.globalData.long,
                lat: e.globalData.lat,
                schoolId: e.globalData.schoolId
            },
            header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
            },
            success: function(o) {
                if (200 == o.data.type) {
                    if (0 == o.data.content) return wx.navigateTo({
                        url: "../bind/index"
                    }), !1;
                    var e = o.data.date;
                    n.setData({
                        books: e.list,
                        ids: e.ids,
                        sum: e.sum,
                        info: e.info,
                        weekObj: e.config
                    });
                } else wx.showToast({
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
    },
    toOrder: function(o) {
        var s = this;
        if (1 == i) return !1;
        i = 1;
        var d = s.data.index, r = s.data.weekObj[d].id, c = s.data, l = c.ids, u = 0;
        return null != c.info && (u = c.info.eqId), l.length <= 0 ? (i = 0, !1) : null == u || u <= 0 ? (i = 0, 
        wx.showToast({
            title: "请选择书柜",
            icon: "none"
        }), !1) : 1 == n ? (i = 0, !1) : (n = 1, void wx.request({
            url: a.orderBook,
            data: {
                sessionKey: t,
                ids: JSON.stringify(l),
                eqId: u,
                schoolId: e.globalData.schoolId,
                configId: r
            },
            header: {
                "content-type": "application/x-www-form-urlencoded;charset=utf-8"
            },
            success: function(o) {
                n = 0, 200 == o.data.type ? wx.showToast({
                    title: "预约成功",
                    icon: "none",
                    duration: 2e3,
                    mask: !0,
                    complete: function() {
                        setTimeout(function() {
                            i = 0, wx.switchTab({
                                url: "/pages/index/index"
                            });
                        }, 2e3);
                    }
                }) : (i = 0, wx.showToast({
                    title: o.data.content,
                    icon: "none"
                }));
            },
            fail: function(o) {
                i = 0, wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        }));
    },
    toAddress: function() {
        var o = this;
        console.log(o.data.info.eqId), wx.navigateTo({
            url: "address?eqId=" + o.data.info.eqId
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