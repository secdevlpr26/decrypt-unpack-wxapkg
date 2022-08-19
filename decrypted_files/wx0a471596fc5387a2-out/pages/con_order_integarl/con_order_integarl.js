var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl,
        shipping_method: "送货上门",
        recommended_code: "",
        note: "",
        shippingMethodActive: 2,
        address: "",
        addressId: ""
    },
    onLoad: function(t) {
        var e = this, a = wx.getStorageSync("userId");
        null != a && a > 0 && "" != a ? (e.getCartList(), e.dTotal(), e.getAddressList()) : wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/mine/mine"
                }) : t.cancel;
            }
        });
    },
    getCartList: function() {
        var e = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getCartList",
                userId: wx.getStorageSync("userId"),
                where: " and is_checked=2"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                null != t.data && e.setData({
                    cartList: t.data
                });
            }
        });
    },
    dTotal: function() {
        var e = this;
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
                null != t.data && e.setData({
                    dTotal: t.data.dTotal,
                    marketPriceTotal: t.data.marketPriceTotal,
                    quantity: t.data.quantity
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
                    address: t.data[0].address,
                    addressId: t.data[0].id
                });
            }
        });
    },
    formSubmit: function(e) {
        "送货上门" == e.detail.value.shipping_method.length && 0 == e.detail.value.addressId.length ? wx.showToast({
            title: "收货地址不得为空!",
            icon: "loading",
            duration: 1500
        }) : wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "addOrder",
                userId: wx.getStorageSync("userId"),
                addressId: e.detail.value.addressId,
                quantity_sum: e.detail.value.quantity_sum,
                price_sum: e.detail.value.price_sum,
                shipping_method: e.detail.value.shipping_method,
                recommended_code: e.detail.value.recommended_code,
                note: e.detail.value.note
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                0 == t.data.status ? wx.showToast({
                    title: "提交成功!",
                    icon: "success",
                    duration: 1e3,
                    success: function() {
                        wx.navigateTo({
                            url: "/pages/order/order"
                        });
                    }
                }) : wx.showToast({
                    title: "提交失败!",
                    icon: "loading",
                    duration: 1500
                });
            }
        });
    },
    shippingMethod: function(t) {
        var e = this, a = t.currentTarget.dataset.id;
        1 == a ? e.setData({
            shippingMethodActive: 1,
            shipping_method: "门店自提"
        }, function() {}) : 2 == a && e.setData({
            shippingMethodActive: 2,
            shipping_method: "shipping_method"
        }, function() {});
    },
    addAddress: function() {
        wx.navigateTo({
            url: "/pages/selectAddress/selectAddress"
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