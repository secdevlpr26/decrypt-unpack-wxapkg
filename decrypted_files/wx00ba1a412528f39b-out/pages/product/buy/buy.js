var e = getApp(), t = require("../../../utils/utils.js"), a = require("../../../utils/api/product.js");

Page({
    data: {
        lock_id: "",
        packageInfo: {},
        feeTxt: "",
        productPrice: 0,
        finalPrice: 0,
        expressPrice: 0,
        expressPriceTxt: "0",
        sku: "",
        skuImg: "",
        product: {},
        list: [],
        address: {},
        isLoadedExpress: 0,
        canChooseAddr: 1,
        canBuy: 0
    },
    onLoad: function(t) {
        var r = {
            lock_id: t.lock_id,
            feeTxt: "",
            productPrice: 0,
            finalPrice: 0,
            finalPriceTxt: "",
            address: {},
            expressFee: 0
        };
        r.list = e.globalData.preSubmitList;
        var s = !0, i = !1, o = void 0;
        try {
            for (var n, d = r.list[Symbol.iterator](); !(s = (n = d.next()).done); s = !0) {
                var c = n.value;
                c.attrs = [];
                var l = !0, u = !1, p = void 0;
                try {
                    for (var f, g = c.sku[Symbol.iterator](); !(l = (f = g.next()).done); l = !0) {
                        var y = f.value;
                        if (y) {
                            var h = y.split(":")[1].replace("$", ""), x = !1, _ = !0, m = !1, v = void 0;
                            try {
                                for (var P, k = c.product.base_attr.sku_table[Symbol.iterator](); !(_ = (P = k.next()).done); _ = !0) {
                                    var S = P.value, w = !0, b = !1, T = void 0;
                                    try {
                                        for (var C, A = S.value_list[Symbol.iterator](); !(w = (C = A.next()).done); w = !0) {
                                            var B = C.value;
                                            if (B.id == h) {
                                                c.attrs.push(B.name), x = !0;
                                                break;
                                            }
                                        }
                                    } catch (e) {
                                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                        b = !0, T = e;
                                    } finally {
                                        try {
                                            !w && A.return && A.return();
                                        } finally {
                                            if (b) throw T;
                                        }
                                    }
                                }
                            } catch (e) {
                                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                                m = !0, v = e;
                            } finally {
                                try {
                                    !_ && k.return && k.return();
                                } finally {
                                    if (m) throw v;
                                }
                            }
                            x || c.attrs.push(h);
                        }
                    }
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    u = !0, p = e;
                } finally {
                    try {
                        !l && g.return && g.return();
                    } finally {
                        if (u) throw p;
                    }
                }
                c.feeTxt = a.getFeeTxt(c.product.base_attr.fee_type), c.priceTxt = c.price / 100, 
                r.productPrice += c.price * c.buyCount, r.productPriceTxt = r.finalPrice / 100, 
                r.finalPrice += c.price * c.buyCount, r.finalPriceTxt = r.finalPrice / 100, r.feeTxt = c.feeTxt;
            }
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            i = !0, o = e;
        } finally {
            try {
                !s && d.return && d.return();
            } finally {
                if (i) throw o;
            }
        }
        var D = wx.getStorageSync("address") || {};
        r.address = D, this.setData(r), this.getExpressFee(), this.triggerCanBuy(), console.log("lock_id:", this.data.lock_id);
    },
    triggerCanBuy: function() {
        var e = 0;
        this.data.address.userName && this.data.isLoadedExpress && (e = 1), this.setData({
            canBuy: e
        });
    },
    chooseAddress: function() {
        var e = this;
        wx.chooseAddress || (e.setData({
            canChooseAddr: 0
        }), e.triggerCanBuy()), wx.chooseAddress({
            success: function(t) {
                console.log("chooseAddress:", t), e.setData({
                    canChooseAddr: 1
                }), t.errMsg && t.errMsg.indexOf(":ok") > -1 && (e.setData({
                    address: t
                }), e.getExpressFee(), wx.setStorageSync("address", t)), e.triggerCanBuy();
            },
            fail: function(t) {
                console.warn("chooseAddress fail:", t), t.errMsg && t.errMsg.indexOf(":cancel") > -1 || e.setData({
                    canChooseAddr: 0
                }), e.triggerCanBuy();
            },
            complete: function() {}
        });
    },
    tapChooseAddr: function(e) {
        this.chooseAddress();
    },
    tapOpenSetting: function(e) {
        if (wx.openSetting) {
            var a = this;
            wx.openSetting({
                success: function(e) {
                    console.log(e), e.authSetting && e.authSetting["scope.address"] && a.setData({
                        canChooseAddr: 1
                    });
                },
                fail: function() {}
            });
        } else t.alert("请点击右上角按钮，选择“关于…”进入小程序主页，在右上角按钮菜单中选择“设置”，允许访问通讯地址。");
    },
    tapBtnPay: function(e) {
        var r = this;
        this.data.canBuy ? this.data.packageInfo && this.data.packageInfo.pay_sign ? this.showPayment() : (t.loading(!0), 
        a.submit({
            lockid: r.data.lock_id,
            total_price: r.data.finalPrice,
            address_name: r.data.address.userName || "",
            address_province: r.data.address.provinceName || "",
            address_city: r.data.address.cityName || "",
            address_region: r.data.address.countyName || "",
            address_detail: r.data.address.detailInfo || "",
            address_postalcode: r.data.address.postalCode || "",
            address_mobile: r.data.address.telNumber || "",
            ticket: "",
            express_id: "",
            express_name: "",
            express_fee: r.data.expressPrice || 0
        }, function(e) {
            var a = e.package_info;
            console.log("submit resp:", e), e.err_code > 0 ? t.alert("支付失败。(" + e.err_code + ")") : a ? (r.setData({
                packageInfo: a
            }), r.showPayment()) : t.alert("无签名信息，支付失败。");
        }, function(e) {
            var a = "系统错误，请重试。";
            e && e.base_resp && (a += "(" + e.base_resp.ret + ")"), t.alert(a);
        }, function() {
            t.alert("网络错误，请重试。");
        }, function() {
            t.loading(!1);
        })) : t.alert("请选择收货地址。");
    },
    getExpressFee: function() {
        if (this.data.address.userName) {
            var e = this;
            t.loading(!0), a.getExpressFee({
                lock_id: this.data.lock_id,
                country: this.data.address.countyName,
                province: this.data.address.provinceName,
                city: this.data.address.cityName
            }, function(t) {
                console.log("getExpressFee", t), e.setData({
                    isLoadedExpress: 1,
                    expressPrice: 1 * t.total_fee || 0,
                    expressPriceTxt: 1 * t.total_fee / 100 || 0,
                    finalPrice: e.data.productPrice + 1 * t.total_fee,
                    finalPriceTxt: (e.data.productPrice + 1 * t.total_fee) / 100
                }), e.triggerCanBuy();
            }, function(e) {
                t.alert("获取运费失败，请重试。"), console.log("getExpressFee fail", e);
            }, function() {
                t.alert("网络错误，请重试。");
            }, function() {
                t.loading(!1);
            });
        }
    },
    showPayment: function() {
        var e = this, a = this.data.packageInfo || {};
        console.log("showPayment:", a), a && (a.nonceStr = a.nonce_str, a.paySign = a.pay_sign, 
        a.signType = a.sign_type, a.timeStamp = a.time_stamp, a.success = function(e) {
            console.log(e), wx.navigateBack({
                delta: 1
            });
        }, a.fail = function(e) {
            console.warn(e), e.errMsg && e.errMsg.indexOf("cancel") > -1 || t.alert("支付失败。");
        }, a.complete = function() {}, wx.requestPayment(a), e.setData({
            _wxpay: JSON.stringify({
                nonceStr: a.nonceStr,
                paySign: a.paySign,
                signType: a.signType,
                timeStamp: a.timeStamp,
                package: a.package
            })
        }));
    }
});