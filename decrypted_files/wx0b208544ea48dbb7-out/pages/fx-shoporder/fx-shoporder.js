var t = getApp(), a = t.globalData.config.base;

Page({
    onShow: function() {
        var t = this;
        t.setData({
            page: 1
        }), e.getOrders(t), wx.getSystemInfo({
            success: function(a) {
                var e = a.windowHeight;
                t.setData({
                    listHeight: e
                });
            }
        });
    },
    loadMore: function() {
        var t = this, a = t.data.page;
        1 !== t.data.listStatus && (t.setData({
            page: a++
        }), e.getOrders(t));
    }
});

var e = {
    getOrders: function(r) {
        wx.showLoading({
            title: "加载中"
        });
        var o = t.globalData.userKey, s = r.data.page || 1;
        wx.request({
            url: a + "/Mobile/UserApi/getdsaleorder",
            method: "GET",
            header: {
                "content-type": "application"
            },
            data: {
                userkey: o,
                page: s
            },
            success: function(t) {
                wx.hideLoading(), e.renderSummary(r, t.data), e.renderOrderList(r, t.data);
            }
        });
    },
    renderSummary: function(t, a) {
        a.data.totalPrice = (a.data.order_total_price || 0).toFixed(2), a.data.totalCommision = (a.data.order_total_commision || 0).toFixed(2), 
        t.setData({
            summary: a.data,
            listStatus: a.status
        });
    },
    renderOrderList: function(t, a) {
        var e = t.data.orderList || [], r = a.data.order_goods, o = e.concat(r);
        t.setData({
            orderList: o
        });
    }
};