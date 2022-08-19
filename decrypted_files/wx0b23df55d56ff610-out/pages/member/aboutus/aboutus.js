var a = require("../../../wxParse/wxParse.js");

Page({
    data: {},
    onLoad: function(a) {},
    onReady: function() {},
    onShow: function() {
        var n = getApp().globalData.userInfo.about_as;
        a.wxParse("article", "html", n, this, 5);
    },
    onHide: function() {},
    onUnload: function() {}
});