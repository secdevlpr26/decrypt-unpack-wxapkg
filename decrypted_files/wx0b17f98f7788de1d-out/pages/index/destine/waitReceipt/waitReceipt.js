var e, t = require("../../../../utils/util.js"), a = getApp().globalData.httpUrl;

Page({
    data: {
        orders: [],
        seconds: "",
        minute: "",
        second: "",
        date: "",
        time: "",
        tableType: "",
        mealsNumber: "",
        contants: "",
        contantsTel: "",
        textDesc: "",
        phone: "111",
        address: "111",
        receipted: "1",
        waitReceitName: "等待商家接单",
        displayy_0: "none",
        displayy_1: "none"
    },
    onLoad: function(o) {
        if (e = this, t.getShareInfos(e, a), t.setCompanyId(e, o), t.setStoreInfo(e), e.setData({
            sign: !0
        }), o.orderId) {
            var d = o.orderId;
            o.orderType;
            wx.request({
                url: a + "skordermodel/getOrderById",
                data: {
                    orderType: "Y",
                    id: d
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    console.log("orderId-----" + t.data.id), wx.setStorage({
                        key: "orderId",
                        data: t.data.id
                    });
                    var a = t.data.reservedEstimatedTime.split(" "), o = a[0], d = a[1];
                    e.setData({
                        date: o,
                        time: d,
                        tableType: t.data.tableName,
                        mealsNumber: t.data.reservedCount,
                        contants: t.data.reservedName,
                        contantsTel: t.data.reservedPhoneNum,
                        textDesc: t.data.orderRemarke,
                        orderCreateTimes: t.data.orderCreateTimes,
                        receipted: t.data.orderState
                    });
                }
            });
        }
        wx.getStorage({
            key: "storeId",
            success: function(t) {
                e.setData({
                    storeId: t.data
                }), wx.request({
                    url: a + "skstoremodel/findStoreById",
                    data: {
                        storeId: t.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        e.setData({
                            phone: t.data.storeInfoTelephoneNum,
                            address: t.data.storeInfoAddress
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
                                    success: function(d) {
                                        wx.getStorage({
                                            key: "orderContractName",
                                            success: function(r) {
                                                wx.getStorage({
                                                    key: "orderContractTel",
                                                    success: function(n) {
                                                        wx.getStorage({
                                                            key: "orderDesc",
                                                            success: function(s) {
                                                                e.setData({
                                                                    date: t.data,
                                                                    time: a.data,
                                                                    tableType: o.data,
                                                                    mealsNumber: d.data,
                                                                    contants: r.data,
                                                                    contantsTel: n.data,
                                                                    textDesc: s.data
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
                });
            }
        }), e.checkOrderStatus(), "2" != e.data.receipted ? (console.log("that.data.receipted----", e.data.receipted), 
        wx.getStorage({
            key: "orderId",
            success: function(t) {
                console.log("预定单id====》", t), wx.request({
                    url: a + "skordermodel/getOrderById",
                    data: {
                        orderType: "Y",
                        id: t.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        if (console.log(t.data.orderCreateTimes, "预定创建时间"), void 0 == t.data.orderCreateTimes || "undefined" == t.data.orderCreateTimes) e.setData({
                            minute: 0,
                            second: 0,
                            waitReceitName: "订单已取消"
                        }), wx.getStorage({
                            key: "orderId",
                            success: function(t) {
                                e.setData({
                                    displayy_0: "block",
                                    carname_0: "因规定时间内商户没有确认接单，\n该预定信息自动取消！",
                                    titlename_0: "提示信息",
                                    id: t.data
                                });
                            }
                        }); else {
                            var a = new Date(t.data.orderCreateTimes.replace(/-/g, "/")).getTime() / 1e3, o = 600 - (new Date().getTime() / 1e3 - a).toFixed(0);
                            if (o > 0) {
                                var d = o, r = d - 60 * Math.floor(d / 60), n = Math.floor(d / 60);
                                e.setData({
                                    seconds: d,
                                    minute: n,
                                    second: r
                                });
                                e.countDown();
                            } else e.setData({
                                minute: 0,
                                second: 0,
                                waitReceitName: "订单已取消"
                            }), wx.getStorage({
                                key: "orderId",
                                success: function(t) {
                                    e.setData({
                                        displayy_0: "block",
                                        carname_0: "因规定时间内商户没有确认接单，\n该预定信息自动取消！",
                                        titlename_0: "提示信息",
                                        id: t.data
                                    });
                                }
                            });
                        }
                    }
                });
            }
        })) : wx.redirectTo({
            url: "../Receipt/Receipt"
        });
    },
    countDown: function() {
        var e = this;
        if (e.data.sign) {
            var t = e.data.seconds, a = e.data.minute, o = e.data.second;
            if (t > 0) var d = setTimeout(function() {
                o = (t -= 1) - 60 * Math.floor(t / 60), a = Math.floor(t / 60), e.setData({
                    seconds: t,
                    minute: a,
                    second: o
                });
                e.countDown();
            }, 1e3); else console.log("========订单已取消============="), clearTimeout(d), t = 0, 
            e.setData({
                seconds: t,
                minute: 0,
                second: 0,
                waitReceitName: "订单已取消"
            }), wx.getStorage({
                key: "orderId",
                success: function(t) {
                    e.setData({
                        displayy_1: "block",
                        carname_1: "因规定时间内商户没有确认接单，\n该预定信息自动取消！",
                        titlename_1: "提示信息",
                        id: t.data
                    });
                }
            });
        }
    },
    chkOrder0_0: function() {
        wx.request({
            url: a + "skordermodel/updReservedOrder",
            data: {
                orderState: "5",
                id: e.data.id
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                wx.navigateBack({
                    delta: 2
                });
            }
        });
    },
    chkOrder0_1: function() {
        wx.request({
            url: a + "skordermodel/updReservedOrder",
            data: {
                orderState: "5",
                id: e.data.id
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function() {
                wx.switchTab({
                    url: "../../index"
                });
            }
        });
    },
    back: function() {
        wx.getStorage({
            key: "orderId",
            success: function(t) {
                wx.request({
                    url: a + "skordermodel/updReservedOrder",
                    data: {
                        id: t.data,
                        orderState: "5",
                        storeId: e.data.storeId
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        wx.navigateBack();
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
        e = this, console.log("关闭当前页面"), wx.onSocketMessage(function(a) {
            console.log("收到服务器内容："), console.log(a), wx.getStorage({
                key: "orderId",
                success: function(e) {
                    console.log("订单id=======>" + e.data), "receipt" == a.data && wx.redirectTo({
                        url: "../Receipt/Receipt?orderState=2&orderId=" + e.data
                    }), "reject" == a.data && wx.redirectTo({
                        url: "../Receipt/Receipt?orderState=6&orderId=" + e.data
                    });
                }
            }), t.getTkInfos(e, a), t.playMusic(e, a);
        }), wx.onSocketClose(function(o) {
            wx.getStorage({
                key: "userId",
                success: function(e) {
                    t.conSocket(e.data, a), wx.onSocketOpen(function(e) {
                        console.log("WebSocket连接已打开！"), console.log(e);
                    }), wx.onSocketError(function(e) {
                        console.log("WebSocket连接打开失败，请检查！"), console.log(e);
                    });
                }
            }), e.onShow();
        });
    },
    onHide: function() {},
    onUnload: function() {
        console.log("页面关闭"), (e = this).setData({
            sign: !1
        });
    },
    onPullDownRefresh: function() {
        e.checkOrderStatus(), wx.getStorage({
            key: "orderId",
            success: function(t) {
                console.log("订单id=======>" + t.data), "2" == e.data.receipted ? wx.redirectTo({
                    url: "../Receipt/Receipt?orderState=2&orderId=" + t.data
                }) : "6" == e.data.receipted && wx.redirectTo({
                    url: "../Receipt/Receipt?orderState=6&orderId=" + t.data
                });
            }
        });
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
    checkOrderStatus: function() {
        e = this, wx.getStorage({
            key: "orderId",
            success: function(t) {
                wx.request({
                    url: a + "skordermodel/getOrderById",
                    data: {
                        orderType: "Y",
                        id: t.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        wx.setStorage({
                            key: "orderId",
                            data: t.data.id
                        }), e.setData({
                            receipted: t.data.orderState
                        });
                    }
                });
            }
        });
    }
});