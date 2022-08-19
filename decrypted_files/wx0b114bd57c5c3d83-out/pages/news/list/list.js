var a = require("../../../utils/server");

Page({
    data: {
        ad: []
    },
    NewsDetail: function(a) {
        var t = a.currentTarget.dataset.articleId;
        wx.navigateTo({
            url: "../detail/detail?objectId=" + t
        });
    },
    onLoad: function() {
        var t = this;
        a.getJSON("/News/articlelist", function(a) {
            var e = a.data;
            t.setData({
                ad: e
            });
        });
    }
});