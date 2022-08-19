App({
    onLaunch: function() {
        var e = this, o = wx.getStorageSync("logs") || [];
        o.unshift(Date.now()), wx.setStorageSync("logs", o), wx.login({
            success: function(o) {
                console.log("wx.login=>"), console.log(o);
                var a = o.code;
                e.loadinfo(a);
            }
        });
    },
    loadinfo: function(e) {
        var o = getApp().globalData.BaseHost, a = getApp().globalData.appid, t = getApp().globalData.secret;
        wx.request({
            url: o + "xs/getWXuserInfoServlet",
            method: "POST",
            data: {
                code: e,
                appid: a,
                secret: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                console.log(e), wx.setStorageSync("openid", e.data.openid);
            }
        });
    },
    globalData: {
        userInfo: null,
        appid: "wx0a38143339d51696",
        secret: "22d38a203a827a21168ee5eac82e075b",
        BaseHost: "https://xcx.hrbrainbow.com/Givee01/"
    }
});