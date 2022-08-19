var t, a = getApp(), o = a.globalData.config.base, e = !1, s = {
    store: "store",
    category: "category"
};

Page({
    data: {
        order: {
            number: "",
            show: !1,
            page: 1
        },
        currentTab: 1,
        goodsList: [],
        page: 1,
        isLoad: !0,
        shopInfo: {},
        collect: !1
    },
    onShareAppMessage: function() {
        return {
            title: a.globalData.config.title,
            path: "/pages/shop/shop",
            success: function(t) {},
            fail: function(t) {}
        };
    },
    onLoad: function(a) {
        a = a || {}, console.log(a), t = a.id, a.entrance = a.entrance || s.store;
        var o = a.entrance;
        o == s.store ? this.setData({
            storeId: parseInt(a.id)
        }) : o == s.category && this.setData({
            categoryId: parseInt(a.id)
        }), this.setData({
            id: a.id
        }), this.getListinfo(this.data.page), this.getShopInfo(a.id), this.checkFlow(a.id);
    },
    getShopInfo: function(t) {
        var a = this;
        wx.request({
            url: o + "Mobile/Api/shopInfo",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                shop_id: t
            },
            success: function(t) {
                console.log(t), 0 === t.data.error && a.setData({
                    shopInfo: t.data.data || {}
                }), console.log(t);
            }
        });
    },
    flow: function() {
        console.log("ff");
        var e = this;
        wx.request({
            url: o + "Mobile/UserApi/shopcollect",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: a.globalData.userKey,
                shop_id: t
            },
            success: function(a) {
                if (a && a.data && 0 === a.data.error) return wx.showToast({
                    title: "收藏成功",
                    icon: "success"
                }), e.setData({
                    collect: !0
                }), void e.getShopInfo(t);
                wx.showToast({
                    title: "收藏失败"
                });
            },
            fail: function() {
                wx.showToast({
                    title: "收藏失败"
                });
            }
        });
    },
    checkFlow: function(t) {
        var e = this;
        wx.request({
            url: o + "Mobile/UserApi/is_shopcollect",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: a.globalData.userKey,
                shop_id: t
            },
            success: function(t) {
                t && t.data && 1 === t.data.error && e.setData({
                    collect: !0
                });
            }
        });
    },
    onShow: function() {},
    changeTab: function(t) {
        var a = t.currentTarget.dataset.tab, o = "";
        switch (!0) {
          case 1 == a:
            o = 0;
            break;

          case 2 == a:
            o = 1;
            break;

          case 3 == a:
            o = 2;
            break;

          case 4 == a:
            o = 3;
        }
        this.setData({
            order: {
                number: o,
                show: !1,
                page: 1
            },
            currentTab: a,
            goodsList: [],
            page: 1,
            isLoad: !0
        }), this.getListinfo(this.data.page);
    },
    getListinfo: function(t) {
        var a = this, s = this.data.order.number || "", i = this.data.isLoad, n = this.data.storeId, c = this.data.categoryId, r = {
            type_id: s
        };
        n ? (r.catid = "", r.shop_id = n) : c && (r.catid = c, r.shop_id = ""), r.page = this.data.page, 
        i ? (wx.showNavigationBarLoading(), wx.request({
            url: o + "Mobile/Api/goodsList",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: r,
            success: function(o) {
                e = !1;
                var s = [];
                0 == t ? a.setData({
                    goodsList: []
                }) : s = a.data.goodsList, t++, a.setData({
                    goodsList: s.concat(o.data.goods),
                    page: t,
                    isLoad: 1 == o.data.goodStatus
                }), console.log(a.data), wx.hideNavigationBarLoading();
            },
            fail: function() {
                e = !1;
            }
        })) : e = !1;
    },
    toToGoods: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../goods/goods?id=" + a
        });
    },
    onReachBottom: function() {
        this.loadMore();
    },
    loadMore: function() {
        e || (e = !0, this.getListinfo(this.data.page));
    }
});