var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../common/http")), o = require("../../utils/constants.js"), t = getApp();

Page({
    data: {},
    onLoad: function(n) {
        console.log("option", n);
        var a = n.redirectUrl ? decodeURIComponent(n.redirectUrl) : "", i = n.failUrl ? decodeURIComponent(n.failUrl) : "", c = n.payId, r = this;
        e.default.post("/open/auth/wehcat/minprogram/getPaySign", {
            payId: c,
            appId: o.MIN_APP_ID,
            openId: t.user.openid
        }, function(e) {
            console.log("getPaySign", e);
            var o = e.data.data;
            wx.requestPayment({
                timeStamp: String(o.timeStamp),
                nonceStr: o.nonceStr,
                package: o.package,
                signType: o.signType,
                paySign: o.paySign,
                success: function(e) {
                    console.log("paySucess", e), r.toPage(a);
                },
                fail: function(e) {
                    console.log("payFail", e), r.toPage(i);
                }
            });
        });
    },
    toPage: function(e) {
        setTimeout(function() {
            wx.reLaunch({
                url: "/pages/home/home"
            });
        }, 200);
    }
});