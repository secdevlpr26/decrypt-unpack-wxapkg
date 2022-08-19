function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e, a = getApp(), n = require("../../053C6437668F5ADF635A0C306B0911A5.js"), i = require("../../B8485584668F5ADFDE2E3D833E1911A5.js");

require("../../A86AD406668F5ADFCE0CBC010C2911A5.js");

Page({
    data: (e = {
        hostUrl: a.globalData.hostUrl,
        gsname: "",
        tell: "",
        address: "",
        gsxh: "",
        bank: "",
        zh: "",
        id: 0,
        latitude: 0,
        longitude: 0,
        displayTime: null,
        index: 0,
        index1: 0
    }, t(e, "displayTime", null), t(e, "checkType", [ {
        id: "0",
        msg: "未变"
    }, {
        id: "1",
        msg: "改变"
    } ]), t(e, "checkType1", [ {
        id1: "0",
        msg1: "正常"
    }, {
        id1: "1",
        msg1: "异常"
    } ]), t(e, "loading", !1), t(e, "checkMode", {}), e),
    onLoad: function(t) {
        this.setData({
            loading: !0
        });
        a.globalData.settings.language;
        var e = this;
        e.data.UI;
        new i.AMapWX({
            key: "4899264e678cc2bc0626775f92c8b741"
        }).getRegeo({
            success: function(t) {
                wx.showToast({
                    title: "定位成功",
                    icon: "success",
                    duration: 1e3
                }), console.log(t[0]);
                var a = t[0].latitude, n = t[0].longitude;
                e.setData({
                    locNameContent: t[0].name,
                    locDescContent: t[0].desc,
                    latitude: a,
                    longitude: n,
                    loading: !1
                });
            }
        });
    },
    relocate: function() {
        this.setData({
            loading: !0
        });
        var t = this;
        t.data.UI;
        new i.AMapWX({
            key: "4899264e678cc2bc0626775f92c8b741"
        }).getRegeo({
            success: function(e) {
                console.log(e), wx.showToast({
                    title: "定位成功",
                    icon: "success",
                    duration: 1e3
                }), t.setData({
                    locNameContent: e[0].name,
                    locDescContent: e[0].desc,
                    loading: !1,
                    latitude: e[0].latitude,
                    longitude: e[0].longitude
                });
            }
        });
    },
    bindPickerChange: function(t) {
        this.setData({
            index: t.detail.value
        });
    },
    bindPickerChange1: function(t) {
        this.setData({
            index1: t.detail.value
        });
    },
    formSubmit: function(t) {
        var e = this, i = wx.getStorageSync("userId");
        if (null == i && "" == i) wx.showModal({
            title: "温馨提示",
            content: "先登录",
            success: function(t) {
                t.confirm ? wx.navigateTo({
                    url: "/pages/user/user"
                }) : t.cancel;
            }
        }); else {
            var o = n.currentDateTime(), s = e.data.latitude, c = e.data.longitude, l = e.data.locNameContent, u = e.data.locDescContent;
            e.data.bz;
            if (0 == s) return void wx.showToast({
                title: "定位失败!",
                icon: "loading",
                duration: 1500
            });
            wx.request({
                url: a.globalData.apiUrl,
                data: {
                    opt: "addKq_changchang",
                    userId: wx.getStorageSync("userId"),
                    currentTime: o,
                    latitude: s,
                    longitude: c,
                    locNameContent: l,
                    locDescContent: u,
                    bz: t.detail.value.bz,
                    type: t.detail.value.type,
                    type1: t.detail.value.type1
                },
                header: {
                    "content-type": "application/json"
                },
                success: function(t) {
                    if (0 == t.data.status) wx.showToast({
                        title: "提交成功!",
                        icon: "success",
                        duration: 1e3,
                        success: function() {
                            wx.redirectTo({
                                url: "/pages/timecard/timecard"
                            });
                        }
                    }); else {
                        if (2 == t.data.status) return void wx.showToast({
                            title: "没有绑定学生!",
                            icon: "loading",
                            duration: 1500
                        });
                        if (3 == t.data.status) return void wx.showToast({
                            title: "本日已报过!",
                            icon: "loading",
                            duration: 1500
                        });
                        wx.showToast({
                            title: "提交失败!",
                            icon: "loading",
                            duration: 1500
                        });
                    }
                }
            });
        }
    },
    onReady: function() {
        this.setData({
            displayTime: n.currentTime()
        });
    },
    onShow: function() {
        var t = this;
        setInterval(function() {
            t.setData({
                displayTime: n.currentTime()
            });
        }, 1e3);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});