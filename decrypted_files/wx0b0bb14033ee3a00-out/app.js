var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = (require("/components/utils/ald-stat.js"), function() {
    var t = wx.getExtConfigSync();
    return t.ext ? t.ext : require("config.js");
}());

console.log(e), App({
    WxParse: require("/wxParse/wxParse.js"),
    windowWidth: 750,
    windowHeight: 600,
    pixelRatio: 2,
    onLaunch: function() {
        var t = this;
        t.loadBaseInfo(), wx.setNavigationBarTitle({
            title: t.globalData.appTitle
        }), wx.getSystemInfo({
            success: function(t) {
                this.pixelRatio = t.pixelRatio, this.windowWidth = t.windowWidth, this.windowHeight = t.windowHeight;
            }
        }), this.login();
    },
    onShow: function() {
        this.loadBaseInfo();
    },
    shareAppMessage: function(e) {
        var o = "pages/company/index", a = this.globalData.appTitle, n = this.globalData.appDescription;
        return "object" == (void 0 === e ? "undefined" : t(e)) ? (e.url && (o = e.url), 
        e.title && (a = e.title), e.desc && (n = e.desc)) : "string" == typeof e && e && (o = e), 
        o += (o.indexOf("?") > -1 ? "&" : "?") + "fromShare=1", {
            title: a,
            desc: n,
            path: o
        };
    },
    getPageUrl: function(t, e) {
        var o = getCurrentPages()[getCurrentPages().length - 1].__route__, a = [];
        for (var n in e) a.push(n + "=" + e[n]);
        return a.length > 0 && (o += "?" + a.join("&")), t.setData({
            pageurl: o
        }), o;
    },
    getUserInfo: function(t) {
        var e = this;
        this.globalData.userInfo ? "function" == typeof t && t(this.globalData.userInfo) : wx.getUserInfo({
            withCredentials: !1,
            success: function(o) {
                e.globalData.userInfo = o.userInfo, "function" == typeof t && t(e.globalData.userInfo);
            }
        });
    },
    login: function() {
        var t = this;
        wx.login({
            success: function(e) {
                e.code ? t.getUserInfo(function(o) {
                    t.sendRequest({
                        url: "/index.php?c=Front/WxApp/JsonApi&a=loginUser",
                        method: "POST",
                        data: {
                            code: e.code,
                            userInfo: o
                        },
                        success: function(e) {
                            e.success && (t.globalData.PSESSID = e.PSESSID, t.globalData.WebUserID = e.WebUserID, 
                            t.globalData.session_key = e.session_key);
                        },
                        fail: function(t) {}
                    });
                }) : console.log("获取用户登录态失败！" + e.errMsg);
            }
        });
    },
    getAppId: function() {
        return this.globalData.appId;
    },
    showToast: function(t) {
        wx.showToast({
            title: t.title,
            icon: t.icon,
            duration: t.duration || 1500,
            success: function(e) {
                "function" == typeof t.success && t.success(e);
            },
            fail: function(e) {
                "function" == typeof t.fail && t.fail(e);
            },
            complete: function(e) {
                "function" == typeof t.complete && t.complete(e);
            }
        });
    },
    hideToast: function() {
        wx.hideToast();
    },
    modifyPostParam: function(t) {
        var e, o, a, n, i, s, l = "";
        for (e in t) if ((o = t[e]) instanceof Array) for (s = 0; s < o.length; ++s) n = o[s], 
        (i = {})[e + "[" + s + "]"] = n, l += this.modifyPostParam(i) + "&"; else if (o instanceof Object) for (a in o) n = o[a], 
        (i = {})[e + "[" + a + "]"] = n, l += this.modifyPostParam(i) + "&"; else void 0 !== o && null !== o && (l += encodeURIComponent(e) + "=" + encodeURIComponent(o) + "&");
        return l.length ? l.substr(0, l.length - 1) : l;
    },
    showModal: function(t) {
        wx.showModal({
            title: t.title || "提示",
            content: t.content,
            showCancel: t.showCancel || !1,
            cancelText: t.cancelText || "取消",
            cancelColor: t.cancelColor || "#000000",
            confirmText: t.confirmText || "确定",
            confirmColor: t.confirmColor || "#3CC51F",
            success: function(e) {
                e.confirm ? "function" == typeof t.confirm && t.confirm(e) : "function" == typeof t.cancel && t.cancel(e);
            },
            fail: function(e) {
                "function" == typeof t.fail && t.fail(e);
            },
            complete: function(e) {
                "function" == typeof t.complete && t.complete(e);
            }
        });
    },
    sendRequest: function(t, o) {
        var a, n = this, i = t.data || {}, s = t.header;
        i.app_id || (i.app_id = this.getAppId()), this.globalData.siteId && (i.InitSiteID = this.globalData.siteId), 
        this.globalData.dataId && (i.dataId = this.globalData.dataId), this.globalData.PSESSID && (i.PSESSID = this.globalData.PSESSID), 
        a = o ? o + t.url : this.globalData.siteBaseUrl + t.url, e.ADD_QUERYSTRING && (a.indexOf("?") > -1 ? a += "&" + e.ADD_QUERYSTRING : a += "?" + e.ADD_QUERYSTRING), 
        t.method && ("post" == t.method.toLowerCase() && (i = this.modifyPostParam(i), s = s || {
            "content-type": "application/x-www-form-urlencoded;"
        }), t.method = t.method.toUpperCase()), t.hideLoading || this.showToast({
            title: "加载中...",
            icon: "loading"
        }), wx.request({
            url: a,
            data: i,
            method: t.method || "GET",
            header: s || {
                "content-type": "application/json"
            },
            success: function(e) {
                if (e.statusCode && 200 != e.statusCode) return n.hideToast(), void n.showModal({
                    content: "" + e.errMsg
                });
                n.hideToast(), "function" == typeof t.success && t.success(e.data);
            },
            fail: function(e) {
                n.showModal({
                    content: "请求失败 " + e.errMsg
                }), "function" == typeof t.fail && t.fail(e.data);
            },
            complete: function(e) {
                "function" == typeof t.complete && t.complete(e.data);
            }
        });
    },
    getSessionKey: function() {
        return this.globalData.session_key;
    },
    setSessionKey: function(t) {
        this.globalData.session_key = t, wx.setStorage({
            key: "session_key",
            data: t
        });
    },
    setGlobalData: function(t, e) {
        this.globalData[t] = e;
    },
    getLocation: function() {
        var t = this, e = Number(t.globalData.locationInfo.latitude), o = Number(t.globalData.locationInfo.longitude);
        e > 0 && o > 0 && wx.openLocation({
            name: t.globalData.appTitle,
            address: t.globalData.locationInfo.address,
            longitude: Number(o),
            latitude: Number(e)
        });
    },
    phoneCall: function() {
        wx.makePhoneCall({
            phoneNumber: this.globalData.baseInfo.Tel
        });
    },
    initBaseInfo: function(t) {
        var e = this;
        t.Banners = this.replaceDomain(t.Banners), t.Images = this.replaceDomain(t.Images), 
        t.Name && (e.globalData.appTitle = t.Name), e.globalData.baseInfo = t, e.globalData.TitleName = JSON.parse(t.TitlleNames), 
        e.globalData.locationInfo.latitude = t.Lat, e.globalData.locationInfo.longitude = t.Lng, 
        e.globalData.locationInfo.address = t.Address;
    },
    loadBaseInfo: function(t) {
        var e = this;
        !t && e.baseInfoLoaded || e.loadingBaseInfo || (e.loadingBaseInfo = !0, e.sendRequest({
            url: "/index.php?c=Front/WxApp/JsonApi&a=getBaseInfo",
            method: "POST",
            hideLoading: !0,
            success: function(t) {
                e.loadingBaseInfo = !1, t.success ? (e.initBaseInfo(t.info), e.globalData.subscribeFormData = t.msgformdata, 
                e.baseInfoLoaded = !0) : console.log("loadBaseInfo fail：" + t.msg);
            },
            fail: function(t) {
                e.loadingBaseInfo = !1, console.log("loadBaseInfo fail");
            }
        }));
    },
    validateForm: function(t, e) {
        var o = {};
        for (var a in e) if (a.indexOf("-fieldID") > -1) {
            var n = e[a];
            o[n] = {
                fieldName: e[n + "-fieldName"],
                fieldType: e[n + "-fieldType"],
                checkType: e[n + "-fieldCheckType"],
                require: "1" == e[n + "-fieldRequire"]
            };
        }
        var i = {
            2: "^[0-9]+$",
            3: "^1\\d{10}$",
            4: "^\\d{3,4}\\-\\d{6,9}$",
            5: "^((1\\d{10})|(\\d{3,4}\\-\\d{6,9}))$",
            6: "^[a-z\\d]+([\\-_\\.][a-z\\d]+)*@([a-z\\d]+[\\-\\.]*)+\\.[a-z\\d]{2,5}$",
            7: "^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$"
        };
        for (var s in e) if (o[s]) {
            if ("string" == typeof e[s] && (e[s] = e[s].replace(/(^\s*)|(\s*$)/g, "")), o[s] && o[s].require) {
                if (!e[s]) return this.showModal({
                    title: "提示",
                    content: "请输入" + o[s].fieldName
                }), !1;
                if (e[s] instanceof Array && 0 == e[s].length) return this.showModal({
                    title: "提示",
                    content: "请输入" + o[s].fieldName
                }), !1;
            }
            var l = o[s].checkType;
            if (i[l]) {
                var r = new RegExp(i[l], "i");
                if (e[s] && !r.test(e[s])) return this.showModal({
                    title: "提示",
                    content: o[s].fieldName + "格式不正确"
                }), !1;
            }
        }
        return !0;
    },
    onCustomFormSelectChange: function(t, e) {
        var o = t.currentTarget.dataset.col, a = t.currentTarget.dataset.array, n = {}, i = e.data.customformvalues;
        i || (i = {}), i[o + "val"] = a[t.detail.value], n.customformvalues = i, e.setData(n);
    },
    onCustomFormDateChange: function(t, e) {
        var o = t.currentTarget.dataset.col, a = {}, n = e.data.customformvalues;
        n || (n = {}), n[o + "val"] = t.detail.value, a.customformvalues = n, e.setData(a);
    },
    onCustomFormTimeChange: function(t, e) {
        var o = t.currentTarget.dataset.col, a = {}, n = e.data.customformvalues;
        n || (n = {}), n[o + "val"] = t.detail.value, a.customformvalues = n, e.setData(a);
    },
    onCustomFormDateTap: function(t, e) {
        var o = t.currentTarget.dataset.col;
        e.datetimePicker.setPicker(o + "val", this.onCustomFormDateTimeChange, this.onCustomFormDateTimeClear);
    },
    onCustomFormDateTimeChange: function(t, e) {
        var o = {}, a = t.data.customformvalues;
        a || (a = {});
        var n = t.data[e];
        n = n.replace("年", "-").replace("月", "-").replace("日", ""), a[e] = n, o.customformvalues = a, 
        t.setData(o);
    },
    onCustomFormDateTimeClear: function(t, e) {
        var o = {}, a = t.data.customformvalues;
        a || (a = {}), a[e] = "", o.customformvalues = a, t.setData(o);
    },
    onCustomRegionChange: function(t, e) {
        var o = t.currentTarget.dataset.col, a = new Array();
        for (var n in t.detail.value) a.push(t.detail.value[n]);
        var i = {}, s = e.data.customformvalues;
        s || (s = {}), s[o + "val"] = a.join(","), i.customformvalues = s, e.setData(i);
    },
    replaceDomain: function(t) {
        if (t instanceof Array) for (var e in t) {
            var o = t[e].replace(/http(s)?:\/\/[0-9a-z\-\.]+/gi, "");
            o = this.globalData.siteBaseUrl + o, t[e] = o;
        } else "string" == typeof t && (t = t.replace(/http(s)?:\/\/[0-9a-z\-\.]+/gi, ""), 
        t = this.globalData.siteBaseUrl + t);
        return t;
    },
    callphoned: function() {
        var t = this;
        wx.makePhoneCall({
            phoneNumber: t.globalData.baseInfo.Tel,
            success: function() {},
            fail: function() {
                wx.getSystemInfo({
                    success: function(e) {
                        "ios" != e.platform && wx.showModal({
                            title: "提示",
                            content: "您的微信版本不支持一键拨号，请拨打" + t.globalData.baseInfo.Tel + "咨询",
                            success: function(t) {
                                t.confirm ? console.log("qued") : t.cancel && console.log("用户点击取消");
                            }
                        });
                    }
                });
            },
            complete: function() {
                console.log(66666);
            }
        });
    },
    registerGlobalFunctions: function(t) {
        t.appGetLocation = this.getLocation, t.appPhoneCall = this.callphoned, t.onCustomFormSelectChange = function(e) {
            getApp().onCustomFormSelectChange(e, t);
        }, t.onCustomFormDateChange = function(e) {
            getApp().onCustomFormDateChange(e, t);
        }, t.onCustomFormTimeChange = function(e) {
            getApp().onCustomFormTimeChange(e, t);
        }, t.onCustomFormDateTap = function(e) {
            getApp().onCustomFormDateTap(e, t);
        }, t.onCustomRegionChange = function(e) {
            getApp().onCustomRegionChange(e, t);
        };
    },
    globalData: {
        userInfo: null,
        PSESSID: "",
        session_key: "",
        WebUserID: "",
        baseInfo: {},
        TitleName: {},
        locationInfo: {
            latitude: "",
            longitude: "",
            address: ""
        },
        siteBaseUrl: e.SITEBASEURL,
        cdnBaseUrl: e.SITEBASEURL.indexOf("//wxapp.") > -1 && e.CDNBASEURL ? e.CDNBASEURL : e.SITEBASEURL,
        appId: e.APPID,
        appTitle: e.APPTITLE,
        appDescription: e.APPDESCRIPTION,
        siteId: e.SITEID,
        dataId: e.DATAID
    }
});