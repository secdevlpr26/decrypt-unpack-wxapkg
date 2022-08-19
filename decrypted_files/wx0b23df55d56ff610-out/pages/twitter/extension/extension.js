var t = getApp(), e = require("../../../utils/server"), a = require("../../../utils/server");

Page({
    options: {},
    center: function(t) {
        wx.navigateTo({
            url: "../center/center"
        });
    },
    data: {
        imgBaseURL: t.globalData.imgBaseURL,
        sourceURL: t.globalData.sourceURL,
        animationData: {},
        twitterInfo: {},
        showTwitterGo: !1,
        twitterShow: 0,
        distrib_member_id: null,
        shareFlag: !1,
        is_partner: null,
        partner_status: null,
        share_status: null,
        check_status: !1,
        tip_status: !1,
        qrcode: "",
        disabled: !1,
        reset_status: ""
    },
    onLoad: function(t) {
        var e = getApp().globalData.userInfo;
        this.setData({
            userInfo: e
        });
        var a = this;
        return void wx.getUserInfo({
            success: function(t) {
                console.log("userInfo:" + t), a.setData({
                    user: t.userInfo
                });
            },
            fail: function(t) {
                console.log(t);
            }
        });
    },
    onShow: function() {
        return;
    },
    search: function() {
        var t = this, e = t.data.share_status;
        wx.showLoading({
            title: "加载中"
        }), t.setData({
            disabled: !1
        }), 1 == e ? (a.twitterStatus({}, function(e) {
            if (0 == e.errcode) {
                var a = "";
                e.data.encrypt_member_id && (a = e.data.encrypt_member_id), 1 == t.data.share_status && 1 == e.data.is_partner && 1 == e.data.partner_status ? t.gotoCenter() : t.setData({
                    twitterInfo: e.data,
                    distrib_member_id: a
                }), wx.hideLoading();
            }
        }), t.setData({
            shareFlag: !0
        }), wx.showShareMenu()) : a.twitterStatus({}, function(e) {
            if (0 == e.errcode) {
                var a = "";
                e.data.encrypt_member_id && (a = e.data.encrypt_member_id), t.setData({
                    twitterInfo: e.data,
                    distrib_member_id: a
                }), wx.hideLoading();
            }
        });
    },
    onPullDownRefresh: function() {
        var t = this, e = t.data.share_status;
        wx.showLoading({
            title: "加载中"
        }), 1 == e ? (a.twitterStatus({}, function(e) {
            if (0 == e.errcode) {
                var a, s, r, n = "";
                e.data.encrypt_member_id && (n = e.data.encrypt_member_id), 0 == e.data.partner_status && (a = !1, 
                r = !1), 1 == e.data.partner_status && (a = !0, s = !1, wx.showShareMenu(), wx.showModal({
                    content: "审核成功",
                    showCancel: !1,
                    success: function(t) {}
                })), 3 == e.data.partner_status && (a = !1, s = !1, r = !0, wx.showModal({
                    content: "审核失败，请重新申请",
                    showCancel: !1,
                    success: function(t) {}
                })), t.setData({
                    twitterInfo: e.data,
                    check_status: a,
                    qrcode: e.data.qrcode,
                    tip_status: s,
                    reset_status: r,
                    twitterShow: 0,
                    disabled: !1,
                    distrib_member_id: n
                }), 1 == t.data.share_status && 1 == t.data.twitterInfo.is_partner && 1 == t.data.twitterInfo.partner_status && setTimeout(function() {
                    t.gotoCenter();
                }, 2e3), wx.hideLoading();
            }
        }), wx.showShareMenu()) : a.twitterStatus({}, function(e) {
            if (0 == e.errcode) {
                var a, s, r, n = "";
                e.data.encrypt_member_id && (n = e.data.encrypt_member_id), 0 == e.data.partner_status && (a = !1, 
                r = !1), 1 == e.data.partner_status && (a = !0, s = !1, wx.showShareMenu(), wx.showModal({
                    content: "审核成功",
                    showCancel: !1,
                    success: function(t) {}
                })), 3 == e.data.partner_status && (a = !1, s = !1, r = !0, wx.showModal({
                    content: "审核失败，请重新申请",
                    showCancel: !1,
                    success: function(t) {}
                })), t.setData({
                    twitterInfo: e.data,
                    check_status: a,
                    qrcode: e.data.qrcode,
                    tip_status: s,
                    reset_status: r,
                    twitterShow: 0,
                    disabled: !1,
                    distrib_member_id: n
                }), console.log(t.data.reset_status), wx.hideLoading();
            }
        }), wx.stopPullDownRefresh();
    },
    submit: function(t) {
        var a = this, s = t.detail.value.card, r = t.detail.value.name, n = t.detail.value.mobile, i = {
            name: r,
            mobile: n,
            card: s
        };
        a.setData({
            disabled: !a.data.disabled
        }), a.setData(i);
        var o = getApp().globalData.userInfo.user_id;
        e.getJSON("/Qrcode/distribut?user_id=" + o, i, function(t) {
            if (1 == t.data.status) {
                var e = getApp().globalData.userInfo;
                e.mobile = n, e.is_distribut = 1, e.card = s, e.name = r, e.qrcode = t.data.path, 
                getApp().globalData.userInfo = e, a.setData({
                    showModalShare: !0,
                    showModalStatus: !1,
                    userInfo: e
                });
            }
        });
    },
    closeAlert: function() {
        this.setData({
            showModalShare: !1,
            showTwitterGo: !0,
            twitterShow: 1
        });
    },
    onShareAppMessage: function(t) {
        var e = this;
        return {
            title: "偷偷的告诉你，粉丝也能赚钱哦~",
            path: "/pages/user_center/user_center?user_id=" + getApp().globalData.userInfo.user_id,
            success: function(t) {},
            fail: function(t) {
                e.wetoast.toast({
                    title: "转发失败",
                    duration: 2e3
                });
            }
        };
    },
    bindHideKeyboard: function(t) {
        11 === t.detail.value.length && wx.hideKeyboard();
    },
    gotoCenter: function() {
        1 == this.data.share_status ? wx.redirectTo({
            url: "/pages/twitter/center/center?shareStatus=1"
        }) : wx.redirectTo({
            url: "/pages/twitter/center/center"
        });
    },
    gotoIndex: function() {
        wx.redirectTo({
            url: "/pages/decorate/decorate"
        });
    },
    showModal: function() {
        return void this.setData({
            showModalStatus: !0
        });
    },
    hideModal: function() {
        var t = wx.createAnimation({
            duration: 500,
            timingFunction: "ease-in-out",
            delay: 0
        });
        this.animation = t, t.translateY(884).step(), this.setData({
            animationData: t.export()
        }), setTimeout(function() {
            t.translateY(0).step(), this.setData({
                animationData: t.export(),
                showModalStatus: !1
            });
        }.bind(this), 100);
    },
    registerFun: function() {}
});