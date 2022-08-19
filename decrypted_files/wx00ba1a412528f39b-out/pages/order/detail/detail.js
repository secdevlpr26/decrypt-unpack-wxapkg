var e = getApp(), a = (require("../../../utils/api/cgi.js"), require("../../../utils/utils.js")), t = require("../../../utils/moment.js");

Page({
    data: {
        order: {},
        express: {}
    },
    onLoad: function(r) {
        if (console.log(e.globalData._orderDetail), console.log(e.globalData._expressDetail), 
        !e.globalData._orderDetail) return a.alert("无效订单"), void wx.navigateBack();
        for (var o = 0; o < e.globalData._orderDetail.product_list.length; ++o) {
            for (var l = e.globalData._orderDetail.product_list[o], i = l.sku_id.split(";"), s = [], n = 0; n < i.length; ++n) {
                var u = i[n].split(":");
                u && u[1] && s.push(u[1].replace(/^\$/, ""));
            }
            l.skuname_list = s;
        }
        var D = t(1e3 * e.globalData._orderDetail.create_time);
        e.globalData._orderDetail.createTimeStr = D.format("YYYY/MM/DD HH:mm:ss"), this.setData({
            order: e.globalData._orderDetail,
            express: e.globalData._expressDetail || {}
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    gotoExpress: function(e) {
        wx.navigateTo({
            url: "/pages/order/express/express"
        });
    }
});