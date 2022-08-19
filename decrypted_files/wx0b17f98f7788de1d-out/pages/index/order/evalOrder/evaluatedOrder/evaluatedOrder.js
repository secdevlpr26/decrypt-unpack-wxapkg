var e, t = require("../../../../../utils/util.js"), a = getApp().globalData.httpUrl;

Page({
    data: {
        httpUrl: a,
        selectedCoupon: "测试的假券",
        orderPayStyle: "支付订单",
        remarke: "",
        coupon: "选择优惠券",
        wmFlg: !1,
        dcFlg: !1,
        ydFlg: !1,
        point: 0,
        foods: [],
        receiveUser: "某某某",
        receiveAddr: "中国地球",
        storeInfo: {},
        discountFlg: ""
    },
    choseTxtColor: function(e) {
        var t = e.currentTarget.dataset.id;
        this.setData({
            id: t
        });
    },
    selCoupon: function() {
        wx.navigateTo({
            url: "../selCoupon/selCoupon"
        });
    },
    onLoad: function(o) {
        e = this, t.getShareInfos(e, a), t.setCompanyId(e, o), t.setStoreId(e), t.setStoreInfo(e), 
        console.log(o.comment), wx.getStorage({
            key: "takeOutDispatchType",
            success: function(t) {
                e.setData({
                    takeOutDispatchType: t.data
                });
            }
        }), "1" == o.comment && e.setData({
            comment: !0
        }), "0" == e.data.takeOutDispatchType && wx.getStorage({
            key: "couponInfo",
            success: function(t) {
                e.setData({
                    couponName: t.data.couponName,
                    derateMoney: t.data.derateMoney < 0 ? 0 : t.data.derateMoney
                });
                var a = t.data.couponId;
                "" != a && "undefined" != a && void 0 != a || wx.getStorage({
                    key: "yhprice",
                    success: function(t) {
                        e.setData({
                            derateMoney: t.data < 0 ? 0 : t.data
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "deskNum",
            success: function(t) {
                e.setData({
                    deskNum: t.data
                });
            }
        }), wx.getStorage({
            key: "remarke",
            success: function(t) {
                null != t.data && void 0 != t.data && "" != t.data ? e.setData({
                    remarke: t.data
                }) : e.setData({
                    remarke: "无评论"
                });
            }
        }), wx.getStorage({
            key: "wmFlg",
            success: function(t) {
                wx.getStorage({
                    key: "dcFlg",
                    success: function(a) {
                        wx.getStorage({
                            key: "ydFlg",
                            success: function(o) {
                                e.setData({
                                    wmFlg: t.data,
                                    dcFlg: a.data,
                                    ydFlg: o.data
                                });
                            }
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "point",
            success: function(t) {
                for (var a = [], o = 0; o < 5; o++) a[o] = "../../../../../images/emptyStar.png";
                console.log(t.data);
                for (var n = 0; n < t.data; n++) a[n] = "../../../../../images/star.png";
                e.setData({
                    starUrls: a
                });
            }
        }), wx.request({
            url: a + "skordermodel/getOrderById",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                id: o.orderId,
                orderType: o.orderType
            },
            success: function(t) {
                var a = t.data.foodInfoBoxPrice, o = t.data.discountFlg;
                e.setData({
                    canhefei: a,
                    orderInfo: t.data,
                    discountFlg: o,
                    peisongfei: t.data.distributionFee
                });
                var n = t.data.storeRatedRemarke;
                if ("" != n && null != n && void 0 != n || (n = "无评论"), e.setData({
                    foodInfo: t.data,
                    storeRatedRemarke: n,
                    discountFlg: t.data.discountFlg,
                    derateMoney: (1 * t.data.orderReceivablePrice - 1 * t.data.orderRealPrice).toFixed(2) < 0 ? 0 : (1 * t.data.orderReceivablePrice - 1 * t.data.orderRealPrice).toFixed(2)
                }), "1" == e.data.takeOutDispatchType) {
                    var d = 1 * t.data.orderReceivablePrice + 1 * t.data.foodInfoBoxPrice + 1 * e.data.peisongfei - 1 * t.data.orderRealPrice;
                    e.setData({
                        derateMoney: d < 0 ? 0 : d
                    });
                }
            }
        });
    },
    selMemberCard: function() {
        wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.getStorage({
                    key: "storeId",
                    success: function(o) {
                        wx.request({
                            url: a + "skmembermodel/findVipCardById",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                userId: t.data,
                                cardId: e.data.cardId,
                                storeId: o.data
                            },
                            success: function(t) {
                                wx.getStorage({
                                    key: "foodInfo",
                                    success: function(a) {
                                        console.log(a + "=========>resi");
                                        a.data.orderRealPrice;
                                        var o = a.data.orderReceivablePrice, n = t.data.discount;
                                        null != n && void 0 != n && "" != n || (n = 10);
                                        var d = o - o * n / 10;
                                        console.log("以优惠价格======>" + d);
                                        var s = d.toFixed(2);
                                        console.log("以优惠价格======>" + s), null != s && void 0 != s && "" != s || (s = 0);
                                        var r = t.data.discount;
                                        null != r && void 0 != r && "" != r || (n = 10, e.setData({
                                            selectedCoupon: "无折扣"
                                        }));
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    onReady: function() {},
    closeTk: function() {
        e.setData({
            displa: !1
        });
    },
    onShow: function() {
        e = this, wx.onSocketMessage(function(a) {
            console.log("===========接收到服务器信息=============="), console.log(a.data), t.getTkInfos(e, a), 
            t.playMusic(e, a);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    t.conSocket(e.data, a);
                }
            });
        });
    },
    onHide: function() {},
    onUnload: function() {
        t.closeSock();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), e = this, setTimeout(function() {
            e.onPullDownRefresh();
        }, 500);
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: e.data.shareTitle,
            desc: "",
            imageUrl: e.data.shareImgUrl,
            path: "/pages/index/index?storeId=" + e.data.storeId + "&companyId=" + e.data.companyId,
            success: function(e) {
                console.log("转发成功");
            },
            fail: function(e) {
                console.log("转发失败");
            }
        };
    },
    resume: function(e) {
        wx.switchTab({
            url: "../../../../index/index"
        });
    }
});