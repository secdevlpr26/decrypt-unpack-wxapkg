var t = require("../../utils/server");

new (require("../../utils/qqmap-wx-jssdk"))({
    key: "OK3BZ-NDIWX-KWE4R-7UADV-JEKZ5-OCBRX"
});

Page({
    data: {
        banner: [],
        goods: [],
        bannerHeight: Math.ceil(.4 * getApp().screenWidth),
        stores: [],
        store_phone: [],
        navgoods: [],
        app: getApp(),
        switchcity: "",
        width: "25%",
        autoplay: !0,
        interval: 3e3,
        duration: 500
    },
    changeAutoplay: function(t) {
        this.setData({
            autoplay: !this.data.autoplay
        });
    },
    changeInterval: function(t) {
        this.setData({
            interval: !this.data.interval
        });
    },
    changeDuration: function(t) {
        this.setData({
            duration: t.detail.duration
        });
    },
    GotoCart: function(t) {
        var a = t.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    search: function(t) {
        wx.navigateTo({
            url: "../search/index"
        });
    },
    GoMore: function(t) {
        wx.switchTab({
            url: "../seller/index"
        });
    },
    GoJoin: function(t) {
        wx.navigateTo({
            url: "../detail/detail"
        });
    },
    shop: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../seller/shop?id=" + a,
            success: function(t) {},
            fail: function() {},
            complete: function() {}
        });
    },
    gotospecial: function(t) {
        wx.navigateTo({
            url: "../goods/list/list?categoryId=20"
        });
    },
    gotoTuan: function(t) {
        wx.navigateTo({
            url: "../goods/grouplist/list"
        });
    },
    tapGoods: function(t) {
        var a = t.currentTarget.dataset.objectId;
        wx.navigateTo({
            url: "../goods/groupDetail/detail?objectId=" + a
        });
    },
    switchcity: function(t) {
        wx.navigateTo({
            url: "../switchcity/switchcity"
        });
    },
    onLoad: function(a) {
        this.loadBanner(), this.loadSidebar(), this.getLocation(), this.getInviteCode(a);
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
        var o = this;
        t.getJSON("/Store/getStoreList", function(t) {
            var a = t.data;
            o.setData({
                stores: a
            });
        }), t.getJSON("/Store/getOneStores/", function(t) {
            console.log(t);
            var a = t.data.store_phone, e = t.data.store_name;
            o.setData({
                store_phone: a,
                store_name: e
            });
        });
    },
    getLocation: function() {
        var t = this;
        wx.getLocation({
            type: "wgs84",
            success: function(a) {
                var e = a.latitude, o = a.longitude;
                t.loadCity(o, e);
            }
        });
    },
    loadCity: function(t, a) {
        var e = this;
        wx.request({
            url: "https://apis.map.qq.com/ws/geocoder/v1/?location=" + a + "," + t,
            method: "get",
            data: {
                key: "OK3BZ-NDIWX-KWE4R-7UADV-JEKZ5-OCBRX"
            },
            success: function(t) {
                console.log(t);
                var a = t.data.result.address_component.city;
                e.setData({
                    currentCity: a
                }), wx.setStorageSync("city", a);
            },
            fail: function() {
                e.setData({
                    currentCity: "获取定位失败"
                });
            }
        });
    },
    getInviteCode: function(t) {
        void 0 != t.uid && wx.showToast({
            title: "来自用户:" + t.uid + "的分享",
            icon: "success",
            duration: 2e3
        });
    },
    loadBanner: function() {
        var a = this;
        t.getJSON("/Index/home2", function(t) {
            console.log(t);
            var e = t.data.result.ad, o = t.data.result.goods, n = t.data.ad, i = t.data.result.navgoodslist;
            a.setData({
                banner: e,
                goods: o,
                ad: n,
                navgoods: i
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
    onShow: function() {
        var t = wx.getStorageSync("city");
        t && this.setData({
            currentCity: t
        });
    },
    clickBanner: function(t) {
        var a = t.currentTarget.dataset.goodsId;
        wx.navigateTo({
            url: "../goods/detail/detail?objectId=" + a
        });
    },
    clickcate: function(t) {
        var a = t.currentTarget.dataset.cateId;
        wx.navigateTo({
            url: "../goods/list/list?categoryId=" + a
        });
    },
    showDetail: function(t) {
        var a = t.currentTarget.dataset.goodsId;
        wx.navigateTo({
            url: "../goods/detail/detail?objectId=" + a
        });
    },
    sidebarUrl: function(t) {
        var a = t.currentTarget.dataset.url;
        wx.navigateTo({
            url: a,
            success: function() {},
            fail: function() {
                wx.switchTab({
                    url: a
                });
            }
        });
    },
    loadSidebar: function() {
        var a = this;
        t.getJSON("/Wechat/getSidebar", function(t) {
            var e = t.data, o = e.nav_amount;
            o = 100 / o + "%", delete e.nav_amount, console.log(e), a.setData({
                sidebar: e,
                width: o
            });
        });
    },
    onShareAppMessage: function() {},
    get_group_list: function() {
        var a = this;
        t.getJSON("/Activity/group_list", function(t) {
            var e = t.data.result, o = a.data.goods;
            for (var n in e) o.push(e[n]);
            0 == o.length ? a.setData({
                empty: !0
            }) : a.setData({
                empty: !1
            }), wx.stopPullDownRefresh(), a.setData({
                group_list: e
            });
        });
    }
});