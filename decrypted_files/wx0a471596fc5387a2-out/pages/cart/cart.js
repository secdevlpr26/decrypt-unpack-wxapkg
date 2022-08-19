var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl,
        selection: 1
    },
    onLoad: function(t) {
        var a = this, e = wx.getStorageSync("userId");
        null != e && e > 0 && "" != e ? (a.getCartList(), a.dTotal(), a.getCountChecked(function(t) {})) : wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        });
    },
    getCartList: function() {
        var a = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getCartList",
                userId: wx.getStorageSync("userId")
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t.data), null != t.data && a.setData({
                    cartList: t.data.rows
                });
            }
        });
    },
    dTotal: function() {
        var a = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "dTotal",
                userId: wx.getStorageSync("userId")
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t.data), null != t.data && a.setData({
                    dTotal: t.data.dTotal,
                    marketPriceTotal: t.data.marketPriceTotal,
                    quantity: t.data.quantity
                });
            }
        });
    },
    jian: function(a) {
        var e = this, o = a.currentTarget.dataset.id;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "updateCart",
                id: o,
                type: 2
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                null != t.data && (0 == t.data.status ? (e.getCartList(), e.dTotal()) : wx.showToast({
                    title: "失败",
                    icon: "error",
                    duration: 2e3
                }));
            }
        });
    },
    jia: function(a) {
        var e = this, o = a.currentTarget.dataset.id;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "updateCart",
                id: o,
                type: 1
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                null != t.data && (0 == t.data.status ? (e.getCartList(), e.dTotal()) : wx.showToast({
                    title: "失败",
                    icon: "error",
                    duration: 2e3
                }));
            }
        });
    },
    choice: function(a) {
        var e = this, o = a.currentTarget.dataset.id, n = a.currentTarget.dataset.ischecked;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "choice",
                id: o,
                checkId: n
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                null != t.data && (0 == t.data.status ? e.getCountChecked(function(t) {
                    e.getCartList(), e.dTotal();
                }) : wx.showToast({
                    title: "失败",
                    icon: "error",
                    duration: 2e3
                }));
            }
        });
    },
    selection: function(a) {
        var e = this, o = (a.currentTarget.dataset.id, a.currentTarget.dataset.id), n = 1;
        1 == o && (n = 2), wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "selection",
                userId: wx.getStorageSync("userId"),
                checkId: o
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                null != t.data && (0 == t.data.status ? e.setData({
                    selection: n
                }, function() {
                    e.getCartList(), e.dTotal();
                }) : wx.showToast({
                    title: "失败",
                    icon: "error",
                    duration: 2e3
                }));
            }
        });
    },
    getCountChecked: function(a) {
        var e = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getCountChecked",
                userId: wx.getStorageSync("userId")
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t.data), null != t.data && (2 == t.data.status ? e.setData({
                    selection: 2
                }, function() {
                    a(t.data.status);
                }) : 1 != t.data.status && 0 != t.data.status || e.setData({
                    selection: 1
                }, function() {
                    a(t.data.status);
                }));
            }
        });
    },
    buyNow: function() {
        this.getCountChecked(function(t) {
            console.log(t), t > 0 ? wx.navigateTo({
                url: "/pages/con_order/con_order"
            }) : wx.showModal({
                title: "温馨提示",
                content: "请选择商品",
                success: function(t) {
                    t.confirm || t.cancel;
                }
            });
        });
    },
    delCart: function(a) {
        var e = this, o = a.currentTarget.dataset.id;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "deleteCart",
                id: o
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                null != t.data && (0 == t.data.status ? (e.getCartList(), e.dTotal()) : wx.showToast({
                    title: "失败",
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