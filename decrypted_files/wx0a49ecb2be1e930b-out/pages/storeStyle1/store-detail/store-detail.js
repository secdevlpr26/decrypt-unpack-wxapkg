var t = require("../../../utils/wxParse/wxParse.js"), a = getApp(), o = a.globalData.projectInfo, e = a.globalData.customizeTabId, n = "", r = "", i = {}, s = !0, c = !0, d = 1, l = 1;

Page({
    data: {
        storeInfo: {},
        productArr: [],
        collectStatus: "0",
        tapIndex: 1,
        bottomHint: !0,
        isGroup: a.globalData.isGroup
    },
    onLoad: function(t) {
        o = a.globalData.projectInfo, e = a.globalData.customizeTabId;
        var n = this;
        d = 1, n.getStoreInfo(t), n.getCollectStatus();
    },
    nav_tap: function(t) {
        var a = 0;
        "1" == t.currentTarget.dataset.index ? (a = 1, this.getProductList()) : a = "2" == t.currentTarget.dataset.index ? 2 : 3, 
        this.setData({
            tapIndex: a
        });
    },
    getStoreInfo: function(e) {
        var r = this;
        n = e.tabContentId, wx.request({
            url: a.globalData.comUrl + "tabs_getSingleBranchInfo.action",
            data: {
                appId: o.appId,
                tabContentId: n
            },
            success: function(o) {
                i = a.getJsonData(o.data), t.wxParse("shortDescription", "html", i.shortDescription, r, 5), 
                r.setData({
                    storeInfo: i
                }), wx.setNavigationBarTitle({
                    title: i.branchName
                }), r.getProductList();
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
                isGroup: a.globalData.isGroup
            },
            success: function(o) {
                var e = a.getJsonData(o.data);
                l = e.pages, t.setData({
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
                current: d,
                status: "2",
                branchInfoId: n
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
        wx.redirectTo({
            url: "../../product/pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    collect: function() {
        if (0 != s) {
            s = !1;
            var t = this;
            (r = a.getMemberId()) ? wx.request({
                url: a.globalData.comUrl + "tabs_addCollection.action",
                data: {
                    appId: o.appId,
                    memberId: r,
                    type: 2,
                    objId: i.id,
                    name: i.branchName,
                    address: i.address,
                    tell: i.tel,
                    pic_url: i.pic1
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
            (r = a.getMemberId()) ? wx.request({
                url: a.globalData.comUrl + "tabs_delCollectionByObjId.action",
                data: {
                    id: n,
                    memberId: r
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
        if (r = a.getMemberId()) {
            var t = this;
            wx.request({
                url: a.globalData.comUrl + "tabs_checkCollection.action",
                data: {
                    appId: o.appId,
                    memberId: r,
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
            url: "custom/custom"
        });
    },
    onReachBottom: function() {
        d < l ? (d++, this.getMoreProduct()) : d > 1 && (this.data.productArr.length > 1 ? this.setData({
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