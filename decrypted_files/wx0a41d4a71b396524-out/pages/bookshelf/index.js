function t(t, e, o) {
    return e in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = o, t;
}

var e = getApp(), o = "", n = 0, a = require("../../utils/config.js");

Page({
    data: {
        imgRootPath: a.imgRootPath,
        noCover: "../../images/no_cover.png",
        needBind: !1
    },
    toOrder: function(t) {
        var e = this;
        if (1 == n) return !1;
        n = 1;
        var o = e.data.items;
        (null == o || o.length <= 0) && (wx.showToast({
            title: "借书架没有书籍",
            icon: "none"
        }), n = 0);
        for (var a = [], i = 0, s = o.length; i < s; ++i) 1 == o[i].checked && a.push(o[i].id);
        if (a.length <= 0) return wx.showToast({
            title: "请选择要预约的书籍",
            icon: "none"
        }), n = 0, !1;
        e.canBorrow(a);
    },
    canBorrow: function(t) {
        wx.showLoading({
            title: "去预约.....",
            mask: !0
        }), wx.request({
            url: a.getPromptMsg,
            data: {
                sessionKey: o,
                schoolId: e.globalData.schoolId
            },
            success: function(e) {
                if (200 != e.data.type) return wx.hideLoading(), n = 0, wx.showToast({
                    title: "系统错误，无法预约",
                    mask: !0
                }), !1;
                var o = e.data.content;
                if (0 == o) return n = 0, wx.navigateTo({
                    url: "/pages/bind/index"
                }), !1;
                if (1 == o) {
                    var a = e.data.date;
                    if (a.success) return wx.hideLoading(), n = 0, wx.navigateTo({
                        url: "order?ids=" + t
                    }), !1;
                    wx.hideLoading(), n = 0;
                    var i = a.type;
                    if (0 == i) return wx.showModal({
                        title: "借阅超期",
                        content: "您有超期书籍滞纳金未缴纳，请缴纳后借阅",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm ? wx.navigateTo({
                                url: "../myCenter/fine/index"
                            }) : t.cancel;
                        }
                    }), !1;
                    if (1 == i) return wx.showModal({
                        title: "书籍损坏",
                        content: "您有书籍损坏赔偿未缴纳，请缴纳后借阅",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm ? wx.navigateTo({
                                url: "../myCenter/fine/index"
                            }) : t.cancel;
                        }
                    }), !1;
                    if (2 == i) return !1;
                    if (3 == i) return wx.showToast({
                        title: "您有超期未还书籍，请尽快归还",
                        icon: "none"
                    }), !1;
                    if (5 == i) ; else if (6 == i) return wx.showModal({
                        title: "借阅费用",
                        content: "您有书籍借阅费用未缴纳",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm ? wx.navigateTo({
                                url: "../pay/index"
                            }) : t.cancel;
                        }
                    }), !1;
                }
            },
            fail: function(t) {}
        });
    },
    imgError: function(e) {
        var o = "items[" + e.currentTarget.dataset.index + "].pic1";
        this.setData(t({}, o, "no_cover"));
    },
    checkboxChange: function(t) {
        for (var e = this.data.items, o = t.detail.value, n = 0, a = e.length; n < a; ++n) {
            e[n].checked = !1;
            for (var i = 0, s = o.length; i < s; ++i) if (e[n].id == o[i]) {
                e[n].checked = !0;
                break;
            }
        }
        this.setData({
            items: e
        });
    },
    delBook: function(t) {
        var n = this, i = t.currentTarget.dataset.id;
        wx.request({
            url: a.delBookcase,
            data: {
                sessionKey: o,
                id: i,
                schoolId: e.globalData.schoolId
            },
            success: function(t) {
                200 == t.data.type ? (n.getMyBookShelf(), wx.showToast({
                    title: t.data.content,
                    icon: "none"
                })) : wx.showToast({
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
    onLoad: function() {
        o = wx.getStorageSync("3rdsession"), 1 == e.globalData.readerType || this.setData({
            needBind: !0
        });
    },
    onShow: function() {
        var t = this;
        t.setData({
            ckBool: !1
        }), t.getMyBookShelf();
    },
    checkAll: function(t) {
        var e = this, o = e.data.items;
        if (o.length <= 0) return !1;
        var n = !e.data.ckBool;
        e.data.ckBool = n;
        for (var a = 0, i = o.length; a < i; ++a) o[a].checked = n;
        e.setData({
            items: o
        });
    },
    getMyBookShelf: function() {
        var t = this;
        wx.request({
            url: a.getMyBookShelf,
            data: {
                sessionKey: o,
                schoolId: e.globalData.schoolId
            },
            success: function(e) {
                if (200 == e.data.type) {
                    var o = e.data.date;
                    t.setData({
                        sum: o.sum,
                        items: o.list
                    });
                } else wx.showToast({
                    title: "系统异常，请稍后重试",
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
    }
});