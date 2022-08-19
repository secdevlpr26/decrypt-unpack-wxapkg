var e = getApp().globalData.httpUrl;

require("../../../utils/util.js");

Component({
    properties: {
        refundId: String,
        refundTitle: String
    },
    data: {
        orderNum: "",
        payBackMoney: "",
        refundresult: "",
        takeOutDispatchType: "",
        refundTime: ""
    },
    methods: {
        contact: function() {
            console.log("==========绑定打电话功能=========="), wx.getStorage({
                key: "storeInfo",
                success: function(e) {
                    console.log("========联系电话========="), console.log(e.data.storeInfoTelephoneNum), 
                    null != e.data.storeInfoTelephoneNum && "" != e.data.storeInfoTelephoneNum && void 0 != e.data.storeInfoTelephoneNum && "undefined" != e.data.storeInfoTelephoneNum && "null" != e.data.storeInfoTelephoneNum || wx.showModal({
                        title: "无联系电话",
                        content: ""
                    }), wx.makePhoneCall({
                        phoneNumber: e.data.storeInfoTelephoneNum
                    });
                },
                fail: function(e) {
                    console.log("========没有storeInfo=========");
                }
            });
        },
        swithToOrder: function() {
            var e = {
                val: !1
            };
            this.triggerEvent("closeTk", e), wx.switchTab({
                url: "/pages/index/order/order"
            });
        }
    },
    attached: function() {
        var t = this, a = t.properties.refundId, r = t.properties.refundTitle, o = r.substr(17, 2);
        wx.request({
            url: e + "skmembermodel/selRefundInfo",
            data: {
                id: a
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                e.data.data.length > 0 && (console.log("这是原逻辑你进来了吗+++++", e.data.data), t.setData({
                    refundTitle: r,
                    refundId: a,
                    orderNum: e.data.data[0].orderNum,
                    orderType: e.data.data[0].orderType,
                    refundTime: e.data.data[0].createTime,
                    payBackMoney: e.data.data[0].refundmoney,
                    refundsucOrfail: o
                }), console.log("是不是驳回----", o), "驳回" == o ? (console.log("走没走驳回判断----", o), t.setData({
                    refundresult: e.data.data[0].rejectreson
                })) : "接受" == o && t.setData({
                    refundresult: e.data.data[0].refundresult
                }));
            }
        }), wx.request({
            url: e + "skordermodel/selCancelRefundByOrderId",
            data: {
                id: a
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                if (console.log("length-------", e.data.result.length), e.data.result.length > 0) {
                    console.log("点我达得到的结果+++++---", e);
                    var n = e.data.result[0];
                    t.setData({
                        refundTitle: r,
                        refundId: a,
                        orderNum: n.orderNum,
                        orderType: n.orderType,
                        refundTime: n.cancelTime,
                        payBackMoney: n.orderRealPrice,
                        refundsucOrfail: o
                    }), "驳回" == o ? t.setData({
                        refundresult: n.orderRefuseRemark
                    }) : "接受" == o && t.setData({
                        refundresult: n.orderRefuseRemark
                    });
                }
            }
        }), wx.getStorage({
            key: "wmFlg",
            success: function(e) {
                wx.getStorage({
                    key: "takeOutDispatchType",
                    success: function(a) {
                        t.setData({
                            takeOutDispatchType: a.data
                        }), wx.getStorage({
                            key: "os",
                            success: function(r) {
                                if (1 == e.data) {
                                    console.log("点我达的消息", a);
                                    t.properties.refundId, t.properties.refundTitle.substr(17, 2);
                                }
                            }
                        });
                    }
                });
            }
        });
    }
});