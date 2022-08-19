var e = require("../../wxParse/wxParse.js"), o = (getApp(), require("../../request/api.js"));

Page({
    data: {},
    onLoad: function(n) {
        var t = this;
        console.log(n), this.setData({
            id: n.id
        }), wx.request({
            url: o.getGgDetail(n.id),
            success: function(o) {
                console.log(o);
                var n = o.data.re.content;
                e.wxParse("article", "html", n, t, 5);
            }
        }), setTimeout(function() {
            console.log("3s已过,点击量+1"), wx.request({
                url: o.ggClick(t.data.id),
                success: function(e) {
                    console.log(e);
                }
            });
        }, 3e3);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});