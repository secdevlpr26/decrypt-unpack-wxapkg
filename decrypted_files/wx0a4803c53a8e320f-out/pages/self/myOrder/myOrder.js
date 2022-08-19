var t = getApp(), e = t.globalData.projectInfo, a = [], o = 1, r = 1;

Page({
    data: {
        showTabIndex: 0,
        statueList: [],
        noOrder: !1,
        orderList: [],
        orderType: "",
        rightTypeList: []
    },
    onLoad: function(o) {
        e = t.globalData.projectInfo, a = t.globalData.customizeTabId;
        var r = this, n = 0;
        o.index && (n = o.index), r.setData({
            statueList: [ "待付款", "待发货", "待收货", "待评价", "退款/售后", "全部" ],
            showTabIndex: n
        }), r.getOrderInfo(n);
    },
    selectTab: function(t) {
        var e = this, a = t.currentTarget.dataset;
        e.setData({
            showTabIndex: Number(a.selectindex),
            noOrder: !1,
            orderList: []
        }), o = 1, e.getOrderInfo(e.data.showTabIndex);
    },
    onShow: function() {},
    deleteOrder: function(a) {
        var o = this;
        wx.showModal({
            title: "",
            content: "确认删除订单",
            success: function(r) {
                r.confirm && wx.request({
                    url: t.globalData.comUrl + "tabs_delAppOrderWithParent",
                    data: {
                        appId: e.appId,
                        orderId: a.currentTarget.dataset.oid
                    },
                    success: function(t) {
                        o.setData({
                            noOrder: !1,
                            orderList: []
                        }), o.getOrderInfo(o.data.showTabIndex);
                    }
                });
            }
        });
    },
    getOrderInfo: function(e) {
        var a = this, n = t.getMemberId(), s = "", d = "";
        0 == e ? (s = 0, d = 1) : 1 == e ? (s = 1, d = 2) : 2 == e ? (s = 1, d = 3) : 3 == e ? (s = 1, 
        d = 4) : 4 == e ? (s = 1, d = 6) : (d = "", s = ""), wx.request({
            url: t.globalData.comUrl + "tabs_getZXOrderList.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                projectId: t.globalData.projectInfo.appId,
                memberId: n,
                current: o,
                payStatus: s,
                status: d
            },
            success: function(e) {
                var o = t.getJsonData(e.data);
                r = o.pages, a.setData({
                    orderList: a.data.orderList.concat(o.pageList)
                }), console.log(a.data.orderList), a.setData({
                    noOrder: 0 == a.data.orderList.length
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    orderDetailtap: function(t) {
        var e = t.currentTarget.dataset;
        wx.navigateTo({
            url: "../myOrder/myOrder-detail/myOrder-detail?id=" + e.orderid + "&orderNO" + e.orderno
        });
    },
    cancelOrder: function(e) {
        var a = e.currentTarget.dataset;
        console.log(a);
        var o = this;
        wx.showModal({
            title: "是否确认取消订单？",
            success: function(e) {
                e.confirm && wx.request({
                    url: t.globalData.comUrl + "tabs_updateZXOrderStatus.action",
                    data: {
                        appId: t.globalData.projectInfo.appId,
                        orderId: a.orderid,
                        status: 5
                    },
                    success: function() {
                        wx.showToast({
                            title: "订单已取消",
                            icon: "success",
                            duration: 2e3
                        }), setTimeout(function() {
                            o.setData({
                                orderList: []
                            }), o.getOrderInfo(o.data.showTabIndex);
                        }, 2e3);
                    },
                    fail: function() {
                        t.hint();
                    }
                });
            }
        });
    },
    sureReceive: function(e) {
        var a = this;
        wx.showModal({
            title: "提示",
            content: "是否确认收货",
            success: function(o) {
                o.confirm && wx.request({
                    url: t.globalData.comUrl + "tabs_signForOrder.action",
                    data: {
                        orderId: e.currentTarget.dataset.oid
                    },
                    success: function(e) {
                        1 == e.data ? (a.setData({
                            noOrder: !1,
                            orderList: []
                        }), a.getOrderInfo(a.data.showTabIndex)) : t.showToast("收货失败");
                    }
                });
            }
        });
    },
    goComment: function(t) {
        console.log(t.currentTarget), wx.navigateTo({
            url: "../../product/comment/publish-comment/publish-comment?productOrderId=" + t.currentTarget.dataset.id
        });
    },
    onReachBottom: function() {
        o < r && (o++, this.getOrderInfo(this.data.showTabIndex));
    },
    toPay: function(a) {
        var o = a.currentTarget.dataset.orderinfo;
        wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4,
            mask: !0
        });
        var r = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getZXOrderDetail.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                orderId: o.id
            },
            success: function(a) {
                "9" == t.getJsonData(a.data).status ? t.hint("该产品已下架") : wx.login({
                    success: function(a) {
                        a.code ? wx.request({
                            url: t.globalData.paymentUrl + "/WechatAlipay/MiniPayService?jsoncallback=?",
                            data: {
                                projectId: e.appId,
                                nonce_str: "lfksf" + Math.round(1e5 * Math.random()),
                                body: o.children[0].productOrderVOList[0].productName,
                                attach: o.orderNO + "_" + o.id + "%2B",
                                out_trade_no: o.orderNO + new Date().valueOf(),
                                total_fee: (100 * o.totalMoney).toFixed(0),
                                trade_type: "JSAPI",
                                device_info: "838792",
                                code: a.code
                            },
                            success: function(t) {
                                wx.hideToast();
                                var e = r.getJsonData(t.data);
                                wx.requestPayment({
                                    timeStamp: e.timeStamp,
                                    nonceStr: e.nonceStr,
                                    package: "prepay_id=" + e.prepay_id,
                                    signType: "MD5",
                                    paySign: e.sign,
                                    success: function(t) {
                                        wx.showToast({
                                            title: "支付成功",
                                            icon: "success",
                                            duration: 2e3,
                                            mask: !0
                                        }), setTimeout(function() {
                                            r.onShow();
                                        }, 2e3);
                                    },
                                    fail: function(t) {
                                        wx.showModal({
                                            title: "支付失败",
                                            showCancel: !1,
                                            success: function(t) {
                                                t.confirm && r.onShow();
                                            }
                                        });
                                    }
                                });
                            }
                        }) : t.hint("获取用户登录态失败！" + a.errMsg);
                    }
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    getJsonData: function(t) {
        return JSON.parse(t.substring(1, t.length - 1));
    }
});