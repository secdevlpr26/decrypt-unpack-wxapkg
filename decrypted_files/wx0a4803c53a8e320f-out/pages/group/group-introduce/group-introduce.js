var a = getApp();

Page({
    data: {
        detail: ""
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("groupRemark" + a.globalData.autoId);
        e = a.filterSpecialSymbol(e), this.setData({
            detail: e
        });
    }
});