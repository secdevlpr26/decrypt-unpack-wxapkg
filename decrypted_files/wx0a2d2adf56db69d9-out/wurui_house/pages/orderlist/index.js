require("../../resource/js/htmlToWxml.js"), require("../../resource/js/images.js");

var e = getApp();

Page({
    data: {
        id: 0
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: "我的订单"
        });
        var a = this;
        this.checkuser({
            doServices: function() {
                var n = wx.getStorageSync("userInfo");
                if (a.data.id > 0) s = a.data.id; else {
                    s = t.id;
                    a.data.id = t.id;
                }
                var s = s;
                e.util.request({
                    url: "entry/wxapp/myorderlist",
                    data: {
                        ordertype: s,
                        sessionid: n.sessionid,
                        uid: n.memberInfo.uid
                    },
                    success: function(e) {
                        e.data.message.errno || a.setData({
                            list: e.data.data,
                            ordertype: s
                        });
                    }
                });
            }
        });
    },
    onReady: function() {},
    tabClick: function(t) {
        var a = this;
        this.checkuser({
            doServices: function() {
                var n = t.currentTarget.id, s = wx.getStorageSync("userInfo");
                e.util.request({
                    url: "entry/wxapp/myorderlist",
                    data: {
                        ordertype: n,
                        sessionid: s.sessionid,
                        uid: s.memberInfo.uid
                    },
                    success: function(e) {
                        e.data.message.errno || a.setData({
                            list: e.data.data,
                            ordertype: n
                        });
                    }
                });
            }
        });
    },
    delOrder: function(t) {
        var a = this;
        this.checkuser({
            doServices: function() {
                var n = t.currentTarget.dataset.id, s = wx.getStorageSync("userInfo");
                wx.showModal({
                    title: "订单取消",
                    content: "确认取消订单？",
                    success: function(t) {
                        t.confirm && e.util.request({
                            url: "entry/wxapp/delOrder",
                            data: {
                                id: n,
                                sessionid: s.sessionid,
                                uid: s.memberInfo.uid
                            },
                            success: function(e) {
                                console.log(e), a.onLoad();
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        });
                    }
                });
            }
        });
    },
    RepayOrder: function(t) {
        var a = this;
        this.checkuser({
            doServices: function() {
                var n = t.currentTarget.dataset.id, s = wx.getStorageSync("userInfo");
                wx.showModal({
                    title: "订单支付",
                    content: "是否确认订单？",
                    success: function(t) {
                        t.confirm && e.util.request({
                            url: "entry/wxapp/repay",
                            data: {
                                id: n,
                                sessionid: s.sessionid,
                                uid: s.memberInfo.uid
                            },
                            success: function(e) {
                                e.data && e.data.data && wx.requestPayment({
                                    timeStamp: e.data.data.timeStamp,
                                    nonceStr: e.data.data.nonceStr,
                                    package: e.data.data.package,
                                    signType: "MD5",
                                    paySign: e.data.data.paySign,
                                    success: function(e) {
                                        a.onLoad();
                                    },
                                    fail: function(e) {}
                                });
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        });
                    }
                });
            }
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    checkuser: function(t) {
        var t = t, a = wx.getStorageSync("userInfo");
        return a && a.memberInfo.uid ? void e.util.request({
            url: "entry/wxapp/checkuserinfo",
            data: {
                sessionid: a.sessionid,
                uid: a.memberInfo.uid
            },
            success: function(e) {
                0 == e.data.data.error ? (console.log(t), t.doServices()) : 2 == e.data.data.error && t.doServices();
            }
        }) : (e.util.getUserInfo(), !1);
    }
});