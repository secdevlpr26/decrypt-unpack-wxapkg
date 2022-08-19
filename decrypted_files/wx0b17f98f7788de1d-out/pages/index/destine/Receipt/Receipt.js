var e, t = require("../../../../utils/util.js"), a = getApp().globalData.httpUrl;

Page({
    data: {
        seconds: "",
        minute: "",
        hour: "",
        second: "",
        date: "",
        time: "",
        tableType: "",
        mealsNumber: "",
        contants: "",
        contantsTel: "",
        textDesc: "",
        jiedanStatu: "",
        reason: "",
        wechatUserId: "",
        displayy_0: "none"
    },
    onLoad: function(o) {
        e = this, t.getShareInfos(e, a), t.setStoreInfo(e), t.setCompanyId(e, o), e.setData({
            sign: !0
        });
        var r = o.orderState;
        "2" == r ? (e.setData({
            jiedanStatu: "商家已接单",
            orderState: "2"
        }), console.log("预订单id======>" + o.orderId), wx.request({
            url: a + "skordermodel/getOrderById",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                id: o.orderId,
                orderType: "Y"
            },
            success: function(t) {
                var a = t.data.reservedEstimatedTime.split(" "), o = a[0], r = a[1];
                e.setData({
                    orderInfo: t.data,
                    date0: o,
                    time0: r
                });
            }
        }), wx.setStorage({
            key: "orderId",
            data: o.orderId
        }), e.reservedEstimated()) : "6" == r && wx.getStorage({
            key: "orderId",
            success: function(t) {
                wx.request({
                    url: a + "skordermodel/getOrderById",
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: {
                        id: t.data,
                        orderType: "Y"
                    },
                    success: function(t) {
                        console.log("++++++++++++++++++", t);
                        var a = t.data.reservedEstimatedTime.split(" "), o = a[0], r = a[1], d = t.data.orderRefuseRemark;
                        null != d && void 0 != d && "" != d || (d = "无理由"), e.setData({
                            jiedanStatu: "您的订单已被商家拒绝",
                            orderState: "6",
                            reason: d,
                            orderInfo: t.data,
                            date0: o,
                            time0: r
                        });
                    }
                });
            }
        }), wx.getStorage({
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
            key: "userId",
            success: function(t) {
                e.setData({
                    wechatUserId: t.data
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
                                                        wx.getStorage({
                                                            key: "orderDesc",
                                                            success: function(n) {
                                                                e.setData({
                                                                    date: t.data,
                                                                    time: a.data,
                                                                    tableType: o.data,
                                                                    mealsNumber: r.data,
                                                                    contants: d.data,
                                                                    contantsTel: s.data,
                                                                    textDesc: n.data
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
        });
    },
    countDown: function() {
        var e = this;
        if (e.data.sign) {
            var t = e.data.seconds, o = e.data.hour, r = e.data.minute, d = e.data.second;
            if (t > 0) var s = setTimeout(function() {
                d = (t -= 1) - 60 * Math.floor(t / 60), r = Math.floor((t - 3600 * Math.floor(t / 3600)) / 60), 
                o = Math.floor(t / 3600), e.setData({
                    seconds: t,
                    hour: o,
                    minute: r,
                    second: d
                });
                e.countDown();
            }, 1e3); else e.setData({
                hour: 0,
                minute: 0,
                second: 0
            }), clearTimeout(s), t = 0, wx.getStorage({
                key: "orderId",
                success: function(t) {
                    wx.request({
                        url: a + "skordermodel/updReservedOrder",
                        data: {
                            wechatUserId: e.data.wechatUserId,
                            orderState: "8",
                            id: t.data,
                            storeId: e.data.storeId
                        },
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            e.setData({
                                displayy_0: "block",
                                carname_0: "预定订单已自动取消",
                                titlename_0: "提示信息"
                            });
                        }
                    });
                }
            });
        }
    },
    chkOrder0_0: function() {
        wx.switchTab({
            url: "../../index"
        });
    },
    reservedEstimated: function() {
        wx.getStorage({
            key: "orderId",
            success: function(t) {
                console.log(t.data), wx.request({
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
                        console.log("预计到店时间 ==> " + t.data.reservedEstimatedTime);
                        var o = new Date(t.data.reservedEstimatedTime.replace(/-/g, "/")).getTime() / 1e3;
                        console.log("预计到店时间转换=====》" + o);
                        var r = new Date().getTime() / 1e3;
                        console.log("获取当前时间=====》" + r.toFixed(0));
                        var d = (1 * o.toFixed(0) - 1 * r.toFixed(0) + 3600).toFixed(0);
                        if (console.log("获取当前时间=====》" + d), d > 0) {
                            var s = d, n = s - 60 * Math.floor(s / 60), c = Math.floor(s - 3600 * Math.floor(s / 3600)) / 60, i = Math.floor(s / 3600);
                            e.setData({
                                seconds: s,
                                minute: c,
                                second: n,
                                hour: i
                            });
                            e.countDown();
                        } else e.setData({
                            hour: 0,
                            minute: 0,
                            second: 0
                        }), wx.getStorage({
                            key: "orderId",
                            success: function(t) {
                                wx.request({
                                    url: a + "skordermodel/updReservedOrder",
                                    data: {
                                        wechatUserId: e.data.wechatUserId,
                                        orderState: "8",
                                        id: t.data,
                                        storeId: e.data.storeId
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(t) {
                                        e.setData({
                                            displayy_0: "block",
                                            carname_0: "预定订单已自动取消",
                                            titlename_0: "提示信息"
                                        });
                                    }
                                });
                            }
                        });
                    }
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
                        wechatUserId: e.data.wechatUserId,
                        orderState: "5",
                        id: t.data,
                        storeId: e.data.storeId
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        wx.redirectTo({
                            url: "../../destine/destine"
                        });
                    }
                });
            }
        });
    },
    directOrder: function(e) {
        wx.setStorage({
            key: "wmFlg",
            data: !1
        }), wx.setStorage({
            key: "dcFlg",
            data: !1
        }), wx.setStorage({
            key: "orderType",
            data: "Y"
        }), wx.getStorage({
            key: "orderId",
            success: function(e) {
                wx.redirectTo({
                    url: "../../takeOut/takeOut?orderId=" + e.data
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
        });
    },
    onHide: function() {},
    onUnload: function() {
        console.log("预定接单页面关闭"), (e = this).setData({
            sign: !1
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), e = this, !_This.data.oUInfo.unionId && getApp().getUserData(function(t) {
            e.fGetCUserInfo(t.unionId), e.setData({
                oUInfo: t
            });
        }), setTimeout(function() {
            e.pullRefresh();
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
    }
});