var t = require("../../../utils/server");

getApp();

Page({
    data: {
        news: []
    },
    onLoad: function(n) {
        console.log(n);
        var e = n.id, a = this;
        t.getJSON("/News/article_category/id/" + e, function(t) {
            var n = t.data.title, e = t.data.data;
            a.setData({
                news: e
            }), wx.setNavigationBarTitle({
                title: n
            });
        });
    },
    gotonews: function(t) {
        var n = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "../news/detail/detail?objectId=" + n
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});