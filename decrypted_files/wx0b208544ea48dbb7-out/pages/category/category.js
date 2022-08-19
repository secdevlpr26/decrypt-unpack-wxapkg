var t = getApp(), e = t.globalData.config.base;

Page({
    data: {
        crrentIndex: 0
    },
    onShareAppMessage: function() {
        return {
            title: t.globalData.config.title,
            path: "/pages/index/index?upperuid=" + (wx.getStorageSync("myuid") || wx.getStorageSync("parentuid") || param.upperuid)
        };
    },
    onLoad: function(t) {
        this.getCategory();
    },
    onReady: function() {},
    menuSelect: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            crrentIndex: e
        }), this.setMeunContent(e);
    },
    setMeunContent: function(t) {
        var e = this.data.category;
        this.setData({
            meunContent: e[t].data
        });
    },
    search: function(t) {
        var e = /(^\s*)|(\s*$)/g, a = t.detail.value.replace(e, "");
        this.setData({
            searchVal: a
        });
    },
    getCategory: function() {
        var a = this, n = t.globalData.cityId;
        wx.request({
            url: e + "Mobile/Api/category",
            header: {
                "content-type": "application"
            },
            data: {
                cityid: n
            },
            success: function(t) {
                console.log(t), a.setData({
                    category: t.data
                }), a.setMeunContent(a.data.crrentIndex);
            }
        });
    },
    toGoodsList: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../goodslist/goodslist?id=" + e + "&entrance=category"
        });
    },
    toSearch: function() {
        var t = this.data.searchVal;
        t && wx.navigateTo({
            url: "../search/search?search=" + t
        });
    }
});