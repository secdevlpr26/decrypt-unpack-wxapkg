App({
    onLaunch: function() {
        var o = wx.getStorageSync("logs") || [];
        o.unshift(Date.now()), wx.setStorageSync("logs", o);
        var n = this;
        wx.getSetting({
            success: function(o) {
                o.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function(o) {
                        n.globalData.userInfo = o.userInfo, console.log(n.globalData.userInfo);
                    },
                    fail: function() {
                        wx.redirectTo({
                            url: "../../pages/login/index"
                        });
                    }
                }) : wx.redirectTo({
                    url: "../../pages/login/index"
                });
            }
        });
    },
    onShow: function() {},
    onHide: function() {},
    onError: function(o) {},
    util: require("we7/resource/js/util.js"),
    tabBar: {
        color: "#123",
        selectedColor: "#1ba9ba",
        borderStyle: "#1ba9ba",
        backgroundColor: "#fff",
        list: []
    },
    getLocationInfo: function(o) {
        var n = this;
        this.globalData.locationInfo ? o(this.globalData.locationInfo) : wx.getLocation({
            type: "gcj02",
            success: function(t) {
                n.globalData.locationInfo = t, o(n.globalData.locationInfo);
            },
            fail: function() {},
            complete: function() {}
        });
    },
    globalData: {
        userInfo: null,
        appid: "wx0a2d2adf56db69d9",
        appsecret: "f21da8352c31c1a43f1da4f6f3f499a0"
    },
    siteInfo: require("siteinfo.js")
});