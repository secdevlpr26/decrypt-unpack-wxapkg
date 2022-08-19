function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var a, n = e(require("../../common/http")), o = e(require("../../utils/util")), s = require("../../utils/constants.js"), i = require("../../common/qqmap-wx-jssdk.min.js"), r = getApp();

console.log("##$$", r.user), Page((a = {
    data: {
        isSearch: !1,
        searchKey: "",
        cardCurrent: 0,
        navList: 0,
        phone: r.user.phone || "未登录",
        logined: r.user.memberId,
        shopCartCount: 0,
        demo: "123\n343",
        address: "",
        isIpx: r.globalData.isIpx
    },
    onLoad: function(e) {
        var t = this;
        e.openPage && this.openPage(e), r.user.openid ? (this.getPageData(), this.setUserData()) : r.userCb = function(e) {
            t.getPageData(), t.setUserData();
        }, this.getAddr();
    },
    onShow: function() {
        this.setData({
            phone: r.user.phone || "未登录"
        });
    },
    setUserData: function() {
        this.setData({
            logined: r.user.memberId,
            phone: r.user.phone || "未登录",
            isIpx: r.globalData.isIpx
        });
    },
    getPageData: function() {
        var e = this;
        n.default.post("/open/auth/wehcat/minprogram/washIndex", {
            openId: r.user.openid
        }, function(t) {
            "0000" == t.data.code ? (e.setData(t.data.data), wx.setNavigationBarTitle({
                title: t.data.data.indexName || "首页"
            })) : o.default.showToast(t.data.message);
        });
    },
    openPage: function(e) {
        var t = e.openPage;
        t && wx.navigateTo({
            url: "/pages/webpage/webpage?openPage=" + t
        });
    },
    toLogin: function() {
        "未登录" == this.data.phone && this.setData({
            isLogin: !0
        });
    },
    onShareAppMessage: function(e) {
        return e.from, {
            title: "邀请好友一起来洗衣",
            path: "/pages/home/home"
        };
    },
    getAddr: function() {
        var e = this;
        wx.getLocation({
            type: "wgs84",
            success: function(t) {
                new i({
                    key: "SMOBZ-CHEC4-AITU5-XC4AS-NESSZ-IUBF5"
                }).reverseGeocoder({
                    location: {
                        latitude: t.latitude,
                        longitude: t.longitude
                    },
                    success: function(t) {
                        var a = t.result.address_component;
                        e.setData({
                            address: a.province + a.city + a.district
                        });
                    },
                    fail: function(e) {
                        o.default.showToast(e.message);
                    }
                });
            }
        });
    }
}, t(a, "toLogin", function() {
    "未登录" == this.data.phone && this.setData({
        isLogin: !0
    });
}), t(a, "jumpServer", function(e) {
    var t = e.currentTarget.dataset.type, a = e.currentTarget.dataset.url;
    1 == t && (a = a.replace(s.API_URL, ""));
    var n = a ? encodeURIComponent(a) : "";
    if (1 == t && wx.navigateTo({
        url: "/pages/webpage/webpage?openPage=" + n
    }), 2 == t) {
        var o = encodeURIComponent(e.currentTarget.dataset.appid);
        wx.navigateToMiniProgram({
            appId: o,
            path: n
        });
    }
}), t(a, "toNav", function(e) {
    if (!r.user.memberId || !r.user.phone) return this.setData({
        isLogin: !0
    }), !1;
    var t = e.currentTarget.dataset.path, a = s.API_URL + encodeURIComponent("/wechat/luByService?serviceName=" + t);
    console.log("首页传过来的是什么", a), wx.navigateTo({
        url: "/pages/webpage/webpage?openPage=" + a
    });
}), t(a, "bannerChange", function(e) {
    this.setData({
        swiperCurrent: e.detail.current
    });
}), t(a, "eventLogin", function(e) {
    e.detail.isLogin && this.setData({
        phone: r.user.phone,
        logined: !0
    });
}), t(a, "getCoupon", function(e) {
    var t = this;
    if (!r.user.memberId || !r.user.phone) return this.setData({
        isLogin: !0
    }), !1;
    var a = e.currentTarget.dataset.cpid;
    n.default.post("/open/auth/wehcat/minprogram/applyCoupon", {
        openId: r.user.openid,
        batchNo: a
    }, function(e) {
        "0000" == e.data.code ? (o.default.showToast(e.data.message || "领取成功"), t.setData({
            couponCount: e.data.data.couponCount
        })) : "0003" == e.data.code ? t.setData({
            isLogin: !0
        }) : o.default.showToast(e.data.message || "领取失败");
    });
}), t(a, "changeRuleShow", function(e) {
    var a = e.currentTarget.dataset.index, n = "listCouponMake[" + a + "].isShow";
    if (!(a < 0)) {
        var o = !this.data.listCouponMake[a].isShow;
        this.setData(t({}, n, o));
    }
}), a));