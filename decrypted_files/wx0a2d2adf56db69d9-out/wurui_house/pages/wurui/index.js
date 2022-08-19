require("../../resource/js/htmlToWxml.js");

var t = require("../../resource/wxParse/wxParse.js"), a = getApp();

Page(function(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}({
    data: {
        id: 0,
        title: ""
    },
    imageLoad: function(t) {
        var a = imageUtil.imageUtil(t);
        this.setData({
            imagewidth: a.imageWidth,
            imageheight: a.imageHeight
        });
    },
    onLoad: function(e) {
        if (wx.setNavigationBarTitle({
            title: wx.getStorageSync("companyinfo").name
        }), this.data.id > 0) i = this.data.id; else {
            var i = e.id;
            this.data.id = e.id;
        }
        console.log(i);
        var n = this;
        a.util.request({
            url: "entry/wxapp/getnewsdetail",
            data: {
                id: i
            },
            success: function(a) {
                if (!a.data.message.errno) {
                    n.data.title = a.data.data.title + "-" + wx.getStorageSync("shopinfo").name, wx.setNavigationBarTitle({
                        title: n.data.title
                    }), n.setData({
                        data: a.data.data,
                        content: t.wxParse("article", "html", a.data.data.content, n, 5)
                    });
                }
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.onLoad();
    },
    onReachBottom: function() {
        wx.showNavigationBarLoading(), this.onLoad();
    },
    onShareAppMessage: function() {}
}, "onShareAppMessage", function() {
    return {
        title: this.data.title + "-" + wx.getStorageSync("companyinfo").name,
        path: "/wurui_house/pages/newsdetail/index?id=" + this.data.id
    };
}));