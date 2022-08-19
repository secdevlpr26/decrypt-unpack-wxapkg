var t, a, e, s = require("../../../utils/server");

Page({
    data: {
        use_money: 0,
        use_point: 0,
        check: [ "true", "" ],
        coupon: [],
        cv: "请选择优惠劵",
        cpos: -1,
        couponCode: ""
    },
    addressSelect: function() {
        wx.navigateTo({
            url: "../../address/select/index"
        });
    },
    bindChange: function(t) {
        var a = t.detail.value;
        this.setData({
            use_money: a
        });
    },
    bindChangeOfcoupon: function(t) {
        var a = t.detail.value;
        this.setData({
            couponCode: a
        });
    },
    bindChangeOfPoint: function(t) {
        var a = t.detail.value;
        this.setData({
            use_point: a
        });
    },
    bindPickerChange: function(t) {
        var a = t.detail.value, e = this.data.coupon[a];
        this.setData({
            cv: e,
            cpos: a
        }), this.useCoupon();
    },
    useCoupon: function() {
        if (-1 != this.data.cpos) {
            var t = this.data.couponList[this.data.cpos].money, a = this.data.totalPrice;
            a.total_fee = a.total_fee - t, a.total_fee < 0 && (a.total_fee = 0), this.setData({
                totalPrice: a
            });
        }
    },
    use: function() {
        var a = getApp().globalData.userInfo.user_money, s = this.data.use_money;
        if (a = parseFloat(a), s = parseFloat(s), a < s) {
            var o = this.data.totalPrice, i = this.data.use_point, i = parseInt(i);
            i -= i % parseInt(e);
            var n = t - i / parseInt(e);
            return o.total_fee = n, this.setData({
                totalPrice: o
            }), this.useCoupon(), this.setData({
                use_money: 0
            }), void wx.showToast({
                title: "请输入小余当前余额",
                duration: 1e3
            });
        }
        var i = this.data.use_point, i = parseInt(i);
        i -= i % parseInt(e);
        var r = (n = t - i / parseInt(e)) - s;
        r < 0 && (r = 0), (o = this.data.totalPrice).total_fee = r, this.setData({
            totalPrice: o
        }), this.useCoupon();
    },
    use_point: function() {
        var s = a, o = this.data.use_point;
        if (o = parseInt(o), o -= o % parseInt(e), parseInt(s) < o) {
            var i = this.data.totalPrice, n = t - this.data.use_money;
            return i.total_fee = n, this.setData({
                totalPrice: i
            }), this.setData({
                use_point: 0
            }), this.useCoupon(), void wx.showToast({
                title: "请输入小余当前积分",
                duration: 1e3
            });
        }
        var r = (n = t - this.data.use_money) - o / parseInt(e);
        r < 0 && (r = 0), (i = this.data.totalPrice).total_fee = r, this.setData({
            totalPrice: i
        }), this.useCoupon();
    },
    onShow: function() {
        var t = getApp(), a = t.globalData.cartIds, e = t.globalData.amount;
        this.setData({
            cartIds: a,
            amount: e
        }), this.getCarts(a);
    },
    initData: function() {
        var t = getApp();
        a = t.globalData.userInfo.pay_points;
        var e = t.globalData.userInfo.user_money;
        this.setData({
            freemoney: e,
            pay_points: a
        });
    },
    formSubmit: function(t) {
        var a = this.data.address.address_id, e = getApp().globalData.userInfo.user_id, o = this.data.use_money, i = this.data.use_point, n = getApp(), r = "true" == this.data.check[0] ? 1 : 2, u = 0;
        -1 != this.data.cpos && (u = this.data.couponList[this.data.cpos].id);
        var d = this.data.couponCode;
        s.getJSON("/Cart/cart3/act/submit_order/user_id/" + e + "/address_id/" + a + "/user_money/" + o + "/pay_points/" + i + "/couponTypeSelect/" + r + "/coupon_id/" + u + "/couponCode/" + d, function(t) {
            if (1 == t.data.status) {
                var a = t.data.result;
                n.globalData.wxdata = t.data.data, n.globalData.order = t.data.order, 1 == t.data.status && (wx.showToast({
                    title: "提交成功",
                    duration: 2e3
                }), setTimeout(function() {
                    1 != t.data.order.pay_status ? wx.navigateTo({
                        url: "../payment/payment?order_id=" + a
                    }) : wx.switchTab({
                        url: "../../member/index/index"
                    });
                }, 2e3));
            } else wx.showToast({
                title: t.data.msg,
                duration: 2e3
            });
        });
    },
    getCarts: function(a) {
        var o = getApp().globalData.userInfo.user_id, i = this, n = getApp();
        s.getJSON("/Cart/cart2/user_id/" + o, function(a) {
            var s = n.globalData.userInfo;
            s.user_money = a.data.result.userInfo.user_money, s.pay_points = a.data.result.userInfo.pay_points, 
            n.globalData.userInfo = s;
            var o = a.data.result.addressList, r = a.data.result.cartList, u = a.data.result.userInfo, d = a.data.result.totalPrice;
            t = d.total_fee, e = a.data.result.points, i.setData({
                address: o,
                cartList: r,
                userInfo: u,
                totalPrice: d
            });
            var c = a.data.result.couponList, p = i.data.coupon;
            for (var l in c) p.push(c[l].name);
            i.setData({
                coupon: p,
                couponList: c
            }), i.initData();
        });
    },
    check1: function() {
        this.setData({
            check: [ "true", "" ]
        });
    },
    check2: function() {
        this.setData({
            check: [ "", "true" ]
        });
    },
    onReady: function() {},
    onHide: function() {},
    onUnload: function() {}
});