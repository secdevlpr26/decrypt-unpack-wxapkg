var t = getApp();

Page({
    data: {
        videoList: []
    },
    onLoad: function(t) {
        this.getVideoList(), wx.setNavigationBarTitle({
            title: "企业宣传"
        });
    },
    getVideoList: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getVideoGalleryList.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                customizeTabId: t.globalData.customizeTabId.Video_Gallery,
                isNeedHttps: 0
            },
            success: function(e) {
                var i = t.getJsonData(e.data);
                a.setData({
                    videoList: i
                });
            },
            fail: function() {}
        });
    }
});