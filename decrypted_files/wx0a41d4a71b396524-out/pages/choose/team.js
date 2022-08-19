var t = getApp(), a = require("../../utils/config.js"), e = "";

Page({
    data: {
        inputShowed: !1,
        inputVal: "",
        scId: null,
        objs: [],
        seas: [],
        wholes: []
    },
    onLoad: function(t) {
        var a = t.id, n = t.type, i = this;
        wx.showLoading({
            title: "加载中.....",
            mask: !0
        }), e = wx.getStorageSync("3rdsession"), i.getBindSchools(null, n, a);
    },
    getBindSchools: function(e, n, i) {
        var s = this;
        wx.request({
            url: a.getBindSchools,
            data: {
                key: e,
                type: n,
                schoolId: i,
                long: t.globalData.long,
                lat: t.globalData.lat,
                limit: 0
            },
            success: function(t) {
                if (wx.hideLoading(), 200 == t.data.type) {
                    var a = t.data.date;
                    s.setData({
                        wholes: a,
                        objs: a
                    });
                }
            },
            fail: function(t) {
                wx.hideLoading();
            }
        });
    },
    toReg: function() {
        wx.navigateTo({
            url: "/pages/bind/index"
        });
    },
    switchTeam: function(t) {
        for (var a = t.currentTarget.dataset.id, e = this.data.wholes, n = null, i = 0; i < e.length; i++) e[i].id == a && (n = e[i]);
        if (null == n) return !1;
        var s = getCurrentPages();
        s[s.length - 2].setData({
            team: n
        }), wx.navigateBack({
            data: 1
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
        for (var n = a.data.objs, i = [], s = 0; s < n.length; s++) n[s].schoolName.indexOf(e) >= 0 && i.push(n[s]);
        this.setData({
            inputVal: t.detail.value,
            seas: i
        });
    }
});