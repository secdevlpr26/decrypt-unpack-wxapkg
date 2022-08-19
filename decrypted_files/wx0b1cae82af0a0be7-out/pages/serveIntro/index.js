(function(t) {
    t && t.__esModule;
})(require("../../utils/api")), getApp();

Page({
    data: {
        content: ""
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("serveIntro").split(",");
        this.setData({
            content: e
        });
    }
});