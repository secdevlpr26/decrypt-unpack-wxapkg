var t = getApp();

Page({
    data: {
        operator: null,
        pic: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
    },
    changeIndicatorDots: function(t) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        });
    },
    onLoad: function() {
        var a = this;
        getApp().editTabBar(), a.setData({
            operator: t.globalData.operator,
            pic: t.globalData.userInfo.avatarUrl
        });
    },
    bindFormSubmit: function(a) {
        var o = this, e = a.detail.value.content;
        if (!e) return wx.showToast({
            title: "内容不能为空!",
            icon: "loading"
        }), !1;
        var n = o.data.operator;
        wx.request({
            url: "https://open.flames-tech.cn/plugin/feedback-api/feedback",
            method: "POST",
            data: {
                customer: n.key,
                content: e
            },
            header: {
                token: t.globalData.token,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log(t);
                var a = 1 == t.data.state ? "success" : "none", o = 1 == t.data.state ? "反馈成功" : t.data.message;
                wx.showToast({
                    title: o,
                    icon: a
                }), setTimeout(function() {
                    wx.switchTab({
                        url: "/pages/my/index"
                    });
                }, 2e3);
            },
            fail: function(t) {
                console.log(t);
            }
        });
    }
});