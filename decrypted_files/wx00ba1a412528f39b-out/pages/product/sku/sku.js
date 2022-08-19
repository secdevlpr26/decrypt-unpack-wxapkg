var t = getApp(), a = require("../../../utils/utils.js"), e = require("../../../utils/api/product.js");

Page({
    data: {
        product: {},
        feeTxt: "",
        lowPrice: 0,
        upPrice: 0,
        lowPriceTxt: "",
        upPriceTxt: "",
        selectedQuantity: 1,
        quantityMaxLimit: 0,
        attrMaxQuatity: {},
        selectedAttrs: [],
        selectedGroups: [],
        skuGroup: {},
        canBuy: 0
    },
    onLoad: function(a) {
        this.setData({
            product: t.globalData.product,
            feeTxt: e.getFeeTxt(t.globalData.product.base_attr.fee_type),
            lowPrice: t.globalData.product.base_attr.low_price,
            upPrice: t.globalData.product.base_attr.up_price,
            quantityMaxLimit: t.globalData.product.left_buy_quantity
        }), this.initSku(), this.fixPrice(), console.log("product:", this.data.product), 
        this.triggerCanBuy();
    },
    initSku: function() {
        var a = {}, e = !0, i = !1, r = void 0;
        try {
            for (var o, u = this.data.product.base_attr.sku_table[Symbol.iterator](); !(e = (o = u.next()).done); e = !0) {
                var n = o.value;
                a[n.name] || (a[n.name] = {});
                var l = !0, s = !1, d = void 0;
                try {
                    for (var c, y = n.value_list[Symbol.iterator](); !(l = (c = y.next()).done); l = !0) {
                        var h = c.value;
                        a[n.name][h.name] || (a[n.name][h.name] = {
                            id: n.id + ":" + h.id,
                            group: n.id,
                            attr: h.id,
                            enabled: 1,
                            selected: 0
                        });
                    }
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    s = !0, d = t;
                } finally {
                    try {
                        !l && y.return && y.return();
                    } finally {
                        if (s) throw d;
                    }
                }
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            i = !0, r = t;
        } finally {
            try {
                !e && u.return && u.return();
            } finally {
                if (i) throw r;
            }
        }
        console.log("skuGroup:", a);
        var p = {}, f = !0, v = !1, b = void 0;
        try {
            for (var g, _ = this.data.product.available_sku_list[Symbol.iterator](); !(f = (g = _.next()).done); f = !0) {
                var m = g.value;
                m.id_list = m.id_info.split(";");
                var x = !0, k = !1, P = void 0;
                try {
                    for (var w, M = m.id_list[Symbol.iterator](); !(x = (w = M.next()).done); x = !0) p[h = w.value] || (p[h] = 0), 
                    p[h] = Math.max(p[h], m.quantity);
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    k = !0, P = t;
                } finally {
                    try {
                        !x && M.return && M.return();
                    } finally {
                        if (k) throw P;
                    }
                }
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            v = !0, b = t;
        } finally {
            try {
                !f && _.return && _.return();
            } finally {
                if (v) throw b;
            }
        }
        t.globalData.product = this.data.product, console.log("attrMaxQuatity:", p), this.setData({
            skuGroup: a,
            "product.available_sku_list": this.data.product.available_sku_list
        });
    },
    fixPrice: function() {
        this.setData({
            lowPriceTxt: this.data.lowPrice / 100,
            upPriceTxt: this.data.upPrice / 100
        });
    },
    triggerCanBuy: function() {
        var t = 0;
        0 == this.data.product.base_attr.sku_table.length ? t = 1 : this.data.selectedAttrs.length == this.data.product.base_attr.sku_table.length && (t = 1), 
        this.setData({
            canBuy: t
        });
    },
    updateBySku: function(t) {
        var e = this, i = this.data.skuGroup, r = this.data.product.base_attr.up_price, o = this.data.product.base_attr.low_price, u = 0;
        if (0 == t.length) {
            r = this.data.lowPrice, o = this.data.upPrice;
            for (var n in i) for (var l in i[n]) i[n][l].enabled = 1;
            return this.setData({
                lowPrice: r,
                upPrice: o,
                skuGroup: i
            }), void this.fixPrice();
        }
        var s = a.getArrayCombination(t);
        console.log("combinedAttrs:", s);
        var d = !0, c = !1, y = void 0;
        try {
            for (var h, p = s[Symbol.iterator](); !(d = (h = p.next()).done); d = !0) {
                var f = h.value;
                !function(t, n) {
                    var l = {};
                    console.info("Handle attrs:", t, "isMaxLevel:", n);
                    var s = !0, d = !1, c = void 0;
                    try {
                        for (var y, h = e.data.product.available_sku_list[Symbol.iterator](); !(s = (y = h.next()).done); s = !0) {
                            var p = y.value;
                            if (a.hasArray(p.id_list, t)) {
                                console.log("has `" + p.id_info + "`", "price:" + p.price, "quantity:" + p.quantity), 
                                n && (r = Math.min(r, p.price), o = Math.max(o, p.price)), n && (u = Math.max(u, p.quantity));
                                var f = !0, v = !1, b = void 0;
                                try {
                                    for (var g, _ = p.id_list[Symbol.iterator](); !(f = (g = _.next()).done); f = !0) l[x = g.value] || (l[x] = 0), 
                                    l[x] = Math.max(l[x], p.quantity);
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    v = !0, b = t;
                                } finally {
                                    try {
                                        !f && _.return && _.return();
                                    } finally {
                                        if (v) throw b;
                                    }
                                }
                            }
                        }
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        d = !0, c = t;
                    } finally {
                        try {
                            !s && h.return && h.return();
                        } finally {
                            if (d) throw c;
                        }
                    }
                    console.log("lowPrice:" + r, "upPrice:" + o, "quantityMaxLimit:" + u), console.log("attrMaxQuatity:", JSON.parse(JSON.stringify(l)));
                    for (var m in i) for (var x in i[m]) void 0 != l[i[m][x].id] && (0 === l[i[m][x].id] ? (i[m][x].enabled = 0, 
                    i[m][x].selected = 0) : i[m][x].enabled = 1);
                }(f, f.length == t.length);
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            c = !0, y = t;
        } finally {
            try {
                !d && p.return && p.return();
            } finally {
                if (c) throw y;
            }
        }
        u = Math.min(u, this.data.product.left_buy_quantity), this.data.selectedQuantity = Math.min(this.data.selectedQuantity, u), 
        this.setData({
            lowPrice: r,
            upPrice: o,
            skuGroup: i,
            selectedQuantity: this.data.selectedQuantity,
            quantityMaxLimit: u
        }), this.fixPrice();
    },
    tapBtnSkuAttr: function(t) {
        var a = this.data.skuGroup, e = t.currentTarget.dataset.id, i = t.currentTarget.dataset.group, r = t.currentTarget.dataset.attr;
        if (a[i] && a[i][r]) {
            var o = a[i][r];
            if (0 != o.enabled) {
                console.log("sku:", e, i, r);
                for (var u in a[i]) u != r && (a[i][u].selected = 0);
                o.selected = o.selected ? 0 : 1, this.setData({
                    skuGroup: a
                });
                var n = [], l = [];
                for (var s in a) for (var d in a[s]) 1 == a[s][d].selected && (n.push(a[s][d].id), 
                -1 == l.indexOf(a[s][d].group) && l.push(a[s][d].group));
                console.info("selectedAttrs:", n), this.updateBySku(n), this.setData({
                    selectedAttrs: n,
                    selectedGroups: l
                }), this.triggerCanBuy();
            }
        }
    },
    tapChangeQuantity: function(t) {
        var a = 1 * t.currentTarget.dataset.delta;
        console.log("delta:", a);
        var e = this.data.selectedQuantity + a;
        e = Math.max(1, e), e = Math.min(this.data.quantityMaxLimit, e), this.data.product.base_attr.buy_limit > 0 && (e = Math.min(this.data.product.base_attr.buy_limit, e)), 
        this.setData({
            selectedQuantity: e
        });
    },
    tapBtnBuy: function(t) {
        if (this.data.canBuy) {
            var i = this, r = this.data.selectedAttrs.join(";");
            a.loading(!0);
            var o = {
                product_id: i.data.product.product_id || "",
                buy_count: i.data.selectedQuantity || 1,
                sku_id_info: r
            };
            console.log("preSubmit POST:", o), e.preSubmit(o, function(t) {
                wx.navigateTo({
                    url: "/pages/product/buy/buy?lock_id=" + t.lock_id + "&price=" + i.data.lowPrice + "&num=" + i.data.selectedQuantity + "&sku=" + r
                });
            }, function(t) {
                a.alert("操作失败，请重试。"), console.warn("Fail:", t);
            }, function() {
                a.alert("网络错误，请重试。");
            }, function() {
                a.loading(!1);
            });
        }
    }
});