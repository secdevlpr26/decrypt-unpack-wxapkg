(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/tabBar/shoppingCart/submit" ], {
    "08ec": function(t, e, o) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(o("66fd")), a = o("6ce5"), d = o("8456"), r = o("d61d"), u = o("58a5"), i = {
                data: function() {
                    return {
                        showPopupBottom: !1,
                        SubmitModel: {},
                        type: "",
                        expressTypeList: [ "快递配送" ],
                        skuId: "",
                        count: 0,
                        orderSubmitMark: !1,
                        cartItemId: "",
                        isUseIntegral: !1,
                        isShowCouponList: !1,
                        UserCounponList: [],
                        recordCoupon: {},
                        recordSelectCoupon: {},
                        handleProduct: {},
                        currentTime: new Date().getTime(),
                        payMethod: [ {
                            name: "微信支付",
                            value: "WeiXinPay_App",
                            checked: null,
                            disabled: !1
                        } ],
                        payValue: "",
                        orderIds: "",
                        shopType: 0,
                        couponIds: "",
                        defaultorderAmount: 0
                    };
                },
                onLoad: function(e) {
                    this.getPayType(), this.type = e.type, "product" == this.type ? (this.skuId = e.skuId, 
                    this.count = e.count, this.shopType = e.shopType) : "cart" == this.type && (this.cartItemId = e.cartItemIds), 
                    t.showLoading({
                        title: "加载中"
                    }), this.payValue = "WeiXinPay_App", this.payMethod[0].checked = !0, setTimeout(function() {
                        t.hideLoading();
                    }, 2e3);
                },
                onShow: function() {
                    for (var t in this.orderSubmitMark = !1, "product" == this.type ? this.GetSubmit(this.skuId, this.count) : "cart" == this.type && this.GetSubmitByCart(this.cartItemId), 
                    this.payMethod) this.payValue == this.payMethod[t].value ? this.payMethod[t].checked = !0 : this.payMethod[t].checked = !1;
                },
                methods: {
                    getPayType: function() {},
                    selectExpress: function(e) {
                        var o = this, a = this;
                        t.showActionSheet({
                            itemList: 1 == e.IsSupportLocalShip ? a.expressTypeList : [ "快递配送" ],
                            success: function(t) {
                                e.displayDeliveryType = a.expressTypeList[t.tapIndex], 0 == t.tapIndex ? (e.deliveryType = 0, 
                                e.DisplayFreight = e.Freight) : 1 == t.tapIndex && (e.deliveryType = 3, e.DisplayFreight = (parseFloat(e.Freight) + parseFloat(o.SubmitModel.LocalShipAmount)).toFixed(2));
                                for (var d = 0; d < a.SubmitModel.products.length; d++) a.SubmitModel.products[d].shopId == e.shopId && s.default.set(a.SubmitModel.products, d, a.SubmitModel.products[d]);
                                a.SettlementShopAmount(e);
                            }
                        });
                    },
                    selectCoupon: function(t) {
                        for (var e = 0; e < this.UserCounponList.length; e++) t.BaseId != this.UserCounponList[e].BaseId && (this.UserCounponList[e].show = !1);
                        t.show = !t.show, this.recordSelectCoupon = {}, this.recordSelectCoupon = t;
                    },
                    radioChange: function(t) {
                        this.payValue = t.detail.value;
                    },
                    changeUseIntegral: function(t) {
                        this.isUseIntegral = t.detail.value, this.SettlementSumAmount();
                    },
                    pay: function() {
                        var e = this;
                        if ("" == e.payValue) return e.$messageModel("提示", "请选择一种支付方式！"), !1;
                        if ("BalancePay_Balance" == e.payValue) {
                            e = this;
                            var o = {
                                userKey: this.$store.state.userKey,
                                ids: e.orderIds,
                                payPwd: ""
                            };
                            return (0, a.GetPayByCapital)(o, function(e) {
                                e.data && 200 == e.statusCode && (e.data.success ? t.showModal({
                                    title: "提示",
                                    content: "支付成功！",
                                    showCancel: !1,
                                    success: function(e) {
                                        t.redirectTo({
                                            url: "/pages/me/orders/list?type=0"
                                        });
                                    }
                                }) : t.showModal({
                                    title: "提示",
                                    content: "支付失败，请尝试重新支付！",
                                    success: function(t) {}
                                }));
                            }), !1;
                        }
                        var s = {
                            userKey: this.$store.state.userKey,
                            orderIds: e.orderIds.toString()
                        }, i = (0, u.getStorageCache)("user_oauth");
                        s.typeid = "WeiXinPay_SmallProg", s.openId = i.openId, (0, a.GetPaymentList)(s, function(t) {
                            t.data && 200 == t.statusCode ? (0, r.payOrder)(t) : e.$messageModel("提示", (0, d.JSONStringify)(t));
                        });
                    },
                    changeAddress: function() {
                        "product" == this.type ? t.navigateTo({
                            url: "/pages/me/address/index?type=" + this.type + "&skuId=" + this.skuId + "&count=" + this.count + "&shopType=" + this.shopType
                        }) : "cart" == this.type && t.navigateTo({
                            url: "/pages/me/address/index?type=" + this.type + "&cartItemId=" + this.cartItemId
                        });
                    },
                    getPayByCapitalIsOk: function() {
                        var t = this, e = {
                            userKey: this.$store.state.userKey,
                            ids: t.orderIds
                        };
                        (0, a.GetPayByCapitalIsOk)(e, function(e) {
                            if (e.data && 200 == e.statusCode) {
                                var o = {
                                    value: "BalancePay_Balance",
                                    checked: null
                                };
                                e.data.success ? (o.name = "余额支付", o.disabled = !1) : (o.name = "余额支付(余额不足)", o.disabled = !0), 
                                t.payMethod.push(o);
                            }
                        });
                    },
                    hidePopup: function() {
                        this.showPopupBottom = !1, t.redirectTo({
                            url: "/pages/me/orders/list?type=0"
                        });
                    },
                    couponSelector: function(t) {
                        this.isShowCouponList = !0, this.handleProduct = t, this.UserCounponList = t.BaseCoupons;
                    },
                    hideCouponPopup: function() {
                        this.isShowCouponList = !1;
                        for (var t = 0; t < this.UserCounponList.length; t++) this.UserCounponList[t].show = !1;
                    },
                    useCoupon: function() {
                        var t = this.recordSelectCoupon;
                        if (0 === Object.keys(t).length) return this.$messageModel("提示", "请选择优惠券！"), !1;
                        0 == t.show ? (this.handleProduct.OneCoupons = {}, this.handleProduct.OneCoupons.BasePrice = 0, 
                        this.handleProduct.OneCoupons.BaseId = 0) : (this.handleProduct.OneCoupons = {}, 
                        this.handleProduct.OneCoupons.BasePrice = t.BasePrice, this.handleProduct.OneCoupons.BaseId = t.BaseId, 
                        this.handleProduct.OneCoupons.BaseType = t.BaseType), this.SettlementShopAmount(this.handleProduct), 
                        this.isShowCouponList = !1;
                    },
                    SettlementShopAmount: function(t) {
                        t.ShopTotal = (parseFloat(t.ShopTotalWithoutFreight) - parseFloat(t.OneCoupons.BasePrice) + parseFloat(t.DisplayFreight)).toFixed(2), 
                        this.SettlementSumAmount();
                    },
                    SettlementSumAmount: function() {
                        var t = this, e = 0;
                        for (var o in t.SubmitModel.products) e = (parseFloat(e) + parseFloat(t.SubmitModel.products[o].ShopTotal)).toFixed(2);
                        t.SubmitModel.orderAmount = e, this.isUseIntegral && (t.SubmitModel.orderAmount = (t.SubmitModel.orderAmount - t.SubmitModel.integralPerMoney).toFixed(2));
                    },
                    SubmiteOrder: function() {
                        var t = this;
                        if (t.orderSubmitMark = !t.orderSubmitMark, 0 != t.orderSubmitMark) {
                            if ("" == this.SubmitModel.Address || null == this.SubmitModel.Address) return t.$messageModel("提示", "请填写收货地址！"), 
                            !1;
                            var e = [];
                            for (var o in t.SubmitModel.products) {
                                var s = t.SubmitModel.products;
                                e.push(s[o].orderRemark);
                            }
                            var d = {
                                userKey: this.$store.state.userKey,
                                orderRemarks: e.join(","),
                                recieveAddressId: this.SubmitModel.Address.Id,
                                integral: this.isUseIntegral ? this.SubmitModel.userIntegrals : 0
                            }, r = "", i = [];
                            for (var n in t.SubmitModel.products) null != t.SubmitModel.products[n].OneCoupons && t.SubmitModel.products[n].OneCoupons.BaseId > 0 && (r = r + t.SubmitModel.products[n].OneCoupons.BaseId + "_" + t.SubmitModel.products[n].OneCoupons.BaseType + ","), 
                            i.push({
                                ShopId: t.SubmitModel.products[n].shopId,
                                DeliveryType: t.SubmitModel.products[n].deliveryType
                            });
                            d.OrderShops = i, d.couponIds = r.substr(0, r.length - 1);
                            var p = (0, u.getStorageCache)("user_oauth");
                            d.ShareUserId = null != p.ShareUserId && p.ShareUserId > 0 && p.ShareUserId != p.userId ? p.ShareUserId : 0, 
                            "product" == this.type ? (d.skuIds = this.skuId, d.counts = this.count, d.ShopType = t.shopType, 
                            (0, a.PostSubmitOrder)(d, function(e) {
                                e.data && 200 == e.statusCode && ("true" == e.data.Success ? (t.showPopupBottom = !0, 
                                t.orderIds = e.data.OrderIds, t.getPayByCapitalIsOk()) : (t.orderSubmitMark = !t.orderSubmitMark, 
                                t.$messageModel("提示", e.data.Msg)));
                            })) : "cart" == this.type && (d.cartItemIds = this.cartItemId, (0, a.PostSubmitOrderByCart)(d, function(e) {
                                e.data && 200 == e.statusCode && ("true" == e.data.Success ? (t.showPopupBottom = !0, 
                                t.orderIds = e.data.OrderIds, t.getPayByCapitalIsOk()) : (t.orderSubmitMark = !t.orderSubmitMark, 
                                t.$messageModel("提示", e.data.Msg)));
                            }));
                        } else t.orderSubmitMark = !0;
                    },
                    GetSubmitByCart: function(t) {
                        var e = this, o = {
                            userKey: this.$store.state.userKey,
                            cartItemIds: t
                        };
                        (0, a.GetSubmitByCartModel)(o, function(t) {
                            if (t.data && 200 == t.statusCode && t.data.Success) for (var o in e.SubmitModel = t.data, 
                            t.data.orderAmount = t.data.orderAmount.toFixed(2), t.data.integralPerMoney = t.data.integralPerMoney.toFixed(2), 
                            t.data.products) {
                                for (var s in null != t.data.products[o].Freight && (t.data.products[o].Freight = t.data.products[o].Freight.toFixed(2)), 
                                t.data.products[o].FullDiscount > 0 && (t.data.products[o].FullDiscount = t.data.products[o].FullDiscount.toFixed(2)), 
                                null != t.data.products[o].OneCoupons && (e.couponIds = t.data.products[o].OneCoupons.BaseId + "_" + t.data.products[o].OneCoupons.BaseType, 
                                t.data.products[o].ShopTotal = t.data.products[o].ShopTotal - t.data.products[o].OneCoupons.BasePrice), 
                                t.data.products[o].ShopTotal = t.data.products[o].ShopTotal.toFixed(2), t.data.products[o].CartItemModels) t.data.products[o].CartItemModels[s].price = t.data.products[o].CartItemModels[s].price.toFixed(2);
                                t.data.products[o].DisplayFreight = t.data.products[o].Freight, t.data.products[o].deliveryType = 0, 
                                t.data.products[o].displayDeliveryType = "快递配送", t.data.products[o].OneCoupons = {}, 
                                t.data.products[o].OneCoupons.BasePrice = 0;
                            }
                        });
                    },
                    GetSubmit: function(t, e) {
                        var o = this, s = {
                            userKey: this.$store.state.userKey,
                            skuId: t,
                            count: e
                        };
                        (0, a.GetSubmitModel)(s, function(t) {
                            if (t.data && 200 == t.statusCode && t.data.Success) for (var e in o.SubmitModel = t.data, 
                            t.data.orderAmount = t.data.orderAmount.toFixed(2), t.data.integralPerMoney = t.data.integralPerMoney.toFixed(2), 
                            t.data.products) {
                                for (var s in null != t.data.products[e].Freight && (t.data.products[e].Freight = t.data.products[e].Freight.toFixed(2)), 
                                t.data.products[e].FullDiscount > 0 && (t.data.products[e].FullDiscount = t.data.products[e].FullDiscount.toFixed(2)), 
                                null != t.data.products[e].OneCoupons && (o.couponIds = t.data.products[e].OneCoupons.BaseId + "_" + t.data.products[e].OneCoupons.BaseType, 
                                t.data.products[e].ShopTotal = t.data.products[e].ShopTotal - t.data.products[e].OneCoupons.BasePrice), 
                                t.data.products[e].ShopTotal = t.data.products[e].ShopTotal.toFixed(2), t.data.products[e].CartItemModels) t.data.products[e].CartItemModels[s].price = t.data.products[e].CartItemModels[s].price.toFixed(2);
                                t.data.products[e].DisplayFreight = t.data.products[e].Freight, t.data.products[e].deliveryType = 0, 
                                t.data.products[e].displayDeliveryType = "快递配送", t.data.products[e].OneCoupons = {}, 
                                t.data.products[e].OneCoupons.BasePrice = 0;
                            }
                        });
                    }
                }
            };
            e.default = i;
        }).call(this, o("543d").default);
    },
    "469e": function(t, e, o) {
        o.r(e);
        var s = o("e456"), a = o("4739");
        for (var d in a) "default" !== d && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(d);
        o("71ac");
        var r = o("f0c5"), u = Object(r.a)(a.default, s.b, s.c, !1, null, null, null, !1, s.a, void 0);
        e.default = u.exports;
    },
    4739: function(t, e, o) {
        o.r(e);
        var s = o("08ec"), a = o.n(s);
        for (var d in s) "default" !== d && function(t) {
            o.d(e, t, function() {
                return s[t];
            });
        }(d);
        e.default = a.a;
    },
    "71ac": function(t, e, o) {
        var s = o("90ad");
        o.n(s).a;
    },
    "90ad": function(t, e, o) {},
    a1c3: function(t, e, o) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            o("414e"), e(o("66fd")), t(e(o("469e")).default);
        }).call(this, o("543d").createPage);
    },
    e456: function(t, e, o) {
        o.d(e, "b", function() {
            return s;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {});
        var s = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
    }
}, [ [ "a1c3", "common/runtime", "common/vendor" ] ] ]);