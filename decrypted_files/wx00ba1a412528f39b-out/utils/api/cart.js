function t() {
    return wx.getStorageSync("cartList") || [];
}

function o(t) {
    t = JSON.parse(JSON.stringify(t));
    var o = !0, r = !1, u = void 0;
    try {
        for (var i, n = t[Symbol.iterator](); !(o = (i = n.next()).done); o = !0) i.value.checked = 0;
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        r = !0, u = t;
    } finally {
        try {
            !o && n.return && n.return();
        } finally {
            if (r) throw u;
        }
    }
    wx.setStorageSync("cartList", t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getLocalCart = t, exports.updateLocalCart = o;

getApp();

var r = require("./cgi.js");

exports.getRemoteCart = function(t, o, u, i) {
    r.get({
        url: "/bizmall/cart?action=get",
        hideLoading: !0,
        success: function(o) {
            t && t(o);
        },
        fail: function(t) {
            o && o(t);
        },
        error: function() {
            u && u();
        },
        complete: function() {
            i && i();
        }
    });
}, exports.addToCart = function(o, u, i, n, a) {
    var c = this, e = t();
    o.checked = 0, o.sku.sort();
    for (var d = !1, l = o.sku.join(";"), s = null, p = -1, f = 0; f < e.length; f++) {
        var y = e[f];
        if (y.product.product_id == o.product.product_id && y.sku.join(";") == l) {
            d = !0, s = y, p = f;
            break;
        }
    }
    d || r.post({
        url: "/bizmall/cart?action=add",
        hideLoading: !0,
        data: {
            data: JSON.stringify({
                product_list: [ {
                    product_id: o.product.product_id,
                    sku_id_info: o.sku.join(";"),
                    buy_count: 1 * o.buyCount,
                    disabled: 0,
                    url: ""
                } ]
            })
        },
        success: function(t) {
            e.unshift(o), c.updateLocalCart(e), u && u(t);
        },
        fail: function(t) {
            i && i(t);
        },
        error: function() {
            n && n();
        },
        complete: function() {
            a && a();
        }
    }), d && r.post({
        url: "/bizmall/cart?action=update",
        data: {
            data: JSON.stringify({
                old_product: {
                    product_id: s.product.product_id,
                    sku_id_info: s.sku.join(";")
                },
                product: {
                    product_id: o.product.product_id,
                    sku_id_info: o.sku.join(";"),
                    buy_count: 1 * o.buyCount + 1 * s.buyCount,
                    url: ""
                }
            })
        },
        hideLoading: !0,
        success: function(t) {
            s.buyCount += o.buyCount, s.product = o.product, s.skuImg = o.skuImg, s.checked = 1, 
            s.buyCount = Math.min(s.product.left_buy_quantity, s.buyCount), s.product.base_attr.buy_limit > 0 && (s.buyCount = Math.min(s.product.base_attr.buy_limit, s.buyCount)), 
            e.splice(p, 1), e.unshift(s), c.updateLocalCart(e), u && u(t);
        },
        fail: function(t) {
            i && i(t);
        },
        error: function() {
            n && n();
        },
        complete: function() {
            a && a();
        }
    });
}, exports.updateBatchCart = function(u, i, n, a, c) {
    var e = t(), d = [], l = !0, s = !1, p = void 0;
    try {
        for (var f, y = u[Symbol.iterator](); !(l = (f = y.next()).done); l = !0) {
            var _ = f.value;
            _.sku.sort();
            var b = !0, h = !1, v = void 0;
            try {
                for (var m, k = e[Symbol.iterator](); !(b = (m = k.next()).done); b = !0) {
                    var C = m.value;
                    if (C.product.product_id == _.product.product_id && C.sku.join(";") == _.sku.join(";")) {
                        d.push({
                            old_product: {
                                product_id: C.product.product_id,
                                sku_id_info: C.sku.join(";")
                            },
                            product: {
                                product_id: C.product.product_id,
                                sku_id_info: C.sku.join(";"),
                                buy_count: _.buyCount,
                                url: ""
                            }
                        }), C.checked = _.checked, C.buyCount = _.buyCount, C.editBuyCount = _.buyCount, 
                        C.product.left_buy_quantity > 0 && (C.buyCount = Math.min(C.product.left_buy_quantity, C.buyCount)), 
                        C.product.base_attr.buy_limit > 0 && (C.buyCount = Math.min(C.product.base_attr.buy_limit, C.buyCount)), 
                        console.log("update item:", C);
                        break;
                    }
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                h = !0, v = t;
            } finally {
                try {
                    !b && k.return && k.return();
                } finally {
                    if (h) throw v;
                }
            }
        }
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        s = !0, p = t;
    } finally {
        try {
            !l && y.return && y.return();
        } finally {
            if (s) throw p;
        }
    }
    0 != d.length ? r.post({
        url: "/bizmall/cart?action=update_batch",
        data: {
            data: JSON.stringify({
                product_pair: d
            })
        },
        hideLoading: !0,
        success: function(t) {
            console.log("localList", e), o(e), i && i(t);
        },
        fail: function(t) {
            n && n(t);
        },
        error: function() {
            a && a();
        },
        complete: function() {
            c && c();
        }
    }) : n && n({
        base_resp: {
            ret: -1
        }
    });
}, exports.removeFromCart = function(u, i, n, a, c) {
    var e = {
        product_list: []
    }, d = !0, l = !1, s = void 0;
    try {
        for (var p, f = u[Symbol.iterator](); !(d = (p = f.next()).done); d = !0) {
            var y = p.value;
            e.product_list.push({
                product_id: y.product.product_id,
                sku_id_info: y.sku.join(";")
            });
        }
    } catch (t) {
        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
        l = !0, s = t;
    } finally {
        try {
            !d && f.return && f.return();
        } finally {
            if (l) throw s;
        }
    }
    r.post({
        url: "/bizmall/cart?action=remove",
        data: {
            data: JSON.stringify(e)
        },
        hideLoading: !0,
        success: function(r) {
            var n = t(), a = [], c = !0, e = !1, d = void 0;
            try {
                for (var l, s = u[Symbol.iterator](); !(c = (l = s.next()).done); c = !0) {
                    var p = l.value, f = !0, y = !1, _ = void 0;
                    try {
                        for (var b, h = n[Symbol.iterator](); !(f = (b = h.next()).done); f = !0) {
                            var v = b.value;
                            p.product.product_id == v.product.product_id && p.sku.join(";") == v.sku.join(";") || a.push(v);
                        }
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        y = !0, _ = t;
                    } finally {
                        try {
                            !f && h.return && h.return();
                        } finally {
                            if (y) throw _;
                        }
                    }
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                e = !0, d = t;
            } finally {
                try {
                    !c && s.return && s.return();
                } finally {
                    if (e) throw d;
                }
            }
            o(a), i && i(r);
        },
        fail: function(t) {
            n && n(t);
        },
        error: function() {
            a && a();
        },
        complete: function() {
            c && c();
        }
    });
};