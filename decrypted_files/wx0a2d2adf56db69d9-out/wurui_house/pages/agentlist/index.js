var t = getApp();

Page({
    data: {},
    onLoad: function(n) {
        wx.setNavigationBarTitle({
            title: "经纪人-" + wx.getStorageSync("companyinfo").name
        });
        var a = this;
        t.util.request({
            url: "entry/wxapp/getagentlist",
            success: function(t) {
                t.data.message.errno || (console.log(t.data.data), a.setData({
                    list: t.data.data
                }));
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    toAgentDetail: function(t) {
        var n = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/wurui_house/pages/agentdetail/index?id=" + n
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
            title: "经纪人-" + wx.getStorageSync("companyinfo").name,
            path: "/wurui_house/pages/agentlist/index"
        };
    }
});