var e = require("./config.js"), a = require("./utils/util.js");

App({
    onLaunch: function(o) {
        var n = this;
        wx.showLoading({
            title: "正在加载"
        }), wx.onMemoryWarning(function() {
            console.log("onMemoryWarningReceive");
        }), wx.onNetworkStatusChange(function(e) {
            console.log(e.isConnected, "网络断开"), console.log(e.networkType);
        }), wx.request({
            data: {
                houseId: e.houseId
            },
            url: a.newUrl() + "elab-marketing-authentication/mimiapp/parameter/detail",
            method: "post",
            success: function(a) {
                a.data.single && (n.globalData.projectName = a.data.single.name || e.projectName, 
                n.globalData.logo = a.data.single.logo, n.globalData.shareImage = a.data.single.shareImage, 
                console.log(n.globalData.shareImage, a));
            },
            fail: function(e) {}
        }), o.shareTickets && wx.getShareInfo({
            shareTicket: o.shareTickets[0],
            success: function(e) {
                e.errMsg, e.encryptedData, e.iv;
            },
            fail: function() {},
            complete: function() {}
        }), wx.getSystemInfo({
            success: function(e) {
                console.log(e), n.systemInfo = e;
            }
        }), console.log(a), wx.request({
            url: a.newUrl() + "elab-marketing-authentication/ipAddr/getIpAddr",
            method: "post",
            success: function(e) {
                n.globalData.ip = e.data.single;
            },
            fail: function(e) {
                console.log("获取ip失败");
            }
        });
    },
    onUnload: function(e) {},
    onHide: function(e) {
        var o = getCurrentPages()[getCurrentPages().length - 1];
        if ("huxingtupian" !== o.data.despage || !o.data.previewFlag) {
            var n = {
                clkId: "clk_2cmina_2",
                clkDesPage: "",
                clkName: "close",
                type: "CLK",
                pvCurPageName: getCurrentPages()[getCurrentPages().length - 1].data.despage || "",
                pvCurPageParams: ""
            };
            a.trackRequest(n, this);
        }
    },
    getToken: function(e) {
        var o = this;
        if (this.globalData.tonken) "function" == typeof e && e(this.globalData.tonken); else {
            var n = a.reformParam(a.tokenUrl, {
                nickname: "",
                mobile: "",
                verifycode: "",
                invitation_code: "",
                password: "",
                source: "3",
                new_guested: "1",
                module: "",
                houseid: "109",
                anonymous: "1",
                appVersion: "150"
            });
            wx.request({
                url: a.url(),
                method: "POST",
                data: n,
                success: function(a) {
                    console.log(a, "app.js *** getToken"), o.globalData.tonken = a.data.single.tonken, 
                    "function" == typeof e && e(o.globalData.tonken);
                }
            });
        }
    },
    getUserInfo: function(e) {
        this.globalData.userInfo = wx.getStorageSync("userInfo"), this.globalData.userInfo && "function" == typeof e && e(this.globalData.userInfo);
    },
    event: function(e) {
        console.log("app.js执行event"), this.gloabalFun.a && "function" == typeof this.gloabalFun.a && this.gloabalFun.a(e);
    },
    login: function(o) {
        var n = this, t = this;
        n.globalData.userInfo = wx.getStorageSync("userInfo"), t.globalData.single && "null" != t.globalData.single && "undefined" != t.globalData.single && t.globalData.single.id && "null" != t.globalData.single.id && "undefined" != t.globalData.single.id ? (console.log("******app.login2-app.globalData.single***", t.globalData.single), 
        "function" == typeof o && o()) : wx.login({
            success: function(l) {
                if (l.code) {
                    var i = n.globalData.secret, s = l.code;
                    n.globalData.code = l.code;
                    var r = {
                        code: s,
                        appid: n.globalData.appid,
                        secret: i
                    };
                    console.log("=========login-code======", r);
                    var g = {
                        nickname: t.globalData.userInfo ? t.globalData.userInfo.nickName : "",
                        mobile: "",
                        source: "3",
                        customerHead: t.globalData.userInfo ? t.globalData.userInfo.avatarUrl : "",
                        registChannel: t.globalData.fromChannel || "",
                        houseId: e.houseId,
                        appVersion: "1.0",
                        code: r.code || "",
                        appId: r.appid || "",
                        secret: r.secret || ""
                    };
                    console.log(g, "param"), wx.request({
                        url: a.newUrl() + "elab-marketing-authentication/customer/miniapp/login",
                        method: "POST",
                        data: g,
                        header: {
                            "content-type": "application/json"
                        },
                        success: function(n) {
                            if (console.log("***app.login***", n), n.data.success) if (n.data.single) {
                                var l = n.data.single;
                                t.globalData.qrpictureurl = l.qrpictureurl, t.globalData.tonken = l.token, t.globalData.single = l, 
                                t.globalData.loginid = l.loginNo, t.globalData.sessionKey = l.sessionKey, t.globalData.openid = l.openId || "", 
                                t.globalData.phone = wx.getStorageSync("phone"), t.globalData.identifier = l.id + "_" + l.houseId, 
                                console.log(t.globalData), "function" == typeof o && o(), t.proto_getLoginInfo(t), 
                                wx.request({
                                    url: a.newUrl() + "elab-marketing-authentication/share/sign",
                                    method: "POST",
                                    data: {
                                        customerId: t.globalData.single.id,
                                        houseId: e.houseId,
                                        userRole: 0
                                    },
                                    success: function(e) {
                                        t.globalData.shareToken = e.data.single || "";
                                    }
                                });
                            } else wx.showToast({
                                title: "数据不存在,请稍后再试",
                                icon: "warn",
                                duration: 1500
                            }); else wx.showToast({
                                title: n.data.message,
                                icon: "warn",
                                duration: 1500
                            });
                        },
                        fail: function(e) {
                            console.log("获取信息失败: ", e), "request:fail timeout" == e.errMsg ? wx.showToast({
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
                }
            }
        });
    },
    proto_getLoginInfo: function(o) {
        wx.request({
            url: a.newUrl() + "elab-marketing-authentication/tencent/signature",
            method: "POST",
            data: {
                identifier: o.globalData.identifier,
                appId: e.sdkAppID
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
    systemInfo: {},
    gloabalFun: {
        a: null
    },
    globalData: {
        appid: "wx0a46b845467c5771",
        secret: "60059ac45698b3646373f53a718f477f",
        shareToken: null,
        videoCustomer: null,
        openid: null,
        sessionKey: null,
        tonken: null,
        projectName: e.projectName,
        logo: null,
        shareImage: null,
        houseid: e.houseId,
        code: null,
        currDespage: null,
        ip: "",
        fromChannel: "",
        imHelloWord: null,
        imRepeat: null,
        qrpictureurl: null,
        identifier: null,
        single: null,
        tmpPhone: !1,
        globalUserInfoFlag: !1,
        phone: null,
        userSig: null,
        like: null,
        isShowVideoButton: !1,
        view: null,
        parm: null,
        loginid: null,
        userInfo: null,
        sessionTime: new Date().getTime(),
        isPhone: !1,
        isUserInfo: !1,
        houseTypeDetail: null,
        dataJson: "",
        pullLog: "",
        pushLog: ""
    }
});