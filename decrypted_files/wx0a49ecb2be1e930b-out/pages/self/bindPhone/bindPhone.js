var a = "", t = getApp(), e = t.globalData.projectInfo;

Page({
    data: {
        valueCode: "",
        valuePhone: "",
        counter: -1
    },
    onLoad: function(a) {
        e = t.globalData.projectInfo;
    },
    phoneInput: function(a) {
        this.setData({
            valuePhone: a.detail.value
        });
    },
    codeInput: function(a) {
        this.setData({
            valueCode: a.detail.value
        });
    },
    getSmsCode: function() {
        var a = this;
        a.data.counter > 0 || (a.data.valuePhone.length < 1 ? t.hint("请输入手机号") : wx.request({
            url: t.globalData.comUrl + "member_getSMSCaptcha2.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                flag: 1,
                phoneNumber: a.data.valuePhone
            },
            success: function(e) {
                var o = t.getJsonData(e.data);
                1 == o.status ? (console.log(o.SMSCaptcha), wx.showToast({
                    title: "获取成功",
                    icon: "success",
                    duration: 1500,
                    mask: !0
                }), a.startTimer()) : t.hint("获取失败");
            }
        }));
    },
    startTimer: function() {
        var t = this;
        t.setData({
            counter: 60
        }), a = setInterval(function() {
            t.data.counter < 0 ? clearInterval(a) : t.setData({
                counter: t.data.counter - 1
            });
        }, 1e3);
    },
    doBinding: function() {
        var a = this;
        if (11 == a.data.valuePhone.length) if (a.data.valueCode.length < 4 || a.data.valueCode.length > 6) t.hint("请输入正确的验证码"); else {
            var e = t.getMemberId();
            wx.request({
                url: t.globalData.comUrl + "member_memberBindOpenId.action",
                data: {
                    appId: t.globalData.projectInfo.appId,
                    SMSCaptcha: a.data.valueCode,
                    mobilePhone: a.data.valuePhone,
                    memberId: e
                },
                success: function(e) {
                    var o = t.getJsonData(e.data);
                    1 == o.status ? (console.log(o.SMSCaptcha), wx.setStorageSync("mobilePhone" + t.globalData.autoId, a.data.valuePhone), 
                    wx.showToast({
                        title: "绑定成功",
                        icon: "success",
                        duration: 1500,
                        mask: !0
                    }), setTimeout(function() {
                        wx.navigateBack();
                    }, 1500)) : t.hint("绑定失败:" + o.reason);
                }
            });
        } else t.hint("请输入正确的手机号");
    }
});