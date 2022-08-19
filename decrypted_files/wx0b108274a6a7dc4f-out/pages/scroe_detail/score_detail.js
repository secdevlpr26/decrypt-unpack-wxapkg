getApp();

var o = require("../../request/api.js");

Page({
    data: {},
    onLoad: function(e) {
        var n = this;
        console.log(e), wx.request({
            url: o.getUserLog(e.userId),
            success: function(o) {
                console.log(o), n.setData({
                    logList: o.data.scoreRecord
                });
            }
        }), wx.request({
            url: o.getUserScore(e.userId),
            success: function(o) {
                console.log(o), n.setData({
                    score: o.data.data.score
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