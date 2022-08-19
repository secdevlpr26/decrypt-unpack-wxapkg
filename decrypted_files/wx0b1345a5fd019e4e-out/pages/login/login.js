var t = getApp(), a = "", e = "", o = "";

Page({
    data: {
        styleConfig: t.globalData.styleConfig
    },
    onLoad: function(a) {
        o = t.globalData.projectInfo, wx.hideToast();
    },
    logintap: function() {
        if ("" != a) if ("" != e) {
            var n = this;
            wx.request({
                url: t.globalData.comUrl + "tabs_memberLogin.action",
                data: {
                    projectId: o.appId,
                    userName: a,
                    password: e
                },
                success: function(a) {
                    var e = t.getJsonData(a.data);
                    wx.setStorageSync("scoreRule" + t.globalData.autoId, e.scoreRule), wx.setStorageSync("memberId" + t.globalData.autoId, e.id), 
                    wx.setStorageSync("merchantId" + t.globalData.autoId, e.merchantId), "0" == e.status ? t.hint("账号或密码不正确") : (n.setData({
                        memberId: e.id,
                        userInfo: e
                    }), wx.navigateBack({
                        delta: 1
                    }));
                },
                fail: function(a) {
                    t.hint();
                }
            });
        } else t.hint("密码不能为空！"); else t.hint("登录账号不能为空！");
    },
    forgetPwd: function() {
        wx.navigateTo({
            url: "forget/forget"
        });
    },
    register: function() {
        wx.navigateTo({
            url: "register/register"
        });
    },
    phoneInput: function(t) {
        a = t.detail.value;
    },
    pwdInput: function(t) {
        e = t.detail.value;
    }
});