var t = getApp();

Page({
    data: {
        imgUrls: [ "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" ],
        hidden: !0,
        nocancel: !1,
        info: "",
        surekey: "",
        indicatorDots: !0,
        autoplay: !1,
        interval: 5e3,
        duration: 1e3,
        userInfo: null
    },
    showmodal: function() {
        this.setData({
            hidden: !1
        });
    },
    cancel: function() {
        this.setData({
            hidden: !0
        });
    },
    confirm: function() {
        wx.request({
            url: "https://open.flames-tech.cn/plugin/cusReport-api/stock-ok",
            data: {
                key: this.data.surekey
            },
            header: {
                token: t.globalData.token
            },
            success: function(t) {
                console.log(t), 1 == t.data.state && console.log(t);
            },
            fail: function(t) {
                console.log(t);
            }
        }), this.setData({
            nocancel: !this.data.nocancel,
            hidden: !0
        }), wx.switchTab({
            url: "/pages/index/index"
        });
    },
    changeAutoplay: function(t) {
        this.setData({
            autoplay: !this.data.autoplay
        });
    },
    onLoad: function(a) {
        var e = this;
        console.log("sureonload"), console.log(a);
        var o = a.id, n = a.openid;
        a.page;
        n && n.length > 0 ? wx.request({
            url: "https://open.flames-tech.cn/plugin/cusReport-api/stock-detail",
            data: {
                key: o
            },
            header: {
                token: t.globalData.token
            },
            success: function(t) {
                1 == t.data.state && t.data.info && (console.log(t), e.setData({
                    info: t.data.info,
                    surekey: o
                }));
            },
            fail: function(t) {
                console.log(t);
            }
        }) : wx.redirectTo({
            url: "/pages/login/login?id=" + o
        });
    },
    intervalChange: function(t) {
        this.setData({
            interval: t.detail.value
        });
    },
    durationChange: function(t) {
        this.setData({
            duration: t.detail.value
        });
    }
});