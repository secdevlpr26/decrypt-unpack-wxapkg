var e, s = require("../../../../../utils/util.js"), d = require("../../../../../module/getsubmitdetails.js"), a = getApp().globalData.httpUrl;

Page({
    data: {
        shouhuo: "Ta收货",
        displ: "none",
        selectedCoupon: "",
        bkclor: "#444",
        clor: "#ffbf20",
        bkclor1: "#444",
        clor1: "#ffbf20",
        beizhu: "",
        yhprice: 0,
        receiveUser: "",
        receiveAddr: "",
        receiveTel: "",
        coupon: "选择优惠",
        foods: [],
        storeInfo: "",
        peisongfei: 0,
        canhefei: 0,
        k: "",
        wechatUserAddressId: "",
        addressId: "",
        takeOutDispatchType: "",
        displayy_0: "none",
        displayy_1: "none",
        display_alone1: "none"
    },
    selAddr: function(s) {
        "Ta收货" != e.data.shouhuo ? wx.navigateTo({
            url: "../selAddr/selAddr?selId=1&addressType=1"
        }) : wx.navigateTo({
            url: "../selAddr/selAddr?selId=0&addressType=0"
        });
    },
    selAddr1: function(s) {
        console.log(e.data.shouhuo), "Ta收货" == e.data.shouhuo ? (e.setData({
            shouhuo: "我的"
        }), d.submitDatails(e.data.orderId, "W").then(function(s) {
            "1" == s.data.addressType ? (console.log("点击有111111111"), e.setData({
                receiveUser: s.data.wechatUserAddressReceiverName,
                receiveAddr: s.data.wechatUserAddressAddress + s.data.wechatUserAddressFullAddress,
                receiveTel: s.data.wechatUserAddressReceiverPhoneNum
            })) : (console.log("点击无111111111"), e.selMorenTa()), "" == e.data.addressId && (e.setData({
                peisongfei: 0
            }), wx.setStorage({
                key: "deliveryPrice",
                data: 0
            })), wx.getStorage({
                key: "weAddressId",
                success: function(s) {
                    e.setData({
                        wechatUserAddressId: s.data
                    });
                }
            }), "" != e.data.wechatUserAddressId && "1" == e.data.takeOutDispatchType && (console.log("进点我达"), 
            e.dwd());
        })) : (e.setData({
            shouhuo: "Ta收货"
        }), d.submitDatails(e.data.orderId, "W").then(function(s) {
            "0" == s.data.addressType ? (console.log("点击有000000"), e.setData({
                receiveUser: s.data.wechatUserAddressReceiverName,
                receiveAddr: s.data.wechatUserAddressAddress + s.data.wechatUserAddressFullAddress,
                receiveTel: s.data.wechatUserAddressReceiverPhoneNum
            })) : (console.log("点击无000000"), e.selMoren()), "" == e.data.addressId && (e.setData({
                peisongfei: 0
            }), wx.setStorage({
                key: "deliveryPrice",
                data: 0
            }));
        }));
    },
    fanhui: function() {
        wx.switchTab({
            url: "../../order"
        });
    },
    onLoad: function(d) {
        e = this, console.log("============看看出来的是啥=============", e.data.receiveUser), s.getShareInfos(e, a), 
        s.setCompanyId(e, d), s.setStoreId(e), wx.getStorage({
            key: "takeOutDispatchType",
            success: function(s) {
                e.setData({
                    takeOutDispatchType: s.data
                });
            }
        });
        var t = d.orderId, r = d.orderType;
        e.setData({
            orderId: d.orderId,
            orderType: d.orderType
        }), console.log("orderId ==> " + t), console.log("orderType ==> " + r), wx.request({
            url: a + "skordermodel/getOrderById",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                id: t,
                orderType: r
            },
            success: function(s) {
                var d = s.data.addressId;
                null != s.data.addressId && "1" == e.data.takeOutDispatchType && (wx.setStorage({
                    key: "weAddressId",
                    data: d
                }), e.dwd()), console.log(s.data), wx.getStorage({
                    key: "storeInfo",
                    success: function(d) {
                        console.log("获取餐盒费000000------", d);
                        var a = d.data.storeInfoBoxPrice;
                        "0" == d.data.boxPriceType ? (null != a && "" != a && void 0 != a || (a = 0), e.setData({
                            canhefei: a
                        })) : (console.log("餐盒费-----", s.data.foodInfoBoxPrice), e.setData({
                            canhefei: null == s.data.foodInfoBoxPrice ? 0 : s.data.foodInfoBoxPrice
                        }));
                    }
                }), e.setData({
                    foodInfo: s.data,
                    peisongfei: null == s.data.distributionFee || void 0 == s.data.distributionFee ? 0 : s.data.distributionFee
                }), wx.setStorage({
                    key: "foodInfo",
                    data: s.data
                }), wx.setStorage({
                    key: "orderId",
                    data: t
                }), wx.setStorage({
                    key: "orderType",
                    data: r
                }), wx.getStorage({
                    key: "couponInfo",
                    success: function(s) {
                        if (s.data) {
                            var d = s.data.miniMoney, a = s.data.couponType;
                            "4" == a ? wx.getStorage({
                                key: "foodInfo",
                                success: function(a) {
                                    var t = a.data.foodList;
                                    console.log("===selMemberCard findVipCardById==="), console.log(t);
                                    var r = 0;
                                    for (var o in t) "0" == t[o].discountFlg && (r += 1 * t[o].realPrice);
                                    var c = s.data.derateMoney;
                                    if (null != c && void 0 != c && "" != c || (c = 0), r >= d) {
                                        var i = a.data.orderReceivablePrice - 1 * a.data.orderRealPrice + c;
                                        console.log("以优惠价格======>" + i);
                                        var n = i.toFixed(2);
                                        console.log("以优惠价格======>" + n), null != n && void 0 != n && "" != n || (n = 0), 
                                        a.data.orderRealPrice = (1 * a.data.orderReceivablePrice - 1 * n).toFixed(2), e.setData({
                                            selectedCoupon: s.data.couponName,
                                            yhprice: n,
                                            foodInfo: a.data
                                        });
                                    } else e.setData({
                                        displayy_0: "block",
                                        carname_0: "未达到满减条件，请重新选择优惠券",
                                        titlename_0: "提示信息"
                                    }), e.setData({
                                        selectedCoupon: "",
                                        yhprice: 0
                                    });
                                }
                            }) : "2" == a && wx.getStorage({
                                key: "foodInfo",
                                success: function(a) {
                                    var t = a.data.foodList;
                                    console.log("===selMemberCard findVipCardById==="), console.log(t);
                                    var r = 0;
                                    for (var o in t) "0" == t[o].discountFlg && (r += 1 * t[o].realPrice);
                                    var c = s.data.derateMoney;
                                    null != c && void 0 != c && "" != c || (c = 10);
                                    var i = a.data.orderReceivablePrice - 1 * a.data.orderRealPrice + r * (1 - c / 10);
                                    console.log("以优惠价格======>" + i);
                                    var n = i.toFixed(2);
                                    console.log("以优惠价格======>" + n), null != n && void 0 != n && "" != n || (n = 0), 
                                    a.data.orderRealPrice = (1 * a.data.orderReceivablePrice - 1 * n).toFixed(2), console.log("orderRealPrice======>" + a.data.orderRealPrice), 
                                    r >= d ? e.setData({
                                        selectedCoupon: s.data.couponName,
                                        yhprice: n,
                                        foodInfo: a.data
                                    }) : (e.setData({
                                        displayy_0: "block",
                                        carname_0: "未达到满减条件，请重新选择优惠券",
                                        titlename_0: "提示信息"
                                    }), e.setData({
                                        selectedCoupon: "",
                                        yhprice: 0
                                    }));
                                }
                            });
                        } else e.setData({
                            selectedCoupon: "",
                            yhprice: 0
                        });
                    }
                });
            }
        }), wx.setStorage({
            key: "beizhu",
            data: ""
        }), wx.getStorage({
            key: "storeId",
            success: function(s) {
                wx.request({
                    url: a + "skstoremodel/findStoreById",
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: {
                        storeId: s.data
                    },
                    success: function(s) {
                        e.setData({
                            httpUrl: a,
                            storeInfo: s.data
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
        e = this;
        var t = getCurrentPages(), r = t[t.length - 1];
        console.log("返回过来的配送费：", r.data.peisongfei), void 0 != r.data.peisongfei && "" != r.data.peisongfei && e.setData({
            peisongfei: r.data.peisongfei
        }), wx.onSocketMessage(function(d) {
            console.log("===========接收到服务器信息=============="), console.log(d.data), s.getTkInfos(e, d), 
            s.playMusic(e, d);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    s.conSocket(e.data, a);
                }
            });
        }), d.submitDatails(e.data.orderId, "W").then(function(s) {
            "0" == s.data.addressType && "Ta收货" == e.data.shouhuo ? (console.log("onShow有000000"), 
            e.setData({
                receiveUser: s.data.wechatUserAddressReceiverName,
                receiveAddr: s.data.wechatUserAddressAddress + s.data.wechatUserAddressFullAddress,
                receiveTel: s.data.wechatUserAddressReceiverPhoneNum,
                addressId: s.data.addressId
            })) : "1" == s.data.addressType && "我的" == e.data.shouhuo ? (console.log("onShow有11111111"), 
            e.setData({
                receiveUser: s.data.wechatUserAddressReceiverName,
                receiveAddr: s.data.wechatUserAddressAddress + s.data.wechatUserAddressFullAddress,
                receiveTel: s.data.wechatUserAddressReceiverPhoneNum,
                addressId: s.data.addressId
            })) : "Ta收货" == e.data.shouhuo ? (console.log("onShow无000000"), e.selMoren()) : (console.log("onShow无1111111"), 
            e.selMorenTa()), "" == e.data.addressId && 0 == e.data.takeOutDispatchType && (e.setData({
                peisongfei: 0
            }), wx.setStorage({
                key: "deliveryPrice",
                data: 0
            })), wx.getStorage({
                key: "weAddressId",
                success: function(s) {
                    e.setData({
                        wechatUserAddressId: s.data
                    }), "" != e.data.wechatUserAddressId && "1" == e.data.takeOutDispatchType && e.dwd();
                }
            });
        });
    },
    ptp: function() {
        wx.request({
            url: a + "skordermodel/getOrderById",
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                id: e.data.orderId,
                orderType: e.data.orderType
            },
            success: function(e) {}
        });
    },
    onHide: function() {},
    onUnload: function() {
        s.closeSock();
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
    chkOrder0_1: function() {
        e.selAddr();
    },
    toSubmit: function() {
        wx.setStorage({
            key: "wmFlg",
            data: !0
        }), wx.setStorage({
            key: "dcFlg",
            data: !1
        }), wx.setStorage({
            key: "ydFlg",
            data: !1
        }), console.log("===toSubmit start==="), "" != e.data.receiveUser && "undefined" != e.data.receiveUser && void 0 != e.data.receiveUser ? (wx.setStorage({
            key: "beizhu",
            data: e.data.beizhu
        }), wx.getStorage({
            key: "receiverNotes",
            success: function(s) {
                wx.getStorage({
                    key: "orderId",
                    success: function(d) {
                        wx.request({
                            url: a + "skordermodel/updTakeOutOrder",
                            data: {
                                addressId: s.data.addressId,
                                orderRemarke: e.data.beizhu,
                                id: d.data,
                                distributionFee: void 0 == e.data.peisongfei ? 0 : e.data.peisongfei
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(s) {
                                wx.getStorage({
                                    key: "orderId",
                                    success: function(s) {
                                        wx.getStorage({
                                            key: "orderType",
                                            success: function(d) {
                                                wx.setStorage({
                                                    key: "submitFlg",
                                                    data: !0
                                                }), wx.redirectTo({
                                                    url: "../evalOrder?orderId=" + s.data + "&orderType=" + d.data + "&youhui=" + e.data.selectedCoupon + "&yhprice=" + e.data.yhprice
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
        })) : e.setData({
            displayy_1: "block",
            carname_1: "请选择详细收货地址",
            titlename_1: "提示信息"
        });
    },
    inputBeizhu: function(s) {
        e.setData({
            beizhu: s.detail.value
        });
    },
    selMoren: function() {
        wx.getStorage({
            key: "userId",
            success: function(s) {
                wx.getStorage({
                    key: "storeId",
                    success: function(d) {
                        wx.request({
                            url: a + "skmembermodel/getAddress",
                            data: {
                                wechatUserAddressWechatUserId: s.data,
                                storeId: d.data,
                                wechatUserAddressIsDefault: "1",
                                identification: "1",
                                dispatching: e.data.takeOutDispatchType
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(s) {
                                var d = s.data[0];
                                s.data[1];
                                e.setData({
                                    myaddreessLen: d.length
                                });
                                for (var a = 0; a < d.length; a++) if ("1" == d[a].wechatUserAddressIsDefault && "Y" == d[a].isWithin) wx.setStorage({
                                    key: "deliveryPrice",
                                    data: null == d[a].deliveryPrice ? 0 : d[a].deliveryPrice
                                }), e.setData({
                                    receiveUser: d[a].wechatUserAddressReceiverName,
                                    receiveAddr: d[a].wechatUserAddressAddress + d[a].wechatUserAddressFullAddress,
                                    receiveTel: d[a].wechatUserAddressReceiverPhoneNum,
                                    addressId: d[a].wechatUserAddressId,
                                    peisongfei: null == d[a].deliveryPrice ? 0 : d[a].deliveryPrice
                                }), wx.setStorage({
                                    key: "receiverNotes",
                                    data: {
                                        wechatUserAddressReceiverName: d[a].wechatUserAddressReceiverName,
                                        wechatUserAddressReceiverPhoneNum: d[a].wechatUserAddressReceiverPhoneNum,
                                        wechatUserAddressFullAddress: d[a].wechatUserAddressFullAddress,
                                        addressId: d[a].wechatUserAddressId,
                                        wechatUserAddressAddress: d[a].wechatUserAddressAddress
                                    }
                                }); else if ("1" == d[a].wechatUserAddressIsDefault && "N" == d[a].isWithin) {
                                    for (var t = [], r = 0; r < d.length; r++) "0" == d[r].wechatUserAddressIsDefault && "Y" == d[r].isWithin && t.push(d[r]);
                                    console.log("======linshiAddress========"), console.log(t), t.length > 0 ? (wx.setStorage({
                                        key: "deliveryPrice",
                                        data: null == t[0].deliveryPrice ? 0 : t[0].deliveryPrice
                                    }), e.setData({
                                        receiveUser: t[0].wechatUserAddressReceiverName,
                                        receiveAddr: t[0].wechatUserAddressAddress + d[a].wechatUserAddressFullAddress,
                                        receiveTel: t[0].wechatUserAddressReceiverPhoneNum,
                                        addressId: t[0].wechatUserAddressId,
                                        peisongfei: null == t[0].deliveryPrice ? 0 : t[0].deliveryPrice
                                    }), wx.setStorage({
                                        key: "receiverNotes",
                                        data: {
                                            wechatUserAddressReceiverName: t[0].wechatUserAddressReceiverName,
                                            wechatUserAddressReceiverPhoneNum: t[0].wechatUserAddressReceiverPhoneNum,
                                            wechatUserAddressFullAddress: t[0].wechatUserAddressFullAddress,
                                            addressId: t[0].wechatUserAddressId,
                                            wechatUserAddressAddress: t[0].wechatUserAddressAddress
                                        }
                                    })) : e.selAddress("我的地址不在配送范围内\n请添加地址！");
                                }
                                0 == d.length && e.selAddress("暂无我的默认地址！"), 1 == e.data.takeOutDispatchType && e.dwds(), 
                                0 == e.data.takeOutDispatchType && e.mor();
                            }
                        });
                    }
                });
            }
        });
    },
    selMorenTa: function() {
        wx.getStorage({
            key: "userId",
            success: function(s) {
                wx.getStorage({
                    key: "storeId",
                    success: function(d) {
                        wx.request({
                            url: a + "skmembermodel/getAddress",
                            data: {
                                wechatUserAddressWechatUserId: s.data,
                                storeId: d.data,
                                wechatUserAddressIsDefault: "1",
                                identification: "1",
                                dispatching: e.data.takeOutDispatchType
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(s) {
                                s.data[0];
                                for (var d = s.data[1], a = 0; a < d.length; a++) "1" == d[a].wechatUserAddressIsDefault && "Y" == d[a].isWithin ? (wx.setStorage({
                                    key: "deliveryPrice",
                                    data: null == d[a].deliveryPrice ? 0 : d[a].deliveryPrice
                                }), e.setData({
                                    receiveUser: d[a].wechatUserAddressReceiverName,
                                    receiveAddr: d[a].wechatUserAddressAddress + d[a].wechatUserAddressFullAddress,
                                    receiveTel: d[a].wechatUserAddressReceiverPhoneNum,
                                    addressId: d[a].wechatUserAddressId,
                                    peisongfei: null == d[a].deliveryPrice ? 0 : d[a].deliveryPrice
                                }), wx.setStorage({
                                    key: "receiverNotes",
                                    data: {
                                        wechatUserAddressReceiverName: d[a].wechatUserAddressReceiverName,
                                        wechatUserAddressReceiverPhoneNum: d[a].wechatUserAddressReceiverPhoneNum,
                                        wechatUserAddressFullAddress: d[a].wechatUserAddressFullAddress,
                                        addressId: d[a].wechatUserAddressId
                                    }
                                })) : "1" == d[a].wechatUserAddressIsDefault && "N" == d[a].isWithin && e.selAddress("Ta的默认地址不在配送范围内，请选择地址！");
                                0 == d.length && e.selAddress("暂无Ta的默认地址!"), 1 == e.data.takeOutDispatchType && e.dwds(), 
                                0 == e.data.takeOutDispatchType && e.mor();
                            }
                        });
                    }
                });
            }
        });
    },
    mor: function() {
        wx.getStorage({
            key: "orderId",
            success: function(s) {
                wx.getStorage({
                    key: "beizhu",
                    success: function(d) {
                        console.log("=======地址获取111=========", s, d), wx.request({
                            url: a + "skordermodel/updTakeOutOrder",
                            data: {
                                addressId: e.data.addressId,
                                orderRemarke: d.data,
                                id: s.data,
                                distributionFee: null == e.data.peisongfei || void 0 == e.data.peisongfei ? 0 : e.data.peisongfei
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                console.log("=====成功=====", e);
                            }
                        });
                    }
                });
            }
        });
    },
    dwd: function() {
        wx.getStorage({
            key: "storeId",
            success: function(s) {
                wx.getStorage({
                    key: "weAddressId",
                    success: function(d) {
                        wx.request({
                            url: a + "skordermodel/selDistributionFee",
                            data: {
                                addressId: d.data,
                                storeId: s.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(s) {
                                var d = s.data.result;
                                console.log("点我打配送费-----", d);
                                var a = d;
                                e.setData({
                                    peisongfei: a
                                }), wx.setStorage({
                                    key: "peisongfei",
                                    data: a
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    dwds: function() {
        wx.getStorage({
            key: "storeId",
            success: function(s) {
                wx.request({
                    url: a + "skordermodel/selDistributionFee",
                    data: {
                        addressId: e.data.addressId,
                        storeId: s.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(s) {
                        var d = s.data.result;
                        console.log("点我达配送费", d);
                        var a = d;
                        e.setData({
                            peisongfei: a
                        }), wx.setStorage({
                            key: "peisongfei",
                            data: a
                        }), e.mor();
                    }
                });
            }
        });
    },
    selAddress: function(s) {
        e.setData({
            display_alone1: "block",
            carname_0: s,
            titlename_0: "提示信息",
            cancel: "关\t闭"
        }), e.setData({
            receiveUser: "",
            receiveAddr: "",
            receiveTel: "",
            addressId: ""
        }), wx.setStorage({
            key: "receiverNotes",
            data: {
                wechatUserAddressReceiverName: "",
                wechatUserAddressReceiverPhoneNum: "",
                wechatUserAddressFullAddress: "",
                addressId: ""
            }
        });
    }
});