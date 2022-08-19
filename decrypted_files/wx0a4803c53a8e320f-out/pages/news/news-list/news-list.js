var t = getApp(), a = t.globalData.projectInfo, o = t.globalData.customizeTabId, e = 1, i = 1;

Page({
    data: {
        styleConfig: t.globalData.styleConfig,
        pageList: [],
        categoryId: "",
        bottomHint: !0,
        title: ""
    },
    onLoad: function(e) {
        a = t.globalData.projectInfo, o = t.globalData.customizeTabId, this.setData({
            categoryId: e.categoryId,
            title: e.title
        }), this.getNewsList();
    },
    onShow: function() {},
    getNewsList: function() {
        var s = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTabFromL2ToL1.action",
            data: {
                appId: a.appId,
                customizeTabId: o.LynxPhoto_H_Info_Tab_Level2,
                categoryId: s.data.categoryId,
                current: e
            },
            success: function(a) {
                var o = t.getJsonData(a.data);
                i = o.pages;
                for (var e = 0; e < o.pageList.length; e++) o.pageList[e].picture1 = t.modifyPicSize(o.pageList[e].picture1, "_r160x160p");
                s.setData({
                    pageList: s.data.pageList.concat(o.pageList)
                }), wx.hideToast(), wx.stopPullDownRefresh();
            },
            fail: function() {
                t.hint();
            }
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        e < i ? (e++, this.getNewsList()) : this.setData({
            bottomHint: !1
        });
    }
});