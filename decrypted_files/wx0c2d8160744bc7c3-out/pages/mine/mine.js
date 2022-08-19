Page({
    data: {
        totalPoint: 0
    },
    onLoad: function(t) {
        this.setData({
            userInfo: getApp().globalData.userInfo,
            auth: getApp().globalData.auth,
            totalPoint: getApp().globalData.totalPoint
        });
    },
    onShow: function(t) {
        this.setData({
            totalPoint: getApp().globalData.totalPoint
        });
    },
    goPage: function(t) {
        wx.navigateTo({
            url: "auth/auth"
        });
    }
});