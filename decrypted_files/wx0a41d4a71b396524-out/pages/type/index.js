function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = getApp(), a = require("../../utils/config.js"), o = "";

Page({
    data: {
        imgRootPath: a.imgRootPath,
        winHeight: "",
        currentTab: 0,
        scrollLeft: 0,
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        noCover: "../../images/no_cover.png",
        type: 0,
        pageNum: 1,
        finished: !1,
        typeList: [],
        clickStatus: !0
    },
    toArticle: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../article/index?id=" + e
        });
    },
    imgError: function(e) {
        var a = "typeList[" + e.currentTarget.dataset.index + "].pic1";
        this.setData(t({}, a, "no_cover"));
    },
    buttonClicked: function(t) {
        t.setData({
            clickStatus: !1
        }), setTimeout(function() {
            t.setData({
                clickStatus: !0
            });
        }, 2e3);
    },
    swichNav: function(t) {
        var e = this;
        e.buttonClicked(e);
        var a = t.target.dataset.current, o = t.target.dataset.id;
        if (e.data.currentTaB == a) return !1;
        e.setData({
            currentTab: a,
            type: o,
            finished: !1,
            pageNum: 1,
            typeList: []
        }), e.getBookOfCategroy(o, 1);
    },
    gotoSearch: function(t) {
        wx.navigateTo({
            url: "../search/index"
        });
    },
    onLoad: function() {
        o = wx.getStorageSync("3rdsession"), wx.showLoading({
            title: "加载中.....",
            mask: !0
        }), this.getBookCategory();
    },
    getUserInfo: function(t) {
        e.globalData.userInfo = t.detail.userInfo, this.setData({
            userInfo: t.detail.userInfo,
            hasUserInfo: !0
        });
    },
    getChinese: function(t) {
        var e = /([\u4e00-\u9fa5]|[0-9]|[a-z])/g;
        return t.match(e).join("");
    },
    getBookCategory: function() {
        var t = this;
        wx.request({
            url: a.getBookCategory,
            data: {
                schoolId: e.globalData.schoolId
            },
            success: function(e) {
                if (200 == e.data.type) {
                    var a = e.data.date;
                    a.length && (t.setData({
                        cates: a,
                        type: a[0].id
                    }), t.getBookOfCategroy(a[0].id, 1));
                }
                wx.hideLoading();
            },
            fail: function(t) {
                wx.hideLoading(), wx.showToast({
                    title: "系统异常，无法加载分类数据",
                    icon: "none"
                });
            }
        });
    },
    getBookOfCategroy: function(t, n) {
        var i = this;
        wx.request({
            url: a.getBookOfCategroy + t + "/" + n,
            data: {
                sessionKey: o,
                schoolId: e.globalData.schoolId
            },
            success: function(t) {
                if (wx.hideLoading(), 200 == t.data.type) {
                    var e = t.data.date;
                    if (e.length <= 0) return n > 1 ? (wx.showToast({
                        title: "没有更多了",
                        icon: "none"
                    }), i.setData({
                        finished: !0
                    }), !1) : (i.setData({
                        typeList: []
                    }), !1);
                    for (var a = i.data.typeList.concat(e), o = 0; o < a.length; o++) a[o].bookintr ? a[o].bookintr = i.getChinese(a[o].bookintr) : a[o].bookintr = "";
                    i.setData({
                        typeList: a,
                        pageNum: n
                    });
                } else wx.showToast({
                    title: "系统异常，无法加载书籍数据",
                    icon: "none"
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "系统异常，无法加载书籍数据",
                    icon: "none"
                });
            }
        });
    },
    onReachBottom: function() {
        var t = this, e = t.data.type, a = t.data.pageNum;
        if (t.data.finished) return wx.showToast({
            title: "没有更多了",
            icon: "none"
        }), !1;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), t.getBookOfCategroy(e, a + 1);
    }
});