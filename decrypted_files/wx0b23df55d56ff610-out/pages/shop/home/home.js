var e = require("../../../utils/server");

Page({
    data: {
        isShow: !1,
        pageName: "home",
        hasLogin: !1,
        indicatorDots: !1,
        vertical: !1,
        autoplay: !0,
        interval: 3e3,
        duration: 500,
        active_color: "#ffffff",
        userInfo: {},
        bannerList: [],
        hotFixList: {},
        selectedDevice: {},
        showRefresher: !1,
        goToChooseDevice: !0,
        bannerOk: !1,
        faultOk: !1,
        hotFixOk: !1,
        bannerActive: 0,
        listBox: []
    },
    selectPhone: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../details/details?objectId=" + t
        });
    },
    onLoad: function(t) {
        this.setData({
            showRefresher: !1
        }), wx.startAccelerometer(function(e) {
            console.log(e);
        }, function(e) {
            console.log(e);
        }), wx.showLoading || wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法正常使用小程序，请升级到最新微信版本后重试。",
            complete: function() {
                wx.navigateBack();
            }
        }), wx.showNavigationBarLoading(), wx.showLoading({
            title: "加载中",
            mask: !0
        });
        var o = this;
        e.getJSON("/Index/shome", function(e) {
            var t = e.data.result.ad;
            wx.hideLoading(), wx.hideNavigationBarLoading(), o.setData({
                banner: t
            });
        }), e.getJSON("/Index/hot", function(e) {
            var t = e.data.goods_category;
            o.setData({
                hots: e.data.hot,
                categorys: t
            }), wx.hideLoading(), wx.hideNavigationBarLoading(), o.setData({
                isShow: !0
            });
        });
        var a = getApp();
        a.getOpenId(function() {
            var t = getApp().globalData.openid;
            e.getJSON("/User/validateOpenid", {
                openid: t
            }, function(e) {
                200 == e.data.code ? getApp().globalData.userInfo = e.data.data : "400" == e.data.code && (console.log("need register"), 
                a.register(function() {}));
            });
        });
    },
    onReady: function() {},
    service: function(e) {
        var t = e.currentTarget.dataset.index, o = this.data.categorys[t].id;
        wx.navigateTo({
            url: "../chooseDevice/chooseDevice?id=" + o
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});