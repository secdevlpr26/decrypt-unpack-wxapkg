var t = require("data.js");

App({
    globalData: {
        isWeb: !!window,
        wxAppId: "wxbc163aecb3210fcc",
        autoId: t.setting.autoId,
        comUrl: t.setting.comUrl + "/wc_mg/",
        paymentUrl: t.setting.payUrl,
        setting: t.setting,
        styleConfig: t.styleConfig,
        isPerson: t.isPerson,
        accountInfo: {},
        projectInfo: {
            appId: t.dataInfo.appId,
            projectIcon: t.dataInfo.projectIcon,
            projectName: t.dataInfo.projectName,
            PCStatus: t.dataInfo.PCStatus,
            projectType: t.dataInfo.projectType
        },
        ext: t.dataInfo.ext,
        customizeTabId: {},
        customizeTabsList: t.dataInfo.customizeTabsList,
        wxUserInfo: "",
        memberId: "",
        showHint: !0,
        g_location: {
            lat: 0,
            lng: 0
        },
        g_cityName: "",
        g_showAddress: "",
        isGroup: "",
        isQuery: !1,
        changeClassify: 1,
        topayHidden: !1,
        moduleList: [],
        memberType: ""
    },
    onLaunch: function(t) {
        console.log(" ------------ onLaunch ------------- ");
        var a = this;
        a.getProjectData();
        var e = "";
        "undefined" != typeof sessionStorage && (e = sessionStorage.getItem("globleThemeConfig")), 
        e && (a.globalData.styleConfig = JSON.parse(e));
    },
    onShow: function(t) {
        console.log(" ------------ onShow ------------- "), this.loginVzSystem();
    },
    refreshProjectData: function(t) {
        var a = this;
        return new Promise(function(e, o) {
            wx.request({
                url: a.globalData.comUrl + "tabs_getDataByProjectId.action",
                data: {
                    autoId: t
                },
                success: function(t) {
                    getCurrentPages();
                    var o = a.getJsonData(t.data);
                    e(o);
                }
            });
        });
    },
    initProjectData: function(a) {
        a && a.customizeTabsList && (t.dataInfo.customizeTabsList = a.customizeTabsList, 
        t.dataInfo.appId = a.appId, t.dataInfo.projectName = a.projectName, t.dataInfo.PCStatus = a.PCStatus, 
        t.setting.name = a.projectName, t.setting.autoId = a.autoId, t.setting.comUrl = a.comUrl, 
        t.setting.payUrl = a.payUrl, this.globalData.autoId = t.setting.autoId, this.globalData.setting = t.setting, 
        this.globalData.projectInfo = {
            appId: t.dataInfo.appId,
            projectIcon: t.dataInfo.projectIcon,
            projectName: t.dataInfo.projectName,
            PCStatus: t.dataInfo.PCStatus
        }, this.globalData.customizeTabsList = t.dataInfo.customizeTabsList, this.getProjectData());
    },
    getProjectData: function() {
        console.log("getProjectData");
        var a = this, e = {};
        (t.dataInfo.customizeTabsList || []).forEach(function(t) {
            e[t.sysTabNameTag || t.sysTabName] = t.customizeId || t.id;
        }), a.globalData.customizeTabId = e;
    },
    getCustomizeId: function(a) {
        if (!a) return null;
        var e = this;
        if (e.globalData.customizeTabId[a] && e.globalData.customizeTabId[a]) return e.globalData.customizeTabId[a];
        for (var o = 0; o < t.dataInfo.customizeTabsList.length; o++) {
            var n = t.dataInfo.customizeTabsList[o];
            if (n.sysTabNameTag && "" != n.sysTabNameTag && n.sysTabNameTag == a) return n.customizeId;
            if (n.sysTabName && "" != n.sysTabName && n.sysTabName == a) return n.customizeId;
            if (n.data && n.data.customizeTabsList && n.data.customizeTabsList.length > 0) for (var s = 0; s < n.data.customizeTabsList.length; s++) {
                var l = n.data.customizeTabsList[s];
                if (l.sysTabNameTag && "" != l.sysTabNameTag && l.sysTabNameTag == a) return l.customizeId || l.id;
                if (l.sysTabName && "" != l.sysTabName && l.sysTabName == a) return l.customizeId || l.id;
            }
        }
    },
    getWxUserInfo: function(t) {
        console.log("======start get wxUserInfo =====");
        var a = this;
        a.globalData.wxUserInfo ? ("function" == typeof t && t(a.globalData.wxUserInfo), 
        console.log("====== cb equals function =====")) : wx.login({
            success: function(e) {
                wx.getUserInfo({
                    success: function(e) {
                        a.globalData.wxUserInfo = e.userInfo, "function" == typeof t && t(a.globalData.wxUserInfo);
                    }
                });
            }
        });
    },
    loginVzSystem: function(t) {
        var a = this;
        if (wx.canIUse("login")) return new Promise(function(e, o) {
            console.log("======start login vz-system=====");
            var n = a.getMemberId();
            if (n && n.length > 0) {
                var s = "memberId" + a.globalData.autoId;
                return wx.setStorageSync(s, n), a.globalData.memberId = n, void e();
            }
            if (!t) return wx.login({
                success: function(t) {
                    a.loginVzSystem(t.code);
                }
            }), void e();
            a.getOpenId(t).then(function(t) {
                if (!t || t.length < 1) e(); else {
                    var o = {
                        appId: a.globalData.projectInfo.appId,
                        openId: t
                    }, n = wx.getStorageSync("parentId" + a.globalData.autoId);
                    n && (o.parentId = n), wx.request({
                        url: a.globalData.comUrl + "member_memberRegistration.action",
                        data: o,
                        success: function(t) {
                            console.log(t.data);
                            var o = a.getJsonData(t.data);
                            o.isDistributor && "3" == o.type && wx.setStorageSync("memberType" + a.globalData.autoId, o.type);
                            var n = "memberId" + a.globalData.autoId;
                            wx.setStorageSync(n, o.memberId), a.globalData.memberId = o.memberId, console.log("====== memberId:" + o.memberId + " ====="), 
                            e();
                        },
                        fail: function() {
                            console.log("login failed");
                        }
                    });
                }
            });
        });
    },
    getOpenId: function(t) {
        console.log("====== get openId start =====");
        var a = this;
        return new Promise(function(e, o) {
            var n = wx.getStorageSync("openId" + a.globalData.autoId);
            if (n && n.length > 0) return console.log("======openId:" + n + " ====="), n;
            !t || t.length < 1 ? console.log("======getOpenId failed   wxCode=" + t + " =====") : wx.request({
                url: a.globalData.paymentUrl + "/WechatAlipay/GetOpenId",
                data: {
                    projectId: a.globalData.projectInfo.appId,
                    code: t
                },
                success: function(t) {
                    var o = a.getJsonData(t.data);
                    console.log("====== openId:" + o.openId + " ====="), wx.setStorageSync("openId" + a.globalData.autoId, o.openId), 
                    e(o.openId);
                },
                fail: function(t) {
                    console.log(t);
                }
            });
        });
    },
    getJsonData: function(t) {
        var a = t.substring(5, t.length - 1);
        return JSON.parse(a);
    },
    hint: function(t) {
        t ? wx.showModal({
            title: t,
            showCancel: !1
        }) : wx.showModal({
            title: "请求失败",
            showCancel: !1
        });
    },
    showToast: function(t) {
        wx.showToast({
            title: t,
            icon: "none",
            duration: 2e3
        });
    },
    uploadimg: function(t) {
        var a = this, e = t.i ? t.i : 0, o = t.success ? t.success : 0, n = t.fail ? t.fail : 0;
        wx.uploadFile({
            url: t.url,
            filePath: t.path[e],
            name: "file",
            formData: null,
            success: function(t) {
                o++, console.log(t), console.log(e);
            },
            fail: function(t) {
                n++, console.log("fail:" + e + "fail:" + n);
            },
            complete: function() {
                console.log(e), ++e == t.path.length ? (console.log("执行完毕"), console.log("成功：" + o + " 失败：" + n)) : (console.log(e), 
                t.i = e, t.success = o, t.fail = n, a.uploadimg(t));
            }
        });
    },
    getMemberId: function() {
        return wx.getStorageSync("memberId" + this.globalData.autoId);
    },
    modifyPicSize: function(t, a) {
        var e = t.lastIndexOf(".");
        return t = t.substr(0, e) + a + t.substr(e, t.length - e);
    },
    getWeek: function(t) {
        var a, e = t.split("-");
        return a = new Date(e[0], parseInt(e[1] - 1), e[2]), "星期" + "日一二三四五六".charAt(a.getDay());
    },
    calculatDateBydays: function(t, a) {
        t = t.replace(/-/g, "/"), console.log(t);
        var e = new Date(t), o = new Date(e.getFullYear(), e.getMonth(), e.getDate() + a);
        e.getFullYear();
        console.log(e.getDate());
        e.getMonth(), e.getDate();
        return o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate();
    },
    DateDiff: function(t, a) {
        t = t.replace(/-/g, "/"), a = a.replace(/-/g, "/");
        var e, o, n;
        return e = t.split("-"), o = new Date(e[1] + "-" + e[2] + "-" + e[0]), e = a.split("-"), 
        n = new Date(e[1] + "-" + e[2] + "-" + e[0]), parseInt(Math.abs(o - n) / 1e3 / 60 / 60 / 24);
    },
    request: function(t) {
        if (t && t.url) {
            if (0 != t.cache) {
                console.log("app.request", "use cache");
                var a = t.url + JSON.stringify(t.data || {}), e = wx.getStorageSync(a);
                e && t.success(e);
                var o = t.success;
                t.success = function(t) {
                    !t || e.data && t.data == e.data || (wx.setStorageSync(a, t), o(t));
                };
            }
            wx.request(t);
        } else console.log("app.request:", "request url cannot be null");
    }
});