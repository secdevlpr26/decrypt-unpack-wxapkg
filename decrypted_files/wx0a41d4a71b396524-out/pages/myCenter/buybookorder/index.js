function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = getApp(), a = "", n = require("../../../utils/config.js");

Page({
    data: {
        tabs: [ "未付款", "已付款" ],
        activeIndex: 0,
        sliderLeft: 0,
        imgRootPath: n.imgRootPath,
        noCover: "../../../images/no_cover.png",
        winHeight: "",
        currentTab: 0,
        scrollLeft: 0,
        pageNum: 10,
        finished: !1,
        list: []
    },
    onLoad: function() {
        var t = this;
        wx.showLoading({
            title: "加载中.....",
            mask: !0
        }), wx.getSystemInfo({
            success: function(e) {
                t.setData({
                    sliderOffset: e.windowWidth / t.data.tabs.length * t.data.activeIndex
                });
            }
        }), t.setData({
            telPhone: e.globalData.telPhone
        }), a = wx.getStorageSync("3rdsession"), t.clearExpireOrderInfo(a).then(function(e) {
            t.getBuyBooks(0, 1);
        });
    },
    notImgError: function(e) {
        var a = "list[" + e.currentTarget.dataset.index + "].pic1";
        this.setData(t({}, a, "no_cover"));
    },
    hisImgError: function(e) {
        var a = "pids[" + e.currentTarget.dataset.index + "].pic1";
        this.setData(t({}, a, "no_cover"));
    },
    getBuyBooks: function(t, o) {
        var i = this;
        2 == t && (t = 3), wx.request({
            url: n.getBuyBooks,
            data: {
                sessionKey: a,
                page: o,
                state: t,
                schoolId: e.globalData.schoolId
            },
            complete: function() {
                wx.hideLoading();
            },
            success: function(e) {
                var a = e.data.date;
                if (200 == e.data.type) {
                    var n = a.list;
                    if (n.length <= 0) return o > 1 ? (wx.showToast({
                        title: "没有更多了",
                        icon: "none"
                    }), i.setData({
                        finished: !0
                    }), !1) : (i.setData({
                        list: []
                    }), !1);
                    i.setData({
                        list: n,
                        pageNum: o,
                        telPhone: a.telPhone,
                        state: t
                    });
                } else wx.showToast({
                    title: e.data.content,
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
    tabClick: function(t) {
        var e = this, a = t.currentTarget.id;
        e.setData({
            sliderOffset: t.currentTarget.offsetLeft,
            activeIndex: t.currentTarget.id,
            finished: !1,
            state: a,
            list: [],
            pageNum: 1
        }), e.getBuyBooks(a, 1);
    },
    toTel: function(t) {
        wx.makePhoneCall({
            phoneNumber: t.currentTarget.dataset.phone
        });
    },
    toDeatil: function(t) {
        var e = t.currentTarget.dataset.orderdetail;
        wx.navigateTo({
            url: "details?id=" + e.id + "&state=" + e.state
        });
    },
    onReachBottom: function() {
        var t = this, e = t.data.state, a = t.data.pageNum;
        if (t.data.finished) return wx.showToast({
            title: "没有更多了",
            icon: "none"
        }), !1;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), t.getBuyBooks(e, a + 1);
    },
    clearExpireOrderInfo: function(t) {
        return new Promise(function(a, o) {
            wx.request({
                url: n.clearExpireOrderInfo,
                data: {
                    sessionKey: t,
                    schoolId: e.globalData.schoolId
                },
                success: function(t) {
                    console.log(t);
                    t.data.date;
                    200 == t.data.type ? a(t.data.date) : (wx.hideLoading(), 0 == t.data.content ? wx.navigateTo({
                        url: "../../bind/index"
                    }) : wx.showToast({
                        title: t.data.content,
                        icon: "none"
                    }));
                },
                fail: function(t) {
                    wx.showToast({
                        title: "系统异常，请稍后重试",
                        icon: "none"
                    }), o("error");
                }
            });
        });
    }
});