function t(t, e, o) {
    return e in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = o, t;
}

var e = getApp(), o = require("../../utils/config.js"), n = "";

Page({
    data: {
        imgRootPath: o.imgRootPath,
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
    onLoad: function() {
        var t = this;
        n = wx.getStorageSync("3rdsession"), t.getHotBook(1);
    },
    imgError: function(e) {
        var o = "inList[" + e.currentTarget.dataset.index + "].pic1";
        this.setData(t({}, o, "no_cover"));
    },
    toArticle: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../article/index?id=" + e
        });
    },
    getChinese: function(t) {
        var e = /([\u4e00-\u9fa5]|[0-9]|[a-z])/g;
        return t.match(e).join("");
    },
    getHotBook: function(t) {
        var n = this;
        wx.request({
            url: o.getHotBookList,
            data: {
                page: t,
                schoolId: e.globalData.schoolId
            },
            success: function(e) {
                if (wx.hideLoading(), 200 == e.data.type) {
                    var o = e.data.date;
                    if (o.length <= 0) return t > 1 ? (wx.showToast({
                        title: "没有更多了",
                        icon: "none"
                    }), n.setData({
                        finished: !0
                    }), !1) : (n.setData({
                        inList: []
                    }), !1);
                    for (var a = n.data.inList.concat(o), i = 0; i < a.length; i++) a[i].bookintr ? a[i].bookintr = n.getChinese(a[i].bookintr) : a[i].bookintr = "";
                    n.setData({
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
        }), t.getHotBook(e + 1);
    }
});