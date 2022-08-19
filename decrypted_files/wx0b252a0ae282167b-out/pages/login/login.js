var a, t = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("../../utils/WxValidate.js")), e = getApp();

Page({
    data: {
        mobile: "",
        passwd: ""
    },
    onLoad: function() {
        a = this, this.initValidate();
    },
    showModal: function(a) {
        wx.showModal({
            content: a.msg,
            showCancel: !1
        });
    },
    initValidate: function() {
        var a = {
            mobile: {
                required: !0
            },
            passwd: {
                required: !0
            }
        }, e = {
            mobile: {
                required: "请输入手机号码"
            },
            passwd: {
                required: "请输入密码"
            }
        };
        this.WxValidate = new t.default(a, e);
    },
    formSubmit: function(t) {
        var i = t.detail.value;
        if (!this.WxValidate.checkForm(i)) {
            var o = this.WxValidate.errorList[0];
            return this.showModal(o), !1;
        }
        wx.request({
            url: e.data.lost + "/auth/check_login",
            method: "GET",
            dataType: "html",
            data: {
                mobile: a.data.mobile,
                password: a.data.passwd
            },
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var e = JSON.parse(t.data);
                "correct" == e.msg || "admin" == e.msg ? (wx.setStorageSync("mobile", a.data.mobile), 
                wx.setStorageSync("jy_user_id", e.jy_user_id), wx.switchTab({
                    url: "../index/index"
                })) : "error" == e.msg ? wx.showModal({
                    content: "账号或者密码有误",
                    showCancel: !1
                }) : "noip" == e.msg ? wx.showModal({
                    content: "IP地址受限制",
                    showCancel: !1
                }) : "activation" == e.msg ? wx.showModal({
                    content: "账号未激活",
                    showCancel: !1
                }) : wx.showModal({
                    content: "系统繁忙",
                    showCancel: !1
                });
            }
        });
    },
    onShow: function() {
        this.onLoad();
    },
    mobileText: function(a) {
        this.setData({
            mobile: a.detail.value
        });
    },
    passwdText: function(a) {
        this.setData({
            passwd: a.detail.value
        });
    },
    onPasswd: function(a) {
        wx.navigateTo({
            url: "../passwd/passwd"
        });
    },
    onSignin: function(a) {
        wx.navigateTo({
            url: "../signin/signin"
        });
    }
});