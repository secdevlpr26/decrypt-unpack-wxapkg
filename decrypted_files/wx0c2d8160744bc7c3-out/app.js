App({
    globalData: {
        domain: "https://www.xinwangzn.com/api",
        userInfo: null,
        userId: "no",
        totalPoint: 0,
        auth: !1
    },
    onLaunch: function() {
        this.getUserInfo();
    },
    onShow: function() {},
    onHide: function() {},
    getUserInfo: function(n) {
        var o = this;
        wx.getUserInfo({
            success: function(t) {
                o.globalData.userInfo = t.userInfo, "function" == typeof n && n(o.globalData.userInfo);
            }
        });
    }
});