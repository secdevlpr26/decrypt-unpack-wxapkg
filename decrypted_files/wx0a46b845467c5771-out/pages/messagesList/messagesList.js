function e(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}

var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, o = getApp(), a = require("../../utils/util.js"), n = (require("../../utils/tls.js"), 
require("../../utils/webim_wx.js")), i = require("../../config.js"), s = require("../../utils/webim_handler.js"), l = require("../../getlogininfo.js"), r = l.authorizeInfo, g = l.getUserInfo, c = a.getImgUrl(), d = null, u = "";

Page({
    data: {
        ePic: c + "wepy_pro/e-pic.png",
        defaultImg: c + "wepy_pro/Avatar_male.png",
        moreImg: c + "wepy_pro/more-coun.png",
        loadingImg: c + "wepy_pro/loading.gif",
        showInfoModel: !1,
        infoFun: null,
        despage: "xiaoxiliebiao",
        despageForChat: "xiaoxiliebiao",
        infoFailFun: null,
        isShowVideoButton: !1,
        showPhoneModel: !1,
        phoneFun: null,
        phoneFailFun: null,
        videoList: [],
        fixImg: c + "wepy_pro/fix-b.png",
        loading: !1,
        moreFag: !1,
        Config: {
            sdkappid: i.sdkAppID,
            accountType: i.accType,
            accountMode: 0
        },
        adviserList: [],
        isSentAdviserList: []
    },
    textChange: function(e) {
        if (e.includes("csyzwfelab20180425hhhdfq")) {
            var t = JSON.parse(e);
            return 506 == t.type ? "[视频]" : 507 == t.type ? "[链接]" : 508 == t.type ? "[此时此刻]" : 513 == t.type ? "" : 102 == t.type ? "" : 104 == t.type ? "[e看房]" : 501 == t.type ? "[视频通话失败]" : 500 == t.type ? "[视频通话成功]" : 509 == t.type ? "[图片]" : 502 == t.type ? "[获取手机号码]" : 204 == t.type ? "[PDF文件]" : 515 == t.type || 516 == t.type ? t.param.text : "";
        }
        return e.includes("【系统消息】") || e.includes("【系统提示】") || e.includes("顾问不存在") || e.includes("onChangePlay") || e.includes("视频通话") ? "" : e.includes("e看房已发送") || e.includes("发起视频看房请求") ? "" : e;
    },
    goVideo: function(e) {
        var t = {
            type: "CLK",
            pvPageStayTime: (new Date().getTime() - wx.getStorageSync("loadTime")) / 1e3,
            clkDesPage: "ekanfangjietongye",
            clkName: "shipin_xiaoxiliebiao",
            clkId: "clk_2cmina_39",
            clkParams: ""
        };
        a.trackRequest(t, o), wx.getSetting({
            success: function(e) {
                console.log("***rtcroomCom.onLoad***getSetting", e), e.authSetting["scope.record"] ? e.authSetting["scope.camera"] ? wx.navigateTo({
                    url: "../multiroom/aide/aide"
                }) : wx.authorize({
                    scope: "scope.camera",
                    complete: function() {
                        wx.navigateTo({
                            url: "../multiroom/aide/aide"
                        });
                    }
                }) : wx.authorize({
                    scope: "scope.record",
                    complete: function(t) {
                        console.log("******", t), e.authSetting["scope.camera"] ? wx.navigateTo({
                            url: "../multiroom/aide/aide"
                        }) : wx.authorize({
                            scope: "scope.camera",
                            complete: function() {
                                wx.navigateTo({
                                    url: "../multiroom/aide/aide"
                                });
                            }
                        });
                    }
                });
            },
            fail: function() {
                wx.showToast({
                    title: "系统提示:网络错误",
                    icon: "warn",
                    duration: 1500
                });
            }
        });
    },
    onShow: function(e) {
        wx.setStorageSync("loadTime", new Date().getTime());
        var t = this;
        o.login(function(e) {
            var n = {
                type: "PV",
                pvId: "P_2cMINA_3",
                pvCurPageName: "xiaoxiliebiao",
                pvCurPageParams: u,
                pvLastPageName: "",
                pvLastPageParams: "",
                pvPageLoadTime: new Date().getTime() - wx.getStorageSync("loadTime")
            };
            console.log(n, "埋点"), a.trackRequest(n, o), wx.request({
                url: a.newUrl() + "elab-marketing-authentication/adviser/video/callLog",
                method: "POST",
                data: {
                    customerId: o.globalData.single.id,
                    houseId: i.houseId
                },
                success: function(e) {
                    e.data.single && t.setData({
                        isShowVideoButton: !0
                    });
                }
            });
        }), o.globalData.isUserInfo || r.call(this, function() {}, function() {}), o.globalData.tmpPhone || this.authorizeIndexPhone(function() {}, function() {}), 
        this.initData();
    },
    onReady: function() {
        wx.hideLoading(), wx.setNavigationBarTitle({
            title: "在线咨询"
        });
    },
    getPhoneNumber: function(e) {
        var t = this;
        this.setData({
            showPhoneModel: !1
        }), wx.setStorageSync("ISauthorizePhone", !0);
        var n = e.detail.iv, s = (e.detail.errMsg, o.globalData.houseid, o.globalData.tonken || ""), l = e.detail.encryptedData, r = o.globalData.sessionKey, g = o.globalData.appid;
        if (console.log("***token***", s), o.globalData.tmpPhone = !0, console.log("****getPhoneNumber****"), 
        e.detail.errMsg.includes("fail")) "function" == typeof t.data.phoneFailFun && t.data.phoneFailFun(); else {
            var c = {
                encryptedData: l,
                sessionKey: r,
                appId: g,
                customerId: o.globalData.single.id,
                houseId: i.houseId,
                shareParam: o.globalData.fromChannel,
                iv: n
            };
            wx.request({
                url: a.newUrl() + "elab-marketing-authentication/position/queryPositionPhone",
                method: "POST",
                data: c,
                header: {
                    "content-type": "application/json",
                    auth_token: s
                },
                success: function(e) {
                    console.log("解密后 data: ", e), e.data.success && e.data.single && (console.log(e.data.single), 
                    o.globalData.phone = e.data.single.phone, wx.setStorageSync("phone", e.data.single.phone), 
                    t.setData({
                        showPhoneModel: !1,
                        showPhoneAuth: !0
                    }), "function" == typeof t.data.phoneFun && t.data.phoneFun());
                },
                fail: function(e) {
                    "function" == typeof t.data.phoneFailFun && t.data.phoneFailFun(), console.log(e, "解密手机号失败ggggggggggg");
                }
            });
        }
    },
    authorizeIndexPhone: function(e, t) {
        var a = this;
        wx.getStorageSync("phone") ? "function" == typeof e && e() : (o.globalData.phone = wx.getStorageSync("phone"), 
        console.log("***authorizeIndexPhone***", o.globalData.phone, wx.getStorageSync("phone")), 
        o.globalData.phone ? (a.setData({
            showPhoneModel: !1,
            showPhoneAuth: !0
        }), "function" == typeof e && e()) : a.setData({
            showPhoneModel: !0,
            phoneFun: e || null,
            phoneFailFun: t || null
        }));
    },
    getUserInfo: function(e) {
        g.call(this, e);
    },
    onUnload: function() {
        a.stopTrackEventTimeObj();
    },
    goAdviserList: function(e) {
        var t = {
            type: "CLK",
            pvPageStayTime: (new Date().getTime() - wx.getStorageSync("loadTime")) / 1e3,
            imTalkType: "1",
            clkDesPage: "xuanzeguwenliebiao",
            clkName: "gengduoguwen",
            pvCurPageName: "xiaoxiliebiao",
            clkId: "clk_2cmina_26",
            clkParams: ""
        };
        a.trackRequest(t, o), wx.navigateTo({
            url: "../counselorList/counselorList"
        });
    },
    initData: function() {
        console.log("准备登陆IM", new Date().getTime() - d), this.setData({
            loading: !0
        });
        o.globalData.tonken;
        var e = o.globalData.identifier, t = (a.formatTime(new Date()), this);
        s.init({
            accountMode: t.data.Config.accountMode,
            accountType: t.data.Config.accountType,
            sdkAppID: t.data.Config.sdkappid,
            selType: n.SESSION_TYPE.C2C,
            selSess: null
        });
        var i = {
            sdkAppID: t.data.Config.sdkappid,
            appIDAt3rd: t.data.Config.sdkappid,
            accountType: t.data.Config.accountType,
            identifier: e,
            identifierNick: o.globalData.single && o.globalData.single.nickname ? o.globalData.single.nickname : "",
            userSig: o.globalData.userSig
        }, l = {
            onConnNotify: s.onConnNotify,
            onBigGroupMsgNotify: function(e) {
                s.onBigGroupMsgNotify(e, function(e) {});
            },
            onMsgNotify: function(e) {
                s.onMsgNotify(e, function(e) {
                    console.log(e, "ppppppp");
                    var o = "【系统消息】该用户当前登录方式为微信小程序登录，无法使用此功能";
                    return e.content && 102 == e.content.type || 512 == e.content.type ? (s.onSendMsg(o, {
                        TYPE: n.SESSION_TYPE.C2C,
                        myselToID: e.fromAccountNick
                    }), void t.addNewMsg(e)) : e.content && 502 == e.content.type ? e.content.param.isShowInvitation ? (wx.setStorageSync("isGiveTel", !1), 
                    console.log(e.content, "ppp"), wx.getStorageSync("phone") ? void t.addNewMsg(e) : void s.onSendMsg("【系统消息】当前用户未授权手机号，暂时无法获取。请通过聊天方式索取客户手机号码！", {
                        TYPE: n.SESSION_TYPE.C2C,
                        myselToID: e.fromAccountNick
                    })) : void console.log("go") : void (e.content && 513 == e.content.type || (e.content && "string" == typeof e.content && e.content.includes("onChangePlayAudio") ? s.onSendMsg(o, {
                        TYPE: n.SESSION_TYPE.C2C,
                        myselToID: e.fromAccountNick
                    }) : t.addNewMsg(e)));
                });
            },
            onGroupSystemNotifys: s.onGroupSystemNotifys,
            onGroupInfoChangeNotify: s.onGroupInfoChangeNotify
        }, r = {
            isAccessFormalEnv: !0,
            isLogOn: !1
        };
        s.sdkLogin(i, l, r, function() {
            console.log("登录成功"), console.log("登陆Im完成，准备load本地列表", new Date().getTime() - d), 
            t.getHistoryMsgs();
        }, function(e) {
            console.error(e.ErrorInfo, "回调函数失败");
        });
    },
    addNewMsg: function(o) {
        var n = o, i = this;
        console.log(n, "new", i.data.adviserList);
        for (var s = 0; s < i.data.adviserList.length; s++) i.data.adviserList[s].id == o.fromAccountNick.substring(0, o.fromAccountNick.indexOf("_")) && (n = Object.assign(i.data.adviserList[s], o), 
        console.log(n, "加最新消息了"));
        console.log(i.data.isSentAdviserList, n, "iopkojo");
        for (var l = !1, r = 0; r < i.data.isSentAdviserList.length; r++) if (n.id == i.data.isSentAdviserList[r].id) {
            console.log("即将崛起", t(n.content)), l = !0;
            var g = "isSentAdviserList[" + r + "].hasNewMsg", c = "isSentAdviserList[" + r + "].MsgShow", d = "isSentAdviserList[" + r + "].MsgTimeStamp";
            return i.setData(e({}, g, i.data.isSentAdviserList[r].hasNewMsg + 1)), "object" == t(n.content) ? i.setData(e({}, c, i.textChange(JSON.stringify(n.content)))) : i.setData(e({}, c, i.textChange(n.content))), 
            void i.setData(e({}, d, a.formatTodayTime(new Date())));
        }
        l || i.data.isSentAdviserList.unshift(n);
    },
    getHistoryMsg: function() {
        o.globalData.tonken, a.formatTime(new Date());
        var e = this;
        n.getRecentContactList({
            Count: 100
        }, function(t) {
            if (console.log(t, "yy"), !t.SessionItem || !t) return !1;
            if (t.SessionItem.length > 0) {
                for (var o = [], n = 0; n < t.SessionItem.length; n++) {
                    console.log(t, "yyyyyy");
                    for (var i = 0; i < e.data.adviserList.length; i++) {
                        var s = t.SessionItem[n].To_Account;
                        s.substring(0, s.indexOf("_")) == e.data.adviserList[i].id && (t.SessionItem[n] = Object.assign(t.SessionItem[n], e.data.adviserList[i]), 
                        t.SessionItem[n].MsgTimeStamp = a.formatTodayTime(new Date(1e3 * t.SessionItem[n].MsgTimeStamp)), 
                        console.log(t.SessionItem[n].MsgShow), t.SessionItem[n].MsgShow = e.textChange(t.SessionItem[n].MsgShow), 
                        o.push(t.SessionItem[n]));
                    }
                }
                e.setData({
                    isSentAdviserList: o
                });
            } else alert("暂无最新消息");
            console.log(e.data.isSentAdviserList), e.setData({
                moreFag: !0
            }), console.log("拿到IM列表", new Date().getTime() - d), console.log("渲染数据", e.data.isSentAdviserList);
        }, function(e) {
            console.log(e, "gggg");
        });
    },
    proto_getLoginInfo: function() {
        wx.request({
            url: a.newUrl() + "elab-marketing-authentication/tencent/signature",
            method: "POST",
            data: {
                identifier: o.globalData.identifier,
                appId: i.sdkAppID
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (e.data.code) return console.log("获取登录信息失败，调试期间请点击右上角三个点按钮，选择打开调试"), void wx.showToast({
                    title: e.data.message + "[" + e.data.code + "]",
                    icon: "warn",
                    duration: 1500
                });
                console.log("获取usersig登录信息成功", e), o.globalData.userSig = e.data.single.signature;
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
    getHistoryMsgs: function() {
        var e = this, t = (a.formatTime(new Date()), o.globalData.tonken);
        e.setData({
            loading: !0
        }), wx.request({
            header: {
                token: t
            },
            url: a.newUrl() + "elab-marketing-authentication/adviser/text/queryImChatRecord",
            method: "POST",
            data: {
                houseId: i.houseId,
                customerId: o.globalData.single.id
            },
            success: function(t) {
                e.data.adviserList = t.data.list || [], e.data.adviserList.forEach(function(e) {
                    e.hasNewMsg = 0;
                }), console.log(e.data.adviserList, "========="), setTimeout(function() {
                    console.log("本地列表加载完成，准备获取im列表", new Date().getTime() - d), e.getHistoryMsg();
                }, 200), e.setData({
                    loading: !1
                });
            }
        });
    },
    onLoad: function(e) {
        wx.showLoading({
            title: "正在加载"
        });
        u = JSON.stringify(e), d = new Date().getTime();
    },
    goChat: function(e) {
        var t = e.currentTarget.dataset.item;
        wx.setStorageSync("adviserInfo", JSON.stringify(t));
        var n = {
            type: "CLK",
            pvPageStayTime: (new Date().getTime() - wx.getStorageSync("loadTime")) / 1e3,
            adviserId: t.id,
            imTalkId: t.id + "_" + o.globalData.single.id + "_" + i.houseId,
            imTalkType: "1",
            clkDesPage: "liaotianchuangkou",
            clkName: "xuanzeguwenliaotian",
            clkId: "clk_2cmina_25",
            clkParams: ""
        };
        a.trackRequest(n, o), wx.navigateTo({
            url: "../chat/chat"
        });
    }
});