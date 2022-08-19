Page({
    data: {},
    onLoad: function(n) {
        var o = getApp().globalData.userInfo;
        this.setData({
            userInfo: o
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});