var t = getApp(), e = require("../../utils/config.js"), a = "", n = "", o = "", s = "";

Page({
    data: {
        tabs: [ "会员卡模式", "会员卡模式", "会员卡模式" ],
        currentTab: 0,
        integral: 100,
        lists: [],
        selecIndex: 0,
        activeIndex: null,
        sliderOffset: 0,
        normalLimit: 0,
        superLimit: 0,
        scrollRight: 0,
        vipIndex: 0,
        modelIndex: 0,
        typeIndex: 0,
        buttonClicked: !1,
        none: !1
    },
    radioChange: function(t) {
        for (var e = this.data.normals, a = 0; a < e.length; a++) e[a].checked = e[a].id == t.detail.value;
        this.setData({
            normals: e
        });
    },
    vipChange: function(t) {
        for (var e = this.data.supers, a = 0; a < e.length; a++) e[a].checked = e[a].id == t.detail.value;
        this.setData({
            supers: e
        });
    },
    selecetLevel: function(t) {
        var e = t.currentTarget.dataset.select;
        this.setData({
            selecIndex: e,
            typeIndex: 0
        }), this.getrightsIdStr(), this.controlButton(o);
    },
    selecetType: function(t) {
        var e = t.currentTarget.dataset.select;
        this.setData({
            typeIndex: e
        }), console.log(this.data.typeIndex);
    },
    checkboxChange: function() {},
    onLoad: function(t) {
        var e = this;
        a = wx.getStorageSync("3rdsession"), n = wx.getStorageSync("schoolId"), wx.showLoading({
            title: "加载中....",
            mask: !0
        }), console.log(">>>购买会员了1？>>>");
        var o = wx.getStorageSync("buyMemberInfo");
        console.log(o), o ? (o.success, e.getMemberData(o.type)) : e.getMemberData(1);
    },
    getMemberData: function(o) {
        var s = this;
        wx.request({
            url: e.getMemberData,
            data: {
                sessionKey: a,
                scId: n,
                memberFlag: o
            },
            success: function(e) {
                if (console.log("shuju>>>>>>>>"), console.log(e), wx.hideLoading(), 200 == e.data.type) {
                    var a = e.data.date;
                    null == a.list || 0 == a.list.length ? s.setData({
                        none: !0
                    }) : s.setData({
                        none: !1
                    });
                    var n = a.list[s.data.selecIndex];
                    if (console.log(n), 0 == e.data.content) return wx.redirectTo({
                        url: "../myCenter/bind"
                    }), !1;
                    var o = [];
                    if (a.card.length > 0) {
                        i = {
                            value: "会员卡模式",
                            index: "1"
                        };
                        o.push(i);
                    }
                    if (a.cashFlag.length > 0) {
                        i = {
                            value: "押金模式",
                            index: "2"
                        };
                        o.push(i);
                    }
                    if (a.free.length > 0) {
                        var i = {
                            value: "读者卡模式",
                            index: "0"
                        };
                        o.push(i);
                    }
                    0 == o[0].index ? s.setData({
                        list: a.free
                    }) : 1 == o[0].index ? s.setData({
                        list: a.card
                    }) : 2 == o[0].index && s.setData({
                        list: a.cashFlag
                    }), s.setData({
                        tabs: o
                    }), s.setData({
                        memberFlag: o[0].index,
                        showName: a.showName,
                        userhead: a.avatarUrl,
                        type: a.type,
                        memberName: a.memberName,
                        havingBuy: a.havingBuy,
                        startTime: a.startTime,
                        endTime: a.endTime,
                        limit: a.limit,
                        card: a.card,
                        cashFlag: a.cashFlag,
                        free: a.free,
                        firstVIP: 1,
                        itemIfo: a.list[s.data.selecIndex]
                    });
                    var d = a.nickName;
                    null != d && "" != d || (d = t.globalData.userName);
                    var c = 750 / s.data.tabs.length * 0 + 750 / s.data.tabs.length / 2 - 40;
                    s.setData({
                        username: d,
                        sliderOffset: c
                    });
                    var l = s.data.tabs[s.data.modelIndex], r = "";
                    1 == l.index ? r = s.data.card[s.data.selecIndex].id : 2 == l.index && (r = s.data.cashFlag[s.data.selecIndex].id), 
                    s.controlButton(r);
                } else wx.showToast({
                    title: e.data.content,
                    icon: "none"
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    buttonClicked: function(t, e) {
        t.setData({
            buttonClicked: e
        });
    },
    toBuy: function(t) {
        var e = this;
        e.buttonClicked(e, !0);
        var a = t.currentTarget.dataset.index, n = (e.data.list[a], null);
        console.log(e.data.memberFlag);
        var o = e.data.tabs[e.data.modelIndex], s = null, i = null;
        return 1 == o.index ? (s = e.data.card[e.data.selecIndex].id, 0 == e.data.typeIndex ? i = 1 : 1 == e.data.typeIndex ? i = 3 : 2 == e.data.typeIndex && (i = 12)) : 2 == o.index && (s = e.data.cashFlag[e.data.selecIndex].id, 
        i = 1188), null == s || void 0 == s ? (wx.showToast({
            title: "请选择会员类型",
            icon: "none"
        }), e.buttonClicked(e, !1), !1) : null == i || void 0 == i ? (wx.showToast({
            title: "请选择会员期限",
            icon: "none"
        }), e.buttonClicked(e, !1), !1) : (n = s, void e.toPay(n, i));
    },
    toPay: function(t, o) {
        var s = this;
        wx.request({
            url: e.wxToMemberPay,
            data: {
                sessionKey: a,
                id: t,
                scId: n,
                mouth: o
            },
            success: function(e) {
                if (console.log("支付参数", e), 200 == e.data.type) {
                    var a = e.data.content;
                    if (0 == a) return wx.hideLoading(), s.buttonClicked(s, !1), wx.showToast({
                        title: "支付接口调用失败",
                        icon: "none"
                    }), !1;
                    if (1 == a) {
                        wx.hideLoading();
                        var n = e.data.date, o = n.json.data;
                        return wx.removeStorageSync("buyMemberInfo"), wx.setStorageSync("buyMemberInfo", n.checkBuyMember), 
                        s.wxPay(o, t), !1;
                    }
                    s.buttonClicked(s, !0), wx.showToast({
                        title: e.data.content,
                        icon: "none"
                    }), wx.removeStorageSync("buyMemberInfo"), wx.setStorageSync("buyMemberInfo", e.data.date), 
                    wx.navigateBack({
                        delta: 1
                    });
                } else s.buttonClicked(s, !1), wx.showToast({
                    title: e.data.content,
                    icon: "none"
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "支付失败，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    wxPay: function(t, e) {
        var a = this;
        wx.hideLoading(), wx.requestPayment({
            timeStamp: t.timeStamp,
            nonceStr: t.nonceStr,
            package: t.package,
            signType: "MD5",
            paySign: t.paySign,
            success: function(t) {
                wx.navigateBack({
                    delta: 1
                });
            },
            fail: function(t) {
                console.log("失败"), a.buttonClicked(a, !1), wx.showToast({
                    title: "支付失败，请稍后重试",
                    icon: "none"
                });
            },
            complete: function() {}
        });
    },
    toBind: function() {
        wx.navigateTo({
            url: "../bind/index"
        });
    },
    tabClick: function(t) {
        var e = this, a = t.currentTarget.id, n = 750 / e.data.tabs.length * a + 750 / e.data.tabs.length / 2 - 40;
        e.setData({
            sliderOffset: n,
            memberFlag: t.currentTarget.dataset.idx,
            selecIndex: 0,
            modelIndex: a
        });
        var o = e.data.list;
        0 == t.currentTarget.dataset.idx ? o = e.data.free : 1 == t.currentTarget.dataset.idx ? o = e.data.card : 2 == t.currentTarget.dataset.idx && (o = e.data.cashFlag), 
        e.setData({
            list: o
        });
        var s = o[0].id;
        e.controlButton(s);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    controlButton: function(t) {
        var o = this;
        wx.request({
            url: e.controlButton,
            data: {
                sessionKey: a,
                id: t,
                scId: n
            },
            success: function(t) {
                console.log(t), 200 == t.data.type && (null != t.data.date.memberInfo ? o.setData({
                    havingPay: !0
                }) : o.setData({
                    havingPay: !1
                }), o.setData({
                    isCash: t.data.date.isCash
                }));
            }
        });
    },
    getrightsIdStr: function() {
        var t = this, e = t.data.tabs[t.data.modelIndex];
        1 == e.index ? (o = t.data.card[t.data.selecIndex].id, 0 == t.data.typeIndex ? s = 1 : 1 == t.data.typeIndex ? s = 3 : 2 == t.data.typeIndex && (s = 12)) : 2 == e.index && (o = t.data.cashFlag[t.data.selecIndex].id, 
        s = 1188);
    },
    refund: function() {
        this.getrightsIdStr(), "" == o && wx.showToast({
            title: "请选择会员类型",
            icon: "none"
        }), wx.request({
            url: e.refund,
            data: {
                sessionKey: a,
                id: o,
                scId: n
            },
            success: function(t) {
                console.log(t), 200 == t.data.type ? (wx.showToast({
                    title: t.data.content,
                    icon: "success"
                }), setTimeout(function() {
                    wx.navigateBack();
                }, 1500)) : wx.showToast({
                    title: t.data.content,
                    icon: "none",
                    duration: 3e3
                });
            }
        });
    }
});