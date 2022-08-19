require("../../resource/js/htmlToWxml.js"), require("../../resource/js/images.js");

var e = getApp();

Page({
    data: {
        id: 0,
        check: !0
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: "二手房"
        });
        var a = this;
        this.checkuser({
            doServices: function() {
                var s = wx.getStorageSync("userInfo");
                if (a.data.id > 0) i = a.data.id; else {
                    i = t.id;
                    a.data.id = t.id;
                }
                var i = i;
                e.util.request({
                    url: "entry/wxapp/mypublist",
                    data: {
                        ordertype: i,
                        sessionid: s.sessionid,
                        uid: s.memberInfo.uid
                    },
                    success: function(e) {
                        if (!e.data.message.errno) {
                            a.setData({
                                list: e.data.data,
                                ordertype: i
                            });
                            var t = e.data.data;
                            t && t.length > 0 && a.setData({
                                check: !1
                            });
                        }
                    }
                }), e.util.request({
                    url: "entry/wxapp/mypublist",
                    data: {
                        ordertype: 3,
                        sessionid: s.sessionid,
                        uid: s.memberInfo.uid
                    },
                    success: function(e) {
                        if (!e.data.message.errno) {
                            var t = e.data.data;
                            t && t.length > 0 && a.setData({
                                check: !1
                            });
                        }
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
                var s = t.currentTarget.id, i = wx.getStorageSync("userInfo");
                e.util.request({
                    url: "entry/wxapp/mypublist",
                    data: {
                        ordertype: s,
                        sessionid: i.sessionid,
                        uid: i.memberInfo.uid
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
    },
    toSaleOldPub: function(e) {
        wx.navigateTo({
            url: "/wurui_house/pages/pub/index"
        });
    }
});