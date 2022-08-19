var t = require("../../../utils/server"), e = 0, r = "NO";

Page({
    tabClick: function(t) {
        var a = t.currentTarget.dataset.index, s = [ "NO", "WAITPAY", "WAITSEND", "WAITRECEIVE", "FINISH" ], o = [ "text-normal", "text-normal", "text-normal", "text-normal", "text-normal", "text-normal" ];
        o[a] = "text-select", this.setData({
            tabClasss: o,
            tab: a
        }), e = 0, r = s[a], this.data.orders = [], this.getOrderLists(s[a], e);
    },
    pay: function(t) {
        var e = t.currentTarget.dataset.index, r = this.data.orders[e];
        getApp().globalData.order = r, wx.navigateTo({
            url: "../orderpay/payment?order_id=1"
        });
    },
    cancel: function(a) {
        var s = a.currentTarget.dataset.index, o = this.data.orders[s], i = this;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定取消订单吗？",
            success: function(a) {
                if (a.confirm) {
                    var s = getApp().globalData.userInfo.user_id;
                    t.getJSON("/User/cancelOrder/user_id/" + s + "/order_id/" + o.order_id, function(t) {
                        wx.showToast({
                            title: t.data.msg,
                            icon: "success",
                            duration: 2e3
                        }), e = 0, i.data.orders = [], i.getOrderLists(r, 0);
                    });
                }
            }
        });
    },
    confirm: function(a) {
        var s = a.currentTarget.dataset.index, o = this.data.orders[s], i = this;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定已收货吗？",
            success: function(a) {
                if (a.confirm) {
                    var s = getApp().globalData.userInfo.user_id;
                    t.getJSON("/User/orderConfirm/user_id/" + s + "/order_id/" + o.order_id, function(t) {
                        wx.showToast({
                            title: t.data.msg,
                            icon: "success",
                            duration: 2e3
                        }), e = 0, i.data.orders = [], i.getOrderLists(r, 0);
                    });
                }
            }
        });
    },
    details: function(t) {
        var e = t.currentTarget.dataset.index, r = this.data.orders[e];
        wx.navigateTo({
            url: "../details/index?order_id=" + r.order_id
        });
    },
    onReachBottom: function() {
        this.getOrderLists(r, ++e), wx.showToast({
            title: "加载中",
            icon: "loading"
        });
    },
    onPullDownRefresh: function() {
        e = 0, this.data.orders = [], this.getOrderLists(r, 0);
    },
    data: {
        orders: [],
        tabClasss: [ "text-select", "text-normal", "text-normal", "text-normal", "text-normal" ]
    },
    getOrderLists: function(e, r) {
        var a = this, s = getApp().globalData.userInfo.user_id;
        t.getJSON("/User/getOrderList/user_id/" + s + "/type/" + e + "/page/" + r, function(t) {
            var e = t.data.result, r = a.data.orders;
            for (var s in e) r.push(e[s]);
            wx.stopPullDownRefresh(), a.setData({
                orders: r
            });
        });
    },
    onShow: function() {
        e = 0, this.data.orders = [], this.getOrderLists(r, e);
    },
    onLoad: function() {}
});