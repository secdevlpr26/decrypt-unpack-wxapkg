require("./utils/ald-stat.js");

App({
    onLaunch: function() {
        var t = this;
        wx.login({
            success: function(s) {
                t.wechatLogin(null);
            }
        });
    },
    wechatLogin: function(t) {
        var s = this;
        wx.login({
            success: function(a) {
                s.getUserInfo(a, t);
            }
        });
    },
    getUserInfo: function(t, s) {
        var a = this;
        wx.getUserInfo({
            success: function(n) {
                wx.request({
                    url: a.globalData.doMain + "/pick/wx_login_by_code",
                    data: {
                        js_code: t.code,
                        user_info: n.userInfo
                    },
                    method: "POST",
                    success: function(t) {
                        wx.hideLoading(), t.data.status ? (a.globalData.userInfo = t.data.data, s && s.call()) : wx.showModal({
                            title: "提示",
                            content: t.data.message,
                            showCancel: !1
                        });
                    }
                });
            }
        });
    },
    globalData: {
        userInfo: null,
        doMain: "https://music-api.o2h5.com"
    }
});