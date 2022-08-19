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
    denyGetUserInfo: !1,
    onLaunch: function() {
        var e = this;
        e.loadBaseInfo(), wx.setNavigationBarTitle({
            title: e.globalData.appTitle
        }), wx.getSystemInfo({
            success: function(t) {
                e.pixelRatio = t.pixelRatio, e.windowWidth = t.windowWidth, e.windowHeight = t.windowHeight;
            }
        });
    },
    onShow: function(e) {
        if (e.query && e.query.invite && wx.setStorageSync("invite", e.query.invite), e.query && e.query.scene) {
            var t = {};
            decodeURIComponent(e.query.scene).split("&").map(function(e, o) {
                if (-1 !== e.indexOf("=")) {
                    var a = e.split("=");
                    t[a[0]] = a[1];
                }
                if (-1 !== e.indexOf("_")) {
                    var n = e.split("_");
                    t[n[0]] = n[1], wx.setStorageSync("invite", n[1]);
                }
            });
        }
    },
    shareAppMessage: function(t) {
        var o = "pages/shop/index", a = this.globalData.appTitle, n = this.globalData.appDescription;
        "object" == (void 0 === t ? "undefined" : e(t)) ? (t.url && (o = t.url), t.title && (a = t.title), 
        t.desc && (n = t.desc)) : "string" == typeof t && t && (o = t);
        var s = wx.getStorageSync("invite");
        return s && (o += (o.indexOf("?") > -1 ? "&" : "?") + "invite=" + s), o += (o.indexOf("?") > -1 ? "&" : "?") + "fromShare=1", 
        {
            title: a,
            desc: n,
            path: o
        };
    },
    getPageUrl: function(e, t) {
        var o = getCurrentPages()[getCurrentPages().length - 1].__route__, a = [];
        for (var n in t) a.push(n + "=" + t[n]);
        return a.length > 0 && (o += "?" + a.join("&")), e.setData({
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
            var a = function() {
                console.log("doShowAuthBth");
                var t = getCurrentPages()[getCurrentPages().length - 1];
                t && (wx.getSystemInfo({
                    success: function(e) {
                        console.log(e.system.split(" ")[0]), "iOS" === e.system.split(" ")[0] ? t.setData({
                            isIOS: !0
                        }) : "Android" === e.system.split(" ")[0] && t.setData({
                            isAndroid: !0
                        });
                    }
                }), console.log("app.js show auth getUserInfo button"), t.setData({
                    showAuthGetUserInfoBtn: !0,
                    siteLogo: o.globalData.baseInfo.SiteLogo,
                    appTitle: o.globalData.appTitle
                }), o.hasShowAuthGetUserInfoBtn = !0, t.getUserInfoCallback = function(a) {
                    t.setData({
                        showAuthGetUserInfoBtn: !1,
                        isIOS: !1,
                        isAndroid: !1
                    }), "getUserInfo:fail auth deny" == a.detail.errMsg ? (o.denyGetUserInfo = !0, wx.openSetting({
                        success: function(e) {}
                    })) : "getUserInfo:ok" == a.detail.errMsg && (o.denyGetUserInfo = !1, o.globalData.userInfo = a.detail.userInfo, 
                    a.detail.iv && (o.globalData.userInfo.iv = a.detail.iv), a.detail.encryptedData && (o.globalData.userInfo.encryptedData = a.detail.encryptedData), 
                    "function" == typeof e && e(o.globalData.userInfo));
                });
            }, n = function() {
                o.globalData.completeGetUserInfoTimeout = !1;
                var a = {
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
                wx.getUserInfo(a);
            };
            wx.getSetting({
                success: function(e) {
                    console.log("getSetting result:", e), e.authSetting["scope.userInfo"] ? n() : a();
                }
            });
        }
    },
    getVerifyCode: function(e, t, o, a) {
        var n = this;
        n.sendRequest({
            url: "/index.php?c=Front/WxApp/JsonApi&a=getVerifyCode",
            method: "POST",
            data: {
                vtype: t || "",
                mobile: e
            },
            success: function(e) {
                e.success ? (n.showToast({
                    title: "验证码发送成功",
                    icon: "success"
                }), "function" == typeof o && o(e)) : (n.showModal({
                    title: "提示",
                    content: "获取验证码失败：" + e.msg
                }), "function" == typeof a && a(e.msg));
            },
            fail: function(e) {
                n.showModal({
                    title: "提示",
                    content: "获取验证码失败：" + e.errMsg
                }), "function" == typeof a && a(e.errMsg);
            }
        });
    },
    login: function(o) {
        var a = this, n = null, s = null, i = 0;
        "object" == (void 0 === o ? "undefined" : e(o)) ? (i = o.forcereg, n = o.success, 
        s = o.fail) : n = o, wx.login({
            success: function(e) {
                e.code ? a.getUserInfo(function(o) {
                    a.sendRequest({
                        url: "/index.php?c=Front/WxApp/JsonApi&a=loginUser" + (t.PSESSID ? "&PSESSID=" + t.PSESSID : ""),
                        method: "POST",
                        data: {
                            code: e.code,
                            notAutoReg: 1,
                            userInfo: o
                        },
                        success: function(e) {
                            if (e.openid && (a.globalData.userInfo.openid = e.openid), e.success) {
                                a.globalData.PSESSID = e.PSESSID, a.globalData.WebUserID = e.WebUserID, a.globalData.session_key = e.session_key, 
                                wx.setStorageSync("invite", e.WebUserID);
                                var t = getCurrentPages()[getCurrentPages().length - 1];
                                t && (console.log("app.js login: set page data showUserReg to false"), t.setData({
                                    showUserReg: !1
                                })), n && n();
                            } else i && 1 == e.needreg ? (a.globalData.PSESSID = e.PSESSID, a.globalData.session_key = e.session_key, 
                            i()) : e.needreg || (a.showModal({
                                title: "提示",
                                content: "登录失败：请确认你在发布时小程序时填写的AppID和AppSecrect是否正确；" + e.msg
                            }), s && s());
                        },
                        fail: function(e) {
                            a.showModal({
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
        var t = this, o = getCurrentPages()[getCurrentPages().length - 1], a = void 0 === e.timesLimit || e.timesLimit;
        e.forcereg || (e.forcereg = e.success);
        var n = function() {
            var n = o.options;
            a ? t.getAfterUserInfoAuthRunTimes() < 1 && (e.success && e.success(n), t.addAfterUserInfoAuthRunTimes()) : (e.success && e.success(n), 
            t.addAfterUserInfoAuthRunTimes()), o.setData({
                showAuthGetUserInfoBtn: !1,
                isIOS: !1,
                isAndroid: !1
            });
        };
        this.globalData.WebUserID ? n() : this.login({
            success: n,
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
        var t, o, a, n, s, i, r = "";
        for (t in e) if ((o = e[t]) instanceof Array) for (i = 0; i < o.length; ++i) n = o[i], 
        (s = {})[t + "[" + i + "]"] = n, r += this.modifyPostParam(s) + "&"; else if (o instanceof Object) for (a in o) n = o[a], 
        (s = {})[t + "[" + a + "]"] = n, r += this.modifyPostParam(s) + "&"; else void 0 !== o && null !== o && (r += encodeURIComponent(t) + "=" + encodeURIComponent(o) + "&");
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
    sendRequest: function(e, o, a) {
        void 0 === a && (a = 0);
        var n, s = this, i = e.data || {}, r = e.header;
        i.app_id || (i.app_id = this.getAppId()), this.globalData.siteId && (i.InitSiteID = this.globalData.siteId), 
        this.globalData.dataId && (i.dataId = this.globalData.dataId), this.globalData.PSESSID && (i.PSESSID = this.globalData.PSESSID), 
        this.globalData.WebUserID && (i.WebUserID = this.globalData.WebUserID), n = o ? o + e.url : this.globalData.siteBaseUrl + e.url, 
        t.ADD_QUERYSTRING && (n.indexOf("?") > -1 ? n += "&" + t.ADD_QUERYSTRING : n += "?" + t.ADD_QUERYSTRING), 
        t.PublishTime && (n.indexOf("?") > -1 ? n += "&PublishTime=" + t.PublishTime : n += "?PublishTime=" + t.PublishTime);
        var l = wx.getStorageSync("invite"), c = n.toLowerCase();
        (c.indexOf("regorbinduser") > -1 || c.indexOf("loginuser") > -1) && l && (i.invite = l), 
        e.method && ("post" == e.method.toLowerCase() && (i = this.modifyPostParam(i), r = r || {
            "content-type": "application/x-www-form-urlencoded;"
        }), e.method = e.method.toUpperCase()), e.hideLoading || this.showToast({
            title: "加载中...",
            icon: "loading"
        }), console.log(n), wx.request({
            url: n,
            data: i,
            method: e.method || "GET",
            header: r || {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.statusCode && 200 != t.statusCode) return s.hideToast(), void s.showModal({
                    content: "" + t.errMsg
                });
                s.hideToast(), "function" == typeof e.success && e.success(t.data);
            },
            fail: function(t) {
                a < 3 ? setTimeout(function() {
                    s.sendRequest(e, o, ++a);
                }, 1e3) : (s.showModal({
                    content: "请求失败 " + t.errMsg
                }), "function" == typeof e.fail && e.fail(t.data));
            },
            complete: function(t) {
                "function" == typeof e.complete && e.complete(t.data);
            }
        });
    },
    sendRequestSecOrder: function(e, o) {
        var a, n = this, s = e.data || {}, i = e.header;
        s.app_id || (s.app_id = this.getAppId()), this.globalData.siteId && (s.InitSiteID = this.globalData.siteId), 
        this.globalData.dataId && (s.dataId = this.globalData.dataId), this.globalData.PSESSID && (s.PSESSID = this.globalData.PSESSID), 
        this.globalData.WebUserID && (s.WebUserID = this.globalData.WebUserID), a = o ? o + e.url : this.globalData.siteBaseUrl + e.url, 
        t.ADD_QUERYSTRING && (a.indexOf("?") > -1 ? a += "&" + t.ADD_QUERYSTRING : a += "?" + t.ADD_QUERYSTRING);
        var r = wx.getStorageSync("invite"), l = a.toLowerCase();
        (l.indexOf("regorbinduser") > -1 || l.indexOf("loginuser") > -1) && r && (s.invite = r), 
        e.method && ("post" == e.method.toLowerCase() && (s = this.modifyPostParam(s), i = i || {
            "content-type": "application/x-www-form-urlencoded;"
        }), e.method = e.method.toUpperCase()), console.log(a), wx.request({
            url: a,
            data: s,
            method: e.method || "GET",
            header: i || {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.statusCode && 200 != t.statusCode) return n.hideToast(), void n.showModal({
                    content: "" + t.errMsg
                });
                n.hideToast(), "function" == typeof e.success && e.success(t.data);
            },
            fail: function(t) {
                n.showModal({
                    content: "请求失败 " + t.errMsg
                }), "function" == typeof e.fail && e.fail(t.data);
            },
            complete: function(t) {
                "function" == typeof e.complete && e.complete(t.data);
            }
        });
    },
    uploadRequest: function(e, o) {
        var a, n = this, s = e.formData || {}, i = e.header;
        s.app_id || (s.app_id = this.getAppId()), this.globalData.siteId && (s.InitSiteID = this.globalData.siteId), 
        this.globalData.dataId && (s.dataId = this.globalData.dataId), this.globalData.PSESSID && (s.PSESSID = this.globalData.PSESSID), 
        this.globalData.WebUserID && (s.WebUserID = this.globalData.WebUserID), a = o ? o + e.url : this.globalData.siteBaseUrl + e.url, 
        t.ADD_QUERYSTRING && (a.indexOf("?") > -1 ? a += "&" + t.ADD_QUERYSTRING : a += "?" + t.ADD_QUERYSTRING);
        var r = wx.getStorageSync("invite");
        a.toLowerCase().indexOf("regorbinduser") > -1 && r && (data.invite = r), e.method && ("post" == e.method.toLowerCase() && (data = this.modifyPostParam(data), 
        i = i || {
            "content-type": "application/x-www-form-urlencoded;"
        }), e.method = e.method.toUpperCase()), e.hideLoading || this.showToast({
            title: "加载中...",
            icon: "loading"
        }), console.log(s), wx.uploadFile({
            url: a,
            filePath: e.filePath,
            name: e.name,
            formData: s,
            method: e.method || "GET",
            header: i || {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.statusCode && 200 != t.statusCode) return n.hideToast(), void n.showModal({
                    content: "" + t.errMsg
                });
                n.hideToast(), "function" == typeof e.success && e.success(t.data);
            },
            fail: function(t) {
                n.showModal({
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
    loadBaseInfo: function() {
        var e = this;
        e.sendRequest({
            url: "/index.php?c=Front/WxApp/JsonApi&a=getBaseInfo",
            method: "POST",
            hideLoading: !0,
            success: function(t) {
                t.success ? (e.initBaseInfo(t.info), e.globalData.subscribeFormData = t.msgformdata, 
                e.globalData.reserveFormData = t.reserveformdata) : console.log("loadBaseInfo fail：" + t.msg);
            },
            fail: function(e) {
                console.log("loadBaseInfo fail");
            }
        });
    },
    validateForm: function(e, t) {
        var o = {};
        for (var a in t) if (a.indexOf("-fieldID") > -1) {
            var n = t[a];
            o[n] = {
                fieldName: t[n + "-fieldName"],
                fieldType: t[n + "-fieldType"],
                checkType: t[n + "-fieldCheckType"],
                require: "1" == t[n + "-fieldRequire"]
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
        var o = e.currentTarget.dataset.col, a = e.currentTarget.dataset.array, n = {}, s = t.data.customformvalues;
        s || (s = {}), s[o + "val"] = a[e.detail.value], n.customformvalues = s, t.setData(n);
    },
    onCustomFormDateChange: function(e, t) {
        var o = e.currentTarget.dataset.col, a = {}, n = t.data.customformvalues;
        n || (n = {}), n[o + "val"] = e.detail.value, a.customformvalues = n, t.setData(a);
    },
    onCustomFormTimeChange: function(e, t) {
        var o = e.currentTarget.dataset.col, a = {}, n = t.data.customformvalues;
        n || (n = {}), n[o + "val"] = e.detail.value, a.customformvalues = n, t.setData(a);
    },
    onCustomFormDateTap: function(e, t) {
        var o = e.currentTarget.dataset.col;
        t.datetimePicker.setPicker(o + "val", this.onCustomFormDateTimeChange, this.onCustomFormDateTimeClear);
    },
    onCustomFormDateTimeChange: function(e, t) {
        var o = {}, a = e.data.customformvalues;
        a || (a = {});
        var n = e.data[t];
        n = n.replace("年", "-").replace("月", "-").replace("日", ""), a[t] = n, o.customformvalues = a, 
        e.setData(o);
    },
    onCustomFormDateTimeClear: function(e, t) {
        var o = {}, a = e.data.customformvalues;
        a || (a = {}), a[t] = "", o.customformvalues = a, e.setData(o);
    },
    onCustomRegionChange: function(e, t) {
        var o = e.currentTarget.dataset.col, a = new Array();
        for (var n in e.detail.value) a.push(e.detail.value[n]);
        var s = {}, i = t.data.customformvalues;
        i || (i = {}), i[o + "val"] = a.join(","), s.customformvalues = i, t.setData(s);
    },
    replaceDomain: function(e) {
        if (e instanceof Array) for (var t in e) {
            var o = e[t].replace(/http(s)?:\/\/[0-9a-z\-\.]+/gi, "");
            o = this.globalData.siteBaseUrl + o, e[t] = o;
        } else "string" == typeof e && (e = e.replace(/http(s)?:\/\/[0-9a-z\-\.]+/gi, ""), 
        e = this.globalData.siteBaseUrl + e);
        return e;
    },
    getCoupon: function(e, t, o, a) {
        var n = this;
        n.sendRequest({
            url: "/index.php?c=Front/WxApp/ServiceApi&a=getCoupon&CouponID=" + e,
            method: "POST",
            success: function(s) {
                s.success ? t ? t(s) : n.showModal({
                    title: "提示",
                    content: "领取成功，请在 会员中心->我的优惠 里查看"
                }) : 1 == s.needLogin ? n.login({
                    success: function() {
                        n.getCoupon(e, t, o);
                    },
                    forcereg: function() {
                        a && a();
                    }
                }) : o ? o() : n.showModal({
                    title: "提示",
                    content: "领取失败，" + s.msg
                });
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
    analyseProductSkusPrice: function(e, t, o) {
        var a = [];
        for (var n in t) a.push(t[n]);
        var s = a.join(",");
        s = (s = s.replace(/(^,)|(,$)/g, "")).split(",").sort().join(",");
        for (var i = 0, r = 0, l = 0, c = 0, u = 0, f = 0; f < e.length; f++) if (s == e[f].Path.replace(/(^,)|(,$)/g, "").split(",").sort().join(",")) {
            r = e[f].Jf_convert, i = e[f].Price, l = e[f].SkuID, c = e[f].surplus, u = e[f].ProductQuantity;
            break;
        }
        return 1 == o ? (r = parseFloat(r).toFixed(2), c = parseFloat(c).toFixed(2)) : i = parseFloat(i).toFixed(2), 
        {
            price: i,
            point: r,
            skuid: l,
            surplus: c,
            productQuantity: u
        };
    },
    wxPay: function(e, t) {
        var o = this, a = {};
        e && (a.OrderID = e), t.money && (a.money = t.money), this.sendRequest({
            url: "/index.php?c=Front/WxApp/JsonApi&a=wxPay",
            method: "POST",
            data: a,
            success: function(e) {
                e.success ? wx.requestPayment({
                    timeStamp: e.timeStamp,
                    nonceStr: e.nonceStr,
                    package: e.package,
                    signType: "MD5",
                    paySign: e.paySign,
                    success: function(e) {
                        t.success && t.success(e);
                    },
                    fail: function(e) {
                        t.fail ? t.fail(e) : e.errMsg && e.errMsg.indexOf("cancel") > -1 || o.showModal({
                            title: "提示",
                            content: "支付失败：" + e.errMsg
                        });
                    },
                    complete: function(e) {
                        e.errMsg && e.errMsg.indexOf("requestPayment:cancel") > -1 && t.fail && t.fail(e), 
                        t.complete && t.complete(e), console.log(e);
                    }
                }) : o.showModal({
                    title: "提示",
                    content: "下单失败：" + e.msg
                });
            },
            fail: function(e) {
                o.showModal({
                    title: "提示",
                    content: "支付失败：" + e
                });
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
        }, e.hideInfoBlank = function(e) {
            getCurrentPages()[getCurrentPages().length - 1].setData({
                showAuthGetUserInfoBtn: !1,
                isIOS: !1,
                isAndroid: !1
            });
        };
    },
    cloneObj: function(t) {
        var o = t.constructor === Array ? [] : {};
        if ("object" === (void 0 === t ? "undefined" : e(t))) {
            for (var a in t) o[a] = "object" === e(t[a]) && t[a] ? this.cloneObj(t[a]) : t[a];
            return o;
        }
    },
    removeArrayItem: function(e, t) {
        if (isNaN(t) || t > e.length) return !1;
        e.splice(t, 1);
    },
    removeArrayItemByVal: function(e, t) {
        for (var o = 0; o < e.length; o++) e[o] == t && this.removeArrayItem(e, o);
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