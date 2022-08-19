var e = require("../../utils/util.js"), t = getApp(), a = require("../../config.js"), o = require("../../getlogininfo.js"), n = o.authorizeInfo, i = o.getUserInfo, s = "";

Page({
    data: {
        serverUrl: "http://skyforest.static.elab-plus.com/wepy_pro/v1-2/",
        count: "",
        list: [],
        pageNo: 1,
        total: "",
        showInfoModel: !1,
        showPhoneModel: !1,
        phoneFailFun: null,
        phoneFun: null,
        hasNotice: !1,
        setInter: null
    },
    onShow: function(a) {
        wx.setStorageSync("loadTime", new Date().getTime());
        var o = {
            type: "PV",
            pvId: "P_2cMINA_12",
            pvCurPageName: "xiaoxitongzhi",
            pvCurPageParams: s,
            pvLastPageName: getCurrentPages()[getCurrentPages().length - 2] ? getCurrentPages()[getCurrentPages().length - 2].data.despage : "",
            pvLastPageParams: "",
            pvPageLoadTime: new Date().getTime() - wx.getStorageSync("loadTime")
        };
        console.log(o, "埋点"), e.trackRequest(o, t);
    },
    onReady: function() {
        wx.hideLoading(), wx.setNavigationBarTitle({
            title: "消息通知"
        });
    },
    onUnload: function() {},
    onHide: function() {},
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
            url: e.newUrl() + "elab-marketing-notify/customer/pageList",
            method: "POST",
            header: {
                token: t.globalData.tonken,
                houseId: a.houseId,
                "content-type": "application/json"
            },
            data: {
                pageNo: o.data.pageNo,
                customerId: t.globalData.single.id
            },
            success: function(e) {
                console.log("解密后 消息通知data: ", e), wx.hideLoading(), e.data.success && e.data.pageModel.resultSet.length > 0 ? (o.data.total || o.setData({
                    total: e.data.pageModel.total
                }), (e = e.data.pageModel.resultSet).forEach(function(t, a) {
                    e[a].sendTime = o.transformTime(t.sendTime / 1e3), e[a].mobile ? (console.log(e[a].content.split(e[a].mobile)), 
                    e[a].array1 = e[a].content.split(e[a].mobile)[0], e[a].array2 = e[a].content.split(e[a].mobile)[1]) : e[a].array1 = e[a].content;
                }), o.setData({
                    list: o.data.list.concat(e),
                    pageNo: o.data.pageNo + 1,
                    hasNotice: !0
                })) : e.data.success || wx.showToast({
                    title: e.data.message,
                    icon: "warn",
                    duration: 1500
                });
            },
            fail: function(e) {
                console.log("获取信息失败: ", e), wx.hideLoading(), "request:fail timeout" == e.errMsg ? wx.showToast({
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
    callTel: function(a) {
        var o = {
            clkId: "clk_2cmina_33",
            clkDesPage: "",
            clkName: "dianjidianhuahaoma",
            type: "CLK",
            pvCurPageName: "xiaoxitongzhi",
            pvCurPageParams: s
        };
        e.trackRequest(o, t), wx.makePhoneCall({
            phoneNumber: a.currentTarget.dataset.tel
        });
    },
    onLoad: function(e) {
        wx.showLoading({
            title: "正在加载"
        }), s = JSON.stringify(e);
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
    authorizeIndexPhone: function(e, a) {
        var o = this;
        wx.getStorageSync("phone") || t.globalData.isPhone ? "function" == typeof e && e() : (t.globalData.phone = wx.getStorageSync("phone"), 
        console.log("***authorizeIndexPhone***", t.globalData.phone, wx.getStorageSync("phone")), 
        t.globalData.phone ? (o.setData({
            showPhoneModel: !1,
            showPhoneAuth: !0
        }), "function" == typeof e && e()) : o.setData({
            showPhoneModel: !0,
            phoneFun: e || null,
            phoneFailFun: a || null
        }));
    },
    getPhoneNumber: function(e) {
        var a = this;
        this.setData({
            showPhoneModel: !1
        }), t.globalData.isPhone = !0, wx.setStorageSync("ISauthorizePhone", !0);
        var o = e.detail.iv, n = (e.detail.errMsg, t.globalData.houseid, t.globalData.tonken || ""), i = e.detail.encryptedData, s = t.globalData.sessionKey, l = t.globalData.appid;
        console.log("***token***", n), t.globalData.tmpPhone = !0, console.log("****getPhoneNumber****"), 
        e.detail.errMsg.includes("fail") ? "function" == typeof a.data.phoneFailFun && a.data.phoneFailFun() : (i && s && o || wx.showToast({
            title: "系统提示:授权信息错误",
            icon: "warn",
            duration: 1500
        }), t.globalData.single ? a.getPhone(i, s, l, o, n) : a.data.setInter = setInterval(function() {
            t.globalData.single && (a.getPhone(i, s, l, o, n), clearInterval(a.data.setInter));
        }, 200));
    },
    getPhone: function(o, n, i, s, l) {
        var g = this, r = {
            encryptedData: o,
            sessionKey: n,
            appId: i,
            customerId: t.globalData.single.id,
            houseId: a.houseId,
            shareParam: t.globalData.fromChannel,
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
                t.globalData.phone = e.data.single.phone, wx.setStorageSync("phone", e.data.single.phone), 
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
    },
    onReachBottom: function() {
        this.getList();
    },
    goToDetail: function(e) {
        console.log("asd");
        var t = e.target.dataset.url, a = e.target.dataset.type;
        if (t && t.includes("m.elab-plus.com") && 1 == a) {
            var o = encodeURIComponent(t);
            wx.navigateTo({
                url: "../webView/webView?view=" + encodeURIComponent(o)
            });
        } else t && 1 == a && wx.showToast({
            title: "请在APP中打开查看!",
            icon: "warn",
            duration: 1500
        });
    }
});