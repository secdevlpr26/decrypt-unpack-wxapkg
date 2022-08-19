var t = getApp(), e = require("../../request/api.js");

Page({
    data: {
        msg: "获取验证码",
        timer_num: 60
    },
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
    getPhone: function(t) {
        console.log(t), this.setData({
            userPhone: t.detail.value
        });
    },
    getPsd: function(t) {
        this.setData({
            userPassWord: t.detail.value
        });
    },
    getPsd2: function(t) {
        console.log(t), this.setData({
            userPassWord2: t.detail.value
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
            var o = setInterval(function() {
                t.setData({
                    timer_num: t.data.timer_num - 1
                }), 0 == t.data.timer_num && (clearInterval(o), console.log("关闭定时器"), t.setData({
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
    userCode: function(t) {
        console.log(t), 4 == t.detail.value.length && this.setData({
            isLogin: !0,
            userCode: t.detail.value
        });
    },
    register: function(o) {
        var s = this;
        console.log(o), this.data.code == o.detail.value.usercode ? wx.request({
            url: e.register(t.globalData.openid, o.detail.value.phone, o.detail.value.psd),
            success: function(e) {
                console.log(e), 0 == e.data.status ? (console.log("注册失败"), wx.showToast({
                    title: "发生了一个未知错误，请稍后再试",
                    icon: "none"
                })) : 1 == e.data.status ? (console.log("注册成功"), 0 == e.data.first ? (console.log("新用户，赠送积分"), 
                t.globalData.newP = !0, t.globalData.score = e.data.num) : console.log("老用户，不赠送积分"), 
                wx.showToast({
                    title: "注册成功",
                    success: function(t) {
                        setTimeout(function() {
                            wx.redirectTo({
                                url: "../login/login"
                            });
                        }, 1e3), s.setData({
                            val: "",
                            val2: "",
                            psd: "",
                            psd2: ""
                        });
                    }
                })) : 2 == e.data.status ? (console.log("该手机号已注册"), wx.showModal({
                    title: "登录",
                    content: "该手机号已注册，快去登录吧",
                    success: function(t) {
                        t.confirm ? wx.redirectTo({
                            url: "../login/login"
                        }) : console.log("用户点击了取消");
                    }
                })) : 3 == e.data.status && wx.showToast({
                    title: "一个微信号只能注册一次哦",
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