var t = getApp(), o = require("ShopUtil.js");

Page({
    options: {},
    onShareAppMessage: function() {
        return t.shareAppMessage("/pages/shop/index");
    },
    onLoad: function(o) {
        this.options = o, t.getPageUrl(this, o), t.registerGlobalFunctions(this);
    },
    onShow: function() {
        t.doAfterUserInfoAuth({
            success: this.initData,
            fail: this.initData,
            timesLimit: !1
        });
    },
    initData: function() {
        var t = this;
        t.loadCartInfo(!1), t.setData({
            shopcart: t.options.one ? t.options.one : 0
        }), o.loadCouponList(!0, function(o) {
            t.setData({
                couponlist: o.list
            });
        });
    },
    data: {
        backselectFlag: !1,
        getPageFlag: !0,
        hintText: "",
        goods: [],
        productHeight: !0,
        noProductSelect: !1,
        lengthNum: 0,
        flag4: !1,
        shopcart: 0,
        headerFlag: !0,
        allChecked: !1,
        allname: "全选",
        goodlength: 0,
        ordermoney: 0,
        baseUrl: t.globalData.siteBaseUrl
    },
    close: function() {
        this.setData({
            flag4: !this.data.flag4
        });
    },
    getCoupon: function(t) {
        var e = this;
        o.getCoupon(t.currentTarget.dataset.couponid, function() {
            o.loadCouponList(!0, function(t) {
                e.setData({
                    noProductSelect: !0,
                    hintText: "领取成功"
                }), setTimeout(function() {
                    e.setData({
                        noProductSelect: !1
                    });
                }, 2500), e.setData({
                    couponlist: t.list
                });
            });
        });
    },
    loadCartInfo: function(o) {
        var e = this;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/ShopApi&a=listCart",
            method: "POST",
            hideLoading: o || !1,
            success: function(o) {
                if (o.success) {
                    delete o.success, delete o.msg;
                    var a = new Array(), s = new Array();
                    if (e.data.backselectFlag) return void console.log("成功了 不更新数据");
                    e.setData({
                        goodlength: o.goods.length
                    }), e.data.lengthNum = 0;
                    for (var n in o.goods) o.goods[n].ProductMoney = o.goods[n].ProductMoney.toFixed(2), 
                    o.goods[n].maxNum = 0, 1 == o.goods[n].IsTakenOff || 1 == o.goods[n].overProductQuantity ? s.push(o.goods[n]) : (o.goods[n].selected = !1, 
                    o.goods[n].ProductPrice = (parseFloat(o.goods[n].ProductMoney) / parseInt(o.goods[n].ProductNum)).toFixed(2), 
                    a.push(o.goods[n]));
                    e.setData({
                        goods: a,
                        invaildGoods: s,
                        hasproduct: a.length > 0,
                        allChecked: !1,
                        lengthNum: e.data.lengthNum
                    });
                } else t.showModal({
                    title: "提示",
                    content: "操作失败：" + o.msg
                });
            },
            fail: function(o) {
                t.showModal({
                    title: "提示",
                    content: "操作失败：" + o
                });
            }
        });
    },
    doDeleteItem: function(o) {
        var e = this, a = {
            pkey: o
        };
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/ShopApi&a=delCartItem",
            method: "POST",
            data: a,
            success: function(o) {
                o.success ? e.loadCartInfo(!0) : t.showModal({
                    title: "提示",
                    content: "操作失败：" + o.msg
                });
            },
            fail: function(o) {
                t.showModal({
                    title: "提示",
                    content: "操作失败：" + o
                });
            }
        });
    },
    delCartItem: function(t) {
        var o = this, e = t.currentTarget.dataset.pkey;
        wx.showModal({
            title: "提示",
            content: "确定删除吗？",
            success: function(t) {
                t.confirm ? o.doDeleteItem(e) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    changeStatus: function() {
        var o = this, e = [];
        for (var a in o.data.goods) {
            o.data.goods[a].ProductMoney = (o.data.goods[a].ProductMoney - 0).toFixed(2);
            var s = {
                Pkey: o.data.goods[a].Pkey,
                ProductID: o.data.goods[a].ProductID,
                num: o.data.goods[a].ProductNum,
                skuid: o.data.goods[a].ProSkuID
            };
            e.push(s);
        }
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/ShopApi&a=changeCartNumBatch",
            method: "POST",
            data: {
                productInfos: e
            },
            success: function(e) {
                if (e.success) {
                    o.setData({
                        headerFlag: !o.data.headerFlag
                    });
                    var a = "";
                    for (var s in e.results) if ("1" == e.results[s].overProductQuantity) {
                        var n = o.findItem(s);
                        a += "商品的库存不足 " + n.ProductNum + " 件，强制重设为 " + e.results[s].curProductQuantity + " 件\r\n", 
                        n.ProductNum = e.results[s].curProductQuantity, n.ProductMoney = (n.ProductPrice * n.ProductNum).toFixed(2);
                    }
                    a && (t.showModal({
                        title: "提示",
                        content: a
                    }), o.setData({
                        goods: o.data.goods
                    }), o.reCalMoney());
                } else t.showModal({
                    title: "提示",
                    content: "保存数量失败：" + e.msg
                });
            },
            fail: function(o) {
                t.showModal({
                    title: "提示",
                    content: "保存数量失败：" + o.errMsg
                });
            }
        });
    },
    changeCartItemNum: function(o) {
        var e = this, a = o.currentTarget.dataset.pkey, s = o.currentTarget.dataset.maxnum, n = (o.currentTarget.dataset.indexcurrent, 
        o.currentTarget.dataset.direct), d = e.findItem(a);
        d || t.showModal({
            title: "提示",
            content: "操作失败：在购物车中找不到相应商品"
        });
        var c = d.ProductNum;
        if (s >= c) {
            if ("-" == n) {
                if (1 == c) return;
                --c < 1 && (c = 1);
            } else "+" == n && c++;
            if (s < c) return void (c = s);
            d.ProductNum = c, d.ProductMoney = (d.ProductNum * d.ProductPrice).toFixed(2), e.setData({
                goods: e.data.goods
            }), e.reCalMoney();
        }
    },
    findItem: function(t) {
        var o = this;
        for (var e in o.data.goods) if (o.data.goods[e].Pkey == t) return o.data.goods[e];
        return null;
    },
    goSquare: function() {
        var o = this, e = [];
        for (var a in o.data.goods) o.data.goods[a].selected && e.push(o.data.goods[a].Pkey);
        if (e.length < 1) return t.showModal({
            title: "提示",
            content: "请至少选择一个产品再进行结算"
        }), !1;
        o.setData({
            buttonClicked: !0
        }), setTimeout(function() {
            o.setData({
                buttonClicked: !1
            });
        }, 500), wx.navigateTo({
            url: "square?pkeys=" + e.join(",")
        });
    },
    onPkeyClick: function(t) {
        var o = this, e = t.currentTarget.dataset.pkey, a = t.currentTarget.dataset.flagitem;
        wx.createSelectorQuery().select("#pkey" + e).fields({
            properties: [ "checked" ]
        }, function(t) {
            function s() {
                o.data.goods.forEach(function(t) {
                    t.selected && n++;
                });
            }
            var n = 0, d = o.findItem(e);
            t.checked ? a ? (d.selected = !1, s(), o.setData({
                lengthNum: n,
                goods: o.data.goods,
                allChecked: !1
            })) : (d.selected = !0, s(), o.setData({
                lengthNum: n,
                allChecked: n === o.data.goods.length
            })) : a ? (d.selected = !0, s(), o.setData({
                goods: o.data.goods,
                lengthNum: n,
                allChecked: n === o.data.goods.length
            })) : (d.selected = !1, s(), o.setData({
                lengthNum: n,
                allChecked: !1
            })), o.reCalMoney();
        }).exec();
    },
    allCheckedBtn: function(t) {
        var o = this;
        o.data.allChecked = !o.data.allChecked, o.data.goods.forEach(function(t) {
            t.selected = o.data.allChecked;
        }), o.setData({
            goods: o.data.goods,
            lengthNum: o.data.allChecked ? o.data.goods.length : 0,
            allChecked: o.data.allChecked
        }), o.reCalMoney();
    },
    AddCollection: function() {
        var o = this, e = [], a = 0;
        if (this.data.goods.forEach(function(t) {
            t.selected ? e.push(t.ProductID) : a++;
        }), a === this.data.goods.length) return this.setData({
            noProductSelect: !0,
            hintText: "请选择商品"
        }), void setTimeout(function() {
            o.setData({
                noProductSelect: !1
            });
        }, 2500);
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/ShopApi&a=saveCollPro&collProID=" + e,
            method: "GET",
            success: function(t) {
                o.isloading = !1, t.success && wx.showToast({
                    title: "已收藏",
                    icon: "success",
                    duration: 3e3
                });
            },
            fail: function(t) {
                o.isloading = !1;
            },
            hideLoading: !0
        });
    },
    reCalMoney: function() {
        var t = this, o = 0;
        for (var e in t.data.goods) t.data.goods[e].selected && (t.data.goods[e].ProductMoney = t.data.goods[e].ProductPrice * parseInt(t.data.goods[e].ProductNum), 
        o += t.data.goods[e].ProductMoney);
        t.setData({
            ordermoney: Math.abs(o).toFixed(2),
            goods: t.data.goods
        });
    },
    clearInvaildGoods: function() {
        var t = [];
        for (var o in this.data.invaildGoods) t.push(this.data.invaildGoods[o].Pkey);
        t.length > 0 && this.doDeleteItem(t.join(","));
    },
    goMycoupon: function() {
        wx.navigateTo({
            url: "/pages/company/mycoupon"
        });
    },
    delAll: function() {
        var t = this, o = [], e = 0;
        for (var a in this.data.goods) this.data.goods[a].selected ? o.push(this.data.goods[a].Pkey) : e++;
        if (e === this.data.goods.length) return t.setData({
            noProductSelect: !0,
            hintText: "请选择商品"
        }), void setTimeout(function() {
            t.setData({
                noProductSelect: !1
            });
        }, 2500);
        wx.showModal({
            title: "提示",
            content: "确定删除所选产品吗？",
            success: function(e) {
                e.confirm ? o.length > 0 && t.doDeleteItem(o.join(",")) : e.cancel && console.log("用户点击取消");
            }
        });
    },
    addTestData: function() {
        o.addToCart(), setTimeout(this.loadCartInfo, 3e3);
    }
});