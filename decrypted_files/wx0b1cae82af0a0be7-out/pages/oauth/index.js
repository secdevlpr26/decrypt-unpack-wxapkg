function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var n = e(require("../../utils/api")), o = e(require("../../utils/token")), i = e(require("../../utils/oauth"));

e(require("../../common/toast/toast")), getApp();

Page({
    data: {
        isShowLogin: !0
    },
    onShow: function(e) {
        var n = this, o = wx.getStorageSync("oauthInfo");
        o.uuid ? this.checkLogin(o.uuid) : i.default.wxAouth().then(function(e) {
            console.log(o), n.checkLogin(e);
        });
    },
    checkLogin: function(e) {
        var o = this;
        n.default.wechatLoginCheck("/user/wechatLoginCheck", {
            union_id: e
        }).then(function(e) {
            if (console.log(e), 0 == e.err_code) o.loginSuccess(e.result); else if (2 == e.err_code) return void wx.reLaunch({
                url: "/pages/login/index"
            });
        });
    },
    loginSuccess: function(e) {
        var n = e.accessToken;
        o.default.refreshToken(n.access_token, n.expire_time), wx.reLaunch({
            url: "/pages/index/index"
        });
    }
});