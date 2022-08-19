function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a = require("../../resource/js/htmlToWxml.js"), e = require("../../resource/js/images.js"), i = getApp();

Page(t({
    data: t({
        images: {},
        autoplay: !0,
        interval: 3e3,
        duration: 1e3,
        title: "",
        address: "",
        lat: 0,
        lng: 0,
        id: 0
    }, "title", ""),
    imageLoad: function(t) {
        var a = e.imageUtil(t);
        this.setData({
            imagewidth: a.imageWidth,
            imageheight: a.imageHeight
        });
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: wx.getStorageSync("companyinfo").name
        });
        var e = this;
        if (this.data.id > 0) n = this.data.id; else {
            var n = t.id;
            this.data.id = t.id;
        }
        i.util.request({
            url: "entry/wxapp/getsaledetail",
            data: {
                id: n
            },
            success: function(t) {
                if (!t.data.message.errno) {
                    var i = a.html2json(t.data.data.list.content);
                    wx.setNavigationBarTitle({
                        title: t.data.data.list.content + "-" + wx.getStorageSync("companyinfo").name
                    }), e.setData({
                        list: t.data.data.list,
                        piclist: t.data.data.piclist,
                        content: i
                    });
                }
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    goMap: function(t) {
        var a = this;
        wx.openLocation({
            latitude: parseFloat(a.data.lat),
            longitude: parseFloat(a.data.lng),
            scale: 18,
            name: a.data.title,
            address: a.data.address
        });
    },
    doCall: function(t) {
        console.log(t.currentTarget);
        var a = t.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: a,
            success: function() {
                console.log("拨打电话成功！");
            },
            fail: function() {
                console.log("拨打电话失败！");
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
    onReachBottom: function() {},
    onShareAppMessage: function() {}
}, "onShareAppMessage", function() {
    return {
        title: this.data.title + "-" + wx.getStorageSync("companyinfo").name,
        path: "/wurui_house/pages/newhousedetail/index?id=" + this.data.id
    };
}));