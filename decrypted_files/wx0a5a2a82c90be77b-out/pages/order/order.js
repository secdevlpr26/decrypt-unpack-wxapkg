var e = require("../../utils/constants.js"), t = require("../../utils/util"), i = getApp();

Page({
    data: {
        url: "",
        isWebView: !1
    },
    onLoad: function() {
        i.user.memberId && i.user.phone ? this.setData({
            isWebView: !0,
            url: t.urlFormat(e.API_URL + "/wechat/order/toAdd")
        }) : this.setData({
            isLogin: !0
        });
    },
    eventLogin: function(i) {
        i.detail.isLogin && this.setData({
            isWebView: !0,
            url: t.urlFormat(e.API_URL + "/wechat/order/toAdd")
        });
    }
});