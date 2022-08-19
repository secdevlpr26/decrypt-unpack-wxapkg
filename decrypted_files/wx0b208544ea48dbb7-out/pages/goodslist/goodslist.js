var t = getApp(), a = t.globalData.config.base, o = !1, e = {
    store: "store",
    category: "category"
};

Page({
    data: {
        order: {
            text: "默认排序",
            number: 2,
            show: !1,
            page: 1
        },
        goodsList: [],
        page: 1,
        isLoad: !0
    },
    onShareAppMessage: function() {
        return {
            title: t.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onLoad: function(t) {
        (t = t || {}).entrance = t.entrance || e.category;
        var a = t.entrance;
        a == e.store ? this.setData({
            storeId: parseInt(t.id)
        }) : a == e.category && this.setData({
            categoryId: parseInt(t.id)
        }), this.getListinfo(this.data.page);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    loadMore: function() {
        o || (o = !0, this.getListinfo(this.data.page));
    },
    switchOrder: function() {
        var t = this.data.order;
        t.show = !t.show, this.setData({
            order: t
        });
    },
    orderHide: function(t) {
        var a = t.currentTarget.dataset.order, o = this.data.order;
        1 == a ? (o.text = "价格从高到低", o.number = 1) : 0 == a ? (o.text = "价格从低到高", o.number = 0) : 2 == a && (o.text = "按时间最新", 
        o.number = 2), o.show = !1, this.setData({
            order: o,
            page: 1,
            goodsList: [],
            isLoad: !0
        });
        var e = this.data.page;
        this.getListinfo(e);
    },
    getListinfo: function(t) {
        var e = this, i = this.data.order.number, s = this.data.isLoad, r = this.data.storeId, n = this.data.categoryId, d = {
            sort: i,
            page: t
        };
        r ? (d.catid = "", d.shop_id = r) : n && (d.catid = n, d.shop_id = ""), s && (wx.showNavigationBarLoading(), 
        wx.request({
            url: a + "Mobile/Api/goodsList",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: d,
            success: function(a) {
                o = !1;
                var i = [];
                0 == t ? e.setData({
                    goodsList: []
                }) : i = e.data.goodsList, t++, console.log(a), e.setData({
                    goodsList: i.concat(a.data.goods),
                    page: t,
                    isLoad: 1 == a.data.goodStatus
                }), wx.hideNavigationBarLoading();
            },
            fail: function() {
                o = !1;
            }
        }));
    },
    toToGoods: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../goods/goods?id=" + a
        });
    }
});