var e = require("../../../utils/server"), t = (getApp(), require("../../../wxParse/wxParse.js"));

Page({
    onLoad: function(a) {
        var r = this;
        e.getJSON("/News/articleDetail/id/1", function(e) {
            console.log(e);
            var a = e.data.title;
            r.setData({
                title: a
            });
            var s = e.data.content.replace(/\/users\/mbz\/\.\./g, getApp().globalUrl_Host + "/users/mbz/..");
            t.wxParse("content", "html", s, r, 5);
        }), wx.showShareMenu({
            withShareTicket: !0
        });
    }
});