var t, e, a = getApp();

Page({
    data: {
        jifen: null,
        integral: ""
    },
    onShow: function() {
        this.onLoad();
    },
    onLoad: function(n) {
        t = this, e = wx.getStorageSync("mobile"), wx.request({
            url: a.data.lost + "/index/userinfo",
            method: "GET",
            dataType: "html",
            data: {
                mobile: e
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                var a = JSON.parse(e.data);
                t.setData({
                    integral: a.userinfo.integral
                });
            }
        });
    }
});