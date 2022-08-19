var t = getApp(), e = "", a = "";

Page({
    data: {
        styleConfig: t.globalData.styleConfig,
        bigCateArr: [],
        smallCateArr: [],
        showItem: 0,
        categoryCode: "",
        categoryId: 0,
        code: "",
        bigCateId: "",
        windowHeight: "",
        searchFrameHeight: "",
        changeclass: ""
    },
    onLoad: function() {
        this.setData({
            changeclass: t.globalData.changeClassify
        }), e = t.globalData.projectInfo, a = t.globalData.customizeTabId;
        var o = this;
        wx.getSystemInfo({
            success: function(t) {
                console.log(t), "ios" == t.platform ? o.setData({
                    windowHeight: t.windowHeight - 48
                }) : o.setData({
                    windowHeight: t.windowHeight
                });
            }
        }), o.getBigCateGory(), 1 == o.data.changeclass && (o.getSearchFrameHeight(), o.getCateGoryList());
    },
    getBigCateGory: function() {
        var e = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTabCategory.action",
            data: {
                customizeTabId: a.LynxProductList
            },
            success: function(a) {
                var o = t.getJsonData(a.data);
                e.setData({
                    bigCateArr: o
                }), 1 == e.data.changeclass ? e.bigCateTap() : e.oldBigCateTap(), wx.hideToast();
            }
        });
    },
    getSearchFrameHeight: function() {
        var t = this, e = wx.createSelectorQuery();
        e.select("#top").boundingClientRect(), e.exec(function(e) {
            t.setData({
                searchFrameHeight: e[0].height
            });
        });
    },
    getCateGoryList: function() {
        wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4,
            mask: !0
        });
        var e = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getAllCategoryListBycustomizeTab.action",
            data: {
                customizeTabId: a.LynxProductList,
                level: 3
            },
            success: function(a) {
                var o = t.getJsonData(a.data);
                console.log(o);
                for (var r = 0; r < o.length; r++) o[r].categoryPicture = t.modifyPicSize(o[r].categoryPicture, "_r60x60p");
                e.setData({
                    bigCateArr: o
                }), wx.hideToast(), wx.stopPullDownRefresh();
            }
        });
    },
    scroll: function(t) {
        for (var e = 0; e < this.data.bigCateArr.length; e++) this.queryMultipleNodes(e);
    },
    queryMultipleNodes: function(t) {
        var e = this, a = wx.createSelectorQuery();
        a.select("#bigcate" + t).boundingClientRect(), a.selectViewport().scrollOffset(), 
        a.exec(function(a) {
            var o = a[0].top;
            0 <= o && o <= 150 && e.setData({
                showItem: t
            });
        });
    },
    bigCateTap: function(t) {
        var e = this;
        t ? this.setData({
            showItem: t.target.dataset.index,
            categoryId: t.target.dataset.id,
            categoryCode: t.target.dataset.bigcode,
            bigCateId: "bigcate" + t.target.dataset.index
        }) : this.setData({
            showItem: 0,
            categoryId: e.data.bigCateArr[0].id,
            categoryCode: e.data.bigCateArr[0].code
        });
    },
    oldBigCateTap: function(e) {
        var o = this;
        e ? (console.log(e), this.setData({
            showItem: e.currentTarget.dataset.index,
            categoryId: e.currentTarget.dataset.id,
            categoryCode: e.currentTarget.dataset.bigcode
        })) : this.setData({
            showItem: 0,
            categoryId: o.data.bigCateArr[0].id,
            categoryCode: o.data.bigCateArr[0].code
        }), wx.request({
            url: t.globalData.comUrl + "tabs_getCategoryByParent.action",
            data: {
                customizeTabId: a.LynxProductList,
                parentId: o.data.categoryId
            },
            success: function(e) {
                for (var a = t.getJsonData(e.data), r = 0; r < a.length; r++) a[r].categoryPicture = t.modifyPicSize(a[r].categoryPicture, "_r160x160p");
                o.setData({
                    smallCateArr: a
                }), wx.stopPullDownRefresh();
            }
        });
    },
    toSearch: function(t) {
        wx.navigateTo({
            url: "../search/search?type=0"
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            showItem: 0,
            categoryCode: "",
            categoryId: 0,
            code: "",
            bigCateId: ""
        }), this.getBigCateGory(), 1 == this.data.changeclass && (this.getSearchFrameHeight(), 
        this.getCateGoryList());
    },
    toProductList: function(t) {
        var e = this;
        this.setData({
            code: t.currentTarget.dataset.code
        }), t.currentTarget.dataset.flag ? wx.navigateTo({
            url: "sub-category/sub-category?categoryId=" + t.currentTarget.dataset.id + "&title=" + t.currentTarget.dataset.title
        }) : wx.navigateTo({
            url: "pro-list/pro-list?categoryCode=" + e.data.code + "&flag=1&title=" + t.currentTarget.dataset.title
        });
    }
});