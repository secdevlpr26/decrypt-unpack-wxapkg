var t = require("../../../utils/util.js"), e = getApp();

Page({
    data: {
        order: {
            loadState: 0,
            list: [],
            end: !1
        }
    },
    payOrder: function(t) {
        wx.navigateTo({
            url: "/pages/merch/merch-pay/merch-pay?order_num=" + t.currentTarget.dataset.number
        });
    },
    cancelOrder: function(t) {
        wx.showModal({
            title: "取消订单",
            content: "取消的订单无法还原，是否取消订单？",
            success: function(a) {
                if (a.confirm) {
                    wx.showLoading({
                        title: "订单取消中",
                        mask: !0
                    });
                    var o = t.currentTarget.dataset.id;
                    wx.request({
                        url: e.globalData.url + e.globalData.parameter + "&do=order_del",
                        data: {
                            orderid: o
                        },
                        method: "GET",
                        header: {
                            Cookie: e.globalData.session_login_id,
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            1 == t.data.status ? (wx.showToast({
                                title: t.data.result.message,
                                icon: "success"
                            }), wx.startPullDownRefresh()) : wx.showModal({
                                title: "提示",
                                content: t.data.result.message,
                                showCancel: !1
                            });
                        },
                        fail: function() {
                            wx.showModal({
                                title: "提示",
                                content: "网络连接失败",
                                showCancel: !1
                            });
                        },
                        complete: function() {
                            wx.hideLoading();
                        }
                    });
                }
            }
        });
    },
    getDetailList: function(a) {
        var o = this, n = o.data.order;
        n.page = a ? 0 : n.page, n.list = a ? [] : n.list, o.setData({
            info: n
        }), n.end && !a || (n.loadState = 0, wx.request({
            url: e.globalData.url + e.globalData.parameter,
            data: {
                do: "order"
            },
            header: {
                Cookie: e.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                if (1 == e.data.status) {
                    var a = e.data.result.order;
                    n.list = n.list.concat(a), n.end = !a.length, ++n.page, n.loadState = 4, n.list.forEach(function(e, a, o) {
                        e.order_starttime = t.timestampToDate(1e3 * e.order_starttime);
                    }), o.setData({
                        order: n
                    });
                }
            },
            fail: function() {
                n.loadState = 3, o.setData({
                    order: n
                });
            },
            complete: function() {
                wx.stopPullDownRefresh();
            }
        }));
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        this.getDetailList(!0);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.getDetailList(!0);
    },
    onReachBottom: function() {}
});