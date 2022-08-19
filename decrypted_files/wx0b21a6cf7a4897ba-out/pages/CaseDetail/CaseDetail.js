var a = require("../../wxParse/wxParse.js"), t = getApp();

Page({
    data: {
        info: {},
        tempId: "",
        title: "",
        time: "",
        content: "",
        year: 0
    },
    onLoad: function(a) {
        this.setData({
            info: t.globalData.info,
            tempId: a.tempId,
            year: new Date().getFullYear()
        }), this.getAnliInfo();
    },
    getAnliInfo: function() {
        wx.showNavigationBarLoading();
        var e = this;
        t.apiRequestGet({
            urlMethod: "api/Article/getAnliInfo",
            data: {
                articleId: this.data.tempId
            },
            success: function(t) {
                var n = t.data.content;
                a.wxParse("content", "html", n, e, 5);
                var i = t.data.addTime;
                null != i && (i = i.substring(0, 11)), e.setData({
                    title: t.data.title,
                    time: i
                }), wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
            },
            fail: function(a) {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    goback: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    onShareAppMessage: function(a) {
        return {
            success: function(a) {},
            fail: function(a) {}
        };
    },
    saveNumber: function() {
        wx.addPhoneContact({
            lastName: t.globalData.info.officeName,
            firstName: t.globalData.info.officeName,
            mobilePhoneNumber: t.globalData.info.tel,
            organization: t.globalData.info.officeName,
            success: function() {},
            fail: function(a) {}
        });
    },
    callClick: function() {
        wx.makePhoneCall({
            phoneNumber: t.globalData.info.tel,
            success: function() {},
            fail: function() {}
        });
    },
    shangAction: function() {
        wx.navigateTo({
            url: "../Admire/Admire"
        });
    },
    fenxiangAction: function() {
        wx.showShareMenu({
            withShareTicket: !0
        });
    }
});