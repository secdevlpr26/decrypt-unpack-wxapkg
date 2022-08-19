var t = require("../../utils/server");

Page({
    data: {
        banner: [],
        navigation: [],
        goods: [],
        bannerHeight: Math.ceil(290 / 750 * getApp().screenWidth),
        city: "",
        cityid: "",
        value: ""
    },
    showCoupon: function(t) {
        wx.navigateTo({
            url: "../member/coupon/index",
            success: function(t) {},
            fail: function() {},
            complete: function() {}
        });
    },
    showOrder: function(t) {
        wx.navigateTo({
            url: "../order/list/list",
            success: function(t) {},
            fail: function() {},
            complete: function() {}
        });
    },
    showCollect: function(t) {
        wx.navigateTo({
            url: "../member/collect/collect",
            success: function(t) {},
            fail: function() {},
            complete: function() {}
        });
    },
    showMine: function(t) {
        wx.switchTab({
            url: "../member/index/index"
        });
    },
    showSeller: function(t) {
        wx.navigateTo({
            url: "../seller/index",
            success: function(t) {},
            fail: function() {},
            complete: function() {}
        });
    },
    search: function(t) {
        wx.navigateTo({
            url: "../search/index"
        });
    },
    showCarts: function(t) {
        wx.switchTab({
            url: "../cart/cart"
        });
    },
    onLoad: function(a) {
        this.getInviteCode(a);
        var e = getApp();
        e.getOpenId(function() {
            var a = getApp().globalData.openid;
            t.getJSON("/User/validateOpenid", {
                openid: a
            }, function(t) {
                200 == t.data.code ? (getApp().globalData.userInfo = t.data.data, getApp().globalData.login = !0) : "400" == t.data.code && (console.log("need register"), 
                e.register(function() {
                    getApp().globalData.login = !0;
                }));
            });
        });
    },
    onShow: function() {
        var t = wx.getStorageSync("city");
        if (t) {
            var a = this, e = t;
            a.setData({
                city: e
            });
            var n = wx.getStorageSync("cityid");
            a.loadBanner(n);
        } else {
            var o = this;
            wx.getLocation({
                type: "wgs84",
                success: function(t) {
                    var a = t.longitude, e = t.latitude;
                    wx.setStorage({
                        key: "lo",
                        data: a
                    }), wx.setStorage({
                        key: "la",
                        data: e
                    }), o.loadCity(a, e);
                },
                fail: function() {},
                complete: function() {}
            });
        }
    },
    loadCity: function(t, a) {
        var e = this;
        wx.request({
            url: "https://api.map.baidu.com/geocoder/v2/?ak=dUyMHQvp6NTZQwK6dvvHUKsG&location=" + a + "," + t + "&output=json",
            data: {},
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                console.log(t);
                var a = t.data.result.addressComponent.city, n = t.data.result.cityCode;
                wx.setStorage({
                    key: "cityid",
                    data: n
                }), e.loadBanner(n), e.setData({
                    city: a
                });
            },
            fail: function() {},
            complete: function() {}
        });
    },
    getInviteCode: function(t) {
        void 0 != t.uid && wx.showToast({
            title: "来自用户:" + t.uid + "的分享",
            icon: "success",
            duration: 2e3
        });
    },
    loadBanner: function(a) {
        var e = this;
        t.getJSON("/Index/home/cityid/" + a, function(t) {
            var a = t.data.result.ad, n = t.data.result.navigation, o = t.data.result.goods, i = t.data.result.article, c = t.data.ad;
            e.setData({
                banner: a,
                navigation: n,
                goods: o,
                article: i,
                ad: c
            });
        });
    },
    loadMainGoods: function() {
        var t = this, a = new AV.Query("Goods");
        a.equalTo("isHot", !0), a.find().then(function(a) {
            t.setData({
                goods: a
            });
        });
    },
    clickCity: function(t) {
        var a = t.currentTarget.dataset.city;
        wx.setStorage({
            key: "city",
            data: a
        }), wx.redirectTo({
            url: "../switchcity/switchcity"
        });
    },
    clickBanner: function(t) {
        var a = t.currentTarget.dataset.goodsId;
        wx.navigateTo({
            url: "../goods/detail/detail?objectId=" + a
        });
    },
    clickBanners: function(t) {
        var a = t.currentTarget.dataset.navigationId;
        wx.navigateTo({
            url: a
        });
    },
    ada: function(t) {
        var a = t.currentTarget.dataset.ada;
        wx.navigateTo({
            url: a
        });
    },
    adb: function(t) {
        var a = t.currentTarget.dataset.adb;
        wx.navigateTo({
            url: a
        });
    },
    adc: function(t) {
        var a = t.currentTarget.dataset.adc;
        wx.navigateTo({
            url: a
        });
    },
    add: function(t) {
        var a = t.currentTarget.dataset.add;
        wx.navigateTo({
            url: a
        });
    },
    ade: function(t) {
        var a = t.currentTarget.dataset.ade;
        wx.navigateTo({
            url: a
        });
    },
    showDetail: function(t) {
        var a = t.currentTarget.dataset.goodsId;
        wx.navigateTo({
            url: "../goods/detail/detail?objectId=" + a
        });
    },
    showDetails: function(t) {
        var a = t.currentTarget.dataset.articleId;
        wx.navigateTo({
            url: "../article/detail/detail?articleId=" + a
        });
    },
    showCategories: function() {
        wx.switchTab({
            url: "../category/category"
        });
    },
    showGroupList: function() {
        wx.navigateTo({
            url: "../goods/grouplist/list"
        });
    },
    onShareAppMessage: function() {
        return {
            title: "",
            desc: "",
            path: "/pages/index/index"
        };
    }
});