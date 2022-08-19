var a = getApp(), t = require("../../../utils/util.js");

Page({
    data: {
        vip: [],
        loadState: 0
    },
    topay: function(t) {
        var e = t.currentTarget.dataset.days;
        wx.request({
            url: a.globalData.url + a.globalData.parameter + "&do=vip",
            header: {
                Cookie: a.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                vip_days: e
            },
            method: "POST",
            success: function(a) {
                1 == a.data.status ? wx.navigateTo({
                    url: "/pages/merch/merch-pay/merch-pay?order_num=" + a.data.result.order_num
                }) : wx.showModal({
                    title: "提示",
                    content: a.data.result.message
                });
            },
            fail: function() {
                wx.showModal({
                    title: "提示",
                    content: "网络链接失败,请稍后重试"
                });
            }
        });
    },
    onLoad: function(e) {
        var o = this;
        wx.request({
            url: a.globalData.url + a.globalData.parameter + "&do=vip",
            header: {
                Cookie: a.globalData.session_login_id
            },
            success: function(a) {
                if (1 == a.data.status) {
                    var e = a.data.result.vip;
                    e.forEach(function(a, e, o) {
                        a.money = t.formatFloat(a.money), a.everyday = t.formatFloat(a.everyday);
                    }), o.setData({
                        vip: e,
                        loadState: 9
                    });
                } else o.setData({
                    loadState: 3
                }), wx.showModal({
                    title: "提示",
                    content: a.data.result.message
                });
            },
            fail: function() {
                o.setData({
                    loadState: 3
                }), wx.showModal({
                    title: "提示",
                    content: "网络链接失败,请稍后重试"
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});