function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

getApp();

var t = require("../../utils/config.js"), a = (require("../../utils/util.js"), ""), o = "";

Page({
    data: {
        noCover: "../../images/no_cover.png",
        imgRootPath: t.imgRootPath,
        buttonClicked: !1,
        cabinetName: "",
        bookId: "",
        isReader: !1,
        coupon: 0,
        couponId: "",
        discounts: 0,
        scoreConfig: null,
        clientId: "",
        barcode: "",
        scoreData: {
            score: 0,
            scoreMoney: 0
        }
    },
    onLoad: function(e) {
        var t = this;
        a = wx.getStorageSync("3rdsession"), o = wx.getStorageSync("schoolId"), void 0 != e && "" != e && (t.setData({
            clientId: e.clientId,
            barcode: e.barcode
        }), wx.showLoading({
            title: "结算中.....",
            mask: !0
        }));
    },
    onShow: function() {
        var e = this;
        e.setData({
            buttonClicked: !1
        }), e.loadpayInfo();
    },
    checkboxChange: function(e) {
        console.log(e.detail.value), this.setData({
            discounts: e.detail.value
        });
    },
    resetScore: function() {
        if (!this.data.scoreConfig) return !1;
        var e = Number((this.data.integral.score / this.data.scoreConfig.rate).toFixed(2)), t = Number((this.data.bookPays.totalRealPay - this.data.coupon).toFixed(2)), a = Number(this.data.scoreConfig.money), o = {};
        if (e > (t = t < 0 ? 0 : t)) {
            var n = Number(1 / this.data.scoreConfig.rate), i = (t / n).toFixed(0);
            o = {
                score: i,
                scoreMoney: Number((Number(i) * n).toFixed(2))
            };
        } else o = {
            score: this.data.integral.score.toFixed(0),
            scoreMoney: e
        };
        if (e >= a) {
            var s = (a * Number(this.data.scoreConfig.rate)).toFixed(0);
            if (o = {
                score: Number(s),
                scoreMoney: a
            }, a > t) {
                var c = Number(1 / this.data.scoreConfig.rate), r = (t / c).toFixed(0);
                o = {
                    score: r,
                    scoreMoney: Number((Number(r) * c).toFixed(2))
                };
            }
        }
        console.log("积分折扣数据", o), this.setData({
            scoreData: o
        });
    },
    loadpayInfo: function() {
        var e = this;
        wx.request({
            url: t.getScanBuyInfo,
            data: {
                sessionKey: a,
                clientId: e.data.clientId,
                barcode: e.data.barcode
            },
            success: function(t) {
                if (wx.hideLoading(), 200 == t.data.type) {
                    var a = t.data.date;
                    e.setData({
                        bookPays: a,
                        books: a.list,
                        cabinetName: a.equipmentName,
                        integral: a.readerAccount
                    }), null == a.scoreConfig || null == a.scoreConfig.value ? e.setData({
                        scoreConfig: null
                    }) : e.setData({
                        scoreConfig: JSON.parse(a.scoreConfig.value)
                    }), e.resetScore(), 1 == a.isReader && e.setData({
                        isReader: !0
                    });
                } else wx.showToast({
                    title: t.data.content,
                    mask: !0,
                    icon: "none"
                }), setTimeout(function() {
                    wx.navigateBack();
                }, 2e3);
            },
            fail: function(e) {
                wx.hideLoading(), wx.showToast({
                    title: "网络异常，请稍后重试",
                    mask: !0,
                    icon: "none"
                });
            }
        });
    },
    tocoupon: function(e) {
        var t = e.currentTarget.dataset.money;
        wx.navigateTo({
            url: "../discount/discount?money=" + t
        });
    },
    buttonClicked: function(e) {
        e.setData({
            buttonClicked: !0
        });
    },
    toOrder: function(e) {
        var a = this;
        a.buttonClicked(a);
        var o = wx.getStorageSync("3rdsession"), n = a.data.scoreConfig, i = a.data.discounts, s = 0;
        s = null == n ? 0 : (i * n.rate).toFixed(0), isNaN(s) && (s = 0), wx.request({
            url: t.scanBuyPay,
            data: {
                sessionKey: o,
                clientId: a.data.clientId,
                score: s,
                couponId: a.data.couponId
            },
            success: function(e) {
                200 == e.data.type ? 1 == e.data.content ? wx.requestPayment({
                    timeStamp: e.data.date.json.data.timeStamp,
                    nonceStr: e.data.date.json.data.nonceStr,
                    package: e.data.date.json.data.package,
                    signType: "MD5",
                    paySign: e.data.date.json.data.paySign,
                    success: function(e) {
                        console.log(">>>>>>>>支付成功>>>>>>"), wx.showToast({
                            title: "购买成功",
                            duration: 2e3
                        }), setTimeout(function() {
                            wx.switchTab({
                                url: "/pages/index/index"
                            });
                        }, 2e3);
                    },
                    fail: function(e) {
                        wx.showToast({
                            title: "您取消了支付。",
                            icon: "none",
                            success: function() {
                                setTimeout(function() {
                                    wx.navigateBack({
                                        delta: 3
                                    });
                                }, 2e3);
                            }
                        });
                    }
                }) : (wx.showToast({
                    title: "购买成功"
                }), setTimeout(function() {
                    wx.switchTab({
                        url: "/pages/index/index"
                    });
                }, 2e3)) : (wx.showToast({
                    title: e.data.content,
                    icon: "none"
                }), a.setData({
                    buttonClicked: !1
                }));
            },
            fail: function(e) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    imgError: function(t) {
        var a = t.currentTarget.dataset.index;
        if (void 0 != a) {
            var o = "books[" + a + "].pic1";
            this.setData(e({}, o, "no_cover"));
        }
    }
});