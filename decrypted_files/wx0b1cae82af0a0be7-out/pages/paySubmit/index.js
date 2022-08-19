var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/api"));

getApp();

Page({
    data: {
        options: [ {
            label: "余额支付",
            value: "1",
            checked: !0
        }, {
            label: "微信支付",
            value: "2",
            checked: !1
        } ],
        payway: 1,
        orderSn: null
    },
    paywayChange: function(e) {
        this.data.payway = e.detail.value, this.data.options.forEach(function(a) {
            a.checked = a.value == e.detail.value;
        }), this.setData({
            options: this.data.options
        });
    },
    pay: function() {
        "1" == this.data.payway ? e.default.balancePay("/serviceOrder/balancePay", {
            orderSn: this.data.orderSn
        }).then(function(e) {
            wx.setStorageSync("orderDelete", !0), wx.showToast({
                title: "支付成功",
                icon: "success",
                duration: 1e3,
                success: function() {
                    console.log("chenggong");
                }
            }), setTimeout(function() {
                wx.switchTab({
                    url: "../orderList/index"
                });
            }, 500);
        }) : this.wxPay();
    },
    wxPay: function() {
        var a = "";
        wx.getStorageSync("oauthInfo") && (a = wx.getStorageSync("oauthInfo").open_id), 
        e.default.wxPaySign("/serviceOrder/wechat/mini", {
            openId: a,
            couponId: "",
            pay_type: 6,
            source: 8,
            orderSn: this.data.orderSn
        }).then(function(e) {
            var a = e.result.wechat;
            wx.requestPayment({
                timeStamp: a.timeStamp,
                nonceStr: a.nonceStr,
                package: a.packageValue,
                signType: "MD5",
                paySign: a.paySign,
                success: function(e) {
                    wx.setStorageSync("orderDelete", !0), wx.switchTab({
                        url: "../orderList/index"
                    });
                },
                fail: function() {
                    wx.navigateBack();
                }
            });
        });
    },
    onLoad: function(a) {
        var t = this;
        this.data.orderSn = a.orderSn, e.default.payReadyData("/serviceOrder/payReady", {
            orderNo: this.data.orderSn
        }).then(function(e) {
            t.data.options = [ {
                label: "余额支付：" + e.result.balance,
                value: "1",
                checked: !0
            }, {
                label: "微信支付",
                value: "2",
                checked: !1
            } ], t.setData({
                options: t.data.options,
                orderType: e.result.orderType,
                totalPrice: e.result.totalPrice,
                orderSn: t.data.orderSn
            });
        });
    }
});