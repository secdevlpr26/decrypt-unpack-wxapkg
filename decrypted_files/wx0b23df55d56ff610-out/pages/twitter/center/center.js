var t = getApp(), a = require("../../../utils/server"), e = require("../../../utils/server");

Page({
    options: {},
    data: {
        imgBaseURL: "https://xcx.wrcdn.com",
        sourceURL: "https://s.dodoca.com",
        twitterInfo: {},
        share_status: null
    },
    call: function() {
        wx.makePhoneCall({
            phoneNumber: getApp().globalData.userInfo.mobile1
        });
    },
    onLoad: function(t) {
        var e = getApp().globalData.userInfo, o = this;
        this.setData({
            userInfo: e
        }), a.getJSON("/User/distributCenter", {
            user_id: e.user_id
        }, function(t) {
            o.setData({
                person: t.data.person
            }), o.setData({
                coupons: t.data.coupons
            }), o.setData({
                money: t.data.money
            }), o.setData({
                nmoney: t.data.nmoney
            }), o.setData({
                distribut_money: t.data.distribut_money
            });
        });
    },
    onShow: function() {},
    gotoRadar: function() {
        wx.navigateTo({
            url: "/pages/twitter/chart/chart"
        });
    },
    getTwitterCenter: function() {
        var t = this;
        wx.showLoading({
            title: "加载中"
        }), e.getTwitterCenter({}, function(a) {
            0 == a.errcode && (t.setData({
                twitterInfo: a.data
            }), wx.hideLoading());
        });
    },
    gotoTwitterOrder: function(t) {
        return void wx.navigateTo({
            url: "../../fenxiao/order"
        });
    },
    gotoTwitterJunior: function() {
        wx.navigateTo({
            url: "../../fenxiao/person"
        });
    },
    gotoMoney: function() {
        t.isOverPage(function() {
            wx.navigateTo({
                url: "/pages/twitter/moneylist/list"
            });
        });
    },
    gotoCode: function() {
        wx.navigateBack({});
    },
    gotoActList: function() {
        t.isOverPage(function() {
            wx.navigateTo({
                url: "/pages/twitter/active/list/list"
            });
        });
    },
    gotoIndex: function() {
        wx.redirectTo({
            url: "/pages/decorate/decorate"
        });
    },
    gotoClue: function() {
        wx.navigateTo({
            url: "/pages/twitter/clue/list/list"
        });
    },
    gotoMsg: function() {
        var a = this.data.twitterInfo;
        t.isOverPage(function() {
            wx.navigateTo({
                url: "/pages/user/promoteCtr/promoteCtr?id=" + a.id + "&setting=true&spread_name=" + a.spread_name
            });
        });
    },
    gotoCharge: function() {
        wx.navigateTo({
            url: "../../fenxiao/crash"
        });
    },
    registerFun: function() {
        t.linkRegister();
    },
    submit: function(t) {
        var e = this, o = t.detail.value.card, i = t.detail.value.name, n = t.detail.value.mobile, r = {
            name: i,
            mobile: n,
            card: o
        };
        e.setData({
            disabled: !e.data.disabled
        }), e.setData(r);
        var s = getApp().globalData.userInfo.user_id;
        a.getJSON("/Qrcode/distribut?user_id=" + s, r, function(t) {
            if (1 == t.data.status) {
                var a = getApp().globalData.userInfo;
                a.mobile = n, a.is_distribut = 1, a.card = o, a.name = i, a.qrcode = t.data.path, 
                getApp().globalData.userInfo = a, e.setData({
                    showModalShare: !0,
                    showModalStatus: !1,
                    userInfo: a
                });
            }
        });
    },
    showModal: function() {
        return this.setData({
            showModalStatus: !0
        }), void this.setData({
            disabled: !1
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
    }
});