var t = require("../../request/api.js"), o = getApp();

Page({
    data: {
        val: ""
    },
    onLoad: function(t) {
        console.log(t), this.setData({
            userId: t.userId
        });
    },
    getVal: function(t) {
        console.log(t), this.setData({
            userVal: t.detail.value
        });
    },
    submit: function() {
        var a = this;
        console.log("提交", this.data.userVal), wx.request({
            url: t.submit(o.globalData.openid, this.data.userId, this.data.userVal),
            success: function(t) {
                console.log(t), 1 == t.data.status ? 3 == t.data.re.status ? wx.showToast({
                    title: "您评论的内容涉及敏感词汇,请重新输入",
                    icon: "none"
                }) : wx.showToast({
                    title: "提交成功",
                    success: function() {
                        a.setData({
                            val: "",
                            userVal: ""
                        }), setTimeout(function() {
                            wx.switchTab({
                                url: "../qiandao/qiandao"
                            });
                        }, 1500);
                    }
                }) : wx.showToast({
                    title: t.data.msg,
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