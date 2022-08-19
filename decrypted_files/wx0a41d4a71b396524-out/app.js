var e = require("/utils/config.js");

require("./utils/shareAll"), App({
    onLaunch: function(o) {
        var a = this;
        console.log("二维码参数", o), wx.login({
            success: function(o) {
                o.code ? wx.request({
                    url: e.openIdInfo,
                    data: {
                        code: o.code
                    },
                    success: function(e) {
                        console.log("向后台获取openid，sessionkey的返回值", e), 200 == e.data.type ? (wx.setStorage({
                            key: "3rdsession",
                            data: e.data.date.sessionKey
                        }), a.globalData.sessionKey = e.data.date.sessionKey, console.log("储存成功")) : console.log("登录失败！");
                    }
                }) : console.log("登录失败！");
            }
        });
    },
    getUserCode: function() {
        wx.login({
            success: function(e) {
                return e.code;
            },
            fail: function() {
                return "error";
            }
        });
    },
    getUserMsg: function() {
        var o = this;
        if (0 == o.globalData.readerType) {
            var a = wx.getStorageSync("3rdsession");
            null != a && "" != a && wx.request({
                url: e.getUserInfo,
                data: {
                    sessionKey: a
                },
                success: function(e) {
                    200 == e.data.type && (1 == e.data.content ? (o.globalData.readerType = 2, o.globalData.phone = e.data.date.phone, 
                    o.globalData.bind = 1, o.globalData.userName = e.data.date.name) : 0 == e.data.content && (o.globalData.readerType = 1));
                }
            });
        }
    },
    globalData: {
        userInfo: null,
        readerType: 0,
        phone: null,
        sessionKey: null,
        long: null,
        lat: null,
        bind: 0,
        bindShow: 0,
        schoolId: null,
        telPhone: null,
        username: "",
        bookids: null,
        ordersign: 0,
        type: null,
        bookId: null,
        choosedEq: !1,
        choosedAddr: !1,
        appid: "wx0a41d4a71b396524",
        app_secret: "304bf663584acbc02fc8755c768e4b80"
    },
    getPromptMsg: function(o) {
        wx.request({
            url: e.getPromptMsg,
            data: {
                sessionKey: o
            },
            success: function(e) {
                200 == e.data.type && e.data.date.overdue > 0 && wx.setTabBarBadge({
                    index: 4,
                    text: "1"
                });
            },
            fail: function(e) {}
        });
    },
    onShow: function() {
        if (wx.canIUse("getUpdateManager")) {
            var e = wx.getUpdateManager();
            e.onCheckForUpdate(function(e) {
                console.log(e.hasUpdate);
            }), e.onUpdateReady(function() {
                wx.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，请重启应用",
                    showCancel: !1,
                    success: function(o) {
                        if (o.confirm) e.applyUpdate(); else if (o.cancel) return !1;
                    }
                });
            }), e.onUpdateFailed(function() {
                wx.hideLoading(), wx.showModal({
                    title: "升级失败",
                    content: "新版本下载失败，请检查网络！",
                    showCancel: !1
                });
            });
        } else wx.showModal({
            title: "溫馨提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
    }
});