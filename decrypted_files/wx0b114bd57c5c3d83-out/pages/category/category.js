var t = require("../../utils/server");

Page({
    data: {
        topCategories: [],
        subCategories: [],
        highlight: [ "highlight", "", "", "", "", "", "", "", "", "", "", "" ],
        highlight2: [ "highlight", "", "", "", "", "", "", "", "", "", "", "" ],
        banner: ""
    },
    onLoad: function() {
        this.getTopCategory();
    },
    tapTopCategory: function(t) {
        var a = t.currentTarget.dataset.id, e = (t.currentTarget.dataset.banner, parseInt(t.currentTarget.dataset.index));
        this.setHighlight(e), this.getCategory2(a);
    },
    tapTopCategory2: function(t) {
        var a = t.currentTarget.dataset.id, e = (t.currentTarget.dataset.banner, parseInt(t.currentTarget.dataset.index));
        this.setHighlight2(e), this.getCategory(a);
    },
    getTopCategory: function(a) {
        var e = this;
        t.getJSON("/Goods/goodsCategoryList", function(t) {
            var a = t.data.result;
            e.setData({
                topCategories: a
            }), e.getCategory2(a[0].id);
        });
    },
    getCategory: function(a) {
        var e = this;
        t.getJSON("/Goods/goodsCategoryList/parent_id/" + a, function(t) {
            console.log(t), console.log("---getCategory");
            var a = t.data.result;
            e.setData({
                subCategories: a
            });
        });
    },
    getCategory2: function(a) {
        var e = this;
        t.getJSON("/Goods/goodsCategoryList/parent_id/" + a, function(t) {
            console.log(t), console.log("---getCategory2");
            var a = t.data.result;
            e.setData({
                topCategories2: a
            }), e.getCategory(a[0].id);
        });
    },
    setHighlight: function(t) {
        for (var a = [], e = 0; e < this.data.topCategories; e++) a[e] = "";
        a[t] = "highlight", this.setData({
            highlight: a
        });
    },
    setHighlight2: function(t) {
        for (var a = [], e = 0; e < this.data.topCategories; e++) a[e] = "";
        a[t] = "highlight", this.setData({
            highlight2: a
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