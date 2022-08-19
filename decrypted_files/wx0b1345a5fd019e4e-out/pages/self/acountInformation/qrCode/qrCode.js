var a = getApp();

Page({
    data: {
        imgPath: "",
        sex: ""
    },
    onLoad: function() {},
    onShow: function() {
        this.setData({
            imgPath: a.globalData.wxUserInfo.avatarUrl,
            sex: a.globalData.wxUserInfo.sex
        });
    },
    followtap: function() {
        wx.navigateTo({
            url: "../login/login"
        });
    }
});