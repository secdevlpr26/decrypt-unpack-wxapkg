var t = getApp(), o = require("../../utils/config.js"), e = 0;

Page({
    data: {
        tabs: [ "我的优惠券", "优惠券中心" ],
        activeIndex: 0,
        myCoupon: [],
        money: 0
    },
    tabClick: function(t) {
        this.setData({
            sliderOffset: t.currentTarget.offsetLeft,
            activeIndex: t.currentTarget.dataset.idx
        }), this.data.currentTab != t.currentTarget.dataset.idx && this.setData({
            currentTab: t.currentTarget.dataset.idx
        });
    },
    tobuy: function(t) {
        if (console.log(t), !this.data.money) return !1;
        var o = getCurrentPages(), e = o[o.length - 2];
        console.log("e.currentTarget.dataset.couponNum", t.currentTarget.dataset.couponnum), 
        console.log("e.currentTarget.dataset.couponId", t.currentTarget.dataset.couponid), 
        e.setData({
            coupon: t.currentTarget.dataset.couponnum,
            couponId: t.currentTarget.dataset.couponid
        }), wx.navigateBack();
    },
    onLoad: function(t) {
        console.log("options", t.money), "0" === t.money && this.setData({
            activeIndex: 1
        }), this.setData({
            money: Number(t.money)
        });
    },
    onReady: function() {
        this.showCoupon();
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    showCoupon: function() {
        var e = t.globalData.sessionKey, n = wx.getStorageSync("schoolId"), a = this;
        wx.request({
            url: o.coupon,
            data: {
                sessionKey: e,
                schoolId: n
            },
            success: function(t) {
                wx.hideLoading(), 200 == t.data.type ? a.setData({
                    couponList: t.data.date.couponList,
                    myCoupon: t.data.date.myCoupon
                }) : wx.showToast({
                    title: "系统异常，请稍后重试",
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
    receiveCoupon: function(n) {
        var a = n.currentTarget.dataset.id, s = wx.getStorageSync("schoolId"), c = t.globalData.sessionKey, i = this;
        if (1 == e) return !1;
        console.log("立即领取"), e = 1, wx.request({
            url: o.receiveCoupon,
            data: {
                sessionKey: c,
                schoolId: s,
                couponId: a
            },
            success: function(t) {
                e = 0, 200 == t.data.type ? (i.showCoupon(), wx.showToast({
                    title: "领取成功",
                    icon: "success",
                    duration: 2e3
                })) : (wx.hideLoading(), wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                }));
            },
            fail: function(t) {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    }
});