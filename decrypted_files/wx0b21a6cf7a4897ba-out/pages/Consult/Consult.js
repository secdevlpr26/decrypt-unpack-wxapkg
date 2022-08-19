var e = getApp();

Page({
    data: {
        iconimg: {
            consult_bg: "../../images/consult_bg.png",
            zx_zxyy: "../../images/zx_zxyy@2x.png",
            zx_lyzx: "../../images/zx_lyzx@2x.png",
            zx_fuzx: "../../images/zx_fuzx@2x.png",
            zx_dhyy: "../../images/zx_dhyy@2x.png",
            tuijian: "../../images/tuijian@2x.png"
        },
        imageH: 320,
        imageW: 710,
        price: "",
        nickName: "",
        loading: !1,
        tel: "",
        serverTime: "",
        haveFreeConsult: !1
    },
    onLoad: function(a) {
        var i = this;
        wx.getSystemInfo({
            success: function(e) {
                var a = e.windowWidth;
                i.setData({
                    imageW: a - 30,
                    imageH: 320 * a / 710
                });
            }
        }), this.setData({
            haveFreeConsult: e.globalData.haveFreeConsult
        }), this.loginevent(), this.getPrice(), this.getInfo();
    },
    onPullDownRefresh: function() {
        this.getPrice(), this.getInfo();
    },
    loginevent: function() {
        if (!e.globalData.userInfo && 0 == this.data.loading) {
            var a = this;
            a.setData({
                loading: !0
            }), wx.showNavigationBarLoading(), e.getUserInfo(function(e) {
                a.setData({
                    loading: !1
                }), wx.hideNavigationBarLoading();
            }, function(e) {
                a.setData({
                    loading: !1
                }), wx.hideNavigationBarLoading();
            });
        }
    },
    getInfo: function() {
        var a = this;
        e.apiRequestGet({
            urlMethod: "api/Users/getUserInfo",
            data: {},
            success: function(e) {
                a.setData({
                    tel: e.data.tel.split(" ")[0].split(",")[0],
                    serverTime: e.data.serverTime
                }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
            },
            fail: function(e) {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
            }
        });
    },
    getPrice: function() {
        wx.showNavigationBarLoading();
        var a = this;
        e.apiRequestGet({
            urlMethod: "api/Question/getPrice",
            data: {},
            success: function(e) {
                a.setData({
                    price: e.data.price
                }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
            },
            fail: function(e) {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
            }
        });
    },
    showOnlineReservation: function(a) {
        e.globalData.userInfo ? wx.navigateTo({
            url: "../OnlineReservation/OnlineReservation"
        }) : wx.showModal({
            title: "提示",
            content: "请先授权登录",
            showCancel: !1,
            confirmText: "好的"
        });
    },
    showPaidAdvice: function(a) {
        e.globalData.userInfo ? wx.navigateTo({
            url: "../PaidAdvice/PaidAdvice"
        }) : wx.showModal({
            title: "提示",
            content: "请先授权登录",
            showCancel: !1,
            confirmText: "好的"
        });
    },
    showMessageAdvice: function(a) {
        e.globalData.userInfo ? wx.navigateTo({
            url: "../MessageAdvice/MessageAdvice"
        }) : wx.showModal({
            title: "提示",
            content: "请先授权登录",
            showCancel: !1,
            confirmText: "好的"
        });
    },
    callClick: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.tel,
            success: function() {},
            fail: function() {}
        });
    }
});