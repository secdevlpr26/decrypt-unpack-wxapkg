var t = require("../../template-cart/template-navbar/template-navbar.js"), a = (require("../../../utils/util.js"), 
getApp());

Page({
    data: {
        navbar: {
            list: [ "全部", "回收站", "已结束", "待审核", "展示中" ],
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
            url: a.globalData.url + a.globalData.parameter + "&do=deal",
            data: {
                info_id: t,
                type: e
            },
            header: {
                Cookie: a.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(t) {
                1 == t.data.status && wx.startPullDownRefresh(), wx.showModal({
                    title: "提示",
                    content: t.data.result.message,
                    showCancel: !1
                });
            },
            fail: function() {
                wx.showModal({
                    title: "提示",
                    content: "网络连接失败，请稍后重试",
                    showCancel: !1
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
                        1 == t.data.status && wx.startPullDownRefresh(), wx.showModal({
                            title: "提示",
                            content: t.data.result.message,
                            showCancel: !1
                        });
                    },
                    fail: function() {
                        wx.showModal({
                            title: "提示",
                            content: "网络连接失败，请稍后重试",
                            showCancel: !1
                        });
                    }
                });
            }
        });
    },
    getDetailList: function(t) {
        if (a.globalData.session_login_id) {
            var e = this, n = e.data.navbar.current, i = e.data.info, o = i[n] = i[n] ? i[n] : {};
            o.page = t ? 0 : o.page, o.list = t ? [] : o.list, o.end && !t || (o.loadState = 0, 
            e.setData({
                info: i
            }), wx.request({
                url: a.globalData.url + a.globalData.parameter,
                data: {
                    do: "info_my",
                    pid: n,
                    page: o.page + 1,
                    psize: 10
                },
                header: {
                    Cookie: a.globalData.session_login_id,
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    if (1 == t.data.status) {
                        var a = t.data.result.info;
                        o.list = o.list.concat(a), o.end = !a.length, ++o.page, o.loadState = o.end ? 2 : 1, 
                        e.setData({
                            info: i
                        });
                    }
                },
                fail: function() {
                    o.loadState = 3, e.setData({
                        info: i
                    });
                },
                complete: function() {
                    wx.stopPullDownRefresh();
                }
            }));
        }
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var a = this;
        t.init(this, function() {
            a.getDetailList(!0);
        });
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