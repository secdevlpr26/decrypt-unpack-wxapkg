function e(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var a, t = require("../../../../utils/util.js"), o = getApp().globalData.httpUrl;

Page({
    data: {
        displayy_0: "none",
        displayy_1: "none",
        displays: "none",
        dcBeizhu: "",
        scroFlag: "",
        totalCount: 0,
        cartShow: "none",
        count: 0,
        cartUrl: "../../../../images/notShopping.png",
        clicked: "block",
        httpUrl: o,
        infos: [],
        price: 0,
        disp: "none",
        foodData: "",
        display: "none",
        clickabled: !0,
        emptyed: !1,
        orderId: "",
        distriFeePrice: 0,
        canhefei: "",
        canhefei0: "",
        canhefei1: 0
    },
    onLoad: function(e) {
        a = this, e.orderId && a.setData({
            orderId: e.orderId
        }), t.getShareInfos(a, o), t.setCompanyId(a, e), t.setStoreId(a), t.setStoreInfo(a), 
        wx.getStorage({
            key: "zuohao",
            success: function(e) {
                a.setData({
                    deskNum: e.data
                });
            }
        }), wx.getStorage({
            key: "goods",
            success: function(e) {
                a.setData({
                    goods: e.data
                });
            }
        }), wx.getStorage({
            key: "dcFlg",
            success: function(e) {
                a.setData({
                    dcFlg: e.data
                });
            }
        }), wx.getStorage({
            key: "ydFlg",
            success: function(e) {
                a.setData({
                    ydFlg: e.data
                });
            }
        }), wx.getStorage({
            key: "wmFlg",
            success: function(e) {
                a.setData({
                    wmFlg: e.data
                });
            }
        }), wx.getStorage({
            key: "storeInfo",
            success: function(e) {
                a.setData({
                    storeInfo: e.data
                });
            }
        }), wx.getStorage({
            key: "storeInfo",
            success: function(e) {
                if ("0" == e.data.boxPriceType) {
                    var t = e.data.storeInfoBoxPrice;
                    null != t && "" != t && void 0 != t || (t = 0), a.setData({
                        canhefei: t
                    });
                } else a.setData({
                    canhefei: 0,
                    canhefei0: e.data.storeInfoBoxPrice
                });
            }
        }), wx.getStorage({
            key: "foodId",
            success: function(e) {
                wx.request({
                    url: o + "skfoodmodel/selFoodByActivityId",
                    data: {
                        id: e.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        var t = e.data;
                        a.setData({
                            foodData: t
                        }), wx.getStorage({
                            key: "carArray",
                            success: function(e) {
                                var t = e.data;
                                if (e.data.length <= 0 && a.setData({
                                    canhefei: 0,
                                    canhefei1: 0
                                }), t && t.length > 0) {
                                    console.log("活动2-------", e.data);
                                    for (var o = 0; o < e.data.length; o++) for (var r in e.data[o]) "foodInfoBoxPrice_out" == r ? a.setData({
                                        canhefei1: e.data[o].foodInfoBoxPrice_out
                                    }) : "foodInfoBoxPrice_food" == r && a.setData({
                                        canhefei: e.data[o].foodInfoBoxPrice_food
                                    });
                                    console.log("活动11-------", a.data.canhefei1), a.setData({
                                        carArray: t,
                                        cartUrl: "../../../../images/shopping.png"
                                    }), a.calTotalPrice();
                                }
                                a.setData({
                                    carArray: t
                                }), a.changeFoodOnBack(), a.checkCount();
                            }
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "wmFlg",
            success: function(e) {
                a.setData({
                    wmFlg: e.data
                }), e.data ? wx.getStorage({
                    key: "deliveryPrice",
                    success: function(e) {
                        console.log("配送费--------------------------", e.data), a.setData({
                            distriFeePrice: 0 == e.data ? "0.00" : e.data
                        });
                    }
                }) : a.setData({
                    distriFeePrice: 0
                });
            }
        });
    },
    checkCount: function() {
        a.data.totalCount > 0 ? (a.changeSubmit(!0), a.setData({
            cartUrl: "../../../../images/shopping.png",
            clicked: "none"
        })) : (a.changeSubmit(!1), a.setData({
            cartUrl: "../../../../images/notShopping.png",
            clicked: "block"
        }));
    },
    changeFoodOnBack: function() {
        var e = a.data.goods;
        a.setData({
            goods: e
        });
    },
    onReady: function() {},
    closeTk: function() {
        a.setData({
            displa: !1
        });
    },
    onShow: function() {
        (a = this).data.back && (a.setData({
            back: !1
        }), a.empty()), wx.onSocketMessage(function(e) {
            console.log("===========接收到服务器信息=============="), t.getTkInfos(a, e), t.playMusic(a, e);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    t.conSocket(e.data, o);
                }
            });
        });
    },
    onHide: function() {
        a.setData({
            back: !0
        });
    },
    onUnload: function() {
        var e = getCurrentPages();
        e[e.length - 2].setData({
            queryemptyflag: !0
        }), t.closeSock(), wx.setStorage({
            key: "carArray",
            data: a.data.carArray
        }), wx.setStorage({
            key: "goods",
            data: a.data.goods
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), a = this, setTimeout(function() {
            a.onPullDownRefresh();
        }, 500);
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: a.data.shareTitle,
            desc: "",
            imageUrl: a.data.shareImgUrl,
            path: "/pages/index/index?storeId=" + a.data.storeId + "&companyId=" + a.data.companyId,
            success: function(e) {},
            fail: function(e) {}
        };
    },
    setCarShowSate: function(e) {
        e ? a.setData({
            cartShow: "block",
            scroFlag: "hidden"
        }) : a.setData({
            cartShow: "none",
            scroFlag: ""
        });
    },
    selguige: function(e) {
        var t = e.currentTarget.dataset.foodSize, o = e.currentTarget.dataset.indx, r = e.currentTarget.dataset.guigeIndex, n = e.currentTarget.dataset.foodsizelist, d = [], i = [];
        for (var c in n) d[c] = "#666", i[c] = "#efefef";
        d[r] = "#ffbf21", i[r] = "#35343a", a.setData({
            foodSizeList: n,
            bgColors: d,
            colors: i,
            indx: o,
            foodSize: t
        });
    },
    resum: function() {
        a.setData({
            guige: !1,
            scroFlag: "",
            clickabled: !0
        });
    },
    chkOrder: function() {
        a.data.clickAble;
        var e = a.data.storeInfo.storeInfoCharging;
        if (1 * a.data.totalPrice < 1 * e && 1 == a.data.wmFlg) a.setData({
            displayy_1: "block",
            titlename_1: "提示",
            carname_1: "未达到起送费"
        }); else if (a.data.dcFlg) {
            var t = a.data.deskNum;
            null == t || "" == t ? a.setData({
                disp: "block",
                display: "none"
            }) : a.sendOrder(t);
        } else a.sendOrder();
    },
    chkOrder_0: function() {
        a.requestOrder(a.data.deskNum);
    },
    chkOrde_0: function() {},
    sendOrder: function(e, t) {
        if (a.data.dcFlg) {
            var o = a.data.deskNum;
            if ("" == o || null == o || void 0 == o) return void a.setData({
                displayy_1: "block",
                carname_1: "请输入桌号",
                titlename_1: "提示信息"
            });
            a.setData({
                disp: "none"
            }), a.setData({
                displays: "block"
            });
        } else a.requestOrder(a.data.deskNum);
    },
    dianqx: function() {
        a.setData({
            displays: "none"
        });
    },
    requestOrder: function(e) {
        wx.getStorage({
            key: "deskNum",
            success: function(a) {
                "" != a.data && (e = a.data);
            }
        }), wx.getStorage({
            key: "userId",
            success: function(t) {
                var r = t.data;
                wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        var n = t.data;
                        wx.getStorage({
                            key: "orderType",
                            success: function(t) {
                                var d = t.data, i = [];
                                for (var c in a.data.goods) {
                                    var s = a.data.goods[c].foodList;
                                    for (var f in s) if (s[f].foodSizeList.length > 0) {
                                        var l = !1;
                                        for (var u in a.data.carArray) {
                                            for (var g in s[f].foodSizeList) if (s[f].foodSizeList[g].id == a.data.carArray[u].foodId && s[f].foodSizeList[g].foodSizeCount > 0) {
                                                i.push(s[f]), l = !0;
                                                break;
                                            }
                                            if (l) break;
                                        }
                                    } else for (var h in a.data.carArray) s[f].id == a.data.carArray[h].foodId && i.push(s[f]);
                                }
                                e || (e = a.data.deskNum), console.log("结算餐盒费-------", a.data.canhefei, a.data.canhefei1), 
                                wx.request({
                                    url: o + "skordermodel/insertOrderInfo",
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        wechatUserId: r,
                                        storeId: n,
                                        orderTableId: e,
                                        orderReceivablePrice: a.data.totalPrice,
                                        orderRealPrice: a.data.totalPrice,
                                        orderType: t.data,
                                        foodList: JSON.stringify(i),
                                        id: a.data.orderId,
                                        orderRemarke: a.data.dcBeizhu,
                                        foodInfoBoxPrice: a.data.canhefei + a.data.canhefei1
                                    },
                                    success: function(e) {
                                        a.data.wmFlg ? wx.redirectTo({
                                            url: "../../order/evalOrder/submitOrder/submitOrder?orderId=" + e.data.jsonEntity + "&orderType=" + d
                                        }) : wx.redirectTo({
                                            url: "../../order/evalOrder/evalOrder?orderId=" + e.data.jsonEntity + "&orderType=" + d
                                        });
                                    },
                                    fail: function(e) {
                                        wx.showToast({
                                            title: "下单失败"
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    addCount: function(e) {
        a.setData({
            fold: !0,
            emptyed: !1
        }), a.canhePrice(1, e);
    },
    minusCount: function(e) {
        a.canhePrice(2, e);
    },
    canhePrice: function(e, t) {
        if (1 == e) {
            var o = a.data.canhefei + a.data.canhefei0;
            a.setFoodInfo(t, 1, o), console.log("增加菜品", e, o), a.setData({
                canhefei: o
            });
        } else {
            var r = a.data.canhefei - a.data.canhefei0;
            console.log("减菜品", e, r), a.setFoodInfo(t, -1, r), a.setData({
                canhefei: r
            });
        }
    },
    setFoodInfo: function(e, t, o) {
        var r = e.currentTarget.dataset.foodId, n = o, d = e.currentTarget.dataset.typeId, i = e.currentTarget.dataset.foodSize, c = a.data.goods, s = c.find(function(e) {
            return e.id == d;
        }).foodList, f = s.find(function(e) {
            return r == e.id;
        });
        if (!f) for (var l in s) if (i = s[l].foodSizeList.find(function(e) {
            return e.id == r;
        })) {
            f = s.find(function(e) {
                return i.foodId == e.id;
            });
            break;
        }
        var u = void 0, g = 0, h = "", p = 0, y = 0;
        f.foodSizeList.length > 0 ? (u = f.foodSizeList.find(function(e) {
            return e.id == i.id;
        }), r = u.id, h = f.foodName + "(" + u.name + ")", u.foodSizeCount = 1 * u.foodSizeCount + t, 
        y = u.foodSizeCount, g = "0" == u.discountFlg ? a.data.wmFlg ? u.priceW : u.priceT : a.data.wmFlg ? u.priceWZ : u.priceTZ) : (h = f.foodName, 
        f.foodCount = 1 * f.foodCount + t, y = f.foodCount, p = a.data.wmFlg ? f.priceW : f.priceT, 
        g = "0" == f.discountFlg ? a.data.wmFlg ? f.priceW : f.priceT : a.data.wmFlg ? f.priceWZ : f.priceTZ), 
        a.refreshShopingCar(r, g, y, h, d, p, n), a.setFoodCnt();
        var k = a.data.carArray;
        0 == f.foodCount && 0 == k.length ? (a.changeSubmit(!1), a.setData({
            goods: c,
            clickAble: !1,
            cartUrl: "../../../../images/notShopping.png"
        })) : (a.changeSubmit(!0), a.setData({
            goods: c,
            clickAble: !0,
            cartUrl: "../../../../images/shopping.png"
        }));
    },
    refreshShopingCar: function(e, t, o, r, n, d, i) {
        var c = a.data.carArray, s = void 0, f = c.find(function(a) {
            return a.foodId == e;
        });
        if (console.log("活动-----从购物车-----餐盒费---", i), f) {
            f.foodId = e;
            var l = t * o, u = d * o;
            if (f.price = l.toFixed(2), f.receivablePrice = u.toFixed(2), f.num = o, f.name = r, 
            f.foodInfoBoxPrice_food = i, 0 == o) {
                for (var g = 0, h = 0; h < c.length; h++) e == c[h].foodId && (g = h);
                c.splice(g, 1), 0 == c.length && (a.setCarShowSate(!1), a.setData({
                    cartUrl: "../../../../images/notShopping.png"
                }));
            }
        } else o > 0 && (s = {
            foodId: e,
            price: t.toFixed(2),
            num: o,
            name: r,
            typeId: n,
            receivablePrice: d,
            foodInfoBoxPrice_food: i
        }, c.push(s));
        a.calTotalPrice(), a.setData({
            carArray: c
        });
    },
    setFoodCnt: function() {
        var e = a.data.foodData, t = a.data.goods;
        for (var o in t) for (var r in t[o].foodList) {
            for (var n in e) !function(a) {
                var r = t[o].foodList.find(function(t) {
                    return t.id == e[a].id;
                });
                r && (e[a] = r);
            }(n);
        }
        a.setData({
            foodData: e
        });
    },
    xuanguige: function(e) {
        var t = e.currentTarget.dataset.foodCount, o = e.currentTarget.dataset.foodPrice, r = e.currentTarget.dataset.foodId, n = [], d = [];
        n[0] = "#ffbf21", d[0] = "#35343a", a.setData({
            guige: r,
            foodCount: t,
            foodPrice: o,
            indx: 0,
            bgColors: n,
            colors: d,
            scroFlag: "hidden",
            clickabled: !1,
            emptyed: !0
        });
    },
    changeSubmit: function(e) {
        a.setData({
            clickAble: e
        }), e ? a.setData({
            bcgcolor: "#ffbf21",
            colo: "#3f3d40",
            payDesc: "下单"
        }) : (a.data.wmFlg ? wx.getStorage({
            key: "storeInfo",
            success: function(e) {
                null != e.data.storeInfoCharging && null != e.data.storeInfoCharging && null != e.data.storeInfoCharging || (e.data.storeInfoCharging = "0.00"), 
                a.setData({
                    payDesc: "￥" + parseFloat(e.data.storeInfoCharging).toFixed(2) + "起送"
                });
            }
        }) : a.setData({
            payDesc: "下单"
        }), a.setData({
            bcgcolor: "#333",
            colo: "#999"
        }));
    },
    bindBeizhu: function(e) {
        var t = e.detail.value;
        null == t || void 0 == t || "undefined" == t || "null" == t ? a.setData({
            dcBeizhu: ""
        }) : a.setData({
            dcBeizhu: t
        }), wx.setStorage({
            key: "dcBeizhu",
            data: t
        });
    },
    toggleList: function() {
        if (a.data.clickabled) {
            if (a.data.totalCount) {
                a.setData({
                    fold: !a.data.fold
                });
                var e = a.data.fold;
                a.cartShow(e);
            }
        } else a.setData({
            displayy_1: "block",
            carname_1: "请关闭选菜窗口",
            titlename_1: "提示信息"
        });
    },
    cartShow: function(e) {
        0 == e ? a.setData({
            cartShow: "block"
        }) : a.setData({
            cartShow: "none"
        });
    },
    calTotalPrice: function() {
        for (var e = this.data.carArray, t = 0, o = 0, r = 0, n = a.data.distriFeePrice, d = 0; d < e.length; d++) t += 1 * e[d].price, 
        o += 1 * e[d].receivablePrice, r += 1 * e[d].num;
        var i = t;
        a.setData({
            finalPrice: parseFloat(i).toFixed(2),
            totalReceivablePrice: parseFloat(o).toFixed(2),
            totalPrice: parseFloat(t).toFixed(2),
            totalCount: r,
            distriFeePrice: parseFloat(n).toFixed(2)
        });
    },
    empty: function(t) {
        var o, r = a.data.goods;
        for (var n in r) for (var d in r[n].foodList) if (r[n].foodList[d].foodCount = 0, 
        r[n].foodList[d].foodSizeList.length > 0) for (var i in r[n].foodList[d].foodSizeList) r[n].foodList[d].foodSizeList[i].foodSizeCount = 0;
        a.setData((o = {
            cartShow: "none",
            fold: !0,
            scroFlag: "",
            cartUrl: "/images/notShopping.png",
            bcgcolor: "#333",
            colo: "#999",
            naviFlg: !1,
            totalPrice: 0,
            totalCount: 0,
            foodCount: 0
        }, e(o, "totalPrice", 0), e(o, "emptyed", !0), e(o, "carArray", []), o));
    },
    resume: function() {
        a.setData({
            disp: "none",
            display: "none"
        });
    },
    bindDesk: function(e) {
        a.setData({
            deskNum: e.detail.value
        }), wx.setStorage({
            key: "deskNum",
            data: e.detail.value
        });
    },
    askFor: function() {
        "#ffbf21" == a.data.bcgcolor ? wx.getStorage({
            key: "userId",
            success: function(e) {
                wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        wx.getStorage({
                            key: "orderType",
                            success: function(r) {
                                wx.request({
                                    url: o + "skordermodel/selUnpaidOrder",
                                    data: {
                                        wechatUserId: e.data,
                                        orderType: r.data,
                                        storeId: t.data
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(e) {
                                        "操作成功！" == e.data.msg ? e.data.count > 0 ? wx.getStorage({
                                            key: "editType",
                                            success: function(e) {
                                                "N" != e.data ? a.setData({
                                                    display: "block"
                                                }) : a.chkOrder();
                                            }
                                        }) : a.chkOrder() : a.setData({
                                            displayy_1: "block",
                                            carname_1: "请联系后台管理员",
                                            titlename_1: "获取未支付订单操作失败"
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }) : a.setData({
            displayy_1: "block",
            carname_1: "当前没有点餐，不可下单",
            titlename_1: "提示信息"
        });
    }
});