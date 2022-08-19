var e = require("../../utils/util.js"), t = require("../../config.js"), a = getApp(), o = require("../../getlogininfo.js"), n = o.authorizeInfo, i = o.getUserInfo;

Page({
    data: {
        serverUrl: "http://skyforest.static.elab-plus.com/wepy_pro/v1-2/",
        count: "0",
        jbColor1: " #6294A6",
        jbColor2: "#3B4B81",
        list: [],
        pageNo: 1,
        total: "",
        showInfoModel: !1,
        showPhoneModel: !1,
        phoneFailFun: null,
        phoneFun: null,
        setInter: null
    },
    onShow: function(t) {
        wx.setStorageSync("loadTime", new Date().getTime());
        var o = {
            type: "PV",
            pvId: "P_2cMINA_11",
            pvCurPageName: "wodetuijian",
            pvCurPageParams: "",
            pvLastPageName: getCurrentPages()[getCurrentPages().length - 2] ? getCurrentPages()[getCurrentPages().length - 2].data.despage : "",
            pvLastPageParams: "",
            pvPageLoadTime: new Date().getTime() - wx.getStorageSync("loadTime")
        };
        console.log(o, "埋点"), e.trackRequest(o, a);
    },
    onUnload: function() {
        e.stopTrackEventTimeObj();
    },
    onHide: function() {
        e.stopTrackEventTimeObj();
    },
    transformTime: function(e) {
        var t = new Date(1e3 * e);
        return t.getFullYear() + "-" + ((t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-") + ((t.getDate() < 10 ? "0" + t.getDate() : t.getDate()) + " ") + ((t.getHours() < 10 ? "0" + t.getHours() : t.getHours()) + ":") + ((t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes()) + ":") + ((t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds()) + " ");
    },
    getList: function() {
        var o = this;
        if (o.data.total && o.data.pageNo > o.data.total) return wx.showToast({
            title: "无更多消息",
            icon: "warn",
            duration: 1500
        }), !1;
        wx.showLoading({
            title: "加载中"
        }), wx.request({
            url: e.newUrl() + "elab-marketing-authentication/contact/recommend/list",
            method: "POST",
            data: {
                houseId: t.houseId,
                pageSize: 10,
                pageNo: o.data.pageNo,
                customerId: a.globalData.single.id,
                shareType: "0"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (console.log("解密后 data: ", e), wx.hideLoading(), e.data.success && e.data.pageModel) {
                    o.data.total || o.setData({
                        total: e.data.pageModel.total
                    });
                    var t = e.data.pageModel.resultSet;
                    t.forEach(function(e, a) {
                        t[a].created = o.transformTime(e.created / 1e3);
                    }), o.setData({
                        list: o.data.list.concat(t),
                        pageNo: o.data.pageNo + 1,
                        count: e.data.pageModel.rowTotal
                    });
                }
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
    },
    onReachBottom: function() {
        this.getList();
    },
    onReady: function() {
        wx.hideLoading();
    },
    onLoad: function(e) {
        wx.showLoading({
            title: "正在加载"
        });
        var t = this;
        n.call(this, function() {
            t.authorizeIndexPhone(function() {
                t.getList();
            }, function() {
                t.getList();
            });
        }, function() {
            t.authorizeIndexPhone(function() {
                t.getList();
            }, function() {
                t.getList();
            });
        });
    },
    authorizeIndexPhone: function(e, t) {
        var o = this;
        wx.getStorageSync("phone") || a.globalData.isPhone ? "function" == typeof e && e() : (a.globalData.phone = wx.getStorageSync("phone"), 
        console.log("***authorizeIndexPhone***", a.globalData.phone, wx.getStorageSync("phone")), 
        a.globalData.phone ? (o.setData({
            showPhoneModel: !1,
            showPhoneAuth: !0
        }), "function" == typeof e && e()) : o.setData({
            showPhoneModel: !0,
            phoneFun: e || null,
            phoneFailFun: t || null
        }));
    },
    getPhoneNumber: function(e) {
        var t = this;
        this.setData({
            showPhoneModel: !1
        }), a.globalData.isPhone = !0, wx.setStorageSync("ISauthorizePhone", !0);
        var o = e.detail.iv, n = (e.detail.errMsg, a.globalData.houseid, a.globalData.tonken || ""), i = e.detail.encryptedData, s = a.globalData.sessionKey, l = a.globalData.appid;
        console.log("***token***", n), a.globalData.tmpPhone = !0, console.log("****getPhoneNumber****"), 
        e.detail.errMsg.includes("fail") ? "function" == typeof t.data.phoneFailFun && t.data.phoneFailFun() : (i && s && o || wx.showToast({
            title: "系统提示:授权信息错误",
            icon: "warn",
            duration: 1500
        }), a.globalData.single ? t.getPhone(i, s, l, o, n) : t.data.setInter = setInterval(function() {
            a.globalData.single && (t.getPhone(i, s, l, o, n), clearInterval(t.data.setInter));
        }, 200));
    },
    getPhone: function(o, n, i, s, l) {
        var g = this, r = {
            encryptedData: o,
            sessionKey: n,
            appId: i,
            customerId: a.globalData.single.id,
            houseId: t.houseId,
            shareParam: a.globalData.fromChannel,
            iv: s
        };
        wx.request({
            url: e.newUrl() + "elab-marketing-authentication/position/queryPositionPhone",
            method: "POST",
            data: r,
            header: {
                "content-type": "application/json",
                token: l
            },
            success: function(e) {
                console.log("解密后 data: ", e), e.data.success && e.data.single && (console.log(e.data.single), 
                a.globalData.phone = e.data.single.phone, wx.setStorageSync("phone", e.data.single.phone), 
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
    getUserInfo: function(e) {
        i.call(this, e);
    }
});