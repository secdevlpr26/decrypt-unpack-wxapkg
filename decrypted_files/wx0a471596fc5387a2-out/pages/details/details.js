function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../wxParse/wxParse.js")), o = (t(require("../../7C1A6EB7668F5ADF1A7C06B0CB3911A5.js")), 
getApp());

Page({
    data: {
        hostUrl: o.globalData.hostUrl,
        showModel: !0,
        showCeng: !0,
        quantity: 1,
        stock: 0
    },
    closeAllLayer: function() {
        this.setData({
            showModel: !0,
            showCeng: !0
        });
    },
    chooseModel: function() {
        this.setData({
            showCeng: !1,
            showModel: !1
        });
    },
    onLoad: function(t) {
        var a = this;
        a.setData({
            id: t.id
        }), a.getInfo(t);
    },
    getInfo: function(t) {
        var n = this;
        wx.request({
            url: o.globalData.apiUrl,
            data: {
                opt: "getProductInfo",
                id: t.id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                null != t.data && (n.setData({
                    model: t.data.rows[0],
                    stock: t.data.rows[0].STOCK,
                    content: a.default.wxParse("content", "html", t.data.rows[0].CONTENT, n),
                    minprice: (t.data.rows[0].MARKETPRICE - t.data.rows[0].PRICE).toFixed(2)
                }), wx.setNavigationBarTitle({
                    title: t.data.rows[0].NAME
                }));
            }
        });
    },
    cart: function(t) {
        var a = this, o = t.currentTarget.dataset.id, n = wx.getStorageSync("userId");
        null != n && n > 0 && "" != n ? a.addCart(o, n, a.data.quantity, 1, t.currentTarget.dataset.unit) : wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        });
    },
    book: function(t) {
        var a = this, o = t.currentTarget.dataset.id, n = wx.getStorageSync("userId");
        null != n && n > 0 && "" != n ? a.addCart(o, n, a.data.quantity, 2, t.currentTarget.dataset.unit) : wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/mine/mine"
                }) : t.cancel;
            }
        });
    },
    addCart: function(t, a, n, e, s) {
        wx.request({
            url: o.globalData.apiUrl,
            data: {
                opt: "addCart",
                id: t,
                userId: a,
                quantity: n,
                isChecked: e,
                unit: s
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                null != t.data && (0 == t.data.status && 1 == e ? wx.showToast({
                    title: "加入成功",
                    icon: "success",
                    duration: 2e3
                }) : 0 == t.data.status && 2 == e ? wx.navigateTo({
                    url: "/pages/con_order/con_order"
                }) : wx.showToast({
                    title: "失败",
                    icon: "error",
                    duration: 2e3
                }));
            }
        });
    },
    jian: function(t) {
        var a = this;
        a.data.quantity > 1 ? a.setData({
            quantity: a.data.quantity - 1
        }) : wx.showToast({
            title: "数量不能为0",
            icon: "error",
            duration: 2e3
        });
    },
    jia: function(t) {
        var a = this;
        console.log(a.data.quantity), console.log(a.data.stock), a.data.quantity < a.data.stock ? a.setData({
            quantity: a.data.quantity + 1
        }) : wx.showToast({
            title: "库存不足",
            icon: "error",
            duration: 2e3
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