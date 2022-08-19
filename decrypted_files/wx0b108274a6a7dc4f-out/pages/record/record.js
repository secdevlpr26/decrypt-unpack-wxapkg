var o = require("../../request/api.js"), t = getApp();

Page({
    data: {
        imgUrl: o.API_IMG,
        isShow: !1,
        shenhe: !1
    },
    onLoad: function(s) {
        var e = this;
        console.log(t.globalData.openid), console.log(s), this.setData({
            userId: s.userId
        }), console.log("兑换记录"), wx.request({
            url: o.getLog(t.globalData.openid, s.userId),
            success: function(o) {
                console.log(o), e.setData({
                    logList: o.data.re
                }), 0 == o.data.status && e.setData({
                    isShow: !0
                });
            }
        });
    },
    cancel: function(s) {
        var e = this;
        console.log(s), console.log("取消兑换"), wx.showModal({
            title: "取消兑换",
            content: "确定取消兑换此商品吗",
            success: function(a) {
                a.confirm ? wx.request({
                    url: o.cancel(s.currentTarget.dataset.id),
                    success: function(s) {
                        console.log(s), 1 == s.data.status && wx.showToast({
                            title: "已提交，待审核",
                            success: function() {
                                wx.request({
                                    url: o.getLog(t.globalData.openid, e.data.userId),
                                    success: function(o) {
                                        console.log(o), e.setData({
                                            logList: o.data.re
                                        });
                                    }
                                });
                            }
                        });
                    }
                }) : console.log("用户点击取消");
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var s = this;
        wx.request({
            url: o.getLog(t.globalData.openid, this.data.userId),
            success: function(o) {
                console.log(o), s.setData({
                    logList: o.data.re
                }), 0 == o.data.status && s.setData({
                    isShow: !0
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