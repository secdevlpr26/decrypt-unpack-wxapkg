var e = getApp(), t = require("../../config.js"), o = require("./ShopUtil.js");

Page({
    data: {
        codee: 0,
        money: 0,
        buttonClicked: !1,
        moneyNum: 0
    },
    onLoad: function(t) {
        n = this;
        this.setData({
            codee: n.options.codee ? n.options.codee : 0
        });
        var n = this, a = function() {
            n.isLogin();
        }, i = function() {
            o.showRegUI({
                onClose: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            });
        };
        e.globalData.WebUserID ? a() : e.login({
            success: a,
            fail: i,
            forcereg: i
        });
    },
    isLogin: function() {
        setTimeout(function() {
            e.globalData.WebUserID || o.showRegUI({
                onClose: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            });
        }, 2e3);
    },
    onShow: function() {},
    onShareAppMessage: function() {},
    moneyInput: function(e) {
        var t = this, o = e.detail.value;
        t.data.moneyNum;
        this.setData({
            moneyNum: o
        });
    },
    formSubmit: function(o) {
        var n = o.detail.value.money, a = this;
        if (a.setData({
            buttonClicked: !0
        }), setTimeout(function() {
            a.setData({
                buttonClicked: !1
            });
        }, 500), 0 != a.data.moneyNum && a.data.moneyNum >= .01) {
            !function(o, n) {
                "1" != t.SKIP_WXPAY ? e.wxPay(0, {
                    money: n,
                    success: function() {
                        wx.navigateBack({
                            delta: 2
                        });
                    },
                    fail: function(t) {
                        console.log(t), e.showModal({
                            title: "提示",
                            content: "支付失败"
                        });
                    }
                }) : funcPayOrder(o);
            }(0, n);
        } else e.showModal({
            title: "提示",
            content: "请输入正确的充值金额",
            showCancel: !1
        });
    }
});