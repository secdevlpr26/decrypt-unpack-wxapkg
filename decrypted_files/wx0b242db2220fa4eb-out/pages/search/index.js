var t = require("../../utils/server");

Page({
    search: function(t) {
        var a = this.data.keywords;
        wx.navigateTo({
            url: "../../../../goods/list/list?keywords=" + a
        });
    },
    bindChange: function(t) {
        var a = t.detail.value;
        this.setData({
            keywords: a
        });
    },
    onLoad: function(a) {
        var e = this;
        t.getJSON("/User/getHotKeywords", function(t) {
            var a = t.data.data.hot_keywords;
            e.setData({
                keyword: a
            });
        });
    },
    click: function(t) {
        var a = t.currentTarget.dataset.word;
        wx.navigateTo({
            url: "../../../../goods/list/list?keywords=" + a
        });
    }
});