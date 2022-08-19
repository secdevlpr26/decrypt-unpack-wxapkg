var o = getApp();

Page({
    data: {
        openid: "",
        session_key: "",
        hostUrl: o.globalData.hostUrl
    },
    onLoad: function(e) {
        var n = this;
        wx.login({
            success: function(o) {
                console.log(o.code, o), wx.request({
                    url: "https://api.weixin.qq.com/sns/jscode2session?appid=wxcc288f4358ba1666&secret=d6b00c1633dcaa499ed6210c91df8764&js_code=" + o.code,
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    method: "post",
                    success: function(o) {
                        console.log(o, "opind"), n.setData({
                            openid: o.data.openid,
                            session_key: o.data.session_key
                        });
                    }
                });
            }
        }), wx.request({
            url: o.globalData.apiUrl,
            data: {
                opt: "GetAccessToken"
            },
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                "" != o.data && n.setData({
                    access_token: o.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    form: function(o) {
        var e = this, n = "https://api.weixin.qq.com/cgi-bin/message/wxopen/template/uniform_send?access_token=" + e.data.access_token, a = {
            touser: e.data.openid,
            mp_template_msg: {
                appid: "wx3b3aebce4c3dcfec",
                template_id: "hm-kqt5m86lJk0zaHin77qV0Otcy-_wzbq9-dBFO1J0",
                miniprogram: {
                    appid: "wxcc288f4358ba1666"
                },
                data: {
                    first: {
                        value: "恭喜你购买成功！",
                        color: "#173177"
                    },
                    keyword1: {
                        value: "巧克力",
                        color: "#173177"
                    },
                    keyword2: {
                        value: "39.8元",
                        color: "#173177"
                    },
                    remark: {
                        value: "欢迎再次购买11！",
                        color: "blue"
                    }
                }
            }
        };
        console.log(a), wx.request({
            url: n,
            data: a,
            method: "POST",
            success: function(o) {
                console.log(o, "push msg");
            },
            fail: function(o) {
                console.log(o, "push err");
            }
        });
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});