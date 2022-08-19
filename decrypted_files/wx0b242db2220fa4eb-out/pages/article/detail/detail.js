var t, e = require("../../../utils/server"), a = require("../../../wxParse/wxParse.js");

Page({
    data: {
        article: []
    },
    onLoad: function(a) {
        t = a.articleId, this.articleDetail(), this.getInviteCode(a);
        var i = getApp();
        i.getOpenId(function() {
            var t = getApp().globalData.openid;
            e.getJSON("/User/validateOpenid", {
                openid: t
            }, function(t) {
                200 == t.data.code ? (getApp().globalData.userInfo = t.data.data, getApp().globalData.login = !0) : "400" == t.data.code && (console.log("need register"), 
                i.register(function() {
                    getApp().globalData.login = !0;
                }));
            });
        });
    },
    getInviteCode: function(t) {
        void 0 != t.uid && wx.showToast({
            title: "来自用户:" + t.uid + "的分享",
            icon: "success",
            duration: 2e3
        });
    },
    articleDetail: function() {
        var i = this;
        e.getJSON("/Article/article/articleId/" + t, function(t) {
            var e = t.data.result, n = t.data.content;
            a.wxParse("content", "html", n, i, 5), i.setData({
                article: e
            });
        });
    },
    onShow: function() {}
});