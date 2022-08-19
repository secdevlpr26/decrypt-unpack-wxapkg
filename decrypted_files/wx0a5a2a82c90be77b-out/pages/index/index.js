var e = getApp(), a = require("../../utils/constants.js"), t = require("../../common/http"), o = require("../../common/WXBizDataCrypt3.js");

Page({
    data: {
        motto: "Hello World",
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo")
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function() {
        var a = this;
        t.post("/open/auth/wehcat/minprogram/mallIndex", {}, function(e) {
            e.data;
            console.log(a.data);
        }), e.globalData.userInfo ? this.setData({
            userInfo: e.globalData.userInfo,
            hasUserInfo: !0
        }) : this.data.canIUse ? e.userInfoReadyCallback = function(e) {
            a.setData({
                userInfo: e.userInfo,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(t) {
                e.globalData.userInfo = t.userInfo, a.setData({
                    userInfo: t.userInfo,
                    hasUserInfo: !0
                });
            }
        });
    },
    getUserInfo: function(a) {
        console.log(a), e.globalData.userInfo = a.detail.userInfo, this.setData({
            userInfo: a.detail.userInfo,
            hasUserInfo: !0
        });
    },
    getPhone: function(a) {
        if (a.detail.encryptedData) {
            var t = o.decryptData(a.detail.encryptedData, e.user.session_key, a.detail.iv).purePhoneNumber;
            e.setUser({
                phone: t
            });
        } else wx.showToast({
            title: "获取手机号失败",
            icon: "none",
            duration: 2e3
        });
    },
    toWechat: function() {
        var e = a.API_URL + "/wechat/mall/mallCategory";
        wx.navigateTo({
            url: "../wechat/wechat?url=" + e
        });
    }
});