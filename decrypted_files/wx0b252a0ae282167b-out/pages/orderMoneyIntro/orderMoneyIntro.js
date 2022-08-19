var t, e = getApp();

Page({
    data: {
        orderid: "",
        result: "",
        money: "",
        status: "0"
    },
    onLoad: function(a) {
        (t = this).setData({
            orderid: a.id
        }), wx.request({
            url: e.data.lost + "/index/orderMoneyIntro2",
            method: "GET",
            dataType: "html",
            data: {
                id: t.data.orderid,
                openid: wx.getStorageSync("openid")
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                var a = JSON.parse(e.data);
                t.setData({
                    result: a.rst,
                    money: a.money,
                    status: a.status
                });
            }
        });
    },
    onSubmitCost: function(e) {
        var a = "../addmoney/addmoney?id=" + t.data.orderid;
        wx.navigateTo({
            url: a
        });
    },
    edit: function(t) {
        var e = "../editmoney/editmoney?id=" + t.currentTarget.dataset.id;
        wx.navigateTo({
            url: e
        });
    }
});