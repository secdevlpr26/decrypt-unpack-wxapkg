getApp();

var n = require("../../request/api.js");

Page({
    data: {
        imgUrl: n.API_IMG
    },
    onLoad: function(t) {
        var e = this;
        console.log(t), wx.request({
            url: n.nearList(t.lat, t.lon),
            success: function(n) {
                console.log("附近商家", n), e.setData({
                    nearList: n.data.re
                }), console.log(n.data.re instanceof Array);
            }
        });
    },
    tonear: function(n) {
        console.log(n), wx.navigateTo({
            url: "../near_detail/near_detail?admin_id=" + n.currentTarget.dataset.admin_id + "&content=" + n.currentTarget.dataset.content + "&name=" + n.currentTarget.dataset.name + "&img=" + n.currentTarget.dataset.img
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});