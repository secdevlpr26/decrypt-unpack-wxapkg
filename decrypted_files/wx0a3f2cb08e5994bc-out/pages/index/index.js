var e = getApp();

Page({
    onShareAppMessage: function() {
        return {
            title: this.data.title,
            path: "/pages/index/index"
        };
    },
    data: {
        title: "",
        motto: "1234",
        session_key: "",
        weburl: getApp().globalData.weburl,
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo")
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function() {
        var t = this;
        e.globalData.userInfo ? this.setData({
            userInfo: e.globalData.userInfo,
            hasUserInfo: !0
        }) : this.data.canIUse ? e.userInfoReadyCallback = function(e) {
            t.setData({
                userInfo: e.userInfo,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(a) {
                e.globalData.userInfo = a.userInfo, t.setData({
                    userInfo: a.userInfo,
                    hasUserInfo: !0
                });
            }
        });
        var a = this;
        wx.request({
            url: getApp().globalData.url,
            method: "get",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {},
            success: function(e) {
                a.setData({
                    title: e.data.website_name
                });
            }
        });
    },
    getUserInfo: function(t) {
        console.log(t), e.globalData.userInfo = t.detail.userInfo, this.setData({
            userInfo: t.detail.userInfo,
            hasUserInfo: !0
        });
    }
});