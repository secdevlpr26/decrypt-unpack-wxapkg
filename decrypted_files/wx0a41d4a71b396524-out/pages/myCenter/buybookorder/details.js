function e(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}

var t = getApp(), o = "", a = null, n = require("../../../utils/config.js"), r = require("../../../utils/promise.js");

Page({
    data: {
        imgRootPath: n.imgRootPath,
        noCover: "../../../images/no_cover.png",
        none: !1
    },
    toTel: function(e) {
        wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.phone
        });
    },
    imgError: function(t) {
        t.currentTarget.dataset.index;
        this.setData(e({}, "orderDetail.pic1", "no_cover"));
    },
    onLoad: function(e) {
        o = wx.getStorageSync("3rdsession");
        var t = this;
        if (void 0 != e) {
            var a = e.id, n = e.state;
            t.getBuyBookDetails(a, n).then(function(e) {
                console.log(n), 0 == n ? (t.countdown(t.data.orderDetail.timestamp), t.setData({
                    none: !0
                })) : t.setData({
                    none: !1
                });
            });
        }
    },
    getBuyBookDetails: function(e, i) {
        var s = this;
        return new r(function(r, c) {
            wx.request({
                url: n.getBuyBookDetails,
                data: {
                    sessionKey: o,
                    id: e,
                    state: i,
                    schoolId: t.globalData.schoolId
                },
                success: function(e) {
                    if (200 == e.data.type) {
                        var o = e.data.date;
                        if (s.setData({
                            orderDetail: o.orderDetail,
                            telPhone: o.telPhone
                        }), 0 == o.orderDetail.state) {
                            a = o.orderDetail.timestamp;
                            var n = new Date().getTime();
                            (a - n || []) <= 0 && (s.setData({
                                clock: "已经截止"
                            }), s.clearExpireOrderInfo(o.orderDetail.id));
                            o.id, t.globalData.schoolId;
                        }
                        r(e.data.date);
                    } else wx.showToast({
                        title: e.data.content,
                        icon: "none"
                    });
                },
                fail: function(e) {
                    wx.showToast({
                        title: "系统异常，请稍后重试",
                        icon: "none"
                    }), c("error");
                }
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    dateformat: function(e) {
        var t = Math.floor(e / 1e3);
        Math.floor(t / 3600 / 24), Math.floor(t / 3600 % 24);
        return Math.floor(t / 60 % 60) + "分钟" + Math.floor(t % 60) + "秒";
    },
    countdown: function(e) {
        var t = this, o = e - new Date().getTime() || [];
        if (o < 0) {
            o = 1;
            var a = t.data.orderDetail.id;
            t.clearExpireOrderInfo(a);
        } else t.setData({
            clock: t.dateformat(o)
        }), o <= 0 ? t.setData({
            clock: "已经截止"
        }) : setTimeout(function() {
            o -= 1e3, t.countdown(e);
        }, 1e3);
    },
    clearExpireOrderInfo: function(e) {
        wx.request({
            url: n.clearExpireOrderInfo,
            data: {
                sessionKey: o,
                detailId: e,
                schoolId: t.globalData.schoolId
            },
            success: function(e) {
                200 == e.data.type ? wx.switchTab({
                    url: "/pages/index/index"
                }) : wx.showToast({
                    title: e.data.content,
                    icon: "none"
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                }), reject("error");
            }
        });
    },
    toPay: function(e) {
        e.currentTarget.dataset.detailid;
    }
});