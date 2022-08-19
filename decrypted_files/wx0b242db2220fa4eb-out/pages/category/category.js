var t = require("../../utils/server");

Page({
    data: {
        topCategories: [],
        subCategories: [],
        highlight: [ "highlight", "", "", "", "", "", "", "", "", "", "", "" ],
        banner: ""
    },
    onLoad: function() {
        this.getTopCategory();
    },
    tapTopCategory: function(t) {
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.banner, r = parseInt(t.currentTarget.dataset.index);
        this.setHighlight(r), this.getCategory(a), this.getBanner(e);
    },
    getTopCategory: function(a) {
        var e = this;
        t.getJSON("/Goods/goodsCategoryList", function(t) {
            var a = t.data.result;
            e.setData({
                topCategories: a
            }), e.getCategory(a[0].id), e.getBanner(a[0].mobile_name);
        });
    },
    getCategory: function(a) {
        var e = this;
        t.getJSON("/Goods/goodsCategoryList/parent_id/" + a, function(t) {
            var a = t.data.result;
            e.setData({
                subCategories: a
            });
        });
    },
    setHighlight: function(t) {
        for (var a = [], e = 0; e < this.data.topCategories; e++) a[e] = "";
        a[t] = "highlight", this.setData({
            highlight: a
        });
    },
    avatarTap: function(t) {
        var a = t.currentTarget.dataset.objectId;
        wx.navigateTo({
            url: "../../../../goods/list/list?categoryId=" + a
        });
    },
    getBanner: function(a) {
        var e = this;
        t.getJSON("/goods/categoryBanner/banner_name/" + a, function(t) {
            var a = t.data.banner;
            e.setData({
                banner: a
            });
        });
    }
});