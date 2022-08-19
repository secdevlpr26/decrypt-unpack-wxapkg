var e, t = getApp(), a = require("../../utils/util.js"), o = require("../../module/getPhone"), n = require("../../utils/util.js"), s = t.globalData.httpUrl;

Page({
    data: {
        shakeShowFlg: "N",
        isRefreshing: !1,
        wechatUserStoreIntegeal: 0,
        wechatUserStoreBalance: 0,
        vipColor: "#ffbf20",
        httpUrl: s,
        isVip: !1,
        noticeCount: 0,
        selectedFlag: [ !1, !1, !1, !1, !1 ],
        contactName: "",
        contactTel: "",
        contactAddr: "",
        allowtion: !1,
        session_key: "",
        phone: "",
        display: "none",
        displayy: "none",
        isEquitycard: "",
        isEquitycardn: "",
        companyId: "",
        storeId: "",
        displayy_0: "none",
        displayy_1: "none",
        displayy_2: "none",
        displayy_3: "none",
        display_alone1: "none",
        displayy_4: "none"
    },
    onLoad: function(t) {
        e = this, wx.setStorage({
            key: "goods",
            data: []
        });
        var a = decodeURIComponent(t.scene);
        if ("undefined" != a && void 0 != a && "" != a && null != a) {
            e.setData({
                allowtion: !0
            });
            var o = a.split(",")[0].replace('"', "");
            e.setData({
                pid: o
            }), console.log(o), wx.request({
                url: s + "skstoremodel/findStoreById",
                data: {
                    pid: o
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    var a = t.data, o = t.data.storeInfoStoreId;
                    wx.setStorage({
                        key: "storeInfo",
                        data: a
                    }), wx.setNavigationBarTitle({
                        title: a.storeInfoName
                    }), console.log("storeInfo.storeInfoName"), console.log(a.storeInfoName), e.setData({
                        storeId: o
                    }), wx.setStorageSync("storeId", o), n.getShareInfos(e, s), e.resendIndex(o);
                }
            });
        } else n.getShareInfos(e, s), n.setStoreInfo(e), wx.getStorage({
            key: "connectedSocket",
            success: function(e) {
                e.data ? console.log("============已有socket不连接=============") : wx.getStorage({
                    key: "userId",
                    success: function(e) {
                        n.conSocket(e.data, s);
                    }
                });
            }
        }), e.loadOther();
    },
    onReady: function() {},
    closeTk: function() {
        e.setData({
            displa: !1
        });
    },
    onShow: function() {
        (e = this).qyCard(), wx.getStorage({
            key: "isEquitycardn",
            success: function(t) {
                var a = t.data;
                console.log("==========权益卡状态==========="), console.log(t.data), e.setData({
                    isEquitycardn: a
                });
            }
        }), e.selOperationRecord(), wx.onSocketMessage(function(t) {
            console.log("===========接收到服务器信息=============="), console.log(t.data), n.getTkInfos(e, t), 
            n.playMusic(e, t);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    n.conSocket(e.data, s);
                }
            });
        }), e.findWechatUserById0(), e.data.allowtion && (e.setData({
            allowtion: !1
        }), e.loadOther());
    },
    onHide: function() {},
    onUnload: function() {
        n.closeSock();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
        var t = {
            scene: ""
        };
        (e = this).data.isRefreshing || (e.setData({
            isRefreshing: !0
        }), setTimeout(function() {
            e.setData({
                isRefreshing: !1
            }), e.onLoad(t), e.onShow();
        }, 2e3));
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: e.data.storeInfo.storeInfoName,
            desc: "",
            imageUrl: "",
            path: "/pages/index/index?storeId=" + e.data.storeId + "&companyId=" + e.data.companyId,
            success: function(e) {
                console.log("转发成功");
            },
            fail: function(e) {
                console.log("转发失败");
            }
        };
    },
    checkCoupon: function() {
        "v" == e.data.findWechatUserById.wechatUserStoreIdentity ? "0" == e.data.receiveConfigNum || null == e.data.receiveConfigNum || void 0 == e.data.receiveConfigNum ? e.setData({
            displayy_0: "block",
            carname_0: "您没有优惠券",
            titlename_0: "请前往领券中心领券"
        }) : wx.navigateTo({
            url: "../user/myCoupon/myCoupon"
        }) : e.setData({
            displayy_0: "block",
            carname_0: "您没有会员卡不能查看优惠券",
            titlename_0: "提示信息"
        });
    },
    chkOrder3: function(t) {
        e.couponsCenter();
    },
    checkCash: function() {
        "v" == e.data.findWechatUserById.wechatUserStoreIdentity ? wx.navigateTo({
            url: "myCash/myCash"
        }) : e.setData({
            displayy_0: "block",
            carname_0: "您没有会员卡不能充值",
            titlename_0: "提示信息"
        });
    },
    myCard: function(t) {
        var a = e.data.isVip;
        console.log("===myCard==="), console.log(a), console.log("===myCard==="), a ? wx.navigateTo({
            url: "myCard/receiveMyCard/receiveMyCard"
        }) : e.data.isExistenceVip ? e.data.toGotoActive ? (wx.navigateTo({
            url: "myCard/myCard?toGotoActive=0&toGoTuanGou=1"
        }), e.setData({
            toGotoActive: !1,
            toGoTuanGou: !1
        })) : e.data.toGoTuanGou ? (wx.navigateTo({
            url: "myCard/myCard?toGoTuanGou=0&toGotoActive=1"
        }), e.setData({
            toGotoActive: !1,
            toGoTuanGou: !1
        })) : (wx.navigateTo({
            url: "myCard/myCard?toGotoActive=1&toGoTuanGou=1"
        }), e.setData({
            toGotoActive: !1,
            toGoTuanGou: !1
        })) : wx.showToast({
            title: "无卡可领取",
            success: function() {}
        });
    },
    getPhonexuj: function(a) {
        e.data.isVip;
        "getPhoneNumber:fail user deny" == a.detail.errMsg || "getPhoneNumber:fail:cancel to confirm login" == a.detail.errMsg || wx.getStorage({
            key: "session_key",
            success: function(n) {
                console.log(n.data + "_key"), e.setData({
                    session_key: n.data
                }), o.getPhoneNum(a.detail.encryptedData, a.detail.iv, t.globalData.appId, e.data.session_key).then(function(t) {
                    e.myCard();
                });
            }
        });
    },
    getPhoneNumber: function(a) {
        e.data.isVip;
        "getPhoneNumber:ok" == a.detail.errMsg && wx.getStorage({
            key: "session_key",
            success: function(n) {
                console.log(n.data + "_key"), e.setData({
                    session_key: n.data
                }), o.getPhoneNum(a.detail.encryptedData, a.detail.iv, t.globalData.appId, e.data.session_key).then(function(t) {
                    e.myCard();
                });
            }
        });
    },
    getPhone: function(a) {
        e.data.isVip;
        "getPhoneNumber:fail user deny" == a.detail.errMsg || "getPhoneNumber:fail:cancel to confirm login" == a.detail.errMsg || wx.getStorage({
            key: "session_key",
            success: function(n) {
                console.log(n.data + "_key"), e.setData({
                    session_key: n.data
                }), o.getPhoneNum(a.detail.encryptedData, a.detail.iv, t.globalData.appId, e.data.session_key).then(function(t) {
                    e.setData({
                        phone: wx.getStorageSync("phone")
                    }), e.receiveForceCard();
                });
            }
        });
    },
    alterMyCard: function(t) {
        e.data.isVip ? wx.navigateTo({
            url: "../user/alterMyCard/alterMyCard"
        }) : e.data.isExistenceVip ? wx.showToast({
            title: "请先去领卡",
            success: function() {
                wx.navigateTo({
                    url: "myCard/myCard"
                });
            }
        }) : wx.showToast({
            title: "无卡可领",
            success: function() {}
        });
    },
    getNumber: function(a) {
        e.data.isVip;
        "getPhoneNumber:fail user deny" == a.detail.errMsg || "getPhoneNumber:fail:cancel to confirm login" == a.detail.errMsg || wx.getStorage({
            key: "session_key",
            success: function(n) {
                console.log("session_key===>" + n.data), e.setData({
                    session_key: n.data
                }), o.getPhoneNum(a.detail.encryptedData, a.detail.iv, t.globalData.appId, e.data.session_key).then(function(t) {
                    e.alterMyCard();
                });
            }
        });
    },
    shippingAddress: function(t) {
        e.chkUserFlag("外卖") ? wx.navigateTo({
            url: "shippingAddress/shippingAddress"
        }) : e.setData({
            displayy_0: "block",
            carname_0: "没有外卖功能",
            titlename_0: "提示信息"
        });
    },
    comment: function(e) {
        wx.navigateTo({
            url: "comment/comment"
        });
    },
    couponsCenter: function(t) {
        if (e.chkUserFlag("会员")) {
            var a = e.data.isVip;
            e.data.couponCnt > 0 ? wx.navigateTo({
                url: "couponsCenter/couponsCenter"
            }) : 1 == a ? e.setData({
                displayy: "block",
                carname: "暂无优惠券可领",
                carbtn: "1"
            }) : e.setData({
                displayy: "block",
                carname: "暂无优惠券可领,是否办理会员卡",
                carbtn: ""
            });
        }
    },
    resumee: function() {
        e.setData({
            displayy: "none"
        });
    },
    chkOrderr: function() {
        e.setData({
            displayy: "none"
        }), wx.navigateTo({
            url: "myCard/myCard"
        });
    },
    chkOrder0: function() {
        e.setData({
            displayy: "none"
        });
    },
    getNotice: function() {
        wx.removeTabBarBadge({
            index: 3
        }), wx.getStorage({
            key: "storeId",
            success: function(t) {
                wx.getStorage({
                    key: "userId",
                    success: function(a) {
                        wx.request({
                            url: s + "skmembermodel/updateBalanceRead",
                            data: {
                                wxUserUuid: a.data,
                                storeUuid: t.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                console.log(t.data), e.setData({
                                    noticeCount: 0
                                });
                            }
                        });
                    }
                });
            }
        }), wx.navigateTo({
            url: "userNotice/userNotice"
        });
    },
    shopNotice: function(e) {
        wx.navigateTo({
            url: "shopNotice/shopNotice"
        });
    },
    quxiao: function() {
        e.setData({
            display: "none"
        });
    },
    getPhoneNumbery: function(a) {
        console.log("====我的页面开始获取手机号====="), console.log("getPhoneNumber得到的初始向量===》" + a.detail.iv), 
        console.log("getPhoneNumber得到的加密数据===》" + a.detail.encryptedData);
        var n = e.data.isVip;
        console.log(n + "=====会员===="), console.log("=====开始判断授权===="), e.setData({
            display: "none"
        }), "getPhoneNumber:fail user deny" == a.detail.errMsg || "getPhoneNumber:fail:cancel to confirm login" == a.detail.errMsg ? console.log("=====不同意授权====") : (e.setData({
            display: "none"
        }), console.log("=====同意授权===="), wx.getStorage({
            key: "session_key",
            success: function(n) {
                console.log("getStorage得到的session_key===》" + n.data), e.setData({
                    session_key: n.data
                }), console.log("=====开始解密====="), o.getPhoneNum(a.detail.encryptedData, a.detail.iv, t.globalData.appId, e.data.session_key).then(function(t) {
                    e.setData({
                        toGotoActive: !1
                    }), e.myCard();
                });
            }
        })), console.log("=====摇一摇获取手机号结束=====");
    },
    getPhonelj: function(a) {
        console.log("====领劵中心开始获取手机号====="), console.log("getPhoneNumber得到的初始向量===》" + a.detail.iv), 
        console.log("getPhoneNumber得到的加密数据===》" + a.detail.encryptedData);
        var n = e.data.isVip;
        console.log(n + "=====会员===="), console.log("=====开始判断授权===="), e.setData({
            display: "none"
        }), "getPhoneNumber:fail user deny" == a.detail.errMsg || "getPhoneNumber:fail:cancel to confirm login" == a.detail.errMsg ? console.log("=====不同意授权====") : (e.setData({
            display: "none"
        }), console.log("=====同意授权===="), wx.getStorage({
            key: "session_key",
            success: function(n) {
                console.log("getStorage得到的session_key===》" + n.data), e.setData({
                    session_key: n.data
                }), console.log("=====开始解密====="), o.getPhoneNum(a.detail.encryptedData, a.detail.iv, t.globalData.appId, e.data.session_key).then(function(t) {
                    e.setData({
                        toGotoActive: !1
                    }), e.couponsCenter();
                });
            }
        })), console.log("=====领劵中心获取手机号结束=====");
    },
    changeToggle: function(t) {
        var a = t.currentTarget.dataset.index;
        if (console.log("========index============", a), "0" == a && !e.data.isVip) {
            if (!e.data.isExistenceVip) return void e.setData({
                displayy_0: "block",
                carname_0: "商家无会员卡可领",
                titlename_0: "提示信息"
            });
            if ("N" == e.data.vipUseFlg) return void e.setData({
                displayy_0: "block",
                carname_0: "商家无会员卡功能",
                titlename_0: "提示信息"
            });
        }
        "1" != a ? ("7" == a && wx.getStorage({
            key: "storeId",
            success: function(t) {
                wx.request({
                    url: s + "skordermodel/getShakeActivityByIdWX",
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    data: {
                        storeId: t.data
                    },
                    success: function(t) {
                        t.data.isUseVip ? e.data.isVip ? (console.log("=====是会员====="), wx.navigateTo({
                            url: "../active/active?secondIn=1"
                        })) : (console.log("======不是会员====="), e.setData({
                            display: "block"
                        })) : wx.navigateTo({
                            url: "../active/active?secondIn=1"
                        });
                    }
                });
            }
        }), "5" == a && wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.getStorage({
                    key: "storeId",
                    success: function(a) {
                        wx.request({
                            url: s + "skmembermodel/selEquitycardByWX",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                userId: t.data,
                                storeId: a.data
                            },
                            success: function(t) {
                                if ("Y" != t.data.isEquitycard) {
                                    if (!e.data.isExistenceForce) return void e.setData({
                                        displayy_0: "block",
                                        carname_0: "商家无权益卡可领",
                                        titlename_0: "提示信息"
                                    });
                                    if ("N" == e.data.forceUseFlg) return void e.setData({
                                        displayy_0: "block",
                                        carname_0: "商家无权益卡功能",
                                        titlename_0: "提示信息"
                                    });
                                } else if (!e.data.isExistenceForce) return void e.setData({
                                    displayy_0: "block",
                                    carname_0: "您的权益卡已过期",
                                    titlename_0: "提示信息"
                                });
                            }
                        });
                    }
                });
            }
        }), e.data.selectedFlag[a] ? e.data.selectedFlag[a] = !1 : e.data.selectedFlag[a] = !0, 
        wx.getStorage({
            key: "storeId",
            success: function(t) {
                console.log(t.data), wx.request({
                    url: s + "skstoremodel/findStoreById",
                    data: {
                        storeId: t.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        console.log(t.data), console.log(e.data.selectedFlag), e.setData({
                            selectedFlag: e.data.selectedFlag,
                            contactName: t.data.storeInfoContactsName,
                            contactTel: t.data.storeInfoTelephoneNum,
                            contactAddr: t.data.storeInfoAddress
                        });
                    }
                });
            }
        })) : e.couponsCenter();
    },
    chkUserFlag: function(t) {
        var a = e.data.menus, o = !0;
        console.log("预订 ==> ", a);
        for (var n in a) console.log("预订 ==>>>>>>>>> ", a[n].buttonName + " , " + a[n].menuStorePowerisUser), 
        a[n].buttonName == t && "N" == a[n].menuStorePowerisUser && (console.log(a[n].buttonName + " , " + a[n].menuStorePowerisUser), 
        o = !1);
        return o;
    },
    qyCard: function() {
        wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.getStorage({
                    key: "storeId",
                    success: function(a) {
                        wx.request({
                            url: s + "skmembermodel/selEquitycardByWX",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                userId: t.data,
                                storeId: a.data
                            },
                            success: function(t) {
                                var a = t.data.isEquitycard;
                                e.setData({
                                    isEquitycardn: a
                                }), console.log("看看状态====》", a);
                            }
                        });
                    }
                });
            }
        });
    },
    receiveForceCard: function() {
        wx.getStorage({
            key: "userId",
            success: function(t) {
                console.log("权益卡ees------", t), wx.getStorage({
                    key: "storeId",
                    success: function(o) {
                        console.log("权益卡eessss------", o), wx.request({
                            url: s + "skmembermodel/selEquitycardByWX",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                userId: t.data,
                                storeId: o.data
                            },
                            success: function(t) {
                                e.setData({
                                    isEquitycard: t.data.isEquitycard
                                });
                                var o = new Date(t.data.validityBegin).getTime(), n = new Date(t.data.validityEnd).getTime(), s = new Date(a.formatDate(new Date())).getTime();
                                if ("Y" == t.data.isEquitycard) "1" == t.data.state ? e.setData({
                                    displayy_2: "block",
                                    carname_2: "权益卡已过期",
                                    titlename_2: "请重新领取"
                                }) : "" != t.data.validityBegin && "" != t.data.validityEnd ? s >= o && s <= n ? wx.navigateTo({
                                    url: "forceCard/alterForceCard/alterForceCard"
                                }) : s < o ? e.setData({
                                    display_alone1: "block",
                                    titlename_0: "提示信息",
                                    carname_0: "未到使用时间\n还不能使用权益卡",
                                    cancel: "好\t的"
                                }) : s > n && e.setData({
                                    displayy_4: "block",
                                    titlename_4: "提示信息",
                                    carname_4: "权益卡已过期"
                                }) : wx.navigateTo({
                                    url: "forceCard/alterForceCard/alterForceCard"
                                }); else {
                                    if (!e.data.isExistenceForce) return void e.setData({
                                        displayy_0: "block",
                                        carname_0: "没有权益卡可购买",
                                        titlename_0: "提示信息"
                                    });
                                    wx.navigateTo({
                                        url: "forceCard/receiveForceCard/receiveForceCard"
                                    });
                                }
                            }
                        });
                    }
                });
            }
        });
    },
    chkOrder2: function(e) {
        wx.navigateTo({
            url: "forceCard/receiveForceCard/receiveForceCard"
        });
    },
    chkOrder4: function(e) {
        wx.navigateTo({
            url: "myCard/myCard"
        });
    },
    selOperationRecord: function() {
        wx.getStorage({
            key: "storeId",
            success: function(t) {
                wx.getStorage({
                    key: "userId",
                    success: function(a) {
                        wx.request({
                            url: s + "skmembermodel/getOperationRecordNum",
                            data: {
                                wxUserUuid: a.data,
                                storeUuid: t.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                console.log(t.data + "===res.data提醒信息量===>");
                                var a = t.data, o = String(a);
                                a > 0 && wx.setTabBarBadge({
                                    index: 3,
                                    text: o
                                }), e.setData({
                                    noticeCount: a
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    findWechatUserById0: function() {
        wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.getStorage({
                    key: "storeId",
                    success: function(a) {
                        var o = t.data, n = a.data;
                        wx.request({
                            url: s + "skmembermodel/findWechatUserById",
                            data: {
                                wechatUserId: o,
                                wechatUserStoreStoreInfoStoreId: n
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                e.setData({
                                    findWechatUserById: t.data
                                });
                                var a = e.data.findWechatUserById;
                                "v" == a.wechatUserStoreIdentity ? e.setData({
                                    isVip: !0
                                }) : e.setData({
                                    isVip: !1
                                }), e.setData({
                                    wechatUserStoreIntegeal: a.wechatUserStoreIntegeal,
                                    wechatUserStoreBalance: a.wechatUserStoreBalance,
                                    receiveConfigNum: a.receiveConfigNum,
                                    wechatUserNickName: a.wechatUserNickName
                                }), e.data.isVip ? e.setData({
                                    vipColor: "#ffbf20"
                                }) : e.setData({
                                    vipColor: "#666"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    findWechatUserById: function() {
        wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.getStorage({
                    key: "storeId",
                    success: function(a) {
                        var o = t.data, n = a.data;
                        wx.request({
                            url: s + "skmembermodel/findWechatUserById",
                            data: {
                                wechatUserId: o,
                                wechatUserStoreStoreInfoStoreId: n
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                e.setData({
                                    findWechatUserById: t.data
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    selCouponByReceive: function() {
        wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.getStorage({
                    key: "storeId",
                    success: function(a) {
                        wx.getStorage({
                            key: "companyId",
                            success: function(o) {
                                wx.request({
                                    url: s + "skcouponmodel/selCouponByReceive",
                                    data: {
                                        userId: t.data,
                                        applyStoreId: a.data,
                                        companyId: o.data
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(t) {
                                        var a = t.data.length;
                                        e.setData({
                                            couponCnt1: a,
                                            selCouponByReceive: t.data
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
    selCouponByApply: function() {
        wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.getStorage({
                    key: "storeId",
                    success: function(a) {
                        wx.getStorage({
                            key: "companyId",
                            success: function(o) {
                                wx.request({
                                    url: s + "skcouponmodel/selCouponByApply",
                                    data: {
                                        userId: t.data,
                                        applyStoreId: a.data,
                                        companyId: o.data
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(t) {
                                        var a = t.data.length;
                                        e.setData({
                                            couponCnt: a,
                                            selCouponByApply: t.data
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
    selEquityCardWX: function() {
        wx.getStorage({
            key: "companyId",
            success: function(t) {
                wx.getStorage({
                    key: "storeId",
                    success: function(a) {
                        wx.request({
                            url: s + "skmembermodel/selEquityCardWX",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                companyId: t.data,
                                storeId: a.data
                            },
                            success: function(t) {
                                console.log("========权益卡===========", t), e.setData({
                                    isExistenceForce: t.data.isExistence,
                                    selEquityCardWX: t.data
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    findAllMenuStorePower: function() {
        wx.getStorage({
            key: "storeId",
            success: function(t) {
                wx.request({
                    url: s + "sksystemmodel/findAllMenuStorePower",
                    data: {
                        menuStorePowerStoreinfoStoreId: t.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        for (var a in t.data) if ("会员" == t.data[a].buttonName) {
                            var o = t.data[a].menuStorePowerisShow, n = t.data[a].menuStorePowerisUser;
                            e.setData({
                                vipShowFlg: o,
                                vipUseFlg: n
                            });
                        } else if ("权益卡" == t.data[a].buttonName) {
                            var s = t.data[a].menuStorePowerisShow, c = t.data[a].menuStorePowerisUser;
                            e.setData({
                                forceShowFlg: s,
                                forceUseFlg: c
                            });
                        } else if ("摇一摇" == t.data[a].buttonName) {
                            var r = t.data[a].menuStorePowerisShow;
                            e.setData({
                                shakeShowFlg: r
                            });
                        } else if ("拼团" == t.data[a].buttonName) {
                            var d = t.data[a].menuStorePowerisShow;
                            e.setData({
                                pintuanFlg: d
                            });
                        }
                        e.setData({
                            findAllMenuStorePower: t.data
                        });
                    }
                });
            }
        });
    },
    resendIndex: function(a) {
        console.log(a), wx.request({
            url: s + "skstoremodel/findCompanyByAppid",
            data: {
                xcxAppid: t.globalData.appId
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                wx.setStorage({
                    key: "companyInfo",
                    data: t.data
                }), wx.setStorage({
                    key: "companyId",
                    data: t.data.companyInfoId
                }), e.setData({
                    companyId: t.data.companyInfoId
                });
            }
        }), e.data.secondIn ? wx.getStorage({
            key: "userId",
            success: function(t) {
                var o = t.data;
                e.directLoad(a, o);
            }
        }) : wx.login({
            success: function(o) {
                console.log("====wx.login success====");
                o.code;
                if (o.code) {
                    console.log("====get code===="), console.log("res.code ==> " + o.code);
                    var n = o.code;
                    wx.getSetting({
                        success: function(o) {
                            console.log("====wx.getSetting success===="), console.log(o), console.log(o.authSetting["scope.userInfo"]), 
                            o.authSetting["scope.userInfo"] ? wx.getUserInfo({
                                success: function(o) {
                                    console.log("====wx.getUserInfo success===="), wx.setStorage({
                                        key: "userName",
                                        data: o.userInfo.nickName
                                    }), wx.setStorage({
                                        key: "avatarUrl",
                                        data: o.userInfo.avatarUrl
                                    }), wx.request({
                                        url: s + "skmembermodel/getOpenidS",
                                        data: {
                                            code: n,
                                            AppID: t.globalData.appId,
                                            Secret: t.globalData.Secret,
                                            storeUuid: a,
                                            wxUserNickName: o.userInfo.nickName,
                                            headImgUrl: e.data.userInfo.avatarUrl
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(t) {
                                            if (null != t.data.openid && "" != t.data.openid) {
                                                var o = t.data.wechatUser.wechatUserStoreIdentity;
                                                wx.setStorage({
                                                    key: "StoreIdentity",
                                                    data: o
                                                }), wx.setStorage({
                                                    key: "session_key",
                                                    data: t.data.session_key
                                                });
                                                t.data.wechatUser;
                                                var n = t.data.wechatUser.wechatUserId;
                                                wx.setStorage({
                                                    key: "openId",
                                                    data: t.data.openid
                                                }), wx.setStorage({
                                                    key: "userId",
                                                    data: t.data.wechatUser.wechatUserId
                                                }), wx.setStorage({
                                                    key: "storeId",
                                                    data: a
                                                }), e.directLoad(a, n);
                                            } else wx.showToast({
                                                title: "登录失败"
                                            });
                                        }
                                    });
                                },
                                fali: function(e) {
                                    console.log("====wx.login fail====");
                                }
                            }) : (console.log("======未授权"), wx.getStorage({
                                key: "companyId",
                                success: function(t) {
                                    wx.request({
                                        url: s + "skstoremodel/findStoreById",
                                        data: {
                                            pid: e.data.pid
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(t) {
                                            e.setData({
                                                shouquanImg: t.data.storeInfoHeadImgUrl
                                            });
                                            var o = t.data.storeInfoHeadImgUrl;
                                            wx.reLaunch({
                                                url: "../welcome/accredit/accredit?data=" + n + "&store_uuid=" + a + "&imgurl=" + o + "&goUser=true",
                                                success: function(e) {
                                                    console.log(e);
                                                },
                                                fail: function(e) {
                                                    console.log(e);
                                                }
                                            });
                                        }
                                    });
                                }
                            }));
                        },
                        fail: function(e) {
                            console.log("====wx.getSetting fail====");
                        }
                    });
                } else console.log("获取用户登录态失败！" + o.errMsg);
            },
            fail: function(e) {
                console.log("====wx.login fail===="), console.log("错误信息"), console.log(e);
            }
        });
    },
    directLoad: function(e, t) {
        wx.getStorage({
            key: "connectedSocket",
            success: function(e) {
                e.data ? console.log("============已有socket不连接=============") : n.conSocket(t, s);
            }
        }), wx.getStorage({
            key: "companyId",
            success: function(a) {
                wx.request({
                    url: s + "skmembermodel/updatVipCardStore",
                    data: {
                        wechatUserId: t,
                        wechatUserStoreStoreInfoStoreId: e,
                        companyId: a.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(o) {
                        wx.request({
                            url: s + "skmembermodel/updatEquitycardStore",
                            data: {
                                wxUserId: t,
                                storeId: e,
                                companyId: a.data
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
    loadOther: function() {
        n.setStoreInfoName(e), e.setData({
            isVip: !0
        }), t.getUserInfo(function(t) {
            e.setData({
                userInfo: t
            });
        }), wx.getStorage({
            key: "menus",
            success: function(t) {
                e.setData({
                    menus: t.data
                });
            }
        }), n.setStoreId(e), n.setStoreInfo(e), wx.getStorage({
            key: "companyId",
            success: function(t) {
                e.setData({
                    companyId: t.data
                }), wx.request({
                    url: s + "skmembermodel/findVipCardBy",
                    data: {
                        companyId: t.data,
                        storeId: e.data.storeId
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        var a = t.data;
                        wx.setStorage({
                            key: "vipCard",
                            data: a
                        }), wx.setStorage({
                            key: "cardId",
                            data: a.id
                        }), e.setData({
                            isExistenceVip: a.isExistence
                        });
                    }
                }), e.dfxi();
            }
        }), e.selCouponByReceive(), e.selCouponByApply(), console.log("=============可领取优惠券数量============"), 
        console.log(e.data.couponCnt), e.selOperationRecord(), e.selEquityCardWX(), e.findAllMenuStorePower();
    },
    stroeList: function(t) {
        wx.request({
            url: s + "skstoremodel/wxSelectStoreByCompanyId",
            data: {
                storeInfoCompanyInfoId: e.data.companyId,
                storeInfoLongitude: "",
                storeInfoLatitude: "",
                condition: "",
                storeInfoName: e.data.storeName,
                storeInfoAddress: e.data.contactAddr
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                var t = e.data[0].takeOutDispatchType;
                console.log("配送状态为=====>", t), wx.setStorage({
                    key: "takeOutDispatchType",
                    data: t
                });
            }
        });
    },
    dfxi: function() {
        wx.getStorage({
            key: "storeId",
            success: function(t) {
                console.log(t.data), wx.request({
                    url: s + "skstoremodel/findStoreById",
                    data: {
                        storeId: t.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        console.log(t.data), e.setData({
                            contactName: t.data.storeInfoName,
                            contactAddr: t.data.storeInfoAddress
                        }), e.stroeList();
                    }
                });
            }
        });
    },
    checkCollage: function() {
        wx.navigateTo({
            url: "../collage/collage"
        });
    },
    myCollage: function() {
        wx.navigateTo({
            url: "../collage/myCollage/myCollage"
        });
    },
    naviToOther: function() {
        if (e.data.isVip) wx.navigateToMiniProgram({
            appId: "wx019c4828f5156688"
        }); else {
            if (!e.data.isExistenceVip) return void e.setData({
                displayy_0: "block",
                carname_0: "无会员卡可领",
                titlename_0: "提示信息"
            });
            e.setData({
                toGoTuanGou: !0
            }), e.myCard();
        }
    }
});