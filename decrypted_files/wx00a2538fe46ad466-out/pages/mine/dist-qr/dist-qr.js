var a = getApp();

Page({
    data: {
        loadState: 0,
        qrCode: ""
    },
    openImage: function(a) {
        wx.previewImage({
            urls: [ this.data.qrCode ]
        });
    },
    onLoad: function(a) {},
    onReady: function() {},
    onShow: function() {
        var t = this;
        wx.request({
            url: a.globalData.url + a.globalData.parameter + "&do=qrcode",
            data: {
                path: "pages/index/index?share=" + wx.getStorageSync("userInfo").openid
            },
            header: {
                Cookie: a.globalData.session_login_id
            },
            success: function(a) {
                1 == a.data.status ? t.setData({
                    qrCode: a.data.result.image,
                    loadState: 9
                }) : (t.setData({
                    loadState: 3
                }), wx.showModal({
                    title: "提示",
                    content: a.data.result.message
                }));
            },
            fail: function() {
                t.setData({
                    loadState: 3
                }), wx.showModal({
                    title: "提示",
                    content: "网络链接失败,请稍后重试"
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});