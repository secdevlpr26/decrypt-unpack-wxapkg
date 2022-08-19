var e = require("../../resource/js/htmlToWxml.js"), n = (require("../../resource/js/images.js"), 
getApp());

Page(function(e, n, o) {
    return n in e ? Object.defineProperty(e, n, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = o, e;
}({
    data: {},
    onLoad: function(o) {
        wx.setNavigationBarTitle({
            title: "申请认证"
        });
        var t = this;
        t.checkuser({
            doServices: function() {
                var e = wx.getStorageSync("userInfo");
                console.log(e.wxInfo), t.setData({
                    userinfo: e
                });
            }
        }), n.util.request({
            url: "entry/wxapp/getbanner",
            success: function(e) {
                e.data.message.errno || t.setData({
                    banners: e.data.data
                });
            },
            complete: function() {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        });
        var a;
        console.log(wx.getStorageSync("companyinfo")), a = e.html2json(wx.getStorageSync("companyinfo").description), 
        this.setData({
            contact: wx.getStorageSync("companyinfo"),
            companyinfo: a
        });
    },
    goMap: function(e) {
        wx.openLocation({
            latitude: parseFloat(wx.getStorageSync("companyinfo").lat),
            longitude: parseFloat(wx.getStorageSync("companyinfo").lng),
            scale: 18,
            name: wx.getStorageSync("companyinfo").name,
            address: wx.getStorageSync("companyinfo").address
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.showNavigationBarLoading(), this.onLoad();
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    bindSave: function(e) {
        console.log(e.detail.formId);
        var o = e.detail.value.name, t = e.detail.value.tel, a = e.detail.value.companyname;
        if ("" != o) if ("11" == t.length) if (/^1[345789]\d{9}$/.test(t)) if ("" != t) if ("" != a) {
            var s = wx.getStorageSync("userInfo");
            n.util.request({
                url: "entry/wxapp/savemessage",
                data: {
                    sessionid: s.sessionid,
                    uid: s.memberInfo.uid,
                    name: o,
                    tel: t,
                    companyname: a
                },
                success: function(e) {
                    if (0 != e.data.errno) return wx.hideLoading(), void wx.showModal({
                        title: "失败",
                        content: e.data.data.msg,
                        showCancel: !1
                    });
                    wx.showToast({
                        title: e.data.data.msg,
                        icon: "success",
                        duration: 2e3
                    });
                }
            });
        } else wx.showModal({
            title: "提示",
            content: "请填写备注",
            showCancel: !1
        }); else wx.showModal({
            title: "提示",
            content: "请填写手机号码",
            showCancel: !1
        }); else wx.showModal({
            title: "提示",
            content: "请填写正确手机号码",
            showCancel: !1
        }); else wx.showModal({
            title: "提示",
            content: "请填写11位手机号码",
            showCancel: !1
        }); else wx.showModal({
            title: "提示",
            content: "请填写联系人姓名",
            showCancel: !1
        });
    },
    checkuser: function(e) {
        var o = this, e = e, t = wx.getStorageSync("userInfo");
        return t ? t.memberInfo.uid ? void n.util.request({
            url: "entry/wxapp/checkuserinfo",
            data: {
                sessionid: t.sessionid,
                uid: t.memberInfo.uid
            },
            success: function(n) {
                0 == n.data.data.error ? (console.log(e), e.doServices()) : 2 == n.data.data.error && e.doServices();
            }
        }) : (console.log("tmddddsssssqqqqs1111"), n.util.getUserInfo(function(e) {
            o.setData({
                userinfo: e
            });
        }), !1) : (console.log("tmddddssssss222222"), n.util.getUserInfo(function(e) {
            o.setData({
                userinfo: e
            });
        }), !1);
    }
}, "onShareAppMessage", function() {
    return {
        title: "申请入驻" + wx.getStorageSync("companyname").name,
        path: "/wurui_house/pages/message/index"
    };
}));