var t = require("data.js"), a = require("/utils/MD5.js");

App({
    globalData: {
        md5: a,
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
            projectType: t.dataInfo.projectType,
            homePageLayout: t.dataInfo.homePageLayout,
            hideInfoTabs: !0
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
        memberType: "",
        actDistribution: {}
    },
    onLaunch: function(t) {
        console.log(" ------------ onLaunch ------------- ");
        var a = this;
        a.getProjectData(), a.initTabbarPath(a.globalData.projectInfo.projectType);
        var e = "";
        "undefined" != typeof sessionStorage && (e = sessionStorage.getItem("globleThemeConfig")), 
        e && (a.globalData.styleConfig = JSON.parse(e));
    },
    onShow: function(t) {
        console.log(" ------------ onShow ------------- ");
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
            var s = t.dataInfo.customizeTabsList[o];
            if (s.sysTabNameTag && "" != s.sysTabNameTag && s.sysTabNameTag == a) return s.customizeId;
            if (s.sysTabName && "" != s.sysTabName && s.sysTabName == a) return s.customizeId;
            if (s.data && s.data.customizeTabsList && s.data.customizeTabsList.length > 0) for (var n = 0; n < s.data.customizeTabsList.length; n++) {
                var r = s.data.customizeTabsList[n];
                if (r.sysTabNameTag && "" != r.sysTabNameTag && r.sysTabNameTag == a) return r.customizeId || r.id;
                if (r.sysTabName && "" != r.sysTabName && r.sysTabName == a) return r.customizeId || r.id;
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
        if (wx.canIUse("login")) return new Promise(function(t, e) {
            wx.login({
                success: function(e) {
                    var o = e.code, s = wx.getStorageSync("openId" + a.globalData.autoId);
                    return s && s.length > 0 ? (console.log("======openId:" + s + " ====="), void t()) : !o || o.length < 1 ? (console.log("======getOpenId failed   wxCode=" + o + " ====="), 
                    void t()) : void wx.request({
                        url: a.globalData.paymentUrl + "/WechatAlipay/GetOpenId",
                        data: {
                            projectId: a.globalData.projectInfo.appId,
                            code: o
                        },
                        success: function(e) {
                            var o = a.getJsonData(e.data);
                            console.log("====== openId:" + o.openId + " ====="), wx.setStorageSync("openId" + a.globalData.autoId, o.openId);
                            var s = o.openId;
                            if (!s || s.length < 1) t(); else {
                                var n = {
                                    appId: a.globalData.projectInfo.appId,
                                    openId: s
                                }, r = wx.getStorageSync("parentId" + a.globalData.autoId);
                                r && (n.parentId = r), wx.request({
                                    url: a.globalData.comUrl + "member_memberRegistration.action",
                                    data: n,
                                    success: function(e) {
                                        console.log(e.data);
                                        var o = a.getJsonData(e.data);
                                        o.isDistributor && "3" == o.type ? wx.setStorageSync("memberType" + a.globalData.autoId, o.type) : wx.setStorageSync("memberType" + a.globalData.autoId, "");
                                        var s = "memberId" + a.globalData.autoId;
                                        wx.setStorageSync(s, o.memberId), a.globalData.memberId = o.memberId, console.log("====== memberId:" + o.memberId + " ====="), 
                                        t();
                                    },
                                    fail: function() {
                                        console.log("login failed");
                                    }
                                });
                            }
                        },
                        fail: function(t) {
                            console.log(t);
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
            var s = wx.getStorageSync("openId" + a.globalData.autoId);
            if (s && s.length > 0) return console.log("======openId:" + s + " ====="), void e(s);
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
        t && wx.showModal({
            title: t,
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
        var a = this, e = t.i ? t.i : 0, o = t.success ? t.success : 0, s = t.fail ? t.fail : 0;
        wx.uploadFile({
            url: t.url,
            filePath: t.path[e],
            name: "file",
            formData: null,
            success: function(t) {
                o++, console.log(t), console.log(e);
            },
            fail: function(t) {
                s++, console.log("fail:" + e + "fail:" + s);
            },
            complete: function() {
                console.log(e), ++e == t.path.length ? (console.log("执行完毕"), console.log("成功：" + o + " 失败：" + s)) : (console.log(e), 
                t.i = e, t.success = o, t.fail = s, a.uploadimg(t));
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
        var e, o, s;
        return e = t.split("-"), o = new Date(e[1] + "-" + e[2] + "-" + e[0]), e = a.split("-"), 
        s = new Date(e[1] + "-" + e[2] + "-" + e[0]), parseInt(Math.abs(o - s) / 1e3 / 60 / 60 / 24);
    },
    request: function(t) {
        if (t && t.url) {
            if (0 != t.cache) {
                var a = t.url + JSON.stringify(t.data || {}), e = wx.getStorageSync(a);
                e && t.success(e);
                var o = t.success;
                t.success = function(t) {
                    !t || e.data && t.data == e.data || (wx.setStorageSync(a, t), o(t));
                };
            }
            wx.request(t);
        } else console.log("app.request:", "request url cannot be null");
    },
    filterSpecialSymbol: function(t) {
        return t = t.replace(/&ldquo;/g, "“"), t = t.replace(/&rdquo;/g, "”"), t = t.replace(/&mdash;/g, "—"), 
        t = t.replace(/&middot;/g, "·"), t = t.replace(/&hellip;/g, "…"), t = t.replace(/&nbsp;/g, "　"), 
        t = t.replace(/<img(?=.*?\/>)/gi, '<img style="width: 100%; height: auto;" ');
    },
    initTabbarPath: function(t) {
        switch (this.globalData.pagesPath = {
            proPath: "/pages/product/product",
            cartPath: "/pages/self/cart/cart",
            storePath: "/pages/store/layout-o2o/store"
        }, t) {
          case "enterprise":
          case "enterprise-show":
            return void (this.globalData.pagesPath.storePath = "/pages/store/layout-enterprise/store-detail/store-detail");

          case "meirong":
            return void (this.globalData.pagesPath.storePath = "/pages/store/layout-meirong/store");

          case "cm-lc":
            return this.globalData.pagesPath.proPath = "/pages/product/layout-cm-lc/product", 
            this.globalData.pagesPath.storePath = "/pages/store/layout-cm-lc/store", void (this.globalData.pagesPath.cartPath = "/pages/self/cart/layout-cm-lc/cart");
        }
    }
});