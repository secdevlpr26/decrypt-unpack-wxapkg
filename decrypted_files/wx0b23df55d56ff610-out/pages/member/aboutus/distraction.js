var a = require("../../../utils/server"), t = (getApp(), 1);

Page({
    data: {
        motto: "\b点击头像进入主界面",
        userInfo: {},
        articles: []
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../main/main"
        });
    },
    details: function(a) {
        var t = a.currentTarget.dataset.index;
        wx.navigateTo({
            url: "detail?id=" + this.data.articles[t].id
        });
    },
    onLoad: function() {
        var t = getApp();
        t.getOpenId(function() {
            var e = getApp().globalData.openid;
            a.getJSON("/User/validateOpenid", {
                openid: e
            }, function(a) {
                200 == a.data.code ? (getApp().globalData.userInfo = a.data.data, getApp().globalData.login = !0, 
                getApp().globalData.config = a.data.config, getApp().globalData.info = a.data.info) : "400" == a.data.code && (console.log("need register"), 
                t.register(function() {
                    getApp().globalData.login = !0;
                }));
            });
        }), this.getDatas(0);
    },
    getDatas: function(t) {
        var e = this;
        getApp();
        a.getJSON("/User/articles1", {
            page: t
        }, function(a) {
            if (200 == a.data.code) {
                var t = a.data.data, i = e.data.articles;
                for (var n in t) i.push(t[n]);
                e.setData({
                    articles: i
                }), wx.stopPullDownRefresh();
            }
        });
    },
    onReachBottom: function() {
        this.getDatas(++t), wx.showToast({
            title: "加载中",
            icon: "loading"
        });
    },
    onPullDownRefresh: function() {
        t = 1, this.setData({
            articles: []
        }), this.getDatas(t);
    },
    onShareAppMessage: function() {
        return {
            title: "物流性闻",
            desc: "物流性闻",
            path: "/pages/index/index"
        };
    }
});