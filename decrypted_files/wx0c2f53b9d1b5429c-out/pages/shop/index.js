var e = getApp(), t = require("../../common.js"), a = require("./ShopUtil.js");

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
    onLoad: function(n) {
        var o = this;
        o.getHeight(), o.setData({
            optionsData: n
        }), e.registerGlobalFunctions(o);
        var i = function() {
            t.registerGlobalVar("ShopUtil", a), t.registerGlobalFunc(), t.loadPageModules(n), 
            o.isLogin();
        };
        wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"], i();
            }
        });
    },
    onPageScroll: function() {},
    onShareAppMessage: function() {
        return e.shareAppMessage(this.url);
    },
    yijiandaohhang: function(e) {
        for (var t, a, n = e.currentTarget.dataset.hi, o = n[0].Latitude, i = n[0].Longitude, s = 0; s < n.length; s++) 1 == n[s].Type && (t = n[s].Text, 
        a = n[s].Title);
        wx.openLocation({
            name: a,
            address: t,
            longitude: Number(i),
            latitude: Number(o)
        });
    },
    yijianbohao: function(e) {
        var t = e.currentTarget.dataset.iphone;
        wx.makePhoneCall({
            phoneNumber: t
        });
    },
    isLogin: function() {
        setTimeout(function() {
            e.globalData.WebUserID || a.showRegUI();
        }, 2e3);
    },
    phoneConfirm: function(e) {
        var t = this, a = "";
        t.setData({
            phoneNumber: e.detail.value
        }), a = e.detail.value, /^1\d{10}$/.test(a) ? t.setData({
            tips: ""
        }) : t.setData({
            tips: "请输入正确的手机号码!"
        });
    },
    getHeight: function() {
        this.setData({
            height: parseInt(wx.getSystemInfoSync().windowHeight - wx.getSystemInfoSync().windowWidth / 750 * 100)
        });
    }
});