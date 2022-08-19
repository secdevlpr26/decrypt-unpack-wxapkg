var a = require("../../../utils/wxParse/wxParse.js"), e = getApp();

Page({
    data: {},
    onLoad: function(t) {
        var r = wx.getStorageSync("scoreRule" + e.globalData.autoId);
        a.wxParse("scoreRule", "html", r, this, 5);
    }
});