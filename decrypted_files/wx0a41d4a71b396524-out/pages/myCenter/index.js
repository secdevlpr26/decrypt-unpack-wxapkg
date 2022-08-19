var e = getApp(), o = require("../../utils/config.js"), t = "", a = "", n = null;

Page({
    data: {
        username: "游客",
        userhead: "../../images/personal_head.png",
        recordCount: 0,
        noPayOrderCount: 0,
        caseCount: 0,
        borrowCount: 0,
        preCount: 0,
        alertMsg: 0,
        isadmin: !0,
        modal: !0
    },
    onLoad: function() {
        a = wx.getStorageSync("schoolId"), t = wx.getStorageSync("3rdsession"), this.getUserData();
    },
    bindGetUserInfo: function() {
        var a = this;
        wx.getSetting({
            success: function(n) {
                n.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function(n) {
                        var s = n.userInfo;
                        wx.request({
                            url: o.updateUserInfo,
                            data: {
                                sessionKey: t,
                                userName: s.nickName,
                                nickName: s.nickName,
                                avatarUrl: s.avatarUrl,
                                sex: s.gender,
                                schoolId: e.globalData.schoolId
                            },
                            header: {
                                "content-type": "application/json"
                            },
                            success: function(e) {
                                200 == e.data.type ? a.getUserData() : wx.showToast({
                                    title: "系统异常，更新用户数据失败",
                                    icon: "none"
                                });
                            },
                            fail: function(e) {
                                wx.showToast({
                                    title: "系统异常，请稍后重试",
                                    icon: "none"
                                });
                            }
                        });
                    }
                }) : wx.showToast({
                    title: "获取用户信息失败",
                    icon: "none"
                });
            },
            fail: function(e) {
                console.log("--获取用户信息异常--");
            }
        });
    },
    getUserData: function() {
        var a = this;
        wx.showLoading({
            title: "加载中.....",
            mask: !0
        }), n = a.selectComponent("#dialog"), wx.request({
            url: o.getUserData,
            data: {
                sessionKey: t,
                schoolId: e.globalData.schoolId
            },
            success: function(o) {
                if (console.log("用户数据", o), wx.hideLoading(), 200 == o.data.type) {
                    if (1 != o.data.content) return e.globalData.telPhone = o.data.date, a.setData({
                        telPhone: o.data.date
                    }), !1;
                    var t = o.data.date;
                    e.globalData.telPhone = t.telPhone, a.setData({
                        userhead: t.avatarUrl,
                        username: t.nickName,
                        telPhone: t.telPhone,
                        memberType: t.memberType,
                        readerAccount: t.readerAccount,
                        readerId: t.readerAccount.readerId
                    });
                } else {
                    var s = o.data.date;
                    console.log(s), e.globalData.telPhone = s, a.setData({
                        username: e.globalData.username,
                        telPhone: s
                    }), n.showDialog();
                }
            },
            fail: function(e) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    getAndSetUserInfo: function(t) {
        var a = this;
        wx.getUserProfile({
            desc: "用于完善用户信息",
            success: function(t) {
                n.hideDialog(), console.log("获得用户信息", t);
                var s = t.userInfo;
                wx.request({
                    url: o.updateUserInfo,
                    data: {
                        sessionKey: e.globalData.sessionKey,
                        nickName: s.nickName,
                        avatarUrl: s.avatarUrl,
                        sex: s.gender,
                        schoolId: e.globalData.schoolId
                    },
                    success: function(e) {
                        200 == e.data.type ? a.getUserData() : wx.showToast({
                            title: "系统异常，更新用户数据失败",
                            icon: "none"
                        });
                    },
                    fail: function(e) {
                        wx.showToast({
                            title: "系统异常，请稍后重试",
                            icon: "none"
                        });
                    }
                });
            },
            fail: function(e) {
                n.hideDialog(), wx.showToast({
                    title: "授权失败，部分功能将无法使用",
                    icon: "none",
                    duration: 3e3
                });
            }
        });
    },
    getUserSumData: function() {
        var n = this;
        wx.request({
            url: o.getUserSumData,
            data: {
                sessionKey: t,
                schoolId: e.globalData.schoolId
            },
            success: function(e) {
                if (200 == e.data.type) {
                    var o = e.data.date, t = wx.getStorageSync("signItems" + a) || [], s = 0;
                    null != t && t.length > 0 && (s = t.length), n.setData({
                        recordCount: o.recordCount,
                        caseCount: o.caseCount,
                        borrowCount: o.borrowCount,
                        preCount: o.preCount,
                        signCount: s,
                        noPayOrderCount: o.noPayOrderCount,
                        bookOrderCount: o.bookOrderCount
                    }), o.overCount > 0 && 0 == n.data.alertMsg && (n.data.alertMsg = 1);
                }
            },
            fail: function(e) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    toTel: function(e) {
        wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.phone
        });
    },
    showDialog: function() {
        n.showDialog();
    },
    confirmEvent: function() {
        n.hideDialog();
    },
    onShow: function() {
        var e = this;
        a = wx.getStorageSync("schoolId"), t = wx.getStorageSync("3rdsession"), e.getUserSumData();
    },
    borrowbook: function() {
        var e = this, t = e.data.readerId;
        wx.scanCode({
            success: function(a) {
                console.log("res", a), console.log("获取的书籍码", a.result);
                var n = a.result;
                console.log("bookcode", n), console.log("readerId", t), wx.request({
                    url: o.borrowBook,
                    data: {
                        bookCode: n,
                        readerId: t
                    },
                    success: function(o) {
                        console.log("借书详情", o), 200 === o.data.type ? e.setData({
                            modal: !1,
                            success: !0,
                            modalTitle: "借书成功",
                            modalMsg: "恭喜您，借书成功！"
                        }) : e.setData({
                            modal: !1,
                            success: !1,
                            type: 1,
                            modalTitle: "借书失败",
                            modalErrorMsg: o.data.content
                        });
                    },
                    fail: function() {
                        wx.showToast({
                            title: "系统异常，请稍后重试",
                            icon: "none"
                        });
                    }
                });
            }
        });
    },
    delmodal: function() {
        this.setData({
            modal: !0
        });
    }
});