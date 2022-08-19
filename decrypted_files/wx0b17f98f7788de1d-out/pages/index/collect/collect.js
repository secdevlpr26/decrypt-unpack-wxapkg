var e, a = require("../../../utils/wx_x_config.js"), t = require("../../../utils/util.js"), o = getApp(), n = (o.globalData.userInfo, 
o.globalData.httpUrl), d = o.globalData.appId;

Page({
    data: {
        discount: 10,
        displ3: "none",
        displ2: "none",
        coupon: !1,
        card: !1,
        forceCard: !1,
        money: "",
        discountFlg: "",
        storename: "",
        userId: "",
        storeId: "",
        orderPayType: "",
        httpUrl: n,
        couponType: "",
        couponName: "",
        derateMoney: 0,
        couponId: "",
        code: "",
        miniMoney: 0,
        collectMoney: 0,
        initMoney: 0,
        clickedCoupon: !1,
        allowToClick: !0,
        allowToPay: !0,
        displayy: "none",
        displayy_0: "none",
        displayy_1: "none",
        display_alone1: "none"
    },
    moneyInput: function(e) {
        var a = this, t = e.detail.value;
        (t = (t = (t = (t = t.replace(/[^\d.]/g, "")).replace(/\.{2,}/g, ".")).replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")).replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3")).indexOf(".") < 0 && "" != t && (t = parseFloat(t)), 
        t >= a.data.miniMoney ? 1 == a.data.coupon && "4" == a.data.couponType ? (console.log("couponType4"), 
        a.setData({
            initMoney: t,
            money: t,
            collectMoney: (t - a.data.derateMoney).toFixed(2)
        }), wx.setStorage({
            key: "initMoney",
            data: t
        })) : 1 == a.data.coupon && "2" == a.data.couponType ? (console.log("that.data.derateMoney" + a.data.derateMoney), 
        a.setData({
            initMoney: t,
            money: t,
            collectMoney: (t * a.data.derateMoney / 10).toFixed(2)
        }), wx.setStorage({
            key: "initMoney",
            data: t
        })) : 1 == a.data.card ? (a.setData({
            initMoney: t,
            money: t,
            collectMoney: (t * a.data.discount / 10).toFixed(2)
        }), wx.setStorage({
            key: "initMoney",
            data: t
        })) : (console.log("未选择优惠券"), a.setData({
            initMoney: t,
            money: t,
            collectMoney: (1 * t).toFixed(2)
        }), wx.setStorage({
            key: "initMoney",
            data: t
        }), wx.setStorage({
            key: "collectMoney",
            data: a.data.collectMoney
        })) : (console.log("小于优惠"), a.setData({
            initMoney: t,
            money: t,
            collectMoney: (1 * t).toFixed(2)
        }), wx.setStorage({
            key: "initMoney",
            data: t
        }), wx.setStorage({
            key: "collectMoney",
            data: t
        }));
    },
    chooseCoupon: function(a) {
        console.log("initMoney选择优惠券------", this.data.initMoney), "v" == e.data.findWechatUserById.wechatUserStoreIdentity ? (e.setData({
            coupon: e.data.coupon,
            card: e.data.card,
            displ3: "none",
            clickedCoupon: !1
        }), wx.navigateTo({
            url: "../../index/order/evalOrder/selCoupon/selCoupon?initMoney=" + this.data.initMoney
        })) : wx.chooseYouhuidal({
            title: "提示",
            content: "您没有会员卡不能使用优惠券"
        });
    },
    chooseCard: function() {
        e.setData({
            displ3: "none"
        });
        var a = e.data.findWechatUserById;
        "v" == a.wechatUserStoreIdentity ? wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.getStorage({
                    key: "storeId",
                    success: function(o) {
                        console.log("查询会员卡接口----回调之前"), wx.request({
                            url: n + "skmembermodel/findVipCardById",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                userId: t.data,
                                cardId: a.vipCardId,
                                storeId: o.data
                            },
                            success: function(a) {
                                console.log("查询会员卡接口----回调成功");
                                var t = a.data.discount;
                                (1 * t <= 0 || "" == t || null == t) && (t = "10"), e.setData({
                                    discount: t,
                                    card: !0,
                                    forceCard: !1,
                                    coupon: !1,
                                    discountFlg: "V",
                                    couponId: a.data.id,
                                    miniMoney: 0
                                }), wx.getStorage({
                                    key: "initMoney",
                                    success: function(a) {
                                        e.setData({
                                            collectMoney: (1 * t * a.data / 10).toFixed(2)
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }) : e.setData({
            displayy: "block",
            titlename: "提示",
            carname: "您没有会员卡不能使用会员卡权益"
        });
    },
    chooseForceCard: function() {
        wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.getStorage({
                    key: "storeId",
                    success: function(o) {
                        wx.request({
                            url: n + "skmembermodel/selEquitycardByWX",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                userId: a.data,
                                storeId: o.data
                            },
                            success: function(a) {
                                var o = new Date(a.data.validityBegin).getTime(), n = new Date(a.data.validityEnd).getTime(), d = new Date(t.formatDate(new Date())).getTime();
                                if ("Y" == a.data.isEquitycard) {
                                    if ("1" == a.data.state) return e.setData({
                                        displayy: "block",
                                        titlename: "权益卡已过期",
                                        carname: "请重新领取"
                                    }), !1;
                                    if ("" != a.data.validityBegin && "" != a.data.validityEnd) if (d >= o && d <= n) {
                                        var s = a.data.discount;
                                        (null == s || "" == s || 1 * s <= 0) && (s = "10"), e.setData({
                                            discount: s,
                                            displ3: "none",
                                            card: !0,
                                            forceCard: !0,
                                            coupon: !1,
                                            discountFlg: "Q",
                                            couponId: a.data.id,
                                            miniMoney: 0
                                        }), wx.getStorage({
                                            key: "initMoney",
                                            success: function(a) {
                                                e.setData({
                                                    collectMoney: (1 * s * a.data / 10).toFixed(2)
                                                });
                                            }
                                        });
                                    } else d < o ? e.setData({
                                        display_alone1: "block",
                                        titlename_0: "提示信息",
                                        carname_0: "未到使用时间\n还不能使用权益卡",
                                        cancel: "好\t的"
                                    }) : d > n && e.setData({
                                        display_alone1: "block",
                                        titlename_0: "提示信息",
                                        carname_0: "权益卡已过期",
                                        cancel: "好\t的"
                                    }); else {
                                        var c = a.data.discount;
                                        (null == c || "" == c || 1 * c <= 0) && (c = "10"), e.setData({
                                            discount: c,
                                            displ3: "none",
                                            card: !0,
                                            forceCard: !0,
                                            coupon: !1,
                                            discountFlg: "Q",
                                            couponId: a.data.id,
                                            miniMoney: 0
                                        }), wx.getStorage({
                                            key: "initMoney",
                                            success: function(a) {
                                                e.setData({
                                                    collectMoney: (1 * c * a.data / 10).toFixed(2)
                                                });
                                            }
                                        });
                                    }
                                } else e.setData({
                                    displayy: "block",
                                    titlename: "您没有权益卡",
                                    carname: "你不能使用权益卡"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    onLoad: function(a) {
        e = this, t.getShareInfos(e, n), e.findWechatUserById(), wx.getStorage({
            key: "avatarUrl",
            success: function(a) {
                e.setData({
                    userImgUrl: a.data
                });
            }
        }), wx.setStorage({
            key: "initMoney",
            data: e.data.collectMoney
        }), wx.setStorage({
            key: "wmFlg",
            data: !1
        }), wx.setStorage({
            key: "dcFlg",
            data: !1
        }), wx.setStorage({
            key: "ydFlg",
            data: !1
        }), "1" == a.secondIn ? e.setData({
            secondIn: !0
        }) : e.setData({
            secondIn: !1
        });
        var o = decodeURIComponent(a.scene);
        if ("undefined" != o && void 0 != o && null != o && "null" != o) {
            var d = o.split(",")[0].replace('"', "");
            o.split(",")[1].replace('"', "");
            e.setData({
                scene: o,
                saoma: !0
            }), wx.request({
                url: n + "skstoremodel/findStoreById",
                data: {
                    pid: d
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(o) {
                    e.setData({
                        storeInfo: o.data,
                        storename: o.data.storeInfoName
                    }), console.error("res.data.storeInfoName---------------", o.data.storeInfoName), 
                    wx.setStorage({
                        key: "storeInfo",
                        data: o.data
                    }), wx.setStorage({
                        key: "storeName",
                        data: o.data.storeInfoName
                    }), t.setStoreInfo(e), wx.setNavigationBarTitle({
                        title: o.data.storeInfoName
                    });
                    var d = o.data.storeInfoStoreId;
                    e.setData({
                        storeId: d
                    }), wx.setStorageSync("storeId", d), t.getShareInfos(e, n), e.resendIndex(d), t.setStoreInfo(e), 
                    t.setCompanyId(e, a), t.setStoreId(e), t.setUserId(e), t.setStoreName(e);
                }
            });
        } else t.setStoreInfo(e), t.setCompanyId(e, a), t.setStoreId(e), t.setUserId(e), 
        t.setStoreName(e);
    },
    goToUser: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    resendIndex: function(a) {
        e.setData({
            dcFlg: !0,
            orderType: "D"
        }), wx.request({
            url: n + "skstoremodel/findCompanyByAppid",
            data: {
                xcxAppid: o.globalData.appId
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                wx.setStorage({
                    key: "companyInfo",
                    data: e.data
                }), wx.setStorage({
                    key: "companyId",
                    data: e.data.companyInfoId
                });
            }
        }), e.data.secondIn ? wx.getStorage({
            key: "userId",
            success: function(e) {
                e.data;
            }
        }) : wx.getStorage({
            key: "code",
            success: function(t) {
                if ("" != t.data && null != t.data && void 0 != t.data && "undefined" != t.data && "null" != t.data) {
                    e.setData({
                        code: t.data
                    });
                    var d = t.data;
                    wx.getSetting({
                        success: function(t) {
                            if (t.authSetting["scope.userInfo"]) console.log("============已授权==============="), 
                            wx.getUserInfo({
                                success: function(t) {
                                    e.setData({
                                        userInfo: t.userInfo
                                    }), wx.setStorage({
                                        key: "userName",
                                        data: t.userInfo.nickName
                                    }), wx.request({
                                        url: n + "skmembermodel/getOpenidS",
                                        data: {
                                            code: d,
                                            AppID: o.globalData.appId,
                                            Secret: o.globalData.Secret,
                                            storeUuid: a,
                                            wxUserNickName: t.userInfo.nickName,
                                            headImgUrl: e.data.userInfo.avatarUrl
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(e) {
                                            var t = e.data.wechatUser.wechatUserId;
                                            if (null != e.data.openid && "" != e.data.openid) {
                                                var o = e.data.wechatUser.wechatUserStoreIdentity;
                                                wx.setStorage({
                                                    key: "StoreIdentity",
                                                    data: o
                                                }), wx.setStorage({
                                                    key: "session_key",
                                                    data: e.data.session_key
                                                }), wx.setStorage({
                                                    key: "openId",
                                                    data: e.data.openid
                                                }), wx.setStorage({
                                                    key: "userId",
                                                    data: t
                                                }), wx.setStorage({
                                                    key: "storeId",
                                                    data: a
                                                });
                                            } else wx.showToast({
                                                title: "登录失败"
                                            });
                                        }
                                    });
                                },
                                fali: function(e) {}
                            }); else {
                                console.log("==============未授权=================");
                                var s = "";
                                s = e.data.storeInfo.storeInfoHeadImgUrl, wx.reLaunch({
                                    url: "../../welcome/accredit/accredit?data=" + d + "&store_uuid=" + a + "&imgurl=" + s + "&goShouyin=true&scene=" + e.data.scene,
                                    success: function(e) {},
                                    fail: function(e) {}
                                });
                            }
                        },
                        fail: function(e) {}
                    });
                } else wx.getStorage({
                    key: "userId",
                    success: function(t) {
                        if (t.data) t.data; else e.resendIndex(a);
                    },
                    fail: function() {
                        e.resendIndex(a);
                    }
                });
            },
            fail: function(t) {
                e.resendIndex(a);
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
                    t.conSocket(e.data, n);
                }
            });
        }), console.log("===onShow===", e.data.clickedCoupon), e.data.clickedCoupon && wx.getStorage({
            key: "initMoney",
            success: function(a) {
                a.data >= e.data.miniMoney ? "4" == e.data.couponType ? e.setData({
                    collectMoney: (a.data - e.data.derateMoney).toFixed(2),
                    discountFlg: "Y"
                }) : "2" == e.data.couponType ? e.setData({
                    collectMoney: (a.data * e.data.derateMoney / 10).toFixed(2),
                    discountFlg: "Y"
                }) : (console.log("======initMoney  coupon=========" + a.data), e.setData({
                    coupon: e.data.coupon,
                    card: e.data.card,
                    forceCard: !1,
                    collectMoney: a.data,
                    discountFlg: ""
                })) : e.setData({
                    collectMoney: a.data,
                    discountFlg: ""
                });
            }
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
    chkOrder0: function() {
        var a = e.data.findWechatUserById.wechatUserStoreBalance;
        e.setData({
            wechatUserStoreBalance: a
        }), console.log("用户余额" + a), 1 * a < 1 * e.data.money ? wx.showToast({
            title: "余额不足",
            icon: "loading",
            duration: 1e3
        }) : e.addBonusHistory(e.data.money, e.data.sofFlg);
    },
    wxPay: function(t) {
        var o = this;
        console.log("============collect 微信支付开始==============", t), console.log(e.data.allowToClick), 
        e.setData({
            formId: t.detail.formId,
            clickedCoupon: !1
        }), e.data.allowToClick ? (e.setData({
            displ2: "none",
            allowToClick: !1
        }), setTimeout(function() {
            e.setData({
                allowToClick: !0
            });
            var s = e.data.money;
            console.log(s);
            if (null != s && "" != s) {
                var c = e.data.miniMoney;
                if (console.log("-----", c), console.log("-----", e.data.initMoney), console.log("-----", s), 
                c > e.data.initMoney && e.data.initMoney > 0) return e.setData({
                    displayy: "block",
                    titlename: "未达到指定满减金额",
                    carname: "即将清除优惠信息"
                }), e.setData({
                    couponFlg: 0,
                    couponId: "",
                    discountFlg: "",
                    collectMoney: s,
                    money: s,
                    miniMoney: 0,
                    coupon: "",
                    card: !1,
                    displ3: "none",
                    clickedCoupon: !1,
                    derateMoney: 0
                }), console.log("=========测试couponFlg==========="), console.log(e.data.couponFlg), 
                wx.setStorage({
                    key: "couponInfo",
                    data: ""
                }), void wx.setStorage({
                    key: "couponFlg",
                    data: "0"
                });
                if (0 != s) {
                    var l = o.data.storeId, i = o.data.userId, r = t.currentTarget.dataset.id;
                    e.setData({
                        orderPayType: r
                    }), "B" == r ? e.setData({
                        jiekouming: "addBonusHistory"
                    }) : e.setData({
                        jiekouming: "paymentCallback"
                    });
                    var u = e.data.derateMoney, y = e.data.couponType, p = e.data.coupon, g = e.data.card;
                    e.data.discount;
                    if (1 == p && "4" == y ? (console.log("走的1"), s = e.data.collectMoney) : 1 == p && "2" == y ? (console.log("走的2"), 
                    s = e.data.collectMoney) : 1 == g && (console.log("走的3", e.data.collectMoney), s = e.data.collectMoney), 
                    null != s && "" != s) if (s <= 0) e.setData({
                        displayy: "block",
                        titlename: "提示",
                        carname: "支付金额必须为正"
                    }); else {
                        u > 0 ? e.setData({
                            couponFlg: "1"
                        }) : e.setData({
                            couponFlg: "0"
                        }), console.log("=============couponFlg================="), console.log(e.data.couponFlg), 
                        console.log(r);
                        var f = a.getWxPayOrdrID();
                        if (e.setData({
                            companyOrderNumber: f
                        }), "W" == r) console.log("进来了给我说声"), wx.request({
                            url: n + "skmembermodel/wxPay",
                            data: {
                                wx_user_uuid: i,
                                order_a_num: f,
                                order_a_money: s,
                                appid: d,
                                storeId: l
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                console.log("支付调用 == >"), console.log(a.data), e.doWxPay(a.data, i, l, s);
                                e.addBonusHistory(s, "f");
                            }
                        }); else if ("B" == r) {
                            e.setData({
                                sofFlg: "s"
                            });
                            wx.getStorage({
                                key: "storeName",
                                success: function(a) {
                                    console.log("点击支付的时候金额---------", s), e.setData({
                                        displayy_0: "block",
                                        money: (1 * s).toFixed(2),
                                        titlename_0: "确认支付吗？",
                                        carname_0: "即将支付" + (1 * s).toFixed(2) + "元给" + a.data,
                                        sofFlg: "s"
                                    });
                                }
                            });
                        }
                    } else e.setData({
                        displayy: "block",
                        titlename: "提示",
                        carname: "消费金额不能为空"
                    });
                } else e.setData({
                    displayy: "block",
                    titlename: "提示",
                    carname: "消费不能为0"
                });
            } else e.setData({
                displayy: "block",
                titlename: "提示",
                carname: "消费金额不能为空！"
            });
        }, 100)) : e.setData({
            displ2: "none"
        });
    },
    doWxPay: function(a, t, o, n) {
        console.log("param:" + a), console.log("wx_user_uuid:" + t), console.log("store_uuid:" + o), 
        console.log("money:" + n), e.data.allowToPay && (e.setData({
            allowToPay: !1
        }), wx.requestPayment({
            timeStamp: a.timeStamp,
            nonceStr: a.nonceStr,
            package: a.package,
            signType: "MD5",
            paySign: a.paySign,
            success: function(a) {
                e.setData({
                    sofFlg: "s"
                }), wx.switchTab({
                    url: "../../index/index"
                });
            },
            fail: function(a) {
                console.log("=========调用微信充值接口失败========="), console.log(a);
                e.setData({
                    sofFlg: "f"
                });
            }
        }));
    },
    addBonusHistory: function(a, t) {
        wx.getStorage({
            key: "userId",
            success: function(o) {
                wx.getStorage({
                    key: "storeId",
                    success: function(d) {
                        wx.request({
                            url: n + "skmembermodel/" + e.data.jiekouming,
                            data: {
                                wxUserUuid: o.data,
                                storeUuid: d.data,
                                orderType: "S",
                                orderPayType: e.data.orderPayType,
                                couponFlg: e.data.couponFlg,
                                couponId: e.data.couponId,
                                code: e.data.code,
                                reduceType: "X",
                                realPrice: (1 * a).toFixed(2),
                                discountFlg: e.data.discountFlg,
                                receivablePrice: e.data.initMoney,
                                companyOrderNumber: e.data.companyOrderNumber,
                                sofFlg: t,
                                formId: e.data.formId,
                                formType: "1"
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                if (e.setData({
                                    allowToPay: !0
                                }), "B" != e.data.orderPayType || "000000" == a.data.message) {
                                    if ("s" == t) {
                                        console.log("wxPay走完");
                                        a.data.storeIntegeal;
                                        e.data.findWechatUserById.wechatUserStoreIdentity, e.setData({
                                            displayy_1: "block",
                                            titlename_1: "提示",
                                            carname_1: "支付成功"
                                        });
                                    }
                                } else e.setData({
                                    displayy: "block",
                                    titlename: "余额支付失败",
                                    carname: "请联系后台管理员"
                                });
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        });
                    }
                });
            },
            fail: function(a) {
                console.log("支付失败"), console.log(a), e.setData({
                    displayy_1: "block",
                    titlename_1: "支付失败",
                    carname_1: a
                });
            }
        });
    },
    chkOrder2: function(e) {
        wx.switchTab({
            url: "../../index/index"
        });
    },
    toPay1: function() {
        wx.navigateTo({
            url: "paidOrder/paidOrder"
        });
    },
    toPay2: function() {
        e.setData({
            displ2: "block"
        });
    },
    chooseYouhui: function() {
        console.log(e.data.initMoney), "" != e.data.initMoney ? e.setData({
            displ3: "block"
        }) : e.setData({
            displayy: "block",
            titlename: "提示信息",
            carname: "请输入金额"
        });
    },
    resume: function(e) {
        wx.switchTab({
            url: "../../index"
        });
    },
    back: function() {
        e.setData({
            displ: "none",
            displ2: "none",
            displ3: "none"
        });
    },
    findWechatUserById: function() {
        wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        wx.request({
                            url: n + "skmembermodel/findWechatUserById",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                wechatUserId: a.data,
                                wechatUserStoreStoreInfoStoreId: t.data
                            },
                            success: function(a) {
                                e.setData({
                                    findWechatUserById: a.data
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});