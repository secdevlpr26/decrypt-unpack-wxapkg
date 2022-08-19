function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var a = e(require("../../utils/api")), t = e(require("../../utils/token")), d = (e(require("../../utils/oauth")), 
e(require("../../common/toast/toast")));

getApp();

Page({
    data: {
        phone: "",
        code: "",
        disabledSend: !1,
        register_token: "",
        captchaLabel: "获取验证码",
        count: 60,
        disabledBtn: !1
    },
    onLoad: function(e) {
        d.default.show({
            type: "text",
            timer: 1500,
            text: "需要先绑定手机号，才能继续操作哦"
        });
    },
    loginSuccess: function(e) {
        var a = e.accessToken;
        t.default.refreshToken(a.access_token, a.expire_time), wx.reLaunch({
            url: "/pages/index/index"
        });
    },
    validatePhone: function(e) {
        var a = e.detail.value;
        return this.data.phone = a.replace(/\D+/g, ""), a.replace(/\D+/g, "");
    },
    validateCode: function(e) {
        var a = e.detail.value;
        return this.data.code = a.replace(/\D+/g, ""), a.replace(/\D+/g, "");
    },
    sendCaptcha: function() {
        var e = this;
        this.data.disabledSend || (/^1[23456789]\d{9}$/.test(this.data.phone) ? this.data.disabledBtn || (this.data.disabledBtn = !0, 
        a.default.sendCaptcha("/user/send/captcha", {
            mobile: this.data.phone
        }).then(function(a) {
            e.data.disabledBtn = !1, "0" == a.err_code && (e.data.disabledSend = !0, e.data.count = 60, 
            e.data.captchaLabel = "重新获取(" + e.data.count + ")", e.data.register_token = a.result.register_token, 
            e.setData({
                disabledSend: e.data.disabledSend,
                captchaLabel: e.data.captchaLabel
            }), e.data.timer = setInterval(function() {
                e.data.count--, e.data.captchaLabel = "重新获取(" + e.data.count + ")", e.setData({
                    captchaLabel: e.data.captchaLabel
                }), e.data.count < 1 && (e.data.disabledSend = !1, e.data.captchaLabel = "获取验证码", 
                e.setData({
                    disabledSend: e.data.disabledSend,
                    captchaLabel: e.data.captchaLabel
                }), clearInterval(e.data.timer));
            }, 1e3));
        }, function(a) {
            e.data.disabledBtn = !1;
        })) : d.default.show({
            type: "text",
            timer: 1500,
            text: "请填写正确的手机号"
        }));
    },
    formSubmit: function(e) {
        var t = this, n = e.detail.value;
        if (/^1[34578]\d{9}$/.test(n.phone)) if (/^\d{4,6}$/.test(n.code)) {
            var i = wx.getStorageSync("oauthInfo");
            a.default.wechatLogin("/user/wechatLogin", {
                captcha: this.data.code,
                head_image: i.img_head,
                nick_name: i.nickname,
                union_id: i.uuid,
                register_token: this.data.register_token
            }).then(function(e) {
                0 == e.err_code && t.loginSuccess(e.result);
            });
        } else d.default.show({
            type: "text",
            timer: 1500,
            text: "请输入正确的验证码"
        }); else d.default.show({
            type: "text",
            timer: 1500,
            text: "请填写正确的手机号"
        });
    }
});