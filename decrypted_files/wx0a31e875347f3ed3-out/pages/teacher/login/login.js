var e = require("../../../utils/api.js").adminLogin, t = require("../../../utils/api.js").teacherLogin;

Page({
    data: {
        username: "",
        password: "",
        btnCanClick: !0,
        isOutsideTeacher: !0
    },
    onLoad: function(e) {},
    hanleUsername: function(e) {
        var t = e.detail.value;
        this.setData({
            username: t
        });
    },
    handlePassword: function(e) {
        var t = e.detail.value;
        this.setData({
            password: t
        });
    },
    teacherLogin: function() {
        var a = this, n = this.data, o = n.username, i = n.password;
        o ? i ? this.data.btnCanClick ? (this.data.btnCanClick = !1, 1 == this.data.isOutsideTeacher ? t({
            name: o,
            password: i
        }).then(function(e) {
            if (0 === e.code && e.data.access_token) {
                wx.setStorage({
                    key: "xToken",
                    data: e.data.access_token
                }), wx.setStorage({
                    key: "teacherName",
                    data: e.data.name
                }), wx.setStorage({
                    key: "teacher_id",
                    data: e.data.id
                }), wx.setStorageSync("teacher_outside", a.data.isOutsideTeacher ? 0 : 1);
                var t = Date.parse(new Date());
                t /= 1e3, wx.setStorage({
                    key: "xToken_time",
                    data: t
                }), a.jumpToComment();
            } else a.data.btnCanClick = !0;
        }, function(e) {
            a.data.btnCanClick = !0;
        }) : e({
            name: o,
            password: i
        }).then(function(e) {
            if (0 === e.code && e.data.xToken) {
                wx.setStorage({
                    key: "xToken",
                    data: e.data.xToken
                }), wx.setStorageSync("teacher_outside", a.data.isOutsideTeacher ? 0 : 1);
                var t = Date.parse(new Date());
                t /= 1e3, wx.setStorage({
                    key: "xToken_time",
                    data: t
                }), a.jumpToComment();
            } else a.data.btnCanClick = !0;
        }, function(e) {
            a.data.btnCanClick = !0;
        })) : wx.showToast({
            title: "您点击的太频繁",
            icon: "none"
        }) : wx.showToast({
            title: "请填写密码",
            icon: "none"
        }) : wx.showToast({
            title: "请填写用户名",
            icon: "none"
        });
    },
    jumpToComment: function() {
        var e = parseInt(wx.getStorageSync("teacher_outside")), t = this;
        console.log("teacher_outside:" + e), e <= 0 ? wx.redirectTo({
            url: "../outsourcing/outsourcing",
            complete: function() {
                t.data.btnCanClick = !0;
            }
        }) : wx.redirectTo({
            url: "../student/student",
            complete: function() {
                t.data.btnCanClick = !0;
            }
        });
    },
    switchChanged: function(e) {
        this.setData({
            isOutsideTeacher: !e.detail.value
        });
    },
    onReady: function() {
        var e = this, t = Date.parse(new Date());
        t /= 1e3;
        var a = wx.getStorageSync("teacherName").toString(), n = wx.getStorageSync("teacher_id").toString(), o = wx.getStorageSync("xToken").toString();
        t - parseInt(wx.getStorageSync("xToken_time")) <= 172800 && null != o && o.length > 7 && null != n && n.length > 0 && null != a && a.length > 0 && (wx.showLoading({
            title: "正在登录..."
        }), setTimeout(function() {
            e.jumpToComment(), wx.hideLoading();
        }, 150));
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        try {
            wx.clearStorageSync();
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            wx.showToast({
                title: "刷新失败",
                icon: "none"
            });
        }
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});