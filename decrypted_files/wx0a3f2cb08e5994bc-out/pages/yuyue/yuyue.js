var e = getApp();

Page({
    onShareAppMessage: function() {
        var e = this;
        return console.log(e.data.title), {
            title: e.data.title,
            path: "/pages/yuyue/yuyue"
        };
    },
    data: {
        banner: "",
        title: "",
        themecolor: "",
        bookname: "",
        bookwords: "",
        words: "",
        session_key: "",
        username: "",
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo")
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    userNameInput: function(e) {
        this.setData({
            username: e.detail.value
        });
    },
    bindTextAreaBlur: function(e) {
        this.setData({
            words: e.detail.value
        });
    },
    getPhoneNumber: function(e) {
        if (e.detail.iv || e.detail.encryptedData) {
            var t = this;
            wx.login({
                success: function(a) {
                    a.code ? wx.request({
                        url: "https://cms.zhiweihome.com/apicms/index.php/Index/GetOpenid",
                        method: "POST",
                        data: {
                            code: a.code,
                            appid: getApp().globalData.appid,
                            secret: getApp().globalData.secret
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(a) {
                            wx.request({
                                url: "https://cms.zhiweihome.com/apicms/demo.php",
                                method: "POST",
                                data: {
                                    session_key: a.data.session_key,
                                    iv: e.detail.iv,
                                    encryptedData: e.detail.encryptedData,
                                    appid: getApp().globalData.appid,
                                    secret: getApp().globalData.secret
                                },
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                dataType: "json",
                                success: function(e) {
                                    t.setData({}), wx.request({
                                        url: "https://cms.zhiweihome.com/apicms/index.php/Index/InsertYuyue",
                                        method: "POST",
                                        data: {
                                            userphone: e.data,
                                            phone: getApp().globalData.phone,
                                            username: t.data.username,
                                            words: t.data.words
                                        },
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        dataType: "json",
                                        success: function(e) {
                                            wx.showToast({
                                                title: "预约成功",
                                                icon: "success",
                                                duration: 2e3
                                            }), setTimeout(function() {
                                                wx.hideToast();
                                            }, 3e3), wx.navigateTo({
                                                url: "../index/index"
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    }) : console.log("获取用户登录态失败！" + a.errMsg);
                }
            });
        } else wx.showToast({
            title: "失败请重新获取。",
            icon: "success",
            duration: 2e3
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
                    title: e.data.yuyuewtitle,
                    banner: e.data.yuyuebanner,
                    themecolor: e.data.themecolor,
                    bookname: e.data.bookname,
                    bookwords: e.data.bookwords
                }), wx.setNavigationBarTitle({
                    title: e.data.yuyuewtitle
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