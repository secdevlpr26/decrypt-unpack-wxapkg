var a = require("../../../utils/wxParse/wxParse.js"), e = getApp();

Page({
    data: {},
    onLoad: function(r) {
        var t = wx.getStorageSync("groupRemark" + e.globalData.autoId);
        a.wxParse("scoreRule", "html", t, this, 5);
    }
});