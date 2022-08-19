var n = require("../../../utils/server");

Page({
    data: {},
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    money: function(n) {
        var t = n.detail.value;
        this.setData({
            money: t
        });
    },
    pay: function() {
        if ("" != this.data.money && void 0 != this.data.money) {
            wx.showLoading({
                title: "支付中..."
            });
            var t = getApp(), a = this;
            t.getOpenId(function() {
                var o = getApp().globalData.openid;
                n.getJSON("/Cart/skpay", {
                    openid: o,
                    money: a.data.money
                }, function(n) {
                    t.globalData.wxdata = n.data.pay, a.pay1(), wx.hideLoading();
                });
            });
        } else wx.showToast({
            title: "请输入金额"
        });
    },
    pay1: function() {
        var n = getApp().globalData.wxdata.wdata, t = n.timeStamp + "", a = n.nonceStr + "", o = n.package, e = n.sign;
        wx.requestPayment({
            nonceStr: a,
            package: o,
            signType: "MD5",
            timeStamp: t,
            paySign: e,
            success: function(n) {
                console.log(n), wx.navigateTo({
                    url: "../../pay_success/pay_success"
                });
            },
            fail: function(n) {
                console.log(n), wx.showToast({
                    title: "支付失败",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.navigateBack({
                        delta: 1,
                        success: function(n) {},
                        fail: function() {},
                        complete: function() {}
                    });
                }, 2e3);
            }
        });
    }
});