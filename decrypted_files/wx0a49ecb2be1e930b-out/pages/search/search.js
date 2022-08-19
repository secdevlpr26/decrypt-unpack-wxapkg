var t = getApp(), a = t.globalData.projectInfo, e = t.globalData.customizeTabId, o = 1, n = 0, i = 0, s = "", r = !0;

Page(function(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}({
    data: {
        bottomHint: !0,
        hidden: !0,
        search_type: "0",
        noSearch: !0,
        pageList: [],
        showVal: ""
    },
    onLoad: function(o) {
        a = t.globalData.projectInfo, e = t.globalData.customizeTabId;
        var i = "";
        i = 0 == (n = o.type) ? "产品" : 1 == n ? "商家" : "资讯", this.setData({
            showVal: i
        });
    },
    getNewsInfo: function() {
        var n = this;
        r && (r = !1, wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTabFromL2ToL1.action",
            data: {
                appId: a.appId,
                customizeTabId: e.LynxPhoto_H_Info_Tab_Level2,
                current: o,
                searchKey: s
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                i = e.pages, n.setData({
                    pageList: n.data.pageList.concat(e.pageList)
                });
                var o = !!n.data.pageList.length;
                n.setData({
                    noSearch: o
                }), r = !0;
            },
            fail: function() {
                t.hint(), r = !0;
            }
        }));
    },
    getStoreInfo: function() {
        var n = this;
        r && (r = !1, wx.request({
            url: t.globalData.comUrl + "mctab_searchBranchInfo.action",
            data: {
                appId: a.appId,
                customizeTabId: e.LynxAbout_Merchant,
                advertisement: 1,
                current: o,
                level: 0,
                provinceId: "",
                cityId: "",
                categoryId: "",
                branchName: s
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                i = e.pages, n.setData({
                    pageList: n.data.pageList.concat(e.pageList)
                });
                var o = !!n.data.pageList.length;
                n.setData({
                    noSearch: o
                }), r = !0;
            },
            fail: function() {
                t.hint(), r = !0;
            }
        }));
    },
    getProductInfo: function() {
        var n = this;
        r && (r = !1, wx.request({
            url: t.globalData.comUrl + "tabs_getZXProductListByCategory.action",
            data: {
                appId: a.appId,
                customizeTabId: e.LynxProductList,
                current: o,
                status: 2,
                productName: s
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                i = e.pages, n.setData({
                    pageList: n.data.pageList.concat(e.pageList)
                });
                var o = !!n.data.pageList.length;
                n.setData({
                    noSearch: o
                }), r = !0;
            },
            fail: function() {
                t.hint(), r = !0;
            }
        }));
    },
    toProDetail: function(t) {
        wx.navigateTo({
            url: "../product/pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    toStoreDetail: function(t) {
        wx.navigateTo({
            url: "../store/store-detail/store-detail?tabContentId=" + t.currentTarget.dataset.id
        });
    },
    toNewsDetail: function(t) {
        wx.navigateTo({
            url: "../news/news-detail/news-detail?tabContentId=" + t.currentTarget.dataset.id + "&type=3"
        });
    },
    navtap: function() {
        this.setData({
            hidden: !this.data.hidden
        });
    },
    navItemtap: function(t) {
        var a = "";
        0 == t.currentTarget.dataset.idx ? (n = 0, a = "产品") : 1 == t.currentTarget.dataset.idx ? (n = 1, 
        a = "商家") : (n = 2, a = "资讯"), this.setData({
            showVal: a
        });
    },
    search: function() {
        this.setData({
            pageList: [],
            bottomHint: !0,
            hidden: !0,
            noSearch: !0,
            search_type: n
        }), o = 1, 0 == n ? this.getProductInfo() : 1 == n ? this.getStoreInfo() : this.getNewsInfo();
    },
    searchInput: function(t) {
        s = t.detail.value;
    },
    blanktap: function() {
        this.setData({
            hidden: !0
        });
    },
    scrolltolower: function() {
        o < i && (o++, 0 == n ? this.getProductInfo() : 1 == n ? this.getStoreInfo() : this.getNewsInfo());
    }
}, "scrolltolower", function() {
    o < i ? (o++, 0 == n ? this.getProductInfo() : 1 == n ? this.getStoreInfo() : this.getNewsInfo()) : o > 1 && (this.data.pageList.length > 1 ? this.setData({
        bottomHint: !1
    }) : this.setData({
        bottomHint: !0
    }));
}));