Page({
    data: {
        orderId: ""
    },
    onLoad: function(a) {
        var t = a.order_id, e = getApp(), o = e.globalData.order, n = e.globalData.wxdata;
        console.log("order id : " + t), this.setData({
            order: o,
            wxdata: n
        });
    },
    pay: function() {
        var a = getApp().globalData.wxdata.wdata, t = a.timeStamp + "", e = a.nonceStr + "", o = a.package, n = a.sign;
        wx.requestPayment({
            nonceStr: e,
            package: o,
            signType: "MD5",
            timeStamp: t,
            paySign: n,
            success: function(a) {
                wx.showToast({
                    title: "支付成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.switchTab({
                        url: "../../member/index/index"
                    });
                }, 2e3);
            },
            fail: function(a) {
                wx.showToast({
                    title: "支付失败",
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    }
});