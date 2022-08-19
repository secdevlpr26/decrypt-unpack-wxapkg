var t = getApp(), a = t.globalData.projectInfo, o = t.globalData.customizeTabId, e = "", i = "", n = {}, r = !0, s = !0, c = 1, l = 1;

Page({
    data: {
        styleConfig: t.globalData.styleConfig,
        storeInfo: {},
        productArr: [],
        collectStatus: "0",
        tapIndex: 1,
        bottomHint: !0,
        isGroup: t.globalData.isGroup,
        storeImgArr: [],
        actDistribution: {}
    },
    onLoad: function(e) {
        t.loginVzSystem(), a = t.globalData.projectInfo, o = t.globalData.customizeTabId;
        var i = wx.getStorageSync("memberType" + t.globalData.autoId);
        this.setData({
            memberType: i
        }), t.globalData.actDistribution && this.setData({
            actDistribution: t.globalData.actDistribution
        });
        var n = this;
        c = 1, n.getStoreInfo(e), n.getCollectStatus();
    },
    nav_tap: function(t) {
        var a = 0;
        "1" == t.currentTarget.dataset.index ? (a = 1, this.getProductList()) : a = "2" == t.currentTarget.dataset.index ? 2 : 3, 
        this.setData({
            tapIndex: a
        });
    },
    getStoreInfo: function(o) {
        var i = this;
        e = o.tabContentId, wx.request({
            url: t.globalData.comUrl + "tabs_getSingleBranchInfo.action",
            data: {
                appId: a.appId,
                tabContentId: e
            },
            success: function(a) {
                n = t.getJsonData(a.data), console.log(n);
                for (var o = [ n.pic1, n.pic2, n.pic3, n.pic4, n.pic5 ], e = [], r = 0; r < o.length; r++) o[r] && (o[r] = t.modifyPicSize(o[r], "_r375x175p"), 
                e.push(o[r]));
                n.shortDescription = t.filterSpecialSymbol(n.shortDescription), i.setData({
                    storeInfo: n,
                    storeImgArr: e
                }), wx.setNavigationBarTitle({
                    title: n.branchName
                }), i.getProductList();
            },
            fail: function(a) {
                t.hint();
            }
        });
    },
    getProductList: function() {
        var e = this, i = e.data.storeInfo.id;
        wx.request({
            url: t.globalData.comUrl + "tabs_getZXProductListByCategory.action",
            data: {
                appId: a.appId,
                customizeTabId: o.LynxProductList,
                current: "1",
                status: "2",
                branchInfoId: i,
                isGroup: t.globalData.isGroup,
                sortName: "prodSequence"
            },
            success: function(a) {
                var o = t.getJsonData(a.data);
                l = o.pages, e.setData({
                    productArr: o.pageList
                }), wx.hideToast();
            },
            fail: function(a) {
                t.hint();
            }
        });
    },
    getMoreProduct: function() {
        var e = this, i = e.data.storeInfo.id;
        wx.request({
            url: t.globalData.comUrl + "tabs_getZXProductListByCategory.action",
            data: {
                appId: a.appId,
                customizeTabId: o.LynxProductList,
                current: c,
                status: "2",
                branchInfoId: i,
                isGroup: t.globalData.isGroup,
                sortName: "prodSequence"
            },
            success: function(a) {
                var o = t.getJsonData(a.data);
                e.setData({
                    productArr: e.data.productArr.concat(o.pageList)
                });
            },
            fail: function(a) {
                t.hint();
            }
        });
    },
    toProDetail: function(t) {
        wx.navigateTo({
            url: "/pages/product/pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    collect: function() {
        if (0 != r) {
            r = !1;
            var o = this;
            (i = t.getMemberId()) ? wx.request({
                url: t.globalData.comUrl + "tabs_addCollection.action",
                data: {
                    appId: a.appId,
                    memberId: i,
                    type: 2,
                    objId: n.id,
                    name: n.branchName,
                    address: n.address,
                    tell: n.tel,
                    pic_url: n.pic1
                },
                success: function(t) {
                    o.getCollectStatus();
                },
                fail: function(a) {
                    t.hint("收藏失败");
                }
            }) : (r = !0, wx.navigateTo({
                url: "/pages/login/login"
            }));
        }
    },
    cancelCollect: function() {
        if (0 != s) {
            s = !1;
            var a = this;
            (i = t.getMemberId()) ? wx.request({
                url: t.globalData.comUrl + "tabs_delCollectionByObjId.action",
                data: {
                    id: e,
                    memberId: i
                },
                success: function(t) {
                    a.getCollectStatus();
                },
                fail: function(a) {
                    t.hint("取消收藏失败");
                }
            }) : (s = !0, wx.navigateTo({
                url: "/pages/login/login"
            }));
        }
    },
    getCollectStatus: function() {
        if (i = t.getMemberId()) {
            var o = this;
            wx.request({
                url: t.globalData.comUrl + "tabs_checkCollection.action",
                data: {
                    appId: a.appId,
                    memberId: i,
                    id: e
                },
                success: function(a) {
                    var e = t.getJsonData(a.data);
                    o.setData({
                        collectStatus: e.isExisted
                    });
                },
                fail: function(a) {
                    t.hint();
                },
                complete: function() {
                    s = !0, r = !0;
                }
            });
        }
    },
    phonecall: function() {
        var t = this.data.storeInfo.phone;
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    locationtap: function() {
        var t = this, a = t.data.storeInfo.gdLatitude;
        a = (1 * a).toFixed(6);
        var o = t.data.storeInfo.gdLongitude;
        o = (1 * o).toFixed(6), wx.openLocation({
            latitude: parseFloat(a),
            longitude: parseFloat(o),
            name: t.data.storeInfo.branchName,
            address: t.data.storeInfo.address,
            scale: 28
        });
    },
    customtap: function() {
        wx.navigateTo({
            url: "/pages/store/custom/custom?branchId=" + this.data.storeInfo.id
        });
    },
    onReachBottom: function() {
        c < l ? (c++, this.getMoreProduct()) : c > 1 && (this.data.productArr.length > 1 ? this.setData({
            bottomHint: !1
        }) : this.setData({
            bottomHint: !0
        }));
    },
    onShareAppMessage: function() {
        var t = this;
        return {
            title: t.data.storeInfo.branchName,
            path: "/pages/store/store-o2o/store-detail/store-detail?tabContentId=" + t.data.storeInfo.id,
            success: function(t) {},
            fail: function(t) {}
        };
    }
});