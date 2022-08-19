var t = getApp(), e = require("../shop/ShopUtil.js"), a = require("../../common.js");

Page({
    pageurl: "",
    url: !1,
    onShareAppMessage: function() {
        return t.shareAppMessage({
            url: this.url,
            title: this.data.productInfo.Name
        });
    },
    onLoad: function(s) {
        var o = this;
        o.url = t.getPageUrl(o, s), t.registerGlobalFunctions(o), a.setPopupFromShare(), 
        e.loadCouponList(!0, function(t) {
            var e = [];
            t.list.forEach(function(t) {
                0 != t.CanGet && e.push(t);
            }), o.setData({
                list: e
            });
        });
    },
    data: {
        buttonClicked: !1,
        scrollHeight: t.windowHeight * t.pixelRatio + 6,
        baseUrl: t.globalData.siteBaseUrl
    },
    M_getCoupon: function(t) {
        var a = this;
        a.setData({
            buttonClicked: !0
        });
        var s = t.currentTarget.dataset.idxitem - 0;
        e.getCoupon(t.currentTarget.dataset.couponid, function() {
            e.loadCouponList(!0, function(e) {
                if (e.success) {
                    for (var o = 0; o < e.list.length; o++) e.list[o].CouponID == t.currentTarget.dataset.couponid && 0 == e.list[o].CanGet && (a.data.list[s].CanGet = 0);
                    a.data.list[s].UserCanGetNum -= 1, a.data.list[s].Available -= 1, a.setData({
                        list: a.data.list
                    }), setTimeout(function() {
                        wx.showToast({
                            title: "领取成功",
                            icon: "success"
                        }), setTimeout(function() {
                            a.setData({
                                buttonClicked: !1
                            });
                        }, 300);
                    }, 500);
                } else a.setData({
                    buttonClicked: !1
                });
            });
        });
    }
});