var t = require("../../../utils/server"), e = getApp(), n = require("../../../wxParse/wxParse.js");

Page({
    data: {
        title: "",
        publishTime: ""
    },
    onLoad: function(t) {
        var e = t.objectId;
        this.getarticleById(e);
    },
    getarticleById: function(a) {
        var i = this;
        t.getJSON("/News/articleDetail/id/" + a, function(t) {
            var a = t.data.title, o = t.data.publish_time;
            i.setData({
                title: a,
                publishTime: o
            });
            var r = t.data.content.replace(/\/users\/mbz/, e.globalUrl + "/users/mbz");
            n.wxParse("content", "html", r, i, 5);
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