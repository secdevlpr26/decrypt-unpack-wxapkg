var t = require("../../utils/server");

Page({
    data: {
        distance: []
    },
    onLoad: function(a) {
        var e = this;
        t.getJSON("/Store/getStoreClass", function(t) {
            for (var a = t.data, o = 0; o < a.length; o++) 0 == o ? (a[o].select = 1, e.getStoreList(a[o].sc_id)) : a[o].select = 0;
            e.setData({
                store_class: a
            });
        });
    },
    getStoreList: function(a) {
        var e = this;
        t.getJSON("/Store/getStores", {
            cid: a
        }, function(t) {
            var a = t.data;
            console.log(a);
            for (var o = 0; o < a.length; o++) {
                var n = a[o].store_lat, s = a[o].store_lng, r = wx.getStorageSync("lat"), c = wx.getStorageSync("lng");
                console.log("wx.lat=" + r), console.log("wx.lng=" + c);
                var i = n, l = s;
                console.log("wx.lat2=" + i), console.log("wx.lng2=" + l);
                var g = r * Math.PI / 180, h = i * Math.PI / 180;
                console.log("radLat1 = " + g), console.log("radLat2 = " + h);
                var d = g - h, u = c * Math.PI / 180 - l * Math.PI / 180, f = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(d / 2), 2) + Math.cos(g) * Math.cos(h) * Math.pow(Math.sin(u / 2), 2)));
                f *= 6378.137, f = (f = Math.round(1e4 * f) / 1e4) ? f.toFixed(2) : 0, a[o].distance = f;
            }
            e.setData({
                stores: a
            });
        });
    },
    onReady: function() {
        console.log(this.data.distance);
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    shop: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "shop?id=" + a,
            success: function(t) {},
            fail: function() {},
            complete: function() {}
        });
    },
    take: function(t) {
        var a = t.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    onClickClass: function(t) {
        for (var a = t.currentTarget.dataset.id, e = this.data.store_class, o = 0; o < e.length; o++) e[o].sc_id == a ? (e[o].select = 1, 
        this.getStoreList(e[o].sc_id)) : e[o].select = 0;
        this.setData({
            store_class: e
        });
    }
});