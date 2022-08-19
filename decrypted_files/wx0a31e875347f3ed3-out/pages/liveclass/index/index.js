var e = getApp();

Page({
    data: {
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        id: 0,
        play_time_already: 0
    },
    onLoad: function(e) {
        wx.getStorageSync("userinfo");
        this.setData({
            id: e.id
        }), "undefined" != e.play_time_already && this.setData({
            play_time_already: e.play_time_already
        }), this.enterLiveClass();
    },
    enterLiveClass: function() {
        var a = this, t = a.data.id, i = a.data.play_time_already;
        wx.request({
            url: e.globalData.liveBaseUrl + "learning/getWebcast",
            data: {
                id: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (0 == e.data.code) {
                    wx.setStorageSync("videoInfo", JSON.stringify(e.data.data));
                    var a = {};
                    ((e.data.data || {}).practises || []).forEach(function(e) {
                        a[e.practise_date] = e;
                    }), setTimeout(function() {
                        wx.redirectTo({
                            url: "/pages/liveclass/video/video?id=" + t + "&play_time_already=" + i
                        });
                    }, "2000"), wx.setStorageSync("videoInfo2", JSON.stringify(a));
                } else setTimeout(function() {
                    wx.showToast({
                        title: e.data.err_msg,
                        icon: "none"
                    });
                }, "2000");
            }
        });
    }
});