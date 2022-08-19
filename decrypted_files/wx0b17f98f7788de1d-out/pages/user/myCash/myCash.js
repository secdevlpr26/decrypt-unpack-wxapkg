var e, a = require("../../../utils/wx_x_config.js"), t = require("../../../utils/util.js"), o = require("../../../module/getPhone.js"), n = getApp(), s = n.globalData.appId, d = n.globalData.httpUrl;

Page({
    data: {
        tipTitle: "充值活动：",
        displayFlg: "none",
        money: 0,
        hasMore: !1,
        getedMore: !1,
        allowToClick: !0,
        allowToPay: !0,
        pd: "",
        displayy: "none",
        displayy_0: "none",
        display: "none"
    },
    fixNull: function(e) {
        return null == e && (e = 0), e;
    },
    fixNulls: function(e) {
        return null == e && (e = ""), e;
    },
    onLoad: function(a) {
        e = this, "1" == a.secondIn ? e.setData({
            secondIn: !0
        }) : e.setData({
            secondIn: !1
        });
        var o = decodeURIComponent(a.scene);
        if ("undefined" != o && void 0 != o && null != o && "null" != o) {
            var n = o.split(",")[0].replace('"', "");
            o.split(",")[1].replace('"', "");
            e.setData({
                scene: o,
                saoma: !0
            }), wx.request({
                url: d + "skstoremodel/findStoreById",
                data: {
                    pid: n
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(o) {
                    e.setData({
                        storeInfo: o.data
                    }), wx.setStorage({
                        key: "storeInfo",
                        data: o.data
                    }), wx.setStorage({
                        key: "storeName",
                        data: o.data.storeInfoName
                    }), wx.setNavigationBarTitle({
                        title: o.data.storeInfoName
                    });
                    var n = o.data.storeInfoStoreId;
                    e.setData({
                        storeId: n
                    }), wx.setStorageSync("storeId", n), t.getShareInfos(e, d), e.resendIndex(n), t.getShareInfos(e, d), 
                    t.setCompanyId(e, a), t.setStoreId(e), e.findWechatUserById(), wx.getStorage({
                        key: "companyId",
                        success: function(a) {
                            wx.getStorage({
                                key: "userId",
                                success: function(t) {
                                    wx.request({
                                        url: d + "skmembermodel/findVipCardBy",
                                        data: {
                                            companyId: a.data,
                                            storeId: n
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(a) {
                                            wx.setStorage({
                                                key: "vipCard",
                                                data: a.data
                                            });
                                            a.data;
                                            var o = a.data.isExistence;
                                            wx.request({
                                                url: d + "skmembermodel/findWechatUserById",
                                                data: {
                                                    wechatUserId: t.data,
                                                    wechatUserStoreStoreInfoStoreId: n
                                                },
                                                method: "POST",
                                                header: {
                                                    "content-type": "application/x-www-form-urlencoded"
                                                },
                                                success: function(a) {
                                                    var t = a.data;
                                                    wx.request({
                                                        url: d + "skordermodel/getShakeActivityByIdWX",
                                                        method: "POST",
                                                        header: {
                                                            "content-type": "application/x-www-form-urlencoded"
                                                        },
                                                        data: {
                                                            storeId: n
                                                        },
                                                        success: function(a) {
                                                            var s = a.data.isUseVip;
                                                            e.setData({
                                                                jiazaizhong: !1
                                                            }), "v" != t.wechatUserStoreIdentity && s ? o ? (wx.request({
                                                                url: d + "skmembermodel/findVipCardBy",
                                                                data: {
                                                                    companyId: e.data.companyId,
                                                                    storeId: n
                                                                },
                                                                method: "POST",
                                                                header: {
                                                                    "content-type": "application/x-www-form-urlencoded"
                                                                },
                                                                success: function(e) {
                                                                    var a = e.data.id;
                                                                    wx.setStorage({
                                                                        key: "cardId",
                                                                        data: a
                                                                    }), wx.setStorage({
                                                                        key: "storeId",
                                                                        data: n
                                                                    });
                                                                }
                                                            }), e.setData({
                                                                display: "block"
                                                            })) : wx.showModal({
                                                                title: "商家无会员卡可领",
                                                                content: "无法参与活动",
                                                                success: function(a) {
                                                                    a.confirm ? (e.setData({
                                                                        display: "none"
                                                                    }), wx.switchTab({
                                                                        url: "../index/index"
                                                                    })) : a.cancel && (e.setData({
                                                                        display: "none"
                                                                    }), wx.switchTab({
                                                                        url: "../index/index"
                                                                    }));
                                                                }
                                                            }) : e.setData({
                                                                allowShake: !0
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
        } else t.getShareInfos(e, d), t.setCompanyId(e, a), t.setStoreId(e), e.findWechatUserById();
    },
    getPhoneNumber: function(a) {
        console.log("=====摇一摇进入开始获取手机号====="), console.log("getPhoneNumber得到的初始向量===》" + a.detail.iv), 
        console.log("getPhoneNumber得到的加密数据===》" + a.detail.encryptedData);
        var t = e.data.isVip;
        console.log(t + "=====会员===="), console.log("=====开始判断授权===="), "getPhoneNumber:fail user deny" == a.detail.errMsg || "getPhoneNumber:fail:cancel to confirm login" == a.detail.errMsg ? console.log("=====不同意授权====") : (e.setData({
            display: "none"
        }), console.log("=====同意授权===="), wx.getStorage({
            key: "session_key",
            success: function(t) {
                console.log("getStorage得到的session_key===》" + t.data), e.setData({
                    session_key: t.data
                }), console.log("=====开始解密====="), o.getPhoneNum(a.detail.encryptedData, a.detail.iv, n.globalData.appId, e.data.session_key).then(function(a) {
                    e.setData({
                        toGotoActive: !0
                    }), setTimeout(function() {
                        wx.redirectTo({
                            url: "/pages/user/myCard/myCard?toGotoChuZhi=0&saoma=0"
                        });
                    }, 500);
                });
            }
        })), console.log("=====摇一摇获取手机号结束=====");
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
            url: d + "skstoremodel/findCompanyByAppid",
            data: {
                xcxAppid: n.globalData.appId
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
                                        url: d + "skmembermodel/getOpenidS",
                                        data: {
                                            code: o,
                                            AppID: n.globalData.appId,
                                            Secret: n.globalData.Secret,
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
                                    url: "../../welcome/accredit/accredit?data=" + o + "&store_uuid=" + a + "&imgurl=" + s + "&goChuizhi=true&scene=" + e.data.scene,
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
                    t.conSocket(e.data, d);
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
    rechargeMoney: function(a) {
        var t = a.detail.value;
        (t = (t = (t = (t = t.replace(/[^\d.]/g, "")).replace(/\.{2,}/g, ".")).replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")).replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3")).indexOf(".") < 0 && "" != t && (t = parseFloat(t)), 
        e.setData({
            money: t
        });
    },
    recharge: function() {
        "v" == e.data.findWechatUserById.wechatUserStoreIdentity ? e.setData({
            displayFlg: "block"
        }) : e.setData({
            displayy: "block",
            titlename: "提示",
            carname: "您没有会员卡不能充值"
        });
    },
    cancel: function() {
        e.setData({
            displayFlg: "none"
        });
    },
    wxPay: function(t) {
        var o = this;
        e.data.allowToClick ? (e.setData({
            displayFlg: "none",
            allowToClick: !1
        }), setTimeout(function() {
            e.setData({
                allowToClick: !0
            });
            var t = o.data.storeId, n = o.data.userId, r = (1 * o.data.money).toFixed(2);
            if (e.setData({
                money: r
            }), null != r && "" != r) if (r < 0) e.setData({
                displayy: "block",
                titlename: "提示",
                carname: "充值金额必须为正"
            }); else if (r > 1e4) e.setData({
                displayy: "block",
                titlename: "提示",
                carname: "单次充值不可多于1万元"
            }); else if (0 != r) {
                var c = a.getWxPayOrdrID();
                e.setData({
                    companyOrderNumber: c
                }), wx.request({
                    url: d + "skmembermodel/wxPay",
                    data: {
                        wx_user_uuid: n,
                        order_a_num: c,
                        order_a_money: r,
                        appid: s,
                        storeId: t
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        console.log("支付调用 == >"), console.log(a.data), e.doWxPay(a.data, n, t, r);
                    }
                });
            } else e.setData({
                displayy: "block",
                titlename: "提示",
                carname: "充值金额不可为0"
            }); else e.setData({
                displayy: "block",
                titlename: "提示",
                carname: "充值金额不能为空"
            });
        }, 100)) : e.setData({
            displayFlg: "none"
        });
    },
    doWxPay: function(a, t, o, n) {
        console.log("param:" + a), console.log("nonceStr:" + a.nonceStr), console.log("wx_user_uuid:" + t), 
        console.log("store_uuid:" + o), console.log("money:" + n), wx.requestPayment({
            timeStamp: a.timeStamp,
            nonceStr: a.nonceStr,
            package: a.package,
            signType: "MD5",
            paySign: a.paySign,
            success: function(a) {
                e.setData({
                    sofFlg: "s"
                });
                var t = e.data.pd;
                if (console.log("判断码===》" + t), "" == t) {
                    console.log("========是否通过回调=======");
                    e.updatebBalance("s");
                }
            },
            fail: function(a) {
                console.log("支付失败"), console.log(a), console.log(a.errMsg), e.setData({
                    pd: 0
                }), e.setData({
                    sofFlg: "f"
                });
            }
        });
    },
    updatebBalance: function(a) {
        var t = e.data.storeId, o = e.data.userId, n = (1 * e.data.money).toFixed(2);
        e.setData({
            balanceAdd: n
        }), wx.request({
            url: d + "skmembermodel/updatebBalanceNew",
            data: {
                wxUserUuid: o,
                balanceAdd: n,
                storeUuid: t,
                sofFlg: a,
                companyOrderNumber: e.data.companyOrderNumber
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                if (e.setData({
                    allowToPay: !0
                }), "s" == e.data.sofFlg) {
                    a.data.jifen;
                    e.setData({
                        displayy_0: "block",
                        titlename_0: "提示",
                        carname_0: "支付成功"
                    });
                }
            }
        });
    },
    chkOrder0: function(e) {
        wx.switchTab({
            url: "../../index/index"
        });
    },
    findWechatUserById: function() {
        wx.getStorage({
            key: "userId",
            success: function(a) {
                e.setData({
                    userId: a.data
                }), wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        e.setData({
                            storeId: t.data
                        }), wx.request({
                            url: d + "skmembermodel/findWechatUserById",
                            data: {
                                wechatUserId: a.data,
                                wechatUserStoreStoreInfoStoreId: t.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                e.setData({
                                    findWechatUserById: a.data,
                                    wechatUserStoreBalance: a.data.wechatUserStoreBalance
                                });
                                var t = a.data.vipCardId;
                                e.getvipCardRuleWX(t);
                            }
                        });
                    }
                });
            }
        });
    },
    getvipCardRuleWX: function(a) {
        wx.request({
            url: d + "skmembermodel/getvipCardRuleWX",
            data: {
                vipcardId: a
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                var t = a.data;
                console.log(t.length);
                var o = [];
                for (var n in t) o[n] = t[n].ruleType;
                t.length > 5 && e.setData({
                    hasMore: !0
                }), e.setData({
                    getvipCardRuleWX: a.data,
                    ruleType: o
                });
            }
        });
    },
    getMoreTip: function() {
        e.data.getedMore ? e.setData({
            getedMore: !1
        }) : e.setData({
            getedMore: !0
        });
    }
});