var e = getApp(), n = require("../../common/WXBizDataCrypt3.js"), o = require("../../common/http.js");

Page({
    data: {
        userInfo: {}
    },
    onLoad: function(e) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getPhone: function(t) {
        if (t.detail.encryptedData) {
            var a = n.decryptData(t.detail.encryptedData, e.user.session_key, t.detail.iv);
            if (!a) return void wx.showToast({
                title: "解码获取手机号失败",
                icon: "none",
                duration: 2e3
            });
            var i = a.purePhoneNumber;
            e.setUser({
                phone: i
            }), o.post("/open/auth/wehcat/minprogram/login", {
                openId: e.user.openid,
                phone: i
            }, function(n) {
                e.setUser({
                    memberId: n.data.memberId
                });
            });
        } else wx.showToast({
            title: "获取手机号失败",
            icon: "none",
            duration: 2e3
        });
    }
});