var t = getApp(), e = t.globalData.domain;

Page({
    data: {},
    xwznLogin: function() {
        var t = this;
        wx.login({
            success: function(e) {
                t.getUserId(e.code);
            },
            fail: function(t) {
                wx.showLoading({
                    title: "fail"
                });
            }
        });
    },
    getUserId: function(a) {
        wx.request({
            url: e + "/applet/getUserIdXd",
            data: {
                code: a
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                e.data.userId ? (t.globalData.userId = e.data.userId, t.globalData.auth = !0, wx.setStorage({
                    key: "userId",
                    data: e.data.userId
                }), wx.setStorage({
                    key: "unitCode",
                    data: e.data.unitCode
                }), wx.showToast({
                    title: "欢迎使用！"
                }), setTimeout(function() {
                    wx.switchTab({
                        url: "/pages/watch/watch"
                    });
                }, 2e3)) : (wx.clearStorage("userId"), wx.showToast({
                    title: "朋友，你好",
                    success: function() {
                        setTimeout(function() {
                            wx.switchTab({
                                url: "/pages/watch/watch"
                            });
                        }, 1e3);
                    }
                }));
            },
            fail: function(t) {
                wx.showToast({
                    title: "请求服务器失败，请检查网络"
                }), wx.clearStorage("userId"), setTimeout(function() {
                    wx.switchTab({
                        url: "/pages/watch/watch"
                    });
                }, 1e3);
            },
            complete: function(t) {}
        });
    },
    onLoad: function(t) {
        this.xwznLogin();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});