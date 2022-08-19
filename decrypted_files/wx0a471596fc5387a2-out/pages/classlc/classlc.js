var t = getApp();

Page({
    data: {
        hostUrl: t.globalData.hostUrl
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        this.getType();
    },
    getType: function() {
        var a = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getType",
                parentId: 0,
                userId: wx.getStorageSync("userId")
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                "" != t.data && a.setData({
                    typeList: t.data.rows,
                    ZRZXMC: t.data.rows[0].ZRZXBM + "--" + t.data.rows[0].ZRZXMC,
                    ZRZXBM: t.data.rows[0].ZRZXBM,
                    NF: t.data.rows[0].NF,
                    ZTBM: t.data.rows[0].ZTBM,
                    LX: t.data.rows[0].LX,
                    MBLX: t.data.rows[0].MBLX
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