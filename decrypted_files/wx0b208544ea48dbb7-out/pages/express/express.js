var t = getApp(), e = t.globalData.config.base, a = require("../../wxParse/wxParse");

Page({
    data: {},
    onShareAppMessage: function() {
        return {
            title: t.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function(t) {
        this.getExpressList();
    },
    onHide: function() {},
    onUnload: function() {},
    getExpressList: function() {
        var t = this;
        wx.request({
            url: e + "Mobile/Api/ExpressList",
            method: "GET",
            header: {
                "content-type": "application"
            },
            success: function(e) {
                for (var n = 0; n < e.data.length; n++) console.log(e.data[n].content), a.wxParse("imageText", "html", e.data[n].content, t, 0);
                t.setData({
                    expressList: e.data
                });
            }
        });
    }
});