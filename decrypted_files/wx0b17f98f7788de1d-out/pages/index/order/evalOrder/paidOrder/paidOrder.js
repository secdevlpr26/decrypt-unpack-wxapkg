var e, t = require("../../../../../utils/util.js"), a = getApp().globalData.httpUrl;

Page({
    data: {
        orderStyle: "微信支付",
        selectedCoupon: "",
        coupon: "选择优惠券",
        wmFlg: !0,
        dcFlg: !0,
        ydFlg: !0,
        httpUrl: a,
        storeInfo: [],
        discountFlg: "",
        toPingjiaflag: !0,
        quxiao: !0,
        canhefei: "",
        takeOutDispatchType: ""
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
    fanhui: function() {
        wx.switchTab({
            url: "../../../index"
        });
    },
    onLoad: function(o) {
        e = this, t.getShareInfos(e, a), t.setCompanyId(e, o), t.setStoreId(e), t.setStoreInfo(e), 
        wx.getStorage({
            key: "takeOutDispatchType",
            success: function(t) {
                console.log("点我达状态---------", t.data), e.setData({
                    takeOutDispatchType: t.data
                });
            }
        }), wx.getStorage({
            key: "storeId",
            success: function(t) {
                e.setData({
                    storeId: t.data
                }), wx.getStorage({
                    key: "userId",
                    success: function(o) {
                        wx.request({
                            url: a + "skmembermodel/selOperationRecord",
                            data: {
                                wxUserUuid: o.data,
                                storeUuid: t.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                e.setData({
                                    notices: t.data
                                });
                            }
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "takeOutDispatchType",
            success: function(t) {
                e.setData({
                    takeOutDispatchType: t.data
                });
            }
        }), wx.getStorage({
            key: "couponInfo",
            success: function(t) {
                var a = t.data.couponType, o = t.data.couponName;
                if ("4" == a) e.setData({
                    couponName: o,
                    derateMoney: t.data.derateMoney,
                    couponType: a
                }); else if ("2" == a) {
                    var r = t.data.derateMoney;
                    wx.getStorage({
                        key: "foodInfo",
                        success: function(t) {
                            var d = t.data.orderRealPrice;
                            r = (d - r * d / 10).toFixed(2), e.setData({
                                couponName: o,
                                derateMoney: r,
                                couponType: a
                            });
                        }
                    });
                }
            }
        }), wx.getStorage({
            key: "derateMoney",
            success: function(t) {
                e.setData({
                    derateMoney: t.data
                });
            }
        }), console.log("==================options=================", o), 9 == o.orderState || 4 == o.orderState ? (e.setData({
            orderId: o.orderId,
            orderType: o.orderType,
            orderState: o.orderState
        }), console.log("======================"), wx.request({
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
                var a = t.data.foodInfoBoxPrice;
                console.log(t.data);
                var o = t.data.discountFlg, r = (1 * t.data.orderReceivablePrice - 1 * t.data.orderRealPrice).toFixed(2);
                if (e.setData({
                    orderInfo: t.data,
                    discountFlg: o,
                    derateMoney: r < 0 ? 0 : r,
                    wechatUserAddressFullAddress: t.data.wechatUserAddressFullAddress,
                    wechatUserAddressReceiverName: t.data.wechatUserAddressReceiverName,
                    wechatUserAddressReceiverPhoneNum: t.data.wechatUserAddressReceiverPhoneNum,
                    orderRemarke: t.data.orderRemarke,
                    canhefei: a,
                    peisongfei: t.data.distributionFee
                }), "1" == e.data.takeOutDispatchType) {
                    var d = 1 * t.data.orderReceivablePrice + 1 * t.data.foodInfoBoxPrice + 1 * e.data.peisongfei - 1 * t.data.orderRealPrice;
                    e.setData({
                        derateMoney: d < 0 ? 0 : d
                    });
                }
                t.data;
                var s = t.data.orderPayType;
                "B" == s ? e.setData({
                    orderStyle: "余额支付"
                }) : "W" == s && e.setData({
                    orderStyle: "微信支付"
                });
            }
        })) : wx.getStorage({
            key: "orderId",
            success: function(t) {
                wx.getStorage({
                    key: "orderType",
                    success: function(o) {
                        wx.request({
                            url: a + "skordermodel/getOrderById",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                id: t.data,
                                orderType: o.data
                            },
                            success: function(t) {
                                var a = t.data.foodInfoBoxPrice;
                                console.log(t.data);
                                var o = t.data.discountFlg;
                                e.setData({
                                    orderInfo: t.data,
                                    discountFlg: o,
                                    wechatUserAddressFullAddress: t.data.wechatUserAddressFullAddress,
                                    wechatUserAddressReceiverName: t.data.wechatUserAddressReceiverName,
                                    wechatUserAddressReceiverPhoneNum: t.data.wechatUserAddressReceiverPhoneNum,
                                    orderRemarke: t.data.orderRemarke,
                                    canhefei: a,
                                    peisongfei: t.data.distributionFee
                                });
                                t.data;
                                var r = t.data.orderPayType;
                                "B" == r ? e.setData({
                                    orderStyle: "余额支付"
                                }) : "W" == r && e.setData({
                                    orderStyle: "微信支付"
                                });
                            }
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "orderDate",
            success: function(t) {
                wx.getStorage({
                    key: "orderTime",
                    success: function(a) {
                        wx.getStorage({
                            key: "orderTable",
                            success: function(o) {
                                wx.getStorage({
                                    key: "orderPersonNumber",
                                    success: function(r) {
                                        wx.getStorage({
                                            key: "orderContractName",
                                            success: function(d) {
                                                wx.getStorage({
                                                    key: "orderContractTel",
                                                    success: function(s) {
                                                        e.setData({
                                                            orderDate: t.data,
                                                            orderTime: a.data,
                                                            orderTable: o.data,
                                                            orderPersonNumber: r.data,
                                                            orderContractName: d.data,
                                                            orderContractTel: s.data
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "foodInfo",
            success: function(t) {
                e.setData({
                    foodInfo: t.data
                });
            }
        }), wx.getStorage({
            key: "wmFlg",
            success: function(t) {
                console.log("外卖订单不评价" + t.data), wx.getStorage({
                    key: "dcFlg",
                    success: function(a) {
                        console.log("外卖订单不评价" + a.data), wx.getStorage({
                            key: "ydFlg",
                            success: function(o) {
                                console.log("外卖订单不评价" + o.data), e.setData({
                                    wmFlg: t.data,
                                    dcFlg: a.data,
                                    ydFlg: o.data
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
    toPingjia: function() {
        1 == e.data.toPingjiaflag && (e.setData({
            toPingjiaflag: !1
        }), console.log("===========that.data.orderType================", e.data.orderType, e.data.orderId), 
        9 == e.data.orderState || 4 == e.data.orderState ? wx.redirectTo({
            url: "../evaluation/evaluation?orderId=" + e.data.orderId + "&orderType=" + e.data.orderType + "&orderState=" + e.data.orderState
        }) : wx.redirectTo({
            url: "../evaluation/evaluation"
        }));
    },
    quxiao: function(t) {
        e.setData({
            quxiao: !1
        });
    }
});