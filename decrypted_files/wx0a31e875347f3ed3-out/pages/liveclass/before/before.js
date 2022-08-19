getApp();

Page({
    data: {
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        id: 3,
        video_time: 0,
        webcast_time: ""
    },
    onLoad: function(e) {
        "undefined" != e.webcast_time && this.setData({
            webcast_time: e.webcast_time.substr(11, 5)
        });
    }
});