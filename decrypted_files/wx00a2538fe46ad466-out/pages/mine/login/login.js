var n = getApp();

Page({
    data: {
        loading: !1
    },
    getUserInfo: function(e) {
        var o = this;
        "getUserInfo:ok" == e.detail.errMsg && (this.setData({
            loading: !0
        }), n.getUserInfo(e.detail, {
            success: function() {
                n.getlocate({
                    success: function() {
                        return o.success();
                    },
                    fail: function() {
                        n.modaltem({
                            success: function() {
                                return o.success();
                            }
                        });
                    }
                });
            }
        }));
    },
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
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});