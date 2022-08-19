Page({
    data: {},
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    goToGionee: function() {
        wx.navigateTo({
            url: "../../repair/gionee/gionee"
        });
    },
    goToMeizu: function() {
        wx.navigateTo({
            url: "../../repair/meizu/meizu"
        });
    }
});