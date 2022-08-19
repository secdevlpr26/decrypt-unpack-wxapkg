var e, t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/WxValidate.js")), a = getApp();

Page({
    data: {
        code: "",
        mobile: "",
        passwd: "",
        recode: "",
        codeText: "获取验证码",
        disabled: "",
        timer: "",
        countDownNum: "60"
    },
    onLoad: function() {
        e = this, this.initValidate();
    },
    onShow: function() {
        this.onLoad();
    },
    showModal: function(e) {
        wx.showModal({
            content: e.msg,
            showCancel: !1
        });
    },
    initValidate: function() {
        var e = {
            mobile: {
                required: !0,
                tel: !0
            },
            passwd: {
                required: !0,
                minlength: 9
            },
            repasswd: {
                required: !0,
                minlength: 9,
                equalTo: "passwd"
            }
        }, a = {
            mobile: {
                required: "请输入手机号码",
                tel: "请输入正确的手机号码"
            },
            passwd: {
                required: "请输入密码",
                minlength: "密码不能少于9位"
            },
            repasswd: {
                required: "请输入确认密码",
                minlength: "确认密码不能少于9位",
                equalTo: "两次密码不一致"
            }
        };
        this.WxValidate = new t.default(e, a);
    },
    formSubmit: function(t) {
        var o = t.detail.value;
        if (!this.WxValidate.checkForm(o)) {
            var n = this.WxValidate.errorList[0];
            return this.showModal(n), !1;
        }
        if (e.data.code != e.data.recode) return wx.showModal({
            content: "验证码不正确",
            showCancel: !1
        }), !1;
        wx.request({
            url: a.data.lost + "/index/find_form",
            method: "POST",
            dataType: "html",
            data: {
                mobile: e.data.mobile,
                password: e.data.passwd
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                "0" == e.data ? wx.showModal({
                    content: "该手机号码未注册",
                    showCancel: !1
                }) : "1" == e.data ? (wx.showModal({
                    content: "找回成功",
                    showCancel: !1
                }), setTimeout(function() {
                    wx.redirectTo({
                        url: "../login/login"
                    });
                }, 2e3)) : wx.showModal({
                    content: "系统繁忙",
                    showCancel: !1
                });
            }
        });
    },
    mobileText: function(e) {
        this.setData({
            mobile: e.detail.value
        });
    },
    passwdText: function(e) {
        this.setData({
            passwd: e.detail.value
        });
    },
    codeText: function(e) {
        this.setData({
            recode: e.detail.value
        });
    },
    getCode: function(t) {
        var o = /^1[34578]\d{9}$/.test(e.data.mobile);
        if ("" == e.data.mobile) wx.showModal({
            content: "请输入手机号码",
            showCancel: !1
        }); else if (o) {
            var n = Math.floor(10 * Math.random()) + "" + Math.floor(10 * Math.random()) + Math.floor(10 * Math.random()) + Math.floor(10 * Math.random()), d = e.data.countDownNum;
            wx.request({
                url: a.data.lost + "/base/sms",
                method: "POST",
                dataType: "html",
                data: {
                    mobile: e.data.mobile,
                    title: "找回密码",
                    code: n
                },
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    e.setData({
                        code: t.data
                    }), e.setData({
                        timer: setInterval(function() {
                            d--, e.setData({
                                countDownNum: d,
                                codeText: d + " 秒后获取",
                                disabled: "disabled"
                            }), 0 == d && (e.setData({
                                countDownNum: "60",
                                codeText: "获取验证码",
                                disabled: ""
                            }), clearInterval(e.data.timer));
                        }, 1e3)
                    });
                }
            });
        } else wx.showModal({
            content: "手机号码格式不正确",
            showCancel: !1
        });
    },
    onLogin: function(e) {
        wx.navigateTo({
            url: "../login/login"
        });
    }
});