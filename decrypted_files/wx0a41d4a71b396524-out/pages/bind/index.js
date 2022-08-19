var t = getApp(), o = require("../../utils/config.js"), n = "", e = 0;

Page({
    data: {
        array: [],
        index: 0
    },
    bindPickerChange: function(t) {
        this.setData({
            index: t.detail.value
        });
    },
    onLoad: function(o) {
        var a = this;
        void 0 === (e = o.id) && (e = 0), null != e && "" != e || (e = 0), t.globalData.onShow = 1, 
        n = wx.getStorageSync("3rdsession"), a.getBindSchools();
    },
    getBindSchools: function() {
        var n = this;
        wx.request({
            url: o.getBindSchools,
            data: {
                type: 0,
                schoolId: e,
                long: t.globalData.long,
                lat: t.globalData.lat,
                limit: 1
            },
            success: function(t) {
                if (200 == t.data.type) {
                    var o = t.data.date;
                    o.length > 0 && n.setData({
                        team: o[0]
                    });
                } else wx.showToast({
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
    switchTeam: function() {
        var t = "../choose/team?id=" + e + "&type=0";
        wx.navigateTo({
            url: t
        });
    },
    formSubmit: function(e) {
        var a = this, i = e.detail.value;
        if (null == i.readerNo || "" == i.readerNo || "" == i.readerNo.trim()) return wx.showToast({
            title: "读者证号不能为空",
            icon: "none"
        }), !1;
        if (null == i.psw || "" == i.psw || "" == i.psw.trim()) return wx.showToast({
            title: "密码不能为空",
            icon: "none"
        }), !1;
        var s = a.data;
        if (null == s.team) return wx.showToast({
            title: "未选择绑定的平台",
            icon: "none"
        }), !1;
        var l = s.team.id;
        if (null == l || "" == l) return wx.showToast({
            title: "请选择绑定的平台",
            icon: "none"
        }), !1;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), wx.request({
            url: o.bindReaderNo,
            data: {
                sessionKey: n,
                readerNo: i.readerNo,
                psw: i.psw,
                scId: l
            },
            success: function(o) {
                200 == o.data.type ? (t.globalData.readerType = 1, t.globalData.bind = 1, t.globalData.schoolId = o.data.date, 
                wx.hideLoading(), wx.showToast({
                    title: "绑定成功",
                    icon: "success",
                    mask: !0
                }), wx.setStorageSync("schoolId", l), setTimeout(function() {
                    wx.reLaunch({
                        url: "/pages/index/index"
                    });
                }, 1500)) : wx.showToast({
                    title: o.data.content,
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
    toRegister: function() {
        console.log(e), wx.navigateTo({
            url: "register?id=" + e
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});