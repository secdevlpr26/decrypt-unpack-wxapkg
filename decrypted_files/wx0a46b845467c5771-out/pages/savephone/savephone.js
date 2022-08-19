var e = require("../../utils/util.js"), t = getApp(), a = require("../../config.js");

Page({
    data: {
        verifyText: "获取验证码",
        isSend: !1,
        tel: "",
        dialog: !1,
        verifyCode: "",
        serverUrl: "http://skyforest.static.elab-plus.com/",
        pathName: {},
        templateContentId: "",
        flag: !1,
        projectPhone: "(0574)5568 6666",
        projectId: "",
        sharerImage: "",
        channel: ""
    },
    onLoad: function(e) {
        wx.showLoading({
            title: "正在加载"
        });
    },
    onShow: function() {
        wx.setStorageSync("loadTime", new Date().getTime());
        var o = this, n = {
            ip: t.globalData.ip,
            type: "PV",
            pvId: "P_2cMINA_15",
            pvCurPageName: "querenliudianye",
            pvCurPageParams: "",
            pvLastPageName: getCurrentPages()[getCurrentPages().length - 2] ? getCurrentPages()[getCurrentPages().length - 2].data.despage : "",
            pvLastPageParams: "",
            pvPageLoadTime: new Date().getTime() - wx.getStorageSync("loadTime")
        };
        console.log(n, "埋点*app.globalData.userInfo*", t.globalData.userInfo), e.trackRequest(n, t), 
        wx.request({
            url: e.newUrl() + "elab-marketing-authentication/house/detail",
            method: "POST",
            data: {
                id: a.houseId
            },
            success: function(e) {
                e.data.success && o.setData({
                    projectPhone: e.data.single.tel
                });
            }
        });
    },
    getVerifyCode: function() {
        var a = this;
        a.data.isSend || (/^1\d{10}$/.test(a.data.tel) ? wx.request({
            url: e.newUrl() + "elab-marketing-authentication/vcode/verifyCodeForLeavePhone/send",
            method: "POST",
            data: {
                phoneNumber: a.data.tel
            },
            header: {
                "content-type": "application/json",
                tonken: t.globalData.tonken
            },
            success: function() {
                a.setData({
                    isSend: !0,
                    showAdmit: !0,
                    toView: "empty-box"
                });
                var e = 60, t = setInterval(function() {
                    e > 0 ? (e -= 1, a.setData({
                        verifyText: e + "秒后获取"
                    })) : (a.setData({
                        verifyText: "获取验证码"
                    }), a.setData({
                        isSend: !1
                    }), clearInterval(t));
                }, 1e3);
            },
            fail: function() {
                wx.showToast({
                    title: "网络连接出现问题，请稍后再试！",
                    icon: "none",
                    duration: 2e3
                });
            }
        }) : wx.showToast({
            title: "输入的手机号不合法",
            icon: "none",
            duration: 2e3
        }));
    },
    sendTel: function() {
        var o = this;
        if (!o.data.flag) {
            if (o.setData({
                flag: !0
            }), !/^1\d{10}$/.test(o.data.tel)) return wx.showToast({
                title: "请输入正确的手机号",
                icon: "none",
                duration: 2e3
            }), void o.setData({
                flag: !1
            });
            if (console.log(o.data.verifyCode.length), o.data.verifyCode.length < 1) return wx.showToast({
                title: "验证码不能为空",
                icon: "none",
                duration: 2e3
            }), void o.setData({
                flag: !1
            });
            wx.request({
                url: e.newUrl() + "elab-marketing-authentication/contact/leavephone/miniapp/insert",
                method: "POST",
                data: {
                    houseId: a.houseId,
                    leavePhoneCustomerId: t.globalData.single.id,
                    shareParam: t.globalData.fromChannel,
                    mobile: o.data.tel,
                    code: o.data.verifyCode,
                    source: "3"
                },
                header: {
                    "content-type": "application/json",
                    token: t.globalData.tonken
                },
                success: function(e) {
                    console.log(e, "//////"), e.data.success ? (o.telData(), o.setData({
                        dialog: !0
                    }), setTimeout(function() {
                        o.setData({
                            dialog: !1
                        });
                    }, 2e3)) : (wx.showToast({
                        title: e.data.message,
                        icon: "none",
                        duration: 2e3
                    }), o.setData({
                        flag: !1
                    }));
                },
                fail: function(e) {
                    wx.showToast({
                        title: res.data.message,
                        icon: "none",
                        duration: 2e3
                    }), o.setData({
                        flag: !1
                    });
                }
            });
        }
    },
    telData: function() {
        var a = this, o = getCurrentPages(), n = o[o.length - 1], i = n.route;
        console.log("当前页面链接", n.route), wx.request({
            url: e.url(),
            method: "POST",
            data: e.reformParam(e.savephone, {
                houseid: t.globalData.houseid,
                name: t.globalData.loginid,
                channel: t.globalData.fromChannel,
                mobile: a.data.tel,
                platform: "3",
                refer: i
            }),
            success: function() {
                var a = {
                    type: "CLK",
                    pvPageStayTime: (new Date().getTime() - wx.getStorageSync("loadTime")) / 1e3,
                    clkDesPage: "",
                    clkName: "querenliudian",
                    clkId: "clk_2cmina_44",
                    clkParams: ""
                };
                e.trackRequest(a, t);
            },
            fail: function(e) {}
        });
    },
    userPhone: function(e) {
        console.log(e, "寂静欢喜"), this.setData({
            tel: e.detail.value
        });
    },
    verifyCode: function(e) {
        console.log(e, "yuan"), this.setData({
            verifyCode: e.detail.value
        }), console.log(this.data.verifyCode, "===============");
    },
    goAdviserList: function() {
        wx.navigateTo({
            url: "../counselorList/counselorList"
        });
    },
    onReady: function() {
        wx.hideLoading();
    }
});