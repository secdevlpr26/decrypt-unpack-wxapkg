var t = getApp(), a = t.globalData.config.base;

Page({
    data: {
        storeList: [],
        page: 1,
        isLoad: !0
    },
    onLoad: function(t) {},
    onReady: function() {
        this.getStoreList(this.data.page);
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: t.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    getStoreList: function(t) {
        var o = this;
        this.data.isLoad && (o.setData({
            isLoad: !1
        }), wx.request({
            url: a + "Mobile/Api/shopList",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                page: t
            },
            success: function(a) {
                var e = 1 == a.data.shopStatus, i = [];
                1 !== t && (i = o.data.storeList), e && t++, o.setData({
                    storeList: i.concat(a.data.goods),
                    isLoad: e,
                    page: t
                });
            }
        }));
    },
    loadMore: function() {
        this.getStoreList(this.data.page);
    },
    toIndex: function() {
        wx.redirectTo({
            url: "../city/city"
        });
    },
    toGoodsList: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../shop/shop?id=" + a + "&entrance=store"
        });
    }
});