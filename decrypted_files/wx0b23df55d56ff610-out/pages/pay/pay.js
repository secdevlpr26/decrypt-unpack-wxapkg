getApp();

var t, a = require("../../utils/server");

Page({
    data: {
        id: "",
        show: 0
    },
    onLoad: function(o) {
        t = o.orderid;
        var e = o.order_amount;
        this.setData({
            id: o.id,
            order_amount: e
        });
        var n = this;
        a.getJSON("/User/getOrderDetail", {
            order_id: t
        }, function(t) {
            var a = t.data.result;
            n.setData({
                order: a
            });
        });
    },
    look: function() {
        wx.showToast({
            title: "付款中...",
            icon: "loading",
            duration: 1e4
        });
        var o = getApp(), e = this, n = t;
        console.log("order id : " + n), a.getJSON("/Cart/getWXPayData/user_id/2/order_id/" + n, function(t) {
            wx.hideToast(), o.globalData.wxdata = t.data.result, e.pay();
        });
    },
    pay: function() {
        var t = getApp().globalData.wxdata.wdata, a = t.timeStamp + "", o = t.nonceStr + "", e = t.package, n = t.sign;
        wx.requestPayment({
            nonceStr: o,
            package: e,
            signType: "MD5",
            timeStamp: a,
            paySign: n,
            success: function(t) {
                console.log(t), wx.navigateTo({
                    url: "../pay_success/pay_success"
                });
            },
            fail: function(t) {
                console.log(t), wx.showToast({
                    title: "支付失败",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1,
                        success: function(t) {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, 2e3);
            }
        });
    },
    home: function(t) {
        return void wx.navigateBack({});
    },
    onReady: function() {},
    showVerifyPhone: function() {
        this.setData({
            show: 0
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});