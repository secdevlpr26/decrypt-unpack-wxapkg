var e = require("../../../utils/config.js"), t = require("../../../utils/util.js"), n = "", o = "";

Page({
    data: {
        date: "2019-04",
        none: !1
    },
    bindDateChange: function(e) {
        var t = this;
        this.setData({
            date: e.detail.value
        }), t.getMyScoreRecord(e.detail.value);
    },
    onLoad: function(e) {
        var a = this;
        n = wx.getStorageSync("3rdsession"), o = wx.getStorageSync("schoolId");
        var i = new Date(), s = t.formatTime(i);
        s = s.substring(0, 7).replace("/", "-"), a.setData({
            date: s,
            none: !0
        }), a.getMyScoreRecord(s);
    },
    getMyScoreRecord: function(t) {
        var a = this;
        wx.request({
            url: e.getScoreRecord,
            data: {
                sessionKey: n,
                date: t,
                scId: o
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if (console.log("------查询积分记录----"), console.log(e), 200 == e.data.type) if (1 == e.data.content) wx.navigateTo({
                    url: "../bind"
                }); else {
                    var t = e.data.date;
                    a.setData({
                        recordList: t.list,
                        readerAccount: t.readerAccount
                    });
                    var n = t.list;
                    null == n || 0 == n.length ? a.setData({
                        none: !0
                    }) : a.setData({
                        none: !1
                    });
                } else wx.showToast({
                    title: e.data.content,
                    icon: "none"
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "网络异常，请稍后重试",
                    icon: "none"
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