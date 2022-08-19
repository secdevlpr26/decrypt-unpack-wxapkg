function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = getApp(), o = e.globalData.projectInfo, i = e.globalData.customizeTabId, s = 1, n = 1;

Page((a = {
    data: {
        hiddenCate: !0,
        merchantList: [],
        curIdx: "0",
        sortName: "",
        bigcategory: "",
        smallCategory: "",
        searchKey: "",
        bigCateList: [],
        smallCateList: [],
        hiddenSCAll: !0,
        latitude: "",
        longitude: "",
        ignoreScope: e.globalData.ignoreScope,
        styleConfig: e.globalData.styleConfig
    },
    checkIfHasAutoId: function(t) {
        !sessionStorage.getItem("globalAutoId") || t && t.autoId || (t = {
            autoId: sessionStorage.getItem("globalAutoId")
        }), t && t.autoId && t.autoId && (this.setData({
            ignoreScope: !0
        }), this.getMerchantList());
    },
    onLoad: function(t) {
        o = e.globalData.projectInfo, i = e.globalData.customizeTabId, this.checkIfHasAutoId(), 
        wx.showLoading({
            title: "努力加载中",
            duration: 1500
        }), t.bigcategory && this.setData({
            bigcategory: t.bigcategory
        }), t.itemName && wx.setNavigationBarTitle({
            title: t.itemName
        });
        var a = this;
        0 == e.globalData.g_location.lat ? wx.getLocation({
            type: "wgs84",
            success: function(t) {
                a.setData({
                    latitude: t.latitude,
                    longitude: t.longitude
                }), a.getMerchantList();
            }
        }) : (a.setData({
            latitude: e.globalData.g_location.lat,
            longitude: e.globalData.g_location.lng
        }), a.getMerchantList()), this.getBigCategory();
    },
    onShow: function() {
        s = 1;
    },
    getMerchantList: function() {
        var t = this, a = {
            appId: o.appId,
            customizeTabId: i.LynxAbout_Merchant,
            current: s,
            latitude: t.data.latitude,
            longitude: t.data.longitude,
            searchKey: t.data.searchKey,
            sortName: t.data.sortName,
            smallCategory: t.data.smallCategory,
            bigcategory: t.data.bigcategory,
            sortType: ""
        };
        t.data.ignoreScope && (a.checkDistributionScope = "", a.latitude = 23.131687, a.longitude = 113.36391), 
        wx.request({
            url: e.globalData.comUrl + "mctab_searchFoodBranchInfo.action",
            data: a,
            success: function(a) {
                var o = e.getJsonData(a.data);
                console.log(o), n = o.pages;
                for (var i = 0; i < o.pageList.length; i++) {
                    var s = o.pageList[i].productList.slice(0, 2);
                    o.pageList[i].newProductList = s, o.pageList[i].isShowMorePro = !1, o.pageList[i].distance >= 1e3 && (o.pageList[i].disUnit = "km", 
                    o.pageList[i].distance = (o.pageList[i].distance / 1e3).toFixed(1));
                }
                var r = t.data.merchantList.concat(o.pageList);
                t.setData({
                    merchantList: r
                }), wx.hideLoading();
            }
        });
    },
    getBigCategory: function() {
        var t = this;
        wx.request({
            url: e.globalData.comUrl + "tabs_getPhotoInfoTabCategory.action",
            data: {
                appId: o.appId,
                customizeTabId: i.LynxAbout_Merchant
            },
            success: function(a) {
                var o = e.getJsonData(a.data);
                t.setData({
                    bigCateList: o
                });
            },
            fail: function(t) {
                e.hint("获取大类失败");
            }
        });
    },
    getSmallCategory: function(t) {
        var a = this;
        a.setData({
            bigcategory: t.currentTarget.dataset.code,
            hiddenSCAll: !1,
            smallCategory: ""
        }), wx.request({
            url: e.globalData.comUrl + "tabs_getPhotoInfoTabCategoryFromL1toL2.action",
            data: {
                appId: o.appId,
                customizeTabId: i.LynxAbout_Merchant,
                categoryCode: t.currentTarget.dataset.code
            },
            success: function(t) {
                var o = e.getJsonData(t.data);
                a.setData({
                    smallCateList: o
                }), s = 1;
            },
            fail: function(t) {
                e.hint();
            }
        });
    },
    isShowCategory: function() {
        if (this.setData({
            hiddenCate: !this.data.hiddenCate,
            curIdx: "0"
        }), !this.hiddenCate) {
            var t = this;
            wx.request({
                url: e.globalData.comUrl + "/tabs_getPhotoInfoTabCategory.action",
                data: {
                    appId: o.appId,
                    branchInfoId: t.data.branchInfoId,
                    customizeTabId: i.LynxAbout_Merchant
                },
                success: function(t) {
                    var a = e.getJsonData(t.data);
                    console.log(a);
                }
            });
        }
    },
    navtap: function(t) {
        wx.showLoading({
            title: "努力加载中",
            duration: 1500
        });
        var a = t.target.dataset.idx;
        this.setData({
            curIdx: a,
            sortName: 1 == a ? "" : "distance",
            hiddenCate: !0,
            merchantList: []
        }), s = 1, this.getMerchantList();
    },
    searchTap: function(t) {
        this.setData({
            searchKey: t.detail.value,
            merchantList: []
        }), this.getMerchantList();
    },
    showMoreProduct: function(t) {
        console.log(t.target.dataset.idx), this.data.merchantList[t.target.dataset.idx].isShowMorePro = !this.data.merchantList[t.target.dataset.idx].isShowMorePro, 
        this.setData({
            merchantList: this.data.merchantList
        });
    },
    toProduct: function(t) {
        wx.navigateTo({
            url: "../product/product?merchantId=" + t.currentTarget.dataset.mid
        });
    },
    toProduct1: function(t) {
        wx.navigateTo({
            url: "../product/product?merchantId=" + t.currentTarget.dataset.mid + "&bigCode=" + t.currentTarget.dataset.cid
        });
    },
    bigCateAllTap: function() {
        wx.showLoading({
            title: "努力加载中",
            duration: 1500
        }), s = 1, this.setData({
            hiddenCate: !0,
            merchantList: [],
            sortName: "",
            bigcategory: "",
            smallCategory: "",
            smallCateList: "",
            searchKey: "",
            hiddenSCAll: !0
        }), this.getMerchantList();
    },
    toStoreDetail: function(t) {
        wx.navigateTo({
            url: "../store-detail/store-detail?tabContentId=" + t.currentTarget.dataset.mid
        });
    }
}, t(a, "toProduct", function(t) {
    wx.navigateTo({
        url: "../../product/pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
    });
}), t(a, "smallCataTap", function(t) {
    wx.showLoading({
        title: "努力加载中",
        duration: 1500
    }), s = 1, this.setData({
        smallCategory: t.currentTarget.dataset.scode,
        hiddenCate: !0,
        merchantList: [],
        searchKey: ""
    }), this.getMerchantList();
}), t(a, "onPullDownRefresh", function() {}), t(a, "onReachBottom", function() {
    s < n && (s++, this.getMerchantList());
}), a));