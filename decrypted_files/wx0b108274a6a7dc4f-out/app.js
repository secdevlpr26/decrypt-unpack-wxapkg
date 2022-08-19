var e = require("./request/api.js");

App({
    onLaunch: function() {
        var a = this, n = wx.getStorageSync("logs") || [];
        n.unshift(Date.now()), wx.setStorageSync("logs", n), wx.login({
            success: function(n) {
                wx.request({
                    url: e.getOpenid(a.globalData.appid, a.globalData.secret, n.code),
                    success: function(e) {
                        console.log("openid是--------", e.data.openid), a.globalData.openid = e.data.openid;
                    }
                });
            }
        }), wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(e) {
                        a.globalData.userInfo = e.userInfo, a.userInfoReadyCallback && a.userInfoReadyCallback(e);
                    }
                });
            }
        });
        var t = wx.getUpdateManager();
        t.onCheckForUpdate(function(e) {}), t.onUpdateReady(function(e) {
            wx.showModal({
                title: "更新提示",
                content: "新版本已准备好,是否重新应用？",
                success: function(e) {
                    e.confirm && t.applyUpdate();
                }
            });
        }), t.onUpdateFailed(function(e) {
            wx.showModal({
                title: "更新提示",
                content: "新版本下载失败",
                showCancel: !1
            });
        });
    },
    globalData: {
        userInfo: null,
        appid: "wx0b108274a6a7dc4f",
        secret: "8db24f84abad52db1f83e801f7caa57c",
        openid: "",
        userId: ""
    }
});