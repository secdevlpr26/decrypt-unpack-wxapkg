var a = require("../../resource/js/htmlToWxml.js"), t = require("../../resource/js/images.js"), e = getApp();

Page(function(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}({
    data: {
        images: {},
        autoplay: !0,
        interval: 3e3,
        duration: 1e3,
        title: "",
        address: "",
        lat: 0,
        lng: 0,
        showmsg: !0,
        aid: 0,
        pid: 0
    },
    imageLoad: function(a) {
        var e = t.imageUtil(a);
        this.setData({
            imagewidth: e.imageWidth,
            imageheight: e.imageHeight
        });
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: wx.getStorageSync("companyinfo").name
        });
        var i = this;
        if (this.data.aid > 0) n = this.data.aid; else {
            var n = t.id;
            this.data.aid = t.id;
        }
        e.util.request({
            url: "entry/wxapp/getactivedetail",
            data: {
                id: n
            },
            success: function(t) {
                if (!t.data.message.errno) {
                    var e = a.html2json(t.data.data.list.content), n = a.html2json(t.data.data.activeinfo.content);
                    i.data.title = t.data.data.list.housename, i.data.pid = t.data.data.list.id, i.data.address = t.data.data.list.houseaddress, 
                    i.data.lat = t.data.data.list.lat, i.data.lng = t.data.data.list.lng, wx.setNavigationBarTitle({
                        title: i.data.title + "-" + wx.getStorageSync("companyinfo").name
                    }), i.setData({
                        data: t.data.data.list,
                        housepic: t.data.data.housepic,
                        houseplan: t.data.data.houseplan,
                        piclist: t.data.data.piclist,
                        activeinfo: t.data.data.activeinfo,
                        content: e,
                        activDetail: n,
                        showmsg: i.data.showmsg,
                        totalnum: t.data.data.totalnum
                    });
                }
            }
        });
    },
    doBaoming: function(a) {
        this.setData({
            scrollTop: 0,
            showmsg: !1
        });
    },
    closemsg: function(a) {
        this.setData({
            showmsg: !0
        });
    },
    saveuserinfo: function(a) {
        var t = this, i = a.detail.value.name, n = a.detail.value.tel, o = t.data.aid, s = t.data.pid;
        0 != o ? 0 != s ? "" != i ? "" != n ? e.util.request({
            url: "entry/wxapp/savebaoming",
            data: {
                name: i,
                tel: n,
                aid: o,
                pid: s
            },
            success: function(a) {
                if (0 != a.data.errno) return wx.hideLoading(), void wx.showModal({
                    title: "失败",
                    content: a.data.msg,
                    showCancel: !1
                });
                wx.showToast({
                    title: "提交成功",
                    icon: "success",
                    duration: 2e3
                }), t.setData({
                    showmsg: !0,
                    totalnum: a.data.data.totalnum
                });
            }
        }) : wx.showModal({
            title: "提示",
            content: "请填写您的手机号",
            showCancel: !1
        }) : wx.showModal({
            title: "提示",
            content: "请填写您的姓名",
            showCancel: !1
        }) : wx.showModal({
            title: "提示",
            content: "房产ID不存在",
            showCancel: !1
        }) : wx.showModal({
            title: "提示",
            content: "活动ID不存在",
            showCancel: !1
        });
    },
    goMap: function(a) {
        var t = this;
        wx.openLocation({
            latitude: parseFloat(t.data.lat),
            longitude: parseFloat(t.data.lng),
            scale: 18,
            name: t.data.title,
            address: t.data.address
        });
    },
    doCall: function(a) {
        console.log(a.currentTarget);
        var t = a.currentTarget.dataset.tel;
        wx.makePhoneCall({
            phoneNumber: t,
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
        path: "/wurui_house/pages/activedetail/index?id=" + this.data.aid
    };
}));