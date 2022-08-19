var t = getApp(), i = require("../../utils/utils.js"), e = (require("../../utils/api/cgi.js"), 
require("../../utils/api/cart.js")), a = require("../../utils/api/product.js");

Page({
    data: {
        feeTxt: "",
        isInEdit: 0,
        isCheckedAll: 0,
        checkedNum: 0,
        totalPrice: 0,
        totalPriceTxt: "",
        list: [],
        enabledList: [],
        disabledList: []
    },
    onLoad: function(t) {},
    onShow: function() {
        var t = this;
        this.initList(e.getLocalCart()), e.getRemoteCart(function(i) {
            console.log("CartAPI.getRemoteCart:", i);
            var e = i.product || [], a = [], r = !0, n = !1, o = void 0;
            try {
                for (var l, u = e[Symbol.iterator](); !(r = (l = u.next()).done); r = !0) {
                    var s = l.value;
                    s.sku = [], s.sku_id_info && (s.sku = s.sku_id_info.split(";").sort());
                    var d = !0, c = !1, h = void 0;
                    try {
                        for (var y, f = t.data.list[Symbol.iterator](); !(d = (y = f.next()).done); d = !0) {
                            var b = y.value;
                            if (b.product.product_id == s.product.product_id && b.sku.join(";") == s.sku.join(";")) {
                                s.checked = b.checked;
                                break;
                            }
                        }
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        c = !0, h = t;
                    } finally {
                        try {
                            !d && f.return && f.return();
                        } finally {
                            if (c) throw h;
                        }
                    }
                    var p = {
                        product: s.product,
                        sku: s.sku,
                        buyCount: 1 * s.buy_count,
                        editBuyCount: 1 * s.buy_count,
                        checked: s.checked || 0,
                        disabled: s.disabled || 0
                    }, v = !0, g = !1, m = void 0;
                    try {
                        for (var C, _ = p.product.available_sku_list[Symbol.iterator](); !(v = (C = _.next()).done); v = !0) {
                            var k = C.value;
                            p.sku.sort().join(";") == k.id_info.split(";").sort().join(";") && (p.price = k.price, 
                            p.skuImg = k.icon_url);
                        }
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        g = !0, m = t;
                    } finally {
                        try {
                            !v && _.return && _.return();
                        } finally {
                            if (g) throw m;
                        }
                    }
                    a.push(p);
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                n = !0, o = t;
            } finally {
                try {
                    !r && u.return && u.return();
                } finally {
                    if (n) throw o;
                }
            }
            t.initList(a);
        }, function(t) {
            console.debug("加载购物车fail", t);
        }, function() {
            console.debug("加载购物车error");
        }, function() {});
    },
    initList: function(t) {
        console.log("initList", t);
        for (var i = "", e = [], r = [], n = 0; n < t.length; n++) {
            var o = t[n];
            o.idx = n, o.attrs = [];
            var l = !0, u = !1, s = void 0;
            try {
                for (var d, c = o.sku[Symbol.iterator](); !(l = (d = c.next()).done); l = !0) {
                    var h = d.value;
                    if (h) {
                        var y = h.split(":")[1].replace("$", ""), f = !1, b = !0, p = !1, v = void 0;
                        try {
                            for (var g, m = o.product.base_attr.sku_table[Symbol.iterator](); !(b = (g = m.next()).done); b = !0) {
                                var C = g.value, _ = !0, k = !1, L = void 0;
                                try {
                                    for (var x, w = C.value_list[Symbol.iterator](); !(_ = (x = w.next()).done); _ = !0) {
                                        var B = x.value;
                                        if (B.id == y) {
                                            o.attrs.push(B.name), f = !0;
                                            break;
                                        }
                                    }
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    k = !0, L = t;
                                } finally {
                                    try {
                                        !_ && w.return && w.return();
                                    } finally {
                                        if (k) throw L;
                                    }
                                }
                            }
                        } catch (t) {
                            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                            p = !0, v = t;
                        } finally {
                            try {
                                !b && m.return && m.return();
                            } finally {
                                if (p) throw v;
                            }
                        }
                        f || o.attrs.push(y);
                    }
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                u = !0, s = t;
            } finally {
                try {
                    !l && c.return && c.return();
                } finally {
                    if (u) throw s;
                }
            }
            o.editChecked = 1, o.priceTxt = o.price / 100, o.editBuyCount = o.buyCount, o.canChangeQuantityUp = o.editBuyCount == o.product.left_buy_quantity || o.editBuyCount == o.product.base_attr.buy_limit ? 0 : 1, 
            o.canChangeQuantityDown = o.editBuyCount <= 1 ? 0 : 1, i = a.getFeeTxt(o.product.base_attr.fee_type), 
            o.disabled ? r.push(o) : e.push(o);
        }
        this.setData({
            feeTxt: i,
            list: t,
            enabledList: e,
            disabledList: r
        }), console.log("list:", this.data.list), this.triggerCheckedItems();
    },
    changeCheckAll: function(t) {
        var i = 0;
        t.detail.value.length > 0 && "all" == t.detail.value[0] && (i = 1);
        var e = !0, a = !1, r = void 0;
        try {
            for (var n, o = this.data.enabledList[Symbol.iterator](); !(e = (n = o.next()).done); e = !0) {
                var l = n.value;
                this.data.isInEdit ? l.editChecked = i : l.checked = i, this.data.list[l.idx] = l;
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            a = !0, r = t;
        } finally {
            try {
                !e && o.return && o.return();
            } finally {
                if (a) throw r;
            }
        }
        this.setData({
            isCheckedAll: i,
            list: this.data.list,
            enabledList: this.data.enabledList
        }), this.triggerCheckedItems();
    },
    changeCheck: function(t) {
        for (var i = t.detail.value, e = this.data.enabledList, a = 0; a < e.length; a++) {
            var r = i.indexOf(a + "") > -1 ? 1 : 0;
            this.data.isInEdit ? e[a].editChecked = r : e[a].checked = r, this.data.list[e[a].idx] = e[a];
        }
        this.setData({
            list: this.data.list,
            enabledList: e
        }), this.triggerCheckedItems();
    },
    tapProduct: function(t) {
        var i = t.currentTarget.dataset.pid, e = {}, a = !0, r = !1, n = void 0;
        try {
            for (var o, l = this.data.list[Symbol.iterator](); !(a = (o = l.next()).done); a = !0) {
                var u = o.value;
                if (u.pid == i) {
                    e = u;
                    break;
                }
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            r = !0, n = t;
        } finally {
            try {
                !a && l.return && l.return();
            } finally {
                if (r) throw n;
            }
        }
        if (this.data.isInEdit) ; else {
            if (1 == e.disabled) return;
            wx.navigateTo({
                url: "/pages/product/detail/detail?pid=" + i
            });
        }
    },
    tapBtnOpenEdit: function() {
        this.setData({
            isInEdit: 1
        }), this.triggerCheckedItems();
    },
    tapBtnEndEdit: function() {
        var t = this, a = [], r = !0, n = !1, o = void 0;
        try {
            for (var l, u = this.data.enabledList[Symbol.iterator](); !(r = (l = u.next()).done); r = !0) {
                var s = l.value;
                s.editBuyCount != s.buyCount && (s.buyCount = s.editBuyCount, a.push(s));
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            n = !0, o = t;
        } finally {
            try {
                !r && u.return && u.return();
            } finally {
                if (n) throw o;
            }
        }
        console.log("editList", a), 0 == a.length ? (this.setData({
            isInEdit: 0
        }), this.triggerCheckedItems()) : (i.loading(!0), e.updateBatchCart(a, function(i) {
            console.log("updateBatchCart suc:", i), t.setData({
                isInEdit: 0
            });
            var a = e.getLocalCart();
            console.log("localList:", a), t.initList(a);
        }, function(t) {
            i.alert("更新失败，请重试。"), console.log("updateBatchCart fail", t);
        }, function() {
            i.alert("网络错误，请重试。"), console.log("updateBatchCart error");
        }, function() {
            i.loading(!1);
        }));
    },
    tapBtnDeleteChecked: function() {
        var t = this;
        wx.showModal({
            title: "提示",
            content: "确定删除选中的商品吗？",
            showCancel: !0,
            cancelText: "取消",
            confirmText: "确定",
            success: function(a) {
                if (console.log(a), a.confirm) {
                    var r = [], n = [], o = !0, l = !1, u = void 0;
                    try {
                        for (var s, d = t.data.enabledList[Symbol.iterator](); !(o = (s = d.next()).done); o = !0) {
                            var c = s.value;
                            c.editChecked ? n.push(c) : r.push(c);
                        }
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        l = !0, u = t;
                    } finally {
                        try {
                            !o && d.return && d.return();
                        } finally {
                            if (l) throw u;
                        }
                    }
                    n.length > 0 && (i.loading(!0), e.removeFromCart(n, function(i) {
                        t.setData({
                            isInEdit: 0
                        }), t.initList(r);
                    }, function(t) {
                        i.alert("删除失败，请重试。"), console.log("removeFromCart fail:", t);
                    }, function() {
                        i.alert("网络错误，请重试。"), console.log("removeFromCart error:");
                    }, function() {
                        i.loading(!1);
                    }));
                }
            }
        });
    },
    tapBtnDeleteItem: function(t) {
        console.log(t);
        var i = this, a = t.currentTarget.dataset.type, r = 1 * t.currentTarget.dataset.idx;
        wx.showModal({
            title: "提示",
            content: "确定删除该商品吗？",
            showCancel: !0,
            cancelText: "取消",
            confirmText: "确定",
            success: function(t) {
                if (t.confirm) {
                    var n = null;
                    "enabled" == a ? (n = i.data.enabledList[r], i.data.enabledList.splice(r, 1)) : (n = i.data.disabledList[r], 
                    i.data.disabledList.splice(r, 1)), console.log(n), i.data.list.splice(n.idx, 1), 
                    e.removeFromCart([ n ]), i.initList(i.data.list);
                }
            }
        });
    },
    tapChangeQuantity: function(t) {
        var i = 1 * t.currentTarget.dataset.idx, e = 1 * t.currentTarget.dataset.delta, a = this.data.enabledList[i], r = a.editBuyCount + e;
        r < 1 && (r = 1), a.product.base_attr.buy_limit > 0 && (r = Math.min(r, a.product.base_attr.buy_limit)), 
        a.product.left_buy_quantity > 0 && (r = Math.min(r, a.product.left_buy_quantity)), 
        a.editBuyCount = r, a.canChangeQuantityUp = r == a.product.left_buy_quantity || r == a.product.base_attr.buy_limit ? 0 : 1, 
        a.canChangeQuantityDown = r <= 1 ? 0 : 1, this.data.list[a.idx].editBuyCount = r, 
        this.setData({
            list: this.data.list,
            enabledList: this.data.enabledList
        });
    },
    inputChangeQuantity: function(t) {
        var i = 1 * t.currentTarget.dataset.idx, e = 1 * t.detail.value, a = this.data.enabledList[i];
        e < 1 && (e = 1), a.product.base_attr.buy_limit > 0 && (e = Math.min(e, a.product.base_attr.buy_limit)), 
        a.product.left_buy_quantity > 0 && (e = Math.min(e, a.product.left_buy_quantity)), 
        a.editBuyCount = e, a.canChangeQuantityUp = e == a.product.left_buy_quantity || e == a.product.base_attr.buy_limit ? 0 : 1, 
        a.canChangeQuantityDown = e <= 1 ? 0 : 1, this.data.list[a.idx].editBuyCount = 0, 
        this.setData({
            list: this.data.list,
            enabledList: this.data.enabledList
        }), this.setData({
            list: this.data.list,
            enabledList: this.data.enabledList
        });
    },
    tapBtnBuy: function() {
        0 != this.data.checkedNum && this.preSubmit();
    },
    triggerCheckedItems: function() {
        var t = 0, i = 0, a = !0, r = !1, n = void 0;
        try {
            for (var o, l = this.data.enabledList[Symbol.iterator](); !(a = (o = l.next()).done); a = !0) {
                var u = o.value;
                this.data.isInEdit ? u.editChecked && t++ : u.checked && (t++, i += u.price * u.buyCount);
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            r = !0, n = t;
        } finally {
            try {
                !a && l.return && l.return();
            } finally {
                if (r) throw n;
            }
        }
        console.log("checkedNum:", t, "enabledList:", this.data.enabledList.length), e.updateLocalCart(this.data.list), 
        this.setData({
            isCheckedAll: t == this.data.enabledList.length ? 1 : 0,
            checkedNum: t,
            totalPrice: i,
            totalPriceTxt: i / 100
        });
    },
    preSubmit: function() {
        if (0 != this.data.checkedNum && !this.data.isInEdit) {
            i.loading(!0);
            var e = {
                is_cart: 1,
                item_list: []
            };
            t.globalData.preSubmitList = [];
            var r = !0, n = !1, o = void 0;
            try {
                for (var l, u = this.data.enabledList[Symbol.iterator](); !(r = (l = u.next()).done); r = !0) {
                    var s = l.value;
                    s.checked && (e.item_list.push({
                        product_id: s.product.product_id || "",
                        buy_count: 1 * s.buyCount || 1,
                        sku_id_info: s.sku.join(";") || ""
                    }), t.globalData.preSubmitList.push({
                        product: s.product,
                        buyCount: s.buyCount,
                        sku: s.sku,
                        skuImg: s.skuImg || "",
                        price: s.price
                    }));
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                n = !0, o = t;
            } finally {
                try {
                    !r && u.return && u.return();
                } finally {
                    if (n) throw o;
                }
            }
            console.log("preSubmit POST:", e), a.preSubmit(e, function(t) {
                t.lock_id ? wx.navigateTo({
                    url: "/pages/product/buy/buy?lock_id=" + t.lock_id
                }) : i.alert("锁单失败，请重试。");
            }, function(t) {
                wx.navigateTo({
                    url: "/pages/product/buy/buy?lock_id=" + t.lock_id
                });
            }, function() {
                i.alert("网络错误，请重试。");
            }, function() {
                i.loading(!1);
            });
        }
    }
});