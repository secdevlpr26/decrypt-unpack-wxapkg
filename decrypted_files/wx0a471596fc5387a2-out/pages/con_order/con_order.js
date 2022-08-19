var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl,
        shipping_method: "门店自提",
        recommended_code: "",
        note: "",
        shippingMethodActive: 1,
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
                    url: "/pages/user/user"
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
                    cartList: t.data.rows
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
                console.log(t.data), null != t.data && e.setData({
                    address: t.data.rows[0].ADDRESS,
                    addressId: t.data.rows[0].ID
                });
            }
        });
    },
    formSubmit: function(e) {
        var a = this;
        "送货上门" == e.detail.value.shipping_method && 0 == e.detail.value.addressId.length ? wx.showToast({
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
                t.data.status > 0 ? a.pay(t.data.rows[0].status) : wx.showToast({
                    title: "提交失败!",
                    icon: "loading",
                    duration: 1500
                });
            }
        });
    },
    pay: function(e) {
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "GetUnifiedOrderResult",
                userId: wx.getStorageSync("userId"),
                id: e,
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
                        wx.redirectTo({
                            url: "/pages/order/order"
                        });
                    },
                    fail: function(t) {
                        wx.redirectTo({
                            url: "/pages/order/order"
                        });
                    },
                    complete: function(t) {
                        wx.redirectTo({
                            url: "/pages/order/order"
                        });
                    }
                }));
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
            shipping_method: "送货上门"
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