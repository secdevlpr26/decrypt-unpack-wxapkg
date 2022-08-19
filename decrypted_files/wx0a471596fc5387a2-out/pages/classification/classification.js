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
        var n = this;
        wx.request({
            url: t.globalData.apiUrl,
            data: {
                opt: "getspType",
                parentId: 0
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                null != t.data && n.setData({
                    typeList: t.data.rows
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    searchActiveChangeinput: function(n) {
        var a = n.detail.value;
        t.globalData.word = a;
    },
    searchSubmit: function() {
        wx.navigateTo({
            url: "/pages/goods_list/goods_list"
        });
    }
});