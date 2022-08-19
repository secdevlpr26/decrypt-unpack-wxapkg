require("../../utils/util.js"), getApp(), require("../../config.js");

Page({
    data: {
        serverUrl: "http://skyforest.static.elab-plus.com/wepy_pro/v1-2/",
        serverNewUrl: "https://dm.static.elab-plus.com/tn/",
        jbColor1: " #6294A6",
        jbColor2: "#3B4B81",
        shade1: "rgba(39,42,52,0.00)",
        shade2: "#272A34",
        defaultImagePath: "../../image/wepy_pro/loading1.gif",
        defaultImagePath1: "https://dm.static.elab-plus.com/tn/12@2x.jpg",
        healthList: [ "国医预约", "健康管理", "度假康养", "车辆服务", "角色体验" ],
        imgUrls: [ {
            url: "qwe2.gif",
            loadComplete: !1
        }, {
            url: "qwe3.gif",
            loadComplete: !1
        } ],
        bannerUrls: [ {
            url: "国医预约@2x.jpg",
            loadComplete: !1,
            imgheights: ""
        }, {
            url: "健康管理@2x.jpg",
            loadComplete: !1,
            imgheights: ""
        }, {
            url: "度假康养@2x1.jpg",
            loadComplete: !1,
            imgheights: ""
        }, {
            url: "车辆服务@2x.jpg",
            loadComplete: !1,
            imgheights: ""
        }, {
            url: "角色体验.jpg",
            loadComplete: !1,
            imgheights: ""
        } ],
        current: 0,
        x: 0
    },
    load: function(t) {
        this.data.imgUrls[t.currentTarget.dataset.index].loadComplete = !0, this.setData({
            imgUrls: this.data.imgUrls
        });
    },
    load1: function(t) {
        this.data.bannerUrls[t.currentTarget.dataset.index].loadComplete = !0, this.setData({
            bannerUrls: this.data.bannerUrls
        });
        var e = 750 / (t.detail.width / (e = t.detail.height));
        this.data.imgheights;
        this.data.bannerUrls[t.currentTarget.dataset.index].imgheights = e, this.setData({
            bannerUrls: this.data.bannerUrls
        });
    },
    change: function(t) {
        if ("touch" != t.detail.source) return !1;
        var e = this.data.x;
        if (console.log(this.data.x, this.data.current, t.detail.current), this.data.current < t.detail.current) (r = (a = 176 * (t.detail.current + 1)) - 750) > 0 && (e = -r + "rpx"); else if (this.data.current > t.detail.current) {
            var a = 176 * t.detail.current, r = Math.abs(parseInt(e));
            a < r && (e = -a + "rpx");
        }
        this.setData({
            current: t.detail.current,
            x: e
        });
    },
    goWebview: function(t) {
        t.currentTarget.dataset.jump && wx.navigateTo({
            url: "../webView/webView?view=" + encodeURIComponent(t.currentTarget.dataset.jump) + "&title=" + t.currentTarget.dataset.title,
            success: function() {},
            fail: function(t) {
                console.log(t);
            }
        });
    },
    checkout: function(t) {
        var e = this.data.x;
        if (console.log(this.data.x, this.data.current, t.detail.current), this.data.current < t.currentTarget.dataset.num) (r = (a = 176 * (t.currentTarget.dataset.num + 1)) - 750) > 0 && (e = -r + "rpx"); else if (this.data.current > t.currentTarget.dataset.num) {
            var a = 176 * t.currentTarget.dataset.num, r = Math.abs(parseInt(e));
            a < r && (e = -a + "rpx");
        }
        this.setData({
            current: t.currentTarget.dataset.num,
            x: e
        });
    },
    onShow: function(t) {},
    onReady: function() {
        wx.setNavigationBarTitle({
            title: "康养中心"
        });
    },
    onUnload: function() {},
    onHide: function() {},
    onLoad: function(t) {
        wx.hideLoading();
    }
});