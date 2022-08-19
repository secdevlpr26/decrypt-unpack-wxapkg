require("../../../utils/wx_x_config.js");

var e, r = require("../../../utils/util.js"), a = getApp().globalData.httpUrl;

Page({
    data: {
        cancelReason: "",
        refundresult: "",
        disp1: !1,
        disp2: !1,
        disp3: !1,
        heightFl: "display",
        heightFlg: "block",
        overflowFlg: "auto",
        bohuiReason: "无理由",
        clicked: 0,
        noMore: !1,
        clicked1: 0,
        noMore1: !1,
        clicked2: 0,
        noMore2: !1,
        httpUrl: a,
        currentTab: 0,
        takeOutDispatchType: "",
        displayy: "none",
        displayy_0: "none",
        displayy_1: "none"
    },
    onLoad: function(t) {
        e = this, wx.getStorage({
            key: "takeOutDispatchType",
            success: function(r) {
                e.setData({
                    takeOutDispatchType: r.data
                });
            }
        }), e.setData({
            refundresult: ""
        }), r.getShareInfos(e, a), r.setUserId(e), r.setCompanyId(e, t), r.setStoreInfo(e), 
        wx.setStorage({
            key: "couponInfo",
            data: ""
        }), wx.setStorage({
            key: "couponFlg",
            data: "0"
        }), wx.setStorage({
            key: "couponId",
            data: ""
        }), wx.getStorage({
            key: "storeId",
            success: function(r) {
                e.setData({
                    storeId: r.data
                }), wx.getStorage({
                    key: "userId",
                    success: function(a) {
                        console.log("userId:" + a.data), console.log("storeId:" + r.data), e.getReservedOrderList(a.data, r.data), 
                        e.getOrderList(a.data, r.data), e.getTakeOutList(a.data, r.data);
                    },
                    fail: function(e) {
                        console.log("========userId fail=======");
                    }
                });
            },
            fail: function(e) {
                console.log("========storeId fail=======");
            }
        });
    },
    goToDetaY: function(r) {
        console.log("=====状态是多少=========", r), wx.setStorage({
            key: "couponInfo",
            data: ""
        });
        var a = r.currentTarget.dataset.orderId, t = r.currentTarget.dataset.orderState;
        wx.setStorage({
            key: "orderId",
            data: a
        }), wx.setStorage({
            key: "orderType",
            data: "Y"
        }), wx.setStorage({
            key: "wmFlg",
            data: !1
        }), wx.setStorage({
            key: "dcFlg",
            data: !1
        }), wx.setStorage({
            key: "ydFlg",
            data: !0
        }), "1" == t ? (console.log("已提交"), wx.navigateTo({
            url: "../destine/waitReceipt/waitReceipt?orderId=" + a + "&orderType=Y&orderState=1"
        })) : "2" == t ? (console.log("已接单"), e.editOrder(r)) : "4" == t ? wx.navigateTo({
            url: "evalOrder/evalOrder?orderId=" + a + "&orderType=Y&orderState=4"
        }) : "5" == t ? e.setData({
            displayy_0: "block",
            carname_0: "订单已取消",
            titlename_0: "提示信息"
        }) : "6" == t ? wx.navigateTo({
            url: "../destine/Receipt/Receipt?orderId=" + a + "&orderType=Y&orderState=6"
        }) : "9" == t ? e.checkOrder(r) : "10" == t || "11" == t ? wx.navigateTo({
            url: "evalOrder/evaluatedOrder/evaluatedOrder?orderId=" + a + "&orderType=Y&orderState=" + t
        }) : "11" == t ? e.getPayBackInfo(r) : "12" == t ? wx.navigateTo({
            url: "evalOrder/evaluatedOrder/evaluatedOrder?orderId=" + a + "&orderType=Y&orderState=" + t
        }) : "13" == t ? e.bohuiReason(r) : "14" == t ? e.payBack(r) : wx.navigateTo({
            url: "evalOrder/evalOrder?orderId=" + a + "&orderType=Y"
        });
    },
    goToDetaD: function(r) {
        console.log("状态是多少====", r), wx.setStorage({
            key: "couponInfo",
            data: ""
        }), wx.setStorage({
            key: "dcFlg",
            data: !0
        }), wx.setStorage({
            key: "ydFlg",
            data: !1
        }), wx.setStorage({
            key: "wmFlg",
            data: !1
        }), wx.setStorage({
            key: "orderType",
            data: "D"
        });
        var a = r.currentTarget.dataset.dcBeizhu;
        wx.setStorage({
            key: "dcBeizhu",
            data: a
        });
        var t = r.currentTarget.dataset.id, o = r.currentTarget.dataset.orderState;
        "9" == o ? e.checkOrder(r) : "6" == o ? wx.navigateTo({
            url: "evalOrder/bohuiOrder/bohuiOrder?orderId=" + t + "&orderType=D&orderState=6"
        }) : "10" == o || "11" == o ? wx.navigateTo({
            url: "evalOrder/evaluatedOrder/evaluatedOrder?orderId=" + t + "&orderType=D&orderState=" + o
        }) : "11" == o ? e.getPayBackInfo(r) : "12" == o ? wx.navigateTo({
            url: "evalOrder/evaluatedOrder/evaluatedOrder?orderId=" + t + "&orderType=D&orderState=" + o
        }) : "13" == o ? e.bohuiReason(r) : "14" == o ? e.payBack(r) : wx.navigateTo({
            url: "evalOrder/evalOrder?orderId=" + t + "&orderType=D"
        });
    },
    goToDetaW: function(r) {
        wx.setStorage({
            key: "dcFlg",
            data: !1
        }), wx.setStorage({
            key: "ydFlg",
            data: !1
        }), wx.setStorage({
            key: "wmFlg",
            data: !0
        }), wx.setStorage({
            key: "k",
            data: "k"
        });
        var a = r.currentTarget.dataset.id, t = r.currentTarget.dataset.orderState;
        if (console.log("=====orderState========"), console.log(t, a), "0" == e.data.takeOutDispatchType) if ("9" == t || "4" == t) wx.navigateTo({
            url: "evalOrder/paidOrder/paidOrder?orderId=" + a + "&orderType=W&orderState=" + t
        }); else {
            if ("3" == t) return void console.log("配送中");
            "6" == t ? (console.log("已驳回"), wx.navigateTo({
                url: "evalOrder/bohuiOrder/bohuiOrder?orderId=" + a + "&orderType=W&orderState=6"
            })) : "10" == t || "11" == t || "15" == t ? wx.navigateTo({
                url: "evalOrder/evaluatedOrder/evaluatedOrder?orderId=" + a + "&orderType=W&orderState=" + t
            }) : "11" == t ? e.getPayBackInfo(r) : "12" == t ? wx.navigateTo({
                url: "evalOrder/evaluatedOrder/evaluatedOrder?orderId=" + a + "&orderType=W&orderState=" + t
            }) : "13" == t ? e.bohuiReason(r) : "14" == t ? e.payBack(r) : "26" == t ? wx.navigateTo({
                url: "evalOrder/paidOrder/paidOrder?orderId=" + a + "&orderType=W&orderState=" + t
            }) : (wx.setStorage({
                key: "couponInfo",
                data: ""
            }), wx.navigateTo({
                url: "evalOrder/submitOrder/submitOrder?orderId=" + a + "&orderType=W"
            }));
        } else if ("1" == e.data.takeOutDispatchType) {
            var o = r.currentTarget.dataset.psf;
            if (wx.setStorage({
                key: "deliveryPrice",
                data: o
            }), "9" == t || "4" == t) {
                var d = r.currentTarget.dataset.psf;
                wx.setStorage({
                    key: "deliveryPrice",
                    data: d
                }), wx.navigateTo({
                    url: "evalOrder/paidOrder/paidOrder?orderId=" + a + "&orderType=W&orderState=" + t
                });
            } else {
                if ("20" == t || "21" == t || "22" == t || "23" == t) return console.log("配送中"), 
                void e.checkOrder(r);
                "6" == t ? (console.log("已驳回"), wx.navigateTo({
                    url: "evalOrder/bohuiOrder/bohuiOrder?orderId=" + a + "&orderType=W&orderState=6"
                })) : "10" == t || "11" == t || "24" == t ? wx.navigateTo({
                    url: "evalOrder/evaluatedOrder/evaluatedOrder?orderId=" + a + "&orderType=W&orderState=" + t
                }) : "11" == t ? e.getPayBackInfo(r) : "12" == t ? wx.navigateTo({
                    url: "evalOrder/evaluatedOrder/evaluatedOrder?orderId=" + a + "&orderType=W&orderState=" + t
                }) : "13" == t ? e.bohuiReason(r) : "26" == t ? wx.navigateTo({
                    url: "evalOrder/paidOrder/paidOrder?orderId=" + a + "&orderType=W&orderState=" + t
                }) : (wx.setStorage({
                    key: "couponInfo",
                    data: ""
                }), wx.navigateTo({
                    url: "evalOrder/submitOrder/submitOrder?orderId=" + a + "&orderType=W"
                }));
            }
        }
    },
    getReservedOrderList: function(r, t) {
        console.log("预定"), wx.request({
            url: a + "skordermodel/selReservedOrderWX",
            data: {
                wechatUserId: r,
                storeId: t
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(r) {
                e.setData({
                    onClickFlag: !0,
                    orders: r.data.data
                });
                var a = r.data.data, t = [], o = [], d = !1;
                if (a.length >= 5) {
                    for (var n = 0; n < 5; n++) t[n] = a[n], 1 * t[n].orderReceivablePrice > 1 * t[n].orderRealPrice ? o[n] = (1 * t[n].orderReceivablePrice - 1 * t[n].orderRealPrice).toFixed(2) : o[n] = 0;
                    d = !1;
                } else {
                    for (var s = 0; s < a.length; s++) t[s] = a[s], 1 * t[s].orderReceivablePrice > 1 * t[s].orderRealPrice ? o[s] = (1 * t[s].orderReceivablePrice - 1 * t[s].orderRealPrice).toFixed(2) : o[s] = 0;
                    d = !0;
                }
                e.setData({
                    infos21: t,
                    noMore: d,
                    orderYHYprice21: o
                });
            }
        });
    },
    getOrderList: function(r, t) {
        wx.request({
            url: a + "skordermodel/selOrderInfoWX",
            data: {
                wechatUserId: r,
                storeId: t
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(r) {
                e.setData({
                    onClickFlag: !0,
                    orders1: r.data.data
                });
                var a = r.data.data, t = [], o = [], d = !1;
                if (a.length >= 5) {
                    for (var n = 0; n < 5; n++) t[n] = a[n], 1 * t[n].orderReceivablePrice > 1 * t[n].orderRealPrice ? o[n] = (1 * t[n].orderReceivablePrice - 1 * t[n].orderRealPrice).toFixed(2) : o[n] = 0;
                    d = !1;
                } else {
                    for (var s = 0; s < a.length; s++) t[s] = a[s], 1 * t[s].orderReceivablePrice > 1 * t[s].orderRealPrice ? o[s] = (1 * t[s].orderReceivablePrice - 1 * t[s].orderRealPrice).toFixed(2) : o[s] = 0;
                    d = !0;
                }
                e.setData({
                    infos22: t,
                    noMore1: d,
                    orderYHDprice22: o
                });
            }
        });
    },
    getTakeOutList: function(r, t) {
        console.log("外卖"), wx.request({
            url: a + "skordermodel/selTakeOutOrderWX",
            data: {
                wechatUserId: r,
                storeId: t
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(r) {
                console.log("我是外卖订单"), console.log("0----------------外卖订单" + JSON.stringify(r.data.data[0].orderState)), 
                console.log("0----------------外卖订单", r.data), e.setData({
                    onClickFlag: !0,
                    orders2: r.data.data
                });
                var a = r.data.data, t = [], o = [], d = !1;
                if (a.length >= 5) {
                    for (var n = 0; n < 5; n++) t[n] = a[n], 1 * t[n].orderReceivablePrice > 1 * t[n].orderRealPrice ? o[n] = (1 * t[n].orderReceivablePrice - 1 * t[n].orderRealPrice).toFixed(2) : o[n] = 0;
                    console.log("woshi jiage chajia"), console.log(o), d = !1;
                } else {
                    for (var s = 0; s < a.length; s++) t[s] = a[s], 1 * t[s].orderReceivablePrice > 1 * t[s].orderRealPrice ? o[s] = (1 * t[s].orderReceivablePrice - 1 * t[s].orderRealPrice).toFixed(2) : o[s] = 0;
                    console.log("woshi jiage chajia22"), console.log(o), d = !0;
                }
                e.setData({
                    infos23: t,
                    noMore2: d,
                    orderYHprice23: o
                });
            }
        });
    },
    swiperTab: function(r) {
        var a = r.detail.current;
        wx.getStorage({
            key: "storeId",
            success: function(r) {
                wx.getStorage({
                    key: "userId",
                    success: function(t) {
                        "0" == a ? e.getReservedOrderList(t.data, r.data) : "1" == a ? e.getOrderList(t.data, r.data) : e.getTakeOutList(t.data, r.data);
                    },
                    fail: function(e) {
                        console.log("========userId fail=======");
                    }
                });
            },
            fail: function(e) {
                console.log("========storeId fail=======");
            }
        }), (e = this).setData({
            currentTab: r.detail.current
        }), console.log(r);
    },
    clickTab: function(r) {
        console.log(r);
        var a = r.currentTarget.dataset.orderName;
        if (wx.getStorage({
            key: "storeId",
            success: function(r) {
                wx.getStorage({
                    key: "userId",
                    success: function(t) {
                        "reserve" == a ? e.getReservedOrderList(t.data, r.data) : "order" == a ? e.getOrderList(t.data, r.data) : e.getTakeOutList(t.data, r.data);
                    },
                    fail: function(e) {
                        console.log("========userId fail=======");
                    }
                });
            },
            fail: function(e) {
                console.log("========storeId fail=======");
            }
        }), this.data.currentTab === r.target.dataset.current) return !1;
        e.setData({
            currentTab: r.target.dataset.current
        }), wx.setStorage({
            key: "currentTab",
            data: r.target.dataset.current
        });
    },
    onReady: function() {},
    closeTk: function() {
        e.setData({
            displa: !1
        }), this.onLoad();
    },
    selOperationRecord: function() {
        wx.getStorage({
            key: "storeId",
            success: function(e) {
                wx.getStorage({
                    key: "userId",
                    success: function(r) {
                        wx.request({
                            url: a + "skmembermodel/getOperationRecordNum",
                            data: {
                                wxUserUuid: r.data,
                                storeUuid: e.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                console.log(e.data + "===res.data提醒信息量===>");
                                var r = e.data, a = String(r);
                                r > 0 && wx.setTabBarBadge({
                                    index: 3,
                                    text: a
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    onShow: function() {
        e = this, wx.getStorage({
            key: "currentTab",
            success: function(r) {
                console.log("得到的列表参数==========》", r.data), e.setData({
                    currentTab: r.data
                });
            }
        }), console.log("======开始清除currentTab========="), wx.removeStorage({
            key: "currentTab",
            success: function(e) {}
        }), e.onLoad(), wx.onSocketMessage(function(a) {
            console.log("===========接收到服务器信息==============", a), "skip" != a.data && "repast" != a.data && "send" != a.data || e.onLoad(), 
            "refunInfoReminding" == a.data.split("&")[0] && e.onLoad(), r.getTkInfos(e, a), 
            r.playMusic(e, a);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    r.conSocket(e.data, a);
                }
            });
        }), console.log("===order sonShow==="), e.selOperationRecord();
    },
    onHide: function() {
        e.setData({
            disp1: !1,
            disp2: !1,
            disp3: !1,
            disp4: !1,
            heightFl: "display",
            heightFlg: "block",
            overFlowFlg: "auto"
        });
    },
    onUnload: function() {
        r.closeSock();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), e = this, setTimeout(function() {
            e.onPullDownRefresh();
        }, 500);
    },
    onReachBottom: function() {
        0 == e.data.currentTab ? e.getMore() : 1 == e.data.currentTab ? e.getMore1() : 2 == e.data.currentTab && e.getMore2();
    },
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
    checkOrder: function(r) {
        var t = r.currentTarget.dataset.id, o = r.currentTarget.dataset.currentTab;
        0 == o ? (e.setData({
            orderType: "Y",
            orderId: t
        }), wx.setStorage({
            key: "orderType",
            data: "Y"
        }), wx.setStorage({
            key: "orderId",
            data: t
        }), wx.setStorage({
            key: "wmFlg",
            data: !1
        }), wx.setStorage({
            key: "dcFlg",
            data: !1
        }), wx.setStorage({
            key: "ydFlg",
            data: !0
        })) : 1 == o ? (e.setData({
            orderType: "D",
            orderId: t
        }), wx.setStorage({
            key: "orderType",
            data: "D"
        }), wx.setStorage({
            key: "orderId",
            data: t
        }), wx.setStorage({
            key: "wmFlg",
            data: !1
        }), wx.setStorage({
            key: "dcFlg",
            data: !0
        }), wx.setStorage({
            key: "ydFlg",
            data: !1
        })) : (console.log(t), e.setData({
            orderType: "W",
            orderId: t
        }), wx.setStorage({
            key: "orderType",
            data: "W"
        }), wx.setStorage({
            key: "orderId",
            data: t
        }), wx.setStorage({
            key: "wmFlg",
            data: !0
        }), wx.setStorage({
            key: "dcFlg",
            data: !1
        }), wx.setStorage({
            key: "ydFlg",
            data: !1
        })), wx.request({
            url: a + "skordermodel/getOrderById",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                id: t,
                orderType: e.data.orderType
            },
            success: function(e) {
                wx.setStorage({
                    key: "foodInfo",
                    data: e.data
                }), wx.navigateTo({
                    url: "evalOrder/checkOrder/checkOrder"
                });
            }
        });
    },
    payBack: function(r) {
        var t = r.currentTarget.dataset.id, o = r.currentTarget.dataset.currentTab;
        if (0 == o) {
            e.setData({
                orderType: "Y",
                orderId: t
            });
        } else if (1 == o) {
            e.setData({
                orderType: "D",
                orderId: t
            });
        } else {
            e.setData({
                orderType: "W",
                orderId: t
            });
        }
        wx.request({
            url: a + "skordermodel/getOrderById",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                id: t,
                orderType: e.data.orderType
            },
            success: function(r) {
                var a = r.data.orderState;
                wx.setStorage({
                    key: "os",
                    data: a
                }), console.log(e.data.orderType);
                var o = r.data.orderRealPrice, d = r.data.orderPayType, n = r.data.orderNum;
                if ("11" == r.data.orderState) return e.setData({
                    displayy_0: "block",
                    carname_0: "该订单已退款",
                    titlename_0: "提示信息"
                }), void e.onLoad();
                wx.getStorage({
                    key: "userName",
                    success: function(r) {
                        wx.getStorage({
                            key: "storeId",
                            success: function(a) {
                                e.setData({
                                    orderNum: n,
                                    orderId: t,
                                    orderType: e.data.orderType,
                                    orderPayType: d,
                                    payBackMoney: o,
                                    userName: r.data,
                                    storeId: a.data,
                                    disp1: !0,
                                    heightFl: "height",
                                    heightFlg: "calc(100vh - 150rpx)",
                                    overFlowFlg: "hidden"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    evalOrder: function(r) {
        var t = r.currentTarget.dataset.id, o = r.currentTarget.dataset.currentTab;
        0 == o ? (e.setData({
            orderType: "Y",
            orderId: t
        }), wx.setStorage({
            key: "orderType",
            data: "Y"
        }), wx.setStorage({
            key: "orderId",
            data: t
        })) : 1 == o ? (e.setData({
            orderType: "D",
            orderId: t
        }), wx.setStorage({
            key: "orderType",
            data: "D"
        }), wx.setStorage({
            key: "orderId",
            data: t
        })) : (console.log(t), e.setData({
            orderType: "W",
            orderId: t
        }), wx.setStorage({
            key: "orderType",
            data: "W"
        }), wx.setStorage({
            key: "orderId",
            data: t
        })), wx.request({
            url: a + "skordermodel/getOrderById",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                id: t,
                orderType: e.data.orderType
            },
            success: function(e) {
                wx.setStorage({
                    key: "foodInfo",
                    data: e.data
                }), wx.navigateTo({
                    url: "evalOrder/evaluation/evaluation"
                });
            }
        });
    },
    payOrder: function(e) {
        var r = e.currentTarget.dataset.id, a = e.currentTarget.dataset.currentTab, t = void 0, o = void 0, d = void 0, n = void 0;
        0 == a ? (t = "Y", o = !1, d = !1, n = !0, console.log(t)) : 1 == a ? (console.log("我是点餐"), 
        t = "D", o = !1, d = !0, n = !1, console.log(t)) : (console.log("我是外卖"), t = "W", 
        o = !1, d = !1, n = !1, console.log(t)), wx.setStorage({
            key: "couponInfo",
            data: ""
        }), wx.setStorage({
            key: "orderId",
            data: r
        }), wx.setStorage({
            key: "orderType",
            data: t
        }), wx.setStorage({
            key: "wmFlg",
            data: o
        }), wx.setStorage({
            key: "dcFlg",
            data: d
        }), wx.setStorage({
            key: "ydFlg",
            data: n
        }), wx.navigateTo({
            url: "evalOrder/evalOrder?orderId=" + r + "&orderType=" + t
        });
    },
    editOrder: function(e) {
        e.currentTarget.dataset.item;
        var r = e.currentTarget.dataset.id, a = e.currentTarget.dataset.currentTab, t = void 0, o = e.currentTarget.dataset.orderState, d = void 0, n = void 0, s = void 0;
        0 == a ? (t = "Y", d = !1, n = !1, s = !0) : 1 == a ? (t = "D", d = !1, n = !0, 
        s = !1) : (t = "W", d = !0, n = !1, s = !1), wx.setStorage({
            key: "orderType",
            data: t
        }), wx.setStorage({
            key: "wmFlg",
            data: d
        }), wx.setStorage({
            key: "dcFlg",
            data: n
        }), wx.setStorage({
            key: "ydFlg",
            data: s
        }), wx.setStorage({
            key: "orderId",
            data: r
        }), console.log(t + o), "Y" == t && "1" == o ? wx.navigateTo({
            url: "../destine/destine?orderId=" + r + "&editType=N"
        }) : wx.navigateTo({
            url: "../takeOut/takeOut?flag=" + t + "&orderId=" + r + "&editType=N"
        });
    },
    cancelApply: function(r) {
        var t = r.currentTarget.dataset.id;
        r.currentTarget.dataset.currentTab;
        wx.request({
            url: a + "skordermodel/getOrderById",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                id: t,
                orderType: "W"
            },
            success: function(r) {
                console.log("============取消配送获取订单信息================"), console.log("orderNum:" + r.data.orderNum), 
                console.log("orderState:" + r.data.orderState);
                var a = r.data.orderNum;
                if ("???" == r.data.orderState) return e.setData({
                    displayy_0: "block",
                    carname_0: "该订单已取消配送",
                    titlename_0: "提示信息"
                }), void e.onLoad();
                e.setData({
                    orderNum: a,
                    orderId: t,
                    orderType: "W",
                    disp4: !0,
                    heightFl: "height",
                    heightFlg: "calc(100vh - 150rpx)",
                    overFlowFlg: "hidden"
                });
            }
        });
    },
    cancelOrder: function(r) {
        console.log("========cancelOrder======="), console.log(r);
        var t = r.currentTarget.dataset.currentTab, o = r.currentTarget.dataset.id, d = void 0;
        0 == t ? ("Y", d = a + "skordermodel/updReservedOrder") : 1 == t ? ("D", d = a + "skordermodel/updOrderInfo") : ("W", 
        d = a + "skordermodel/updTakeOutOrder"), wx.request({
            url: d,
            data: {
                orderState: "5",
                id: o
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(r) {
                e.onLoad();
            }
        });
    },
    getMore: function() {
        if (1 != e.data.noMore) {
            var r = e.data.infos21, a = e.data.orderYHYprice21, t = e.data.clicked, o = !1;
            if (10 + 10 * (t += 1) <= e.data.orders.length) {
                for (var d = 0; d < 10 + 10 * t; d++) r[d] = e.data.orders[d], 1 * r[d].orderReceivablePrice > 1 * r[d].orderRealPrice ? a[d] = (1 * r[d].orderReceivablePrice - 1 * r[d].orderRealPrice).toFixed(2) : a[d] = 0;
                o = !1;
            } else {
                for (var n = 0; n < e.data.orders.length; n++) r[n] = e.data.orders[n], 1 * r[n].orderReceivablePrice > 1 * r[n].orderRealPrice ? a[n] = (1 * r[n].orderReceivablePrice - 1 * r[n].orderRealPrice).toFixed(2) : a[n] = 0;
                o = !0;
            }
            e.setData({
                infos21: r,
                clicked: t,
                noMore: o,
                orderYHYprice21: a
            });
        } else wx.showToast({
            title: "无更多信息",
            icon: "loading",
            duration: 1e3
        });
    },
    getMore1: function() {
        if (1 != e.data.noMore1) {
            var r = e.data.infos22, a = e.data.orderYHDprice22, t = e.data.clicked1, o = !1;
            if (10 + 10 * (t += 1) <= e.data.orders1.length) {
                for (var d = 0; d < 10 + 10 * t; d++) r[d] = e.data.orders1[d], 1 * r[d].orderReceivablePrice > 1 * r[d].orderRealPrice ? a[d] = (1 * r[d].orderReceivablePrice - 1 * r[d].orderRealPrice).toFixed(2) : a[d] = 0;
                o = !1;
            } else {
                for (var n = 0; n < e.data.orders1.length; n++) r[n] = e.data.orders1[n], 1 * r[n].orderReceivablePrice > 1 * r[n].orderRealPrice ? a[n] = (1 * r[n].orderReceivablePrice - 1 * r[n].orderRealPrice).toFixed(2) : a[n] = 0;
                o = !0;
            }
            e.setData({
                infos22: r,
                clicked1: t,
                noMore1: o,
                orderYHDprice22: a
            });
        } else wx.showToast({
            title: "无更多信息",
            icon: "loading",
            duration: 1e3
        });
    },
    getMore2: function() {
        if (1 != e.data.noMore2) {
            var r = e.data.infos23, a = e.data.clicked2, t = e.data.orderYHprice23, o = !1;
            if (10 + 10 * (a += 1) <= e.data.orders2.length) {
                for (var d = 0; d < 10 + 10 * a; d++) r[d] = e.data.orders2[d], 1 * r[d].orderReceivablePrice > 1 * r[d].orderRealPrice ? t[d] = (1 * r[d].orderReceivablePrice - 1 * r[d].orderRealPrice).toFixed(2) : t[d] = 0;
                o = !1;
            } else {
                for (var n = 0; n < e.data.orders2.length; n++) r[n] = e.data.orders2[n], 1 * r[n].orderReceivablePrice > 1 * r[n].orderRealPrice ? t[n] = (1 * r[n].orderReceivablePrice - 1 * r[n].orderRealPrice).toFixed(2) : t[n] = 0;
                o = !0;
            }
            e.setData({
                infos23: r,
                clicked2: a,
                noMore2: o,
                orderYHprice23: t
            });
        } else wx.showToast({
            title: "无更多信息",
            icon: "loading",
            duration: 1e3
        });
    },
    getReason: function(r) {
        console.log(r.detail.value + "===e.detail.value====>"), e.setData({
            refundresult: r.detail.value
        });
    },
    submitPayBack: function() {
        console.log(e.data.refundresult + "=====that.data.refundresult====>"), "" != e.data.refundresult ? (e.setData({
            disp1: !1,
            heightFl: "display",
            heightFlg: "block",
            overflowFlg: "auto"
        }), wx.request({
            url: a + "skmembermodel/insterRefunInfoWX",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                orderid: e.data.orderId,
                refundmoney: e.data.payBackMoney,
                refundperson: e.data.userId,
                refundresult: e.data.refundresult,
                orderType: e.data.orderType,
                storeId: e.data.storeId,
                refundType: e.data.orderPayType
            },
            success: function(r) {
                e.setData({
                    carname: "申请已提交",
                    displayy: "block"
                }), e.onLoad();
            }
        })) : e.setData({
            displayy_0: "block",
            carname_0: "请输入退款原因",
            titlename_0: "提示信息"
        });
    },
    chkOrder0: function() {
        e.setData({
            displayy: "none"
        });
    },
    submitApply: function() {
        "" != e.data.cancelReason ? e.setData({
            disp4: !1,
            heightFl: "display",
            heightFlg: "block",
            overflowFlg: "auto"
        }) : e.setData({
            displayy_0: "block",
            carname_0: "请输入取消配送的原因",
            titlename_0: "提示信息"
        });
    },
    getCancelReason: function(r) {
        e.setData({
            cancelReason: r.detail.value
        });
    },
    resume: function() {
        e.setData({
            disp1: !1,
            disp2: !1,
            disp3: !1,
            disp4: !1,
            heightFl: "display",
            heightFlg: "block",
            overFlowFlg: "auto",
            refundresult: ""
        });
    },
    contact: function() {
        console.log("==========绑定打电话功能=========="), wx.getStorage({
            key: "storeInfo",
            success: function(r) {
                console.log("========联系电话========="), console.log(r.data.storeInfoTelephoneNum), 
                null != r.data.storeInfoTelephoneNum && "" != r.data.storeInfoTelephoneNum && void 0 != r.data.storeInfoTelephoneNum && "undefined" != r.data.storeInfoTelephoneNum && "null" != r.data.storeInfoTelephoneNum || e.setData({
                    displayy_0: "block",
                    carname_0: "无联系电话",
                    titlename_0: "提示信息"
                }), wx.makePhoneCall({
                    phoneNumber: r.data.storeInfoTelephoneNum
                });
            }
        });
    },
    chkOrder0_1: function() {
        var r = e.data.orderId, t = e.data.currentTab;
        0 == t ? (e.setData({
            orderType: "Y",
            orderId: r
        }), wx.setStorage({
            key: "orderType",
            data: "Y"
        }), wx.setStorage({
            key: "orderId",
            data: r
        })) : 1 == t ? (e.setData({
            orderType: "D",
            orderId: r
        }), wx.setStorage({
            key: "orderType",
            data: "D"
        }), wx.setStorage({
            key: "orderId",
            data: r
        })) : (e.setData({
            orderType: "W",
            orderId: r
        }), wx.setStorage({
            key: "orderType",
            data: "W"
        }), wx.setStorage({
            key: "orderId",
            data: r
        }), wx.setStorage({
            key: "wmFlg",
            data: !0
        }), wx.setStorage({
            key: "dcFlg",
            data: !1
        }), wx.setStorage({
            key: "ydFlg",
            data: !1
        })), wx.request({
            url: a + "skmembermodel/cancelRefunInfoWX",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                orderid: e.data.orderId,
                orderType: e.data.orderType
            },
            success: function(r) {
                "000001" != r.data.message ? e.onLoad() : e.setData({
                    displayy_0: "block",
                    carname_0: "不可取消退款",
                    titlename_0: "退款正在途中"
                });
            }
        });
    },
    chkOrder1_1: function() {},
    resumePayBack: function(r) {
        e.setData({
            displayy_1: "block",
            carname_1: "即将取消退款",
            titlename_1: "提示信息",
            orderId: r.currentTarget.dataset.id,
            currentTab: r.currentTarget.dataset.currentTab
        });
    },
    getPayBackInfo: function(r) {
        var t = r.currentTarget.dataset.id;
        wx.getStorage({
            key: "storeId",
            success: function(r) {
                wx.request({
                    url: a + "skmembermodel/selRefundInfo",
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: {
                        orderid: t,
                        storeId: r.data
                    },
                    success: function(r) {
                        console.log("退款原因-----res.data", r.data);
                        var a = r.data.data[0];
                        e.setData({
                            disp3: !0,
                            orderNum: a.orderNum,
                            payBackMoney: a.refundmoney,
                            refundresult: a.refundresult
                        }), console.log("=======查看退款订单========"), console.log(r.data);
                    }
                });
            }
        });
    },
    bohuiReason: function(r) {
        var t = r.currentTarget.dataset.id;
        e.setData({
            disp2: !0
        }), wx.getStorage({
            key: "storeId",
            success: function(r) {
                wx.request({
                    url: a + "skmembermodel/selRefundInfo",
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: {
                        orderid: t,
                        storeId: r.data
                    },
                    success: function(r) {
                        var a = r.data.data[0];
                        console.log("=======查看驳回原因========"), console.log(r.data.data[0]), e.setData({
                            disp2: !0,
                            orderNum: a.orderNum,
                            payBackMoney: a.refundmoney,
                            bohuiReason: a.rejectreson
                        });
                    }
                });
            }
        });
    }
});