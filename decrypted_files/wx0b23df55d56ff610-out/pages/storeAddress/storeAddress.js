require("../../util/util");

require("../../comm/script/fetch");

var t = require("../../utils/server");

require("../../comm/script/config"), require("../../component/message/message.js"), 
getApp(), Page({
    data: {
        storeAdd: []
    },
    map: function(t) {
        var e = t.currentTarget.dataset.index;
        wx.openLocation({
            latitude: parseFloat(this.data.stores[e].la),
            longitude: parseFloat(this.data.stores[e].lo),
            scale: "",
            name: "",
            address: this.data.stores[e].address,
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    select: function(t) {
        if (0 != this.data.back) {
            var e = t.currentTarget.dataset.index, a = this.data.stores[e];
            getApp().globalData.store = a, wx.navigateBack({});
        }
    },
    phone: function(t) {
        var e = t.currentTarget.dataset.index;
        wx.makePhoneCall({
            phoneNumber: this.data.stores[e].phone
        });
    },
    onLoad: function(e) {
        var a = this, s = 0;
        e.type && (s = e.type), wx.getLocation({
            success: function(e) {
                var r = e.latitude, o = e.longitude;
                t.getJSON("/User/getStores", {
                    la: r,
                    lo: o,
                    type: s
                }, function(t) {
                    a.setData({
                        stores: t.data.result
                    });
                });
            }
        });
    }
});