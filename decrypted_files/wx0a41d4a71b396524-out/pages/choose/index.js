var t = getApp(), a = require("../../utils/config.js"), e = "";

Page({
    data: {
        inputShowed: !1,
        inputVal: "",
        scId: null,
        objs: [],
        seas: []
    },
    onLoad: function() {
        var a = this;
        a.setData({
            scId: t.globalData.schoolId
        }), e = wx.getStorageSync("3rdsession"), a.getRegSchools(null);
    },
    getRegSchools: function(n) {
        var s = this;
        wx.request({
            url: a.getRegSchools,
            data: {
                sessionKey: e,
                schoolId: t.globalData.schoolId,
                key: n
            },
            success: function(t) {
                if (200 == t.data.type) {
                    var a = t.data.date;
                    s.setData({
                        wholes: a,
                        objs: a
                    });
                }
            },
            fail: function(t) {}
        });
    },
    toReg: function() {
        wx.navigateTo({
            url: "/pages/bind/register"
        });
    },
    switchTeam: function(a) {
        var e = a.currentTarget.dataset.id, n = a.currentTarget.dataset.name;
        if (t.globalData.schoolId == e) return wx.switchTab({
            url: "/pages/index/index"
        }), !1;
        wx.showModal({
            title: "账号切换",
            content: "确定切换到" + n,
            success: function(t) {
                t.confirm ? (wx.showLoading({
                    title: "切换中...",
                    mask: !0
                }), wx.setStorageSync("schoolId", e), setTimeout(function() {
                    wx.hideLoading(), wx.reLaunch({
                        url: "/pages/index/index"
                    });
                }, 1500)) : t.cancel;
            }
        });
    },
    showInput: function() {
        this.setData({
            inputShowed: !0
        });
    },
    hideInput: function() {
        this.setData({
            inputVal: "",
            inputShowed: !1
        });
    },
    clearInput: function() {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function(t) {
        var a = this, e = t.detail.value;
        if (null == e || "" == e) return "";
        for (var n = a.data.objs, s = [], i = 0; i < n.length; i++) n[i].schoolName.indexOf(e) >= 0 && s.push(n[i]);
        this.setData({
            inputVal: t.detail.value,
            seas: s
        });
    }
});