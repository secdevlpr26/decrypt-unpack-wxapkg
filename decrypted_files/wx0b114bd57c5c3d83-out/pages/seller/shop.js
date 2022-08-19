var t = require("../../utils/server"), e = getApp();

Page({
    data: {
        store: {},
        banner: [],
        url: e.globalUrl_Host,
        goods: [],
        coupon: [],
        sidebar: [],
        width: "25%",
        store_id: 0
    },
    onLoad: function(t) {
        var e = t.id;
        this.getOneStore(e), this.getCoupon(e), this.loadSidebar(e), this.setDate({
            store_id: e
        });
    },
    getCoupon: function(e) {
        var o = this;
        t.getJSON("/Store/getCoupon/store_id/" + e, function(t) {
            var e = t.data;
            o.setData({
                coupon: e
            });
        });
    },
    getMyCoupon: function(o) {
        wx.showLoading({
            title: "加载中"
        });
        var a = o.currentTarget.dataset.couponId, n = (o.currentTarget.dataset.storeId, 
        o.currentTarget.dataset.couponType, e.globalData.userInfo.user_id);
        t.getJSON("/Store/getMyCoupon/coupon_id/" + a + "/user_id/" + n, function(t) {
            t.data ? (wx.hideLoading(), wx.showToast({
                title: "领取成功",
                icon: "success",
                duration: 1e3
            })) : (wx.hideLoading(), wx.showToast({
                title: "领取失败",
                icon: "loading",
                duration: 1e3
            }));
        });
    },
    getOneStore: function(e) {
        var o = this;
        t.getJSON("/Store/getOneStores/sum/6/store_id/" + e, function(t) {
            var e = t.data, a = t.data.store_slide.split(","), n = t.data.goods_list;
            wx.setNavigationBarTitle({
                title: e.store_name
            }), o.setData({
                store: e,
                banner: a,
                goods: n
            });
        });
    },
    tellPhone: function(t) {
        var e = t.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    tapGoods: function(t) {
        var e = t.currentTarget.dataset.objectId, o = t.currentTarget.dataset.storeTitle;
        wx.navigateTo({
            url: "../goods/detail/detail?storeTitle=" + o + "&objectId=" + e
        });
    },
    viewMap: function() {
        var t = this;
        wx.getLocation({
            type: "gcj02",
            success: function(e) {
                var o = e.latitude, a = e.longitude, n = (e.speed, e.accuracy, parseFloat(t.data.store.store_lat)), r = parseFloat(t.data.store.store_lng), s = t.data.store.store_address;
                0 != n && 0 != r ? (console.log(n + "---" + r), wx.openLocation({
                    latitude: n,
                    longitude: r,
                    address: s,
                    scale: 28
                })) : wx.openLocation({
                    latitude: o,
                    longitude: a,
                    scale: 28
                });
            }
        });
    },
    goods: function(t) {
        var e = t.currentTarget.dataset.id, o = t.currentTarget.dataset.storeTitle;
        wx.navigateTo({
            url: "goods?id=" + e + "&storeTitle=" + o,
            success: function(t) {},
            fail: function() {},
            complete: function() {}
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    loadSidebar: function(e) {
        var o = this;
        t.getJSON("/Store/getNavs/store_id/" + e, function(t) {
            var a = t.data;
            delete a.nav_amount, console.log(1);
            for (var n in a) a[n].sn_url && (a[n].sn_url = a[n].sn_url + "/store_id/" + e);
            o.setData({
                sidebar: a,
                width: 100 / parseInt(a.nav_amount) + "%"
            });
        });
    },
    sidebarUrl: function(t) {
        var e = t.currentTarget.dataset.url;
        wx.navigateTo({
            url: e,
            success: function() {},
            fail: function() {
                wx.switchTab({
                    url: e
                });
            }
        });
    }
});