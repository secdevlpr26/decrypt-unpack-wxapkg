function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

getApp();

var e = require("../../utils/config.js"), a = "", r = "";

Page({
    data: {
        cartItems: [],
        noCover: "../../images/no_cover.png",
        imgRootPath: e.imgRootPath,
        none: !1,
        ckBool: !1
    },
    onLoad: function(t) {},
    onShow: function() {
        a = wx.getStorageSync("3rdsession"), r = wx.getStorageSync("schoolId");
        var t = this;
        wx.showLoading({
            title: "加载中.....",
            mask: !0
        }), t.setData({
            ckBool: !1
        }), t.loadCarts();
    },
    imgError: function(e) {
        var a = e.currentTarget.dataset.index;
        if (void 0 != a) {
            var r = "cartItems[" + a + "].pic1";
            this.setData(t({}, r, "no_cover"));
        }
    },
    reduce: function(t) {
        var e = t.currentTarget.dataset.id, a = this.data.cartItems, n = 0, o = !0, c = !1, i = void 0;
        try {
            for (var s, l = a[Symbol.iterator](); !(o = (s = l.next()).done); o = !0) {
                var u = s.value;
                u.id === e && u.num--, u.checked && (n += u.price * u.num);
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            c = !0, i = t;
        } finally {
            try {
                !o && l.return && l.return();
            } finally {
                if (c) throw i;
            }
        }
        this.setData({
            cartItems: a,
            totalCount: n
        }), wx.setStorageSync("cartItems" + r, a);
    },
    add: function(t) {
        var e = t.currentTarget.dataset.id, a = this.data.cartItems, n = 0, o = !0, c = !1, i = void 0;
        try {
            for (var s, l = a[Symbol.iterator](); !(o = (s = l.next()).done); o = !0) {
                var u = s.value;
                u.id === e && (u.num++, u.checked = !0), u.checked && (n += u.price * u.num);
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            c = !0, i = t;
        } finally {
            try {
                !o && l.return && l.return();
            } finally {
                if (c) throw i;
            }
        }
        this.setData({
            cartItems: a,
            totalCount: n
        }), wx.setStorageSync("cartItems" + r, a);
    },
    toOrder: function(t) {
        var e = this.data.cartItems;
        (null == e || e.length <= 0) && wx.showToast({
            title: "购物车空空如也",
            icon: "none"
        });
        for (var a = [], r = 0, n = e.length; r < n; ++r) if (1 == e[r].checked) {
            var o = {
                id: e[r].id,
                num: e[r].num
            };
            a.push(o);
        }
        if (a.length <= 0) return wx.showToast({
            title: "请选择要结算的书籍",
            icon: "none"
        }), !1;
        var c = JSON.stringify(a);
        wx.getStorageSync("buyMemberInfo");
        wx.navigateTo({
            url: "/pages/carts/buybookpay/buy?bookId=" + c + "&type=5&ordersign=2"
        });
    },
    checkAll: function(t) {
        var e = this, a = e.data.cartItems;
        if (a.length <= 0) return !1;
        var r = !e.data.ckBool, n = 0, o = 0;
        e.data.ckBool = r;
        for (var c = 0, i = a.length; c < i; ++c) a[c].checked = r, n += a[c].price * a[c].num;
        0 == r ? (n = 0, o = 0) : (n = n, o = a.length), e.setData({
            cartItems: a,
            totalCount: n,
            submitStatus: o
        });
    },
    checkboxChange: function(t) {
        for (var e = this.data.cartItems, a = t.detail.value, n = 0, o = 0, c = e.length; o < c; ++o) {
            e[o].checked = !1;
            for (var i = 0, s = a.length; i < s; ++i) if (e[o].id == a[i]) {
                e[o].checked = !0, n += e[o].price * e[o].num;
                break;
            }
        }
        this.setData({
            cartItems: e,
            totalCount: n,
            submitStatus: a.length
        }), wx.setStorageSync("cartItems" + r, e);
    },
    del: function() {},
    loadCarts: function() {
        var t = this, e = wx.getStorageSync("cartItems" + r) || [], a = !0, n = !1, o = void 0;
        try {
            for (var c, i = e[Symbol.iterator](); !(a = (c = i.next()).done); a = !0) {
                var s = c.value;
                null == s.num && (s.num = 1, s.checked = !1);
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            n = !0, o = t;
        } finally {
            try {
                !a && i.return && i.return();
            } finally {
                if (n) throw o;
            }
        }
        null != e && e.length > 0 ? t.setData({
            none: !1
        }) : t.setData({
            none: !0
        }), t.setData({
            cartItems: e,
            totalCount: 0
        }), wx.hideLoading(), t.checkOne();
    },
    unCheckAll: function() {
        var t = this, e = t.data.cartItems;
        if (e.length <= 0) return !1;
        for (var a = 0, r = 0, n = e.length; r < n; ++r) e[r].checked = !1;
        a = 0, t.setData({
            cartItems: e,
            totalCount: a,
            ckBool: !1
        });
    },
    delCartsItem: function(t) {
        var e = this;
        e.unCheckAll();
        var a = t.currentTarget.dataset.index, n = wx.getStorageSync("cartItems" + r) || [];
        n.splice(a, 1);
        var o = !0, c = !1, i = void 0;
        try {
            for (var s, l = n[Symbol.iterator](); !(o = (s = l.next()).done); o = !0) s.value.num = 1;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            c = !0, i = t;
        } finally {
            try {
                !o && l.return && l.return();
            } finally {
                if (c) throw i;
            }
        }
        e.setData({
            cartItems: n,
            totalCount: 0
        }), wx.setStorage({
            key: "cartItems" + r,
            data: n,
            success: function(t) {
                wx.showToast({
                    title: "移除成功",
                    icon: "success",
                    durantion: 2e3
                });
            }
        }), null != n && n.length > 0 ? e.setData({
            none: !1
        }) : e.setData({
            none: !0
        });
    },
    checkOne: function() {
        var t = this.data.cartItems, e = 0, a = 0;
        for (e in t) t[e].checked && e++;
        if (e > 0) {
            var r = !0, n = !1, o = void 0;
            try {
                for (var c, i = t[Symbol.iterator](); !(r = (c = i.next()).done); r = !0) {
                    var s = c.value;
                    s.checked && (a += s.price * s.num);
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                n = !0, o = t;
            } finally {
                try {
                    !r && i.return && i.return();
                } finally {
                    if (n) throw o;
                }
            }
            this.setData({
                totalCount: a
            });
        }
    }
});