var t = require("../../template-cart/template-navbar/template-navbar.js"), a = (require("../../../utils/util.js"), 
getApp());

Page({
    data: {
        navbar: {
            list: [ "信息", "店铺" ],
            val: [ "info", "shop" ],
            current: 0
        },
        info: []
    },
    todetail: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/index/detail/detail?vid=" + a
        });
    },
    navbarTap: function(a) {
        var e = this;
        t.tap(this, a, function(t) {
            e.data.info[t] || e.getDetailList(!0);
        });
    },
    navbarChange: function(a) {
        var e = this;
        t.change(this, a, function(t) {
            e.data.info[t] || e.getDetailList(!0);
        });
    },
    infoEdit: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/index/publish/publish?vid=" + a
        });
    },
    infoRef: function(t) {
        var a = t.currentTarget.dataset.id;
        this.infoDeal(a, 1);
    },
    infoClose: function(t) {
        var a = t.currentTarget.dataset.id;
        this.infoDeal(a, 2);
    },
    infoOpen: function(t) {
        var a = t.currentTarget.dataset.id;
        this.infoDeal(a, 3);
    },
    infoDeal: function(t, e) {
        wx.request({
            url: a.globalData.url + a.globalData.parameter + "&do=my_collect",
            data: {
                type: "info"
            },
            header: {
                Cookie: a.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(t) {
                1 == t.data.status && wx.startPullDownRefresh(), wx.showToast({
                    title: t.data.result.message
                });
            },
            fail: function() {
                wx.showModal({
                    title: "提示",
                    content: "网络连接失败，请稍后重试"
                });
            }
        });
    },
    infoDel: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.showModal({
            title: "提示",
            content: "是否删除此条信息？",
            success: function(t) {
                t.confirm && wx.request({
                    url: a.globalData.url + a.globalData.parameter + "&do=info_del",
                    data: {
                        vid: e
                    },
                    header: {
                        Cookie: a.globalData.session_login_id,
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success: function(t) {
                        1 == t.data.status && wx.startPullDownRefresh(), wx.showToast({
                            title: t.data.result.message
                        });
                    },
                    fail: function() {
                        wx.showModal({
                            title: "提示",
                            content: "网络连接失败，请稍后重试"
                        });
                    }
                });
            }
        });
    },
    getDetailList: function(t) {
        if (a.globalData.session_login_id) {
            var e = this, n = e.data.navbar.current, o = e.data.navbar.val[n], i = e.data.info, l = i[n] = i[n] ? i[n] : {};
            l.page = t ? 0 : l.page, l.list = t ? [] : l.list, l.end && !t || (l.loadState = 0, 
            e.setData({
                info: i
            }), wx.request({
                url: a.globalData.url + a.globalData.parameter + "&do=my_collect",
                data: {
                    type: o,
                    lat: wx.getStorageSync("location").lat,
                    lng: wx.getStorageSync("location").lng,
                    page: l.page + 1,
                    psize: 10
                },
                header: {
                    Cookie: a.globalData.session_login_id,
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    if (1 == t.data.status) {
                        var a = void 0;
                        "info" == o ? a = e.infoOption(t.data.result.info) : "shop" == o && (a = e.shopOption(t.data.result.info)), 
                        l.list = l.list.concat(a), l.end = !a.length, ++l.page, l.loadState = l.end ? 2 : 1, 
                        e.setData({
                            info: i
                        });
                    }
                },
                fail: function() {
                    l.loadState = 3, e.setData({
                        info: i
                    });
                },
                complete: function() {
                    wx.stopPullDownRefresh();
                }
            }));
        }
    },
    tomerchdetail: function(t) {
        var a = t.currentTarget.dataset.vid, e = t.currentTarget.dataset.pid;
        2 == e ? wx.showModal({
            title: "提示",
            content: "商铺审核中，无法查看",
            showCancel: !1
        }) : 1 == e ? wx.showModal({
            title: "提示",
            content: "商铺已下架，无法查看",
            showCancel: !1
        }) : wx.navigateTo({
            url: "/pages/merch/merch-detail/merch-detail?vid=" + a
        });
    },
    shopOption: function(t) {
        return t || (t = []), t;
    },
    infoOption: function(t) {
        return t ? t.forEach(function(t, a, e) {
            var n = [ t.getgaptime, t.info_time ];
            t.info_time = n[0], t.getgaptime = n[1];
        }) : t = [], t;
    },
    onLoad: function(a) {
        var e = this;
        t.init(this, function() {
            e.navbarChange(a.tab);
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.getDetailList(!0);
    },
    onReachBottom: function() {
        this.getDetailList();
    },
    onShareAppMessage: function() {}
});