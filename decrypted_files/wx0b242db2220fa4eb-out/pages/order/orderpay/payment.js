var t = require("../../../utils/server");

Page({
    data: {
        orderId: ""
    },
    onLoad: function(e) {
        var a = getApp(), o = a.globalData.order, n = o.order_id;
        this.setData({
            order: o
        }), console.log("order id : " + n), t.getJSON("/Cart/getWXPayData/user_id/1/order_id/" + n, function(t) {
            a.globalData.wxdata = t.data.result;
        });
    },
    pay: function() {
        var t = getApp().globalData.wxdata.wdata, e = t.timeStamp + "", a = t.nonceStr + "", o = t.package, n = t.sign;
        wx.requestPayment({
            nonceStr: a,
            package: o,
            signType: "MD5",
            timeStamp: e,
            paySign: n,
            success: function(t) {
                console.log(t), wx.showToast({
                    title: "支付成功",
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
    }
});