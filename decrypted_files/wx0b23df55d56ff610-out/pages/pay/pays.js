var t = require("../../utils/server"), e = getApp();

Page({
    data: {},
    onLoad: function(a) {
        var o = a.order_id;
        this.setData({
            order_id: o
        });
        var n = this;
        e.getOpenId(function() {
            var a = getApp().globalData.openid;
            t.getJSON("/User/validateOpenid", {
                openid: a
            }, function(t) {
                wx.hideToast(), 200 == t.data.code ? (getApp().globalData.userInfo = t.data.data, 
                n.setData({
                    userInfo: t.data.data
                })) : "400" == t.data.code && (console.log("need register"), e.register(function() {
                    getApp().globalData.login = !0, n.setData({
                        userInfo: getApp().globalData.userInfo
                    });
                }));
            });
        }), t.getJSON("/User/getOrderDetail", {
            order_id: o
        }, function(t) {
            var e = t.data.result;
            n.setData({
                order: e
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    look: function() {
        wx.showToast({
            title: "付款中...",
            icon: "loading",
            duration: 1e4
        });
        var e = getApp(), a = this, o = this.data.order_id, n = this.data.userInfo.user_id;
        console.log("order id : " + o), t.getJSON("/Cart/getWXPayData1/user_id/" + n + "/order_id/" + o, function(t) {
            wx.hideToast(), e.globalData.wxdata = t.data.result, a.pay();
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
                    wx.redirectTo({
                        url: "../index/index"
                    });
                }, 2e3);
            },
            fail: function(t) {
                console.log(t), wx.showToast({
                    title: "支付失败",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.redirectTo({
                        url: "../index/index"
                    });
                }, 2e3);
            }
        });
    }
});