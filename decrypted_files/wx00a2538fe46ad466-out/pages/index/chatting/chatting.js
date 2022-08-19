var t = getApp();

Page({
    data: {
        openid: "",
        nickname: "",
        newslist: [],
        inputval: "",
        userInfo: {}
    },
    bindinput: function(t) {
        var n = this, a = t.detail.value;
        n.setData({
            inputval: a
        });
    },
    tosubmit: function() {
        var n = this, a = n.data.openid, e = n.data.inputval;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=news",
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                news_openid: a,
                news_content: e,
                type: 2
            },
            success: function(t) {},
            complete: function() {
                n.setData({
                    inputval: ""
                });
            }
        });
    },
    getList: function(n, a) {
        var e = this;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=liaotian&openid=" + n,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                openid: n
            },
            success: function(t) {
                if (1 == t.data.status) {
                    var o = t.data.result.newslist;
                    e.setData({
                        openid: n,
                        nickname: a,
                        newslist: o
                    });
                }
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    onLoad: function(t) {
        var n = this;
        wx.showLoading({
            title: "正在加载"
        }), wx.setNavigationBarTitle({
            title: t.nickname
        });
        var a = wx.getStorageSync("userInfo");
        this.setData({
            userInfo: a
        });
        var e = setInterval(function() {
            n.getList(t.openid, t.nickname);
        }, 2e3);
        wx.setStorageSync("chat", e);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        if (wx.getStorageSync("chat")) {
            var t = wx.getStorageSync("chat");
            clearInterval(t);
        }
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});