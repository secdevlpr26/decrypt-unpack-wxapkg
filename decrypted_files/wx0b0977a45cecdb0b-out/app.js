var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = (require("/components/utils/ald-stat.js"), function() {
    var e = wx.getExtConfigSync();
    return e.ext ? e.ext : require("config.js");
}());

App({
    WxParse: require("/components/wxParse/wxParse.js"),
    windowWidth: 750,
    windowHeight: 600,
    pixelRatio: 2,
    onLaunch: function() {
        var e = this;
        e.loadBaseInfo(), wx.setNavigationBarTitle({
            title: e.globalData.appTitle
        }), wx.getSystemInfo({
            success: function(e) {
                this.pixelRatio = e.pixelRatio, this.windowWidth = e.windowWidth, this.windowHeight = e.windowHeight;
            }
        });
    },
    onShow: function() {
        this.loadBaseInfo();
    },
    shareAppMessage: function(t) {
        var o = "pages/company/index", n = this.globalData.appTitle, a = this.globalData.appDescription;
        return "object" == (void 0 === t ? "undefined" : e(t)) ? (t.url && (o = t.url), 
        t.title && (n = t.title), t.desc && (a = t.desc)) : "string" == typeof t && t && (o = t), 
        o += (o.indexOf("?") > -1 ? "&" : "?") + "fromShare=1", {
            title: n,
            desc: a,
            path: o
        };
    },
    getPageUrl: function(e, t) {
        var o = getCurrentPages()[getCurrentPages().length - 1].__route__, n = [];
        for (var a in t) n.push(a + "=" + t[a]);
        return n.length > 0 && (o += "?" + n.join("&")), e.setData({
            pageurl: o
        }), o;
    },
    showGetUserInfoSetting: function(e) {
        wx.getSetting({
            success: function(t) {
                wx.openSetting({
                    success: function(t) {
                        console.log(t), t.authSetting["scope.userInfo"] && e.onUserInfoAuth && e.onUserInfoAuth(), 
                        t.authSetting["scope.userInfo"] || e.onUserInfoDeny && e.onUserInfoDeny();
                    }
                });
            }
        });
    },
    getUserInfo: function(e, t) {
        var o = this;
        if (void 0 === o.denyGetUserInfo && (o.denyGetUserInfo = !1), this.globalData.userInfo) "function" == typeof e && e(this.globalData.userInfo); else {
            var n = function() {
                console.log("doShowAuthBth");
                var t = getCurrentPages()[getCurrentPages().length - 1];
                t && (console.log("app.js show auth getUserInfo button"), t.setData({
                    showAuthGetUserInfoBtn: !0
                }), o.hasShowAuthGetUserInfoBtn = !0, t.getUserInfoCallback = function(n) {
                    t.setData({
                        showAuthGetUserInfoBtn: !1
                    }), "getUserInfo:fail auth deny" == n.detail.errMsg ? (o.denyGetUserInfo = !0, a()) : "getUserInfo:ok" == n.detail.errMsg && (o.denyGetUserInfo = !1, 
                    o.globalData.userInfo = n.detail.userInfo, n.detail.iv && (o.globalData.userInfo.iv = n.detail.iv), 
                    n.detail.encryptedData && (o.globalData.userInfo.encryptedData = n.detail.encryptedData), 
                    "function" == typeof e && e(o.globalData.userInfo));
                });
            }, a = function() {
                if (o.denyGetUserInfo) o.showGetUserInfoSetting({
                    onUserInfoAuth: function() {
                        var n = getCurrentPages()[getCurrentPages().length - 1];
                        n && (console.log("app.js getUserInfo: set page data showUserReg to false"), n.setData({
                            showUserReg: !1
                        })), o.denyGetUserInfo = !1, o.getUserInfo(e, t);
                    }
                }); else {
                    o.globalData.completeGetUserInfoTimeout = !1;
                    var n = {
                        withCredentials: !1,
                        success: function(t) {
                            console.log(t), o.denyGetUserInfo = !1, o.globalData.userInfo = t.userInfo, t.iv && (o.globalData.userInfo.iv = t.iv), 
                            t.encryptedData && (o.globalData.userInfo.encryptedData = t.encryptedData), "function" == typeof e && e(o.globalData.userInfo);
                        },
                        fail: function(e) {
                            console.log(e), "getUserInfo:fail auth deny" == e.errMsg && (o.denyGetUserInfo = !0), 
                            o.showModal({
                                title: "提示",
                                content: "获取用户信息失败：" + e.errMsg + ",可能小程序部分功能无法正常使用"
                            }), "function" == typeof t && t(e);
                        },
                        complete: function(e) {
                            console.log(e), o.globalData.completeGetUserInfoTimeout && clearInterval(o.globalData.completeGetUserInfoTimeout);
                        }
                    };
                    wx.getUserInfo(n);
                }
            };
            wx.getSetting({
                success: function(e) {
                    console.log("getSetting result:", e), e.authSetting["scope.userInfo"] ? a() : n();
                }
            });
        }
    },
    getVerifyCode: function(e, t, o, n) {
        var a = this;
        a.sendRequest({
            url: "/index.php?c=Front/WxApp/JsonApi&a=getVerifyCode",
            method: "POST",
            data: {
                vtype: t || "",
                mobile: e
            },
            success: function(e) {
                e.success ? (a.showToast({
                    title: "验证码发送成功",
                    icon: "success"
                }), "function" == typeof o && o(e)) : (a.showModal({
                    title: "提示",
                    content: "获取验证码失败：" + e.msg
                }), "function" == typeof n && n(e.msg));
            },
            fail: function(e) {
                a.showModal({
                    title: "提示",
                    content: "获取验证码失败：" + e.errMsg
                }), "function" == typeof n && n(e.errMsg);
            }
        });
    },
    login: function(o) {
        var n = this, a = null, s = null, i = 0;
        "object" == (void 0 === o ? "undefined" : e(o)) ? (i = o.forcereg, a = o.success, 
        s = o.fail) : a = o, wx.login({
            success: function(e) {
                e.code ? n.getUserInfo(function(o) {
                    n.sendRequest({
                        url: "/index.php?c=Front/WxApp/JsonApi&a=loginUser" + (t.PSESSID ? "&PSESSID=" + t.PSESSID : ""),
                        method: "POST",
                        data: {
                            code: e.code,
                            notAutoReg: 1,
                            userInfo: o
                        },
                        success: function(e) {
                            if (e.openid && (n.globalData.userInfo.openid = e.openid), e.success) {
                                n.globalData.PSESSID = e.PSESSID, n.globalData.WebUserID = e.WebUserID, n.globalData.session_key = e.session_key, 
                                wx.setStorageSync("invite", e.WebUserID);
                                var t = getCurrentPages()[getCurrentPages().length - 1];
                                t && (console.log("app.js login: set page data showUserReg to false"), t.setData({
                                    showUserReg: !1
                                })), a && a();
                            } else i && 1 == e.needreg ? (n.globalData.PSESSID = e.PSESSID, n.globalData.session_key = e.session_key, 
                            i()) : e.needreg || (n.showModal({
                                title: "提示",
                                content: "登录失败：请确认你在发布时小程序时填写的AppID和AppSecrect是否正确；" + e.msg
                            }), s && s());
                        },
                        fail: function(e) {
                            n.showModal({
                                title: "提示",
                                content: "登录失败：" + e
                            }), s && s();
                        }
                    });
                }, function(e) {
                    s && s();
                }) : console.log("获取用户登录态失败！" + e.errMsg);
            }
        });
    },
    doAfterUserInfoAuth: function(e) {
        var t = this, o = getCurrentPages()[getCurrentPages().length - 1], n = void 0 === e.timesLimit || e.timesLimit;
        e.forcereg || (e.forcereg = e.success);
        var a = function() {
            var a = o.options;
            n ? t.getAfterUserInfoAuthRunTimes() < 1 && (e.success && e.success(a), t.addAfterUserInfoAuthRunTimes()) : (e.success && e.success(a), 
            t.addAfterUserInfoAuthRunTimes()), o.setData({
                showAuthGetUserInfoBtn: !1
            });
        };
        this.globalData.WebUserID ? a() : this.login({
            success: a,
            fail: function() {
                var t = o.options;
                e.fail && e.fail(t);
            },
            forcereg: function() {
                var t = o.options;
                e.forcereg && e.forcereg(t);
            }
        });
    },
    addAfterUserInfoAuthRunTimes: function() {
        var e = this, t = getCurrentPages()[getCurrentPages().length - 1], o = e.getAfterUserInfoAuthRunTimes();
        t.setData({
            afterUserInfoAuthRunTimes: o + 1
        });
    },
    getAfterUserInfoAuthRunTimes: function() {
        var e = getCurrentPages()[getCurrentPages().length - 1];
        return parseInt(e.data.afterUserInfoAuthRunTimes || 0);
    },
    getAppId: function() {
        return this.globalData.appId;
    },
    showToast: function(e) {
        wx.showToast({
            title: e.title,
            icon: e.icon,
            duration: e.duration || 1500,
            success: function(t) {
                "function" == typeof e.success && e.success(t);
            },
            fail: function(t) {
                "function" == typeof e.fail && e.fail(t);
            },
            complete: function(t) {
                "function" == typeof e.complete && e.complete(t);
            }
        });
    },
    hideToast: function() {
        wx.hideToast();
    },
    modifyPostParam: function(e) {
        var t, o, n, a, s, i, r = "";
        for (t in e) if ((o = e[t]) instanceof Array) for (i = 0; i < o.length; ++i) a = o[i], 
        (s = {})[t + "[" + i + "]"] = a, r += this.modifyPostParam(s) + "&"; else if (o instanceof Object) for (n in o) a = o[n], 
        (s = {})[t + "[" + n + "]"] = a, r += this.modifyPostParam(s) + "&"; else void 0 !== o && null !== o && (r += encodeURIComponent(t) + "=" + encodeURIComponent(o) + "&");
        return r.length ? r.substr(0, r.length - 1) : r;
    },
    showModal: function(e) {
        wx.showModal({
            title: e.title || "提示",
            content: e.content,
            showCancel: e.showCancel || !1,
            cancelText: e.cancelText || "取消",
            cancelColor: e.cancelColor || "#000000",
            confirmText: e.confirmText || "确定",
            confirmColor: e.confirmColor || "#3CC51F",
            success: function(t) {
                t.confirm ? "function" == typeof e.confirm && e.confirm(t) : "function" == typeof e.cancel && e.cancel(t);
            },
            fail: function(t) {
                "function" == typeof e.fail && e.fail(t);
            },
            complete: function(t) {
                "function" == typeof e.complete && e.complete(t);
            }
        });
    },
    sendRequest: function(e, o) {
        var n, a = this, s = e.data || {}, i = e.header;
        s.app_id || (s.app_id = this.getAppId()), this.globalData.siteId && (s.InitSiteID = this.globalData.siteId), 
        this.globalData.dataId && (s.dataId = this.globalData.dataId), this.globalData.PSESSID && (s.PSESSID = this.globalData.PSESSID), 
        this.globalData.WebUserID && (s.WebUserID = this.globalData.WebUserID), n = o ? o + e.url : this.globalData.siteBaseUrl + e.url, 
        t.ADD_QUERYSTRING && (n.indexOf("?") > -1 ? n += "&" + t.ADD_QUERYSTRING : n += "?" + t.ADD_QUERYSTRING), 
        t.PublishTime && (n.indexOf("?") > -1 ? n += "&PublishTime=" + t.PublishTime : n += "?PublishTime=" + t.PublishTime), 
        e.method && ("post" == e.method.toLowerCase() && (s = this.modifyPostParam(s), i = i || {
            "content-type": "application/x-www-form-urlencoded;"
        }), e.method = e.method.toUpperCase()), e.hideLoading || this.showToast({
            title: "加载中...",
            icon: "loading"
        }), wx.request({
            url: n,
            data: s,
            method: e.method || "GET",
            header: i || {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.statusCode && 200 != t.statusCode) return a.hideToast(), void a.showModal({
                    content: "" + t.errMsg
                });
                a.hideToast(), "function" == typeof e.success && e.success(t.data);
            },
            fail: function(t) {
                a.showModal({
                    content: "请求失败 " + t.errMsg
                }), "function" == typeof e.fail && e.fail(t.data);
            },
            complete: function(t) {
                "function" == typeof e.complete && e.complete(t.data);
            }
        });
    },
    getSessionKey: function() {
        return this.globalData.session_key;
    },
    setSessionKey: function(e) {
        this.globalData.session_key = e, wx.setStorage({
            key: "session_key",
            data: e
        });
    },
    setGlobalData: function(e, t) {
        this.globalData[e] = t;
    },
    getLocation: function() {
        var e = this, t = Number(e.globalData.locationInfo.latitude), o = Number(e.globalData.locationInfo.longitude);
        t > 0 && o > 0 && wx.openLocation({
            name: e.globalData.appTitle,
            address: e.globalData.locationInfo.address,
            longitude: Number(o),
            latitude: Number(t)
        });
    },
    phoneCall: function() {
        wx.makePhoneCall({
            phoneNumber: this.globalData.baseInfo.Tel
        });
    },
    initBaseInfo: function(e) {
        var t = this;
        e.Banners = this.replaceDomain(e.Banners), e.Images = this.replaceDomain(e.Images), 
        e.Name && (t.globalData.appTitle = e.Name), t.globalData.baseInfo = e, t.globalData.locationInfo.latitude = e.Lat, 
        t.globalData.locationInfo.longitude = e.Lng, t.globalData.locationInfo.address = e.Address;
    },
    loadBaseInfo: function(e) {
        var t = this;
        !e && t.baseInfoLoaded || t.loadingBaseInfo || (t.loadingBaseInfo = !0, t.sendRequest({
            url: "/index.php?c=Front/WxApp/JsonApi&a=getBaseInfo",
            method: "POST",
            hideLoading: !0,
            success: function(e) {
                t.loadingBaseInfo = !1, e.success ? (t.initBaseInfo(e.info), t.globalData.subscribeFormData = e.msgformdata, 
                t.baseInfoLoaded = !0) : console.log("loadBaseInfo fail：" + e.msg);
            },
            fail: function(e) {
                t.loadingBaseInfo = !1, console.log("loadBaseInfo fail");
            }
        }));
    },
    validateForm: function(e, t) {
        var o = {};
        for (var n in t) if (n.indexOf("-fieldID") > -1) {
            var a = t[n];
            o[a] = {
                fieldName: t[a + "-fieldName"],
                fieldType: t[a + "-fieldType"],
                checkType: t[a + "-fieldCheckType"],
                require: "1" == t[a + "-fieldRequire"]
            };
        }
        var s = {
            2: "^[0-9]+$",
            3: "^1\\d{10}$",
            4: "^\\d{3,4}\\-\\d{6,9}$",
            5: "^((1\\d{10})|(\\d{3,4}\\-\\d{6,9}))$",
            6: "^[a-z\\d]+([\\-_\\.][a-z\\d]+)*@([a-z\\d]+[\\-\\.]*)+\\.[a-z\\d]{2,5}$",
            7: "^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$",
            8: "^\\d{4}\\-\\d{1,2}\\-\\d{1,2}\\s+\\d{1,2}:\\d{1,2}$"
        };
        for (var i in t) if (o[i]) {
            if ("string" == typeof t[i] && (t[i] = t[i].replace(/(^\s*)|(\s*$)/g, "")), o[i] && o[i].require) {
                if (!t[i]) return this.showModal({
                    title: "提示",
                    content: "请输入" + o[i].fieldName
                }), !1;
                if (t[i] instanceof Array && 0 == t[i].length) return this.showModal({
                    title: "提示",
                    content: "请输入" + o[i].fieldName
                }), !1;
            }
            var r = o[i].checkType;
            if ("8" == o[i].fieldType && (r = "8"), s[r]) {
                var l = new RegExp(s[r], "i");
                if (t[i] && !l.test(t[i])) return this.showModal({
                    title: "提示",
                    content: o[i].fieldName + "格式不正确"
                }), !1;
            }
        }
        return !0;
    },
    onCustomFormSelectChange: function(e, t) {
        var o = e.currentTarget.dataset.col, n = e.currentTarget.dataset.array, a = {}, s = t.data.customformvalues;
        s || (s = {}), s[o + "val"] = n[e.detail.value], a.customformvalues = s, t.setData(a);
    },
    onCustomFormDateChange: function(e, t) {
        var o = e.currentTarget.dataset.col, n = {}, a = t.data.customformvalues;
        a || (a = {}), a[o + "val"] = e.detail.value, n.customformvalues = a, t.setData(n);
    },
    onCustomFormTimeChange: function(e, t) {
        var o = e.currentTarget.dataset.col, n = {}, a = t.data.customformvalues;
        a || (a = {}), a[o + "val"] = e.detail.value, n.customformvalues = a, t.setData(n);
    },
    onCustomFormDateTap: function(e, t) {
        var o = e.currentTarget.dataset.col;
        t.datetimePicker.setPicker(o + "val", this.onCustomFormDateTimeChange, this.onCustomFormDateTimeClear);
    },
    onCustomFormDateTimeChange: function(e, t) {
        var o = {}, n = e.data.customformvalues;
        n || (n = {});
        var a = e.data[t];
        a = a.replace("年", "-").replace("月", "-").replace("日", ""), n[t] = a, o.customformvalues = n, 
        e.setData(o);
    },
    onCustomFormDateTimeClear: function(e, t) {
        var o = {}, n = e.data.customformvalues;
        n || (n = {}), n[t] = "", o.customformvalues = n, e.setData(o);
    },
    onCustomRegionChange: function(e, t) {
        var o = e.currentTarget.dataset.col, n = new Array();
        for (var a in e.detail.value) n.push(e.detail.value[a]);
        var s = {}, i = t.data.customformvalues;
        i || (i = {}), i[o + "val"] = n.join(","), s.customformvalues = i, t.setData(s);
    },
    replaceDomain: function(e) {
        if (e instanceof Array) for (var t in e) {
            var o = e[t].replace(/http(s)?:\/\/[0-9a-z\-\.]+/gi, "");
            o = this.globalData.siteBaseUrl + o, e[t] = o;
        } else "string" == typeof e && (e = e.replace(/http(s)?:\/\/[0-9a-z\-\.]+/gi, ""), 
        e = this.globalData.siteBaseUrl + e);
        return e;
    },
    getCoupon: function(e, t) {
        var o = this;
        o.sendRequest({
            url: "/index.php?c=Front/WxApp/ServiceApi&a=getCoupon&CouponID=" + e,
            method: "POST",
            success: function(n) {
                n.success ? (o.showModal({
                    title: "提示",
                    content: "领取成功，请在 会员中心->我的优惠 里查看"
                }), t && t()) : (console.log("getCoupon fail：" + n.msg), 1 == n.needLogin ? o.login(function() {
                    o.getCoupon2(e, t);
                }) : o.showModal({
                    title: "提示",
                    content: "领取失败，" + n.msg
                }));
            },
            fail: function(e) {
                console.log("getCoupon fail");
            }
        });
    },
    getCoupon2: function(e, t) {
        var o = this;
        o.sendRequest({
            url: "/index.php?c=Front/WxApp/ServiceApi&a=getCoupon&CouponID=" + e,
            method: "POST",
            success: function(e) {
                e.success ? (o.showModal({
                    title: "提示",
                    content: "领取成功，请在 会员中心->我的优惠 里查看"
                }), t && t()) : o.showModal({
                    title: "提示",
                    content: "领取失败，" + e.msg
                });
            },
            fail: function(e) {
                console.log("getCoupon2 fail");
            }
        });
    },
    registerGlobalFunctions: function(e) {
        e.appGetLocation = this.getLocation, e.appPhoneCall = this.phoneCall, e.onCustomFormSelectChange = function(t) {
            getApp().onCustomFormSelectChange(t, e);
        }, e.onCustomFormDateChange = function(t) {
            getApp().onCustomFormDateChange(t, e);
        }, e.onCustomFormTimeChange = function(t) {
            getApp().onCustomFormTimeChange(t, e);
        }, e.onCustomFormDateTap = function(t) {
            getApp().onCustomFormDateTap(t, e);
        }, e.onCustomRegionChange = function(t) {
            getApp().onCustomRegionChange(t, e);
        };
    },
    cloneObj: function(t) {
        var o = Array.isArray(t) ? [] : {};
        if ("object" === (void 0 === t ? "undefined" : e(t))) {
            for (var n in t) o[n] = "object" === e(t[n]) ? this.cloneObj(t[n]) : t[n];
            return o;
        }
    },
    removeArrayItem: function(e, t) {
        if (isNaN(t) || t > e.length) return !1;
        e.splice(t, 1);
    },
    globalData: {
        userInfo: null,
        PSESSID: "",
        session_key: "",
        WebUserID: "",
        baseInfo: {},
        locationInfo: {
            latitude: "",
            longitude: "",
            address: ""
        },
        siteBaseUrl: t.SITEBASEURL,
        cdnBaseUrl: t.SITEBASEURL.indexOf("//wxapp.") > -1 && t.CDNBASEURL ? t.CDNBASEURL : t.SITEBASEURL,
        appId: t.APPID,
        appTitle: t.APPTITLE,
        appDescription: t.APPDESCRIPTION,
        siteId: t.SITEID,
        dataId: t.DATAID
    }
});