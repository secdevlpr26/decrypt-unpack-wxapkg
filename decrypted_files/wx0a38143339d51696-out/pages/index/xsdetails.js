Page({
    data: {
        xsinfo: {}
    },
    onLoad: function(n) {
        this.addUserInter(n.id), this.loadXSinfo(n.id);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    addUserInter: function(n) {
        var o = getApp().globalData.BaseHost, t = getApp().globalData.appid;
        wx.request({
            url: o + "xs/addXSUserInterfaceServlet",
            method: "POST",
            data: {
                appid: t,
                xsid: n,
                openid: wx.getStorageSync("openid")
            },
            header: {
                "content-type": "application/json"
            },
            success: function(n) {
                console.log(n);
            }
        });
    },
    loadXSinfo: function(n) {
        var o = this, t = getApp().globalData.BaseHost;
        wx.request({
            url: t + "xs/getXSByidServlet",
            method: "POST",
            data: {
                id: n
            },
            header: {
                "content-type": "application/json"
            },
            success: function(n) {
                console.log(n), o.setData({
                    xsinfo: n.data[0]
                });
            }
        });
    }
});