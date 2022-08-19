Page({
    data: {
        video: "",
        details: "",
        netWorkType: !1
    },
    onLoad: function(e) {
        var t = this;
        t.setData({
            video: e.video,
            details: e.briefDescription
        }), wx.getNetworkType({
            success: function(e) {
                t.setData({
                    netWorkType: e.networkType
                });
            }
        });
    },
    onShow: function() {}
});