var o = require("../../../utils/config.js");

Page({
    data: {
        userName: "",
        password: ""
    },
    onLoad: function(o) {},
    onReady: function() {},
    onShow: function() {},
    formSubmit: function(t) {
        var n = this, a = t.detail.value;
        a.userName.trim() || wx.showToast({
            title: "管理员账号不得为空！",
            icon: "none"
        }), a.password.trim() || wx.showToast({
            title: "管理员密码不得为空！",
            icon: "none"
        }), wx.showLoading({
            title: "登录中..."
        }), wx.request({
            method: "POST",
            url: o.adminLogin + "?userName=" + a.userName + "&password=" + a.password,
            success: function(o) {
                if (console.log("返回参数", o), wx.hideLoading(), 200 == o.data.type) {
                    wx.showToast({
                        title: "登录成功",
                        icon: "success",
                        duration: 1500,
                        mask: !0
                    }), n.setData({
                        userName: "",
                        password: ""
                    });
                    var t = o.data.date.school;
                    setTimeout(function() {
                        wx.navigateTo({
                            url: "../adminPutIn/index?schoolId=" + t
                        });
                    }, 1400);
                } else wx.showToast({
                    title: o.data.content,
                    icon: "none"
                });
            },
            fail: function(o) {
                wx.hideLoading(), wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    cancelLogin: function() {
        wx.navigateBack();
    }
});