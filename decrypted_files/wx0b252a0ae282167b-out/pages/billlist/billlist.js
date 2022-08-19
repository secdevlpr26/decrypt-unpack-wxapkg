var t, e = getApp();

Page({
    data: {
        jy_user_id: 0,
        list: ""
    },
    onLoad: function(a) {
        t = this, wx.request({
            url: e.data.lost + "/index/bill2",
            method: "GET",
            dataType: "html",
            data: {
                openid: wx.getStorageSync("openid")
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                var a = JSON.parse(e.data);
                t.setData({
                    list: a
                });
            }
        });
    },
    onCostDetail: function(t) {
        var e = t.currentTarget.id;
        wx.navigateTo({
            url: "../orderMoneyIntro/orderMoneyIntro?id=" + e
        });
    }
});