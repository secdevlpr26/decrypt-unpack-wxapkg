function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../common/http")), a = e(require("../../utils/util")), r = require("../../utils/constants.js"), n = getApp();

Page({
    data: function(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a, e;
    }({
        phone: n.user.phone || "未登录",
        url: "",
        isWebView: !1
    }, "url", {
        rechargeUrl: "/wechat/member/card/rechargeList",
        online: "/wechat/member/toOnlineRecharge",
        coupon: "/wechat/coupons/list",
        card: "/wechat/member/card/buyCard",
        order: "/wechat/order/list",
        distributorUrl: "/wechat/mall/toOrderList",
        addressUrl: "/wechat/member/address/list",
        distributorCenter: "/wechat/distribution/center"
    }),
    onLoad: function() {},
    getData: function() {
        var e = this;
        t.default.post("/open/auth/wehcat/minprogram/myCenter", {
            openId: n.user.openid
        }, function(t) {
            e.setData(t.data.data);
        });
    },
    onShow: function() {
        n.user.memberId && n.user.phone ? this.getData() : this.setData({
            isLogin: !0
        }), this.setData({
            phone: n.user.phone || "未登录"
        });
    },
    toLogin: function() {
        n.user.memberId && n.user.phone || this.setData({
            isLogin: !0
        });
    },
    eventLogin: function(e) {
        e.detail.isLogin && (this.getData(), this.setData({
            phone: n.user.phone
        }));
    },
    callPhone: function(e) {
        console.log(e);
        var t = e.currentTarget.dataset.phone;
        t ? wx.makePhoneCall({
            phoneNumber: t
        }) : a.default.showToast("客服热线暂未开通...");
    },
    toPage: function(e) {
        var t = e.currentTarget.dataset.path, a = e.currentTarget.dataset.type || "", n = r.API_URL + encodeURIComponent(t + (-1 == t.indexOf("?") ? "?" : "&") + "type=" + a);
        wx.navigateTo({
            url: "/pages/webpage/webpage?openPage=" + n
        });
    }
});