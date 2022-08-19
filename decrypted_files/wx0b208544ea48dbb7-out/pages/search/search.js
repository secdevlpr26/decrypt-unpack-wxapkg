function t(t, a, o) {
    return a in t ? Object.defineProperty(t, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = o, t;
}

var a, o = getApp(), e = o.globalData.config.base;

Page((a = {
    data: {
        goodsList: [],
        page: 1,
        isLoad: !0
    },
    onShareAppMessage: function() {
        return {
            title: o.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onLoad: function(t) {
        this.setData({
            searchVal: t.search
        });
    },
    onReady: function() {
        this.getSearchResult(this.data.page);
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
}, t(a, "onShareAppMessage", function() {}), t(a, "onReachBottom", function() {}), 
t(a, "onPullDownRefresh", function() {}), t(a, "getSearchResult", function(t) {
    var a = this.data.searchVal, o = t, n = this;
    this.data.isLoad && (n.setData({
        isLoad: !1
    }), wx.request({
        url: e + "Mobile/Api/searchGoodsList",
        method: "GET",
        header: {
            "content-type": "application"
        },
        data: {
            search: a,
            page: o,
            sort: 2
        },
        success: function(a) {
            var e = a.data.goods, i = 1 == a.data.goodStatus, s = n.data.goodsList, c = [];
            c = 1 == t ? e : s.concat(e), i && o++, n.setData({
                goodsList: c,
                isLoad: i,
                page: o
            });
        }
    }));
}), t(a, "loadMore", function() {
    console.log("1"), this.getSearchResult(this.data.page);
}), t(a, "toToGoods", function(t) {
    var a = t.currentTarget.dataset.id;
    wx.navigateTo({
        url: "../goods/goods?id=" + a
    });
}), a));