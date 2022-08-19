var t = getApp(), a = require("../../../utils/utils.js"), i = require("../../../utils/api/product.js"), r = require("../../../utils/api/cart.js");

Page({
    data: {
        isLoading: 0,
        isError: 0,
        pid: "",
        feeTxt: "",
        product: {},
        cartCount: 0,
        skuTo: "",
        isShowSku: 0,
        lowPrice: 0,
        upPrice: 0,
        lowPriceTxt: "",
        upPriceTxt: "",
        selectedQuantity: 0,
        quantityMaxLimit: 0,
        canChangeQuantityUp: 1,
        canChangeQuantityDown: 1,
        attrMaxQuatity: {},
        selectedAttrs: [],
        selectedGroups: [],
        skuGroup: {},
        skuImg: "",
        canBuy: 0,
        descList: []
    },
    onLoad: function(t) {
        this.setData({
            pid: t.pid || t.scene
        }), this.doLoad();
    },
    onShareAppMessage: function() {
        if (!this.data.isLoading && !this.data.isError && this.data.product.product_id) return {
            title: this.data.product.base_attr.name,
            path: "/pages/product/detail/detail?pid=" + this.data.product.product_id,
            success: function(t) {},
            fail: function(t) {}
        };
    },
    doLoad: function() {
        var t = this, a = this.data.pid;
        t.setData({
            isLoading: 1,
            isError: 0
        }), i.getDetail(a, function(a) {
            console.log("product:", a.product), t.setData({
                isError: 0,
                product: a.product
            }), t.fixData(), t.parseDescHTML(), t.initSku(), t.fixPrice(), t.triggerCanBuy();
        }, function(a) {
            t.setData({
                isError: 1
            });
        }, function() {
            t.setData({
                isError: 1
            });
        }, function() {
            t.setData({
                isLoading: 0
            });
        });
    },
    fixData: function() {
        var a = this.data.product;
        a.base_attr.low_price_txt = a.base_attr.low_price / 100, a.base_attr.up_price_txt = a.base_attr.up_price / 100, 
        a.base_attr.ori_price_txt = a.base_attr.ori_price / 100 || "", a.base_attr.desc_html = "";
        var r = !0, e = !1, o = void 0;
        try {
            for (var n, s = a.base_attr.actiongroup_attr[Symbol.iterator](); !(r = (n = s.next()).done); r = !0) {
                var u = n.value;
                if (u.action_list) {
                    var c = !0, d = !1, l = void 0;
                    try {
                        for (var h, p = u.action_list[Symbol.iterator](); !(c = (h = p.next()).done); c = !0) {
                            var y = h.value;
                            y.html_content && (a.base_attr.desc_html += y.html_content);
                        }
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        d = !0, l = t;
                    } finally {
                        try {
                            !c && p.return && p.return();
                        } finally {
                            if (d) throw l;
                        }
                    }
                }
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            e = !0, o = t;
        } finally {
            try {
                !r && s.return && s.return();
            } finally {
                if (e) throw o;
            }
        }
        this.setData({
            feeTxt: i.getFeeTxt(a.base_attr.fee_type),
            "product.base_attr": a.base_attr,
            lowPrice: a.base_attr.low_price,
            upPrice: a.base_attr.up_price,
            selectedQuantity: a.left_buy_quantity > 0 ? 1 : 0
        }), this.updateCartCount(), t.globalData.product = this.data.product;
    },
    updateCartCount: function() {
        var t = 0, a = r.getLocalCart(), i = !0, e = !1, o = void 0;
        try {
            for (var n, s = a[Symbol.iterator](); !(i = (n = s.next()).done); i = !0) n.value.disabled || t++;
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            e = !0, o = t;
        } finally {
            try {
                !i && s.return && s.return();
            } finally {
                if (e) throw o;
            }
        }
        this.setData({
            cartCount: t
        });
    },
    tapImg: function(t) {
        var a = 1 * t.currentTarget.dataset.idx, i = this.data.product.base_attr.img_info[a];
        wx.previewImage({
            current: i,
            urls: this.data.product.base_attr.img_info
        });
    },
    tapBtnCart: function() {
        wx.switchTab({
            url: "/pages/cart/cart"
        });
    },
    tapAddCart: function(t) {
        this.setData({
            skuTo: "cart"
        }), this.showSku();
    },
    tapBuy: function(t) {
        this.setData({
            skuTo: "order"
        }), this.showSku();
    },
    parseDescHTML: function() {
        var t = this.data.product.base_attr.desc_html;
        if (t) {
            var a = [];
            console.log("HTML:", t);
            var i = (t = (t = t.replace(/<p([^>]*)?>(.*?)<\/p>/g, "txt|QQ|$2|WX|")).replace(/<div([^>]*)?>(\s*)<img([^>]*)src="([^"]*)"([^>]*)>(\s*)<\/div>/g, "img|QQ|$4|WX|")).split("|WX|");
            if (console.log(i), i.length > 0) for (var r = 0, e = i.length; r < e; r++) {
                var o = i[r].trim();
                if ("" != o) {
                    var n = o.split("|QQ|");
                    "txt" == n[0] ? "" != n[1] && a.push({
                        type: 1,
                        value: n[1].replace(/\<br ?\/?\>/g, "\n")
                    }) : a.push({
                        type: 2,
                        value: n[1]
                    });
                }
            }
            this.setData({
                descList: a
            }), console.log("descList:", a);
        } else console.log("No html_content.");
    },
    showSku: function() {
        this.setData({
            isShowSku: 1
        });
    },
    hideSku: function() {
        this.setData({
            isShowSku: 0
        });
    },
    initSku: function() {
        var a = {}, i = !0, r = !1, e = void 0;
        try {
            for (var o, n = this.data.product.base_attr.sku_table[Symbol.iterator](); !(i = (o = n.next()).done); i = !0) {
                var s = o.value;
                a[s.name] || (a[s.name] = {});
                var u = !0, c = !1, d = void 0;
                try {
                    for (var l, h = s.value_list[Symbol.iterator](); !(u = (l = h.next()).done); u = !0) {
                        var p = l.value;
                        a[s.name][p.name] || (a[s.name][p.name] = {
                            id: s.id + ":" + p.id,
                            group: s.id,
                            attr: p.id,
                            enabled: 1,
                            selected: 0
                        });
                    }
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    c = !0, d = t;
                } finally {
                    try {
                        !u && h.return && h.return();
                    } finally {
                        if (c) throw d;
                    }
                }
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            r = !0, e = t;
        } finally {
            try {
                !i && n.return && n.return();
            } finally {
                if (r) throw e;
            }
        }
        console.log("skuGroup:", a);
        var y = {}, f = !0, _ = !1, v = void 0;
        try {
            for (var g, b = this.data.product.available_sku_list[Symbol.iterator](); !(f = (g = b.next()).done); f = !0) {
                var m = g.value;
                m.id_list = m.id_info.split(";");
                var x = !0, k = !1, w = void 0;
                try {
                    for (var S, D = m.id_list[Symbol.iterator](); !(x = (S = D.next()).done); x = !0) y[p = S.value] || (y[p] = 0), 
                    y[p] = Math.max(y[p], m.quantity);
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    k = !0, w = t;
                } finally {
                    try {
                        !x && D.return && D.return();
                    } finally {
                        if (k) throw w;
                    }
                }
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            _ = !0, v = t;
        } finally {
            try {
                !f && b.return && b.return();
            } finally {
                if (_) throw v;
            }
        }
        t.globalData.product = this.data.product, console.log("attrMaxQuatity:", y), this.setData({
            skuGroup: a,
            quantityMaxLimit: this.data.product.left_buy_quantity,
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
        0 == this.data.product.left_buy_quantity ? t = 0 : 0 == this.data.product.base_attr.sku_table.length ? t = 1 : this.data.selectedAttrs.length == this.data.product.base_attr.sku_table.length && (t = 1), 
        this.setData({
            canBuy: t
        });
    },
    updateBySku: function(t) {
        var i = this, r = this.data.skuGroup, e = "", o = this.data.product.base_attr.up_price, n = this.data.product.base_attr.low_price, s = 0;
        if (0 == t.length) {
            o = this.data.lowPrice, n = this.data.upPrice;
            for (var u in r) for (var c in r[u]) r[u][c].enabled = 1;
            return this.setData({
                lowPrice: o,
                upPrice: n,
                skuGroup: r,
                skuImg: ""
            }), void this.fixPrice();
        }
        var d = a.getArrayCombination(t);
        console.log("combinedAttrs:", d);
        var l = !0, h = !1, p = void 0;
        try {
            for (var y, f = d[Symbol.iterator](); !(l = (y = f.next()).done); l = !0) {
                var _ = y.value;
                !function(t, u) {
                    var c = {};
                    console.info("Handle attrs:", t, "isMaxLevel:", u);
                    var d = !0, l = !1, h = void 0;
                    try {
                        for (var p, y = i.data.product.available_sku_list[Symbol.iterator](); !(d = (p = y.next()).done); d = !0) {
                            var f = p.value;
                            if (a.hasArray(f.id_list, t)) {
                                console.log("has `" + f.id_info + "`", "price:" + f.price, "quantity:" + f.quantity), 
                                u && (o = Math.min(o, f.price), n = Math.max(n, f.price)), u && (s = Math.max(s, f.quantity));
                                var _ = !0, v = !1, g = void 0;
                                try {
                                    for (var b, m = f.id_list[Symbol.iterator](); !(_ = (b = m.next()).done); _ = !0) c[k = b.value] || (c[k] = 0), 
                                    c[k] = Math.max(c[k], f.quantity);
                                } catch (t) {
                                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                                    v = !0, g = t;
                                } finally {
                                    try {
                                        !_ && m.return && m.return();
                                    } finally {
                                        if (v) throw g;
                                    }
                                }
                                f.icon_url && (e = f.icon_url);
                            }
                        }
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        l = !0, h = t;
                    } finally {
                        try {
                            !d && y.return && y.return();
                        } finally {
                            if (l) throw h;
                        }
                    }
                    console.log("lowPrice:" + o, "upPrice:" + n, "quantityMaxLimit:" + s), console.log("attrMaxQuatity:", JSON.parse(JSON.stringify(c)));
                    for (var x in r) for (var k in r[x]) void 0 != c[r[x][k].id] && (0 === c[r[x][k].id] ? (r[x][k].enabled = 0, 
                    r[x][k].selected = 0) : r[x][k].enabled = 1);
                }(_, _.length == t.length);
            }
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            h = !0, p = t;
        } finally {
            try {
                !l && f.return && f.return();
            } finally {
                if (h) throw p;
            }
        }
        s = Math.min(s, this.data.product.left_buy_quantity), this.data.selectedQuantity = Math.min(this.data.selectedQuantity, s), 
        this.setData({
            lowPrice: o,
            upPrice: n,
            skuGroup: r,
            selectedQuantity: this.data.selectedQuantity,
            quantityMaxLimit: s,
            skuImg: e
        }), this.fixPrice();
    },
    tapBtnSkuAttr: function(t) {
        var a = this.data.skuGroup, i = t.currentTarget.dataset.id, r = t.currentTarget.dataset.group, e = t.currentTarget.dataset.attr;
        if (a[r] && a[r][e]) {
            var o = a[r][e];
            if (0 != o.enabled) {
                console.log("sku:", i, r, e);
                for (var n in a[r]) n != e && (a[r][n].selected = 0);
                o.selected = o.selected ? 0 : 1, this.setData({
                    skuGroup: a
                });
                var s = [], u = [];
                for (var c in a) for (var d in a[c]) 1 == a[c][d].selected && (s.push(a[c][d].id), 
                -1 == u.indexOf(a[c][d].group) && u.push(a[c][d].group));
                console.info("selectedAttrs:", s), this.updateBySku(s), this.setData({
                    selectedAttrs: s.sort(),
                    selectedGroups: u
                }), this.triggerCanBuy();
            }
        }
    },
    tapChangeQuantity: function(t) {
        var a = 1 * t.currentTarget.dataset.delta;
        console.log("delta:", a);
        var i = this.data.selectedQuantity + a;
        i = Math.max(1, i), i = Math.min(this.data.quantityMaxLimit, i), this.data.product.base_attr.buy_limit > 0 && (i = Math.min(this.data.product.base_attr.buy_limit, i)), 
        this.setData({
            selectedQuantity: i,
            canChangeQuantityUp: i == this.data.product.base_attr.buy_limit || i == this.data.quantityMaxLimit ? 0 : 1,
            canChangeQuantityDown: i <= 1 ? 0 : 1
        });
    },
    inputChangeQuantity: function(t) {
        console.log("input", t.detail.value);
        var a = 1 * t.detail.value;
        a = Math.max(1, a), a = Math.min(this.data.quantityMaxLimit, a), this.data.product.base_attr.buy_limit > 0 && (a = Math.min(this.data.product.base_attr.buy_limit, a)), 
        this.setData({
            selectedQuantity: 0
        }), this.setData({
            selectedQuantity: a,
            canChangeQuantityUp: a == this.data.product.base_attr.buy_limit || a == this.data.quantityMaxLimit ? 0 : 1,
            canChangeQuantityDown: a <= 1 ? 0 : 1
        });
    },
    tapSkuConfirm: function(t) {
        this.data.canBuy && ("cart" == this.data.skuTo ? this.addCart() : "order" == this.data.skuTo ? this.preSubmit() : a.alert("非法操作。"));
    },
    addCart: function() {
        if (this.data.canBuy) {
            var t = this;
            a.loading(!0), r.addToCart({
                product: t.data.product,
                sku: t.data.selectedAttrs,
                skuImg: t.data.skuImg,
                buyCount: t.data.selectedQuantity,
                price: t.data.lowPrice
            }, function(i) {
                t.hideSku(), t.updateCartCount(), a.success({
                    title: "已加入购物车"
                });
            }, function(t) {
                a.alert("操作失败，请重试。");
            }, function() {
                a.alert("网络错误，请重试。");
            }, function() {
                a.loading(!1);
            });
        }
    },
    preSubmit: function() {
        if (this.data.canBuy) {
            var r = this, e = this.data.selectedAttrs.join(";");
            a.loading(!0);
            var o = {
                is_cart: 0,
                item_list: [ {
                    product_id: r.data.product.product_id || "",
                    buy_count: r.data.selectedQuantity || 1,
                    sku_id_info: e
                } ]
            };
            t.globalData.preSubmitList = [ {
                product: r.data.product,
                buyCount: r.data.selectedQuantity || 1,
                price: r.data.lowPrice,
                skuImg: r.data.skuImg,
                sku: r.data.selectedAttrs
            } ], console.log("preSubmit POST:", o), i.preSubmit(o, function(t) {
                wx.navigateTo({
                    url: "/pages/product/buy/buy?lock_id=" + t.lock_id
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