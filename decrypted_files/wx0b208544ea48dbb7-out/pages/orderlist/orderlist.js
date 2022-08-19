var t = getApp(), e = t.globalData.config.base;

Page({
    data: {
        isLoad: !0,
        orderList: [],
        page: 1,
        orderType: ""
    },
    onShareAppMessage: function() {
        return {
            title: t.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onLoad: function(t) {
        var e = t.type;
        this.setData({
            orderType: e
        });
    },
    onReady: function() {},
    onShow: function() {
        this.getOrderList(1);
    },
    onHide: function() {},
    onUnload: function() {},
    getOrderList: function(a) {
        var o = t.globalData.userKey, r = this.data.isLoad, i = a, n = this.data.orderType, d = this;
        r && (wx.showNavigationBarLoading(), d.setData({
            isLoad: !1
        }), wx.request({
            url: e + "Mobile/UserApi/order_list",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: o,
                type: n,
                p: i
            },
            success: function(t) {
                console.log("============="), console.log(t);
                var e = [];
                1 == i ? (e = t.data.order_list, i++) : r && (e = d.data.orderList.concat(t.data.order_list), 
                i++), d.setData({
                    orderList: e,
                    isLoad: 1 == t.data.orderStatus,
                    page: i
                }), wx.hideNavigationBarLoading();
            }
        }));
    },
    toOderInfo: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../orderinfo/orderinfo?id=" + e
        });
    },
    toComment: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../comment/comment?orderId=" + e
        });
    },
    handoverType: function(t) {
        var e = t.currentTarget.dataset.type;
        this.setData({
            orderType: e,
            isLoad: !0,
            page: 1
        }), this.getOrderList(1);
    },
    loadMore: function() {
        var t = this.data.page;
        this.getOrderList(t);
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    }
});