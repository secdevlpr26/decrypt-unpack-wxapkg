var t = getApp(), a = "", e = "";

Page({
    data: {
        txt: ""
    },
    onLoad: function(o) {
        a = t.globalData.projectInfo, e = t.globalData.customizeTabId, this.getHomePageTop(o.index);
    },
    getHomePageTop: function(a) {
        var o = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getHomepageTop.action",
            data: {
                advertisementsCId: e.LynxHomePage
            },
            success: function(e) {
                var s = t.getJsonData(e.data);
                o.setData({
                    txt: s.advertisements[a].text
                });
            }
        });
    }
});