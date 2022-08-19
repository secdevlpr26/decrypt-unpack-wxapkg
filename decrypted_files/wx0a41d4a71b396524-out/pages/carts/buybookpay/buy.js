function e(e, a, o) {
    return a in e ? Object.defineProperty(e, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = o, e;
}

var a = getApp(), o = require("../../../utils/config.js"), t = require("../../../utils/util.js"), s = "", n = "", d = null, c = null;

Page({
    data: {
        items: [ {
            value: "书柜",
            type: 0,
            imgUrl: "../../../images/express.png"
        }, {
            value: "邮递",
            type: 1,
            imgUrl: "../../../images/ceribe.png"
        } ],
        noCover: "../../../images/no_cover.png",
        imgRootPath: o.imgRootPath,
        buttonClicked: !1,
        choosedEq: !1,
        choosedAddr: !1,
        coupon: 0,
        discounts: 0,
        couponId: ""
    },
    radioChange: function(e) {
        for (var a = this.data.items, o = 0; o < a.length; o++) a[o].checked = a[o].value == e.detail.value;
        this.setData({
            items: a
        });
    },
    checkboxChange: function(e) {
        console.log(e.detail.value), this.setData({
            discounts: e.detail.value
        });
    },
    onLoad: function(e) {
        var o = this;
        s = wx.getStorageSync("3rdsession"), n = wx.getStorageSync("schoolId");
        var i = new Date(), r = t.formatTime(i);
        if (r = r.substring(0, 7).replace("/", "-"), void 0 != e && "" != e) {
            if (void 0 != e.type) {
                var l = e.type;
                c = e.bookId, a.globalData.type = l, a.globalData.bookId = c, o.setData({
                    orderType: l,
                    bookId: c
                }), wx.showLoading({
                    title: "结算中.....",
                    mask: !0
                }), o.loadpayInfo(s, n, c, l);
            } else {
                var u = e.addressName, g = e.addressType, h = e.addressId, f = a.globalData.type, p = a.globalData.bookId;
                o.setData({
                    addressType: g,
                    addressName: u,
                    addressId: h,
                    orderType: f,
                    bookId: p
                }), o.loadpayInfo(s, n, p, f);
            }
            o.setData({
                choosedEq: a.globalData.choosedEq,
                choosedAddr: a.globalData.choosedAddr
            }), void 0 != e.ordersign && "" != e.ordersign && null != e.ordersign && (d = e.ordersign);
        }
        o.getMyScoreRecord(r);
    },
    getMyScoreRecord: function(e) {
        var a = this;
        wx.request({
            url: o.getScoreRecord,
            data: {
                sessionKey: s,
                date: e,
                scId: n
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (console.log("------查询积分记录----"), console.log(e), 200 == e.data.type) if (1 == e.data.content) wx.navigateTo({
                    url: "../bind"
                }); else {
                    var o = e.data.date;
                    a.setData({
                        readerAccount: o.readerAccount
                    });
                } else wx.showToast({
                    title: e.data.content,
                    icon: "none"
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "网络异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        s = wx.getStorageSync("3rdsession"), n = wx.getStorageSync("schoolId");
        var e = this;
        if (1 == e.data.addressType) {
            var o = e.data.bookcase.eqName;
            e.setData({
                address: e.data.bookcase,
                addressName: o,
                buttonClicked: !1
            });
        } else 2 == e.data.addressType && e.setData({
            buttonClicked: !1
        });
        e.setData({
            choosedEq: a.globalData.choosedEq,
            choosedAddr: a.globalData.choosedAdd
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    loadpayInfo: function(e, a, t, s) {
        var n = this;
        wx.request({
            url: o.loadpayInfo,
            data: {
                sessionKey: e,
                bookId: t,
                schoolId: a,
                type: s
            },
            success: function(e) {
                if (200 == e.data.type) {
                    var a = e.data.date;
                    n.setData({
                        bookPays: a,
                        books: a.list,
                        integral: a.readerAccount
                    }), null == a.scoreConfig || null == a.scoreConfig.value ? n.setData({
                        scoreConfig: null
                    }) : n.setData({
                        scoreConfig: JSON.parse(a.scoreConfig.value)
                    }), wx.hideLoading();
                } else setTimeout(function() {
                    wx.showToast({
                        title: e.data.content,
                        icon: "none"
                    }), setTimeout(function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }, 2e3);
                }, 0);
            },
            fail: function(e) {
                wx.showToast({
                    title: "网络异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    tocoupon: function(e) {
        var a = e.currentTarget.dataset.money;
        wx.navigateTo({
            url: "../../discount/discount?money=" + a
        });
    },
    chooseEq: function(e) {
        0 == e.currentTarget.dataset.type && (a.globalData.choosedEq = !0, a.globalData.choosedAddr = !1, 
        this.setData({
            choosedEq: !0,
            choosedAddr: !1
        }), wx.navigateTo({
            url: "../../mailMethod/bookcase/index"
        }));
    },
    chooseAddr: function(e) {
        1 == e.currentTarget.dataset.type && (a.globalData.choosedEq = !1, a.globalData.choosedAddr = !0, 
        this.setData({
            choosedEq: !1,
            choosedAddr: !0
        }), wx.navigateTo({
            url: "../../mailMethod/address/index"
        }));
    },
    buttonClicked: function(e) {
        e.setData({
            buttonClicked: !0
        });
    },
    toOrder: function(e) {
        var t = this;
        t.buttonClicked(t);
        var s = wx.getStorageSync("3rdsession"), n = t.data.scoreConfig, i = t.data.discounts, r = 0;
        r = null == n ? 0 : i * n.rate, isNaN(r) && (r = 0);
        var l = "", u = "";
        if (5 == t.data.orderType) if (l = t.data.addressType, void 0 == t.data.address || null == t.data.address) {
            if (void 0 == t.data.addressId || null == t.data.addressId) return wx.showModal({
                title: "温馨提示",
                content: "请根据邮寄方式选择收货地址",
                showCancel: !1,
                success: {}
            }), !1;
            u = t.data.addressId;
        } else u = t.data.address.id;
        console.log("that.data.couponId", t.data.couponId), wx.request({
            url: o.toBuyBookPay,
            data: {
                sessionKey: s,
                schoolId: a.globalData.schoolId,
                addressType: l,
                addressId: u,
                orderType: t.data.orderType,
                score: r,
                couponId: t.data.couponId
            },
            success: function(e) {
                200 == e.data.type ? 1 == e.data.content ? wx.requestPayment({
                    timeStamp: e.data.date.json.data.timeStamp,
                    nonceStr: e.data.date.json.data.nonceStr,
                    package: e.data.date.json.data.package,
                    signType: "MD5",
                    paySign: e.data.date.json.data.paySign,
                    success: function(e) {
                        wx.showToast({
                            title: "支付成功",
                            icon: "success",
                            mask: !0
                        }), 2 == d && t.clearCartsStorageSync(JSON.parse(c)), setTimeout(function() {
                            wx.switchTab({
                                url: "/pages/index/index"
                            });
                        }, 1500);
                    },
                    fail: function(e) {
                        console.log(">>>>>>>>支付失败>>>>>>"), wx.navigateBack({
                            delta: 3
                        });
                    }
                }) : (wx.showToast({
                    title: "购买成功",
                    icon: "success",
                    mask: !0
                }), setTimeout(function() {
                    wx.switchTab({
                        url: "/pages/index/index"
                    });
                }, 1500)) : (wx.showToast({
                    title: e.data.content,
                    icon: "none"
                }), t.setData({
                    buttonClicked: !1
                }));
            },
            fail: function(e) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            },
            complete: function() {
                t.clearCartsStorageSync(JSON.parse(c)), console.log("清除数据成功了吗");
            }
        });
    },
    clearCartsStorageSync: function(e) {
        for (var a = wx.getStorageSync("cartItems" + n) || [], o = a, t = 0; t < a.length; t++) for (var s = 0; s < e.length; s++) a[t].id == e[s].id && (console.log(a[t].id), 
        console.log(e[s].id), o.splice(t, 1));
        console.log("newArr", o), o.length <= 0 || null == o ? wx.removeStorage({
            key: "cartItems",
            success: function(e) {}
        }) : wx.setStorage({
            key: "cartItems" + n,
            data: o,
            success: function(e) {}
        });
    },
    imgError: function(a) {
        var o = a.currentTarget.dataset.index;
        if (void 0 != o) {
            var t = "books[" + o + "].pic1";
            this.setData(e({}, t, "no_cover"));
        }
    }
});