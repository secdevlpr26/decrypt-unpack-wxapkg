var e = getApp();

Page({
    data: {
        canIUse: wx.canIUse("button.open-type.getUserInfo")
    },
    globalData: {
        appid: "wx0b252a0ae282167b",
        secret: "9dcef412e99e393dd736e26df3e83f64"
    },
    onLoad: function() {},
    bindGetUserInfo: function(e) {
        e.detail.userInfo ? this.queryUsreInfo() : wx.showModal({
            title: "警告",
            content: "您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!",
            showCancel: !1,
            confirmText: "返回授权",
            success: function(e) {
                e.confirm && console.log("用户点击了“返回授权”");
            }
        });
    },
    queryUsreInfo: function() {
        wx.getUserInfo({
            success: function(t) {
                e.globalData;
                wx.setStorageSync("userInfo", t.userInfo);
                var n = t.userInfo.avatarUrl;
                wx.login({
                    success: function(t) {
                        wx.request({
                            url: e.data.lost + "/index/queryUsreInfo2",
                            method: "GET",
                            dataType: "html",
                            data: {
                                code: t.code,
                                avatarUrl: n
                            },
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                var t = JSON.parse(e.data);
                                wx.setStorageSync("openid", t.openid), "" != t.result.at_code ? "1" == t.result.status ? wx.switchTab({
                                    url: "../index/index"
                                }) : wx.navigateTo({
                                    url: "../frozen/frozen"
                                }) : wx.navigateTo({
                                    url: "../activation/activation"
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});