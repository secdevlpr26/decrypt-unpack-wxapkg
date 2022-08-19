var n = require("../../resource/js/htmlToWxml.js"), o = getApp();

Page(function(n, o, e) {
    return o in n ? Object.defineProperty(n, o, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[o] = e, n;
}({
    data: {},
    onLoad: function(e) {
        wx.setNavigationBarTitle({
            title: wx.getStorageSync("companyinfo").name
        });
        var a = e.id;
        console.log(a);
        var t = this;
        o.util.request({
            url: "entry/wxapp/getcasedetail",
            data: {
                id: a
            },
            success: function(o) {
                if (!o.data.message.errno) {
                    var e;
                    e = n.html2json(o.data.data.content), t.setData({
                        data: o.data.data,
                        content: e
                    });
                }
            },
            complete: function() {
                console.log("ok"), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        console.log("pull"), wx.showNavigationBarLoading(), this.onLoad();
    },
    onReachBottom: function() {
        console.log("pull"), wx.showNavigationBarLoading(), this.onLoad();
    },
    onShareAppMessage: function() {}
}, "onShareAppMessage", function() {
    return {
        title: wx.getStorageSync("companyinfo").name,
        path: "/wurui_house/pages/index/index"
    };
}));