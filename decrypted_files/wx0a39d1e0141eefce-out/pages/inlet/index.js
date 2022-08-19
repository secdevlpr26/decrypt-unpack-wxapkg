var e = require("../../utils/requestApi.js"), o = getApp();

Page({
    data: {
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        formIdString: ""
    },
    onLoad: function() {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    enterSystem: function(n) {
        var t = o.globalData.openid;
        console.log("enterSystem" + t), e.request({
            url: e.apiPostNeedMessageUrl,
            data: {
                formId: n.detail.formId,
                openId: t
            },
            complete: function(e) {}
        }), console.log("enterSystem" + n.detail.formId);
    },
    enterS: function(n) {
        var t = o.globalData.openid;
        console.log("enterS" + t), e.request({
            url: e.apiPostNeedMessageUrl,
            data: {
                formId: n.detail.formId,
                openId: t
            },
            complete: function(e) {}
        }), console.log("enterS" + n.detail.formId);
    },
    rSystem: function(n) {
        var t = o.globalData.openid;
        console.log("rSystem" + t), e.request({
            url: e.apiPostNeedMessageUrl,
            data: {
                formId: n.detail.formId,
                openId: t
            },
            complete: function(e) {}
        }), console.log("rSystem" + n.detail.formId);
    },
    enter: function() {
        wx.navigateTo({
            url: "../index/index"
        });
    }
});