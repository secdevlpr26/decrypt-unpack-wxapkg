var a = getApp();

Page({
    onShareAppMessage: function() {
        return {
            imageUrl: a.globalData.shareImage || "",
            title: this.data.title || a.globalData.projectName,
            path: "/pages/h5page/h5page"
        };
    },
    data: {
        h5page: "http://www.baidu.com"
    },
    onLoad: function(a) {
        var e = wx.getStorageSync("h5page");
        console.log(e, "pdf或者视频"), e && this.setData({
            h5page: e
        });
    }
});