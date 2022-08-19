var t = require("../../utils/server"), a = getApp();

Page({
    data: {
        carts: [],
        goodsList: [],
        empty: !0,
        minusStatuses: [ "disabled", "disabled", "normal", "normal", "disabled" ],
        selectedAllStatus: !0,
        total: ""
    },
    onLoad: function(t) {
        var a = this;
        wx.getSystemInfo({
            success: function(t) {
                var e = (e = t.windowHeight) - e / 750 * 60;
                a.setData({
                    height: e
                });
            }
        });
    },
    see: function(t) {
        wx.switchTab({
            url: "../category/category"
        });
    },
    bindMinus: function(t) {
        var a = parseInt(t.currentTarget.dataset.index), e = this.data.carts[a].goods_num;
        e > 1 && e--;
        var s = e <= 1 ? "disabled" : "normal", i = this.data.carts;
        i[a].goods_num = e;
        var n = this.data.minusStatuses;
        n[a] = s, this.setData({
            carts: i,
            minusStatuses: n
        }), this.saveNum(i[a].id, e), this.sum();
    },
    bindPlus: function(t) {
        var a = parseInt(t.currentTarget.dataset.index), e = this.data.carts[a].goods_num, s = t.currentTarget.dataset.limitBuy;
        s > e || 0 == s ? e++ : wx.showToast({
            title: "不能超过限购数量",
            icon: "loading",
            duration: 1e3
        });
        var i = e <= 1 ? "disabled" : "normal", n = this.data.carts;
        n[a].goods_num = e;
        var r = this.data.minusStatuses;
        r[a] = i, this.setData({
            carts: n,
            minusStatuses: r
        }), this.saveNum(n[a].id, e), this.sum();
    },
    bindManual: function(t) {
        var a = parseInt(t.currentTarget.dataset.index), e = this.data.carts, s = t.detail.value;
        e[a].goods_num = s, this.setData({
            carts: e
        }), this.saveNum(e[a].id, s), this.sum();
    },
    bindCheckbox: function(t) {
        var a = parseInt(t.currentTarget.dataset.index), e = this.data.carts[a].selected, s = this.data.carts;
        s[a].selected = !e, this.setData({
            carts: s
        }), this.updataSelect(s[a].id, s[a].selected), this.sum();
    },
    bindSelectAll: function() {
        var t = this.data.selectedAllStatus;
        t = !t;
        for (var e = this.data.carts, s = 0; s < e.length; s++) e[s].selected = t;
        this.setData({
            selectedAllStatus: t,
            carts: e
        }), this.sum();
        var i = a.globalData.openid;
        this.updateAllSelect(i, t);
    },
    bindCheckout: function() {
        for (var t = [], a = 0; a < this.data.carts.length; a++) this.data.carts[a].selected && t.push(this.data.carts[a].id);
        t.length <= 0 ? wx.showToast({
            title: "请勾选商品",
            icon: "success",
            duration: 1e3
        }) : (t = t.join(","), wx.navigateTo({
            url: "../../../../order/checkout/checkout?cartIds=" + t + "&amount=" + this.data.total
        }));
    },
    getCarts: function() {
        var e = [], s = this, i = "0";
        i = a.globalData.userInfo.user_id, t.getJSON("/Cart/cartList/session_id/" + a.globalData.openid, {
            user_id: i
        }, function(t) {
            var a = t.data;
            0 != a.length ? s.setData({
                empty: !1
            }) : s.setData({
                empty: !0
            });
            for (var i = !0, n = 0; n < a.length; n++) 1 == a[n].selected ? a[n].selected = !0 : (a[n].selected = !1, 
            i = !1), e[n] = 1;
            console.log(a), s.setData({
                carts: a,
                selectedAllStatus: i,
                minusStatuses: e
            }), s.sum();
        });
    },
    onShow: function() {
        return void this.getCarts();
    },
    sum: function() {
        for (var t = this.data.carts, a = 0, e = 0; e < t.length; e++) t[e].selected && (a += t[e].goods_num * t[e].member_goods_price);
        a = parseInt(100 * a) / 100, this.setData({
            carts: t,
            total: a
        });
    },
    deleteCart: function(a) {
        var e = parseInt(a.currentTarget.dataset.index), s = this.data.carts[e].id, i = this;
        t.getJSON("/Cart/delCart/id/" + s, function(t) {
            i.getCarts();
        });
    },
    saveNum: function(a, e) {
        t.getJSON("/Cart/updateNum/id/" + a + "/num/" + e, function(t) {
            that.getCarts();
        });
    },
    updataSelect: function(a, e) {
        e = e ? 1 : 0, t.getJSON("/Cart/updateSelect/id/" + a + "/selected/" + e, function(t) {});
    },
    updateAllSelect: function(a, e) {
        e = e ? 1 : 0, t.getJSON("/Cart/updateAllSelect/open_id/" + a + "/selected/" + e, function(t) {});
    }
});