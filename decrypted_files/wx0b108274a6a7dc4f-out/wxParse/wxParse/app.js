App({
    onLaunch: function() {
        var s = wx.getStorageSync("logs") || [];
        s.unshift(Date.now()), wx.setStorageSync("logs", s);
    },
    getUserInfo: function(s) {
        var o = this;
        wx.chooseAddress({
            success: function(s) {
                o.globalData.userInfo = s;
            }
        });
    },
    globalData: {
        userInfo: null,
        imageUrls: [],
        chooseAddress: ""
    }
});