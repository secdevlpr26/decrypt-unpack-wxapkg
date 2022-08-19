function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = getApp(), o = e.globalData.projectInfo, r = e.globalData.customizeTabId, s = 1, n = 1;

Page({
    data: (a = {
        styleConfig: e.globalData.styleConfig,
        adArr: [],
        storeArr: [],
        show: !1,
        bCate_code: 0,
        smCate_code: 0,
        provinceId: -1,
        cityId: -1,
        categoryId: -1,
        level: 0,
        bigCategory: [],
        showBigCate: !1,
        smallCategory: [],
        showSmallCate: !0,
        provinceArr: [],
        cityArr: [],
        showProvince: !1,
        showCity: !1
    }, t(a, "show", !1), t(a, "noStore", !0), t(a, "bottomHint", !0), a),
    onLoad: function() {
        e.loginVzSystem(), wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4,
            mask: !0
        });
        var t = this;
        t.storeInfo(), t.getBigCategory();
    },
    toSearch: function(t) {
        wx.navigateTo({
            url: "../search/search?type=1"
        });
    },
    menutap: function() {
        this.setData({
            show: !this.data.show
        });
    },
    confirm: function() {
        this.setData({
            storeArr: [],
            adArr: [],
            noStore: !0,
            bottomHint: !0
        }), s = 1, this.setData({
            show: !this.data.show
        }), this.storeInfo();
    },
    storeInfo: function() {
        var t = this, a = {
            appId: o.appId,
            customizeTabId: r.LynxAbout_Merchant,
            advertisement: 1,
            current: s
        };
        t.data.level > 0 && (a.level = t.data.level), t.data.provinceId > 0 && (a.provinceId = t.data.provinceId), 
        t.data.cityId > 0 && (a.cityId = t.data.cityId), t.data.categoryId > 0 && (a.categoryId = t.data.categoryId);
        try {
            wx.request({
                url: e.globalData.comUrl + "mctab_searchBranchInfo.action",
                data: a,
                success: function(a) {
                    var o = e.getJsonData(a.data);
                    n = o.pages;
                    for (var r = 0; r < o.pageList.length; r++) o.pageList[r].isAdvertisement && t.data.adArr.push(o.pageList[r]), 
                    o.pageList[r].pic1 = e.modifyPicSize(o.pageList[r].pic1, "_rx300p");
                    t.setData({
                        storeArr: t.data.storeArr.concat(o.pageList),
                        bottomHint: !0
                    }), 1 == s && t.setData({
                        adArr: t.data.adArr
                    }), 0 == t.data.storeArr.length ? t.setData({
                        noStore: !1
                    }) : t.setData({
                        noStore: !0
                    }), wx.hideToast(), wx.stopPullDownRefresh();
                },
                fail: function(t) {
                    e.hint();
                }
            });
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            e.hint(t);
        }
    },
    onReachBottom: function() {
        s < n ? (s++, this.storeInfo()) : s > 1 && (this.data.storeArr.length > 1 ? this.setData({
            bottomHint: !1
        }) : this.setData({
            bottomHint: !0
        }));
    },
    onPullDownRefresh: function() {
        this.reset();
    },
    getBigCategory: function() {
        var t = this;
        wx.request({
            url: e.globalData.comUrl + "tabs_getPhotoInfoTabCategory.action",
            data: {
                appId: o.appId,
                customizeTabId: r.LynxAbout_Merchant
            },
            success: function(a) {
                var o = e.getJsonData(a.data);
                t.setData({
                    bigCategory: o
                });
            },
            fail: function(t) {
                e.hint("获取大类失败");
            }
        });
    },
    bigCate_unfold: function() {
        this.setData({
            showBigCate: !this.data.showBigCate
        });
    },
    getSmallCategory: function(t) {
        var a = this;
        a.setData({
            bCate_code: t.currentTarget.dataset.code,
            categoryId: t.currentTarget.dataset.code
        }), wx.request({
            url: e.globalData.comUrl + "tabs_getPhotoInfoTabCategoryFromL1toL2.action",
            data: {
                appId: o.appId,
                customizeTabId: r.LynxAbout_Merchant,
                categoryCode: t.currentTarget.dataset.code
            },
            success: function(t) {
                var o = e.getJsonData(t.data);
                a.setData({
                    smallCategory: o,
                    showSmallCate: !1
                }), s = 1, a.setData({
                    level: 1
                });
            },
            fail: function(t) {
                e.hint();
            }
        });
    },
    smCateTap: function(t) {
        0 != t.currentTarget.dataset.code ? this.setData({
            level: "",
            smCate_code: t.currentTarget.dataset.code,
            categoryId: t.currentTarget.dataset.code
        }) : this.setData({
            level: 1,
            smCate_code: t.currentTarget.dataset.code,
            categoryId: this.data.bCate_code
        });
    },
    getProvinceInfo: function() {
        var t = this;
        wx.request({
            url: e.globalData.comUrl + "mctab_getBranchProvinces.action",
            data: {
                appId: o.appId,
                customizeTabId: r.LynxAbout_Merchant
            },
            success: function(a) {
                var o = e.getJsonData(a.data);
                t.setData({
                    provinceArr: o
                });
            },
            fail: function(t) {
                e.hint();
            }
        });
    },
    getCityInfo: function(t) {
        var a = this;
        a.setData({
            provinceId: t.currentTarget.dataset.proid
        }), "0" == t.currentTarget.dataset.proid ? (s = 1, a.setData({
            provinceId: "",
            cityId: "",
            showCity: !1
        })) : wx.request({
            url: e.globalData.comUrl + "mctab_getBranchCitys.action",
            data: {
                appId: o.appId,
                customizeTabId: r.LynxAbout_Merchant,
                provinceId: t.currentTarget.dataset.proid
            },
            success: function(t) {
                var o = e.getJsonData(t.data);
                a.setData({
                    cityArr: o,
                    showCity: !0
                });
            },
            fail: function(t) {
                e.hint();
            }
        });
    },
    citytap: function(t) {
        "0" == t.currentTarget.dataset.cityid ? this.setData({
            cityId: ""
        }) : this.setData({
            cityId: t.currentTarget.dataset.cityid
        }), s = 1;
    },
    prov_unfold: function() {
        this.setData({
            showProvince: !this.data.showProvince
        }), this.getProvinceInfo();
    },
    reset: function() {
        s = 1, n = 1, this.setData({
            adArr: [],
            storeArr: [],
            showBigCate: !1,
            showSmallCate: !1,
            showProvince: !1,
            showCity: !1,
            bottomHint: !0,
            bCate_code: 0,
            smCate_code: 0,
            provinceId: -1,
            cityId: -1,
            categoryId: -1,
            level: 0
        }), this.storeInfo();
    },
    onShareAppMessage: function() {
        return {
            title: "商铺",
            path: "/pages/store/store",
            success: function(t) {},
            fail: function(t) {}
        };
    }
});