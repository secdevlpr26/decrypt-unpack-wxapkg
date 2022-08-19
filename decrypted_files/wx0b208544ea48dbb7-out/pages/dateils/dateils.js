var t = getApp(), a = require("../../utils/wxRequest"), e = require("../../wxParse/wxParse"), n = t.globalData.config.base;

Page({
    data: {},
    onLoad: function(t) {
        var a = t.id;
        o.render(this, a);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: t.globalData.config.title,
            path: "/pages/dateils/dateils",
            data: {
                data: data
            },
            success: function(t) {},
            fail: function(t) {}
        };
    }
});

var o = {
    render: function(t, o) {
        var i = n + "/Mobile/Api/getArticle";
        if (o) {
            var c = {
                article_id: o
            };
            a.wxGet(i, c, function(a) {
                console.log("文章", a), e.wxParse("imageText", "html", a.data.content, t, 0), t.setData({
                    article: a.data
                });
            });
        } else wx.showToast({
            title: "数据加载失败,无acticalId",
            duration: "2000",
            mask: !0
        });
    }
};