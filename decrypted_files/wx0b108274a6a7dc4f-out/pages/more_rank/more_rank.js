getApp();

var n = require("../../request/api.js");

Page({
    data: {},
    onLoad: function(e) {
        var o = this;
        console.log(e), this.setData({
            userId: e.userid
        }), wx.request({
            url: n.allRankList(),
            success: function(n) {
                console.log(n), console.log(n.data.filter(function(n) {
                    return n.nickname;
                }));
                var e = n.data.filter(function(n) {
                    return n.nickname;
                });
                console.log(o.data.userId);
                var t = o.data.userId, s = e.map(function(n) {
                    return n.id;
                });
                console.log(s), console.log(s.indexOf(t) + 1);
                var a = e.slice(3);
                console.log(a), o.setData({
                    first: e[0],
                    second: e[1],
                    third: e[2],
                    newArr: a,
                    userRank: s.indexOf(t) + 1
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var e = this;
        wx.getUserInfo({
            success: function(n) {
                console.log(n), e.setData({
                    userInfo: n.userInfo
                });
            }
        }), wx.request({
            url: n.getUserScore(this.data.userId),
            success: function(n) {
                console.log(n), e.setData({
                    score: n.data.data.score
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});