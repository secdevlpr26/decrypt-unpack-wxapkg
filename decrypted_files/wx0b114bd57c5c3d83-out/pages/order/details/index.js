var e = require("../../../utils/server");

Page({
    data: {},
    onLoad: function(t) {
        var n = this, r = getApp(), a = t.order_id, o = r.globalData.userInfo.user_id;
        e.getJSON("/User/getOrderDetail?user_id=" + o + "&id=" + a, function(e) {
            var t = e.data.result;
            n.setData({
                result: t
            });
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});