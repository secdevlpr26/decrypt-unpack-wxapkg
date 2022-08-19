var t, e = require("../../../utils/server");

Page({
    data: {
        articlelist: []
    },
    onLoad: function(a) {
        t = a.catId, this.articleList(), this.getInviteCode(a);
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
    articleList: function() {
        var a = this;
        e.getJSON("/Article/articlelist/catId/" + t, function(t) {
            var e = t.data.result;
            a.setData({
                articlelist: e
            });
        });
    },
    onShow: function() {},
    showDetail: function(t) {
        var e = t.currentTarget.dataset.objectId;
        wx.navigateTo({
            url: "../detail/detail?articleId=" + e
        });
    }
});