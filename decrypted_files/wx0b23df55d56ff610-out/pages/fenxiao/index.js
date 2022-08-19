var n = require("../../utils/server");

Page({
    data: {
        crash: !0
    },
    onLoad: function(t) {
        var o = getApp().globalData.userInfo;
        this.setData({
            user: o
        });
        var a = o.user_id, e = this;
        n.getJSON("/User/distribut", {
            user_id: a
        }, function(n) {
            var t = n.data.order_count, o = n.data.person, a = n.data.crashs;
            e.setData({
                orders: t,
                person: o,
                crashs: a
            });
        });
    },
    getPhoneNum: function(n) {
        var t = n.detail.value;
        this.setData({
            money: t
        });
    },
    bind: function(t) {
        this.setData({
            crash: !0
        });
        var o = this.data.money, a = getApp().globalData.userInfo.user_id;
        n.getJSON("/User/crash", {
            money: o,
            user_id: a
        }, function(n) {
            wx.showToast({
                title: n.data.result
            });
        });
    },
    crash: function(n) {
        wx.navigateTo({
            url: "crash"
        });
    },
    showVerifyPhone: function(n) {
        this.setData({
            crash: !0
        });
    },
    qrcode: function(n) {
        var t = getApp().globalData.userInfo.user_id;
        wx.navigateTo({
            url: "qrcode?user_id=" + t,
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    person: function(n) {
        wx.navigateTo({
            url: "person",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    crashinfo: function(n) {
        wx.navigateTo({
            url: "crashList",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    order: function(n) {
        wx.navigateTo({
            url: "order",
            success: function(n) {},
            fail: function(n) {},
            complete: function(n) {}
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});