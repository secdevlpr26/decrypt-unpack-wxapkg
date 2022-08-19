var t = require("../../../comm/script/fetch"), e = getApp(), i = require("../../../component/message/message.js");

Page({
    data: {
        phone: "",
        code: "",
        second: 60,
        phoneImgUrl: "",
        codeImgUrl: "",
        getSmsCode: "获取验证码",
        getAuthCodeTextColor: "#ccc",
        disabled: !0,
        hasSubmit: !1
    },
    onLoad: function(t) {
        this.setData({
            phoneImgUrl: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/17020409.png",
            codeImgUrl: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/17020410.png",
            getAuthCodeTextColor: "#ccc",
            loginBackgroundColor: "#ccc"
        });
    },
    inputPhone: function(t) {
        var e = this;
        this.setData({
            phone: t.detail.value
        }), t.detail.value.length < 11 && this.setData({
            disabled: !0,
            getAuthCodeTextColor: "#ccc"
        }), 11 === t.detail.value.length && e.data.disabled && this.setData({
            disabled: !1,
            getAuthCodeTextColor: "#ff5000"
        }), t.detail.value ? this.setData({
            phoneImgUrl: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/17020409-2.png"
        }) : this.setData({
            phoneImgUrl: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/17020409.png"
        });
    },
    inputCode: function(t) {
        this.setData({
            code: t.detail.value
        }), t.detail.value ? this.setData({
            codeImgUrl: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/17020410-2.png",
            loginBackgroundColor: "#ff5000"
        }) : this.setData({
            codeImgUrl: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/17020410.png",
            loginBackgroundColor: "#ccc"
        });
    },
    countdown: function(t) {
        var e = t.data.second;
        if (0 === e) return t.setData({
            second: 60,
            getSmsCode: "获取验证码"
        }), void (11 === t.data.phone.length && t.data.disabled && this.setData({
            disabled: !1,
            getAuthCodeTextColor: "#ff5000"
        }));
        setTimeout(function() {
            t.setData({
                second: e - 1,
                getSmsCode: "(" + e + ")重新发送",
                getAuthCodeTextColor: "#ccc"
            }), t.countdown(t);
        }, 1e3);
    },
    sendCode: function(e) {
        var o = this;
        if (60 === o.data.second) {
            if (!o.bindCheckMobile(o.data.phone)) return;
            o.setData({
                disabled: !0
            }), t.getVerifyCode.call(o, o.data.phone, function() {
                o.countdown(o), i.show.call(o, {
                    content: "已发送" + o.data.phone,
                    icon: "ok"
                });
            }, function() {
                o.setData({
                    disabled: !1
                }), i.show.call(o, {
                    content: "发送失败",
                    icon: "tip"
                });
            });
        }
    },
    submit: function(o) {
        var a = this;
        a.bindCheckMobile(a.data.phone) && (a.data.hasSubmit || (a.setData({
            hasSubmit: !0
        }), t.doLoginWithPhone.call(a, a.data.phone, a.data.code, function(t) {
            e.setHwxUserInfo(t), wx.navigateBack({
                delta: 1,
                success: function(t) {},
                fail: function() {},
                complete: function() {}
            });
        }, function(t) {
            i.show.call(a, {
                content: t,
                icon: "tip"
            }), a.setData({
                hasSubmit: !1
            });
        })));
    },
    bindCheckMobile: function(t) {
        var e = this;
        return !!t.match(/^1[3-9][0-9]\d{8}$/) || (i.show.call(e, {
            content: "手机格式不正确",
            icon: "tip"
        }), !1);
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});