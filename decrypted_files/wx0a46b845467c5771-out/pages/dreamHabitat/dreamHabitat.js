require("../../utils/util.js");

var t = getApp();

require("../../config.js");

Page({
    data: {
        dreamList: [ "田居", "禅居", "林居", "溪居", "亲子中心", "共享农庄" ],
        imgList: [ {
            url: "https://dm.static.elab-plus.com/tn/tj.jpg",
            cover: "https://dm.static.elab-plus.com/tn/tj_gif.gif",
            load: !1
        }, {
            url: "https://dm.static.elab-plus.com/tn/cj.jpg",
            cover: "https://dm.static.elab-plus.com/tn/cj_gif.gif",
            load: !1
        }, {
            url: "https://dm.static.elab-plus.com/tn/lj.jpg",
            cover: "https://dm.static.elab-plus.com/tn/lj_gif.gif",
            load: !1
        }, {
            url: "https://dm.static.elab-plus.com/tn/xj.jpg",
            cover: "https://dm.static.elab-plus.com/tn/xj_gif.gif",
            load: !1
        }, {
            url: "https://dm.static.elab-plus.com/tn/qzzx2.jpg",
            cover: "https://dm.static.elab-plus.com/tn/qzzx_gif.gif",
            load: !1
        }, {
            url: "https://dm.static.elab-plus.com/tn/gxrz1.jpg",
            cover: "https://dm.static.elab-plus.com/tn/gxrz_gif.gif",
            load: !1
        } ],
        serverUrl: "http://skyforest.static.elab-plus.com/wepy_pro/v1-2/",
        jbColor1: " #6294A6",
        jbColor2: "#3B4B81",
        shade1: "rgba(39,42,52,0.00)",
        shade2: "#272A34",
        current: 0,
        imgheights: [],
        canRemove: !0,
        overflow: "auto"
    },
    onShareAppMessage: function(a) {
        return {
            title: "泰宁养生现代村落",
            path: "/pages/dreamHabitat/houseType?shareToken=" + t.globalData.shareToken
        };
    },
    switch: function(t) {
        this.setData({
            current: t.currentTarget.dataset.index
        }), console.log(this.data.current);
    },
    catchTouchMove: function(t) {
        console.log("***catchTouchMove***", this.data.canRemove, t);
    },
    switchImg: function(t) {
        console.log(t.detail.source), "touch" == t.detail.source && this.setData({
            current: t.detail.current
        }), console.log(this.data.current);
    },
    animationfinish: function(t) {
        console.log(t), this.data.canRemove = !0;
    },
    onShow: function(t) {
        wx.hideLoading();
    },
    load: function(t) {
        this.data.imgList[t.currentTarget.dataset.index].load = !0;
        var a = t.detail.width, e = a / (o = t.detail.height);
        console.log(a, o);
        var o = 750 / e, i = this.data.imgheights;
        i[t.currentTarget.dataset.index] = o, this.setData({
            imgheights: i
        }), console.log(this.data.imgheights);
    },
    onReady: function() {
        wx.setNavigationBarTitle({
            title: "现代村落"
        });
    },
    onUnload: function() {},
    onHide: function() {},
    onLoad: function(t) {}
});