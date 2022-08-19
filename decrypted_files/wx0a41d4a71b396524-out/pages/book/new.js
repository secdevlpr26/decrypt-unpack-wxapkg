function t(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t;
}

var e = getApp(), n = require("../../utils/config.js"), o = "";

Page({
    data: {
        imgRootPath: n.imgRootPath,
        noCover: "../../images/no_cover.png",
        webType: 0,
        motto: "Hello World",
        userInfo: {},
        hasUserInfo: !1,
        imgUrls: [ "../../images/home_banner.png", "../../images/home_banner.png", "../../images/home_banner.png" ],
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        finished: !1,
        inList: [],
        pageNum: 1
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    getChinese: function(t) {
        var e = /([\u4e00-\u9fa5]|[0-9]|[a-z])/g;
        return t.match(e).join("");
    },
    onLoad: function() {
        var t = this;
        o = wx.getStorageSync("3rdsession"), t.getNewBook(1);
    },
    imgError: function(e) {
        var n = "inList[" + e.currentTarget.dataset.index + "].pic1";
        this.setData(t({}, n, "no_cover"));
    },
    toArticle: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../article/index?id=" + e
        });
    },
    getNewBook: function(t) {
        var o = this;
        wx.request({
            url: n.getNewBook,
            data: {
                page: t,
                schoolId: e.globalData.schoolId
            },
            success: function(e) {
                if (wx.hideLoading(), 200 == e.data.type) {
                    var n = e.data.date;
                    if (n.length <= 0) return t > 1 ? (wx.showToast({
                        title: "没有更多了",
                        icon: "none"
                    }), o.setData({
                        finished: !0
                    }), !1) : (o.setData({
                        inList: []
                    }), !1);
                    for (var a = o.data.inList.concat(n), i = 0; i < a.length; i++) a[i].bookintr ? a[i].bookintr = o.getChinese(a[i].bookintr) : a[i].bookintr = "";
                    o.setData({
                        inList: a,
                        pageNum: t
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
    onShow: function() {},
    onReachBottom: function() {
        var t = this, e = t.data.pageNum;
        if (t.data.finished) return wx.showToast({
            title: "没有更多了",
            icon: "none"
        }), !1;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), t.getNewBook(e + 1);
    }
});