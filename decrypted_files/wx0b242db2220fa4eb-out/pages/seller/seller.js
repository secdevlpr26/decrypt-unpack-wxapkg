var t = require("../../utils/server");

Page({
    data: {
        stores: [],
        store_id: [],
        banner: []
    },
    onLoad: function(n) {
        var e = n.id, o = this;
        t.getJSON("/Store/getStore/store_id/" + e, function(t) {
            var n = t.data;
            o.setData({
                stores: n
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    goods: function(t) {
        var n = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "goods?id=" + n,
            success: function(t) {},
            fail: function() {},
            complete: function() {}
        });
    },
    take: function(t) {
        var n = t.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: n
        });
    }
});