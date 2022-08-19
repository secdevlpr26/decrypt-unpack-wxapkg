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
        key: "",
        records: [],
        histroy: !0,
        noCover: "../../images/no_cover.png",
        HistorySearch: {},
        typeList: [],
        pageNum: 1,
        finished: !1
    },
    goto: function(t) {
        var e = this, a = t.currentTarget.dataset.key;
        "" != (a = a.trim()) && (e.getSearchBook(a, 1), e.dealCache(e, a));
    },
    KeyInput: function(t) {
        this.setData({
            key: t.detail.value
        });
    },
    keyFoucs: function() {
        this.setData({
            histroy: !0
        });
    },
    dealCache: function(t, e) {
        var a = t.data.records;
        a = [ {
            key: e
        } ].concat(a);
        for (var o = 0, i = 1; i < a.length; i++) a[i].key == e && (o = i);
        o > 0 && a.splice(o, 1), a.length > 5 && a.splice(5, 1), t.setData({
            records: a
        }), wx.setStorageSync("records", a);
    },
    lishiSeach: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.key, a = this;
        this.setData({
            key: e
        }), a.getSearchBook(e, 1), a.dealCache(a, e);
    },
    onLoad: function(t) {
        var e = this, a = wx.getStorageSync("records");
        o = wx.getStorageSync("3rdsession"), "" != a && e.setData({
            records: a
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    getSearchBook: function(t, o) {
        var i = this;
        wx.showLoading({
            title: "加载中....",
            mask: !0
        }), wx.request({
            url: a.getSearchBook,
            data: {
                key: t,
                page: o,
                schoolId: e.globalData.schoolId
            },
            success: function(t) {
                if (wx.hideLoading(), 200 == t.data.type) {
                    var e = t.data.date;
                    if (e.length <= 0) return o > 1 ? (wx.showToast({
                        title: "没有更多了",
                        icon: "none"
                    }), i.setData({
                        finished: !0,
                        histroy: !1
                    }), !1) : (i.setData({
                        typeList: [],
                        histroy: !1,
                        finished: !1
                    }), !1);
                    if (1 == o) return i.setData({
                        typeList: e,
                        pageNum: o,
                        histroy: !1,
                        finished: !1
                    }), !1;
                    var a = i.data.typeList.concat(e);
                    i.setData({
                        typeList: a,
                        pageNum: o,
                        histroy: !1
                    });
                } else wx.showToast({
                    title: "系统异常，请稍后再试",
                    icon: "none"
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "系统异常，请稍后再试",
                    icon: "none"
                });
            }
        });
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
    onReachBottom: function() {
        var t = this, e = t.data.pageNum, a = t.data.finished, o = t.data.key;
        if (a) return wx.showToast({
            title: "没有更多了",
            icon: "none"
        }), !1;
        t.getSearchBook(o, e + 1);
    }
});