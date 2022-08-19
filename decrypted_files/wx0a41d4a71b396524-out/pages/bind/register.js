var t = getApp(), n = require("../../utils/config.js"), o = "", e = 0;

Page({
    data: {
        bind_name: "",
        canSend: !0,
        array: [],
        index: 0,
        objs: [],
        phone: ""
    },
    showDialog: function() {
        this.dialog.showDialog();
    },
    confirmEvent: function() {
        this.dialog.hideDialog();
    },
    onLoad: function(t) {
        o = wx.getStorageSync("3rdsession"), void 0 === (e = t.id) && (e = 0), null != e && "" != e || (e = 0);
        var n = this;
        wx.showLoading({
            title: "加载中.....",
            mask: !0
        }), n.getBindSchools();
    },
    getPhoneNumber: function(t) {
        var n = this;
        if ("getPhoneNumber:ok" == t.detail.detail.errMsg) {
            var o = t.detail.detail.encryptedData, e = t.detail.detail.iv;
            wx.showLoading({
                title: "获取手机号.....",
                mask: !0
            }), n.getPhone(o, e);
        } else n.dialog = n.selectComponent("#dialog"), n.dialog.showDialog();
    },
    getPhone: function(t, e) {
        var a = this;
        wx.request({
            method: "GET",
            url: n.getPhone,
            data: {
                encrypdata: t,
                ivdata: e,
                sessionKey: o
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                wx.hideLoading(), 200 == t.data.type ? a.setData({
                    phone: t.data.date
                }) : wx.showToast({
                    title: t.data.content,
                    icon: "none"
                });
            },
            fail: function(t) {
                wx.hideLoading(), wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    toBind: function() {
        var t = e || "";
        wx.navigateTo({
            url: "./index?id=" + t
        });
    },
    bindName: function(t) {
        this.setData({
            bind_name: t.detail.value
        });
    },
    switchTeam: function() {
        var t = "../choose/team?id=" + e + "&type=1";
        wx.navigateTo({
            url: t
        });
    },
    getBindSchools: function() {
        var o = this;
        wx.request({
            url: n.getBindSchools,
            data: {
                type: 1,
                schoolId: e,
                long: t.globalData.long,
                lat: t.globalData.lat,
                limit: 1
            },
            success: function(t) {
                if (wx.hideLoading(), 200 == t.data.type) {
                    var n = t.data.date;
                    n.length > 0 && (o.setData({
                        team: n[0]
                    }), o.dialog = o.selectComponent("#dialog"), o.dialog.showDialog());
                } else wx.hideLoading(), wx.showToast({
                    title: t.data.content,
                    icon: "none"
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    bindPickerChange: function(t) {
        this.setData({
            index: t.detail.value
        });
    },
    bindPhoneLogin: function() {
        var e = this, a = e.data.phone, i = e.data.bind_name;
        if (null == a || "" == a.trim()) return wx.showToast({
            title: "请允许获取手机号",
            icon: "none"
        }), !1;
        if (null == i || "" == i.trim()) return wx.showToast({
            title: "请输入姓名",
            icon: "none"
        }), !1;
        var s = e.data;
        if (null == s.team) return wx.showToast({
            title: "未选择绑定的平台",
            icon: "none"
        }), !1;
        var l = s.team.id;
        if (null == l || "" == l) return wx.showToast({
            title: "请选择绑定的平台",
            icon: "none"
        }), !1;
        wx.request({
            url: n.registerReader,
            data: {
                sessionKey: o,
                name: i,
                phone: a,
                scId: l
            },
            success: function(n) {
                200 == n.data.type ? (t.globalData.readerType = 1, t.globalData.bind = 1, t.globalData.schoolId = l, 
                wx.showToast({
                    title: "注册成功",
                    icon: "none",
                    mask: !0
                }), wx.setStorageSync("schoolId", l), setTimeout(function() {
                    wx.reLaunch({
                        url: "/pages/index/index"
                    });
                }, 1500)) : wx.showToast({
                    title: n.data.content,
                    icon: "none"
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});