var a = getApp();

Page({
    data: {
        rule: ""
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("scoreRule" + a.globalData.autoId);
        e = a.filterSpecialSymbol(e), this.setData({
            rule: e
        });
    }
});