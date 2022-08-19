var t = getApp(), a = t.globalData.projectInfo, e = t.globalData.customizeTabId, o = "", i = "", n = {}, s = !0, r = !0, c = 1, d = 1;

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
        actDistribution: {},
        hideBox: !0
    },
    onLoad: function(i) {
        var n = decodeURIComponent(i.scene);
        o = n && "undefined" != n ? n : i.tabContentId, console.log(n), t.loginVzSystem(), 
        a = t.globalData.projectInfo, e = t.globalData.customizeTabId;
        var s = wx.getStorageSync("memberType" + t.globalData.autoId);
        this.setData({
            memberType: s
        }), t.globalData.actDistribution && this.setData({
            actDistribution: t.globalData.actDistribution
        });
        var r = this;
        c = 1, r.getStoreInfo(), r.getCollectStatus(), r.getQRCode();
    },
    nav_tap: function(t) {
        var a = 0;
        "1" == t.currentTarget.dataset.index ? (a = 1, this.getProductList()) : a = "2" == t.currentTarget.dataset.index ? 2 : 3, 
        this.setData({
            tapIndex: a
        });
    },
    getStoreInfo: function() {
        var e = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getSingleBranchInfo.action",
            data: {
                appId: a.appId,
                tabContentId: o
            },
            success: function(a) {
                n = t.getJsonData(a.data), console.log(n);
                for (var o = [ n.pic1, n.pic2, n.pic3, n.pic4, n.pic5 ], i = [], s = 0; s < o.length; s++) o[s] && (o[s] = t.modifyPicSize(o[s], "_r375x175p"), 
                i.push(o[s]));
                n.shortDescription = t.filterSpecialSymbol(n.shortDescription), n.longDescription = t.filterSpecialSymbol(n.longDescription), 
                e.setData({
                    storeInfo: n,
                    storeImgArr: i
                }), wx.setNavigationBarTitle({
                    title: n.branchName
                }), e.getProductList();
            },
            fail: function(a) {
                t.hint();
            }
        });
    },
    getProductList: function() {
        var o = this, i = o.data.storeInfo.id;
        wx.request({
            url: t.globalData.comUrl + "tabs_getZXProductListByCategory.action",
            data: {
                appId: a.appId,
                customizeTabId: e.LynxProductList,
                current: "1",
                status: "2",
                branchInfoId: i,
                isGroup: t.globalData.isGroup,
                sortName: "prodSequence"
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                d = e.pages, o.setData({
                    productArr: e.pageList
                }), wx.hideToast();
            },
            fail: function(a) {
                t.hint();
            }
        });
    },
    getQRCode: function() {
        var a = this;
        wx.request({
            url: t.globalData.paymentUrl + "/WechatAlipay/getWXAcode",
            data: {
                page: "pages/store/store-detail/store-detail",
                projectId: t.globalData.projectInfo.appId,
                scene: o
            },
            success: function(t) {
                console.log(t.data), a.setData({
                    QRCodeImage: t.data.content.miniQRCode
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    getMoreProduct: function() {
        var o = this, i = o.data.storeInfo.id;
        wx.request({
            url: t.globalData.comUrl + "tabs_getZXProductListByCategory.action",
            data: {
                appId: a.appId,
                customizeTabId: e.LynxProductList,
                current: c,
                status: "2",
                branchInfoId: i,
                isGroup: t.globalData.isGroup,
                sortName: "prodSequence"
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                o.setData({
                    productArr: o.data.productArr.concat(e.pageList)
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
        if (0 != s) {
            s = !1;
            var e = this;
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
                    e.getCollectStatus();
                },
                fail: function(a) {
                    t.hint("收藏失败");
                }
            }) : (s = !0, wx.navigateTo({
                url: "/pages/login/login"
            }));
        }
    },
    cancelCollect: function() {
        if (0 != r) {
            r = !1;
            var a = this;
            (i = t.getMemberId()) ? wx.request({
                url: t.globalData.comUrl + "tabs_delCollectionByObjId.action",
                data: {
                    id: o,
                    memberId: i
                },
                success: function(t) {
                    a.getCollectStatus();
                },
                fail: function(a) {
                    t.hint("取消收藏失败");
                }
            }) : (r = !0, wx.navigateTo({
                url: "/pages/login/login"
            }));
        }
    },
    getCollectStatus: function() {
        if (i = t.getMemberId()) {
            var e = this;
            wx.request({
                url: t.globalData.comUrl + "tabs_checkCollection.action",
                data: {
                    appId: a.appId,
                    memberId: i,
                    id: o
                },
                success: function(a) {
                    var o = t.getJsonData(a.data);
                    e.setData({
                        collectStatus: o.isExisted
                    });
                },
                fail: function(a) {
                    t.hint();
                },
                complete: function() {
                    r = !0, s = !0;
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
        var e = t.data.storeInfo.gdLongitude;
        e = (1 * e).toFixed(6), wx.openLocation({
            latitude: parseFloat(a),
            longitude: parseFloat(e),
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
    showBox: function() {
        this.setData({
            hideBox: !this.data.hideBox
        });
    },
    saveIamge: function() {
        this.setData({
            hideBox: !0
        });
        var t = this;
        wx.previewImage({
            current: t.data.QRCodeImage,
            urls: [ t.data.QRCodeImage ]
        });
    },
    onReachBottom: function() {
        c < d ? (c++, this.getMoreProduct()) : c > 1 && (this.data.productArr.length > 1 ? this.setData({
            bottomHint: !1
        }) : this.setData({
            bottomHint: !0
        }));
    },
    onShareAppMessage: function() {
        var t = this;
        return t.setData({
            hideBox: !0
        }), {
            title: t.data.storeInfo.branchName,
            path: "/pages/store/store-detail/store-detail?tabContentId=" + t.data.storeInfo.id,
            success: function(t) {},
            fail: function(t) {}
        };
    }
});