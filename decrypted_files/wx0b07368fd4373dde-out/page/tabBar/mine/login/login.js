var t = getApp();

Page({
    data: {
        photo_url: t.globalData.fileimg,
        loading: !1,
        typestatus: "login"
    },
    getUserInfo: function(n) {
        var o = this, a = this;
        "getUserInfo:ok" == n.detail.errMsg && wx.getSetting({
            success: function(e) {
                1 == e.authSetting["scope.userInfo"] && t.userLogin(n.detail, {
                    success: function() {
                        o.setData({
                            typestatus: "location",
                            loading: !1
                        }), a.data.id ? wx.redirectTo({
                            url: a.data.urls + "?id=" + a.data.id
                        }) : wx.redirectTo({
                            url: a.data.urls
                        });
                    }
                });
            }
        });
    },
    success: function() {
        wx.reLaunch({
            url: t.globalData.pages.index,
            success: function() {}
        });
    },
    onLoad: function(t) {
        var n = this;
        t.id ? n.setData({
            urls: t.url,
            id: t.id
        }) : n.setData({
            urls: t.url
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