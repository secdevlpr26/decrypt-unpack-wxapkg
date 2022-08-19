var e = getApp();

Page({
    onShareAppMessage: function() {
        var e = this;
        return console.log(e.data.title), {
            title: e.data.title,
            path: "/pages/baojia/baojia"
        };
    },
    data: {
        index: 0,
        bremark: "",
        area: "",
        mianji: "",
        areaarr: [],
        banner: "",
        title: "",
        baojiatitle: "",
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
    bindPickerChange: function(e) {
        console.log(e.detail.value), this.setData({
            index: e.detail.value
        });
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    mianjiInput: function(e) {
        this.setData({
            mianji: e.detail.value
        });
    },
    userNameInput: function(e) {
        this.setData({
            username: e.detail.value
        });
    },
    getPhoneNumber: function(e) {
        if (e.detail.iv || e.detail.encryptedData) {
            var a = this;
            wx.login({
                success: function(t) {
                    t.code ? wx.request({
                        url: "https://cms.zhiweihome.com/apicms/index.php/Index/GetOpenid",
                        method: "POST",
                        data: {
                            code: t.code,
                            appid: getApp().globalData.appid,
                            secret: getApp().globalData.secret
                        },
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            wx.request({
                                url: "https://cms.zhiweihome.com/apicms/demo.php",
                                method: "POST",
                                data: {
                                    session_key: t.data.session_key,
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
                                    a.setData({}), wx.request({
                                        url: "https://cms.zhiweihome.com/apicms/index.php/Index/InsertBaojia",
                                        method: "POST",
                                        data: {
                                            userphone: e.data,
                                            phone: getApp().globalData.phone,
                                            username: a.data.username,
                                            add: a.data.areaarr[a.data.index],
                                            mianji: a.data.mianji
                                        },
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        dataType: "json",
                                        success: function(e) {
                                            wx.showToast({
                                                title: "获取成功，客服会稍后联系你。",
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
                    }) : console.log("获取用户登录态失败！" + t.errMsg);
                }
            });
        } else wx.showToast({
            title: "失败请重新获取。",
            icon: "success",
            duration: 2e3
        });
    },
    onLoad: function() {
        var a = this;
        e.globalData.userInfo ? this.setData({
            userInfo: e.globalData.userInfo,
            hasUserInfo: !0
        }) : this.data.canIUse ? e.userInfoReadyCallback = function(e) {
            a.setData({
                userInfo: e.userInfo,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(t) {
                e.globalData.userInfo = t.userInfo, a.setData({
                    userInfo: t.userInfo,
                    hasUserInfo: !0
                });
            }
        });
        var t = this;
        wx.request({
            url: getApp().globalData.url,
            method: "get",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {},
            success: function(e) {
                t.setData({
                    title: e.data.baojiawtitle,
                    banner: e.data.baojiabanner,
                    baojiatitle: e.data.baojiatitle,
                    themecolor: e.data.themecolor,
                    area: e.data.area,
                    areaarr: e.data.areaarr,
                    bremark: e.data.bremark,
                    index: 0
                }), wx.setNavigationBarTitle({
                    title: e.data.baojiawtitle
                });
            }
        });
    },
    getUserInfo: function(a) {
        console.log(a), e.globalData.userInfo = a.detail.userInfo, this.setData({
            userInfo: a.detail.userInfo,
            hasUserInfo: !0
        });
    }
});