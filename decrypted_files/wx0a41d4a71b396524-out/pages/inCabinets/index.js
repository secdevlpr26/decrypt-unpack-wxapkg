function e(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var t = getApp(), n = require("../../utils/config.js"), a = "", o = new (require("../../utils/qqmap-wx-jssdk.min.js"))({
    key: n.addressPSW
}), i = function(e) {
    wx.getLocation({
        type: "gcj02",
        success: function(n) {
            t.globalData.long = Number(n.longitude), t.globalData.lat = Number(n.latitude), 
            o.reverseGeocoder({
                location: {
                    latitude: Number(n.latitude),
                    longitude: Number(n.longitude)
                },
                success: function(t) {
                    e.setData({
                        address: t.result.address_component.city
                    }), e.getRecentlyCabinet(0, 1);
                },
                fail: function(t) {
                    e.setData({
                        address: "定位失败"
                    });
                }
            });
        },
        fail: function(t) {
            e.setData({
                address: "定位失败"
            });
        }
    });
};

Page({
    data: {
        imgRootPath: n.imgRootPath,
        noCover: "../../images/no_cover.png",
        webType: 0,
        motto: "Hello World",
        userInfo: {},
        hasUserInfo: !1,
        imgUrls: [ "../../images/home_banner.png", "../../images/home_banner.png", "../../images/home_banner.png" ],
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        pageNum: 1,
        distance: "",
        inList: []
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function() {
        console.log(11);
        var e = this;
        i(e), a = wx.getStorageSync("3rdsession"), e.getRecentlyCabinet(0, 1);
    },
    toArticle: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../article/index?id=" + t
        });
    },
    imgError: function(t) {
        var n = "inList[" + t.currentTarget.dataset.index + "].pic1";
        this.setData(e({}, n, "no_cover"));
    },
    getChinese: function(e) {
        var t = /([\u4e00-\u9fa5]|[0-9]|[a-z])/g;
        return e.match(t).join("");
    },
    getRecentlyCabinet: function(e, a) {
        var o = this;
        wx.request({
            url: n.getRecentlyCabinet,
            data: {
                eqId: e,
                page: a,
                long: t.globalData.long,
                lat: t.globalData.lat,
                schoolId: t.globalData.schoolId
            },
            success: function(e) {
                if (wx.hideLoading(), 200 == e.data.type) {
                    var t = e.data.date, n = t.list;
                    if (n.length <= 0) return a > 1 ? (wx.showToast({
                        title: "没有更多了",
                        icon: "none"
                    }), !1) : (o.setData({
                        inList: [],
                        page: 1,
                        info: t.info,
                        distance: (t.info.dist / 1e3).toFixed(2)
                    }), !1);
                    var i = o.data.inList.concat(n);
                    console.log("newList", i);
                    for (var s = 0; s < i.length; s++) i[s].bookintr ? i[s].bookintr = o.getChinese(i[s].bookintr) : i[s].bookintr = "";
                    o.setData({
                        inList: i,
                        info: t.info,
                        distance: (t.info.dist / 1e3).toFixed(2),
                        pageNum: a
                    });
                } else wx.showToast({
                    title: e.data.content,
                    icon: "none"
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    getUserInfo: function(e) {
        t.globalData.userInfo = e.detail.userInfo, this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: !0
        });
    },
    moreAdd: function(e) {
        var t = this;
        wx.navigateTo({
            url: "../address/index?eqId=" + t.data.info.eqId
        });
    },
    onShow: function() {
        var e = this;
        1 == e.data.webType && (e.setData({
            webType: 0,
            pageNum: 1,
            inList: []
        }), e.getRecentlyCabinet(e.data.info.eqId, 1));
    },
    onReachBottom: function() {
        var e = this, t = e.data.pageNum, n = e.data.info.eqId;
        wx.showLoading({
            title: "加载中...",
            mask: !0
        }), e.getRecentlyCabinet(n, t + 1);
    }
});