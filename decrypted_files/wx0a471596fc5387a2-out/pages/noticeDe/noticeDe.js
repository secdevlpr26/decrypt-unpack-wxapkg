var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../wxParse/wxParse.js")), n = getApp();

Page({
    data: {
        hostUrl: n.globalData.hostUrl
    },
    onLoad: function(e) {
        var o = this;
        wx.getSystemInfo({
            success: function(t) {
                o.setData({
                    winWidth: t.windowWidth,
                    winHeight: t.windowHeight,
                    clientHeight: t.windowHeight
                });
            }
        }), wx.request({
            url: n.globalData.apiUrl,
            data: {
                opt: "getArticleInfo",
                id: e.id
            },
            header: {
                "content-type": "application/json"
            },
            success: function(n) {
                o.setData({
                    info_item: n.data.rows,
                    content: t.default.wxParse("article_content", "html", n.data.rows[0].CONTENT, o)
                });
            }
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