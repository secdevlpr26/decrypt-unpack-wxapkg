var e, a = require("../../../../utils/wx_x_config.js"), t = require("../../../../utils/util.js"), o = require("../../../../utils/util.js"), d = require("../../../../module/getPhone"), r = getApp(), n = r.globalData.httpUrl, s = r.globalData.appId;

Page({
    data: {
        chengedColor: "#666",
        cardName: "权益卡",
        cardStatus: "未开通",
        httpUrl: n,
        noteTitle: "使用须知",
        forceTitle: "特权介绍",
        displ3: "none",
        clicked: !1,
        allowToPay: !0,
        displayy: "none",
        displayy_0: "none",
        displayy_1: "none",
        displayy_2: "none",
        selEquitycardByIdWX_data: []
    },
    goToUser: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    onLoad: function(a) {
        e = this, t.getShareInfos(e, n), t.setCompanyId(e, a), t.setStoreId(e), t.setStoreInfo(e), 
        t.setStoreName(e), t.setUserId(e), "1" == a.secondIn ? e.setData({
            secondIn: !0
        }) : e.setData({
            secondIn: !1
        });
        var d = decodeURIComponent(a.scene);
        if ("undefined" != d && void 0 != d && null != d && "null" != d) {
            var r = d.split(",")[0].replace('"', "");
            d.split(",")[1].replace('"', "");
            e.setData({
                scene: d,
                saoma: !0
            }), wx.request({
                url: n + "skstoremodel/findStoreById",
                data: {
                    pid: r
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(a) {
                    e.setData({
                        storeInfo: a.data
                    }), wx.setStorage({
                        key: "storeInfo",
                        data: a.data
                    }), wx.setStorage({
                        key: "storeName",
                        data: a.data.storeInfoName
                    }), wx.setNavigationBarTitle({
                        title: a.data.storeInfoName
                    });
                    var d = a.data.storeInfoStoreId;
                    e.setData({
                        storeId: d
                    }), wx.setStorageSync("storeId", d), t.getShareInfos(e, n), e.resendIndex(d), console.error("stroeid==========", d), 
                    wx.getStorage({
                        key: "userId",
                        success: function(a) {
                            console.error("userid=-------", a.data), wx.request({
                                url: n + "skmembermodel/selEquitycardByWX",
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                data: {
                                    userId: a.data,
                                    storeId: d
                                },
                                success: function(a) {
                                    e.setData({
                                        isEquitycard: a.data.isEquitycard
                                    });
                                    var t = new Date(a.data.validityBegin).getTime(), r = new Date(a.data.validityEnd).getTime(), s = new Date(o.formatDate(new Date())).getTime();
                                    "Y" == a.data.isEquitycard ? "1" == a.data.state ? wx.getStorage({
                                        key: "companyId",
                                        success: function(a) {
                                            wx.request({
                                                url: n + "skmembermodel/selEquityCardWX",
                                                method: "POST",
                                                header: {
                                                    "content-type": "application/x-www-form-urlencoded"
                                                },
                                                data: {
                                                    companyId: a.data,
                                                    storeId: d
                                                },
                                                success: function(a) {
                                                    console.log("res.data.vipcardTypeBeanList-----", a.data.vipcardTypeBeanList), e.setData({
                                                        cardInfos: a.data,
                                                        note: a.data.title,
                                                        forceCardId: a.data.id,
                                                        forceCards: a.data.vipcardTypeBeanList,
                                                        cardName: a.data.title
                                                    }), wx.setStorage({
                                                        key: "forceCardId",
                                                        data: a.data.id
                                                    });
                                                }
                                            });
                                        }
                                    }) : "" != a.data.validityBegin && "" != a.data.validityEnd ? s >= t && s <= r ? wx.redirectTo({
                                        url: "/pages/user/forceCard/alterForceCard/alterForceCard?saoma=0"
                                    }) : s < t ? e.setData({
                                        display_alone1: "block",
                                        titlename_0: "提示信息",
                                        carname_0: "未到使用时间\n还不能使用权益卡",
                                        cancel: "好\t的"
                                    }) : s > r && e.setData({
                                        displayy_4: "block",
                                        titlename_4: "提示信息",
                                        carname_4: "权益卡已过期"
                                    }) : wx.redirectTo({
                                        url: "/pages/user/forceCard/alterForceCard/alterForceCard?saoma=0"
                                    }) : wx.getStorage({
                                        key: "companyId",
                                        success: function(a) {
                                            wx.request({
                                                url: n + "skmembermodel/selEquityCardWX",
                                                method: "POST",
                                                header: {
                                                    "content-type": "application/x-www-form-urlencoded"
                                                },
                                                data: {
                                                    companyId: a.data,
                                                    storeId: d
                                                },
                                                success: function(a) {
                                                    console.log("res.data.vipcardTypeBeanList-----", a.data.vipcardTypeBeanList), e.setData({
                                                        cardInfos: a.data,
                                                        note: a.data.title,
                                                        forceCardId: a.data.id,
                                                        forceCards: a.data.vipcardTypeBeanList,
                                                        cardName: a.data.title
                                                    }), wx.setStorage({
                                                        key: "forceCardId",
                                                        data: a.data.id
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
        } else wx.getStorage({
            key: "companyId",
            success: function(a) {
                wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        wx.request({
                            url: n + "skmembermodel/selEquityCardWX",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                companyId: a.data,
                                storeId: t.data
                            },
                            success: function(a) {
                                console.log("res.data.vipcardTypeBeanList-----", a.data.vipcardTypeBeanList), e.setData({
                                    cardInfos: a.data,
                                    note: a.data.title,
                                    forceCardId: a.data.id,
                                    forceCards: a.data.vipcardTypeBeanList,
                                    cardName: a.data.title
                                }), wx.setStorage({
                                    key: "forceCardId",
                                    data: a.data.id
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    resendIndex: function(a) {
        e.setData({
            dcFlg: !0,
            orderType: "D"
        }), wx.request({
            url: n + "skstoremodel/findCompanyByAppid",
            data: {
                xcxAppid: r.globalData.appId
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
                    var o = t.data;
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
                                            code: o,
                                            AppID: r.globalData.appId,
                                            Secret: r.globalData.Secret,
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
                                var d = "";
                                d = e.data.storeInfo.storeInfoHeadImgUrl, wx.reLaunch({
                                    url: "../../../welcome/accredit/accredit?data=" + o + "&store_uuid=" + a + "&imgurl=" + d + "&goQuanyi=true&scene=" + e.data.scene,
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
    directLoad: function(e, a) {
        wx.getStorage({
            key: "connectedSocket",
            success: function(e) {
                e.data ? console.log("============已有socket不连接=============") : t.conSocket(a, n);
            }
        }), wx.getStorage({
            key: "companyId",
            success: function(t) {
                wx.request({
                    url: n + "skmembermodel/updatVipCardStore",
                    data: {
                        wechatUserId: a,
                        wechatUserStoreStoreInfoStoreId: e,
                        companyId: t.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(o) {
                        wx.request({
                            url: n + "skmembermodel/updatEquitycardStore",
                            data: {
                                wxUserId: a,
                                storeId: e,
                                companyId: t.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                console.log(e.data);
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
                    t.conSocket(e.data, n);
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
    radioChange: function(a) {
        var t = e.data.forceCards, o = a.currentTarget.dataset.index, d = t[o].money, r = t[o].id, n = t[o].effectiveStartDate, s = t[o].effectiveEndDate, c = t[o].vipCardName;
        wx.setStorage({
            key: "forceCardName",
            data: c
        }), wx.setStorage({
            key: "activateTime",
            data: n
        }), wx.setStorage({
            key: "overTime",
            data: s
        }), wx.setStorage({
            key: "toPayMoney",
            data: d
        }), wx.setStorage({
            key: "forceCardTypeId",
            data: r
        }), e.setData({
            toPayMoney: d,
            forceCardTypeId: r,
            clicked: !0
        });
    },
    getPhone: function(a) {
        e.data.isVip;
        "getPhoneNumber:fail user deny" == a.detail.errMsg || "getPhoneNumber:fail:cancel to confirm login" == a.detail.errMsg || wx.getStorage({
            key: "session_key",
            success: function(t) {
                e.setData({
                    session_key: t.data
                }), d.getPhoneNum(a.detail.encryptedData, a.detail.iv, r.globalData.appId, e.data.session_key).then(function(t) {
                    e.receiveMyCard(a);
                });
            }
        });
    },
    receiveMyCard: function(a) {
        e.radioChange(a), e.data.clicked ? wx.getStorage({
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
                                "v" == a.data.wechatUserStoreIdentity ? e.setData({
                                    displ3: "block"
                                }) : wx.redirectTo({
                                    url: "../forceCard"
                                });
                            }
                        });
                    }
                });
            }
        }) : e.setData({
            displayy: "block",
            titlename: "提示",
            carname: "请先选择权益卡"
        });
    },
    back: function() {
        e.setData({
            displ3: "none"
        });
    },
    toPay: function(t) {
        var o = t.detail.formId;
        e.setData({
            formId: o
        }), console.log(o), e.setData({
            displ3: "none"
        }), setTimeout(function() {
            var o = e.data.storeId, d = e.data.userId, r = t.currentTarget.dataset.orderPayType;
            e.setData({
                orderPayType: r
            }), "B" == r ? e.setData({
                jiekouming: "receiveEquitycard"
            }) : e.setData({
                jiekouming: "newReceiveEquitycard"
            });
            var c = e.data.toPayMoney;
            if ("W" == r) {
                var i = a.getWxPayOrdrID();
                e.setData({
                    companyOrderNumber: i
                }), wx.request({
                    url: n + "skmembermodel/wxPay",
                    data: {
                        wx_user_uuid: d,
                        order_a_num: i,
                        order_a_money: c,
                        appid: s,
                        storeId: o
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        console.log("支付调用 == >"), console.log(a.data), e.doWxPay(a.data, d, o, c);
                    }
                });
            } else if ("B" == r) {
                e.setData({
                    sofFlg: "s"
                });
                wx.getStorage({
                    key: "storeName",
                    success: function(a) {
                        wx.getStorage({
                            key: "forceCardTypeId",
                            success: function(t) {
                                wx.request({
                                    url: n + "skmembermodel/selEquitycardByIdWX",
                                    data: {
                                        id: t.data
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(t) {
                                        e.setData({
                                            displayy_2: "block",
                                            titlename_2: "即将支付" + c + "元给" + a.data,
                                            carname_2: "确认支付吗",
                                            selEquitycardByIdWX_data: t,
                                            money0: c
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
    chkOrder1_2: function() {
        e.setData({
            sofFlg: ""
        });
    },
    chkOrder2: function(a) {
        var t = this.data.selEquitycardByIdWX_data;
        1 * t.data.vipCardSum - 1 * t.data.vipCardUsedSum < 1 ? e.setData({
            displayy: "block",
            titlename: "该卡已售罄",
            carname: "请选择其它权益卡购买"
        }) : wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        wx.request({
                            url: n + "skmembermodel/findWechatUserById",
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
                                }), 1 * t < 1 * e.data.money0) return wx.showToast({
                                    title: "余额不足",
                                    icon: "loading",
                                    duration: 1e3
                                }), void e.setData({
                                    sofFlg: ""
                                });
                                e.receiveEquitycard(e.data.sofFlg);
                            }
                        });
                    }
                });
            }
        });
    },
    doWxPay: function(a, t, o, d) {
        e.data.allowToPay && (e.setData({
            allowToPay: !1
        }), wx.getStorage({
            key: "forceCardTypeId",
            success: function(t) {
                wx.request({
                    url: n + "skmembermodel/selEquitycardByIdWX",
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: {
                        id: t.data
                    },
                    success: function(t) {
                        console.log("==========该卡已售罄=========", t), 1 * t.data.vipCardSum - 1 * t.data.vipCardUsedSum < 1 ? e.setData({
                            displayy: "block",
                            titlename: "该卡已售罄",
                            carname: "请选择其它权益卡购买"
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
                                console.log("===========开始存入==========="), wx.setStorage({
                                    key: "isEquitycardn",
                                    data: "Y"
                                }), console.log("===========开始后跳==========="), wx.redirectTo({
                                    url: "../alterForceCard/alterForceCard"
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
    receiveEquitycard: function(a) {
        wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.request({
                    url: n + "skmembermodel/" + e.data.jiekouming,
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
                        formId: e.data.formId,
                        sofFlg: a,
                        outTradeNo: e.data.companyOrderNumber
                    },
                    success: function(a) {
                        e.setData({
                            allowToPay: !0
                        }), "B" != e.data.orderPayType || 1 == a.data ? 1 == a.data && "s" == e.data.sofFlg && (wx.setStorage({
                            key: "isEquitycardn",
                            data: "Y"
                        }), e.setData({
                            displayy_0: "block",
                            titlename_0: "支付成功",
                            carname_0: "您已购买" + e.data.cardName
                        })) : e.setData({
                            displayy: "block",
                            titlename: "余额支付失败",
                            carname: "请联系后台管理员"
                        });
                    }
                });
            },
            fail: function(a) {
                console.log("支付失败"), console.log(a), e.setData({
                    displayy_1: "block",
                    titlename_1: "提示信息",
                    carname_1: "支付失败"
                });
            }
        });
    },
    chkOrder0: function(e) {
        wx.navigateTo({
            url: "../alterForceCard/alterForceCard?jifenState=1"
        });
    },
    chkOrder1: function(e) {
        wx.switchTab({
            url: "../../index/index"
        });
    }
});