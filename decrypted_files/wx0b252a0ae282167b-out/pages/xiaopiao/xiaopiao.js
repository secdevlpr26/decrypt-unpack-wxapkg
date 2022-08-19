var a, t = getApp();

Page({
    data: {
        orderid: ""
    },
    onLoad: function(e) {
        (a = this).setData({
            orderid: e.id
        }), wx.request({
            url: t.data.lost + "/index/piao",
            method: "GET",
            dataType: "html",
            data: {
                orderid: a.data.orderid
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var e = JSON.parse(t.data);
                a.setData({
                    rst: e
                });
            }
        });
    }
});