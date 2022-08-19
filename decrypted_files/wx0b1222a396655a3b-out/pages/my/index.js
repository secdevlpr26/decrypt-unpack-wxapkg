var o = getApp();

Page({
    data: {
        operator: {},
        userinfo: {}
    },
    onLoad: function() {
        var a = this;
        console.log(o.globalData), a.setData({
            operator: o.globalData.operator,
            userinfo: o.globalData.userInfo
        });
    },
    calling: function() {
        wx.makePhoneCall({
            phoneNumber: "17369609966",
            success: function() {
                console.log("拨打电话成功！");
            },
            fail: function() {
                console.log("拨打电话失败！");
            }
        });
    }
});