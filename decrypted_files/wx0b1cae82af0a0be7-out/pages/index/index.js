function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/api")), i = (t(require("../../utils/token")), t(require("../../common/toast/toast"))), n = getApp();

Page({
    data: {
        banner_images: [],
        firstEnter: !0,
        city: "",
        isShowLogin: !1
    },
    onLoad: function() {},
    onShow: function() {
        var t = this;
        this.determineWhetherToLogin() && wx.getStorageSync("oauthInfo") ? wx.checkSession({
            success: function(e) {
                t.getData();
            },
            fail: function(e) {
                t.setData({
                    isShowLogin: !0
                });
            }
        }) : t.setData({
            isShowLogin: !0
        });
    },
    loginSuccess: function() {
        this.setData({
            isShowLogin: !1
        }), this.determineWhetherToLogin(), this.getData();
    },
    determineWhetherToLogin: function() {
        return this.setData({
            isLogin: !!wx.getStorageSync("token")
        }), this.data.isLogin;
    },
    getData: function() {
        var t = this;
        if (this.data.firstEnter && n.globalData.location) t.initData(n.globalData.location); else {
            if (this.data.firstEnter && !n.globalData.location) return wx.getLocation({
                type: "wgs84",
                success: function(e) {
                    var i = {
                        latitude: e.latitude,
                        longitude: e.longitude
                    };
                    n.globalData.location = i, t.initData(i);
                },
                fail: function(t) {
                    wx.showToast({
                        title: "定位失败，请检查是否开启定位权限",
                        image: "/images/fail.png",
                        duration: 2e3
                    }), wx.openSetting({
                        success: function(t) {}
                    });
                }
            }), void (n.homeInitData = function(e) {
                t.initData(e);
            });
            var e = wx.getStorageSync("gpsCity"), i = wx.getStorageSync("currCity"), a = i || e, o = {
                cityName: i || e
            };
            this.data.city.indexOf(a) > -1 || this.initData(o);
        }
    },
    initData: function(t) {
        var n = this;
        if (t.latitude > 55 || t.latitude < 3) return i.default.show({
            type: "text",
            timer: 1e3,
            text: "定位失败，请检查您的网络"
        }), void setTimeout(function() {
            wx.hideLoading();
        }, 300);
        if (t.longitude > 140 || t.longitude < 70) return i.default.show({
            type: "text",
            timer: 1e3,
            text: "定位失败，请检查您的网络"
        }), void setTimeout(function() {
            wx.hideLoading();
        }, 300);
        wx.showLoading({
            title: "加载中",
            mask: !0
        });
        var a = this;
        e.default.homeData("/main", t).then(function(t) {
            setTimeout(function() {
                wx.hideLoading();
            }, 300), 0 == t.err_code && (n.data.firstEnter && wx.setStorageSync("gpsCity", t.result.currentCity), 
            n.data.firstEnter = !1, wx.setStorageSync("openCitys", t.result.openCitys), a.setData({
                city: t.result.currentCity,
                banner_images: t.result.banners
            }), t.result.menus && t.result.services ? a.setData({
                menuList: t.result.menus.slice(0, 7),
                firstMenu: t.result.menus[0],
                hotServices: t.result.services.result.list
            }) : (i.default.show({
                type: "text",
                timer: 1e3,
                text: "当前城市暂未开通服务, 请选择其他城市"
            }), setTimeout(function() {
                wx.navigateTo({
                    url: "../positionChange/index"
                });
            }, 1e3)));
        }, function(t) {
            setTimeout(function() {
                wx.hideLoading();
            }, 300);
        });
    },
    bannerLink: function(t) {
        var e = t.currentTarget.dataset.id, i = t.currentTarget.dataset.type;
        1 == i ? wx.navigateTo({
            url: "../serveDetail/index?id=" + e
        }) : 2 == i ? wx.navigateTo({
            url: "../servecont/index?id=" + e
        }) : wx.navigateTo({
            url: "../activityDetails/index?id=" + e
        });
    }
});