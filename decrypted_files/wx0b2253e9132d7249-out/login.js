var n = getApp();

Page({
    data: {
        locatestatus: !1,
        loading: !1
    },
    getUserInfo: function(o) {
        "getUserInfo:ok" == o.detail.errMsg && (this.setData({
            loading: !0
        }), n.getInfo(o.detail, {
            success: function() {
                n.getlocate({
                    success: function() {
                        wx.reLaunch({
                            url: n.globalData.pages.index,
                            success: function() {
                                wx.navigateTo({
                                    url: n.globalData.pages.enter
                                });
                            }
                        });
                    },
                    fail: function() {
                        n.modaltem({
                            success: function() {
                                wx.reLaunch({
                                    url: n.globalData.pages.index,
                                    success: function() {
                                        wx.navigateTo({
                                            url: n.globalData.pages.enter
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }));
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});