var t = "", e = "", a = "", i = "", n = "", s = getApp();

Page({
    data: {
        styleConfig: s.globalData.styleConfig
    },
    phoneInput: function(e) {
        t = e.detail.value;
    },
    emailInput: function(t) {
        e = t.detail.value;
    },
    pwdInput: function(t) {
        a = t.detail.value;
    },
    repwdInput: function(t) {
        i = t.detail.value;
    },
    userInput: function(t) {
        n = t.detail.value;
    },
    register: function() {
        var o = /^1[3|4|5|8|7][0-9]\d{4,8}$/, l = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, r = /^(\w){6,15}$/, u = /^.{1,20}$/;
        if ("" != t) if (o.test(t)) if ("" != e) if (l.test(e)) if ("" != a) if ("" != i) if (r.test(a)) if (a == i) if ("" != n) if (u.test(n)) {
            var c = this;
            wx.request({
                url: s.globalData.comUrl + "tabs_memberRegistration.action",
                data: {
                    appId: s.globalData.projectInfo.appId,
                    mobilePhone: t,
                    surname: n,
                    email: e,
                    password: a
                },
                success: function(t) {
                    var e = s.getJsonData(t.data);
                    console.log(e), "0" == e.status ? c.warn(e.reason) : (wx.showToast({
                        title: "注册成功",
                        icon: "success",
                        duration: 2e3
                    }), wx.setStorageSync("isLogin", !0), wx.setStorageSync("memberId" + s.globalData.autoId, e.memberId), 
                    setTimeout(function() {
                        try {
                            wx.navigateBack({
                                delta: 2
                            });
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            console.log(t), wx.switchTab({
                                url: "/pages/index/index"
                            });
                        }
                    }, 2e3));
                },
                fail: function(t) {
                    s.hint();
                }
            });
        } else this.warn("用户名不能超过20个字符"); else this.warn("请输入用户名"); else this.warn("两次输入密码不一致"); else this.warn("密码需由6-15个字母、数字组成"); else this.warn("请再次输入密码"); else this.warn("请输入密码"); else this.warn("邮箱格式有误"); else this.warn("邮箱不能为空"); else this.warn("请输入正确的手机号码"); else this.warn("手机号不能为空");
    },
    warn: function(t) {
        wx.showToast({
            title: t,
            image: "../../../img/warn.png",
            duration: 2e3
        });
    }
});