getApp();

App({
    onLaunch: function() {
        var e = this, t = wx.getStorageSync("logs") || [];
        t.unshift(Date.now()), wx.setStorageSync("logs", t), wx.login({
            success: function(t) {
                if (t.code) {
                    console.log(t);
                    var a = t.code;
                    wx.request({
                        url: "https://api.weixin.qq.com/sns/jscode2session?appid=wx0a31e875347f3ed3&secret=60ab01402a57d42245ee8ad7f692270b&js_code=" + a + "&grant_type=authorization_code",
                        data: {
                            code: t.code
                        },
                        success: function(t) {
                            e.globalData.openid = t.data.openid, console.log("获取用户登录态！success", t);
                        }
                    });
                } else console.log("获取用户登录态失败！" + t.errMsg);
            }
        }), wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(t) {
                        e.globalData.userInfo = t.userInfo, e.userInfoReadyCallback && e.userInfoReadyCallback(t);
                    }
                });
            }
        });
        var a = wx.getSystemInfoSync().model;
        console.log("model:" + a), -1 != a.search("iPhone X") ? this.globalData.isIphoneX = !0 : this.globalData.isIphoneX = !1;
    },
    globalData: {
        userInfo: null,
        liveBaseUrl: "https://wx.rainbowclass.cn/",
        isIphoneX: !1
    },
    show: function(e, t, a) {
        var o = wx.createAnimation({
            duration: 800,
            timingFunction: "ease"
        });
        o.opacity(a).step();
        var s = '{"' + t + '":""}';
        (s = JSON.parse(s))[t] = o.export(), e.setData(s);
    },
    slideupshow: function(e, t, a, o) {
        var s = wx.createAnimation({
            duration: 700,
            timingFunction: "ease"
        });
        s.translateY(a).opacity(o).step();
        var n = '{"' + t + '":""}';
        (n = JSON.parse(n))[t] = s.export(), e.setData(n);
    },
    sliderightshow: function(e, t, a, o) {
        var s = wx.createAnimation({
            duration: 700,
            timingFunction: "ease"
        });
        s.translateX(a).opacity(o).step();
        var n = '{"' + t + '":""}';
        (n = JSON.parse(n))[t] = s.export(), e.setData(n);
    }
});