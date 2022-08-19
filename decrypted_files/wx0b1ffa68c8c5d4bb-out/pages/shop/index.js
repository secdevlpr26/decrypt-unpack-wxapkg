var e = getApp(), a = require("../../common.js"), t = require("./ShopUtil.js");

Page({
    data: {
        pullDownRefreshFlag: !0
    },
    onPullDownRefresh: function() {
        var e = this;
        e.data.pullDownRefreshFlag && (e.setData({
            pullDownRefreshFlag: !1
        }), e.data.pullDownRefreshFlag = !1, e.data.optionsData.refresh = !0, setTimeout(function() {
            e.onLoad(e.data.optionsData), e.setData({
                pullDownRefreshFlag: !0
            }), wx.stopPullDownRefresh();
        }, 1500));
    },
    onLoad: function(o) {
        var s = this;
        s.setData({
            optionsData: o
        });
        var n = function() {
            a.registerGlobalVar("ShopUtil", t), a.registerGlobalFunc(), a.loadPageModules(o), 
            s.isLogin();
        };
        e.globalData.WebUserID ? n() : e.login({
            success: n,
            fail: n,
            forcereg: n
        });
    },
    onPageScroll: function() {},
    onShareAppMessage: function() {
        return e.shareAppMessage(this.url);
    },
    isLogin: function() {
        setTimeout(function() {
            e.globalData.WebUserID || t.showRegUI();
        }, 2e3);
    },
    phoneConfirm: function(e) {
        var a = this, t = "";
        a.setData({
            phoneNumber: e.detail.value
        }), t = e.detail.value, /^1\d{10}$/.test(t) ? a.setData({
            tips: ""
        }) : a.setData({
            tips: "请输入正确的手机号码!"
        });
    }
});