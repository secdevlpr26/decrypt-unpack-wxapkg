function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t, a = require("../../../utils/util.js"), o = getApp(), r = o.globalData.httpUrl;

Page({
    data: {
        dcBeizhu: "",
        display: "none",
        indx: 0,
        displays: "none",
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
        httpUrl: r,
        cartUrl: "../../../images/notShopping.png",
        bcgcolor: "#333",
        colo: "#999",
        naviFlg: !1,
        goods: [],
        toView: "",
        scrollTop: 100,
        qisongfei: 20,
        distriFeePrice: 3,
        totalPrice: 0,
        totalCount: 0,
        canhefei: 0,
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
        displayy: "none",
        zhuohaoHidden: !1
    },
    onLoad: function(e) {
        t = this, wx.setStorage({
            key: "dc",
            data: 1
        }), t.empty(), wx.setStorage({
            key: "editType",
            data: "N"
        }), wx.setStorageSync("carArray", []), wx.setStorageSync("goods", []), "1" == e.secondIn ? t.setData({
            secondIn: !0
        }) : t.setData({
            secondIn: !1
        }), a.setCompanyId(t, e), wx.setStorage({
            key: "dcBeizhu",
            data: ""
        });
        var o = decodeURIComponent(e.scene);
        if ("undefined" != o && void 0 != o && null != o && "null" != o) {
            var d = o.split(",")[0].replace('"', "");
            console.log("====pid====="), console.log(d);
            var n = o.split(",")[1].replace('"', "");
            wx.setStorage({
                key: "currentTab",
                data: 1
            }), t.setData({
                scene: o,
                zuohao: n,
                zhuohaoHidden: !0
            }), wx.request({
                url: r + "skstoremodel/findStoreById",
                data: {
                    pid: d
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(e) {
                    t.setData({
                        storeInfo: e.data
                    }), wx.setStorage({
                        key: "storeInfo",
                        data: e.data
                    }), wx.setStorage({
                        key: "storeName",
                        data: e.data.storeInfoName
                    }), wx.setNavigationBarTitle({
                        title: e.data.storeInfoName
                    });
                    var o = e.data.storeInfoStoreId;
                    t.setData({
                        storeId: o
                    }), wx.setStorageSync("storeId", o), a.getShareInfos(t, r), wx.setStorage({
                        key: "orderType",
                        data: "D"
                    }), wx.setStorage({
                        key: "dcFlg",
                        data: !0
                    }), wx.setStorage({
                        key: "ydFlg",
                        data: !1
                    }), wx.setStorage({
                        key: "wmFlg",
                        data: !1
                    }), t.setData({
                        wmFlg: !1,
                        ydFlg: !1,
                        dcFlg: !0,
                        editType: "N",
                        flag: "D"
                    }), t.resendIndex(o);
                }
            });
        } else console.log("=======scene未获取========");
        wx.setStorage({
            key: "couponInfo",
            data: ""
        });
    },
    selguige: function(e) {
        var a = e.currentTarget.dataset.foodSize, o = e.currentTarget.dataset.indx, r = e.currentTarget.dataset.guigeIndex, d = e.currentTarget.dataset.foodsizelist, n = [], s = [];
        for (var i in d) n[i] = "#666", s[i] = "#efefef";
        n[r] = "#ffbf21", s[r] = "#35343a", t.setData({
            foodSize: a,
            foodSizeList: d,
            bgColors: n,
            colors: s,
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
        r[d].foodList[n].foodSizeList.length > 0) for (var s in r[d].foodList[n].foodSizeList) r[d].foodList[n].foodSizeList[s].foodSizeCount = 0;
        t.setData((o = {
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
    calTotalPrice: function() {
        for (var e = t.data.carArray, a = 0, o = 0, r = 0, d = t.data.distriFeePrice, n = 0; n < e.length; n++) a += 1 * e[n].price, 
        o += 1 * e[n].receivablePrice, r += 1 * e[n].num;
        var s = a;
        t.setData({
            finalPrice: parseFloat(s).toFixed(2),
            totalReceivablePrice: parseFloat(o).toFixed(2),
            totalPrice: parseFloat(a).toFixed(2),
            totalCount: r,
            distriFeePrice: parseFloat(d).toFixed(2)
        });
    },
    bindBeizhu: function(e) {
        var a = e.detail.value;
        null == a || void 0 == a || "undefined" == a || "null" == a ? t.setData({
            dcBeizhu: ""
        }) : t.setData({
            dcBeizhu: a
        }), wx.setStorage({
            key: "dcBeizhu",
            data: a
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
            url: "queryOrder/queryOrder?orderId" + t.data.orderId
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
        t = this, wx.setStorage({
            key: "dc",
            data: 1
        }), wx.getStorage({
            key: "goods",
            success: function(e) {
                t.setData({
                    goods: e.data
                });
            }
        }), console.log(t.data.back), t.data.back && t.setData({
            back: !1
        }), wx.onSocketMessage(function(e) {
            console.log("===========接收到服务器信息=============="), console.log(e.data), a.getTkInfos(t, e), 
            a.playMusic(t, e);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    a.conSocket(e.data, r);
                }
            });
        }), wx.getStorage({
            key: "carArray",
            success: function(e) {
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
        }), wx.getStorage({
            key: "goods",
            success: function(e) {
                t.setData({
                    goods: e.data
                });
            }
        });
    },
    onHide: function() {
        t.setData({
            back: !0,
            twoma: !0
        }), console.log(t.data.back);
    },
    onUnload: function() {
        a.closeSock();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), t = this;
        var e = {
            scene: ""
        };
        setTimeout(function() {
            t.onLoad(e);
        }, 500);
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: t.data.shareTitle,
            desc: "",
            imageUrl: t.data.shareImgUrl,
            path: "/pages/index/index?storeId=" + t.data.storeId + "&companyId=" + t.data.companyId,
            success: function(e) {
                console.log("转发成功");
            },
            fail: function(e) {
                console.log("转发失败");
            }
        };
    },
    bindDesk: function(e) {
        t.setData({
            deskNum: e.detail.value,
            zuohao: e.detail.value
        }), wx.setStorage({
            key: "deskNum",
            data: e.detail.value
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
        var a = t.data.goods, o = 0, r = t.data.huodongHeight;
        if (e <= r) {
            for (var d = [], n = 0; n < t.data.goods.length; n++) d[n] = "none";
            t.setData({
                leftBorder: d,
                borderLeft: "4px solid #ffbf1f"
            });
        } else {
            var s = parseInt((e - r) / 84);
            for (var i in a) if (o += a[i].foodList.length, s < o && o > 0) {
                for (var c = [], l = 0; l < t.data.goods.length; l++) c[l] = "none";
                return c[i] = "4px solid #ffbf1f", void t.setData({
                    leftBorder: c,
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
                        payDesc: "￥" + a + "起送"
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
        t.setFoodInfo(e, 1);
    },
    minusCount: function(e) {
        t.setFoodInfo(e, -1);
    },
    changeFoodOnBack: function() {
        var e = t.data.goods;
        t.setData({
            goods: e
        });
    },
    setFoodInfo: function(e, a) {
        var o = e.currentTarget.dataset.foodId, r = e.currentTarget.dataset.typeId, d = e.currentTarget.dataset.foodSize, n = t.data.goods, s = n.find(function(e) {
            return e.id == r;
        }).foodList, i = s.find(function(e) {
            return o == e.id;
        });
        if (!i) for (var c in s) if (d = s[c].foodSizeList.find(function(e) {
            return e.id == o;
        })) {
            i = s.find(function(e) {
                return d.foodId == e.id;
            });
            break;
        }
        var l = void 0, u = 0, f = "", g = 0, p = 0;
        i.foodSizeList.length > 0 ? (l = i.foodSizeList.find(function(e) {
            return e.id == d.id;
        }), o = l.id, f = i.foodName + "(" + l.name + ")", l.foodSizeCount = 1 * l.foodSizeCount + a < 0 ? 0 : 1 * l.foodSizeCount + a, 
        p = l.foodSizeCount < 0 ? 0 : l.foodSizeCount, "0" == l.discountFlg ? (u = t.data.wmFlg ? l.priceW : l.priceT, 
        g = t.data.wmFlg ? l.priceW : l.priceT) : (u = t.data.wmFlg ? l.priceWZ : l.priceTZ, 
        g = t.data.wmFlg ? l.priceWZ : l.priceTZ)) : (f = i.foodName, i.foodCount = 1 * i.foodCount + a, 
        p = i.foodCount, g = t.data.wmFlg ? i.priceW : i.priceT, u = "0" == i.discountFlg ? t.data.wmFlg ? i.priceW : i.priceT : t.data.wmFlg ? i.priceWZ : i.priceTZ), 
        t.refreshShopingCar(o, u, p, f, r, g);
        var y = t.data.carArray;
        0 == i.foodCount && 0 == y.length ? (t.changeSubmit(!1), t.setData({
            goods: n,
            clickAble: !1,
            cartUrl: "../../../images/notShopping.png"
        })) : (t.changeSubmit(!0), t.setData({
            goods: n,
            clickAble: !0,
            cartUrl: "../../../images/shopping.png"
        }));
    },
    refreshShopingCar: function(e, a, o, r, d, n) {
        var s = t.data.carArray, i = void 0, c = s.find(function(t) {
            return t.foodId == e;
        });
        if (c) {
            c.foodId = e;
            var l = a * o, u = n * o;
            if (c.price = l.toFixed(2), c.receivablePrice = u.toFixed(2), c.num = o, c.name = r, 
            0 == o) {
                for (var f = 0, g = 0; g < s.length; g++) e == s[g].foodId && (f = g);
                s.splice(f, 1), 0 == s.length && (t.setCarShowSate(!1), t.setData({
                    cartUrl: "../../../images/notShopping.png"
                }));
            }
        } else o > 0 && (i = {
            foodId: e,
            price: a.toFixed(2),
            num: o,
            name: r,
            typeId: d,
            receivablePrice: n
        }, s.push(i));
        t.calTotalPrice(), t.setData({
            carArray: s
        });
    },
    sendOrderzuo: function() {
        var e = t.data.zuohao;
        if (console.log(e + "====zuohao====>"), t.data.dcFlg) {
            if (e = t.data.deskNum, console.log(e + "====zuohao====>"), "" == e || null == e || void 0 == e) return void t.setData({
                displayy: "block",
                titlename: "提示",
                carname: "请输入桌号"
            });
            t.setData({
                disp: "none",
                displays: "block"
            });
        }
    },
    chkOrder: function() {
        if (t.setData({
            display: "none"
        }), console.log("=====chkOrder开始======"), t.data.dcFlg || "D" == t.data.flag) {
            t.setData({
                disp: "block"
            });
            var e = t.data.zuohao;
            console.log(e + "=====>"), null == e || "" == e ? t.setData({
                disp: "block"
            }) : (console.log(e + "===zuohao===>"), t.setData({
                deskNum: e
            }), wx.setStorage({
                key: "deskNum",
                data: e
            }));
        } else t.sendOrder();
    },
    dianqx: function() {
        t.setData({
            displays: "none"
        }), t.setData({
            over: "auto"
        });
    },
    sendOrder: function(e, a) {
        if (a = t.data.zuohao, t.data.dcFlg) if (a) wx.getStorage({
            key: "userId",
            success: function(e) {
                var o = e.data;
                wx.getStorage({
                    key: "storeId",
                    success: function(e) {
                        var d = e.data;
                        wx.getStorage({
                            key: "orderType",
                            success: function(e) {
                                var n = e.data, s = [];
                                for (var i in t.data.goods) !function(e) {
                                    var a = t.data.goods[e].foodList;
                                    for (var o in a) !function(e) {
                                        if (a[e].foodSizeList.length > 0) for (var o in t.data.carArray) for (var r in a[e].foodSizeList) a[e].foodSizeList[r].id == t.data.carArray[o].foodId && a[e].foodSizeList[r].foodSizeCount > 0 && (s.find(function(t) {
                                            return t.id == a[e].id;
                                        }) || s.push(a[e])); else for (var d in t.data.carArray) a[e].id == t.data.carArray[d].foodId && s.push(a[e]);
                                    }(o);
                                }(i);
                                wx.request({
                                    url: r + "skordermodel/insertOrderInfo",
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        wechatUserId: o,
                                        storeId: d,
                                        orderTableId: a,
                                        orderReceivablePrice: t.data.totalReceivablePrice,
                                        orderRealPrice: t.data.totalPrice,
                                        orderType: e.data,
                                        foodList: JSON.stringify(s),
                                        id: t.data.orderId
                                    },
                                    success: function(e) {
                                        t.data.wmFlg ? wx.redirectTo({
                                            url: "../order/evalOrder/submitOrder/submitOrder?orderId=" + e.data.jsonEntity + "&orderType=" + n
                                        }) : wx.redirectTo({
                                            url: "../order/evalOrder/evalOrder?orderId=" + e.data.jsonEntity + "&orderType=" + n
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
        }); else if ("" == (a = t.data.deskNum) || null == a || void 0 == a) return void t.setData({
            displayy: "block",
            titlename: "提示",
            carname: "请输入桌号"
        });
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
    askFor: function() {
        "#ffbf21" == t.data.bcgcolor ? wx.getStorage({
            key: "userId",
            success: function(e) {
                wx.getStorage({
                    key: "storeId",
                    success: function(a) {
                        wx.getStorage({
                            key: "orderType",
                            success: function(o) {
                                wx.request({
                                    url: r + "skordermodel/selUnpaidOrder",
                                    data: {
                                        wechatUserId: e.data,
                                        orderType: o.data,
                                        storeId: a.data
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(e) {
                                        "操作成功！" == e.data.msg ? e.data.count > 0 && "N" != t.data.editType ? t.setData({
                                            display: "block",
                                            orderId: e.data.orderId
                                        }) : t.chkOrder() : t.setData({
                                            displayy: "block",
                                            titlename: "获取未支付订单操作失败",
                                            carname: "请联系后台管理员"
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }) : t.setData({
            displayy: "block",
            titlename: "提示",
            carname: "当前没有点餐，不可下单"
        });
    },
    resendIndex: function(e) {
        t.setData({
            dcFlg: !0,
            orderType: "D"
        }), wx.request({
            url: r + "skstoremodel/findCompanyByAppid",
            data: {
                xcxAppid: o.globalData.appId
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                wx.setStorage({
                    key: "companyInfo",
                    data: e.data
                }), wx.setStorage({
                    key: "companyId",
                    data: e.data.companyInfoId
                });
            }
        }), t.data.secondIn ? wx.getStorage({
            key: "userId",
            success: function(a) {
                var o = a.data;
                t.loadOthers(e, o);
            }
        }) : wx.getStorage({
            key: "code",
            success: function(a) {
                if ("" != a.data && null != a.data && void 0 != a.data && "undefined" != a.data && "null" != a.data) {
                    t.setData({
                        code: a.data
                    });
                    var d = a.data;
                    wx.getSetting({
                        success: function(a) {
                            if (a.authSetting["scope.userInfo"]) console.log("============已授权==============="), 
                            wx.getUserInfo({
                                success: function(a) {
                                    t.setData({
                                        userInfo: a.userInfo
                                    }), wx.setStorage({
                                        key: "userName",
                                        data: a.userInfo.nickName
                                    }), wx.request({
                                        url: r + "skmembermodel/getOpenidS",
                                        data: {
                                            code: d,
                                            AppID: o.globalData.appId,
                                            Secret: o.globalData.Secret,
                                            storeUuid: e,
                                            wxUserNickName: a.userInfo.nickName,
                                            headImgUrl: t.data.userInfo.avatarUrl
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(a) {
                                            var o = a.data.wechatUser.wechatUserId;
                                            if (null != a.data.openid && "" != a.data.openid) {
                                                var r = a.data.wechatUser.wechatUserStoreIdentity;
                                                wx.setStorage({
                                                    key: "StoreIdentity",
                                                    data: r
                                                }), wx.setStorage({
                                                    key: "session_key",
                                                    data: a.data.session_key
                                                }), wx.setStorage({
                                                    key: "openId",
                                                    data: a.data.openid
                                                }), wx.setStorage({
                                                    key: "userId",
                                                    data: o
                                                }), wx.setStorage({
                                                    key: "storeId",
                                                    data: e
                                                }), t.loadOthers(e, o);
                                            } else wx.showToast({
                                                title: "登录失败"
                                            });
                                        }
                                    });
                                },
                                fali: function(e) {}
                            }); else {
                                console.log("==============未授权=================");
                                var n = "";
                                n = t.data.storeInfo.storeInfoHeadImgUrl, wx.reLaunch({
                                    url: "../../welcome/accredit/accredit?data=" + d + "&store_uuid=" + e + "&imgurl=" + n + "&goDiancan=true&scene=" + t.data.scene,
                                    success: function(e) {},
                                    fail: function(e) {}
                                });
                            }
                        },
                        fail: function(e) {}
                    });
                } else wx.getStorage({
                    key: "userId",
                    success: function(a) {
                        if (a.data) {
                            var o = a.data;
                            t.loadOthers(e, o);
                        } else t.resendIndex(e);
                    },
                    fail: function() {
                        t.resendIndex(e);
                    }
                });
            },
            fail: function(a) {
                t.resendIndex(e);
            }
        });
    },
    loadOthers: function(e, o) {
        wx.setStorage({
            key: "code",
            data: ""
        }), t.setData({
            code: ""
        }), wx.getStorage({
            key: "connectedSocket",
            success: function(e) {
                e.data ? console.log("============已有socket不连接=============") : a.conSocket(o, r);
            }
        }), wx.getStorage({
            key: "companyId",
            success: function(a) {
                wx.request({
                    url: r + "skmembermodel/updatVipCardStore",
                    data: {
                        wechatUserId: o,
                        wechatUserStoreStoreInfoStoreId: e,
                        companyId: a.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {}
                }), wx.request({
                    url: r + "skmembermodel/updatEquitycardStore",
                    data: {
                        wxUserId: o,
                        storeId: e,
                        companyId: a.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        wx.request({
                            url: r + "skfoodmodel/selFoodActivityByStoreId",
                            data: {
                                storeId: e
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
                        }), wx.request({
                            url: r + "skfoodmodel/selFoodTypeAndFood",
                            data: {
                                storeId: e
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
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});