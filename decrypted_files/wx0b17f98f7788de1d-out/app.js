App({
    globalData: {
        appId: "wx0b17f98f7788de1d",
        Secret: "654eaa3c803415c4749f73bf3f3ce32e",
        userInfo: null,
        foodName: "",
        price: 0,
        totalprice: 0,
        toBuyNum: 0,
        httpUrl: "https://zdr.zhongderun.com/"
    },
    checkVersionVpdates: function(o) {
        if (wx.canIUse("getUpdateManager")) {
            var e = wx.getUpdateManager();
            e.onCheckForUpdate(function(o) {
                o.hasUpdate && (e.onUpdateReady(function() {
                    wx.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，是否重启应用？",
                        success: function(o) {
                            o.confirm && e.applyUpdate();
                        }
                    });
                }), e.onUpdateFailed(function() {
                    wx.showModal({
                        title: "已经有新版本了哟~",
                        content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                    });
                }));
            });
        } else wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法使用更新功能，请升级到最新微信版本后重试。"
        });
    },
    onLaunch: function() {
        this.checkVersionVpdates(), wx.login({
            success: function(o) {
                console.log("====wx.login success====");
                o.code;
                o.code ? (wx.setStorage({
                    key: "code",
                    data: o.code
                }), console.log("res.code ==> " + o.code)) : console.log("获取用户登录态失败！" + o.errMsg);
            },
            fail: function(o) {
                console.log("====wx.login fail===="), console.log("错误信息"), console.log(o);
            }
        }), wx.setStorageSync("connectedSocket", !1);
        var o = this;
        wx.request({
            url: o.globalData.httpUrl + "skstoremodel/findCompanyByAppid",
            data: {
                xcxAppid: o.globalData.appId
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(o) {
                wx.setNavigationBarTitle({
                    title: o.data.companyInfoName
                }), wx.setStorage({
                    key: "companyInfo",
                    data: o.data
                }), wx.setStorage({
                    key: "companyId",
                    data: o.data.companyInfoId
                });
            }
        });
    },
    getUserInfo: function(o) {
        var e = this;
        e.globalData.userInfo ? "function" == typeof o && o(e.globalData.userInfo) : wx.login({
            success: function() {
                console.log("测试数据 login"), wx.getUserInfo({
                    success: function(t) {
                        e.globalData.userInfo = t.userInfo, "function" == typeof o && o(e.globalData.userInfo);
                    }
                });
            }
        });
    }
});