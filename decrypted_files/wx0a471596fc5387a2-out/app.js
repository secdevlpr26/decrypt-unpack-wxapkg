require("7C1A6EB7668F5ADF1A7C06B0CB3911A5.js");

App({
    onLaunch: function() {
        var e = this;
        if (console.log(wx.canIUse("getUpdateManager")), wx.canIUse("getUpdateManager")) {
            var a = wx.getUpdateManager();
            a.onCheckForUpdate(function(e) {
                e.hasUpdate && (a.onUpdateReady(function() {
                    wx.showModal({
                        title: "更新提示",
                        content: "有新的功能发布，请进行升级？",
                        success: function(e) {
                            e.confirm && a.applyUpdate();
                        }
                    });
                }), a.onUpdateFailed(function() {
                    wx.showModal({
                        title: "已经有新版本了哟~",
                        content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                    });
                }));
            });
        } else wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        });
        var t = wx.getStorageSync("logs") || [];
        t.unshift(Date.now()), wx.setStorageSync("logs", t), wx.getSetting({
            success: function(a) {
                a.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(a) {
                        e.globalData.userInfo = a.userInfo, e.userInfoReadyCallback && e.userInfoReadyCallback(a);
                    }
                });
            }
        });
        var n = wx.getStorageSync("userId");
        (null == n || n <= 0) && this.getUserLogin();
    },
    getUserLogin: function(e) {
        var a = this;
        wx.login({
            success: function(t) {
                t.code ? wx.getUserInfo({
                    withCredentials: !1,
                    success: function(n) {
                        n && (a.globalData.userInfo = n.userInfo, wx.request({
                            url: a.globalData.apiUrl,
                            data: {
                                code: t.code,
                                opt: "onLogin_changchang"
                            },
                            header: {
                                "content-type": "application/json"
                            },
                            success: function(t) {
                                wx.request({
                                    url: a.globalData.apiUrl,
                                    data: {
                                        opt: "addUser",
                                        openid: t.data.openid,
                                        nickName: n.userInfo.nickName,
                                        gender: n.userInfo.gender,
                                        avatarUrl: n.userInfo.avatarUrl
                                    },
                                    header: {
                                        "content-type": "application/json"
                                    },
                                    success: function(t) {
                                        t.data && (console.log(JSON.stringify(t.data)), a.globalData.userId = t.data.userId, 
                                        wx.setStorage({
                                            key: "userId",
                                            data: t.data.userId
                                        }), wx.setStorage({
                                            key: "userInfo",
                                            data: n.userInfo
                                        }), e(t.data.userId));
                                    }
                                });
                            }
                        }));
                    }
                }) : console.log("登录失败！" + t.errMsg);
            }
        });
    },
    globalData: {
        userId: 0,
        userInfo: null,
        word: "",
        typeId: "",
        settings: {
            language: null,
            employeeId: null
        },
        apiUrl: "https://www.e-zksx.com:444/api/xcx/index.ashx",
        hostUrl: "https://www.e-zksx.com:444",
        uploadUrl: "https://www.e-zksx.com:444/api/xcx/uploadfile.ashx",
        uploadUrl1: "https://www.e-zksx.com:444/api/xcx/uploadfile1.ashx"
    }
});