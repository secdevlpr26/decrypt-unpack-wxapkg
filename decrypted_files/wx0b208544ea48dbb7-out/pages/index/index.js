var t, e, a = getApp(), o = a.globalData.config.base;

Page({
    data: {
        isload: !0,
        page: 1,
        goodsList: [],
        storeList: [],
        city: {},
        searchVal: "",
        linkType: a.globalData.linkType
    },
    onShareAppMessage: function() {
        return {
            title: a.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || t.upperuid)
        };
    },
    onReady: function() {
        wx.setNavigationBarTitle({
            title: a.globalData.config.title
        });
    },
    onLoad: function(a) {
        var o, i = this;
        t = a, a.scene = a.scene ? a.scene + "" : "", 0 == a.scene.indexOf("upperuid_") && (o = a.scene.split("_"), 
        t.upperuid = o[1] || ""), this.closeShow = !0, i.getCity(!0), i.getIndexData(), 
        t && t.upperuid && e.bindAgent(t.upperuid), i.setData({
            shop: "品牌"
        });
    },
    onShow: function() {
        if (this.closeShow) this.closeShow = !1; else {
            var t = this, e = !0;
            wx.getStorageSync("city") ? ((a.refreshHome || void 0 === a.refreshHome) && (e = !1, 
            t.getCity(e), t.getIndexData()), a.refreshHome = !1) : wx.showModal({
                title: "提示",
                content: "暂不能获取你的定位信息，请手动选择",
                showCancel: !1,
                complete: function() {
                    t.gotoCity();
                }
            });
        }
    },
    jump: function(t) {
        var e = t.currentTarget.dataset, a = this.data.linkType[e.type], o = e.id;
        wx.navigateTo({
            url: a + "?id=" + o
        });
    },
    getIndexData: function() {
        var t = this;
        wx.request({
            url: o + "Mobile/Api/index",
            method: "GET",
            header: {
                "content-type": "application"
            },
            success: function(e) {
                t.setData({
                    indexData: e.data
                });
            }
        });
    },
    getGoodsList: function(t) {
        var e = this, a = this.data.isload, i = wx.getStorageSync("city").id;
        a && (wx.showNavigationBarLoading(), e.setData({
            isload: !1
        }), wx.request({
            url: o + "Mobile/Api/indexGoods",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                page: t,
                city_id: i
            },
            success: function(a) {
                console.log("================"), console.log(a);
                var o = 0 != a.data.goodStatus, i = [];
                1 == t && (i = []), 1 != t && (i = e.data.goodsList), o && t++, e.setData({
                    goodsList: i.concat(a.data.goods),
                    storeList: a.data.shop,
                    page: t,
                    isload: o
                }), wx.hideNavigationBarLoading();
            }
        }));
    },
    loadMore: function() {
        this.getGoodsList(this.data.page);
    },
    gotoCity: function() {
        wx.navigateTo({
            url: "../city/city"
        });
    },
    gotoStore: function() {
        wx.navigateTo({
            url: "../store/store"
        });
    },
    toToGoods: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../goods/goods?id=" + e
        });
    },
    search: function(t) {
        var e = /(^\s*)|(\s*$)/g, a = t.detail.value.replace(e, "");
        this.setData({
            searchVal: a
        });
    },
    toSearch: function() {
        var t = this.data.searchVal;
        t && wx.navigateTo({
            url: "../search/search?search=" + t
        });
    },
    getCity: function(t) {
        var e = this, a = wx.getStorageSync("city");
        if (t || !a) return wx.showLoading({
            title: "定位中"
        }), void e.getPos(function(t) {
            if (wx.hideLoading(), t || a) {
                if (!t) return a ? (e.setData({
                    city: a,
                    isload: !0,
                    page: 1
                }), void e.getGoodsList(e.data.page)) : void 0;
                e.setCity(t, function(t) {
                    var a = {
                        name: t.data.city_name,
                        id: t.data.city_id
                    };
                    wx.setStorageSync("city", a), e.setData({
                        city: a,
                        isload: !0,
                        page: 1
                    }), wx.hideLoading(), e.getGoodsList(e.data.page);
                });
            } else wx.showModal({
                title: "提示",
                content: "暂不能获取你的定位信息，请手动选择",
                showCancel: !1,
                complete: function() {
                    e.gotoCity();
                }
            });
        });
        e.setData({
            city: a,
            isload: !0,
            page: 1
        }), e.getGoodsList(e.data.page);
    },
    getPos: function(t) {
        wx.getLocation({
            type: "gcj02",
            success: function(e) {
                var a = !1;
                e && e.latitude && e.longitude && (a = e.latitude + "," + e.longitude), t(a);
            },
            fail: function() {
                t(!1);
            }
        });
    },
    setCity: function(t, e) {
        wx.request({
            url: o + "Mobile/Api/getDefaultCity",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                location: t
            },
            success: function(t) {
                e && e(t);
            }
        });
    },
    toGoodsList: function(t) {
        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.entrance;
        wx.navigateTo({
            url: "../goodslist/goodslist?id=" + e + "&entrance=" + a
        });
    },
    toShop: function(t) {
        var e = t.currentTarget.dataset.id, a = t.currentTarget.dataset.entrance;
        wx.navigateTo({
            url: "../shop/shop?id=" + e + "&entrance=" + a
        });
    },
    onPullDownRefresh: function() {
        wx.removeStorageSync("city"), this.setData({
            city: {}
        }), this.getCity(), wx.stopPullDownRefresh();
    },
    onUnload: function() {},
    onReachBottom: function() {
        this.data.goodsList.length > 10 || this.loadMore();
    },
    checkUser: function(t) {
        return void (t && t());
    }
}), e = {
    bindAgent: function(t) {
        t / 1 != wx.getStorageSync("myuid") / 1 && (wx.setStorageSync("parentuid", t), wx.request({
            url: o + "Mobile/UserApi/bindupperuid",
            data: {
                userkey: a.globalData.userKey,
                upper_uid: t
            },
            success: function() {},
            fail: function() {}
        }));
    }
};