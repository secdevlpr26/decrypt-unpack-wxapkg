var a = getApp(), t = null, e = -1, s = require("../../utils/server");

Page({
    data: {
        login: !1,
        time: "获取验证码"
    },
    onLoad: function(t) {
        e = -1;
        var s = a.globalData.login, n = this;
        this.setData({
            login: s
        }), wx.getSystemInfo({
            success: function(t) {
                n.setData({
                    height: t.windowHeight
                });
                var e = a.globalData.userInfo.card_name, s = a.globalData.userInfo.mobile, i = a.globalData.userInfo.card_brank, o = a.globalData.userInfo.card_num;
                n.setData({
                    card: o,
                    phoneNum: s,
                    pass: e,
                    remindpass: i
                });
            }
        });
    },
    navigateToAddress: function() {
        wx.navigateTo({
            url: "../../address/list/list"
        });
    },
    inputCard: function(a) {
        this.setData({
            card: a.detail.value
        });
    },
    onShow: function() {},
    navigateToAddressAboutus: function() {
        wx.navigateTo({
            url: "/pages/member/aboutus/aboutus"
        });
    },
    turnto_phone: function(a) {
        this.setData({
            ifphone: !0
        });
    },
    tap_logups: function(a) {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    getnum: function(a) {
        var t = this;
        11 != parseInt(t.data.phoneNum).toString().length ? wx.showToast({
            title: "请输入正确的手机号",
            icon: "loading"
        }) : s.getJSON("/User/send_sms_reg_code", {
            mobile: t.data.phoneNum,
            user_id: getApp().globalData.userInfo.user_id
        }, function(a) {
            var e = a.data;
            1 == e.status ? t.reSendPhoneNum() : wx.showToast({
                title: e.msg
            });
        });
    },
    inputNum: function(a) {
        this.data.num = a.detail.value;
    },
    quick_register_phone: function(t) {
        var e = this;
        if (this.data.num = "4444", 4 == parseInt(this.data.num).toString().length) {
            var n = this.data.money;
            s.getJSON("/User/crash?phone=" + this.data.phoneNum + "&num=" + this.data.num + "&user_id=" + a.globalData.userInfo.user_id + "&pass=" + this.data.pass + "&remindpass=" + this.data.remindpass + "&nickName=" + a.globalData.nickName + "&card=" + this.data.card, {
                money: n
            }, function(t) {
                if ("1" == t.data.status) {
                    a.globalData.login = !0, a.globalData.userInfo.card_name = t.data.res.card_name, 
                    a.globalData.userInfo.card_num = t.data.res.card_num, a.globalData.userInfo.card_brank = t.data.res.card_brank, 
                    a.globalData.userInfo.mobile = t.data.res.mobile, a.globalData.userInfo.distribution = t.data.res.distribution, 
                    e.setData({
                        login: !0
                    }), wx.showToast({
                        title: t.data.result,
                        icon: "success"
                    });
                    setTimeout(function() {
                        wx.navigateBack({});
                    }, 2e3);
                } else wx.showToast({
                    title: t.data.result,
                    icon: "error"
                });
            });
        } else wx.showToast({
            title: "无效的验证码",
            duration: 1500,
            icon: "loading"
        });
    },
    getPassword: function(a) {
        this.setData({
            password: a.detail.value,
            warn: {
                warn_passwordSure: ""
            }
        }), this.data.password = a.detail.value;
    },
    getEmail: function(a) {
        this.data.email = a.detail.value, this.data.name = a.detail.value, this.setData({
            warn: {
                warn_email: ""
            }
        });
    },
    passwordSure: function(a) {
        a.detail.value === this.data.password && (this.data.passwordSure = a.detail.value), 
        this.setData({
            warn: {
                warn_passwordSure: ""
            }
        });
    },
    getPhoneNum: function(a) {
        this.setData({
            phoneNum: a.detail.value
        });
    },
    inputRemindPass: function(a) {
        this.setData({
            remindpass: a.detail.value
        });
    },
    inputPass: function(a) {
        this.setData({
            pass: a.detail.value
        });
    },
    input_num: function(a) {
        this.data.num = a.detail.value;
    },
    inputMoney: function(a) {
        this.data.money = a.detail.value;
    },
    reSendPhoneNum: function() {
        if (e < 0) {
            var a = this;
            e = 60, t = setInterval(function() {
                e--, a.setData({
                    time: e + "s"
                }), e <= 0 && (e = -1, clearInterval(t), a.setData({
                    time: "获取验证码"
                }));
            }, 1e3);
        } else wx.showToast({
            title: "短信已发到您的手机，请稍后重试!",
            icon: "loading",
            duration: 700
        });
    }
});