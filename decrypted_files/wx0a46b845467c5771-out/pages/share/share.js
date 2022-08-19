var e = require("../../utils/util.js"), t = getApp(), o = require("../../getlogininfo.js"), n = o.authorizeInfo, a = o.getUserInfo;

Page({
    data: {
        serverUrl: "http://skyforest.static.elab-plus.com/wepy_pro/",
        list: [],
        note: "",
        showInfoModel: !1,
        showPhoneModel: !1,
        phoneFailFun: null,
        phoneFun: null
    },
    onShareAppMessage: function(e) {
        var o;
        if ("button" == e.from) {
            var n = e.target.dataset.path, a = e.target.dataset.url;
            o = {
                title: e.target.dataset.title,
                imageUrl: a,
                path: "/pages/webView/webView?loginid=" + t.globalData.single.loginid + "&view=" + encodeURIComponent(n)
            };
        } else o = {
            title: "宁波WIII",
            imageUrl: "",
            path: "/pages/share/share?loginid=" + t.globalData.single.loginid
        };
        return o;
    },
    onShow: function(o) {
        n = {
            pageid: "10941010",
            keyvalue: "sfc.nb.xcx.w3.head.fenxiang.enter"
        };
        e.reqTrackEventObj(n, t);
        var n = {
            pageid: "10941010",
            keyvalue: "sfc.nb.xcx.w3.head.fenxiang.statetime",
            usetime: "3000"
        };
        e.reqTrackEventTimeObj(n, t), wx.hideShareMenu();
    },
    onUnload: function() {
        e.stopTrackEventTimeObj();
    },
    onHide: function() {
        e.stopTrackEventTimeObj();
    },
    getList: function() {
        var o = this, n = {
            houseid: t.globalData.houseid,
            mobile: t.globalData.phone,
            enumType: "0574"
        };
        wx.request({
            url: e.url(),
            method: "POST",
            data: e.reformParam(e.getRecommendInfoList, n),
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (console.log("解密后 分享数据data: ", e), e.data.success && e.data.list.length > 0) {
                    var t = e.data.list;
                    t.forEach(function(e, o) {
                        t[o].tag = e.tag.split(",");
                    }), console.log(t), o.setData({
                        list: t,
                        note: e.data.single.note
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
    goDetail: function(e) {
        var t = e.target.dataset.path;
        wx.navigateTo({
            url: "/pages/webView/webView?loginid=&view=" + encodeURIComponent(t)
        });
    },
    onReady: function() {
        wx.hideLoading(), wx.setNavigationBarTitle({
            title: "我要分享"
        });
    },
    onLoad: function(e) {
        wx.showLoading({
            title: "正在加载"
        }), wx.hideShareMenu();
        var t = this;
        n.call(this, function() {
            t.authorizeIndexPhone(function() {
                t.getList();
            }, function() {
                wx.redirectTo({
                    url: "../index/index?loginid=" + e.shareToken
                });
            });
        }, function() {
            wx.redirectTo({
                url: "../index/index?loginid=" + e.shareToken
            });
        });
    },
    authorizeIndexPhone: function(e, o) {
        var n = this;
        wx.getStorageSync("phone") ? "function" == typeof e && e() : (t.globalData.phone = wx.getStorageSync("phone"), 
        console.log("***authorizeIndexPhone***", t.globalData.phone, wx.getStorageSync("phone")), 
        t.globalData.phone ? (n.setData({
            showPhoneModel: !1,
            showPhoneAuth: !0
        }), "function" == typeof e && e()) : n.setData({
            showPhoneModel: !0,
            phoneFun: e || null,
            phoneFailFun: o || null
        }));
    },
    getPhoneNumber: function(o) {
        var n = this;
        this.setData({
            showPhoneModel: !1
        }), wx.setStorageSync("ISauthorizePhone", !0);
        var a = o.detail.iv, i = (o.detail.errMsg, t.globalData.houseid, t.globalData.tonken || ""), l = o.detail.encryptedData, s = t.globalData.sessionKey, r = t.globalData.appid;
        if (console.log("***token***", i), console.log("****getPhoneNumber****"), o.detail.errMsg.includes("fail")) "function" == typeof n.data.phoneFailFun && n.data.phoneFailFun(); else {
            l && s && a || wx.showToast({
                title: "系统提示:授权信息错误",
                icon: "warn",
                duration: 1500
            });
            var g = {
                encryptedData: l,
                sessionKey: s,
                appId: r,
                iv: a
            };
            wx.request({
                url: e.newUrl() + "elab-marketing-content/module/queryPositionPhone",
                method: "POST",
                data: g,
                header: {
                    "content-type": "application/json",
                    token: i
                },
                success: function(e) {
                    console.log("解密后 data: ", e), e.data.success && e.data.single && (console.log(e.data.single), 
                    t.globalData.phone = e.data.single.phone, wx.setStorageSync("phone", e.data.single), 
                    n.setData({
                        showPhoneModel: !1,
                        showPhoneAuth: !0
                    }), "function" == typeof n.data.phoneFun && n.data.phoneFun());
                },
                fail: function(e) {
                    "function" == typeof n.data.phoneFailFun && n.data.phoneFailFun(), console.log(e, "解密手机号失败ggggggggggg");
                }
            });
        }
    },
    getUserInfo: function(e) {
        a.call(this, e);
    }
});