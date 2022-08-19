var t = getApp();

Page({
    data: {
        customArr: []
    },
    onLoad: function() {
        var a = wx.getStorageSync("customArr" + t.globalData.autoId);
        a.length > 0 && (a = a.reverse()), this.setData({
            customArr: a
        });
    }
});