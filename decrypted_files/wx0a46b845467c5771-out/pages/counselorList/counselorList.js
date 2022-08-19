var e = getApp(), a = require("../../utils/util.js"), t = require("../../config.js"), o = a.getImgUrl() + "/wepy_pro", n = "", i = require("../../getlogininfo.js"), s = i.authorizeInfo, l = i.getUserInfo;

Page({
    data: {
        closeImg: o + "/close-button.png",
        chatButton: o + "/im-chat.png",
        showInfoModel: !1,
        infoFun: null,
        infoFailFun: null,
        showPhoneModel: !1,
        phoneFun: null,
        imTitle: "项目金牌顾问",
        imDesc: "请选择一名顾问为您在线咨询",
        isShowVideoButton: !1,
        despage: "xuanzeguwenliebiao",
        phoneFailFun: null,
        loading: !1,
        title: "在线咨询",
        sorry: o + "/sorry.png",
        defaultImg: o + "/Avatar_male.png",
        yuyue: o + "/yuyue.png",
        fixImg: o + "/fix-b.png",
        showTel: !1,
        adviserList: [],
        tryAgainFlag: !1,
        setInter: null
    },
    onShow: function(o) {
        wx.setStorageSync("loadTime", new Date().getTime());
        var i = this;
        try {
            e.login(function(o) {
                var s = e.globalData.tonken, l = a.formatTime(new Date());
                console.log("***counselorList***", e.globalData.single.id, t.houseId), wx.request({
                    url: a.newUrl() + "elab-marketing-authentication/adviser/video/callLog",
                    method: "POST",
                    data: {
                        customerId: e.globalData.single.id,
                        houseId: t.houseId
                    },
                    success: function(e) {
                        e.data.single && i.setData({
                            isShowVideoButton: !0
                        });
                    }
                }), wx.request({
                    header: {
                        token: s
                    },
                    url: a.newUrl() + "elab-marketing-authentication/worker/adviser/statusList",
                    method: "POST",
                    data: {
                        houseId: t.houseId,
                        time: l,
                        pageNo: "1",
                        pageSize: "100"
                    },
                    success: function(t) {
                        if (console.log(t, "列表返回"), !t.data.single.imAdvisers || void 0 == t.data.single.imAdvisers || t.data.single.imAdvisers.length < 1) {
                            i.setData({
                                showTel: !0
                            });
                            var o = {
                                type: "PV",
                                pvId: "P_2cMINA_4",
                                pvCurPageName: "wuzaixianguwen",
                                pvCurPageParams: n,
                                pvLastPageName: getCurrentPages()[getCurrentPages().length - 2] ? getCurrentPages()[getCurrentPages().length - 2].data.despage : "",
                                pvLastPageParams: "",
                                pvPageLoadTime: new Date().getTime() - wx.getStorageSync("loadTime")
                            };
                            return console.log(o, "埋点1"), void a.trackRequest(o, e);
                        }
                        var s = [];
                        if (t.data.single.imAdvisers.forEach(function(e) {
                            e.onlineStatus || s.push(e);
                        }), i.setData({
                            adviserList: s || []
                        }), !i.data.adviserList || i.data.adviserList.length < 1) {
                            console.log(i.data.adviserList.length, "你居然走这里？"), i.setData({
                                showTel: !0
                            });
                            var l = {
                                type: "PV",
                                pvId: "P_2cMINA_4",
                                pvCurPageName: "wuzaixianguwen",
                                pvCurPageParams: n,
                                pvLastPageName: getCurrentPages()[getCurrentPages().length - 2] ? getCurrentPages()[getCurrentPages().length - 2].data.despage : "",
                                pvLastPageParams: "",
                                pvPageLoadTime: new Date().getTime() - wx.getStorageSync("loadTime")
                            };
                            console.log(l, "埋点1"), a.trackRequest(l, e);
                        } else {
                            console.log(i.data.adviserList.length, "你应该走这里啊"), i.setData({
                                showTel: !1
                            });
                            var g = {
                                type: "PV",
                                pvId: "P_2cMINA_2",
                                pvCurPageName: "xuanzeguwenliebiao",
                                pvCurPageParams: n,
                                pvLastPageName: getCurrentPages()[getCurrentPages().length - 2] ? getCurrentPages()[getCurrentPages().length - 2].data.despage : "",
                                pvLastPageParams: "",
                                pvPageLoadTime: new Date().getTime() - wx.getStorageSync("loadTime")
                            };
                            console.log(g, "埋点2"), a.trackRequest(g, e);
                        }
                        console.log(i.data.adviserList, "拿到列表", i.data.showTel), i.setData({
                            loading: !1
                        });
                    },
                    complete: function(e) {
                        wx.hideLoading();
                    }
                });
            });
        } catch (o) {
            o = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(o);
            wx.hideLoading();
        }
        this.setData({
            loading: !0
        }), console.log("app.single", e.globalData.single, e.globalData), wx.hideShareMenu(), 
        wx.setNavigationBarTitle({
            title: "在线咨询"
        }), console.log(e.globalData.isUserInfo, "isfalse"), e.globalData.isUserInfo || s.call(this, function() {}, function() {}), 
        console.log(wx.getStorageSync("phone"), "有值就不会弹起"), e.globalData.tmpPhone || wx.getStorageSync("phone") || (console.log("从未授权过", wx.getStorageSync("phone")), 
        this.authorizeIndexPhone(function() {}, function() {}));
    },
    goMessageList: function(e) {
        wx.redirectTo({
            url: "../messagesList/messagesList"
        });
    },
    getPhoneNumber: function(a) {
        var t = this;
        this.setData({
            showPhoneModel: !1
        }), wx.setStorageSync("ISauthorizePhone", !0);
        var o = a.detail.iv, n = (a.detail.errMsg, e.globalData.houseid, e.globalData.tonken || ""), i = a.detail.encryptedData, s = e.globalData.sessionKey, l = e.globalData.appid;
        console.log("***token***", n), e.globalData.tmpPhone = !0, console.log("****getPhoneNumber****"), 
        a.detail.errMsg.includes("fail") ? "function" == typeof t.data.phoneFailFun && t.data.phoneFailFun() : (i && s && o || wx.showToast({
            title: "系统提示:授权信息错误",
            icon: "warn",
            duration: 1500
        }), e.globalData.single ? t.getPhone(i, s, l, o, n) : t.data.setInter = setInterval(function() {
            e.globalData.single && (t.getPhone(i, s, l, o, n), clearInterval(t.data.setInter));
        }, 200));
    },
    getPhone: function(o, n, i, s, l) {
        var g = this, r = {
            encryptedData: o,
            sessionKey: n,
            appId: i,
            customerId: e.globalData.single.id,
            houseId: t.houseId,
            shareParam: e.globalData.fromChannel,
            iv: s
        };
        wx.request({
            url: a.newUrl() + "elab-marketing-authentication/position/queryPositionPhone",
            method: "POST",
            data: r,
            header: {
                "content-type": "application/json",
                token: l
            },
            success: function(a) {
                console.log("解密后 data: ", a), a.data.success && a.data.single && (console.log(a.data.single), 
                e.globalData.phone = a.data.single.phone, wx.setStorageSync("phone", a.data.single.phone), 
                g.setData({
                    showPhoneModel: !1,
                    showPhoneAuth: !0
                }), "function" == typeof g.data.phoneFun && g.data.phoneFun());
            },
            fail: function(e) {
                "function" == typeof g.data.phoneFailFun && g.data.phoneFailFun(), console.log(e, "解密手机号失败ggggggggggg");
            }
        });
    },
    authorizeIndexPhone: function(a, t) {
        var o = this;
        wx.getStorageSync("phone") ? "function" == typeof a && a() : (e.globalData.phone = wx.getStorageSync("phone"), 
        console.log("***authorizeIndexPhone***", e.globalData.phone, wx.getStorageSync("phone")), 
        e.globalData.phone ? (o.setData({
            showPhoneModel: !1,
            showPhoneAuth: !0
        }), "function" == typeof a && a()) : o.setData({
            showPhoneModel: !0,
            phoneFun: a || null,
            phoneFailFun: t || null
        }));
    },
    getUserInfo: function(e) {
        l.call(this, e);
    },
    onUnload: function() {
        a.stopTrackEventTimeObj();
    },
    goChat: function(o) {
        var n = o.currentTarget.dataset.item;
        wx.setStorageSync("adviserInfo", JSON.stringify(n));
        var i = {
            type: "CLK",
            pvPageStayTime: (new Date().getTime() - wx.getStorageSync("loadTime")) / 1e3,
            adviserId: n.id,
            imTalkId: n.id + "_" + e.globalData.single.id + "_" + t.houseId,
            imTalkType: "1",
            clkDesPage: "liaotianchuangkou",
            clkName: "xuanzeguwenliaotian",
            clkId: "clk_2cmina_24",
            clkParams: ""
        };
        a.trackRequest(i, e), wx.redirectTo({
            url: "../chat/chat"
        }), console.log(n, "------------", JSON.stringify(n));
    },
    proto_getLoginInfo: function() {
        wx.request({
            url: a.newUrl() + "elab-marketing-authentication/tencent/signature",
            method: "POST",
            data: {
                identifier: e.globalData.identifier,
                appId: t.sdkAppID
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if (a.data.code) return console.log("获取登录信息失败，调试期间请点击右上角三个点按钮，选择打开调试"), void wx.showToast({
                    title: a.data.message + "[" + a.data.code + "]",
                    icon: "warn",
                    duration: 1500
                });
                console.log("获取usersig登录信息成功", a), e.globalData.userSig = a.data.single.signature;
            },
            fail: function(e) {
                console.log("获取IM信息失败: ", e), "request:fail timeout" == e.errMsg ? wx.showToast({
                    title: "网络请求超时，请检查网络状态",
                    icon: "warn",
                    duration: 1500
                }) : wx.showToast({
                    title: e.errMsg,
                    icon: "warn",
                    duration: 1500
                });
            }
        });
    },
    goVideo: function(t) {
        var o = this;
        if (!o.data.tryAgainFlag) {
            var n = {
                type: "CLK",
                pvPageStayTime: (new Date().getTime() - wx.getStorageSync("loadTime")) / 1e3,
                clkDesPage: "ekanfangjietongye",
                clkName: "shipin_xuanguwenliebiao",
                clkId: "clk_2cmina_42",
                clkParams: ""
            };
            a.trackRequest(n, e), o.data.tryAgainFlag = !0, wx.getSetting({
                success: function(e) {
                    console.log("***rtcroomCom.onLoad***getSetting", e), e.authSetting["scope.record"] ? e.authSetting["scope.camera"] ? (o.data.tryAgainFlag = !1, 
                    wx.navigateTo({
                        url: "../multiroom/aide/aide"
                    })) : wx.authorize({
                        scope: "scope.camera",
                        complete: function() {
                            o.data.tryAgainFlag = !1, wx.navigateTo({
                                url: "../multiroom/aide/aide"
                            });
                        }
                    }) : wx.authorize({
                        scope: "scope.record",
                        complete: function() {
                            e.authSetting["scope.camera"] ? (o.data.tryAgainFlag = !1, wx.navigateTo({
                                url: "../multiroom/aide/aide"
                            })) : wx.authorize({
                                scope: "scope.camera",
                                complete: function() {
                                    o.data.tryAgainFlag = !1, wx.navigateTo({
                                        url: "../multiroom/aide/aide"
                                    });
                                }
                            });
                        }
                    });
                },
                fail: function() {
                    o.data.tryAgainFlag = !1, wx.showToast({
                        title: "系统提示:网络错误",
                        icon: "warn",
                        duration: 1500
                    });
                }
            });
        }
    },
    onReady: function() {},
    onLoad: function(o) {
        wx.showLoading({
            title: "正在加载"
        });
        var i = this;
        n = JSON.stringify(o), wx.request({
            url: a.newUrl() + "elab-marketing-authentication/house/house/selectHouseLeadWork",
            method: "POST",
            data: {
                id: t.houseId
            },
            success: function(a) {
                a.data.single.leadTitle && i.setData({
                    imTitle: a.data.single.leadTitle
                }), a.data.single.leadRemark && i.setData({
                    imDesc: a.data.single.leadRemark
                }), e.globalData.imHelloWord = a.data.single.greetings, e.globalData.imRepeat = a.data.single.autoReply;
            }
        });
    },
    goTel: function() {
        var t = wx.getStorageSync("phone"), o = wx.getStorageSync("indexLiudian"), n = {
            type: "CLK",
            pvPageStayTime: (new Date().getTime() - wx.getStorageSync("loadTime")) / 1e3,
            clkDesPage: "querenliudianye",
            clkName: "wuren_liudianyuyue",
            clkId: "clk_2cmina_41",
            clkParams: ""
        };
        a.trackRequest(n, e), t || o ? wx.showToast({
            title: "留电成功，我们会尽快联系您",
            icon: "none",
            duration: 2e3
        }) : wx.navigateTo({
            url: "../savephone/savephone"
        }), console.log(12, t);
    }
});