var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/api")), n = (getApp(), require("../../utils/rd.js"));

Component({
    properties: {
        isSetting: {
            type: Boolean,
            value: !1
        },
        content: {
            type: String,
            value: "使用小程序需要您授权登录"
        },
        isCancel: {
            type: Boolean,
            value: !1
        },
        type: {
            type: String,
            value: "Only"
        }
    },
    data: {
        showBox: !0
    },
    methods: {
        stopSlide: function() {},
        wxTap: function() {
            this.setData({
                showBox: !1
            });
        },
        wxLogin: function(o) {
            if ("getUserInfo:fail auth deny" !== o.detail.errMsg) {
                this.setData({
                    showBox: !1
                });
                return new Promise(function(o, t) {
                    wx.login({
                        success: function(t) {
                            t.code ? (wx.showLoading({
                                title: "登录中"
                            }), console.log(t.code), e.default.getOpenid("/user/miniSession", {
                                jscode: t.code
                            }).then(function(e) {
                                console.log(e);
                                var t = new n("wx0b1cae82af0a0be7", e.result.session_key);
                                wx.getUserInfo({
                                    success: function(e) {
                                        console.log(e);
                                        var n = t.decryptData(e.encryptedData, e.iv);
                                        console.log(n), wx.setStorageSync("oauthInfo", {
                                            open_id: n.openId,
                                            uuid: n.unionId,
                                            nickname: n.nickName,
                                            img_head: n.avatarUrl,
                                            sex: n.gender
                                        }), console.log(n.unionId), o(n.unionId);
                                    },
                                    fail: function(e) {
                                        wx.openSetting({
                                            success: function(e) {
                                                console.log(e);
                                            }
                                        });
                                    }
                                });
                            }), wx.navigateTo({
                                url: "../../pages/oauth/index"
                            }), setTimeout(function() {
                                wx.hideLoading();
                            }, 2e3)) : wx.showToast({
                                title: "登录失败",
                                icon: "none"
                            });
                        },
                        fail: function(e) {
                            wx.showToast({
                                title: "登录失败",
                                icon: "none"
                            });
                        }
                    });
                });
            }
            this.setData({
                showBox: !0
            });
        },
        cancel: function() {
            this.triggerEvent("cance", {}, {});
        }
    }
});