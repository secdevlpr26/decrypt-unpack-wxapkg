Page({
    data: {
        id: ""
    },
    onLoad: function(n) {
        this.setData({
            id: n.id
        });
    },
    look: function() {
        wx.navigateBack({
            delta: 2
        });
    },
    home: function(n) {
        wx.switchTab({
            url: "../repair/home/home"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});