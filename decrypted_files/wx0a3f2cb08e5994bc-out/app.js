App({
    onLaunch: function() {
        var e = this, t = wx.getStorageSync("logs") || [];
        t.unshift(Date.now()), wx.setStorageSync("logs", t), wx.login({
            success: function(e) {}
        }), wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(t) {
                        e.globalData.userInfo = t.userInfo, e.userInfoReadyCallback && e.userInfoReadyCallback(t);
                    }
                });
            }
        });
    },
    globalData: {
        url: "https://cms.zhiweihome.com/apicms/index.php/Index/getwcontent?phone=13045690844",
        weburl: "https://cms.zhiweihome.com/13045690844/",
        appid: "wx0a3f2cb08e5994bc",
        secret: "73a942a7eb4bc771b090b3e6f325772e",
        phone: "13045690844"
    }
});