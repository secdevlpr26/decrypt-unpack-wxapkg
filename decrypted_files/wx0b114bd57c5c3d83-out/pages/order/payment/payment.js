Page({
    data: {
        orderId: ""
    },
    onLoad: function(a) {
        console.log(a);
        var t = a.order_id, e = getApp(), o = e.globalData.order, n = e.globalData.wxdata;
        console.log(n), console.log("order id : " + t), this.setData({
            order: o,
            wxdata: n
        });
    },
    pay: function() {
        var a = getApp(), t = a.globalData.wxdata.wdata, e = t.timeStamp + "", o = t.nonceStr + "", n = t.package, r = t.sign;
        wx.requestPayment({
            nonceStr: o,
            package: n,
            signType: "MD5",
            timeStamp: e,
            paySign: r,
            success: function(t) {
                var e = a.globalData.wxdata.wdata.package, o = a.globalData.order[0].order_id;
                server.getJSON("/Cart/sent_template?" + e + "&order_id=" + o, function(a) {
                    console.log("成功");
                }), wx.showToast({
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