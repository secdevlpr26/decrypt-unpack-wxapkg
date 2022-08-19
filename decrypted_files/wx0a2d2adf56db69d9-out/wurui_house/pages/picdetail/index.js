var t = require("../../resource/js/htmlToWxml.js"), a = getApp();

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
        typeid: 0,
        title: ""
    },
    onLoad: function(e) {
        if (wx.setNavigationBarTitle({
            title: wx.getStorageSync("shopinfo").name
        }), this.data.id > 0) var i = this.data.id, n = this.data.typeid; else {
            i = e.id;
            this.data.id = e.id;
            n = e.typeid;
            this.data.typeid = e.typeid;
        }
        var o = this;
        a.util.request({
            url: "entry/wxapp/getpicdetail",
            data: {
                id: i,
                typeid: n
            },
            success: function(a) {
                if (!a.data.message.errno) {
                    var e;
                    e = t.html2json(a.data.data.content), o.data.title = a.data.data.title + "-" + wx.getStorageSync("shopinfo").name, 
                    wx.setNavigationBarTitle({
                        title: o.data.title
                    }), o.setData({
                        data: a.data.data,
                        content: e
                    });
                }
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    toTeamDetail: function(t) {
        var a = t.currentTarget.dataset.id;
        console.log(a), wx.navigateTo({
            url: "/house_001/pages/teamdetail/index?id=" + a
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
        title: this.data.title,
        path: "/wurui_house/pages/index/index"
    };
}));