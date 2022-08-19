function t(t, o, e) {
    return o in t ? Object.defineProperty(t, o, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[o] = e, t;
}

var o = getApp(), e = require("../../utils/config.js"), a = require("../../wxParse/wxParse.js"), n = "", s = "", i = 0, c = 0;

Page({
    data: {
        imgRootPath: e.imgRootPath,
        type: 0,
        noCover: "../../images/no_cover.png",
        starUrl: "../../images/addsign_01.png",
        cartsUrl: "../../images/addcarts.png",
        cartsAdd: "../../images/addcarts_add.png",
        checkStatus: "nocheck",
        cartsStatus: !1,
        msg: "收藏"
    },
    onLoad: function(t) {
        console.log(t);
        var e = this;
        if (n = wx.getStorageSync("3rdsession"), s = wx.getStorageSync("schoolId"), i = t.id, 
        0 == o.globalData.readerType) return wx.showToast({
            title: "未注册，请先注册用户。",
            icon: "none",
            mask: !0
        }), setTimeout(function() {
            wx.navigateBack();
        }, 1500), !1;
        e.getBookDetails(), e.loadCheckStatus(i);
    },
    bookImgError: function() {
        this.setData(t({}, "book.pic1", "no_cover"));
    },
    imgError: function(o) {
        var e = "recs[" + o.currentTarget.dataset.index + "].pic1";
        this.setData(t({}, e, "no_cover"));
    },
    getBookDetails: function() {
        var t = this;
        wx.request({
            url: e.getBookDetails + i,
            data: {
                sessionKey: n,
                schoolId: o.globalData.schoolId
            },
            success: function(e) {
                if (console.log("获取书籍详情", e), 200 == e.data.type) {
                    o.globalData.readerType = e.data.date.type;
                    var n = e.data.date.book.bookintr ? e.data.date.book.bookintr : "";
                    a.wxParse("bookintr", "html", n, t, 5), t.setData({
                        book: e.data.date.book,
                        type: e.data.date.type,
                        recs: e.data.date.recs
                    });
                } else wx.showToast({
                    title: e.data.content ? e.data.content : "未注册，请先注册用户。",
                    icon: "none",
                    mask: !0
                }), setTimeout(function() {
                    wx.navigateBack();
                }, 1500);
            },
            fail: function(t) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    orderBook: function(t) {
        var e = this, a = t.currentTarget.dataset.id, n = [];
        if (n.push(a), 0 == o.globalData.readerType) return wx.navigateTo({
            url: "../bind/index"
        }), !1;
        var s = wx.getStorageSync("buyMemberInfo");
        s ? 1 == s.success ? wx.navigateTo({
            url: "../member/member"
        }) : e.canBorrow(n) : (console.log(n), e.canBorrow(n));
    },
    toOther: function(t) {
        wx.navigateTo({
            url: "index?id=" + t.currentTarget.dataset.id
        });
    },
    addBookcase: function(t) {
        var a = this, s = t.currentTarget.dataset.id;
        wx.request({
            url: e.addBookcase,
            data: {
                sessionKey: n,
                schoolId: o.globalData.schoolId,
                id: s
            },
            success: function(t) {
                if (200 == t.data.type) {
                    if (0 == t.data.content) return wx.navigateTo({
                        url: "../bind/index"
                    }), !1;
                    a.getBookDetails(), wx.showToast({
                        title: "加入成功",
                        icon: "none"
                    });
                } else wx.showToast({
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
    canBorrow: function(t) {
        wx.showLoading({
            title: "去预约.....",
            mask: !0
        }), wx.request({
            url: e.getPromptMsg,
            data: {
                sessionKey: n,
                schoolId: o.globalData.schoolId,
                ids: t
            },
            success: function(o) {
                if (console.log(o), wx.hideLoading(), 200 != o.data.type) return c = 0, wx.showToast({
                    title: "系统错误，无法预约",
                    mask: !0
                }), !1;
                var e = o.data.content;
                if (0 == e) return wx.navigateTo({
                    url: "/pages/bind/index"
                }), !1;
                if (1 == e) {
                    var a = o.data.date;
                    if (a.success) return c = 0, wx.navigateTo({
                        url: "../bookshelf/order?ids=" + t
                    }), !1;
                    c = 0;
                    var n = a.type;
                    if (0 == n) return wx.showModal({
                        title: "借阅超期",
                        content: "您有超期书籍滞纳金未缴纳，请缴纳后借阅",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm ? wx.navigateTo({
                                url: "../myCenter/fine/index"
                            }) : t.cancel;
                        }
                    }), !1;
                    if (1 == n) return wx.showModal({
                        title: "书籍损坏",
                        content: "您有书籍损坏赔偿未缴纳，请缴纳后借阅",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm ? wx.navigateTo({
                                url: "../myCenter/fine/index"
                            }) : t.cancel;
                        }
                    }), !1;
                    if (2 == n) return wx.showToast({
                        title: o.data.date.msg,
                        icon: "none"
                    }), !1;
                    if (3 == n) return wx.showToast({
                        title: "您有超期未还书籍，请尽快归还",
                        icon: "none"
                    }), !1;
                    if (5 == n) ; else if (6 == n) return wx.showModal({
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
    onReady: function() {},
    onShow: function() {
        n = wx.getStorageSync("3rdsession"), s = wx.getStorageSync("schoolId");
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    toCreateOrder: function(t) {
        if (wx.getStorageSync("buyMemberInfo")) {
            t.currentTarget.dataset.id;
            var o = {
                id: i,
                num: 1
            };
            (e = []).push(o);
            n = JSON.stringify(e);
            wx.navigateTo({
                url: "../carts/buybookpay/buy?bookId=" + n + "&type=5"
            });
        } else {
            t.currentTarget.dataset.id;
            var e = [], a = {
                id: i,
                num: 1
            };
            e.push(a);
            var n = JSON.stringify(e);
            wx.navigateTo({
                url: "../carts/buybookpay/buy?bookId=" + n + "&type=5"
            });
        }
    },
    addCarts: function(t) {
        console.log(t);
        var o = this, e = t.currentTarget.dataset.bookid, a = wx.getStorageSync("cartItems" + s) || [];
        if (a.find(function(t) {
            return t.id === e;
        })) wx.showModal({
            content: "购物车已存在",
            showCancel: !1,
            success: {}
        }); else {
            if (null != a && a.length > 0 && a.length > 20) return wx.showToast({
                title: "购物车已装满了",
                icon: "none",
                durantion: 2e3
            }), !1;
            a.push({
                id: o.data.book.id,
                bookNum: 1,
                price: o.data.book.price,
                bookName: o.data.book.bookName,
                categroyId: o.data.book.categroyId,
                isbn: o.data.book.isbn,
                author: o.data.book.author,
                pubDate: o.data.book.pubDate,
                press: o.data.book.press,
                bookintr: o.data.book.bookintr,
                pic1: o.data.book.pic1,
                bookInfo: o.data.book.bookInfo,
                isHot: o.data.book.isHot,
                isNew: o.data.book.isNew,
                schoolId: o.data.book.schoolId,
                tagId: o.data.book.tagId,
                borrowNum: o.data.book.borrowNum,
                isDel: o.data.book.isDel,
                checked: !1
            }), wx.setStorage({
                key: "cartItems" + s,
                data: a,
                success: function(t) {
                    wx.showToast({
                        title: "添加购物车",
                        icon: "success",
                        durantion: 2e3
                    }), o.loadCheckStatus(i);
                }
            });
        }
    },
    addSign: function(t) {
        console.log("更换图标"), console.log(t), console.log(s);
        var o = this, e = t.currentTarget.dataset.check, a = t.currentTarget.dataset.bookid, n = [], i = wx.getStorageSync("signItems" + s) || [];
        "nocheck" === e ? (null != n && n.length > 0 && n.splice(0, 1), n.push({
            starUrl: "../../images/addsign_02.png",
            checkStatus: "checked"
        }), wx.setStorage({
            key: "checkStatus:" + a,
            data: n,
            success: function(t) {}
        }), o.addSignStorageSync(a, i)) : (null != n && n.length > 0 && n.splice(0, 1), 
        n.push({
            starUrl: "../../images/addsign_01.png",
            checkStatus: "nocheck"
        }), wx.setStorage({
            key: "checkStatus:" + a,
            data: n,
            success: function(t) {}
        }), o.clearSignStorageSync(a, i)), o.setData({
            checkStatusAry: n
        });
    },
    checkStatusImgError: function() {
        this.setData(t({}, "../../images/addsign_01.png", "starUrl"));
    },
    addSignStorageSync: function(t, o) {
        var e = this;
        if (!o.find(function(o) {
            return o.id === t;
        })) {
            if (null != o && o.length > 0 && o.length > 20) return wx.showToast({
                title: "收藏夹已装满了",
                icon: "none",
                durantion: 2e3
            }), !1;
            o.push({
                id: t,
                bookNum: 1,
                price: e.data.book.price,
                bookName: e.data.book.bookName,
                categroyId: e.data.book.categroyId,
                isbn: e.data.book.isbn,
                author: e.data.book.author,
                pubDate: e.data.book.pubDate,
                press: e.data.book.press,
                bookintr: e.data.book.bookintr,
                pic1: e.data.book.pic1,
                bookInfo: e.data.book.bookInfo,
                isHot: e.data.book.isHot,
                isNew: e.data.book.isNew,
                schoolId: e.data.book.schoolId,
                tagId: e.data.book.tagId,
                borrowNum: e.data.book.borrowNum,
                isDel: e.data.book.isDel,
                checked: !1,
                checkStatus: "nocheck"
            }), wx.setStorage({
                key: "signItems" + s,
                data: o,
                success: function(t) {
                    wx.showToast({
                        title: "收藏成功",
                        icon: "success",
                        durantion: 2e3
                    });
                }
            });
        }
    },
    clearSignStorageSync: function(t, o) {
        for (var e = 0, a = o.length; e < a; ++e) if (o[e].id == i) {
            o.splice(e, 1);
            break;
        }
        o.length <= 0 || null == o ? wx.removeStorage({
            key: "signItems" + s,
            success: function(t) {
                wx.showToast({
                    title: "取消收藏",
                    icon: "success",
                    durantion: 2e3
                });
            }
        }) : (wx.removeStorage({
            key: "signItems" + s,
            success: function(t) {}
        }), wx.setStorage({
            key: "signItems" + s,
            data: o,
            success: function(t) {
                wx.showToast({
                    title: "取消收藏",
                    icon: "success",
                    durantion: 2e3
                });
            }
        }));
    },
    loadCheckStatus: function(t) {
        var o = this, e = wx.getStorageSync("checkStatus:" + t);
        o.setData({
            checkStatusAry: e
        });
        var a = wx.getStorageSync("cartItems" + s) || [];
        console.log(a);
        var n = a.find(function(o) {
            return o.id == t;
        });
        console.log("购物车", n), n && o.setData({
            cartsStatus: !0
        });
    }
});