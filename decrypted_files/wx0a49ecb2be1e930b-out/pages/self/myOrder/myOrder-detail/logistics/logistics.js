var t = getApp(), o = "", a = "";

Page({
    data: {
        logInfo: {},
        logList: []
    },
    onLoad: function(t) {
        wx.showToast({
            title: "加载中...",
            icon: "loading",
            duration: 1e4,
            mask: !0
        }), o = t.appOrderId, a = t.orderTime, this.getlogInfo();
    },
    getlogInfo: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "printer_getParcelInfo",
            data: {
                orderId: o
            },
            success: function(o) {
                wx.hideToast();
                var e = o.data.content;
                1 == o.data.code ? 1 == e.success ? a.setData({
                    logInfo: e,
                    logList: e.route
                }) : t.hint(e.message) : t.hint(e.reason);
            }
        });
    }
});