var e, a = require("../../../../utils/wx_x_config.js"), t = require("../../../../utils/util.js"), o = require("../../../../utils/util.js"), d = require("../../../../module/getPhone"), n = getApp(), s = n.globalData.httpUrl, r = n.globalData.appId;

Page({
    data: {
        orderPayType: "",
        discountFlg: "",
        displ2: "none",
        displ: "none",
        displays: "none",
        selectedCoupon: "",
        bkclor: "#444",
        clor: "#ffbf20",
        bkclor1: "#444",
        clor1: "#ffbf20",
        httpUrl: s,
        coupon: "选择优惠",
        qxYouhuiflag: !1,
        yhprice: 0,
        peisongfei: 0,
        canhefei: 0,
        allowToClick: !0,
        allowToPay: !0,
        allowToPay1: !0,
        discountRange: "",
        wmFlg: !0,
        dcFlg: !0,
        ydFlg: !0,
        payed: !1,
        foods: [],
        storeInfo: {},
        displayy_0: "none",
        displayy_1: "none",
        destineInfo: {
            date: "",
            time: "",
            tableType: "",
            mealsNumber: "",
            contants: "",
            contantsNumber: ""
        },
        orderDetail: "",
        orderAddr: "",
        orderContactName: "",
        orderContactTel: "",
        couponName: "",
        derateMoney: "",
        couponId: "",
        outTradeNo: "",
        jifen: "",
        takeOutDispatchType: "",
        displayy_2: "none",
        displayy_3: "none",
        displayy_4: "none",
        displayy_5: "none",
        displayy_6: "none",
        displayy_7: "none",
        displayy_8: "none",
        displayy_9: "none",
        display_alone1: "none",
        is_falg: !0
    },
    choseTxtColor: function(e) {
        var a = e.currentTarget.dataset.id;
        this.setData({
            id: a
        });
    },
    selAddr: function(e) {
        wx.navigateTo({
            url: "../selAddr/selAddr?selId=0&addressType=0"
        });
    },
    selAddr1: function(e) {
        wx.navigateTo({
            url: "../selAddr/selAddr?selId=1&addressType=1"
        });
    },
    selYouhui: function() {
        wx.setStorage({
            key: "discountFlg",
            data: e.data.discountFlg
        }), wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        wx.request({
                            url: s + "skmembermodel/findWechatUserById",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                wechatUserId: a.data,
                                wechatUserStoreStoreInfoStoreId: t.data
                            },
                            success: function(a) {
                                a.data ? "v" == a.data.wechatUserStoreIdentity ? e.setData({
                                    cardId: a.data.cardId,
                                    displ: "block"
                                }) : e.setData({
                                    displays: "block"
                                }) : e.setData({
                                    displayy_2: "block",
                                    carname_2: "未获取会员信息",
                                    titlename_2: "提示信息"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    quxiao: function() {
        e.setData({
            displays: "none"
        });
    },
    getNumber: function(a) {
        console.log("=====选择优惠 getPhoneNumber start====="), console.log("=====get e.detail.iv====="), 
        console.log(a.detail.iv), console.log("=====get e.detail.encryptedData====="), console.log(a.detail.encryptedData);
        var t = e.data.isVip;
        console.log("isVip===>" + t), console.log("e.detail.errMsg===>" + a.detail.errMsg), 
        "getPhoneNumber:fail user deny" == a.detail.errMsg || "getPhoneNumber:fail:cancel to confirm login" == a.detail.errMsg || wx.getStorage({
            key: "session_key",
            success: function(t) {
                console.log(t.data + "_key"), e.setData({
                    session_key: t.data
                }), d.getPhoneNum(a.detail.encryptedData, a.detail.iv, n.globalData.appId, e.data.session_key).then(function(a) {
                    e.setData({
                        displays: "none"
                    }), wx.navigateTo({
                        url: "../../../user/myCard/myCard"
                    });
                });
            },
            fail: function(e) {
                console.log("=====getStorage session_key err====="), console.log(e);
            }
        }), console.log("=====选择优惠 getPhoneNumber end=====");
    },
    selCoupon: function() {
        e.setData({
            displ: "none"
        }), wx.setStorage({
            key: "recoverCouponInfo",
            data: {
                selectedCoupon: e.data.selectedCoupon,
                yhprice: e.data.yhprice,
                discountFlg: e.data.discountFlg
            }
        }), wx.navigateTo({
            url: "selCoupon/selCoupon"
        });
    },
    chkOrder0_3: function() {
        e.setData({
            selectedCoupon: "",
            yhprice: 0,
            discountFlg: "",
            qxYouhuiflag: !1
        });
    },
    qxYouhui: function() {
        e.setData({
            displayy_3: "block",
            carname_3: "确认取消优惠？",
            titlename_3: "提示信息"
        });
    },
    selMemberCard: function() {
        e.setData({
            displ: "none"
        }), wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        wx.request({
                            url: s + "skmembermodel/findVipCardById",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                userId: a.data,
                                cardId: e.data.cardId,
                                storeId: t.data
                            },
                            success: function(a) {
                                a.data ? wx.getStorage({
                                    key: "foodInfo",
                                    success: function(t) {
                                        console.log(t + "=========>resi");
                                        t.data.orderRealPrice;
                                        var o = t.data.orderReceivablePrice, d = a.data.discount;
                                        null != d && void 0 != d && "" != d || (d = 10);
                                        var n = o - o * d / 10;
                                        console.log("以优惠价格======>" + n);
                                        var s = n.toFixed(2);
                                        console.log("以优惠价格======>" + s), null != s && void 0 != s && "" != s || (s = 0), 
                                        wx.setStorage({
                                            key: "yhprice",
                                            data: s
                                        }), e.setData({
                                            selectedCoupon: "会员卡" + d + "折",
                                            yhprice: s,
                                            discountFlg: "V",
                                            qxYouhuiflag: !0
                                        });
                                        var r = a.data.discount;
                                        null != r && void 0 != r && "" != r || (d = 10, e.setData({
                                            selectedCoupon: "无折扣"
                                        }));
                                    }
                                }) : e.setData({
                                    displayy_2: "block",
                                    carname_2: "未获取会员卡信息",
                                    titlename_2: "提示信息"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    selForceCard: function() {
        wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        wx.request({
                            url: s + "skmembermodel/selEquitycardByWX",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                userId: a.data,
                                storeId: t.data
                            },
                            success: function(a) {
                                console.log("权益卡", a.data);
                                var t = new Date(a.data.validityBegin).getTime(), d = new Date(a.data.validityEnd).getTime(), n = new Date(o.formatDate(new Date())).getTime();
                                "Y" == a.data.isEquitycard ? "1" == a.data.state ? e.setData({
                                    displayy_2: "block",
                                    carname_2: "权益卡已过期",
                                    titlename_2: "请重新领取"
                                }) : "" != a.data.validityBegin && "" != a.data.validityEnd ? n >= t && n <= d ? wx.getStorage({
                                    key: "foodInfo",
                                    success: function(t) {
                                        t.data.orderRealPrice;
                                        var o = t.data.orderReceivablePrice, d = a.data.discount;
                                        null != d && void 0 != d && "" != d || (d = 10);
                                        var n = o - o * d / 10;
                                        console.log("以优惠价格======>" + n);
                                        var s = n.toFixed(2);
                                        console.log("以优惠价格======>" + s), null != s && void 0 != s && "" != s || (s = 0), 
                                        e.setData({
                                            selectedCoupon: "权益卡" + d + "折",
                                            displ: "none",
                                            yhprice: s,
                                            discountFlg: "Q",
                                            qxYouhuiflag: !0
                                        });
                                        var r = a.data.discount;
                                        null != r && void 0 != r && "" != r || (d = 10, e.setData({
                                            selectedCoupon: "无折扣"
                                        }));
                                    }
                                }) : n < t ? e.setData({
                                    display_alone1: "block",
                                    titlename_0: "提示信息",
                                    carname_0: "未到使用时间\n还不能使用权益卡",
                                    cancel: "好\t的"
                                }) : n > d && e.setData({
                                    display_alone1: "block",
                                    titlename_0: "提示信息",
                                    carname_0: "权益卡已过期",
                                    cancel: "好\t的"
                                }) : wx.getStorage({
                                    key: "foodInfo",
                                    success: function(t) {
                                        t.data.orderRealPrice;
                                        var o = t.data.orderReceivablePrice, d = a.data.discount;
                                        null != d && void 0 != d && "" != d || (d = 10);
                                        var n = o - o * d / 10;
                                        console.log("以优惠价格======>" + n);
                                        var s = n.toFixed(2);
                                        console.log("以优惠价格======>" + s), null != s && void 0 != s && "" != s || (s = 0), 
                                        e.setData({
                                            selectedCoupon: "权益卡" + d + "折",
                                            displ: "none",
                                            yhprice: s,
                                            discountFlg: "Q",
                                            qxYouhuiflag: !0
                                        });
                                        var r = a.data.discount;
                                        null != r && void 0 != r && "" != r || (d = 10, e.setData({
                                            selectedCoupon: "无折扣"
                                        }));
                                    }
                                }) : e.setData({
                                    displayy_2: "block",
                                    carname_2: "无法使用权益卡优惠",
                                    titlename_2: "您没有权益卡"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    chkOrder1: function() {
        e.setData({
            displayy_0: "none"
        });
    },
    chkOrder0: function() {
        console.log("讲讲-------------余额响应事件"), e.setData({
            allowToPay: !1
        }), console.log("--------------------------------------------------------我执行了"), 
        wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        wx.request({
                            url: s + "skmembermodel/findWechatUserById",
                            data: {
                                wechatUserId: a.data,
                                wechatUserStoreStoreInfoStoreId: t.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                console.log("==========余额支付查询用户余额成功=========");
                                var t = a.data.wechatUserStoreBalance;
                                if (e.setData({
                                    wechatUserStoreBalance: a.data.wechatUserStoreBalance
                                }), 1 * t < 1 * e.data.money) return wx.showToast({
                                    title: "余额不足",
                                    icon: "loading",
                                    duration: 1e3
                                }), void e.setData({
                                    allowToPay: !0
                                });
                                e.addBonusHistory(e.data.sofFlg);
                            }
                        });
                    }
                });
            }
        });
    },
    toPay: function(t) {
        console.log("========支付eeeee=======", t), e.setData({
            formId: t.detail.formId
        }), e.data.allowToClick ? (e.setData({
            displ2: "none",
            allowToClick: !1
        }), setTimeout(function() {
            e.setData({
                allowToClick: !0
            });
            var o = 1 * e.data.foodInfo.orderReceivablePrice + 1 * e.data.peisongfei + 1 * e.data.canhefei - 1 * e.data.yhprice, d = t.currentTarget.dataset.id;
            if (e.setData({
                money: o,
                orderPayType: d
            }), "B" == d ? e.setData({
                jiekouming: "addBonusHistory"
            }) : e.setData({
                jiekouming: "paymentCallback"
            }), null != o && "" != o) if (o <= 0) e.setData({
                displayy_2: "block",
                carname_2: "支付金额必须为正",
                titlename_2: "提示信息"
            }); else {
                if (void 0 == e.data.outTradeNo || "" == e.data.outTradeNo || "null" == e.data.outTradeNo) {
                    var c = a.getWxPayOrdrID();
                    e.setData({
                        outTradeNo: c
                    });
                } else {
                    var l = e.data.outTradeNo;
                    e.setData({
                        outTradeNo: l
                    });
                }
                if (console.log("订单号===》", e.data.outTradeNo), e.setData({
                    companyOrderNumber: e.data.outTradeNo
                }), wx.setStorage({
                    key: "derateMoney",
                    data: e.data.yhprice
                }), "W" == d) console.log(e.data.wx_user_uuid), console.log(a.getWxPayOrdrID()), 
                console.log(o), console.log(r), console.log(e.data.store_uuid), wx.request({
                    url: s + "skmembermodel/wxPay",
                    data: {
                        wx_user_uuid: e.data.wx_user_uuid,
                        order_a_num: e.data.outTradeNo,
                        order_a_money: o.toFixed(2),
                        appid: r,
                        storeId: e.data.store_uuid
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        if ("OK" == t.data.errCode) {
                            var d = e.data.wx_user_uuid, c = e.data.store_uuid;
                            e.setData({
                                allowToPay: !1
                            }), e.doWxPay(t.data, d, c, o);
                        } else if ("INVALID_REQUEST" == t.data.errCode) {
                            var l = e.data.outTradeNo, i = n.globalData.appId;
                            wx.request({
                                url: s + "skmembermodel/orderquery",
                                data: {
                                    outTradeno: l,
                                    appid: i
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(t) {
                                    var d = t.data.tradeState;
                                    if ("NOTPAY" == d) {
                                        console.log("================未支付继续支付===================");
                                        var n = a.getWxPayOrdrID();
                                        e.setData({
                                            outTradeNo: n
                                        }), e.setData({
                                            companyOrderNumber: e.data.outTradeNo
                                        }), wx.request({
                                            url: s + "skmembermodel/wxPay",
                                            data: {
                                                wx_user_uuid: e.data.wx_user_uuid,
                                                order_a_num: n,
                                                order_a_money: o.toFixed(2),
                                                appid: r,
                                                storeId: e.data.store_uuid
                                            },
                                            method: "POST",
                                            header: {
                                                "content-type": "application/x-www-form-urlencoded"
                                            },
                                            success: function(a) {
                                                var t = e.data.wx_user_uuid, d = e.data.store_uuid;
                                                e.setData({
                                                    allowToPay: !1
                                                }), e.doWxPay(a.data, t, d, o);
                                            }
                                        });
                                    }
                                    "SUCCESS" == d && (console.log("================已支付成功==================="), e.setData({
                                        displayy_2: "block",
                                        carname_2: "您已支付成功请退出",
                                        titlename_2: "提示信息"
                                    })), "REFUND" == d && (console.log("================已退款==================="), e.setData({
                                        displayy_2: "block",
                                        carname_2: "您已转入退款",
                                        titlename_2: "提示信息"
                                    })), "CLOSED" == d && (console.log("================已关闭==================="), e.setData({
                                        displayy_2: "block",
                                        carname_2: "已关闭",
                                        titlename_2: "提示信息"
                                    })), "REVOKED" == d && (console.log("================已撤销==================="), e.setData({
                                        displayy_2: "block",
                                        carname_2: "已撤销",
                                        titlename_2: "提示信息"
                                    })), "USERPAYING" == d && (console.log("================用户支付中==================="), 
                                    e.setData({
                                        displayy_2: "block",
                                        carname_2: "用户支付中请勿再次支付",
                                        titlename_2: "提示信息"
                                    })), "PAYERROR" == d && (console.log("================支付失败==================="), 
                                    e.setData({
                                        displayy_2: "block",
                                        carname_2: "支付失败",
                                        titlename_2: "提示信息"
                                    }));
                                }
                            });
                        }
                    },
                    fail: function(e) {
                        console.log("========微信支付错在哪=======", e);
                    }
                }); else if ("B" == d) {
                    e.setData({
                        sofFlg: "s"
                    });
                    wx.getStorage({
                        key: "storeName",
                        success: function(a) {
                            e.setData({
                                displayy_0: "block",
                                titlename_0: "确认支付吗？",
                                carname_0: "即将支付" + e.data.money.toFixed(2) + "元给" + a.data,
                                sofFlg: "s"
                            });
                        }
                    });
                }
            } else e.setData({
                displayy_2: "block",
                carname_2: "消费金额不能为空",
                titlename_2: "提示信息"
            });
        }, 100)) : e.setData({
            displ2: "none"
        });
    },
    doWxPay: function(a, t, o, d) {
        e.data.allowToPay1 && (e.setData({
            allowToPay1: !1
        }), e.addBonusHistory("f"), wx.requestPayment({
            timeStamp: a.timeStamp,
            nonceStr: a.nonceStr,
            package: a.package,
            signType: "MD5",
            paySign: a.paySign,
            success: function(a) {
                e.setData({
                    sofFlg: "s"
                });
                wx.navigateTo({
                    url: "paidOrder/paidOrder"
                });
            },
            fail: function(a) {
                console.log("=========调用微信充值接口失败========="), console.log(a), e.setData({
                    sofFlg: "f"
                });
                var t = e.data.outTradeNo, o = n.globalData.appId;
                wx.request({
                    url: s + "skmembermodel/orderquery",
                    data: {
                        outTradeno: t,
                        appid: o
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        var t = a.data.tradeState;
                        "NOTPAY" == t && (console.log("================未支付继续支付==================="), console.log(JSON.stringify(a) + "res=======>")), 
                        "SUCCESS" == t && (console.log("================已支付成功==================="), e.setData({
                            displayy_2: "block",
                            carname_2: "您已支付成功请退出",
                            titlename_2: "提示信息"
                        })), "REFUND" == t && (console.log("================已退款==================="), e.setData({
                            displayy_2: "block",
                            carname_2: "您已转入退款",
                            titlename_2: "提示信息"
                        })), "CLOSED" == t && (console.log("================已关闭==================="), e.setData({
                            displayy_2: "block",
                            carname_2: "已关闭",
                            titlename_2: "提示信息"
                        })), "REVOKED" == t && (console.log("================已撤销==================="), e.setData({
                            displayy_2: "block",
                            carname_2: "已撤销",
                            titlename_2: "提示信息"
                        })), "USERPAYING" == t && (console.log("================用户支付中==================="), 
                        e.setData({
                            displayy_2: "block",
                            carname_2: "用户支付中请勿再次支付",
                            titlename_2: "提示信息"
                        })), "PAYERROR" == t && (console.log("================支付失败==================="), 
                        e.setData({
                            displayy_2: "block",
                            carname_2: "支付失败",
                            titlename_2: "提示信息"
                        }));
                    }
                });
            }
        }));
    },
    chkOrder_1: function() {
        console.log("点我达状态", e.data.takeOutDispatchType), wx.switchTab({
            url: "/pages/index/order/order"
        });
    },
    chkOrder_2: function() {
        wx.switchTab({
            url: "../../../index/index"
        });
    },
    addBonusHistory: function(a) {
        console.log("---------------------调用了几次--------------------------------"), wx.getStorage({
            key: "orderId",
            success: function(t) {
                wx.getStorage({
                    key: "couponInfo",
                    success: function(o) {
                        wx.getStorage({
                            key: "orderType",
                            success: function(d) {
                                wx.request({
                                    url: s + "skordermodel/webSocketPush",
                                    data: {
                                        storeId: e.data.store_uuid,
                                        orderType: d.data
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(e) {
                                        console.log(e);
                                    },
                                    fail: function(a) {
                                        console.log(a), e.setData({
                                            allowToPay: !0
                                        });
                                    }
                                }), console.log("==========couponFlg============"), console.log(e.data.couponFlg), 
                                wx.request({
                                    url: s + "skmembermodel/" + e.data.jiekouming,
                                    method: "POST",
                                    data: {
                                        takeOutDispatchType: e.data.takeOutDispatchType,
                                        peisongfei: e.data.peisongfei,
                                        wxUserUuid: e.data.wx_user_uuid,
                                        storeUuid: e.data.store_uuid,
                                        realPrice: e.data.money.toFixed(2),
                                        reduceType: "X",
                                        orderType: d.data,
                                        orderId: t.data,
                                        orderPayType: e.data.orderPayType,
                                        couponFlg: e.data.couponFlg,
                                        couponId: o.data.couponId,
                                        code: o.data.code,
                                        discountFlg: e.data.discountFlg,
                                        companyOrderNumber: e.data.companyOrderNumber,
                                        sofFlg: a,
                                        formId: e.data.formId,
                                        formType: "1"
                                    },
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(t) {
                                        if (console.log("==============看看积分是多少==================="), console.log(t.data.storeIntegeal), 
                                        e.setData({
                                            allowToPay1: !0
                                        }), "B" == e.data.orderPayType && "000000" != t.data.message) return console.log("余额支付失败状态码===》" + e.data.orderPayType), 
                                        console.log("余额支付失败消息===》" + t.data.message), void e.setData({
                                            displayy_2: "block",
                                            carname_2: "请联系后台管理员",
                                            titlename_2: "余额支付失败"
                                        });
                                        if (console.log("========回调成功=========="), console.log(t.data), "s" == a) {
                                            console.log("===========余额支付===============");
                                            var o = t.data.storeIntegeal;
                                            wx.getStorage({
                                                key: "userId",
                                                success: function(a) {
                                                    wx.getStorage({
                                                        key: "storeId",
                                                        success: function(t) {
                                                            wx.request({
                                                                url: s + "skmembermodel/findWechatUserById",
                                                                method: "POST",
                                                                header: {
                                                                    "content-type": "application/x-www-form-urlencoded"
                                                                },
                                                                data: {
                                                                    wechatUserId: a.data,
                                                                    wechatUserStoreStoreInfoStoreId: t.data
                                                                },
                                                                success: function(a) {
                                                                    "v" == a.data.wechatUserStoreIdentity && "" != o && null != o && "0" != o && void 0 != o && "undefined" != o ? e.setData({
                                                                        displayy_1: "block",
                                                                        carname_1: "送您" + o + "积分\n点击确定前去订单页,取消返回首页",
                                                                        titlename_1: "支付成功"
                                                                    }) : e.setData({
                                                                        displayy_1: "block",
                                                                        carname_1: "点击确定前去订单页\n取消返回首页",
                                                                        titlename_1: "支付成功"
                                                                    });
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    },
                                    fail: function(e) {
                                        console.log("========回调失败=========="), console.log(e);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    toPay1: function() {
        wx.navigateTo({
            url: "paidOrder/paidOrder"
        });
    },
    chkOrder0_4: function() {
        wx.redirectTo({
            url: "bohuiOrder/bohuiOrder"
        });
    },
    chkOrder1_4: function() {
        wx.switchTab({
            url: "../../order/order"
        });
    },
    toPay2: function() {
        wx.getStorage({
            key: "orderId",
            success: function(a) {
                wx.getStorage({
                    key: "orderType",
                    success: function(t) {
                        wx.request({
                            url: s + "skordermodel/getOrderById",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                id: a.data,
                                orderType: t.data
                            },
                            success: function(a) {
                                var t = a.data.outTradeNo;
                                e.setData({
                                    outTradeNo: t
                                }), "6" != a.data.orderState ? "1" != a.data.orderPayFlg ? "4" != a.data.orderState && "9" != a.data.orderState ? e.setData({
                                    displ2: "block"
                                }) : e.setData({
                                    displayy_5: "block",
                                    carname_5: "订单已支付，不可支付！",
                                    titlename_5: "提示信息"
                                }) : e.setData({
                                    displayy_5: "block",
                                    carname_5: "如有疑问请联系商家",
                                    titlename_5: "订单已支付"
                                }) : e.setData({
                                    displayy_4: "block",
                                    carname_4: "确定查询驳回信息",
                                    titlename_4: "订单被退回，不可支付！"
                                });
                            }
                        }), console.log(t);
                    }
                });
            }
        });
    },
    fanhui: function() {
        wx.switchTab({
            url: "../order"
        });
    },
    resume: function(a) {
        e.data.allowToPay ? wx.getStorage({
            key: "orderId",
            success: function(e) {
                wx.getStorage({
                    key: "orderType",
                    success: function(a) {
                        var t = "";
                        console.log("订单id", e.data, "订单类型", a.data), "D" == a.data ? t = s + "skordermodel/updOrderInfo" : "W" == a.data ? t = s + "skordermodel/updTakeOutOrder" : "Y" == a.data && (t = s + "skordermodel/updReservedOrder"), 
                        wx.request({
                            url: t,
                            method: "POST",
                            data: {
                                orderState: "5",
                                id: e.data
                            },
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                console.log(e, "取消成功");
                            },
                            fail: function(e) {
                                console.log(e, "取消失败");
                            }
                        }), wx.switchTab({
                            url: "../../index"
                        });
                    }
                });
            }
        }) : e.setData({
            displayy_2: "block",
            carname_2: "不可取消订单",
            titlename_2: "订单支付中"
        });
    },
    back: function() {
        e.setData({
            displ: "none",
            displ2: "none"
        });
    },
    chkOrder0_6: function() {
        wx.navigateTo({
            url: "selCoupon/selCoupon"
        });
    },
    chkOrder1_6: function() {
        wx.getStorage({
            key: "recoverCouponInfo",
            success: function(a) {
                e.setData({
                    selectedCoupon: a.data.selectedCoupon,
                    yhprice: a.data.yhprice
                });
            }
        }), wx.getStorage({
            key: "discountFlg",
            success: function(a) {
                e.setData({
                    discountFlg: a.data
                });
            }
        });
    },
    chkOrder1_7: function() {
        wx.getStorage({
            key: "recoverCouponInfo",
            success: function(a) {
                e.setData({
                    selectedCoupon: a.data.couponName,
                    yhprice: a.data.yhprice
                });
            }
        }), wx.getStorage({
            key: "discountFlg",
            success: function(a) {
                e.setData({
                    discountFlg: a.data
                });
            }
        });
    },
    onLoad: function(a) {
        console.error("options-------------------", a), e = this, t.getShareInfos(e, s), 
        t.setCompanyId(e, a), t.setStoreInfo(e), wx.getStorage({
            key: "takeOutDispatchType",
            success: function(a) {
                console.log("点我达状态---------", a.data), e.setData({
                    takeOutDispatchType: a.data
                });
            }
        }), wx.getStorage({
            key: "submitFlg",
            success: function(t) {
                1 == t.data && (e.setData({
                    selectedCoupon: a.youhui,
                    yhprice: a.yhprice
                }), wx.setStorage({
                    key: "submitFlg",
                    data: "false"
                }));
            }
        }), console.log("===evalOrder onLoad start==="), wx.getStorage({
            key: "couponFlg",
            success: function(a) {
                e.setData({
                    couponFlg: a.data
                });
            },
            fail: function(a) {
                e.setData({
                    couponFlg: 0,
                    discountFlg: ""
                }), wx.setStorage({
                    key: "couponInfo",
                    data: {
                        couponName: "",
                        derateMoney: "",
                        couponId: "",
                        code: "",
                        miniMoney: "",
                        couponType: ""
                    }
                });
            }
        }), wx.getStorage({
            key: "takeOutDispatchType",
            success: function(a) {
                e.setData({
                    takeOutDispatchType: a.data
                });
            }
        }), wx.getStorage({
            key: "couponInfo",
            success: function(a) {
                e.setData({
                    couponInfo: a.data
                });
            }
        }), wx.getStorage({
            key: "storeId",
            success: function(a) {
                e.setData({
                    storeId: a.data,
                    store_uuid: a.data
                }), wx.getStorage({
                    key: "userId",
                    success: function(a) {
                        e.setData({
                            wx_user_uuid: a.data
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "couponInfo",
            success: function(a) {
                if ("" != a.data.couponType) {
                    var t = a.data.miniMoney, o = a.data.couponType;
                    "4" == o ? wx.getStorage({
                        key: "foodInfo",
                        success: function(o) {
                            var d = o.data.orderRealPrice;
                            o.data.orderReceivablePrice;
                            console.log("realPrice" + d), console.log("miniMoney" + t), console.log("selectedCoupon" + a.data.couponName), 
                            d >= t ? e.setData({
                                selectedCoupon: a.data.couponName,
                                yhprice: a.data.derateMoney,
                                discountFlg: "Y",
                                qxYouhuiflag: !0
                            }) : (wx.setStorage({
                                key: "couponFlg",
                                data: "0"
                            }), e.setData({
                                couponFlg: "0"
                            }), e.setData({
                                displayy_6: "block",
                                carname_6: "未达到满减条件，请重新选择优惠券",
                                titlename_6: "提示信息"
                            }));
                        }
                    }) : "2" == o && wx.getStorage({
                        key: "foodInfo",
                        success: function(o) {
                            var d = o.data.orderRealPrice, n = o.data.orderReceivablePrice;
                            if (d >= t) {
                                var s = n - n * a.data.derateMoney / 10;
                                console.log("以优惠价格======>" + s);
                                var r = s.toFixed(2);
                                console.log("以优惠价格======>" + r), null != r && void 0 != r && "" != r || (r = 0), 
                                e.setData({
                                    selectedCoupon: a.data.couponName,
                                    yhprice: r,
                                    discountFlg: "Y",
                                    qxYouhuiflag: !0
                                });
                            } else wx.setStorage({
                                key: "couponFlg",
                                data: "0"
                            }), e.setData({
                                couponFlg: 0
                            }), e.setData({
                                displayy_7: "block",
                                carname_7: "未达到满减条件，请重新选择优惠券",
                                titlename_7: "提示信息"
                            });
                        }
                    });
                } else e.setData({
                    selectedCoupon: "",
                    yhprice: 0
                });
            }
        }), wx.getStorage({
            key: "deskNum",
            success: function(a) {
                e.setData({
                    deskNum: a.data
                });
            }
        }), wx.getStorage({
            key: "receiverNotes",
            success: function(a) {
                e.setData({
                    orderAddr: a.data.wechatUserAddressFullAddress,
                    orderContactName: a.data.wechatUserAddressReceiverName,
                    orderContactTel: a.data.wechatUserAddressReceiverPhoneNum
                });
            }
        }), wx.getStorage({
            key: "wmFlg",
            success: function(a) {
                a.data && wx.getStorage({
                    key: "beizhu",
                    success: function(a) {
                        e.setData({
                            orderDetail: a.data
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "dcFlg",
            success: function(a) {
                a.data && wx.getStorage({
                    key: "dcBeizhu",
                    success: function(a) {
                        e.setData({
                            orderDetail: a.data
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "wmFlg",
            success: function(a) {
                e.setData({
                    wmFlg: a.data
                });
            }
        }), wx.getStorage({
            key: "dcFlg",
            success: function(a) {
                e.setData({
                    dcFlg: a.data
                });
            }
        }), wx.getStorage({
            key: "storeInfo",
            success: function(a) {
                var t = a.data.storeInfoTelephoneNum;
                console.log("商户电话" + t), null == t && (a.data.storeInfoTelephoneNum = ""), console.log("商户电话" + a.data.storeInfoTelephoneNum), 
                e.setData({
                    storeInfo: a.data
                });
            }
        });
        var o = a.orderId, d = a.orderType;
        console.log("orderId  ==> " + o), console.log("orderType  ==> " + d), wx.getStorage({
            key: "ydFlg",
            success: function(a) {
                e.setData({
                    ydFlg: a.data
                }), 1 == a.data ? wx.getStorage({
                    key: "orderId",
                    success: function(a) {
                        wx.request({
                            url: s + "skordermodel/getOrderById",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                id: o,
                                orderType: d
                            },
                            success: function(a) {
                                if (console.log("走预定"), a.data) {
                                    console.log("继续走预定", a), e.setData({
                                        foodInfo: a.data,
                                        orderDate: a.data.reservedEstimatedTime.split(" ")[0].replace('"', ""),
                                        orderTime: a.data.reservedEstimatedTime.split(" ")[1].replace('"', ""),
                                        orderTable: a.data.tableName,
                                        orderPersonNumber: a.data.reservedCount,
                                        orderContractName: a.data.reservedName,
                                        orderContractTel: a.data.reservedPhoneNum
                                    }), wx.setStorage({
                                        key: "foodInfo",
                                        data: a.data
                                    }), wx.setStorage({
                                        key: "orderId",
                                        data: a.data.id
                                    }), console.log("预计到店时间 ==> " + a.data.reservedEstimatedTime);
                                    var t = new Date(a.data.reservedEstimatedTime.replace(/-/g, "/")).getTime() / 1e3;
                                    console.log("预计到店时间转换=====》" + t);
                                    var o = new Date().getTime() / 1e3;
                                    console.log("获取当前时间=====》" + o.toFixed(0));
                                    var d = (1 * t.toFixed(0) - 1 * o.toFixed(0)).toFixed(0);
                                    if (console.log("获取当前时间=====》" + d), console.log("获取当前时间=====》" + d), d > 0) {
                                        var n = (c = d) - 60 * Math.floor(c / 60), s = Math.floor(c - 3600 * Math.floor(c / 3600)) / 60, r = Math.floor(c / 3600);
                                        e.setData({
                                            seconds: c,
                                            minute: s,
                                            second: n,
                                            hour: r
                                        });
                                        e.countDown();
                                    } else {
                                        var c = 600, n = c - 60 * Math.floor(c / 60), s = Math.floor(c - 3600 * Math.floor(c / 3600)) / 60, r = Math.floor(c / 3600);
                                        e.setData({
                                            seconds: 600,
                                            minute: 10,
                                            second: 0,
                                            hour: 0
                                        });
                                        e.countDown();
                                    }
                                } else e.setData({
                                    displayy_2: "block",
                                    carname_2: "订单支付中",
                                    titlename_2: "提示信息"
                                });
                            }
                        });
                    }
                }) : (console.log("orderId ==>" + o), wx.request({
                    url: s + "skordermodel/getOrderById",
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: {
                        id: o,
                        orderType: d
                    },
                    success: function(a) {
                        wx.getStorage({
                            key: "storeInfo",
                            success: function(t) {
                                if ("0" == t.data.boxPriceType) {
                                    var o = t.data.storeInfoBoxPrice;
                                    null != o && "" != o && void 0 != o || (o = 0), wx.getStorage({
                                        key: "wmFlg",
                                        success: function(a) {
                                            1 == a.data ? e.setData({
                                                canhefei: o
                                            }) : e.setData({
                                                canhefei: 0
                                            });
                                        }
                                    });
                                } else e.setData({
                                    canhefei: a.data.foodInfoBoxPrice
                                });
                            }
                        }), console.log("走点餐和外卖"), a.data ? (console.log(a.data), e.setData({
                            foodInfo: a.data,
                            deskNum: a.data.orderTableId,
                            peisongfei: void 0 == a.data.distributionFee ? 0 : a.data.distributionFee
                        }), wx.setStorage({
                            key: "foodInfo",
                            data: a.data
                        }), wx.setStorage({
                            key: "orderId",
                            data: a.data.id
                        }), console.log("===evalOrder onLoad end===")) : e.setData({
                            displayy_2: "block",
                            carname_2: "未获取点单信息",
                            titlename_2: "提示信息"
                        });
                    }
                }));
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
        (e = this).setData({
            displ2: "none"
        }), wx.onSocketMessage(function(a) {
            console.log("===========接收到服务器信息=============="), console.log(a.data), "orderPaid" == a.data && (wx.showToast({
                title: "您有订单已支付"
            }), wx.switchTab({
                url: "../../../index/index"
            })), t.getTkInfos(e, a), t.playMusic(e, a);
        }), e = this, wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    t.conSocket(e.data, s);
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
    countDown: function() {
        var e = this, a = e.data.seconds, t = e.data.hour, o = e.data.minute, d = e.data.second;
        if (a > 0) var n = setTimeout(function() {
            d = (a -= 1) - 60 * Math.floor(a / 60), o = Math.floor((a - 3600 * Math.floor(a / 3600)) / 60), 
            t = Math.floor(a / 3600), e.setData({
                seconds: a,
                hour: t,
                minute: o,
                second: d
            });
            e.countDown();
        }, 1e3); else e.setData({
            hour: 0,
            minute: 0,
            second: 0
        }), clearTimeout(n), a = 0, wx.getStorage({
            key: "orderId",
            success: function(a) {
                wx.request({
                    url: s + "skordermodel/updReservedOrder",
                    data: {
                        orderState: "5",
                        id: a.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        e.setData({
                            displayy_8: "block",
                            carname_8: "订单已自动取消",
                            titlename_8: "提示信息"
                        });
                    }
                });
            }
        });
    },
    chkOrder0_8: function() {
        wx.switchTab({
            url: "../../index"
        });
    }
});