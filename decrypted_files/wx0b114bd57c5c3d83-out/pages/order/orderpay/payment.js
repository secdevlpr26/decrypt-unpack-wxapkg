var t = require("../../../utils/server");

Page({
    data: {
        orderId: ""
    },
    onLoad: function(a) {
        var e = getApp(), o = e.globalData.order, n = o.order_id;
        this.setData({
            order: o
        }), console.log("order id : " + n), t.getJSON("/Cart/getWXPayData/user_id/1/order_id/" + n, function(t) {
            e.globalData.wxdata = t.data.result;
        });
    },
    pay: function() {
        var a = getApp(), e = a.globalData.wxdata.wdata, o = e.timeStamp + "", n = e.nonceStr + "", i = e.package, c = e.sign;
        wx.requestPayment({
            nonceStr: n,
            package: i,
            signType: "MD5",
            timeStamp: o,
            paySign: c,
            success: function(e) {
                var o = a.globalData.wxdata.wdata.package, n = a.globalData.order[0].order_id;
                t.getJSON("/Cart/sent_template?" + o + "&order_id=" + n, function(t) {
                    console.log("成功");
                }), console.log(e), wx.showToast({
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