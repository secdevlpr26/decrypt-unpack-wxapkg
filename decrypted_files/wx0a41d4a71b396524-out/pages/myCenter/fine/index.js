function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = getApp(), a = "", o = require("../../../utils/config.js"), n = (require("../../../utils/util.js"), 
0);

Page({
    data: {
        imgRootPath: o.imgRootPath,
        noCover: "../../../images/no_cover.png",
        tabs: [ "超期借阅", "损坏赔偿" ],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0
    },
    onLoad: function() {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    sliderLeft: (t.windowWidth / e.data.tabs.length - 96) / 2,
                    sliderOffset: t.windowWidth / e.data.tabs.length * e.data.activeIndex
                });
            }
        }), a = wx.getStorageSync("3rdsession"), e.getExceedMoney(), e.getDamageMoney();
    },
    tabClick: function(e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    getExceedMoney: function() {
        var e = this;
        wx.request({
            url: o.getExceedMoney,
            data: {
                sessionKey: a,
                schoolId: t.globalData.schoolId
            },
            success: function(t) {
                200 == t.data.type ? 1 == t.data.content ? e.setData({
                    exceed: t.data.date,
                    exceedBooks: t.data.date.books
                }) : e.setData({
                    exceed: null
                }) : wx.showToast({
                    title: t.data.content,
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
    getDamageMoney: function() {
        var e = this;
        wx.request({
            url: o.getDamageMoney,
            data: {
                sessionKey: a,
                schoolId: t.globalData.schoolId
            },
            success: function(t) {
                200 == t.data.type ? 1 == t.data.content ? e.setData({
                    damage: t.data.date,
                    damageBooks: t.data.date.books
                }) : e.setData({
                    damage: null
                }) : wx.showToast({
                    title: t.data.content,
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
    toExceedPay: function() {
        var e = this;
        if (1 == n) return !1;
        n = 1, wx.showLoading({
            title: "加载中.....",
            mask: !0
        }), wx.request({
            url: o.exceedToPay,
            data: {
                sessionKey: a,
                schoolId: t.globalData.schoolId
            },
            success: function(t) {
                if (200 == t.data.type) {
                    var a = t.data.content;
                    if (0 == a) return n = 0, wx.hideLoading(), wx.showToast({
                        title: "支付接口调用失败",
                        icon: "none"
                    }), !1;
                    if (2 == a) return e.exceedSuccessPay(t.data.date.id), !1;
                    var o = t.data.date.json, i = t.data.date.id, s = o.data;
                    e.wxExceedPay(s, i);
                } else n = 0, wx.hideLoading(), wx.showToast({
                    title: t.data.content,
                    icon: "none"
                });
            },
            fail: function(e) {
                n = 0, wx.hideLoading(), wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    wxExceedPay: function(e, t) {
        var a = this;
        wx.hideLoading(), wx.requestPayment({
            timeStamp: e.timeStamp,
            nonceStr: e.nonceStr,
            package: e.package,
            signType: "MD5",
            paySign: e.paySign,
            success: function(e) {
                a.exceedSuccessPay(t);
            },
            fail: function(e) {
                a.exceedFailPay(t);
            }
        });
    },
    exceedSuccessPay: function(e) {
        wx.request({
            url: o.exceedPaySuccess,
            data: {
                sessionKey: a,
                schoolId: t.globalData.schoolId,
                id: e
            },
            success: function(e) {
                n = 0, wx.hideLoading(), 200 == e.data.type ? wx.showToast({
                    title: "支付成功",
                    icon: "none",
                    duration: 1500,
                    complete: function() {
                        setTimeout(function() {
                            wx.switchTab({
                                url: "/pages/index/index"
                            });
                        }, 1500);
                    }
                }) : wx.showToast({
                    title: e.data.content,
                    icon: "none"
                });
            },
            fail: function(e) {
                n = 0, wx.hideLoading(), wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    exceedFailPay: function(e) {
        wx.request({
            url: o.exceedPayFail,
            data: {
                sessionKey: a,
                schoolId: t.globalData.schoolId,
                id: e
            },
            success: function(e) {
                n = 0, wx.hideLoading(), 200 == e.data.type || wx.showToast({
                    title: e.data.content,
                    icon: "none"
                });
            },
            fail: function(e) {
                n = 0, wx.hideLoading(), wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    toDamagePay: function() {
        var e = this;
        if (1 == n) return !1;
        n = 1, wx.showLoading({
            title: "加载中.....",
            mask: !0
        }), wx.request({
            url: o.damageToPay,
            data: {
                sessionKey: a,
                schoolId: t.globalData.schoolId
            },
            success: function(t) {
                if (200 == t.data.type) {
                    var a = t.data.content;
                    if (0 == a) return n = 0, wx.hideLoading(), wx.showToast({
                        title: "支付接口调用失败",
                        icon: "none"
                    }), !1;
                    if (2 == a) return e.damageSuccessPay(t.data.date.id), !1;
                    var o = t.data.date.json, i = t.data.date.id, s = o.data;
                    e.wxDamagePay(s, i);
                } else n = 0, wx.hideLoading(), wx.showToast({
                    title: t.data.content,
                    icon: "none"
                });
            },
            fail: function(e) {
                n = 0, wx.hideLoading(), wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    wxDamagePay: function(e, t) {
        var a = this;
        n = 0, wx.requestPayment({
            timeStamp: e.timeStamp,
            nonceStr: e.nonceStr,
            package: e.package,
            signType: "MD5",
            paySign: e.paySign,
            success: function(e) {
                a.damageSuccessPay(t);
            },
            fail: function(e) {
                a.damageFailPay(t);
            }
        });
    },
    damageSuccessPay: function(e) {
        wx.request({
            url: o.damagePaySuccess,
            data: {
                sessionKey: a,
                id: e,
                schoolId: t.globalData.schoolId
            },
            success: function(e) {
                n = 0, wx.hideLoading(), 200 == e.data.type ? wx.showToast({
                    title: "支付成功",
                    icon: "none",
                    duration: 1500,
                    complete: function() {
                        setTimeout(function() {
                            wx.switchTab({
                                url: "/pages/index/index"
                            });
                        }, 1500);
                    }
                }) : (n = 0, wx.hideLoading(), wx.showToast({
                    title: e.data.content,
                    icon: "none"
                }));
            },
            fail: function(e) {
                n = 0, wx.hideLoading(), wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    damageFailPay: function(e) {
        wx.request({
            url: o.damagePayFail,
            data: {
                sessionKey: a,
                id: e,
                schoolId: t.globalData.schoolId
            },
            success: function(e) {
                n = 0, wx.hideLoading(), 200 == e.data.type || wx.showToast({
                    title: e.data.content,
                    icon: "none"
                });
            },
            fail: function(e) {
                n = 0, wx.hideLoading(), wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    exceedImgError: function(t) {
        var a = "exceedBooks[" + t.currentTarget.dataset.index + "].pic";
        this.setData(e({}, a, "no_cover"));
    },
    damageImgError: function(t) {
        var a = "damageBooks[" + t.currentTarget.dataset.index + "].pic";
        this.setData(e({}, a, "no_cover"));
    },
    toTel: function(e) {
        wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.phone
        });
    }
});