App({
    data: {
        mobile: null,
        lost: "https://api.jiyun58.com"
    },
    globalData: {
        appid: "wx0b252a0ae282167b",
        secret: "9dcef412e99e393dd736e26df3e83f64"
    },
    isOpenId: function() {
        wx.getStorageSync("openid") ? (console.log(wx.getStorageSync("openid")), console.log("有值")) : console.log("没有值");
    },
    onLoad: function() {},
    onLaunch: function() {},
    sq: function() {
        var e = this;
        wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] ? wx.request({
                    url: e.data.lost + "/index/queryUsreInfo",
                    method: "GET",
                    dataType: "html",
                    data: {
                        openid: wx.getStorageSync("openid"),
                        avatarUrl: wx.getStorageSync("userInfo").avatarUrl
                    },
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        var t = JSON.parse(e.data);
                        t.result.at_code ? "1" == t.result.status ? wx.switchTab({
                            url: "/pages/index/index"
                        }) : wx.navigateTo({
                            url: "/pages/frozen/frozen"
                        }) : wx.navigateTo({
                            url: "/pages/activation/activation"
                        });
                    }
                }) : wx.navigateTo({
                    url: "/pages/empower/empower"
                });
            }
        });
    }
});