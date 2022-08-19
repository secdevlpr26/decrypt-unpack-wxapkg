getApp();

var e = require("../../request/api.js");

Page({
    data: {
        msg: "获取验证码",
        timer_num: 60
    },
    onLoad: function(e) {
        var t = this;
        wx.getStorage({
            key: "userInfo",
            success: function(e) {
                console.log(e), t.setData({
                    userInfo: e.data
                });
            }
        });
    },
    getPhone: function(e) {
        console.log(e), this.setData({
            userPhone: e.detail.value
        });
    },
    getPsd: function(e) {
        this.setData({
            userPassWord: e.detail.value
        });
    },
    getPsd2: function(e) {
        console.log(e), this.setData({
            userPassWord2: e.detail.value
        });
    },
    getcode: function() {
        var t = this;
        if (/^1[34578]\d{9}$/.test(this.data.userPhone)) if (this.data.userPassWord) if (this.data.userPassWord2) if (this.data.userPassWord != this.data.userPassWord2) wx.showToast({
            title: "两次密码输入不一致哦~",
            icon: "none"
        }); else {
            this.setData({
                msg: "已发送"
            }), wx.request({
                url: e.getcode(this.data.userPhone),
                success: function(e) {
                    console.log(e), t.setData({
                        code: e.data.code
                    });
                }
            });
            var s = setInterval(function() {
                t.setData({
                    timer_num: t.data.timer_num - 1
                }), 0 == t.data.timer_num && (clearInterval(s), console.log("关闭定时器"), t.setData({
                    msg: "获取验证码",
                    timer_num: 60
                }));
            }, 1e3);
        } else wx.showToast({
            title: "请再次输入您的密码",
            icon: "none"
        }); else wx.showToast({
            title: "密码不能为空哦~",
            icon: "none"
        }); else wx.showToast({
            title: "手机号输入有误",
            icon: "none"
        });
    },
    userCode: function(e) {
        console.log(e), 4 == e.detail.value.length && this.setData({
            isLogin: !0,
            userCode: e.detail.value
        });
    },
    reset: function(t) {
        console.log(t), this.data.code == t.detail.value.usercode ? wx.request({
            url: e.resetPsd(t.detail.value.phone, t.detail.value.psd),
            success: function(e) {
                console.log(e), 1 == e.data.status ? wx.showToast({
                    title: "修改成功",
                    success: function() {
                        setTimeout(function() {
                            wx.redirectTo({
                                url: "../login/login"
                            });
                        }, 1e3);
                    }
                }) : 0 == e.data.status && wx.showToast({
                    title: "该用户不存在",
                    icon: "none"
                });
            }
        }) : wx.showToast({
            title: "验证码错误，请重新输入",
            icon: "none"
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