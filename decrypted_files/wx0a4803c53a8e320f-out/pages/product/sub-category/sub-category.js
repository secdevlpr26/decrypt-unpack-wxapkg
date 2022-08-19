var t = getApp(), a = t.globalData.projectInfo, e = t.globalData.customizeTabId;

Page({
    data: {
        categoryList: [],
        hasDataFlag: !0
    },
    onLoad: function(o) {
        a = t.globalData.projectInfo, e = t.globalData.customizeTabId, wx.setNavigationBarTitle({
            title: o.title
        }), wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4,
            mask: !0
        });
        var r = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getCategoryByParent.action",
            data: {
                customizeTabId: e.LynxProductList,
                parentId: o.categoryId
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                r.setData({
                    categoryList: e,
                    hasDataFlag: e.length > 0
                }), wx.hideToast();
            }
        });
    },
    toProList: function(t) {
        t.currentTarget.dataset.flag ? wx.navigateTo({
            url: "sub-category?categoryId=" + t.currentTarget.dataset.id + "&title=" + t.currentTarget.dataset.title
        }) : wx.navigateTo({
            url: "../pro-list/pro-list?categoryCode=" + t.currentTarget.dataset.code
        });
    }
});