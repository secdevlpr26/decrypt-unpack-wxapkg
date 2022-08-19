function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t, a = require("../../../utils/util.js"), o = getApp().globalData.httpUrl;

Page({
    data: {
        displays: "none",
        submitedOrder: !1,
        display: "none",
        displayy: "none",
        displayy_0: "none",
        indx: 0,
        over: "auto",
        catch: !1,
        clicked: !1,
        guigetogFlg: "block",
        guigetogFlg1: "none",
        guige: !1,
        borderLeft: "4px solid #ffbf1f",
        leftBorder: [],
        cdFlg: "block",
        cdFlg1: "block",
        tcFlg: "none",
        tcFlg1: "flex",
        tcFlg2: "absolute",
        a: "",
        httpUrl: o,
        cartUrl: "../../../images/notShopping.png",
        bcgcolor: "#333",
        colo: "#999",
        naviFlg: !1,
        goods: [],
        toView: "",
        scrollTop: 100,
        dcBeizhu: "",
        qisongfei: 20,
        distriFeePrice: 3,
        totalPrice: 0,
        totalCount: 0,
        canhefei: 0,
        canhefei0: 0,
        canhefei1: 0,
        carArray: [],
        minPrice: 0,
        editType: "N",
        payDesc: "",
        fold: !0,
        selectFoods: [ {
            price: 20,
            count: 2
        } ],
        cartShow: "none",
        status: 0,
        url: "",
        showPopup: !1,
        pageBackgroundColor: "#333",
        wmFlg: !1,
        disp: "none",
        deskNum: "",
        dcFlg: !1,
        catalogSelect: 0,
        huodongs: [],
        orderId: "",
        takeOutDispatchType: "",
        boxPriceType: "",
        jianhaoHidden: !0
    },
    onLoad: function(e) {
        console.log("我进入了onload----------------------------------钩子"), (t = this).empty(), 
        wx.setStorage({
            key: "carArray",
            data: t.data.carArray
        }), wx.setStorage({
            key: "zuohao",
            data: ""
        }), a.getShareInfos(t, o), a.setCompanyId(t, e), a.setStoreId(t), wx.setStorage({
            key: "dcBeizhu",
            data: ""
        }), wx.setStorage({
            key: "couponInfo",
            data: ""
        }), wx.getStorage({
            key: "ydFlg",
            success: function(e) {
                console.error("不知道是点餐还是外卖", e.data), t.setData({
                    ydFlg: e.data
                });
            }
        });
        var r = e.zuohao, d = e.flag, n = e.orderId, i = e.editType;
        t.setData({
            flag: d,
            editType: i,
            orderId: n
        }), wx.setStorage({
            key: "editType",
            data: t.data.editType
        }), r && t.setData({
            zuohao: r
        }), wx.getStorage({
            key: "storeInfo",
            success: function(e) {
                wx.setNavigationBarTitle({
                    title: e.data.storeInfoName
                }), t.setData({
                    storeInfo: e.data
                }), t.changeSubmit(!1);
            }
        }), wx.getStorage({
            key: "dcFlg",
            success: function(e) {
                t.setData({
                    dcFlg: e.data
                });
            }
        }), wx.getStorage({
            key: "wmFlg",
            success: function(e) {
                t.setData({
                    wmFlg: e.data
                });
            }
        }), wx.getStorage({
            key: "storeId",
            success: function(e) {
                wx.request({
                    url: o + "skfoodmodel/selFoodActivityByStoreId",
                    data: {
                        storeId: e.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        var a = 85 * e.data.length;
                        t.setData({
                            huodongs: e.data,
                            huodongHeight: a
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "storeId",
            success: function(e) {
                wx.request({
                    url: o + "skfoodmodel/selFoodTypeAndFood",
                    data: {
                        storeId: e.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        var a = e.data;
                        t.setData({
                            goods: a
                        }), wx.setStorage({
                            key: "goods",
                            data: a
                        }), d && wx.request({
                            url: o + "skordermodel/getOrderById",
                            data: {
                                id: n,
                                orderType: d
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                t.setData({
                                    zuohao: e.data.orderTableId,
                                    orderId: e.data.id
                                });
                                var a = t.data.goods;
                                for (var o in e.data.foodList) !function(o) {
                                    var r = a.find(function(t) {
                                        return t.id == e.data.foodList[o].foodTypeId;
                                    });
                                    if (r) {
                                        var d = r.foodList.find(function(t) {
                                            return t.id == e.data.foodList[o].foodId;
                                        }), n = void 0, i = void 0, s = e.data.foodList[o].foodId, c = e.data.foodList[o].realPrice, f = e.data.foodList[o].foodTypeId, l = e.data.foodList[o].receivablePrice;
                                        if (e.data.foodList[o].foodSizeId) {
                                            var u = d.foodSizeList.find(function(t) {
                                                return t.id == e.data.foodList[o].foodSizeId;
                                            });
                                            n = e.data.foodList[o].foodCount, i = e.data.foodList[o].foodName + "(" + e.data.foodList[o].sizeName + ")", 
                                            u.foodSizeCount = n;
                                        } else n = e.data.foodList[o].foodCount, i = e.data.foodList[o].foodName, d.foodCount = n;
                                        t.refreshShopingCar(s, c, n, i, f, l);
                                    }
                                }(o);
                                t.changeSubmit(!0), t.setData({
                                    goods: a,
                                    clickAble: !0,
                                    cartUrl: "../../../images/shopping.png"
                                });
                            }
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "takeOutDispatchType",
            success: function(e) {
                t.setData({
                    takeOutDispatchType: e.data
                });
            }
        }), wx.getStorage({
            key: "wmFlg",
            success: function(e) {
                if (t.setData({
                    wmFlg: e.data
                }), e.data && "0" == t.data.takeOutDispatchType) wx.getStorage({
                    key: "deliveryPrice",
                    success: function(e) {
                        t.setData({
                            distriFeePrice: e.data
                        });
                    }
                }); else {
                    t.setData({
                        distriFeePrice: (0).toFixed(2)
                    });
                }
            }
        });
    },
    closeguige: function() {
        t.resum();
    },
    selguige: function(e) {
        var a = e.currentTarget.dataset.foodSize, o = e.currentTarget.dataset.indx, r = e.currentTarget.dataset.guigeIndex, d = e.currentTarget.dataset.foodsizelist, n = [], i = [];
        for (var s in d) n[s] = "#666", i[s] = "#efefef";
        n[r] = "#ffbf21", i[r] = "#35343a", t.setData({
            foodSize: a,
            foodSizeList: d,
            bgColors: n,
            colors: i,
            indx: o
        });
    },
    xuanguige: function(e) {
        var a = e.currentTarget.dataset.foodCount, o = e.currentTarget.dataset.foodPrice, r = e.currentTarget.dataset.foodId, d = [], n = [];
        d[0] = "#ffbf21", n[0] = "#35343a", t.setData({
            guige: r,
            foodCount: a,
            foodPrice: o,
            indx: 0,
            bgColors: d,
            colors: n,
            cdFlg1: "none"
        });
    },
    togguige: function() {
        t.setData({
            guigetogFlg: "none",
            guigetogFlg1: "block"
        });
    },
    resum: function() {
        t.setData({
            guige: !1,
            cdFlg1: "block"
        });
    },
    changeColor: function() {
        console.log("设置了别境颜色");
        var e = (this.data.pageBackgroundColor, "#ffbf1f");
        this.setData({
            pageBackgroundColor: e
        });
    },
    chooseCatalog: function(e) {
        t.setData({
            catalogSelect: e.currentTarget.dataset.select
        });
    },
    empty: function(a) {
        var o, r = t.data.goods;
        for (var d in r) for (var n in r[d].foodList) if (r[d].foodList[n].foodCount = 0, 
        r[d].foodList[n].foodSizeList.length > 0) for (var i in r[d].foodList[n].foodSizeList) r[d].foodList[n].foodSizeList[i].foodSizeCount = 0;
        wx.getStorage({
            key: "storeInfo",
            success: function(e) {
                if ("0" == e.data.boxPriceType) {
                    var a = e.data.storeInfoBoxPrice;
                    console.log("获取餐盒费", a), null != a && "" != a && void 0 != a || (a = 0), t.setData({
                        canhefei: a
                    });
                } else t.setData({
                    canhefei: 0,
                    canhefei1: 0,
                    canhefei0: e.data.storeInfoBoxPrice
                });
            }
        }), t.setData((o = {
            goods: r,
            cartShow: "none",
            fold: !0,
            clickAble: !1,
            cartUrl: "../../../images/notShopping.png",
            bcgcolor: "#333",
            colo: "#999",
            naviFlg: !1,
            totalPrice: 0,
            totalCount: 0
        }, e(o, "totalPrice", 0), e(o, "carArray", []), o));
    },
    calTotalPrice: function(e, a) {
        for (var o = t.data.carArray, r = 0, d = 0, n = 0, i = t.data.distriFeePrice, s = 0; s < o.length; s++) r += 1 * o[s].price, 
        d += 1 * o[s].receivablePrice, n += 1 * o[s].num;
        console.error("总数--------------", n);
        var c = r;
        t.setData({
            finalPrice: parseFloat(c).toFixed(2),
            totalReceivablePrice: parseFloat(d).toFixed(2),
            totalPrice: parseFloat(r).toFixed(2),
            totalCount: n,
            distriFeePrice: parseFloat(i).toFixed(2)
        }), "jianhao" == e && t.setData({
            canhefei: t.data.canhefei0 * n
        });
    },
    toggleList: function() {
        if (t.data.totalCount) {
            t.setData({
                fold: !t.data.fold
            });
            var e = t.data.fold;
            t.cartShow(e);
        }
    },
    cartShow: function(e) {
        0 == e ? t.setData({
            cartShow: "block"
        }) : t.setData({
            cartShow: "none"
        });
    },
    resume: function() {
        t.setData({
            disp: "none",
            display: "none"
        });
    },
    resumee: function() {
        t.setData({
            disp: "none",
            display: "none",
            displayy: "none"
        });
    },
    chkOrderr: function() {
        t.setData({
            disp: "none",
            display: "none",
            displayy: "none"
        }), t.sendOrder();
    },
    fixNull: function(e) {
        return null == e && (e = ""), e;
    },
    togglePopup: function(e) {
        wx.setStorage({
            key: "foodId",
            data: e.currentTarget.dataset.foodId
        }), wx.setStorage({
            key: "carArray",
            data: t.data.carArray
        }), wx.setStorage({
            key: "goods",
            data: t.data.goods
        }), wx.navigateTo({
            url: "queryOrder/queryOrder?orderId=" + t.data.orderId
        });
    },
    tohuodongs: function(e) {
        wx.setStorage({
            key: "carArray",
            data: t.data.carArray
        }), wx.setStorage({
            key: "foodId",
            data: e.currentTarget.dataset.foodId
        }), wx.setStorage({
            key: "goods",
            data: t.data.goods
        }), wx.navigateTo({
            url: "queryFood/queryFood?orderId=" + t.data.orderId
        });
    },
    onReady: function() {},
    closeTk: function() {
        t.setData({
            displa: !1
        });
    },
    onShow: function() {
        console.log("q---------", t.data.canhefei), console.log("q---------", t.data.canhefei1), 
        t.setData({
            displays: "none"
        }), t = this;
        var e = getCurrentPages();
        1 != e[e.length - 1].data.queryemptyflag ? t.empty() : (wx.getStorage({
            key: "goods",
            success: function(e) {
                t.setData({
                    goods: e.data
                });
            }
        }), wx.getStorage({
            key: "carArray",
            success: function(e) {
                console.log("2-------", e.data), e.data.length <= 0 && t.setData({
                    canhefei: 0,
                    canhefei1: 0
                });
                for (var a = 0; a < e.data.length; a++) for (var o in e.data[a]) "foodInfoBoxPrice_food" == o && t.setData({
                    canhefei1: e.data[a].foodInfoBoxPrice_food
                }), console.log("1-------", e.data[a]);
                t.setData({
                    carArray: e.data
                }), t.changeFoodOnBack(), t.calTotalPrice(), t.data.totalCount > 0 && t.setData({
                    cartUrl: "../../../images/shopping.png"
                }), 0 == t.data.carArray.length ? (t.changeSubmit(!1), t.setData({
                    clickAble: !1,
                    cartUrl: "../../../images/notShopping.png"
                })) : (t.changeSubmit(!0), t.setData({
                    clickAble: !0,
                    cartUrl: "../../../images/shopping.png"
                }));
            }
        })), t.data.back && t.setData({
            back: !1
        }), wx.onSocketMessage(function(e) {
            console.log("===========接收到服务器信息=============="), a.getTkInfos(t, e), a.playMusic(t, e);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    a.conSocket(e.data, o);
                }
            });
        });
    },
    onHide: function() {
        var e = getCurrentPages();
        e[e.length - 1].setData({
            queryemptyflag: !1
        }), t.setData({
            back: !0
        });
    },
    onUnload: function() {
        a.closeSock();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), t = this, setTimeout(function() {
            t.onPullDownRefresh();
        }, 500);
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: t.data.shareTitle,
            desc: "",
            imageUrl: t.data.shareImgUrl,
            path: "/pages/index/index?storeId=" + t.data.storeId + "&companyId=" + t.data.companyId,
            success: function(e) {},
            fail: function(e) {}
        };
    },
    bindDesk: function(e) {
        t.setData({
            deskNum: e.detail.value
        }), wx.setStorage({
            key: "deskNum",
            data: e.detail.value
        });
    },
    bindBeizhu: function(e) {
        var a = e.detail.value;
        null == a || void 0 == a || "undefined" == a || "null" == a ? (a = "", t.setData({
            dcBeizhu: ""
        })) : t.setData({
            dcBeizhu: a
        }), wx.setStorage({
            key: "dcBeizhu",
            data: a
        });
    },
    togBorder: function(e) {
        for (var a = e.currentTarget.dataset.itemindex, o = [], r = 0; r < t.data.goods.length; r++) o[r] = "none";
        o[a] = "4px solid #ffbf1f", t.setData({
            leftBorder: o,
            borderLeft: "none"
        });
        var d = e.currentTarget.dataset.itemIndex;
        t.setData({
            toView: "order" + d,
            key: e.currentTarget.dataset.itemIndex
        });
    },
    togBorder1: function(e) {
        for (var a = [], o = 0; o < t.data.goods.length; o++) a[o] = "none";
        t.setData({
            leftBorder: a,
            borderLeft: "4px solid #ffbf1f"
        });
        var r = e.currentTarget.dataset.itemIndex;
        t.setData({
            toView: "order" + r,
            key: e.currentTarget.dataset.itemIndex
        });
    },
    gotype: function(e) {
        var a = e.detail.scrollTop;
        t.getFoodType(a);
    },
    tolower: function(e) {},
    getFoodType: function(e) {
        var a = t.data.goods, o = t.data.huodongHeight;
        if (e < o) {
            for (var r = [], d = 0; d < t.data.goods.length; d++) r[d] = "none";
            t.setData({
                leftBorder: r,
                borderLeft: "4px solid #ffbf1f"
            });
        } else {
            var n = [];
            for (var i in a) n[i] = "none";
            var s = 0;
            for (var c in a) {
                var f = [];
                if (f[c] = 76 * a[c].foodList.length + 20, s = 1 * s + 1 * f[c], e - o < s) return n[c] = "4px solid #ffbf1f", 
                void t.setData({
                    leftBorder: n,
                    borderLeft: "none"
                });
            }
        }
    },
    changeSubmit: function(e) {
        e ? t.setData({
            bcgcolor: "#ffbf21",
            colo: "#3f3d40",
            payDesc: "下单"
        }) : (wx.getStorage({
            key: "wmFlg",
            success: function(e) {
                if (e.data) {
                    var a = t.data.storeInfo.storeInfoCharging;
                    null != a && void 0 != a && "" != a || (a = 0), t.setData({
                        payDesc: "￥" + a.toFixed(2) + "起送"
                    });
                } else t.setData({
                    payDesc: "下单"
                });
            }
        }), t.setData({
            bcgcolor: "#333",
            colo: "#999"
        }));
    },
    addCount: function(e) {
        console.log("点击了加号", t.data.storeInfo.boxPriceType), t.canhePrice(1, e);
    },
    minusCount: function(e) {
        t.canhePrice(2, e);
    },
    canhePrice: function(e, a) {
        if (1 == e) {
            var o = t.data.canhefei + t.data.canhefei0;
            console.log("增加菜品", e, o), t.setFoodInfo(a, 1, o), t.setData({
                canhefei: o
            });
        } else {
            var r = t.data.totalCount * t.data.canhefei0;
            console.log("减菜品", e, r), t.setFoodInfo(a, -1, r, "jianhao");
        }
    },
    changeFoodOnBack: function() {
        var e = t.data.goods;
        t.setData({
            goods: e
        });
    },
    setFoodInfo: function(e, a, o, r) {
        var r = r, d = e.currentTarget.dataset.foodId, n = o, i = e.currentTarget.dataset.typeId, s = e.currentTarget.dataset.foodSize, c = t.data.goods, f = c.find(function(e) {
            return e.id == i;
        }).foodList, l = f.find(function(e) {
            return d == e.id;
        });
        if (!l) for (var u in f) if (s = f[u].foodSizeList.find(function(e) {
            return e.id == d;
        })) {
            l = f.find(function(e) {
                return s.foodId == e.id;
            });
            break;
        }
        var g = void 0, p = 0, y = "", h = 0, m = 0;
        l.foodSizeList.length > 0 ? (g = l.foodSizeList.find(function(e) {
            return e.id == s.id;
        }), d = g.id, y = l.foodName + "(" + g.name + ")", g.foodSizeCount = 1 * g.foodSizeCount + a < 0 ? 0 : 1 * g.foodSizeCount + a, 
        m = g.foodSizeCount < 0 ? 0 : g.foodSizeCount, "0" == g.discountFlg ? (p = t.data.wmFlg ? g.priceW : g.priceT, 
        h = t.data.wmFlg ? g.priceW : g.priceT) : (p = t.data.wmFlg ? g.priceWZ : g.priceTZ, 
        h = t.data.wmFlg ? g.priceWZ : g.priceTZ)) : (y = l.foodName, l.foodCount = 1 * l.foodCount + a < 0 ? 0 : 1 * l.foodCount + a, 
        console.error(l.foodCount, "---", 1 * l.foodCount + a), m = l.foodCount, h = t.data.wmFlg ? l.priceW : l.priceT, 
        p = "0" == l.discountFlg ? t.data.wmFlg ? l.priceW : l.priceT : t.data.wmFlg ? l.priceWZ : l.priceTZ), 
        t.refreshShopingCar(d, p, m, y, i, h, n, r);
        var w = t.data.carArray;
        0 == l.foodCount && 0 == w.length ? (t.changeSubmit(!1), t.setData({
            goods: c,
            clickAble: !1,
            cartUrl: "../../../images/notShopping.png"
        })) : (t.changeSubmit(!0), t.setData({
            goods: c,
            clickAble: !0,
            cartUrl: "../../../images/shopping.png"
        }));
    },
    refreshShopingCar: function(e, a, o, r, d, n, i, s) {
        var c = t.data.carArray, f = void 0, l = c.find(function(t) {
            return t.foodId == e;
        });
        if (l) {
            l.foodId = e;
            var u = a * o, g = n * o;
            if (l.price = u.toFixed(2), l.receivablePrice = g.toFixed(2), l.num = o, l.name = r, 
            l.foodInfoBoxPrice_out = i, console.log("添加到购物车时候的------餐盒费1---", i), 0 == o) {
                for (var p = 0, y = 0; y < c.length; y++) e == c[y].foodId && (p = y);
                c.splice(p, 1), 0 == c.length && (t.setCarShowSate(!1), t.setData({
                    cartUrl: "../../../images/notShopping.png"
                }));
            }
        } else o > 0 && (f = {
            foodId: e,
            price: a.toFixed(2),
            num: o,
            name: r,
            typeId: d,
            receivablePrice: n,
            foodInfoBoxPrice_out: i
        }, console.log("添加到购物车时候的------餐盒费1---", i), c.push(f));
        t.setData({
            carArray: c
        }), t.calTotalPrice(s, i);
    },
    dianqx: function() {
        t.setData({
            displays: "none"
        }), t.setData({
            over: "auto"
        });
    },
    cO: function() {
        var e = t.data.zuohao;
        if (t.data.dcFlg && !e) {
            if ("" == (e = t.data.deskNum) || null == e || void 0 == e) return t.setData({
                submitedOrder: !1
            }), t.setData({
                displayy_0: "block",
                titlename_0: "提醒",
                carname_0: "请输入桌号"
            }), void t.setData({
                displays: "none"
            });
            t.setData({
                over: "hideen",
                displays: "block",
                disp: "none",
                catch: !0
            });
        }
    },
    chkOrder: function(e) {
        t.setData({
            display: "none",
            formId: e.detail.formId
        });
        var a = t.data.clickAble, o = t.data.storeInfo.storeInfoCharging;
        if (1 * t.data.totalPrice < 1 * o && 1 == t.data.wmFlg) t.setData({
            displayy_0: "block",
            titlename_0: "提示",
            carname_0: "未达到起送费"
        }); else if (a) if (t.data.dcFlg || "D" == t.data.flag) {
            var r = t.data.zuohao, d = t.data.dcBeizhu;
            null != d && void 0 != d || wx.setStorage({
                key: "dcBeizhu",
                data: ""
            }), null == r || "" == r ? t.setData({
                disp: "block"
            }) : t.sendOrder("", r);
        } else 0 == t.data.wmFlg ? t.sendOrder() : (t.setData({
            disp: "none",
            display: "none",
            displayy: "none"
        }), t.sendOrder());
    },
    sendOrder: function(e, a) {
        console.log("狗屎======="), t.setData({
            catch: "false"
        }), t.setData({
            over: "auto"
        }), t.setData({
            disp: "none"
        }), t.data.submitedOrder || (t.setData({
            submitedOrder: !0
        }), wx.getStorage({
            key: "userId",
            success: function(r) {
                var d = r.data;
                console.error("wechatUserId--------", d), wx.getStorage({
                    key: "storeId",
                    success: function(r) {
                        var n = r.data;
                        console.error("storeId--------", d), wx.getStorage({
                            key: "orderType",
                            success: function(r) {
                                console.error("orderType--------", r.data);
                                var i = r.data, s = [];
                                for (var c in t.data.goods) !function(e) {
                                    var a = t.data.goods[e].foodList;
                                    for (var o in a) !function(e) {
                                        if (a[e].foodSizeList.length > 0) for (var o in t.data.carArray) for (var r in a[e].foodSizeList) a[e].foodSizeList[r].id == t.data.carArray[o].foodId && a[e].foodSizeList[r].foodSizeCount > 0 && (s.find(function(t) {
                                            return t.id == a[e].id;
                                        }) || s.push(a[e])); else for (var d in t.data.carArray) a[e].id == t.data.carArray[d].foodId && s.push(a[e]);
                                    }(o);
                                }(c);
                                a || (a = t.data.deskNum), t.data.ydFlg ? wx.getStorage({
                                    key: "orderId",
                                    success: function(e) {
                                        console.error("orderId--------", e.data), wx.request({
                                            url: o + "skordermodel/insertOrderInfo",
                                            method: "POST",
                                            header: {
                                                "content-type": "application/x-www-form-urlencoded"
                                            },
                                            data: {
                                                wechatUserId: d,
                                                storeId: n,
                                                orderTableId: a,
                                                orderReceivablePrice: t.data.totalPrice,
                                                orderRealPrice: t.data.totalPrice,
                                                orderType: r.data,
                                                foodList: JSON.stringify(s),
                                                id: e.data,
                                                formId: t.data.formId,
                                                formType: "1"
                                            },
                                            success: function(e) {
                                                t.setData({
                                                    submitedOrder: !1
                                                }), t.data.wmFlg ? wx.redirectTo({
                                                    url: "../order/evalOrder/submitOrder/submitOrder?orderId=" + e.data.jsonEntity + "&orderType=" + i
                                                }) : wx.redirectTo({
                                                    url: "../order/evalOrder/evalOrder?orderId=" + e.data.jsonEntity + "&orderType=" + i
                                                });
                                            },
                                            fail: function(e) {
                                                wx.showToast({
                                                    title: "下单失败"
                                                });
                                            }
                                        });
                                    }
                                }) : t.data.dcFlg ? wx.request({
                                    url: o + "skordermodel/insertOrderInfo",
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        wechatUserId: d,
                                        storeId: n,
                                        orderTableId: a,
                                        orderReceivablePrice: t.data.totalReceivablePrice,
                                        orderRealPrice: t.data.totalPrice,
                                        orderType: r.data,
                                        foodList: JSON.stringify(s),
                                        id: t.data.orderId,
                                        orderRemarke: t.data.dcBeizhu,
                                        formId: e.detail.formId,
                                        formType: "1"
                                    },
                                    success: function(e) {
                                        t.setData({
                                            submitedOrder: !1
                                        }), wx.redirectTo({
                                            url: "../order/evalOrder/evalOrder?orderId=" + e.data.jsonEntity + "&orderType=" + i
                                        });
                                    },
                                    fail: function(e) {
                                        wx.showToast({
                                            title: "下单失败"
                                        });
                                    }
                                }) : t.data.wmFlg && wx.request({
                                    url: o + "skordermodel/insertOrderInfo",
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        wechatUserId: d,
                                        storeId: n,
                                        orderTableId: a,
                                        orderReceivablePrice: t.data.totalReceivablePrice,
                                        orderRealPrice: t.data.totalPrice,
                                        orderType: r.data,
                                        foodList: JSON.stringify(s),
                                        id: t.data.orderId,
                                        formId: t.data.formId,
                                        formType: "1",
                                        foodInfoBoxPrice: t.data.canhefei + t.data.canhefei1
                                    },
                                    success: function(e) {
                                        t.setData({
                                            submitedOrder: !1
                                        }), wx.redirectTo({
                                            url: "../order/evalOrder/submitOrder/submitOrder?orderId=" + e.data.jsonEntity + "&orderType=" + i
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
        }));
    },
    setCarShowSate: function(e) {
        e ? t.setData({
            cartShow: "block"
        }) : t.setData({
            cartShow: "none"
        });
    },
    util: function(e) {
        var t = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        });
        this.animation = t, t.opacity(0).rotateX(-100).step(), this.setData({
            animationData: t.export()
        }), setTimeout(function() {
            t.opacity(1).rotateX(0).step(), this.setData({
                animationData: t
            }), "close" == e && this.setData({
                showModalStatus: !1
            });
        }.bind(this), 200), "open" == e && this.setData({
            showModalStatus: !0
        });
    },
    askFor: function(e) {
        this.setData({
            displays: "none",
            formId: e.detail.formId
        }), "#ffbf21" == t.data.bcgcolor ? wx.getStorage({
            key: "userId",
            success: function(a) {
                wx.getStorage({
                    key: "storeId",
                    success: function(r) {
                        wx.getStorage({
                            key: "orderType",
                            success: function(d) {
                                wx.request({
                                    url: o + "skordermodel/selUnpaidOrder",
                                    data: {
                                        wechatUserId: a.data,
                                        orderType: d.data,
                                        storeId: r.data
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(a) {
                                        "操作成功！" == a.data.msg ? a.data.count > 0 && "N" != t.data.editType && 0 == t.data.wmFlg ? t.setData({
                                            display: "block",
                                            orderId: a.data.orderId
                                        }) : t.chkOrder(e) : t.setData({
                                            displayy_0: "block",
                                            titlename_0: "获取未支付订单操作失败",
                                            carname_0: "请联系后台管理员"
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }) : t.setData({
            displayy_0: "block",
            titlename_0: "提示",
            carname_0: "当前没有点餐，不可下单"
        });
    }
});