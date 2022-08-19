function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../common/http")), i = e(require("../../utils/util")), o = getApp(), a = require("../../common/WXBizDataCrypt3.js"), n = require("../../utils/constants.js");

Component({
    properties: {
        title: {
            type: String,
            value: "登录",
            observer: function(e, t) {}
        },
        desc: {
            type: String,
            value: "您是新用户吗？",
            observer: function(e, t) {}
        },
        loginHidden: {
            type: Boolean,
            value: !0,
            observer: function(e, t) {
                this.showScale(e);
            }
        }
    },
    data: {
        showAn: {},
        showScale: {}
    },
    methods: {
        closeDialog: function() {
            this.hideDialog();
        },
        hideDialog: function() {
            var e = this, t = wx.createAnimation({
                duration: 300,
                timingFunction: "ease"
            });
            t.scale(0, 0).opacity(0).step(), this.setData({
                showScale: t.export()
            }), setTimeout(function() {
                e.setData({
                    loginHidden: !1
                });
            }, 300);
        },
        getPhone: function(e) {
            var t = this, i = a.decryptData(e.detail.encryptedData, o.user.session_key, e.detail.iv);
            i ? this.setLogin(i) : o.login(function(n) {
                o.setUser(n), i = a.decryptData(e.detail.encryptedData, o.user.session_key, e.detail.iv), 
                t.setLogin(i);
            }), this.hideDialog();
        },
        setLogin: function(e) {
            var a = this, s = o.getUser(), r = this;
            t.default.post("/open/auth/wehcat/minprogram/login", {
                appId: n.MIN_APP_ID,
                openId: s.openid,
                phone: e.phoneNumber
            }, function(t) {
                "0000" == t.data.code ? (o.setUser({
                    phone: e.phoneNumber,
                    memberId: t.data.data.memberId
                }), a.hideDialog(), i.default.showToast("登录成功"), r.triggerEvent("onlogin", {
                    isLogin: !0
                })) : i.default.showToast(t.data.message);
            });
        },
        showScale: function(e) {
            if (e) {
                var t = wx.createAnimation({
                    duration: 300,
                    timingFunction: "ease"
                });
                t.scale(1, 1).opacity(1).step(), this.setData({
                    showScale: t.export()
                });
            }
        }
    }
});