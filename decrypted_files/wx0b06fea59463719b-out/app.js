var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = (require("/components/utils/ald-stat.js"), require("/getErrorData.js")), a = function() {
    var e = wx.getExtConfigSync();
    return e.ext ? e.ext : require("config.js");
}();

App({
    WxParse: require("/wxParse/wxParse.js"),
    windowWidth: 750,
    windowHeight: 600,
    pixelRatio: 2,
    onLaunch: function(e) {
        var t = this, a = e.scene;
        1047 !== a && 1011 !== a && 1038 !== a || (wx.setStorageSync("scene", !0), wx.setStorageSync("sceneStatus", !0)), 
        t.loadBaseInfo(), wx.setNavigationBarTitle({
            title: t.globalData.appTitle
        }), wx.getSystemInfo({
            success: function(e) {
                t.pixelRatio = e.pixelRatio, t.windowWidth = e.windowWidth, t.windowHeight = e.windowHeight;
            }
        });
    },
    getRpxNum: function(e) {
        var t = e.rpx, a = void 0 === t ? 0 : t, o = e.type, n = void 0 === o ? "h" : o, s = e.rateFlag, i = void 0 !== s && s, l = wx.getSystemInfoSync(), r = l.windowWidth, c = 750 / r, u = l.windowHeight * c - a, f = r * c - a;
        return n && "h" !== n ? "w" === n ? i ? {
            width: f,
            rate: c
        } : f : void 0 : i ? {
            height: u,
            rate: c
        } : u;
    },
    onShow: function() {
        this.loadBaseInfo();
        var e = new Date().getTime(), t = wx.getStorageSync("onHideTime");
        t && e - t >= 18e5 && wx.getStorageSync("otherMemberCardId") && (wx.removeStorageSync("otherMemberCardId"), 
        wx.removeStorageSync("onHideTime"));
    },
    onHide: function() {
        var e = this;
        wx.setStorageSync("onHideTime", new Date().getTime()), e.globalData.cardSocket && (e.globalData.cardSocket.close(), 
        setTimeout(function() {
            e.globalData.cardSocket = void 0;
        }, 200));
    },
    shareAppMessage: function(t) {
        var a = "pages/company/index", o = this.globalData.appTitle, n = this.globalData.appDescription, s = "";
        return "object" == (void 0 === t ? "undefined" : e(t)) ? (t.url && (a = t.url), 
        t.title && (o = t.title), t.desc && (n = t.desc), t.imageUrl && (s = t.imageUrl)) : "string" == typeof t && t && (a = t), 
        a += (a.indexOf("?") > -1 ? "&" : "?") + "fromShare=1", {
            title: o,
            desc: n,
            path: a,
            imageUrl: s
        };
    },
    getPageUrl: function(e, t) {
        var a = getCurrentPages()[getCurrentPages().length - 1].__route__, o = [];
        for (var n in t) o.push(n + "=" + t[n]);
        return o.length > 0 && (a += "?" + o.join("&")), e.setData({
            pageurl: a
        }), a;
    },
    getUserInfo: function(e, t) {
        var a = this;
        if (void 0 === a.denyGetUserInfo && (a.denyGetUserInfo = !1), this.globalData.userInfo) "function" == typeof e && e(this.globalData.userInfo); else {
            var o = function() {
                console.log("doShowAuthBth");
                var t = getCurrentPages()[getCurrentPages().length - 1];
                t && (wx.getSystemInfo({
                    success: function(e) {
                        "iOS" === e.system.split(" ")[0] ? t.setData({
                            isIOS: !0
                        }) : "Android" === e.system.split(" ")[0] && t.setData({
                            isAndroid: !0
                        });
                    }
                }), t.setData({
                    showAuthGetUserInfoBtn: !0,
                    isPanelOpacity: !1,
                    siteLogo: a.globalData.baseInfo.SiteLogo,
                    appTitle: a.globalData.appTitle
                }), a.hasShowAuthGetUserInfoBtn = !0, t.getUserInfoCallback = function(o) {
                    t.setData({
                        showAuthGetUserInfoBtn: !1,
                        isIOS: !1,
                        isAndroid: !1
                    }), "getUserInfo:fail auth deny" == o.detail.errMsg ? (a.denyGetUserInfo = !0, wx.openSetting({
                        success: function(e) {}
                    })) : "getUserInfo:ok" == o.detail.errMsg && (a.denyGetUserInfo = !1, a.globalData.userInfo = o.detail.userInfo, 
                    o.detail.iv && (a.globalData.userInfo.iv = o.detail.iv), o.detail.encryptedData && (a.globalData.userInfo.encryptedData = o.detail.encryptedData), 
                    "function" == typeof e && e(a.globalData.userInfo));
                });
            }, n = function() {
                a.globalData.completeGetUserInfoTimeout = !1;
                var o = {
                    withCredentials: !1,
                    success: function(t) {
                        a.denyGetUserInfo = !1, a.globalData.userInfo = t.userInfo, t.iv && (a.globalData.userInfo.iv = t.iv), 
                        t.encryptedData && (a.globalData.userInfo.encryptedData = t.encryptedData), "function" == typeof e && e(a.globalData.userInfo);
                    },
                    fail: function(e) {
                        "getUserInfo:fail auth deny" == e.errMsg && (a.denyGetUserInfo = !0), a.showModal({
                            title: "提示",
                            content: "获取用户信息失败：" + e.errMsg + ",可能小程序部分功能无法正常使用"
                        }), "function" == typeof t && t(e);
                    },
                    complete: function(e) {
                        a.globalData.completeGetUserInfoTimeout && clearInterval(a.globalData.completeGetUserInfoTimeout);
                    }
                };
                wx.getUserInfo(o);
            };
            wx.getSetting({
                success: function(t) {
                    console.log("getSetting result:", t), t.authSetting["scope.userInfo"] ? n() : a.globalData.business_card_choice && null != a.globalData.business_card_choice && 0 != a.globalData.business_card_choice ? o() : ("function" == typeof e && e(a.globalData.userInfo), 
                    a.globalData.userInfo = {});
                }
            });
        }
    },
    login: function(t) {
        var o = this, n = null, s = null, i = 0;
        "object" == (void 0 === t ? "undefined" : e(t)) ? (i = t.forcereg, n = t.success, 
        s = t.fail) : n = t, wx.login({
            success: function(e) {
                e.code ? o.getUserInfo(function(t) {
                    o.sendRequest({
                        url: "/index.php?c=Front/WxApp/JsonApi&a=loginUser" + (a.PSESSID ? "&PSESSID=" + a.PSESSID : ""),
                        method: "POST",
                        data: {
                            code: e.code,
                            notAutoReg: 1,
                            userInfo: t
                        },
                        success: function(e) {
                            e.openid && (o.globalData.userInfo.openid = e.openid), e.success ? (o.globalData.PSESSID = e.PSESSID, 
                            o.globalData.WebUserID = e.WebUserID, o.globalData.session_key = e.session_key, 
                            o.globalData.hasMobile = e.hasMobile || 0, o.globalData.isShowLeadCollection = e.isShowLeadCollection, 
                            wx.setStorageSync("invite", e.WebUserID), o.globalData.business_card_choice && 1 == o.globalData.business_card_choice && o.gettBusinessCardEntrance(e.WebUserID), 
                            e.isShowLeadCollection && wx.setStorageSync("isCollection", !0), n && n()) : i && 1 == e.needreg ? (o.globalData.PSESSID = e.PSESSID, 
                            o.globalData.session_key = e.session_key, i()) : e.needreg || (o.showModal({
                                title: "提示",
                                content: "登录失败：请确认你在发布时小程序时填写的AppID和AppSecrect是否正确；" + e.msg
                            }), s && s());
                        },
                        fail: function(e) {
                            o.showModal({
                                title: "提示",
                                content: "登录失败：" + e
                            }), o.globalData.businessCardInfo = {}, s && s();
                        }
                    });
                }, function(e) {
                    s && s();
                }) : console.log("获取用户登录态失败！" + e.errMsg);
            }
        });
    },
    gettBusinessCardEntrance: function(e) {
        var t = this, a = getCurrentPages()[getCurrentPages().length - 1];
        t.sendRequest({
            url: "/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=gettBusinessCardEntrance",
            method: "GET",
            data: {
                userID: e
            },
            success: function(e) {
                t.globalData.businessCardInfo = e.info, wx.setStorageSync("businessCardInfo", e.info), 
                a.setData({
                    backselectFlag: !1
                });
            },
            fail: function(e) {
                t.globalData.businessCardInfo = {}, console.log("gettBusinessCardEntrance fail");
            }
        });
    },
    doAfterUserInfoAuth: function(e) {
        var t = this, a = getCurrentPages()[getCurrentPages().length - 1], o = void 0 === e.timesLimit || e.timesLimit;
        e.forcereg || (e.forcereg = e.success);
        var n = function() {
            var n = a.options;
            o ? t.getAfterUserInfoAuthRunTimes() < 1 && (e.success && e.success(n), t.addAfterUserInfoAuthRunTimes()) : (e.success && e.success(n), 
            t.addAfterUserInfoAuthRunTimes()), a.setData({
                showAuthGetUserInfoBtn: !1,
                isPanelOpacity: !1,
                isIOS: !1,
                isAndroid: !1
            });
        };
        this.globalData.WebUserID ? n() : this.login({
            success: n,
            fail: function() {
                var t = a.options;
                e.fail && e.fail(t);
            },
            forcereg: function() {
                var t = a.options;
                e.forcereg && e.forcereg(t);
            }
        });
    },
    addAfterUserInfoAuthRunTimes: function() {
        var e = this, t = getCurrentPages()[getCurrentPages().length - 1], a = e.getAfterUserInfoAuthRunTimes();
        t.setData({
            afterUserInfoAuthRunTimes: a + 1
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
        var t, a, o, n, s, i, l = "";
        for (t in e) if ((a = e[t]) instanceof Array) for (i = 0; i < a.length; ++i) n = a[i], 
        (s = {})[t + "[" + i + "]"] = n, l += this.modifyPostParam(s) + "&"; else if (a instanceof Object) for (o in a) n = a[o], 
        (s = {})[t + "[" + o + "]"] = n, l += this.modifyPostParam(s) + "&"; else void 0 !== a && null !== a && (l += encodeURIComponent(t) + "=" + encodeURIComponent(a) + "&");
        return l.length ? l.substr(0, l.length - 1) : l;
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
    uploadRequest: function(e, t) {
        var o, n = this, s = e.formData || {}, i = e.header;
        s.app_id || (s.app_id = this.getAppId()), this.globalData.siteId && (s.InitSiteID = this.globalData.siteId), 
        this.globalData.dataId && (s.dataId = this.globalData.dataId), this.globalData.PSESSID && (s.PSESSID = this.globalData.PSESSID), 
        this.globalData.WebUserID && (s.WebUserID = this.globalData.WebUserID), o = t ? t + e.url : this.globalData.siteBaseUrl + e.url, 
        a.ADD_QUERYSTRING && (o.indexOf("?") > -1 ? o += "&" + a.ADD_QUERYSTRING : o += "?" + a.ADD_QUERYSTRING);
        var l = wx.getStorageSync("invite");
        o.toLowerCase().indexOf("regorbinduser") > -1 && l && (data.invite = l), e.method && ("post" == e.method.toLowerCase() && (data = this.modifyPostParam(data), 
        i = i || {
            "content-type": "application/x-www-form-urlencoded;"
        }), e.method = e.method.toUpperCase()), e.hideLoading || this.showToast({
            title: "加载中...",
            icon: "loading"
        }), wx.uploadFile({
            url: o,
            filePath: e.filePath,
            name: e.name,
            formData: s,
            method: e.method || "GET",
            header: i || {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.statusCode && 200 != t.statusCode) return n.hideToast(), n.showModal({
                    content: "" + t.errMsg
                }), void ("function" == typeof e.fail && e.fail(t.data));
                n.hideToast(), "function" == typeof e.success && e.success(t.data);
            },
            fail: function(t) {
                e.fail && e.fail(t.data), n.showModal({
                    content: "请求失败 " + t.errMsg
                });
            },
            complete: function(t) {
                "function" == typeof e.complete && e.complete(t.data);
            }
        });
    },
    sendRequest: function(e, t) {
        var o, n = this, s = e.data || {}, i = e.header;
        s.app_id || (s.app_id = this.getAppId()), this.globalData.siteId && (s.InitSiteID = this.globalData.siteId), 
        this.globalData.dataId && (s.dataId = this.globalData.dataId), this.globalData.PSESSID && (s.PSESSID = this.globalData.PSESSID), 
        this.globalData.WebUserID && (s.WebUserID = this.globalData.WebUserID), o = t ? t + e.url : this.globalData.siteBaseUrl + e.url, 
        a.ADD_QUERYSTRING && (o.indexOf("?") > -1 ? o += "&" + a.ADD_QUERYSTRING : o += "?" + a.ADD_QUERYSTRING), 
        a.PublishTime && (o.indexOf("?") > -1 ? o += "&PublishTime=" + a.PublishTime : o += "?PublishTime=" + a.PublishTime), 
        e.method && ("post" == e.method.toLowerCase() && (s = this.modifyPostParam(s), i = i || {
            "content-type": "application/x-www-form-urlencoded;"
        }), e.method = e.method.toUpperCase()), e.hideLoading || this.showToast({
            title: "加载中...",
            icon: "loading"
        }), this.commonAjax({
            requestUrl: o,
            data: s,
            method: e.method,
            header: i,
            success: function(t) {
                if (t.statusCode && 200 != t.statusCode) return e.hideLoading || n.hideToast(), 
                void n.showModal({
                    content: "" + t.errMsg
                });
                e.hideLoading || n.hideToast(), "function" == typeof e.success && e.success(t.data);
            },
            fail: function(t) {
                e.chatHiddenModal || n.showModal({
                    content: "请求失败 " + t.errMsg
                }), "function" == typeof e.fail && e.fail(t.data);
            },
            complete: function(t) {
                "function" == typeof e.complete && e.complete(t.data);
            }
        });
    },
    commonAjax: function(e) {
        var o = !1, n = 0, s = {}, i = "";
        wx.request({
            url: e.requestUrl,
            data: e.data,
            method: e.method || "GET",
            header: e.header || {
                "content-type": "application/json"
            },
            success: function(t) {
                n = t.statusCode, s = t.header, t.data && !t.data.success && (o = !0, i = JSON.stringify(t.data)), 
                "function" == typeof e.success && e.success(t);
            },
            fail: function(t) {
                o = !0, i = t.errMsg, "function" == typeof e.fail && e.fail(t);
            },
            complete: function(l) {
                "function" == typeof e.complete && e.complete(l.data), o && t.getError({
                    appId: a.APPID,
                    appTitle: a.APPTITLE,
                    appSecret: a.APPSECRET,
                    programType: 1,
                    siteId: a.SITEID,
                    dataId: a.DATAID,
                    siteBaseUrl: a.SITEBASEURL,
                    industry: a.Industry,
                    Tpl: a.Tpl,
                    errMsgData: i,
                    userID: e.data.WebUserID || 0,
                    requestData: {
                        url: e.requestUrl || "",
                        data: JSON.stringify(e.data),
                        method: e.method || "GET",
                        header: JSON.stringify(s || {}),
                        statusCode: n
                    }
                });
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
        var e = this, t = Number(e.globalData.locationInfo.latitude), a = Number(e.globalData.locationInfo.longitude);
        t > 0 && a > 0 && wx.openLocation({
            name: e.globalData.appTitle,
            address: e.globalData.locationInfo.address,
            longitude: Number(a),
            latitude: Number(t)
        });
    },
    phoneCall: function() {
        wx.makePhoneCall({
            phoneNumber: this.globalData.baseInfo.Tel
        });
    },
    initBaseInfo: function(e, t) {
        var a = this;
        e.Banners = this.replaceDomain(e.Banners), e.Images = this.replaceDomain(e.Images), 
        e.Name && (a.globalData.appTitle = e.Name), a.globalData.baseInfo = e, wx.setStorageSync("SiteID", e.SiteID), 
        a.globalData.TitleName = JSON.parse(e.TitlleNames), a.globalData.locationInfo.latitude = e.Lat, 
        a.globalData.locationInfo.longitude = e.Lng, a.globalData.locationInfo.address = e.Address, 
        a.globalData.socket_config = {
            SOCKET_USERNAME: e.SOCKET_USERNAME,
            SOCKET_PASSWD: e.SOCKET_PASSWD,
            SOCKET_URL: e.SOCKET_URL
        }, t && t();
    },
    loadBaseInfo: function(e) {
        var t = this;
        t.baseInfoLoaded || t.loadingBaseInfo || (t.loadingBaseInfo = !0, t.sendRequest({
            url: "/index.php?c=Front/WxApp/JsonApi&a=getBaseInfo",
            method: "POST",
            hideLoading: !0,
            success: function(a) {
                t.loadingBaseInfo = !1, a.success ? (t.initBaseInfo(a.info, e), t.globalData.business_card_choice = a.business_card_choice, 
                t.globalData.notice = a.notice, t.globalData.officialscene = a.isShowWeChatPublicPlatform, 
                t.globalData.subscribeFormData = a.msgformdata, t.globalData.getMobileNode = a.getMobileNode, 
                t.globalData.reserveFormData = a.reserveformdata, a.isShowWeChatPublicPlatform && wx.setStorageSync("isOfficialscene", !0), 
                t.baseInfoLoaded = !0) : console.log("loadBaseInfo fail：" + a.msg);
            },
            fail: function(e) {
                t.loadingBaseInfo = !1, console.log("loadBaseInfo fail");
            }
        }));
    },
    loadphoneInfo: function(e) {
        var t = this;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/JsonApi&a=saveUserMobile",
            method: "POST",
            data: {
                Mobile: e,
                WebUserID: t.globalData.WebUserID
            },
            success: function(e) {
                wx.setStorageSync("hasMobile", 1);
            },
            fail: function(e) {}
        });
    },
    turnOff: function() {
        getCurrentPages()[getCurrentPages().length - 1].setData({
            phonelicense: !1
        });
    },
    validateForm: function(e, t) {
        var a = {};
        for (var o in t) if (o.indexOf("-fieldID") > -1) {
            var n = t[o];
            a[n] = {
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
            7: "^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$"
        };
        for (var i in t) if (a[i]) {
            if ("string" == typeof t[i] && (t[i] = t[i].replace(/(^\s*)|(\s*$)/g, "")), a[i] && a[i].require) {
                if (!t[i]) return this.showModal({
                    title: "提示",
                    content: "请输入" + a[i].fieldName
                }), !1;
                if (t[i] instanceof Array && 0 == t[i].length) return this.showModal({
                    title: "提示",
                    content: "请输入" + a[i].fieldName
                }), !1;
            }
            var l = a[i].checkType;
            if (s[l]) {
                var r = new RegExp(s[l], "i");
                if (t[i] && !r.test(t[i])) return this.showModal({
                    title: "提示",
                    content: a[i].fieldName + "格式不正确"
                }), !1;
            }
        }
        return !0;
    },
    onCustomFormSelectChange: function(e, t) {
        var a = e.currentTarget.dataset.col, o = e.currentTarget.dataset.array, n = {}, s = t.data.customformvalues;
        s || (s = {}), s[a + "val"] = o[e.detail.value], n.customformvalues = s, t.setData(n);
    },
    onCustomFormDateChange: function(e, t) {
        var a = e.currentTarget.dataset.col, o = {}, n = t.data.customformvalues;
        n || (n = {}), n[a + "val"] = e.detail.value, o.customformvalues = n, t.setData(o);
    },
    onCustomFormTimeChange: function(e, t) {
        var a = e.currentTarget.dataset.col, o = {}, n = t.data.customformvalues;
        n || (n = {}), n[a + "val"] = e.detail.value, o.customformvalues = n, t.setData(o);
    },
    onCustomFormDateTap: function(e, t) {
        var a = e.currentTarget.dataset.col;
        t.datetimePicker.setPicker(a + "val", this.onCustomFormDateTimeChange, this.onCustomFormDateTimeClear);
    },
    onCustomFormDateTimeChange: function(e, t) {
        var a = {}, o = e.data.customformvalues;
        o || (o = {});
        var n = e.data[t];
        n = n.replace("年", "-").replace("月", "-").replace("日", ""), o[t] = n, a.customformvalues = o, 
        e.setData(a);
    },
    onCustomFormDateTimeClear: function(e, t) {
        var a = {}, o = e.data.customformvalues;
        o || (o = {}), o[t] = "", a.customformvalues = o, e.setData(a);
    },
    onCustomRegionChange: function(e, t) {
        var a = e.currentTarget.dataset.col, o = new Array();
        for (var n in e.detail.value) o.push(e.detail.value[n]);
        var s = {}, i = t.data.customformvalues;
        i || (i = {}), i[a + "val"] = o.join(","), s.customformvalues = i, t.setData(s);
    },
    replaceDomain: function(e) {
        if (e instanceof Array) for (var t in e) {
            var a = e[t].replace(/http(s)?:\/\/[0-9a-z\-\.]+/gi, "");
            a = this.globalData.siteBaseUrl + a, e[t] = a;
        } else "string" == typeof e && (e = e.replace(/http(s)?:\/\/[0-9a-z\-\.]+/gi, ""), 
        e = this.globalData.siteBaseUrl + e);
        return e;
    },
    callphoned: function() {
        var e = this;
        wx.makePhoneCall({
            phoneNumber: e.globalData.baseInfo.Tel,
            success: function() {},
            fail: function() {
                wx.getSystemInfo({
                    success: function(t) {
                        "ios" != t.platform && wx.showModal({
                            title: "提示",
                            content: "您的微信版本不支持一键拨号，请拨打" + e.globalData.baseInfo.Tel + "咨询",
                            success: function(e) {
                                e.confirm || e.cancel && console.log("用户点击取消");
                            }
                        });
                    }
                });
            },
            complete: function() {}
        });
    },
    registerGlobalFunctions: function(e) {
        e.appGetLocation = this.getLocation, e.appPhoneCall = this.callphoned, e.onCustomFormSelectChange = function(t) {
            getApp().onCustomFormSelectChange(t, e);
        }, e.onCustomFormDateChange = function(t) {
            getApp().onCustomFormDateChange(t, e);
        }, e.onCustomFormTimeChange = function(t) {
            getApp().onCustomFormTimeChange(t, e);
        }, e.onCustomFormTextInputChange = function(t) {
            getApp().onCustomFormTimeChange(t, e);
        }, e.onCustomFormDateTap = function(t) {
            getApp().onCustomFormDateTap(t, e);
        }, e.onCustomRegionChange = function(t) {
            getApp().onCustomRegionChange(t, e);
        }, e.hideInfoBlank = function(t) {
            e.setData({
                showAuthGetUserInfoBtn: !1,
                isPanelOpacity: !0
            });
        };
    },
    saveFormID: function(e, t, a) {
        this.sendRequest({
            url: "/index.php?c=Front/Chat/Chat&a=saveFormID",
            method: "POST",
            hideLoading: !0,
            chatHiddenModal: !0,
            data: e,
            success: function(e) {
                t && t(e);
            },
            fail: function(e) {
                console.log("saveFormID fail" + e);
            }
        });
    },
    compareVersion: function(e, t) {
        e = e.split("."), t = t.split(".");
        for (var a = Math.max(e.length, t.length); e.length < a; ) e.push("0");
        for (;t.length < a; ) t.push("0");
        for (var o = 0; o < a; o++) {
            var n = parseInt(e[o]), s = parseInt(t[o]);
            if (n > s) return 1;
            if (n < s) return -1;
        }
        return 0;
    },
    buried: function(e, t, a) {
        this.sendRequest({
            url: "/index.php?c=Front/WxApp/TrackingBehavior/TrackingBehavior&a=add",
            method: "POST",
            hideLoading: !0,
            data: e,
            success: function(e) {
                t && t(e);
            },
            fail: function(e) {
                console.log("buried fail" + e);
            }
        });
    },
    globalData: {
        userInfo: null,
        PSESSID: "",
        session_key: "",
        WebUserID: "",
        baseInfo: {},
        TitleName: {},
        officialscene: null,
        isShowLeadCollection: null,
        locationInfo: {
            latitude: "",
            longitude: "",
            address: ""
        },
        notice: {},
        siteBaseUrl: a.SITEBASEURL,
        cdnBaseUrl: a.SITEBASEURL.indexOf("//wxapp.") > -1 && a.CDNBASEURL ? a.CDNBASEURL : a.SITEBASEURL,
        appId: a.APPID,
        appTitle: a.APPTITLE,
        appDescription: a.APPDESCRIPTION,
        siteId: a.SITEID,
        dataId: a.DATAID,
        socket_config: {}
    }
});