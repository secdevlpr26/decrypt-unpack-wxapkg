Page({
    data: {},
    onLoad: function(t) {
        this.setData({
            text: t.text,
            path: t.path,
            iconType: "success" == t.type ? "success" : "warn",
            buttonType: "success" == t.type ? "primary" : "warn",
            button: t.button,
            info: t.info,
            nav: t.nav
        });
    },
    navTo: function() {
        "redirectTo" == this.data.nav ? wx.redirectTo({
            url: this.data.path
        }) : "navigateTo" == this.data.nav ? wx.navigateTo({
            url: this.data.path
        }) : "switchTab" == this.data.nav ? wx.switchTab({
            url: this.data.path
        }) : "reLaunch" == this.data.nav && wx.reLaunch({
            url: this.data.path
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