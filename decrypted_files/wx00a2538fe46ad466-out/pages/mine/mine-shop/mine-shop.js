var t = require("../../template-cart/template-navbar/template-navbar.js"), a = (require("../../../utils/util.js"), 
getApp());

Page({
    data: {
        shop: {}
    },
    tomerchdetail: function(t) {
        var a = t.currentTarget.dataset.vid, e = t.currentTarget.dataset.pid;
        2 == e && wx.showModal({
            title: "提示",
            content: "商铺审核中，无法查看",
            showCancel: !1
        }), 1 == e ? wx.showModal({
            title: "提示",
            content: "商铺已下架，无法查看",
            showCancel: !1
        }) : wx.navigateTo({
            url: "/pages/merch/merch-detail/merch-detail?vid=" + a
        });
    },
    navbarTap: function(a) {
        var e = this;
        t.tap(this, a, function(t) {
            e.data.shop[t] || e.getDetailList(!0);
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
            url: a.globalData.url + a.globalData.parameter + "&do=shop_deal",
            data: {
                shop_id: t,
                type: e
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
            content: "是否删除此商铺？",
            success: function(t) {
                t.confirm && wx.request({
                    url: a.globalData.url + a.globalData.parameter + "&do=shop_del",
                    data: {
                        shop_id: e
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
        var e = this, o = e.data.shop;
        o.page = t ? 0 : o.page, o.list = t ? [] : o.list, o.end && !t || (o.loadState = 0, 
        e.setData({
            shop: o
        }), wx.request({
            url: a.globalData.url + a.globalData.parameter,
            data: {
                do: "shop_my",
                page: o.page + 1,
                psize: 10
            },
            header: {
                Cookie: a.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                if (1 == t.data.status) {
                    var n = t.data.result.shop;
                    n.forEach(function(t, e, o) {
                        t.shop_pic_small = a.globalData.imgurl + t.shop_pic_small;
                    }), o.list = o.list.concat(n), o.end = !n.length, ++o.page, o.loadState = o.end ? 2 : 1, 
                    e.setData({
                        shop: o
                    });
                }
            },
            fail: function() {
                o.loadState = 3, e.setData({
                    shop: o
                });
            },
            complete: function() {
                wx.stopPullDownRefresh();
            }
        }));
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        this.getDetailList(!0);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.getDetailList(!0);
    },
    onReachBottom: function() {
        this.getDetailList();
    }
});