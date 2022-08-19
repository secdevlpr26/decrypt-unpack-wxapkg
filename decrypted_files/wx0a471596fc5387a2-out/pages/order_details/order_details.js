var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl
    },
    onLoad: function(t) {
        var e = this, a = wx.getStorageSync("userId");
        null != a && a > 0 && "" != a ? (e.getOrderSubList(t.id), e.getOrder(t.id), e.getAddressList(), 
        e.getOrderSate(t.id)) : wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        });
    },
    getOrder: function(e) {
        var a = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getOrder",
                id: e
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                null != t.data && a.setData({
                    order: t.data.rows[0]
                });
            }
        });
    },
    getOrderSubList: function(e) {
        var a = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getOrderSubList",
                userId: wx.getStorageSync("userId"),
                id: e
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                null != t.data && a.setData({
                    orderSubList: t.data.rows
                });
            }
        });
    },
    getAddressList: function() {
        var e = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getAddressList",
                userId: wx.getStorageSync("userId"),
                where: " and is_default=1"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                null != t.data && e.setData({
                    address: t.data.rows[0]
                });
            }
        });
    },
    getOrderSate: function(e) {
        var a = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getOrderSate",
                userId: wx.getStorageSync("userId"),
                id: e
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t.data), null != t.data && a.setData({
                    orderStatus: t.data
                });
            }
        });
    },
    pay: function(e) {
        var a = e.currentTarget.dataset.id;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "GetUnifiedOrderResult",
                userId: wx.getStorageSync("userId"),
                id: a,
                typeId: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                null != t.data && (console.log(t.data), wx.requestPayment({
                    timeStamp: t.data.timeStamp,
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: "MD5",
                    paySign: t.data.paySign,
                    success: function(t) {
                        wx.navigateBack({
                            url: "/pages/order/order"
                        });
                    },
                    fail: function(t) {},
                    complete: function(t) {}
                }));
            }
        });
    },
    canalOrder: function(e) {
        var a = e.currentTarget.dataset.id, n = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "canalOrder",
                id: a
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                null != t.data && (0 == t.data.status ? (wx.showToast({
                    title: "取消成功",
                    icon: "success",
                    duration: 2e3
                }), n.getOrderSubList(a), n.getOrder(a), n.getAddressList(), n.getOrderSate(a)) : wx.showToast({
                    title: "取消失败",
                    icon: "error",
                    duration: 2e3
                }));
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});