var e = getApp(), t = require("../../utils/config.js"), n = "", a = "", o = null;

Page({
    data: {
        lists: [ {
            id: 1,
            grade: "一星级",
            pirce: "19",
            oldPrice: "29",
            discount: "5"
        }, {
            id: 2,
            grade: "二星级",
            pirce: "128",
            oldPrice: "29",
            discount: "5"
        }, {
            id: 3,
            grade: "三星级",
            pirce: "228",
            oldPrice: "29",
            discount: "5"
        }, {
            id: 4,
            grade: "四星级",
            pirce: "328",
            oldPrice: "29",
            discount: "5"
        }, {
            id: 5,
            grade: "五星级",
            pirce: "428",
            oldPrice: "29",
            discount: "5"
        } ],
        selecIndex: 1,
        tabs: [ "普通会员", "趣读会员" ],
        activeIndex: null,
        sliderOffset: 0,
        sliderLeft: 0,
        normalLimit: 0,
        superLimit: 0,
        scrollRight: 0,
        buttonClicked: !1,
        none: !1
    },
    radioChange: function(e) {
        for (var t = this.data.normals, n = 0; n < t.length; n++) t[n].checked = t[n].id == e.detail.value;
        this.setData({
            normals: t
        });
    },
    vipChange: function(e) {
        for (var t = this.data.supers, n = 0; n < t.length; n++) t[n].checked = t[n].id == e.detail.value;
        this.setData({
            supers: t
        });
    },
    selectItem: function(e) {
        var t = e.currentTarget.dataset.index;
        o = t;
        var n = this.data.list[o];
        this.setData({
            itemIfo: n,
            activeIndex: o,
            scrollRight: 200 * t,
            selecIndex: e.currentTarget.id
        });
    },
    checkboxChange: function() {},
    onLoad: function(e) {
        var t = this;
        n = wx.getStorageSync("3rdsession"), a = wx.getStorageSync("schoolId"), wx.getSystemInfo({
            success: function(e) {
                t.setData({
                    sliderLeft: (e.windowWidth / t.data.tabs.length - 96) / 2,
                    sliderOffset: e.windowWidth / t.data.tabs.length * t.data.activeIndex
                });
            }
        }), wx.showLoading({
            title: "加载中....",
            mask: !0
        }), console.log(">>>购买会员了1？>>>");
        var o = wx.getStorageSync("buyMemberInfo");
        console.log(o), console.log(">>>购买会员了？2>>>"), o ? 0 == o.success ? (console.log("进来了1？"), 
        console.log(o), console.log(o.type), t.getMemberData(o.type)) : t.getMemberData(o.type) : (console.log("进来了2？"), 
        console.log(o), t.getMemberData(1));
    },
    getMemberData: function(i) {
        var s = this;
        wx.request({
            url: t.getMemberData,
            data: {
                sessionKey: n,
                scId: a,
                memberFlag: i
            },
            success: function(t) {
                if (console.log("shuju>>>>>>>>"), console.log(t), wx.hideLoading(), 200 == t.data.type) {
                    var n = t.data.date;
                    null == n.list || 0 == n.list.length ? s.setData({
                        none: !0
                    }) : s.setData({
                        none: !1
                    });
                    var a = n.list[o];
                    if (console.log(a), 0 == t.data.content) return wx.redirectTo({
                        url: "../myCenter/bind"
                    }), !1;
                    s.setData({
                        memberFlag: n.memberFlag,
                        showName: n.showName,
                        userhead: n.avatarUrl,
                        type: n.type,
                        memberName: n.memberName,
                        havingBuy: n.havingBuy,
                        startTime: n.startTime,
                        endTime: n.endTime,
                        limit: n.limit,
                        list: n.list,
                        firstVIP: 1,
                        itemIfo: n.list[o]
                    });
                    var i = n.nickName;
                    null != i && "" != i || (i = e.globalData.userName), s.setData({
                        username: i
                    });
                } else wx.showToast({
                    title: t.data.content,
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
    buttonClicked: function(e, t) {
        e.setData({
            buttonClicked: t
        });
    },
    toBuy: function(e) {
        var t = this;
        t.buttonClicked(t, !0);
        var n = e.currentTarget.dataset.index, a = t.data.list[n], o = null;
        if (null == n || void 0 == n) return wx.showToast({
            title: "请选择会员类型",
            icon: "none"
        }), t.buttonClicked(t, !1), !1;
        o = a.id, t.toPay(o);
    },
    toPay: function(e) {
        var o = this;
        wx.request({
            url: t.wxToMemberPay,
            data: {
                sessionKey: n,
                id: e,
                scId: a
            },
            success: function(t) {
                if (console.log("请求支付了？"), console.log(t), 200 == t.data.type) {
                    var n = t.data.content;
                    if (0 == n) return wx.hideLoading(), o.buttonClicked(o, !1), wx.showToast({
                        title: "支付接口调用失败",
                        icon: "none"
                    }), !1;
                    if (1 == n) {
                        wx.hideLoading();
                        var a = t.data.date, i = a.json.data;
                        return wx.removeStorageSync("buyMemberInfo"), wx.setStorageSync("buyMemberInfo", a.checkBuyMember), 
                        console.log(i), console.log(i.timeStamp), console.log(i.nonceStr), console.log(i.package), 
                        console.log(i.paySign), o.wxPay(i, e), !1;
                    }
                    wx.showToast({
                        title: t.data.content,
                        icon: "none"
                    }), wx.removeStorageSync("buyMemberInfo"), wx.setStorageSync("buyMemberInfo", t.data.date), 
                    wx.navigateBack({
                        delta: 1
                    });
                } else wx.showToast({
                    title: t.data.content,
                    icon: "none"
                });
            },
            fail: function(e) {
                o.buttonClicked(o, !1), wx.showToast({
                    title: "支付失败，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    wxPay: function(e, t) {
        var n = this;
        wx.hideLoading(), wx.requestPayment({
            timeStamp: e.timeStamp,
            nonceStr: e.nonceStr,
            package: e.package,
            signType: "MD5",
            paySign: e.paySign,
            success: function(e) {
                wx.navigateBack({
                    delta: 1
                });
            },
            fail: function(e) {
                console.log("失败"), n.buttonClicked(n, !1), wx.showToast({
                    title: "支付失败，请稍后重试",
                    icon: "none"
                });
            },
            complete: function() {}
        });
    },
    tabClick: function(e) {
        var t = this;
        o = e.currentTarget.dataset.index;
        var n = t.data.list;
        t.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.dataset.index,
            itemIfo: n[o]
        }), t.buttonClicked(t, !1);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});