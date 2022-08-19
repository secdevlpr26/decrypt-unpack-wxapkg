var o = getApp();

Page({
    data: {
        motto: "Hello World",
        userInfo: {},
        id: "",
        state: ""
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function(e) {
        console.log("login");
        var t = this;
        console.log(e), e && t.setData({
            id: e.id || "",
            state: e.state || ""
        }), e.id && !e.state ? (console.log("id"), o.surelogin(e.id), o.globalData.userInfo && o.globalData.userInfo.openid && t.setData({
            userInfo: o.globalData.userInfo
        })) : o.getUserInfo(function(o) {
            t.setData({
                userInfo: o
            });
        });
    },
    formSubmit: function(e) {
        var t = this, a = e.detail.value.user, s = e.detail.value.pwd, n = o.globalData.userInfo.openid || "";
        console.log(t), console.log(n), a && s && n ? wx.request({
            url: "https://open.flames-tech.cn/plugin/customer-api/login",
            method: "POST",
            data: {
                wx_openid: n,
                password: s,
                mobile: a
            },
            header: {
                token: o.globalData.token,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                console.log(e);
                var a = 1 == e.data.state ? "success" : "none", s = 1 == e.data.state ? "登录成功" : "账号或密码错误";
                wx.showToast({
                    title: s,
                    icon: a
                }), 1 == e.data.state && (t.data.id ? (console.log("跳转页面sure"), o.surelogin(t.data.id)) : (console.log("跳转页面index"), 
                o.registerpage()));
            }
        }) : wx.showToast({
            title: "账号密码不能为空",
            icon: "none"
        }), console.log("form发生了submit事件，携带数据为：", e.detail.value);
    }
});