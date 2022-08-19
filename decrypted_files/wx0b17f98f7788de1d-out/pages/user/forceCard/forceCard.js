var e, a = require("../../../utils/util.js"), t = require("../../../utils/wx_x_config.js"), a = require("../../../utils/util.js"), o = (require("../../../module/getPhone"), 
getApp()), r = o.globalData.httpUrl, d = (o.globalData.testhttpUrl, o.globalData.appId);

Page({
    data: {
        displayy_0: "none",
        displayy_1: "none",
        displayy_2: "none",
        displayy_3: "none",
        valueMr: "1990-04-09",
        displ3: "none",
        cartArr: [ {
            name: "man",
            value: "男"
        }, {
            name: "woman",
            value: "女"
        } ],
        age: 0,
        date: "请选择您的生日",
        time: "",
        sex: "",
        userName: "",
        tele: "",
        cardName: "至尊七折卡",
        cardStatus: "未开通",
        payStyle: "支付",
        httpUrl: r,
        allowToPay: !0,
        phone: ""
    },
    bindDateChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value);
        var o = Date.parse(a.formatTime(new Date()));
        e.setData({
            date: t.detail.value,
            time: o
        });
        var r = Date.parse(t.detail.value);
        e.setData({
            age: Math.floor((o - r) / 31104e6)
        });
    },
    radioChange: function(a) {
        console.log("radio发生change事件，携带value值为：", a.detail.value), console.log("e.detail.value：", a.detail.value), 
        e.setData({
            sex: a.detail.value
        });
    },
    bindKeyInputName: function(a) {
        e.setData({
            userName: a.detail.value
        }), console.log(e.data.userName);
    },
    onLoad: function(t) {
        e = this, a.getShareInfos(e, r), a.setCompanyId(e, t), a.setStoreId(e), a.setStoreInfo(e), 
        a.setStoreName(e), a.setUserId(e), wx.getStorage({
            key: "toPayMoney",
            success: function(a) {
                e.setData({
                    toPayMoney: a.data
                });
            }
        }), wx.getStorage({
            key: "forceCardName",
            success: function(a) {
                e.setData({
                    cardName: a.data
                });
            }
        }), wx.getStorage({
            key: "activateTime",
            success: function(a) {
                e.setData({
                    activateTime: a.data
                });
            }
        }), wx.getStorage({
            key: "overTime",
            success: function(a) {
                e.setData({
                    overTime: a.data
                });
            }
        }), wx.getStorage({
            key: "forceCardTypeId",
            success: function(a) {
                e.setData({
                    forceCardTypeId: a.data
                });
            }
        }), wx.getStorage({
            key: "companyId",
            success: function(a) {
                wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        wx.request({
                            url: r + "skmembermodel/selEquityCardWX",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                companyId: a.data,
                                storeId: t.data
                            },
                            success: function(a) {
                                var t = a.data.color;
                                e.chengeColor(t), e.setData({
                                    cardInfos: a.data,
                                    forceCardId: a.data.id
                                });
                            }
                        });
                    }
                });
            }
        });
        var o = a.formatDate(new Date()), d = "1950-" + a.formatDate(new Date()).split("-")[1] + "-" + a.formatDate(new Date()).split("-")[2];
        e.setData({
            zuijiao: o,
            startTime: d
        }), console.log("cardName ==> " + e.data.cardName), console.log("cardId ==> " + e.data.cardId);
    },
    onReady: function() {},
    closeTk: function() {
        e.setData({
            displa: !1
        });
    },
    onShow: function() {
        e = this;
        var t = wx.getStorageSync("phone");
        console.log("======phone获取到了没========", t), e.setData({
            phone: t
        }), wx.onSocketMessage(function(t) {
            console.log("===========接收到服务器信息=============="), console.log(t.data), a.getTkInfos(e, t), 
            a.playMusic(e, t);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    a.conSocket(e.data, r);
                }
            });
        });
    },
    onHide: function() {},
    onUnload: function() {
        a.closeSock();
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
    receiveMyCard: function(a) {
        var t = /[0-9]/, o = (e.data.phone, e.data.date), r = e.data.sex, d = e.data.userName, s = e.data.age;
        return "" == d || null == d ? (e.setData({
            popErrorMsg: "用户名不能为空"
        }), void e.ohShitfadeOut()) : t.test(d) ? (e.setData({
            popErrorMsg: "用户名不能为数字"
        }), void e.ohShitfadeOut()) : "" == r || null == r ? (e.setData({
            popErrorMsg: "请选择性别"
        }), void e.ohShitfadeOut()) : "请选择您的生日" == o ? (e.setData({
            popErrorMsg: "请选择出生日期"
        }), void e.ohShitfadeOut()) : s < 0 ? (e.setData({
            popErrorMsg: "请选择正确出生日期"
        }), void e.ohShitfadeOut()) : void e.setData({
            displ3: "block"
        });
    },
    back: function() {
        e.setData({
            displ3: "none"
        });
    },
    chkOrder_0: function() {
        1 * e.data.resj.data.vipCardSum - 1 * e.data.resj.data.vipCardUsedSum < 1 ? e.setData({
            displayy_1: "block",
            carname_1: "请选择其它权益卡购买",
            titlename_1: "该卡已售罄"
        }) : wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        wx.request({
                            url: r + "skmembermodel/findWechatUserById",
                            data: {
                                wechatUserId: a.data,
                                wechatUserStoreStoreInfoStoreId: t.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                var t = a.data.wechatUserStoreBalance;
                                if (e.setData({
                                    wechatUserStoreBalance: a.data.wechatUserStoreBalance
                                }), 1 * t < 1 * e.data.money) return wx.showToast({
                                    title: "余额不足",
                                    icon: "loading",
                                    duration: 1e3
                                }), void e.setData({
                                    sofFlg: ""
                                });
                                e.receiveEquitycard(sofFlg);
                            }
                        });
                    }
                });
            }
        });
    },
    chkOrde_0: function() {
        console.log("我点击了取消"), this.setData({
            sofFlg: ""
        });
    },
    toPay: function(a) {
        var o = a.detail.formId;
        e.setData({
            formId: o
        }), console.log(o), e.setData({
            displ3: "none"
        }), setTimeout(function() {
            var o = e.data.storeId, s = e.data.userId, n = a.currentTarget.dataset.orderPayType;
            e.setData({
                orderPayType: n
            }), "B" == n ? e.setData({
                jiekouming: "receiveEquitycard"
            }) : e.setData({
                jiekouming: "newReceiveEquitycard"
            });
            var c = e.data.toPayMoney;
            if ("W" == n) {
                console.log("微信支付-------");
                var l = t.getWxPayOrdrID();
                e.setData({
                    companyOrderNumber: l
                }), wx.request({
                    url: r + "skmembermodel/wxPay",
                    data: {
                        wx_user_uuid: s,
                        order_a_num: l,
                        order_a_money: c,
                        appid: d,
                        storeId: o
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        console.log("支付调用 == >"), console.log(a.data), e.doWxPay(a.data, s, o, c);
                    }
                });
            } else if ("B" == n) {
                console.log("余额支付-------"), e.setData({
                    sofFlg: "s"
                });
                wx.getStorage({
                    key: "storeName",
                    success: function(a) {
                        wx.getStorage({
                            key: "forceCardTypeId",
                            success: function(t) {
                                wx.request({
                                    url: r + "skmembermodel/selEquitycardByIdWX",
                                    data: {
                                        id: t.data
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(t) {
                                        e.setData({
                                            displayy_0: "block",
                                            carname_0: "即将支付" + c + "元给" + a.data,
                                            titlename_0: "确认支付吗",
                                            resj: t,
                                            money: c
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }, 100);
    },
    doWxPay: function(a, t, o, d) {
        e.data.allowToPay && (e.setData({
            allowToPay: !1
        }), wx.getStorage({
            key: "forceCardTypeId",
            success: function(t) {
                wx.request({
                    url: r + "skmembermodel/selEquitycardByIdWX",
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: {
                        id: t.data
                    },
                    success: function(t) {
                        console.log("你可能进来的这个"), 1 * t.data.vipCardSum - 1 * t.data.vipCardUsedSum < 1 ? e.setData({
                            displayy_1: "block",
                            carname_1: "请选择其它权益卡购买",
                            titlename_1: "该卡已售罄"
                        }) : (e.receiveEquitycard("f"), wx.requestPayment({
                            timeStamp: a.timeStamp,
                            nonceStr: a.nonceStr,
                            package: a.package,
                            signType: "MD5",
                            paySign: a.paySign,
                            success: function(a) {
                                e.setData({
                                    sofFlg: "s"
                                });
                                wx.redirectTo({
                                    url: "alterForceCard/alterForceCard"
                                });
                            },
                            fail: function(a) {
                                console.log("支付失败"), console.log(a), e.setData({
                                    sofFlg: "f"
                                });
                            }
                        }));
                    }
                });
            }
        }));
    },
    chkOrder_2: function() {
        wx.redirectTo({
            url: "alterForceCard/alterForceCard"
        });
    },
    chkOrde_2: function() {
        wx.redirectTo({
            url: "alterForceCard/alterForceCard"
        });
    },
    receiveEquitycard: function(a) {
        wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.request({
                    url: r + "skmembermodel/" + e.data.jiekouming,
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: {
                        equityCardTypeId: e.data.forceCardTypeId,
                        equityCardId: e.data.forceCardId,
                        wxUserId: t.data,
                        payType: e.data.orderPayType,
                        money: e.data.toPayMoney,
                        storeId: e.data.storeId,
                        wechatUserName: e.data.userName,
                        wechatUserAge: e.data.age,
                        wechatUserPhoneNum: e.data.phone,
                        wechatUserBirthday: e.data.date,
                        wechatUserSex: e.data.sex,
                        wechatUserStoreIdentity: "f",
                        formId: e.data.formId,
                        sofFlg: a,
                        outTradeNo: e.data.companyOrderNumber
                    },
                    success: function(a) {
                        if (console.log("=========foreCard========", a), e.setData({
                            allowToPay: !0
                        }), "B" != e.data.orderPayType || 1 == a.data) {
                            if (1 == a.data && "s" == e.data.sofFlg) {
                                wx.setStorage({
                                    key: "isEquitycardn",
                                    data: "Y"
                                }), e.setData({
                                    displayy_2: "block",
                                    carname_2: "您已购买" + e.data.cardName,
                                    titlename_2: "支付成功"
                                });
                            }
                        } else e.setData({
                            displayy_1: "block",
                            carname_1: "请联系后台管理员",
                            titlename_1: "余额支付失败"
                        });
                    }
                });
            },
            chkOrder_3: function() {
                wx.switchTab({
                    url: "../../index/index"
                });
            },
            fail: function(a) {
                e.setData({
                    displayy_3: "block",
                    carname_3: a,
                    titlename_3: "支付失败"
                });
            }
        });
    },
    ohShitfadeOut: function() {
        var a = setTimeout(function() {
            e.setData({
                popErrorMsg: ""
            }), clearTimeout(a);
        }, 3e3);
    },
    chengeColor: function(a) {
        "Color010" == a && e.setData({
            chengedColor: "#63b359"
        }), "Color020" == a && e.setData({
            chengedColor: "#2c9f67"
        }), "Color030" == a && e.setData({
            chengedColor: "#509fc9"
        }), "Color040" == a && e.setData({
            chengedColor: "#5885cf"
        }), "Color050" == a && e.setData({
            chengedColor: "#9062c0"
        }), "Color060" == a && e.setData({
            chengedColor: "#d09a45"
        }), "Color070" == a && e.setData({
            chengedColor: "#e4b138"
        }), "Color080" == a && e.setData({
            chengedColor: "#ee903c"
        }), "Color081" == a && e.setData({
            chengedColor: "#f08500"
        }), "Color082" == a && e.setData({
            chengedColor: "#a9d92d"
        }), "Color090" == a && e.setData({
            chengedColor: "#dd6549"
        }), "Color100" == a && e.setData({
            chengedColor: "#cc463d"
        }), "Color101" == a && e.setData({
            chengedColor: "#cf3e36"
        }), "Color102" == a && e.setData({
            chengedColor: "#5E6671"
        });
    }
});