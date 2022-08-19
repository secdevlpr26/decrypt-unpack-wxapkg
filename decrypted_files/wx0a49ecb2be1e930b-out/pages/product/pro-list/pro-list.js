var t = getApp(), a = 1, e = 1, i = !1, s = void 0, o = void 0, g = void 0, r = void 0;

Page({
    data: {
        productList: {},
        hasPro: !0,
        bottomHint: !0,
        listStyle: !1,
        isGroup: t.globalData.isGroup,
        actDistribution: {}
    },
    onLoad: function(a) {
        g = a, r = a.flag, this.getProductList(g), t.globalData.actDistribution && this.setData({
            actDistribution: t.globalData.actDistribution
        });
        var e = wx.getStorageSync("memberType" + t.globalData.autoId);
        this.setData({
            memberType: e
        }), a.title && wx.setNavigationBarTitle({
            title: a.title
        });
    },
    getProductList: function(g) {
        a = 1, e = 1;
        var c = this;
        if (g.bigCateCode) i = !0, s = g.bigCateCode, wx.request({
            url: t.globalData.comUrl + "tabs_getZXProductListByCategory.action",
            data: {
                customizeTabId: t.globalData.customizeTabId.LynxProductList,
                bigCateGoryCode: s,
                current: a,
                status: 2,
                isGroup: t.globalData.isGroup
            },
            success: function(a) {
                var i = t.getJsonData(a.data);
                e = i.pages;
                for (var s = i.pageList, o = 0; o < i.pageList.length; o++) if (i.pageList[o].productImageVOList && i.pageList[o].productImageVOList.length > 0) {
                    var g = i.pageList[o].productImageVOList[0].imageURL;
                    i.pageList[o].productImageVOList[0].imageURL = t.modifyPicSize(g, "_r220x220p");
                } else if (i.pageList[o].productImageList && i.pageList[o].productImageList.length > 0) {
                    var r = i.pageList[o].productImageList[0].imageURL;
                    i.pageList[o].productImageList[0].imageURL = t.modifyPicSize(r, "_r220x220p");
                }
                i.pageList = s, c.setData({
                    productList: i
                }), i.pageList.length > 0 ? c.setData({
                    hasPro: !0
                }) : c.setData({
                    hasPro: !1
                }), wx.stopPullDownRefresh();
            }
        }); else {
            o = g.categoryCode;
            var L = {
                customizeTabId: t.globalData.customizeTabId.LynxProductList,
                current: a,
                status: 2,
                isGroup: t.globalData.isGroup
            };
            r ? L.categoryCode = g.categoryCode : L.subdivideCategoryCode = g.categoryCode, 
            wx.request({
                url: t.globalData.comUrl + "tabs_getProductListByAttribute.action",
                data: L,
                success: function(a) {
                    var i = t.getJsonData(a.data);
                    e = i.pages;
                    for (var s = 0; s < i.pageList.length; s++) if (i.pageList[s].productImageVOList && i.pageList[s].productImageVOList.length > 0) {
                        var o = i.pageList[s].productImageVOList[0].imageURL;
                        i.pageList[s].productImageVOList[0].imageURL = t.modifyPicSize(o, "_r220x220p");
                    } else if (i.pageList[s].productImageList && i.pageList[s].productImageList.length > 0) {
                        var g = i.pageList[s].productImageList[0].imageURL;
                        i.pageList[s].productImageList[0].imageURL = t.modifyPicSize(g, "_r220x220p");
                    }
                    c.setData({
                        productList: i
                    }), i.pageList.length > 0 ? c.setData({
                        hasPro: !0
                    }) : c.setData({
                        hasPro: !1
                    }), wx.stopPullDownRefresh();
                }
            });
        }
    },
    changeclum: function() {
        this.setData({
            listStyle: !this.data.listStyle,
            bottomHint: !0
        });
    },
    toSearch: function(t) {
        wx.navigateTo({
            url: "../../search/search?type=0"
        });
    },
    toProDetail: function(t) {
        wx.navigateTo({
            url: "../pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    onReachBottom: function() {
        var g = this;
        if (a < e) if (a++, i) wx.request({
            url: t.globalData.comUrl + "tabs_getZXProductListByCategory.action",
            data: {
                customizeTabId: t.globalData.customizeTabId.LynxProductList,
                bigCateGoryCode: s,
                current: a,
                status: 2
            },
            success: function(a) {
                for (var e = t.getJsonData(a.data), i = 0; i < e.pageList.length; i++) if (e.pageList[i].productImageVOList && e.pageList[i].productImageVOList.length > 0) {
                    var s = e.pageList[i].productImageVOList[0].imageURL;
                    e.pageList[i].productImageVOList[0].imageURL = t.modifyPicSize(s, "_r220x220p");
                } else if (e.pageList[i].productImageList && e.pageList[i].productImageList.length > 0) {
                    var o = e.pageList[i].productImageList[0].imageURL;
                    e.pageList[i].productImageList[0].imageURL = t.modifyPicSize(o, "_r220x220p");
                }
                g.data.productList.pageList = g.data.productList.pageList.concat(e.pageList), g.setData({
                    productList: g.data.productList
                });
            }
        }); else {
            var c = {
                customizeTabId: t.globalData.customizeTabId.LynxProductList,
                current: a,
                status: 2
            };
            r ? c.categoryCode = o : c.subdivideCategoryCode = o, wx.request({
                url: t.globalData.comUrl + "tabs_getProductListByAttribute.action",
                data: c,
                success: function(a) {
                    for (var e = t.getJsonData(a.data), i = 0; i < e.pageList.length; i++) if (e.pageList[i].productImageVOList && e.pageList[i].productImageVOList.length > 0) {
                        var s = e.pageList[i].productImageVOList[0].imageURL;
                        e.pageList[i].productImageVOList[0].imageURL = t.modifyPicSize(s, "_r220x220p");
                    } else if (e.pageList[i].productImageList && e.pageList[i].productImageList.length > 0) {
                        var o = e.pageList[i].productImageList[0].imageURL;
                        e.pageList[i].productImageList[0].imageURL = t.modifyPicSize(o, "_r220x220p");
                    }
                    g.data.productList.pageList = g.data.productList.pageList.concat(e.pageList), g.setData({
                        productList: g.data.productList
                    });
                }
            });
        } else g.setData({
            bottomHint: !1
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            productList: {},
            hasPro: !0,
            bottomHint: !0
        }), i = !1, this.getProductList(g);
    }
});