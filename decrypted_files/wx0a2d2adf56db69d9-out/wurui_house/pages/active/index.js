var t = getApp();

Page({
    data: {},
    onLoad: function(a) {
        wx.setNavigationBarTitle({
            title: "房产活动-" + wx.getStorageSync("companyinfo").name
        });
        var n = this;
        t.util.request({
            url: "entry/wxapp/getactivelist",
            success: function(t) {
                t.data.message.errno || (console.log(t.data.data), n.setData({
                    list: t.data.data
                }));
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    toActiveDetail: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/wurui_house/pages/activedetail/index?id=" + a
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.onLoad();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "房产活动-" + wx.getStorageSync("companyinfo").name,
            path: "/wurui_house/pages/active/index"
        };
    }
});