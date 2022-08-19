var t = require("../../utils/server");

Page({
    data: {
        id: []
    },
    onLoad: function(e) {
        var a = this;
        t.getJSON("/Store/getStoreClass", function(t) {
            for (var e = t.data, i = 0; i < e.length; i++) 0 == i ? (e[i].select = 1, a.getStoreList(e[i].sc_id)) : e[i].select = 0;
            a.setData({
                store_class: e
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    getStoreList: function(e) {
        var a = this, i = wx.getStorageSync("cityid");
        if (i) {
            var s = i;
            a.setData({
                cityid: s
            });
        }
        var o = wx.getStorageSync("la"), r = wx.getStorageSync("lo");
        t.getJSON("/Store/getStores/", {
            cid: e,
            cityid: s,
            la: o,
            lo: r
        }, function(t) {
            var e = t.data;
            a.setData({
                stores: e
            });
        });
    },
    onHide: function() {},
    onUnload: function() {},
    clickList: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "index?categoryid=" + e
        });
    },
    onClickClass: function(t) {
        for (var e = t.currentTarget.dataset.id, a = this.data.store_class, i = 0; i < a.length; i++) a[i].sc_id == e ? (a[i].select = 1, 
        this.getStoreList(a[i].sc_id)) : a[i].select = 0;
        this.setData({
            store_class: a
        });
    }
});