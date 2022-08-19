var e = getApp(), t = e.globalData.config.base;

Page({
    data: {},
    onShareAppMessage: function() {
        return {
            title: e.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onLoad: function(e) {
        var t = e.id;
        this.getOrderInfo(t);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    toaftersale: function(e) {
        var t = e.currentTarget.dataset, o = "../aftersale/aftersale?speckey=" + t.speckey + "&goodid=" + t.goodid + "&ordersn=" + t.ordersn + "&orderid=" + t.orderid;
        console.log(o), wx.redirectTo({
            url: o
        });
    },
    getOrderInfo: function(o) {
        var a = e.globalData.userKey, r = this;
        wx.request({
            url: t + "Mobile/UserApi/order_detail",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: a,
                id: o
            },
            success: function(e) {
                r.setData({
                    orderInfo: e.data
                });
            }
        });
    },
    cancel: function() {
        var o = e.globalData.userKey, a = this.data.orderInfo.order_id;
        wx.showActionSheet({
            itemList: [ "确认删除" ],
            success: function(e) {
                0 == e.tapIndex && wx.request({
                    url: t + "Mobile/UserApi/cancel_order",
                    method: "GET",
                    header: {
                        "content-type": "application"
                    },
                    data: {
                        userkey: o,
                        id: a
                    },
                    success: function(e) {
                        0 == e.data.error && (wx.showToast({
                            title: "删除成功",
                            icon: "success",
                            duration: 1e3
                        }), wx.navigateBack());
                    }
                });
            },
            fail: function(e) {
                console.log(e.errMsg);
            }
        });
    },
    pay: function() {
        var e = this.data.orderInfo.order_id;
        console.log(e), wx.redirectTo({
            url: "../pay/pay?id=" + e
        });
    },
    sure: function() {
        var o = e.globalData.userKey, a = this.data.orderInfo.order_id;
        wx.request({
            url: t + "Mobile/UserApi/order_confirm",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: o,
                id: a
            },
            success: function(e) {
                0 == e.data.error && wx.showToast({
                    title: "确认成功",
                    icon: "success",
                    duration: 1e3
                });
            }
        });
    }
});