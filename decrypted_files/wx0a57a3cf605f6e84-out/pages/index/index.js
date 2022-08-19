var t = getApp(), e = require("../../utils/fetch.js");

Page({
    data: {
        motto: "Hello World",
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        pickUsers: [],
        newList: [],
        one: "",
        two: ""
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function() {
        this.getPickUsers(), wx.setNavigationBarTitle({
            title: "Pick新说唱"
        });
    },
    getPickUsers: function() {
        if ("active" != this.data.one) if (this.data.pickUsers.length > 0) this.setData({
            one: "active",
            two: ""
        }); else {
            var t = this;
            e.sendRequest("/pick").then(function(e) {
                e.data.status && t.setData({
                    pickUsers: e.data.data,
                    one: "active",
                    two: ""
                });
            });
        }
    },
    getNewList: function() {
        if ("active" != this.data.two) if (this.data.newList.length > 0) this.setData({
            one: "",
            two: "active"
        }); else {
            var t = this;
            e.sendRequest("/pick/new_list").then(function(e) {
                e.data.status && t.setData({
                    newList: e.data.data,
                    one: "",
                    two: "active"
                });
            });
        }
    },
    getUserInfo: function(e) {
        console.log(e), t.globalData.userInfo = e.detail.userInfo, this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: !0
        });
    },
    goDetail: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/detail/index?id=" + e
        });
    },
    onShareAppMessage: function() {
        var t = this;
        return {
            title: "Homie,快来我们一起为TA赢代言",
            path: "/pages/index/index",
            success: function(e) {
                t.saveShareCount(t.data.pickUser.id);
            },
            fail: function(t) {},
            complete: function() {}
        };
    }
});