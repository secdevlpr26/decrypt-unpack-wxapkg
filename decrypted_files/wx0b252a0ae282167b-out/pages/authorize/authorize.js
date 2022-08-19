var e = getApp();

Page({
    data: {
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        isHide: !1,
        openid: null,
        userInfo: null,
        isCode: !1
    },
    globalData: {
        appid: "wx0b252a0ae282167b",
        secret: "9dcef412e99e393dd736e26df3e83f64"
    },
    onLoad: function() {
        var e = this;
        wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] ? (e.queryUsreInfo(), e.setData({
                    isHide: !1
                })) : e.setData({
                    isHide: !0
                });
            }
        });
    },
    bindGetUserInfo: function(e) {
        if (e.detail.userInfo) {
            var t = this;
            t.setData({
                isHide: !1
            }), t.queryUsreInfo();
        } else wx.showModal({
            title: "警告",
            content: "您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!",
            showCancel: !1,
            confirmText: "返回授权",
            success: function(e) {
                e.confirm && console.log("用户点击了“返回授权”");
            }
        });
    },
    bindAtCode: function(t) {
        t.detail.value.at_code ? wx.request({
            url: e.data.lost + "/index/isActive",
            method: "GET",
            dataType: "html",
            data: {
                openid: wx.getStorageSync("openid"),
                at_code: t.detail.value.at_code
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                var t = JSON.parse(e.data);
                "激活成功" == t.msg ? wx.switchTab({
                    url: "../index/index"
                }) : wx.showToast({
                    title: t.msg,
                    icon: "none",
                    duration: 2e3
                });
            }
        }) : wx.showToast({
            title: "激活码不能为空",
            icon: "none",
            duration: 2e3
        });
    },
    queryUsreInfo: function() {
        var t = this;
        wx.getUserInfo({
            success: function(a) {
                var n = t.globalData;
                t.data.userInfo = a.userInfo, wx.login({
                    success: function(a) {
                        var o = "https://api.weixin.qq.com/sns/jscode2session?appid=" + n.appid + "&secret=" + n.secret + "&js_code=" + a.code + "&grant_type=authorization_code";
                        wx.request({
                            url: o,
                            success: function(a) {
                                wx.setStorageSync("openid", a.data.openid), wx.request({
                                    url: e.data.lost + "/index/queryUsreInfo",
                                    method: "GET",
                                    dataType: "html",
                                    data: {
                                        openid: wx.getStorageSync("openid"),
                                        avatarUrl: t.data.userInfo.avatarUrl
                                    },
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(e) {
                                        var a = JSON.parse(e.data);
                                        "" != a.result.at_code ? (t.data.isCode = !0, "1" == a.result.status ? wx.switchTab({
                                            url: "../index/index"
                                        }) : wx.navigateTo({
                                            url: "../frozen/frozen"
                                        })) : t.data.isCode = !1;
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});