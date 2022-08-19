getApp();

var t = require("../../request/api.js");

Page({
    data: {},
    onLoad: function(t) {
        var e = this;
        wx.getStorage({
            key: "userInfo",
            success: function(t) {
                console.log(t), e.setData({
                    userInfo: t.data
                });
            }
        });
    },
    userPhone: function(t) {
        this.setData({
            userPhone: t.detail.value
        });
    },
    userPsd: function(t) {
        this.setData({
            userPsd: t.detail.value
        }), t.detail.value ? this.setData({
            isLogin: !0
        }) : this.setData({
            isLogin: !1
        });
    },
    register: function() {
        wx.redirectTo({
            url: "../register/register"
        });
    },
    forget: function() {
        wx.redirectTo({
            url: "../forgetPsd/forgetPsd"
        });
    },
    login: function(e) {
        console.log(e), wx.request({
            url: t.login(e.detail.value.phone, e.detail.value.psd),
            success: function(t) {
                console.log(t), 0 == t.data.status ? wx.showToast({
                    title: "用户名或密码错误",
                    icon: "none"
                }) : 1 == t.data.status ? (wx.setStorage({
                    key: "userId",
                    data: t.data.data.id
                }), wx.showToast({
                    title: "登录成功",
                    success: function() {
                        setTimeout(function() {
                            wx.switchTab({
                                url: "../qiandao/qiandao"
                            }), this.setData({
                                val: "",
                                psd: ""
                            });
                        }, 1e3);
                    }
                })) : wx.showToast({
                    title: "发生了一个未知错误",
                    icon: "none"
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});