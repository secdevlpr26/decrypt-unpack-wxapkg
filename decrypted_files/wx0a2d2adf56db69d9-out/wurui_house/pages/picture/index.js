var e = getApp();

Page(function(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}({
    data: {},
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: wx.getStorageSync("shopinfo").name
        });
        var a = t.id, n = this;
        e.util.request({
            url: "entry/wxapp/getlist",
            data: {
                pid: a
            },
            success: function(e) {
                e.data.message.errno || n.setData({
                    services: e.data.data
                });
            }
        });
    },
    tabClick: function(t) {
        var a = t.currentTarget.id, n = this;
        e.util.request({
            url: "entry/wxapp/getsecondlist",
            data: {
                pid: a
            },
            success: function(e) {
                e.data.message.errno || n.setData({
                    article: e.data.data,
                    activeCategoryId: a
                });
            }
        });
    },
    toNewsDetail: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/wurui_house/pages/newsdetail/index?id=" + t
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
}, "onShareAppMessage", function() {
    return {
        title: wx.getStorageSync("shopinfo").name,
        path: "/wurui_house/pages/index/index"
    };
}));