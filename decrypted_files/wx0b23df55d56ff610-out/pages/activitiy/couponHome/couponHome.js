require("../../../comm/script/config");

var t = require("../../../comm/script/fetch"), a = require("../../../util/util"), e = require("../../../component/message/message.js"), o = getApp(), n = require("../../../utils/server");

Page({
    data: {
        code: "",
        defaultArray: [ [ 5, 6, 3, 4, 5, 7 ], [ 4, 7, 5, 6, 3, 5 ], [ 7, 5, 6, 4, 3, 5 ], [ 6, 3, 5, 4, 7, 5 ], [ 3, 6, 7, 5, 4, 5 ] ],
        callContent: [ "以我点存微光，护你光芒万丈", "为你盛世美颜打CALL", "一如既往，为你疯狂", "春风十里，不如有你", "无可替代，为你存在", "疯狂打电话" ],
        ticketTotalNum: 0,
        integral: 0,
        curItem: 0,
        status: 0,
        wxUserInfo: {},
        hwxUserInfo: {},
        shareManInfo: {},
        shareMode: !1,
        showRule: !1,
        callClickable: !0,
        callerList: [],
        isShow: !1,
        hasCall: !1
    },
    onLoad: function(t) {
        wx.showLoading({
            title: "加载活动中"
        }), wx.getSetting || (wx.hideLoading(), wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法参与活动，请升级到最新微信版本后重试。",
            complete: function() {
                wx.navigateBack();
            }
        }));
        var e = this, n = o.globalData.hwxUserInfo;
        if (!a.isEmpty(t)) {
            if (n && n.UserName == t.phoneNum) return;
            "true" == t.share && e.setData({
                shareMode: !0
            }), e.setData({
                shareManInfo: t
            });
        }
    },
    call_list: function() {
        var t = this;
        void 0 == this.data.shareManInfo.id ? n.getJSON("/User/call_list", {
            user_id: this.data.userInfo1.user_id
        }, function(a) {
            t.setData({
                list: a.data.data
            }), t.setData({
                call: a.data.call
            });
        }) : n.getJSON("/User/call_list", {
            user_id: this.data.shareManInfo.id
        }, function(a) {
            t.setData({
                list: a.data.data
            }), t.setData({
                call: a.data.call
            });
        });
    },
    getAuth: function() {
        var t = this;
        wx.getSetting({
            success: function(a) {
                a.authSetting["scope.userInfo"] ? t.loginAndStore() : wx.authorize({
                    scope: "scope.userInfo",
                    success: function(t) {
                        console.log(t);
                    },
                    fail: function(t) {
                        wx.hideLoading(), wx.showModal({
                            title: "提示",
                            content: "需要先获取您的微信用户信息，才能参加活动，请点击确定，授权我们",
                            success: function(t) {
                                t.confirm ? wx.navigateTo({
                                    url: "/pages/user_center/user_center2"
                                }) : t.cancel && wx.navigateBack();
                            }
                        });
                    }
                });
            }
        });
    },
    loginAndStore: function() {
        var t = this;
        wx.login({
            success: function(e) {
                var o = e.code;
                t.setData({
                    code: o
                }), wx.getUserInfo({
                    success: function(e) {
                        var o = e.userInfo;
                        wx.hideLoading(), t.setData({
                            wxUserInfo: o,
                            isShow: !0
                        }), a.isEmpty(t.data.hwxUserInfo) && !t.data.shareMode && t.loginToast();
                    }
                });
            }
        });
    },
    loginToast: function() {
        return;
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        wx.getUserInfo({
            success: function(a) {
                console.log("userInfo:" + a), t.setData({
                    userInfo: a.userInfo
                });
            },
            fail: t.showPrePage
        });
        var a = getApp(), e = this;
        a.getOpenId(function() {
            var t = getApp().globalData.openid;
            n.getJSON("/User/validateOpenid", {
                openid: t
            }, function(t) {
                200 == t.data.code ? (getApp().globalData.userInfo = t.data.data, e.setData({
                    userInfo1: getApp().globalData.userInfo
                }), e.call_list()) : "400" == t.data.code && (console.log("need register"), a.register1(function() {
                    e.setData({
                        userInfo1: getApp().globalData.userInfo
                    }), e.call_list();
                }));
            });
        }), wx.getSetting || (wx.hideLoading(), wx.showModal({
            title: "提示",
            content: "当前微信版本过低，无法参与活动，请升级到最新微信版本后重试。",
            complete: function() {
                wx.navigateBack();
            }
        })), this.setData({
            hwxUserInfo: o.globalData.hwxUserInfo
        }), this.getActiveUserinfo(), this.getAuth();
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(t) {
        var e = this.data.wxUserInfo, o = this.data.userInfo, n = "";
        a.isEmpty(this.data.hwxUserInfo) || (n = this.data.hwxUserInfo.UserName, this.data.hwxUserInfo.Id);
        var s = "pages/activitiy/couponHome/couponHome?nickName=" + e.nickName + "&avatarUrl=" + e.avatarUrl + "&phoneNum=" + n + "&share=" + !0 + "&id=" + this.data.userInfo1.user_id;
        return a.isEmpty(this.data.shareManInfo) || (this.data.shareManInfo.id, n = this.data.shareManInfo.phoneNum, 
        s = "pages/activitiy/couponHome/couponHome?nickName=" + o.nickName + "&avatarUrl=" + o.avatarUrl + "&phoneNum=" + n + "&share=" + !0 + "&id=" + this.data.userInfo1.user_id), 
        console.log(s), {
            title: "为Ta痴，为Ta狂！为Ta哐哐撞大墙！",
            path: s,
            success: function(t) {},
            fail: function(t) {}
        };
    },
    useNow: function() {
        var t = this;
        0 != this.data.ticketTotalNum ? 1 != this.data.status ? this.immediateUseCoupon() : wx.navigateBack() : e.show.call(t, {
            icon: "tip",
            content: "快去邀请好友吧"
        });
    },
    addIn: function() {
        if (!a.isEmpty(this.data.hwxUserInfo)) return this.setData({
            ticketTotalNum: 0,
            integral: 0,
            curItem: 0,
            status: 0,
            wxUserInfo: {},
            hwxUserInfo: {},
            shareManInfo: {},
            shareMode: !1,
            showRule: !1,
            callClickable: !0,
            callerList: []
        }), void this.onShow();
        this.editBind(), this.setData({
            ticketTotalNum: 0,
            integral: 0,
            curItem: 0,
            status: 0,
            wxUserInfo: {},
            hwxUserInfo: {},
            shareManInfo: {},
            shareMode: !1,
            showRule: !1,
            callClickable: !0,
            callerList: []
        });
    },
    editBind: function() {
        wx.navigateTo({
            url: "../../personal/login/login"
        });
    },
    callBind: function() {
        return void this.makeCall();
    },
    getActiveUserinfo: function() {
        var a = this, e = "", o = "";
        this.data.shareMode && (e = a.data.shareManInfo.phoneNum, o = 1), t.getActiveUserinfo(e, o, function(t) {
            if (console.log(t), 0 != t.length) {
                var e = Number(t.status), o = t.callerList, n = t.ticketTotalNum, s = t.integral, i = 15 * Math.floor(t.ticketTotalNum / 15);
                s < 15 && (i = 0), o.map(function(t, a, e) {
                    t.nickName = decodeURI(t.nickName);
                }), a.setData({
                    status: e,
                    callerList: o,
                    ticketTotalNum: n,
                    curItem: i,
                    integral: s
                });
            }
        }, function(t) {});
    },
    immediateUseCoupon: function() {
        var a = this, o = this.data.hwxUserInfo.Id;
        t.immediateUseCoupon(o, function(t) {
            e.show.call(a, {
                content: "兑换成功",
                icon: "ok"
            }), a.getActiveUserinfo();
        }, function(t) {
            e.show.call(a, {
                icon: "tip",
                content: t
            });
        });
    },
    makeCall: function() {
        var t = this, a = (this.data.shareManInfo.phoneNum, encodeURI(this.data.wxUserInfo.nickName), 
        this.data.wxUserInfo.avatarUrl, this.data.code, Math.round(2 * Math.random()) + 2);
        console.log(a);
        var o = this;
        n.getJSON("/User/call", {
            user_id: this.data.shareManInfo.id,
            money: a,
            cuser_id: this.data.userInfo1.user_id
        }, function(a) {
            e.show.call(t, {
                icon: "ok",
                content: a.data.msg
            }), t.setData({
                shareMode: !1
            }), t.setData({
                shareManInfo: []
            }), "1" == a.data.code && o.onShow();
        });
    },
    toHome: function() {
        wx.switchTab({
            url: "/pages/repair/home/home"
        });
    },
    toTicket: function() {
        wx.navigateTo({
            url: "../../personal/selectTicket/selectTicket?fromInfo=" + !0
        });
    },
    showRule: function() {
        this.setData({
            showRule: !0
        });
    },
    hideRule: function() {
        this.setData({
            showRule: !1
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});