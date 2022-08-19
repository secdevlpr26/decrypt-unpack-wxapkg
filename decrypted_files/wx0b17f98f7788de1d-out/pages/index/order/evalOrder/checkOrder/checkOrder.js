function e(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var a, t = require("../../../../../utils/util.js"), o = getApp().globalData.httpUrl;

Page({
    data: {
        orderStyle: "",
        selectedCoupon: "",
        coupon: "",
        wmFlg: !1,
        dcFlg: !1,
        ydFlg: !1,
        httpUrl: o,
        storeInfo: [],
        deliverName: "",
        deliverPhone: "",
        discountFlg: "",
        displayy_0: "none"
    },
    onLoad: function(d) {
        a = this, t.getShareInfos(a, o), t.setCompanyId(a, d), t.setStoreId(a), t.setStoreInfo(a), 
        wx.getStorage({
            key: "deliveryPrice",
            success: function(e) {
                a.setData({
                    peisongfei: e.data
                });
            }
        }), wx.getStorage({
            key: "takeOutDispatchType",
            success: function(e) {
                a.setData({
                    takeOutDispatchType: e.data
                });
            }
        }), wx.getStorage({
            key: "wmFlg",
            success: function(e) {
                wx.getStorage({
                    key: "dcFlg",
                    success: function(t) {
                        wx.getStorage({
                            key: "ydFlg",
                            success: function(o) {
                                a.setData({
                                    wmFlg: e.data,
                                    dcFlg: t.data,
                                    ydFlg: o.data
                                });
                            }
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "ydFlg",
            success: function(t) {
                wx.getStorage({
                    key: "dcFlg",
                    success: function(d) {
                        wx.getStorage({
                            key: "wmFlg",
                            success: function(r) {
                                1 == t.data ? (console.log("走预定"), wx.getStorage({
                                    key: "orderId",
                                    success: function(e) {
                                        wx.getStorage({
                                            key: "orderType",
                                            success: function(t) {
                                                wx.request({
                                                    url: o + "skordermodel/getOrderById",
                                                    method: "POST",
                                                    header: {
                                                        "content-type": "application/x-www-form-urlencoded"
                                                    },
                                                    data: {
                                                        id: e.data,
                                                        orderType: t.data
                                                    },
                                                    success: function(e) {
                                                        var t = e.data.discountFlg;
                                                        a.setData({
                                                            discountFlg: t
                                                        });
                                                        var o = e.data.orderPayType, d = "";
                                                        "W" == o ? d = "微信支付" : "B" == o && (d = "余额支付");
                                                        var r = e.data.reservedEstimatedTime.split(" "), n = r[0], s = r[1];
                                                        a.setData({
                                                            orderInfo: e.data,
                                                            orderStyle: d,
                                                            orderDate: n,
                                                            orderTime: s,
                                                            orderTable: e.data.tableName,
                                                            orderPersonNumber: e.data.reservedCount,
                                                            orderContractName: e.data.reservedName,
                                                            orderContractTel: e.data.reservedPhoneNum,
                                                            discountFlg: e.data.discountFlg,
                                                            derateMoney: (1 * e.data.orderReceivablePrice - 1 * e.data.orderRealPrice).toFixed(2)
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                })) : 1 == d.data ? (console.log("走点餐"), wx.getStorage({
                                    key: "orderId",
                                    success: function(e) {
                                        wx.getStorage({
                                            key: "orderType",
                                            success: function(t) {
                                                wx.request({
                                                    url: o + "skordermodel/getOrderById",
                                                    method: "POST",
                                                    header: {
                                                        "content-type": "application/x-www-form-urlencoded"
                                                    },
                                                    data: {
                                                        id: e.data,
                                                        orderType: t.data
                                                    },
                                                    success: function(e) {
                                                        var o = e.data.orderPayType, d = "", r = e.data.discountFlg;
                                                        a.setData({
                                                            discountFlg: r
                                                        }), "W" == o ? d = "微信支付" : "B" == o && (d = "余额支付");
                                                        var n = e.data.vipCoupontype, s = e.data.vipDerateMoney, c = e.data.orderRealPrice, i = t.data.storeInfoDeliveryPrice, l = t.data.storeInfoBoxPrice;
                                                        "4" == n || ((1 * c - 1 * i - 1 * l) * s / 10 * (10 - s) / 10).toFixed(2), a.setData({
                                                            orderInfo: e.data,
                                                            orderStyle: d,
                                                            deskNum: e.data.orderTableId,
                                                            discountFlg: e.data.discountFlg,
                                                            derateMoney: (1 * e.data.orderReceivablePrice - 1 * e.data.orderRealPrice).toFixed(2)
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                })) : 1 == r.data && (console.log("走外卖"), wx.getStorage({
                                    key: "orderId",
                                    success: function(t) {
                                        wx.getStorage({
                                            key: "orderType",
                                            success: function(d) {
                                                wx.request({
                                                    url: o + "skordermodel/getOrderById",
                                                    method: "POST",
                                                    header: {
                                                        "content-type": "application/x-www-form-urlencoded"
                                                    },
                                                    data: {
                                                        id: t.data,
                                                        orderType: d.data
                                                    },
                                                    success: function(t) {
                                                        console.log("配送员电话-------------------", t.data.riderName), console.log("配送员电话-------------------", t.data.riderMobile);
                                                        var o = t.data.foodInfoBoxPrice, d = t.data.discountFlg;
                                                        a.setData({
                                                            discountFlg: d,
                                                            canhefei: o
                                                        }), wx.getStorage({
                                                            key: "storeInfo",
                                                            success: function(o) {
                                                                var d = t.data.orderPayType, r = "";
                                                                "W" == d ? r = "微信支付" : "B" == d && (r = "余额支付");
                                                                var n = t.data.vipCoupontype, s = t.data.vipDerateMoney, c = t.data.orderRealPrice, i = "", l = o.data.storeInfoDeliveryPrice, u = o.data.storeInfoBoxPrice;
                                                                i = "4" == n ? s : ((1 * c - 1 * l - 1 * u) * s / 10 * (10 - s) / 10).toFixed(2);
                                                                var g = "", y = "";
                                                                if (g = null != t.data.riderName && void 0 != t.data.riderName && "" != t.data.riderName ? t.data.riderName : "", 
                                                                y = null != t.data.riderMobile && void 0 != t.data.riderMobile && "" != t.data.riderMobile ? t.data.riderMobile : "", 
                                                                a.setData(e({
                                                                    orderInfo: t.data,
                                                                    orderStyle: r,
                                                                    beizhu: t.data.orderRemarke,
                                                                    wechatUserAddressAddress: t.data.wechatUserAddressAddress,
                                                                    wechatUserAddressFullAddress: t.data.wechatUserAddressFullAddress,
                                                                    wechatUserAddressReceiverName: t.data.wechatUserAddressReceiverName,
                                                                    wechatUserAddressReceiverPhoneNum: t.data.wechatUserAddressReceiverPhoneNum,
                                                                    derateMoney: i,
                                                                    deliverName: g,
                                                                    deliverPhone: y,
                                                                    discountFlg: t.data.discountFlg
                                                                }, "derateMoney", (1 * t.data.orderReceivablePrice - 1 * t.data.orderRealPrice).toFixed(2))), 
                                                                "1" == a.data.takeOutDispatchType) {
                                                                    var f = (1 * t.data.orderReceivablePrice + 1 * t.data.foodInfoBoxPrice + 1 * a.data.peisongfei - 1 * t.data.orderRealPrice).toFixed(2);
                                                                    console.log("----------------------------------------------呵呵呵呵", f), f <= 0 ? (console.log("小于等于0"), 
                                                                    a.setData({
                                                                        derateMoney: "0.00"
                                                                    })) : (console.log("----hehhe----", f), a.setData({
                                                                        derateMoney: f
                                                                    })), console.log("----------------------------------------------呵呵呵呵", a.data.derateMoney);
                                                                }
                                                                "" != a.data.deliverName && null != a.data.deliverName && void 0 != a.data.deliverName || a.setData({
                                                                    deliverName: "暂无快递员送餐"
                                                                }), "" != a.data.deliverPhone && null != a.data.deliverPhone && void 0 != a.data.deliverPhone || a.setData({
                                                                    deliverPhone: "无联系电话"
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                }));
                            }
                        });
                    }
                });
            }
        });
    },
    onReady: function() {},
    closeTk: function() {
        a.setData({
            displa: !1
        });
    },
    onShow: function() {
        a = this, wx.onSocketMessage(function(e) {
            console.log("===========接收到服务器信息=============="), console.log(e.data), t.getTkInfos(a, e), 
            t.playMusic(a, e);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    t.conSocket(e.data, o);
                }
            });
        });
    },
    onHide: function() {},
    fanhui: function() {
        wx.navigateBack({});
    },
    onUnload: function() {
        t.closeSock();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), a = this, setTimeout(function() {
            a.onPullDownRefresh();
        }, 500);
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: a.data.shareTitle,
            desc: "",
            imageUrl: a.data.shareImgUrl,
            path: "/pages/index/index?storeId=" + a.data.storeId + "&companyId=" + a.data.companyId,
            success: function(e) {
                console.log("转发成功");
            },
            fail: function(e) {
                console.log("转发失败");
            }
        };
    },
    toPingjia: function() {
        wx.redirectTo({
            url: "../evaluation/evaluation"
        });
    },
    contactTakeOut: function() {
        console.log("==========绑定打电话功能=========="), null == a.data.deliverPhone || "" == a.data.deliverPhone || void 0 == a.data.deliverPhone || "undefined" == a.data.deliverPhone || "null" == a.data.deliverPhone ? a.setData({
            displayy_0: "block",
            carname_0: "无联系电话",
            titlename_0: "提示信息"
        }) : (console.log(a.data.deliverPhone), wx.makePhoneCall({
            phoneNumber: a.data.deliverPhone
        }));
    }
});