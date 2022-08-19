var t = require("../../utils/server"), e = 0, a = "NO";

Page({
    tabClick: function(t) {
        var r = t.currentTarget.dataset.index, s = [ "NO", "WAITPAY", "WAITSEND", "WAITRECEIVE", "FINISH" ], o = [ "text-normal", "text-normal", "text-normal", "text-normal", "text-normal", "text-normal" ];
        o[r] = "text-select", this.setData({
            tabClasss: o,
            tab: r
        }), e = 0, a = s[r], this.data.orders = [], this.getOrderLists(s[r], e);
    },
    pay: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.orders[e];
        getApp().globalData.order = a, wx.navigateTo({
            url: "../orderpay/payment?order_id=1"
        });
    },
    cancel: function(r) {
        var s = r.currentTarget.dataset.index, o = this.data.orders[s], i = this;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定取消订单吗？",
            success: function(r) {
                if (r.confirm) {
                    var s = getApp().globalData.userInfo.user_id;
                    t.getJSON("/api/api/cancelOrder/user_id/" + s + "/order_id/" + o.order_id, function(t) {
                        wx.showToast({
                            title: t.data.msg,
                            icon: "success",
                            duration: 2e3
                        }), e = 0, i.data.orders = [], i.getOrderLists(a, 0);
                    });
                }
            }
        });
    },
    confirm: function(r) {
        var s = r.currentTarget.dataset.index, o = this.data.orders[s], i = this;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定已收货吗？",
            success: function(r) {
                if (r.confirm) {
                    var s = getApp().globalData.userInfo.user_id;
                    t.getJSON("/api/api/orderConfirm/user_id/" + s + "/order_id/" + o.order_id, function(t) {
                        wx.showToast({
                            title: t.data.msg,
                            icon: "success",
                            duration: 2e3
                        }), e = 0, i.data.orders = [], i.getOrderLists(a, 0);
                    });
                }
            }
        });
    },
    details: function(t) {
        var e = t.currentTarget.dataset.index, a = this.data.orders[e];
        wx.navigateTo({
            url: "../details/index?order_id=" + a.order_id
        });
    },
    onReachBottom: function() {
        this.getOrderLists(a, ++e), wx.showToast({
            title: "加载中",
            icon: "loading"
        });
    },
    onPullDownRefresh: function() {
        e = 0, this.data.orders = [], this.getOrderLists(a, 0);
    },
    data: {
        orders: [],
        tabClasss: [ "text-select", "text-normal", "text-normal", "text-normal", "text-normal" ]
    },
    getOrderLists: function(e, a) {
        var r = this, s = getApp().globalData.userInfo.user_id;
        this.setData({
            id: s
        }), t.getJSON("/User/getFXOrderList", {
            id: s
        }, function(t) {
            var e = t.data.result, a = r.data.orders;
            for (var s in e) a.push(e[s]);
            wx.stopPullDownRefresh(), r.setData({
                orders: e
            });
        });
    },
    onShow: function() {
        e = 0, this.data.orders = [], this.getOrderLists(a, e);
    },
    onLoad: function(t) {
        if ("WAITSEND" == t.cid) {
            r = [ "text-normal", "text-normal", "text-select", "text-normal", "text-normal" ];
            this.setData({
                tabClasss: r
            });
        }
        if ("FINISH" == t.cid) {
            var r = [ "text-normal", "text-normal", "text-normal", "text-normal", "text-select" ];
            this.setData({
                tabClasss: r
            });
        }
        e = 0, a = t.cid, this.data.orders = [];
    }
});