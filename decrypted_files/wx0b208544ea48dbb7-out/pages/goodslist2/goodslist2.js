var t = getApp(), a = t.globalData.config.base;

Page({
    data: {
        order: {
            text: "默认排序",
            number: 2,
            show: !1,
            page: 1
        },
        isload: !0,
        page: 1,
        goodsList: [],
        storeList: [],
        city: {},
        searchVal: ""
    },
    onShareAppMessage: function() {
        return {
            title: t.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onLoad: function() {
        this.getGoodsList(1);
    },
    onShow: function() {},
    getIndexData: function() {
        var t = this;
        wx.request({
            url: a + "Mobile/Api/index",
            method: "GET",
            header: {
                "content-type": "application"
            },
            success: function(a) {
                t.setData({
                    indexData: a.data
                });
            }
        });
    },
    orderHide: function(t) {
        var a = t.currentTarget.dataset.order, e = this.data.order;
        1 == a ? (e.text = "价格从高到低", e.number = 1) : 0 == a ? (e.text = "价格从低到高", e.number = 0) : 2 == a && (e.text = "按时间最新", 
        e.number = 2), e.show = !1, this.setData({
            order: e,
            page: 1,
            goodsList: [],
            isload: !0
        });
        var o = this.data.page;
        this.getGoodsList(o);
    },
    getGoodsList: function(t) {
        var e = this;
        console.log(this.data);
        var o = this.data.isload, i = this.data.order.number, s = wx.getStorageSync("city").id;
        o ? (wx.showNavigationBarLoading(), e.setData({
            isload: !1
        }), wx.request({
            url: a + "Mobile/Api/indexGoods",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                page: t,
                city_id: s,
                sort: i
            },
            success: function(a) {
                console.log(a);
                var o = 0 != a.data.goodStatus, i = [];
                1 == t && (i = []), 1 != t && (i = e.data.goodsList), o && t++, e.setData({
                    goodsList: i.concat(a.data.goods),
                    storeList: a.data.shop,
                    page: t,
                    isload: o
                }), wx.hideNavigationBarLoading();
            }
        })) : isLoadMore = !1;
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
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../goods/goods?id=" + a
        });
    },
    search: function(t) {
        var a = /(^\s*)|(\s*$)/g, e = t.detail.value.replace(a, "");
        this.setData({
            searchVal: e
        });
    },
    toSearch: function() {
        var t = this.data.searchVal;
        t && wx.navigateTo({
            url: "../search/search?search=" + t
        });
    },
    getCity: function() {
        var t = this, a = wx.getStorageSync("city");
        a ? a && (t.setData({
            city: a,
            isload: !0,
            page: 1
        }), t.getGoodsList(t.data.page), console.log("成功")) : (wx.showLoading({
            title: "定位中"
        }), wx.getLocation({
            success: function(a) {
                a.latitude, a.longitude;
                t.setCity("23.122332,113.307262", function(a) {
                    var e = {
                        name: a.data.city_name,
                        id: a.data.city_id
                    };
                    wx.setStorageSync("city", e), t.setData({
                        city: e,
                        isload: !0,
                        page: 1
                    }), wx.hideLoading(), t.getGoodsList(t.data.page);
                });
            },
            fail: function() {
                t.setCity("113.307262,23.122332", function(a) {
                    var e = {
                        name: a.data.city_name,
                        id: a.data.city_id
                    };
                    wx.setStorageSync("city", e), t.setData({
                        city: e,
                        isload: !0,
                        page: 1
                    }), wx.hideLoading(), t.getGoodsList(t.data.page);
                });
            }
        }));
    },
    setCity: function(t, e) {
        wx.request({
            url: a + "Mobile/Api/getDefaultCity",
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
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.entrance;
        wx.navigateTo({
            url: "../goodslist/goodslist?id=" + a + "&entrance=" + e
        });
    },
    onPullDownRefresh: function() {},
    onUnload: function() {},
    onReachBottom: function() {
        this.loadMore();
    }
});