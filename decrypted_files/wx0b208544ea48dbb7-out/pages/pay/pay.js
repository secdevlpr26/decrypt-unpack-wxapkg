var e = getApp(), a = e.globalData.config.base;

Page({
    data: {},
    onShareAppMessage: function() {
        return {
            title: e.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onLoad: function(e) {
        var a = e.id;
        this.getOrderInfo(a);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    getOrderInfo: function(t) {
        var o = this, n = e.globalData.userKey;
        wx.request({
            url: a + "Mobile/Order/cart4",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: n,
                order_id: t
            },
            success: function(e) {
                o.setData({
                    orderInfo: e.data
                });
            }
        });
    },
    pay: function() {
        var t = e.globalData.userKey, o = this.data.orderInfo.order_sn;
        wx.request({
            url: a + "Mobile/UserApi/wxpay",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: t,
                order_sn: o
            },
            success: function(e) {
                console.log(e), console.log(e.data.timeStamp), console.log(e.data.nonceStr), console.log(e.data.package), 
                console.log(e.data.signType), console.log(e.data.paySign), wx.requestPayment({
                    timeStamp: e.data.timeStamp + "",
                    nonceStr: e.data.nonceStr,
                    package: e.data.package,
                    signType: e.data.signType,
                    paySign: e.data.paySign,
                    success: function(e) {
                        wx.redirectTo({
                            url: "../orderlist/orderlist"
                        });
                    },
                    fail: function(e) {
                        console.log(e);
                    }
                });
            }
        });
    }
});