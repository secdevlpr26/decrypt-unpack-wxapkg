var e, t, a = getApp();

Page({
    data: {
        mobile: "",
        userinfo: ""
    },
    onLoad: function(o) {
        e = this, t = wx.getStorageSync("mobile"), wx.request({
            url: a.data.lost + "/index/userinfo",
            method: "GET",
            dataType: "html",
            data: {
                mobile: t
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                e.setData({
                    userinfo: a.userinfo
                });
            }
        });
    },
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), wx.request({
            url: a.data.lost + "/index/userinfo",
            method: "GET",
            dataType: "html",
            data: {
                mobile: wx.getStorageSync("mobile")
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = JSON.parse(t.data);
                e.setData({
                    userinfo: a.userinfo
                }), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
    },
    onShow: function() {
        this.onLoad();
    },
    formSubmit: function(t) {
        t.detail.value.id = e.data.userinfo.id, wx.request({
            url: a.data.lost + "/index/editinform",
            method: "POST",
            dataType: "html",
            data: t.detail.value,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                "1" == e.data ? wx.showToast({
                    title: "修改成功",
                    icon: "success",
                    duration: 2e3
                }) : wx.showToast({
                    title: "修改失败",
                    icon: "none",
                    duration: 2e3
                });
            }
        });
    }
});