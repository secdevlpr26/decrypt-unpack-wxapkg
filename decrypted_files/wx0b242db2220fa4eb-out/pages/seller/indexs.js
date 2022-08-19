var t = require("../../utils/server");

Page({
    data: {
        id: []
    },
    onLoad: function(e) {
        var a = this;
        t.getJSON("/Store/getStoreClass", function(t) {
            for (var e = t.data, r = 0; r < e.length; r++) 0 == r ? (e[r].select = 1, a.getStoreList(e[r].sc_id)) : e[r].select = 0;
            a.setData({
                store_class: e
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    getStoreList: function(e) {
        var a = this, r = wx.getStorageSync("cityid");
        if (r) {
            var s = r;
            a.setData({
                cityid: s
            });
        }
        var o = wx.getStorageSync("la"), i = wx.getStorageSync("lo");
        t.getJSON("/Store/getStores/", {
            cid: e,
            cityid: s,
            la: o,
            lo: i
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
    },
    take: function(t) {
        var e = t.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    onClickClass: function(t) {
        for (var e = t.currentTarget.dataset.id, a = this.data.store_class, r = 0; r < a.length; r++) a[r].sc_id == e ? (a[r].select = 1, 
        this.getStoreList(a[r].sc_id)) : a[r].select = 0;
        this.setData({
            store_class: a
        });
    }
});