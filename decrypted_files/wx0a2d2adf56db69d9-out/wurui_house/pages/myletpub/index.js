require("../../resource/js/htmlToWxml.js"), require("../../resource/js/images.js");

var e = getApp();

Page({
    data: {
        id: 0,
        check: !0
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: "出租房"
        });
        var s = this;
        this.checkuser({
            doServices: function() {
                var a = wx.getStorageSync("userInfo");
                if (s.data.id > 0) i = s.data.id; else {
                    i = t.id;
                    s.data.id = t.id;
                }
                var i = i;
                e.util.request({
                    url: "entry/wxapp/myletpublist",
                    data: {
                        ordertype: i,
                        sessionid: a.sessionid,
                        uid: a.memberInfo.uid
                    },
                    success: function(e) {
                        if (!e.data.message.errno) {
                            s.setData({
                                list: e.data.data,
                                ordertype: i
                            });
                            var t = e.data.data;
                            t && t.length > 0 && s.setData({
                                check: !1
                            });
                        }
                    }
                }), e.util.request({
                    url: "entry/wxapp/myletpublist",
                    data: {
                        ordertype: 3,
                        sessionid: a.sessionid,
                        uid: a.memberInfo.uid
                    },
                    success: function(e) {
                        if (!e.data.message.errno) {
                            var t = e.data.data;
                            t && t.length > 0 && s.setData({
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
        var s = this;
        this.checkuser({
            doServices: function() {
                var a = t.currentTarget.id, i = wx.getStorageSync("userInfo");
                e.util.request({
                    url: "entry/wxapp/myletpublist",
                    data: {
                        ordertype: a,
                        sessionid: i.sessionid,
                        uid: i.memberInfo.uid
                    },
                    success: function(e) {
                        e.data.message.errno || s.setData({
                            list: e.data.data,
                            ordertype: a
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
        var t = t, s = wx.getStorageSync("userInfo");
        return s && s.memberInfo.uid ? void e.util.request({
            url: "entry/wxapp/checkuserinfo",
            data: {
                sessionid: s.sessionid,
                uid: s.memberInfo.uid
            },
            success: function(e) {
                0 == e.data.data.error ? (console.log(t), t.doServices()) : 2 == e.data.data.error && t.doServices();
            }
        }) : (e.util.getUserInfo(), !1);
    },
    toSalePub: function(e) {
        var t = this;
        wx.navigateTo({
            url: "/wurui_house/pages/salepub/index",
            success: function() {
                t.data.showmsg = !0, t.setData({
                    showmsg: t.data.showmsg
                });
            }
        });
    }
});