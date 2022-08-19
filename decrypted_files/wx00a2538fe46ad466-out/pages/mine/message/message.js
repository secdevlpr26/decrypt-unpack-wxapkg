var t = getApp();

Page({
    data: {
        service: [],
        user: []
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var o = this;
        wx.showLoading({
            title: "加载中"
        }), wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=chat",
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                if (1 == t.data.status) {
                    var a = t.data.result.kefu, n = t.data.result.chat;
                    o.setData({
                        service: a,
                        user: n
                    });
                }
            },
            fail: function() {
                wx.showModal({
                    title: "提示",
                    content: "网络连接失败，请稍后重试",
                    showCancel: !1
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});