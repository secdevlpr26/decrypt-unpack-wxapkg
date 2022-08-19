var t = getApp(), a = "", e = "";

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
        }), console.log(t.globalData.changeClassify), a = t.globalData.projectInfo, e = t.globalData.customizeTabId;
        var o = this;
        wx.getSystemInfo({
            success: function(t) {
                console.log(t), o.setData({
                    windowHeight: t.windowHeight
                });
            }
        }), o.getBigCateGory(), 1 == o.data.changeclass && (o.getSearchFrameHeight(), o.getCateGoryList());
    },
    getBigCateGory: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTabCategory.action",
            data: {
                customizeTabId: e.LynxProductList
            },
            success: function(e) {
                var o = t.getJsonData(e.data);
                a.setData({
                    bigCateArr: o
                }), 1 == a.data.changeclass ? a.bigCateTap() : a.oldBigCateTap(), wx.hideToast();
            }
        });
    },
    getSearchFrameHeight: function() {
        var t = this, a = wx.createSelectorQuery();
        a.select("#top").boundingClientRect(), a.exec(function(a) {
            t.setData({
                searchFrameHeight: a[0].height
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
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getAllCategoryListBycustomizeTab.action",
            data: {
                customizeTabId: e.LynxProductList,
                level: 3
            },
            success: function(e) {
                var o = t.getJsonData(e.data);
                console.log(o);
                for (var r = 0; r < o.length; r++) o[r].categoryPicture = t.modifyPicSize(o[r].categoryPicture, "_r60x60p");
                a.setData({
                    bigCateArr: o
                }), wx.hideToast(), wx.stopPullDownRefresh();
            }
        });
    },
    scroll: function(t) {
        for (var a = 0; a < this.data.bigCateArr.length; a++) this.queryMultipleNodes(a);
    },
    queryMultipleNodes: function(t) {
        var a = this, e = wx.createSelectorQuery();
        e.select("#bigcate" + t).boundingClientRect(), e.selectViewport().scrollOffset(), 
        e.exec(function(e) {
            var o = e[0].top;
            0 <= o && o <= 150 && a.setData({
                showItem: t
            });
        });
    },
    bigCateTap: function(t) {
        var a = this;
        t ? this.setData({
            showItem: t.target.dataset.index,
            categoryId: t.target.dataset.id,
            categoryCode: t.target.dataset.bigcode,
            bigCateId: "bigcate" + t.target.dataset.index
        }) : this.setData({
            showItem: 0,
            categoryId: a.data.bigCateArr[0].id,
            categoryCode: a.data.bigCateArr[0].code
        });
    },
    oldBigCateTap: function(a) {
        console.log(a);
        var o = this;
        a ? (console.log(a), this.setData({
            showItem: a.currentTarget.dataset.index,
            categoryId: a.currentTarget.dataset.id,
            categoryCode: a.currentTarget.dataset.bigcode
        })) : this.setData({
            showItem: 0,
            categoryId: o.data.bigCateArr[0].id,
            categoryCode: o.data.bigCateArr[0].code
        }), wx.request({
            url: t.globalData.comUrl + "tabs_getCategoryByParent.action",
            data: {
                customizeTabId: e.LynxProductList,
                parentId: o.data.categoryId
            },
            success: function(a) {
                for (var e = t.getJsonData(a.data), r = 0; r < e.length; r++) e[r].categoryPicture = t.modifyPicSize(e[r].categoryPicture, "_r160x160p");
                o.setData({
                    smallCateArr: e
                }), wx.stopPullDownRefresh();
            }
        });
    },
    toSearch: function(t) {
        wx.navigateTo({
            url: "../../search/search?type=0"
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
        var a = this;
        this.setData({
            code: t.currentTarget.dataset.code
        }), t.currentTarget.dataset.flag ? wx.navigateTo({
            url: "../sub-category/sub-category?categoryId=" + t.currentTarget.dataset.id + "&title=" + t.currentTarget.dataset.title
        }) : wx.navigateTo({
            url: "../pro-list/pro-list?categoryCode=" + a.data.code + "&flag=1&title=" + t.currentTarget.dataset.title
        });
    }
});