var n = getApp(), o = require("../../utils/config.js"), t = null, e = "";

Page({
    data: {
        bind_name: "",
        bind_phone: "",
        bind_code: "",
        canSend: !0
    },
    onLoad: function(n) {
        e = wx.getStorageSync("3rdsession");
    },
    onReady: function() {},
    onShow: function() {},
    bindPhoneLogin: function() {
        var t = this;
        console.log(t.data);
        var a = t.data.bind_phone, i = t.data.bind_name, s = t.data.bind_code;
        return null == a || "" == a.trim() ? (wx.showToast({
            title: "请输入手机号",
            icon: "none"
        }), !1) : t.valPhone(a) ? null == i || "" == i.trim() ? (wx.showToast({
            title: "请输入姓名",
            icon: "none"
        }), !1) : null == s || "" == s.trim() ? (wx.showToast({
            title: "请输入验证码",
            icon: "none"
        }), !1) : void wx.request({
            url: o.bindReaderNo,
            data: {
                sessionKey: e,
                name: i,
                code: s,
                phone: a
            },
            success: function(o) {
                200 == o.data.type ? (n.globalData.readerType = 2, n.globalData.phone = a, n.globalData.bind = 2, 
                n.globalData.userName = i, wx.redirectTo({
                    url: "../common/bind"
                })) : wx.showToast({
                    title: o.data.content,
                    icon: "none"
                });
            },
            fail: function(n) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        }) : (wx.showToast({
            title: "请输入正确的手机号",
            icon: "none"
        }), !1);
    },
    sendCode: function(n) {
        var t = this;
        wx.request({
            url: o.sendCode,
            data: {
                phone: n
            },
            success: function(n) {
                return 200 == n.data.type ? (t.setData({
                    canSend: !1
                }), t.countDown(), wx.showToast({
                    title: "发送成功，请等待",
                    icon: "none"
                }), !1) : (wx.showToast({
                    title: n.data.content,
                    icon: "none"
                }), !1);
            },
            fail: function(n) {
                return wx.showToast({
                    title: "无法发送",
                    icon: "none"
                }), !1;
            }
        });
    },
    getCode: function() {
        var n = this, o = n.data.bind_phone;
        return null == o || "" == o ? (wx.showToast({
            title: "请先输入手机号",
            icon: "none"
        }), !1) : n.valPhone(o) ? void n.sendCode(n.data.bind_phone) : (wx.showToast({
            title: "手机号输入有误",
            icon: "none"
        }), !1);
    },
    countDown: function() {
        var n = this, o = 60;
        t = setInterval(function() {
            if (o <= 0) return n.setData({
                canSend: !0
            }), clearInterval(t), !1;
            n.setData({
                sendTime: o
            }), o -= 1;
        }, 1e3);
    },
    valPhone: function(n) {
        return !!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.exec(n);
    },
    bindPhone: function(n) {
        this.setData({
            bind_phone: n.detail.value
        });
    },
    bindName: function(n) {
        this.setData({
            bind_name: n.detail.value
        });
    },
    bindCode: function(n) {
        this.setData({
            bind_code: n.detail.value
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});