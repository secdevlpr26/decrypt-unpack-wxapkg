var a = getApp().globalData.config.base;

require("../../wxParse/wxParse");

Page({
    data: {
        contact: {},
        calling: {}
    },
    onLoad: function(o) {
        var t = this;
        wx.request({
            url: a + "/Mobile/Api/aboutUs",
            method: "GET",
            header: {
                "content-type": "application"
            },
            success: function(a) {
                console.log(a), t.setData({
                    contact: a.data,
                    calling: a.data.mobile
                });
            }
        });
    },
    calling: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.calling,
            success: function(a) {
                console.log(a + "拨打电话成功！");
            },
            fail: function(a) {
                console.log(a + "拨打电话失败！");
            }
        });
    }
});