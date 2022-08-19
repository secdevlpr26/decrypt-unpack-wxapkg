var a = getApp(), t = require("../../common.js");

Page({
    isloading: !1,
    pageurl: "",
    onLoad: function(t) {
        var n = this;
        n.pageurl = a.getPageUrl(n, t), a.registerGlobalFunctions(n);
    },
    onShow: function() {
        a.doAfterUserInfoAuth({
            success: this.initData,
            fail: this.initData
        });
    },
    initData: function() {
        var n = this;
        t.initCommonModules(), n.setData({
            Name: a.globalData.userInfo.nickName,
            HeadImg: a.globalData.userInfo.avatarUrl
        }), n.loadData();
    },
    onPageScroll: function() {},
    data: {
        plugNavFlag: !0
    },
    loadData: function() {
        var t = this;
        t.isloading || (t.isloading = !0, a.sendRequest({
            url: "/index.php?c=Front/WxApp/ServiceApi&a=getMyCenterData",
            method: "GET",
            success: function(n) {
                t.isloading = !1, n.success ? t.setData({
                    mycenterdata: n.info
                }) : (console.log("getMyCenterData fail：" + n.msg), 1 == n.needLogin && a.login(function() {
                    wx.reLaunch({
                        url: "/" + t.pageurl
                    });
                }));
            },
            fail: function(a) {
                t.isloading = !1, console.log("getMyCenterData fail");
            }
        }));
    },
    navBtnShowAndHide: function() {
        var a = !this.data.plugNavFlag;
        this.setData({
            plugNavFlag: a
        });
    }
});