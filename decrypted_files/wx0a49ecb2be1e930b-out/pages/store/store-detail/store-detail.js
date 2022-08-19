var t = require("../../../utils/wxParse/wxParse.js"), a = getApp(), o = a.globalData.projectInfo, e = a.globalData.customizeTabId, n = "", i = "", r = {}, s = !0, c = !0, l = 1, d = 1;

Page({
    data: {
        styleConfig: a.globalData.styleConfig,
        storeInfo: {},
        productArr: [],
        collectStatus: "0",
        tapIndex: 1,
        bottomHint: !0,
        isGroup: a.globalData.isGroup,
        storeImg: [],
        actDistribution: {}
    },
    onLoad: function(t) {
        a.loginVzSystem(), o = a.globalData.projectInfo, e = a.globalData.customizeTabId;
        var n = wx.getStorageSync("memberType" + a.globalData.autoId);
        this.setData({
            memberType: n
        }), a.globalData.actDistribution && this.setData({
            actDistribution: a.globalData.actDistribution
        });
        var i = this;
        l = 1, i.getStoreInfo(t), i.getCollectStatus();
    },
    nav_tap: function(t) {
        var a = 0;
        "1" == t.currentTarget.dataset.index ? (a = 1, this.getProductList()) : a = "2" == t.currentTarget.dataset.index ? 2 : 3, 
        this.setData({
            tapIndex: a
        });
    },
    getStoreInfo: function(e) {
        var i = this;
        n = e.tabContentId, wx.request({
            url: a.globalData.comUrl + "tabs_getSingleBranchInfo.action",
            data: {
                appId: o.appId,
                tabContentId: n
            },
            success: function(o) {
                r = a.getJsonData(o.data), console.log(r);
                for (var e = [ r.pic1, r.pic2, r.pic3, r.pic4, r.pic5 ], n = [], s = 0; s < e.length; s++) e[s] && n.push(e[s]);
                t.wxParse("shortDescription", "html", r.shortDescription, i, 5), i.setData({
                    storeInfo: r,
                    storeImg: n
                }), wx.setNavigationBarTitle({
                    title: r.branchName
                }), i.getProductList();
            },
            fail: function(t) {
                a.hint();
            }
        });
    },
    getProductList: function() {
        var t = this, n = t.data.storeInfo.id;
        wx.request({
            url: a.globalData.comUrl + "tabs_getZXProductListByCategory.action",
            data: {
                appId: o.appId,
                customizeTabId: e.LynxProductList,
                current: "1",
                status: "2",
                branchInfoId: n,
                isGroup: a.globalData.isGroup,
                sortName: "prodSequence"
            },
            success: function(o) {
                var e = a.getJsonData(o.data);
                d = e.pages, t.setData({
                    productArr: e.pageList
                }), wx.hideToast();
            },
            fail: function(t) {
                a.hint();
            }
        });
    },
    getMoreProduct: function() {
        var t = this, n = t.data.storeInfo.id;
        wx.request({
            url: a.globalData.comUrl + "tabs_getZXProductListByCategory.action",
            data: {
                appId: o.appId,
                customizeTabId: e.LynxProductList,
                current: l,
                status: "2",
                branchInfoId: n,
                isGroup: a.globalData.isGroup,
                sortName: "prodSequence"
            },
            success: function(o) {
                var e = a.getJsonData(o.data);
                t.setData({
                    productArr: t.data.productArr.concat(e.pageList)
                });
            },
            fail: function(t) {
                a.hint();
            }
        });
    },
    toProDetail: function(t) {
        wx.navigateTo({
            url: "../../product/pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    collect: function() {
        if (0 != s) {
            s = !1;
            var t = this;
            (i = a.getMemberId()) ? wx.request({
                url: a.globalData.comUrl + "tabs_addCollection.action",
                data: {
                    appId: o.appId,
                    memberId: i,
                    type: 2,
                    objId: r.id,
                    name: r.branchName,
                    address: r.address,
                    tell: r.tel,
                    pic_url: r.pic1
                },
                success: function(a) {
                    t.getCollectStatus();
                },
                fail: function(t) {
                    a.hint("收藏失败");
                }
            }) : (s = !0, wx.navigateTo({
                url: "../../login/login"
            }));
        }
    },
    cancelCollect: function() {
        if (0 != c) {
            c = !1;
            var t = this;
            (i = a.getMemberId()) ? wx.request({
                url: a.globalData.comUrl + "tabs_delCollectionByObjId.action",
                data: {
                    id: n,
                    memberId: i
                },
                success: function(a) {
                    t.getCollectStatus();
                },
                fail: function(t) {
                    a.hint("取消收藏失败");
                }
            }) : (c = !0, wx.navigateTo({
                url: "../../login/login"
            }));
        }
    },
    getCollectStatus: function() {
        if (i = a.getMemberId()) {
            var t = this;
            wx.request({
                url: a.globalData.comUrl + "tabs_checkCollection.action",
                data: {
                    appId: o.appId,
                    memberId: i,
                    id: n
                },
                success: function(o) {
                    var e = a.getJsonData(o.data);
                    t.setData({
                        collectStatus: e.isExisted
                    });
                },
                fail: function(t) {
                    a.hint();
                },
                complete: function() {
                    c = !0, s = !0;
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
            url: "custom/custom?branchId=" + this.data.storeInfo.id
        });
    },
    onReachBottom: function() {
        l < d ? (l++, this.getMoreProduct()) : l > 1 && (this.data.productArr.length > 1 ? this.setData({
            bottomHint: !1
        }) : this.setData({
            bottomHint: !0
        }));
    },
    onShareAppMessage: function() {
        var t = this;
        return {
            title: t.data.storeInfo.branchName,
            path: "/pages/store/store-detail/store-detail?tabContentId=" + t.data.storeInfo.id,
            success: function(t) {},
            fail: function(t) {}
        };
    }
});