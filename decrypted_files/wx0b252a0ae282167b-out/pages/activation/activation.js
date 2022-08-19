var e = getApp();

Page({
    data: {
        canIUse: wx.canIUse("button.open-type.getUserInfo")
    },
    onLoad: function() {},
    bindAtCode: function(t) {
        t.detail.value.at_code ? wx.request({
            url: e.data.lost + "/index/isActive",
            method: "GET",
            dataType: "html",
            data: {
                openid: wx.getStorageSync("openid"),
                at_code: t.detail.value.at_code
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                var t = JSON.parse(e.data);
                "激活成功" == t.msg ? wx.switchTab({
                    url: "../index/index"
                }) : wx.showToast({
                    title: t.msg,
                    icon: "none",
                    duration: 2e3
                });
            }
        }) : wx.showToast({
            title: "激活码不能为空",
            icon: "none",
            duration: 2e3
        });
    }
});