var t = getApp(), a = require("../shop/ShopUtil.js"), e = require("../../common.js");

Page({
    pageurl: "",
    url: !1,
    onShareAppMessage: function() {
        return t.shareAppMessage({
            url: this.url,
            title: this.data.productInfo.Name
        });
    },
    onLoad: function(a) {
        var i = this;
        i.url = t.getPageUrl(i, a), t.registerGlobalFunctions(i), e.setPopupFromShare();
    },
    onShow: function() {
        t.doAfterUserInfoAuth({
            success: this.initData,
            fail: this.initData
        });
    },
    initData: function() {
        var t = this;
        a.loadCouponList(!0, function(a) {
            var e = [];
            a.list.forEach(function(t) {
                0 != t.CanGet && e.push(t);
            }), t.setData({
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
        var e = this;
        e.setData({
            buttonClicked: !0
        });
        var i = t.currentTarget.dataset.idxitem - 0;
        a.getCoupon(t.currentTarget.dataset.couponid, function() {
            a.loadCouponList(!0, function(a) {
                if (a.success) {
                    for (var s = 0; s < a.list.length; s++) a.list[s].CouponID == t.currentTarget.dataset.couponid && 0 == a.list[s].CanGet && (e.data.list[i].CanGet = 0);
                    e.data.list[i].UserCanGetNum -= 1, e.data.list[i].Available -= 1, e.setData({
                        list: e.data.list
                    }), setTimeout(function() {
                        wx.showToast({
                            title: "领取成功",
                            icon: "success"
                        }), setTimeout(function() {
                            e.setData({
                                buttonClicked: !1
                            });
                        }, 300);
                    }, 500);
                } else e.setData({
                    buttonClicked: !1
                });
            });
        });
    }
});