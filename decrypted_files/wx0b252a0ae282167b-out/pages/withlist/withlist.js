var t, a = getApp();

Page({
    data: {
        jy_user_id: 0,
        list: ""
    },
    onLoad: function(e) {
        t = this;
        var o = wx.getStorageSync("jy_user_id");
        wx.request({
            url: a.data.lost + "/index/withlist",
            method: "GET",
            dataType: "html",
            data: {
                jy_user_id: o
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                var e = JSON.parse(a.data);
                t.setData({
                    list: e
                });
            }
        });
    },
    onShow: function() {
        this.onLoad();
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading();
        var t = this, e = wx.getStorageSync("jy_user_id");
        wx.request({
            url: a.data.lost + "/index/withlist",
            method: "GET",
            data: {
                jy_user_id: e
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                var e = JSON.parse(a.data);
                console.log(e), t.setData({
                    list: e
                }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    }
});