var t = getApp(), e = require("../../wxParse/wxParse.js");

Page({
    data: {
        info: {},
        tempId: "",
        title: "",
        addTime: "",
        year: 0
    },
    onLoad: function(e) {
        this.setData({
            info: t.globalData.info,
            tempId: e.tempId,
            year: new Date().getFullYear()
        }), this.getArticleInfo();
    },
    onPullDownRefresh: function() {
        this.getArticleInfo();
    },
    getArticleInfo: function() {
        wx.showNavigationBarLoading();
        var a = this;
        t.apiRequestGet({
            urlMethod: "api/Article/getArticleInfo",
            data: {
                articleId: this.data.tempId
            },
            success: function(t) {
                var i = t.data.content;
                e.wxParse("content", "html", i, a, 5), a.setData({
                    title: t.data.title,
                    addTime: t.data.addTime
                }), wx.stopPullDownRefresh(), wx.hideNavigationBarLoading();
            },
            fail: function(t) {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    goback: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    onShareAppMessage: function(t) {
        return {
            success: function(t) {},
            fail: function(t) {}
        };
    },
    shangAction: function() {
        wx.navigateTo({
            url: "../Admire/Admire"
        });
    },
    fenxiangAction: function() {
        wx.showShareMenu({
            withShareTicket: !1
        });
    }
});