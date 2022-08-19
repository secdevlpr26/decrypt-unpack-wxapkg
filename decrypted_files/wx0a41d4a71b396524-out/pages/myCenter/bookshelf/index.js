function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var t = getApp(), n = "", o = "", a = 0, s = require("../../../utils/config.js");

Page({
    data: {
        imgRootPath: s.imgRootPath,
        noCover: "../../../images/no_cover.png",
        needBind: !1,
        none: !1,
        ckBool: !1,
        askState: 0
    },
    toOrder: function(e) {
        var t = this;
        if (1 == a) return !1;
        a = 1;
        var n = t.data.signItems;
        (null == n || n.length <= 0) && (wx.showToast({
            title: "借书架没有书籍",
            icon: "none"
        }), a = 0);
        for (var o = [], s = 0, i = n.length; s < i; ++s) 1 == n[s].checked && o.push(n[s].id);
        if (o.length <= 0) return wx.showToast({
            title: "请选择要预约的书籍",
            icon: "none"
        }), a = 0, !1;
        var c = wx.getStorageSync("buyMemberInfo");
        console.log(c), c && 1 == c.success ? (a = 0, wx.navigateTo({
            url: "../../member/member"
        })) : (console.log(o), t.canBorrow(o));
    },
    canBorrow: function(e) {
        wx.showLoading({
            title: "去预约.....",
            mask: !0
        }), wx.request({
            url: s.getPromptMsg,
            data: {
                sessionKey: n,
                schoolId: t.globalData.schoolId,
                ids: e
            },
            success: function(t) {
                if (console.log("提示消息"), console.log(t), 200 != t.data.type) return wx.hideLoading(), 
                a = 0, wx.showToast({
                    title: "系统错误，无法预约",
                    mask: !0
                }), !1;
                var n = t.data.content;
                if (0 == n) return a = 0, wx.navigateTo({
                    url: "/pages/bind/index"
                }), !1;
                if (1 == n) {
                    var o = t.data.date;
                    if (o.success) return wx.hideLoading(), a = 0, wx.navigateTo({
                        url: "order?ids=" + e
                    }), !1;
                    wx.hideLoading(), a = 0;
                    var s = o.type;
                    if (0 == s) return wx.showModal({
                        title: "借阅超期",
                        content: o.msg,
                        showCancel: !1,
                        success: function(e) {
                            e.confirm ? wx.navigateTo({
                                url: "../myCenter/fine/index"
                            }) : e.cancel;
                        }
                    }), !1;
                    if (1 == s) return wx.showModal({
                        title: "书籍损坏",
                        content: o.msg,
                        showCancel: !1,
                        success: function(e) {
                            e.confirm ? wx.navigateTo({
                                url: "../myCenter/fine/index"
                            }) : e.cancel;
                        }
                    }), !1;
                    if (2 == s) return wx.showToast({
                        title: o.msg,
                        icon: "none"
                    }), !1;
                    if (3 == s) return wx.showToast({
                        title: o.msg,
                        icon: "none"
                    }), !1;
                    if (5 == s) wx.showToast({
                        title: t.data.concat,
                        icon: "none"
                    }); else if (6 == s) return wx.showModal({
                        title: "借阅费用",
                        content: o.msg,
                        showCancel: !1,
                        success: function(e) {
                            e.confirm ? wx.navigateTo({
                                url: "../../pay/index"
                            }) : e.cancel;
                        }
                    }), !1;
                }
            },
            fail: function(e) {}
        });
    },
    imgError: function(t) {
        var n = "items[" + t.currentTarget.dataset.index + "].pic1";
        this.setData(e({}, n, "no_cover"));
    },
    checkboxChange: function(e) {
        for (var t = this.data.signItems, n = e.detail.value, o = 0, a = 0, s = t.length; a < s; ++a) {
            t[a].checked = !1;
            for (var i = 0, c = n.length; i < c; ++i) if (t[a].id == n[i]) {
                t[a].checked = !0, o++;
                break;
            }
        }
        this.setData({
            signItems: t,
            sum: o
        });
    },
    bookDetail: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../../article/index?id=" + t
        });
    },
    delBook: function(e) {
        for (var t = this, n = e.currentTarget.dataset.id, a = t.data.sum, s = wx.getStorageSync("signItems" + o) || [], i = 0, c = s.length; i < c; ++i) if (s[i].id === n) {
            s.splice(i, 1), (a -= 1) <= 0 && (a = 0);
            break;
        }
        wx.removeStorage({
            key: "checkStatus:" + n,
            success: function(e) {
                wx.showToast({
                    title: "移除成功",
                    icon: "success",
                    durantion: 2e3
                });
            }
        }), s.length <= 0 || null == s ? wx.removeStorage({
            key: "signItems" + o,
            success: function(e) {
                wx.showToast({
                    title: "移除成功",
                    icon: "success",
                    durantion: 2e3
                });
            }
        }) : (wx.removeStorage({
            key: "signItems" + o,
            success: function(e) {}
        }), wx.setStorage({
            key: "signItems" + o,
            data: s,
            success: function(e) {
                wx.showToast({
                    title: "移除成功",
                    icon: "success",
                    durantion: 2e3
                });
            }
        })), t.setData({
            signItems: s,
            sum: a
        }), s.length <= 0 || null == s ? t.setData({
            noData: !0
        }) : t.setData({
            noData: !1
        });
    },
    onLoad: function() {
        o = wx.getStorageSync("schoolId"), n = wx.getStorageSync("3rdsession"), 1 == t.globalData.readerType || this.setData({
            needBind: !0
        }), wx.showLoading({
            title: "加载中.....",
            mask: !0
        }), this.loadSigns();
    },
    onShow: function() {
        o = wx.getStorageSync("schoolId"), n = wx.getStorageSync("3rdsession");
        var e = this;
        e.setData({
            ckBool: !1
        }), e.getMyBookShelf();
    },
    checkAll: function(e) {
        var t = this, n = t.data.signItems, o = 0;
        if (n.length <= 0) return !1;
        var a = !t.data.ckBool;
        t.data.ckBool = a;
        for (var s = 0, i = n.length; s < i; ++s) n[s].checked = a;
        o = 0 == a ? 0 : n.length, t.setData({
            signItems: n,
            sum: o
        });
    },
    getMyBookShelf: function() {
        var e = this;
        wx.request({
            url: s.getMyBookShelf,
            data: {
                sessionKey: n,
                schoolId: t.globalData.schoolId
            },
            success: function(t) {
                if (200 == t.data.type) {
                    var n = t.data.date;
                    e.setData({
                        sum: n.sum,
                        items: n.list
                    });
                } else wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    loadSigns: function() {
        var e = this;
        console.log(">>>>>收藏夹的数据>>>>");
        var t = wx.getStorageSync("signItems" + o) || [], n = 0;
        null != t && t.length > 0 ? (n = t.length, e.setData({
            noData: !1
        })) : e.setData({
            noData: !0
        }), e.setData({
            signItems: t,
            sum: n
        }), wx.hideLoading();
    }
});