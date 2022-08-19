var o = require("../../request/api.js"), t = getApp();

Page({
    data: {
        imgUrl: o.API_IMG
    },
    onLoad: function(t) {
        var e = this;
        console.log(t), this.setData({
            userId: t.userId
        }), wx.request({
            url: o.goodsList(),
            success: function(o) {
                console.log(o), e.setData({
                    goodsList: o.data.re
                });
            }
        });
    },
    getGood: function(e) {
        var s = this;
        console.log(e), wx.showModal({
            title: "提示",
            content: "您确定要兑换此商品吗",
            success: function(n) {
                n.confirm && (console.log("兑换"), wx.request({
                    url: o.getGoods(t.globalData.openid, s.data.userId, e.currentTarget.dataset.id, e.currentTarget.dataset.num),
                    success: function(t) {
                        console.log(t), 1 == t.data.status ? (wx.showToast({
                            title: "兑换成功"
                        }), wx.request({
                            url: o.goodsList(),
                            success: function(o) {
                                console.log(o), s.setData({
                                    goodsList: o.data.re
                                });
                            }
                        })) : wx.showToast({
                            title: t.data.message,
                            icon: "none"
                        });
                    }
                }));
            }
        });
    },
    torecord: function() {
        wx.navigateTo({
            url: "../record/record?userId=" + this.data.userId
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