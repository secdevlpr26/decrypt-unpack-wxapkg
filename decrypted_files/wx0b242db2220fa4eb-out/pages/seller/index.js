var t = require("../../utils/server");

Page({
    data: {
        id: []
    },
    onLoad: function(t) {
        var e = this, a = t.categoryid;
        e.getStoreList(a);
    },
    onReady: function() {},
    onShow: function() {},
    getStoreList: function(e) {
        var a = this, i = wx.getStorageSync("cityid");
        if (i) {
            var o = i;
            a.setData({
                cityid: o
            });
        }
        var n = wx.getStorageSync("la"), r = wx.getStorageSync("lo");
        t.getJSON("/Store/getStores/", {
            cid: e,
            cityid: o,
            la: n,
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
    clickSeller: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "seller?id=" + e
        });
    }
});