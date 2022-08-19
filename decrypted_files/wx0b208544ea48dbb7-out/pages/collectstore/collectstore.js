var t = getApp(), e = t.globalData.config.base;

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
    delShop: function(a) {
        var o = a.currentTarget.dataset.id, n = this;
        wx.request({
            url: e + "Mobile/UserApi/cancle_shopcollect",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: t.globalData.userKey,
                shop_id: o
            },
            success: function(t) {
                n.getStoreList();
            }
        });
    },
    getStoreList: function(a) {
        var o = this;
        wx.request({
            url: e + "Mobile/UserApi/shopcollectlist",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: t.globalData.userKey
            },
            success: function(t) {
                t && t.data && t.data.error > 0 || t.data.data, o.setData({
                    storeList: t.data.data
                });
            },
            fail: function() {
                o.setData({
                    storeList: []
                });
            }
        });
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
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../shop/shop?id=" + e + "&entrance=store"
        });
    }
});