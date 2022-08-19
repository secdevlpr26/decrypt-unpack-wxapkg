var e = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
}, n = require("./utils/constants.js"), t = require("./common/http.js"), s = (require("./common/crypt.js"), 
require("./common/WXBizDataCrypt3.js")), o = require("./utils/util.js");

App({
    onLaunch: function(e) {
        var n = this;
        e && (this.setMiniInfo(e), this.getSouceData(e)), this.user = this.getUser(), this.initOpenId(function(e) {
            n.setUser(e), n.getUserInfo(), n.userCb && n.userCb(e);
        }), this.getSystem();
    },
    getSouceData: function(e) {
        if (console.log("加载时接受到的来源参数", e), e) {
            var n = e.query.scene || e.query.cid || o.getUrlParam("cid", decodeURIComponent(e.query.q)) || 0, t = o.getUrlParam("openPage", decodeURIComponent(e.query.q));
            this.setUser({
                cid: n
            }), t && wx.navigateTo({
                url: "/pages/webpage/webpage?openPage=" + encodeURIComponent(t)
            });
        }
    },
    initOpenId: function(e) {
        var n = this;
        wx.checkSession({
            success: function() {
                n.user.openid && n.user.session_key || n.login(e);
            },
            fail: function() {
                n.login(e);
            }
        });
    },
    login: function(e) {
        var s = this;
        wx.login({
            success: function(o) {
                console.log("getCode2Session传递参数", JSON.stringify({
                    appId: n.MIN_APP_ID,
                    jsCode: o.code,
                    cid: s.user.cid
                })), t.post("/open/auth/wehcat/minprogram/getCode2Session", {
                    appId: n.MIN_APP_ID,
                    jsCode: o.code,
                    cid: s.user.cid
                }, function(n) {
                    var t = n.data;
                    if ("0000" == t.code) {
                        var s = t.data;
                        e(s);
                    } else wx.showToast({
                        title: "小程序后台配置错误",
                        icon: "none",
                        duration: 2e3
                    });
                });
            },
            fail: function() {}
        });
    },
    setUser: function(e) {
        for (var n in e) this.user[n] = e[n];
        wx.setStorageSync("_user", this.user);
    },
    getUser: function() {
        var e = wx.getStorageSync("_user"), n = {};
        return e && (n = e), n;
    },
    setMiniInfo: function(n) {
        this.refMiniInfo = e({}, n), wx.setStorageSync("_refMiniInfo", this.refMiniInfo);
    },
    getUserInfo: function() {
        var e = this;
        wx.getSetting({
            success: function(n) {
                n.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(n) {
                        s.decryptData(n.encryptedData, e.user.session_key, n.iv);
                        e.globalData.userInfo = n.userInfo, e.userInfoReadyCallback && e.userInfoReadyCallback(n);
                    }
                });
            },
            fail: function(e) {}
        });
    },
    getSystem: function() {
        var e = this;
        wx.getSystemInfo({
            success: function(n) {
                -1 != n.model.indexOf("iPhone X") && (e.globalData.isIpx = !0);
            }
        });
    },
    user: {
        cid: "",
        sourceCid: "",
        memberId: "",
        phone: "",
        openid: "",
        unionId: "",
        session_key: ""
    },
    globalData: {
        userInfo: null,
        isIpx: !1
    }
});