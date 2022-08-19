function o(o, t, e) {
    return t in o ? Object.defineProperty(o, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[t] = e, o;
}

var t = getApp(), e = require("../../utils/config.js"), a = "", n = 0;

Page({
    data: {
        money: 100,
        imgRootPath: e.imgRootPath,
        noCover: "../../images/no_cover.png"
    },
    onLoad: function() {
        var o = this;
        a = wx.getStorageSync("3rdsession"), o.getBookFees();
    },
    getBookFees: function() {
        var o = this;
        wx.showLoading({
            title: "加载中.....",
            mask: !0
        }), wx.request({
            url: e.getBookFees,
            data: {
                sessionKey: a,
                schoolId: t.globalData.schoolId
            },
            success: function(t) {
                200 == t.data.type ? (console.log(t), 1 == t.data.content ? (o.setData({
                    vo: t.data.date,
                    books: t.data.date.books
                }), wx.hideLoading()) : (wx.hideLoading(), o.setData({
                    vo: null
                }))) : (wx.hideLoading(), wx.showToast({
                    title: t.data.content,
                    icon: "none"
                }));
            },
            fail: function(o) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    toPay: function() {
        var o = this;
        if (console.log("付款"), 1 == n) return !1;
        n = 1, wx.showLoading({
            title: "支付中.....",
            mask: !0
        }), wx.request({
            url: e.feesToPay,
            data: {
                sessionKey: a,
                schoolId: t.globalData.schoolId
            },
            success: function(t) {
                if (200 == t.data.type) {
                    var e = t.data.content;
                    if (0 == e) return n = 0, wx.hideLoading(), wx.showToast({
                        title: "支付接口调用失败",
                        icon: "none"
                    }), !1;
                    if (2 == e) return o.successPay(t.data.date.id), !1;
                    var a = t.data.date.json, s = t.data.date.id, i = a.data;
                    console.log(i), console.log(i.timeStamp), console.log(i.nonceStr), console.log(i.package), 
                    console.log(i.paySign), o.wxPay(i, s);
                } else n = 0, wx.hideLoading(), wx.showToast({
                    title: t.data.content,
                    icon: "none"
                });
            },
            fail: function(o) {
                n = 0, wx.hideLoading(), wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    wxPay: function(o, t) {
        var e = this;
        wx.hideLoading(), wx.requestPayment({
            timeStamp: o.timeStamp,
            nonceStr: o.nonceStr,
            package: o.package,
            signType: "MD5",
            paySign: o.paySign,
            success: function(o) {
                wx.showLoading({
                    title: "支付中.....",
                    mask: !0
                }), console.log("成功"), e.successPay(t);
            },
            fail: function(o) {
                n = 0, console.log("失败"), e.failPay(t);
            }
        });
    },
    successPay: function(o) {
        wx.request({
            url: e.feesPaySuccess,
            data: {
                sessionKey: a,
                id: o,
                schoolId: t.globalData.schoolId
            },
            success: function(o) {
                200 == o.data.type ? (n = 0, wx.hideLoading(), wx.showToast({
                    title: "支付成功",
                    mask: !0,
                    duration: 2e3,
                    complete: function() {
                        setTimeout(function() {
                            wx.switchTab({
                                url: "/pages/index/index"
                            });
                        }, 2e3);
                    }
                })) : wx.showToast({
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
    failPay: function(o) {
        wx.request({
            url: e.feesPayFail,
            data: {
                sessionKey: a,
                id: o,
                schoolId: t.globalData.schoolId
            },
            success: function(o) {
                200 == o.data.type || wx.showToast({
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
    imgError: function(t) {
        var e = "books[" + t.currentTarget.dataset.index + "].pic";
        this.setData(o({}, e, "no_cover"));
    }
});