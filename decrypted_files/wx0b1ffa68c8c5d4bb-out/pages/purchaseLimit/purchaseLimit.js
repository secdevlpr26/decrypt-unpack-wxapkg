var t = getApp(), a = (require("../../components/utils/imgutil.js"), require("../../components/utils/util.js"), 
require("../shop/ShopUtil.js"), require("../../common.js"));

Page({
    url: !1,
    onShareAppMessage: function() {
        return t.shareAppMessage("/pages/purchaseLimit/purchaseLimit");
    },
    data: {
        baseUrl: t.globalData.siteBaseUrl,
        page: 1,
        reload: !0,
        showNoMore: !1,
        buttonClicked: !1,
        currentIndex: "",
        categoryStatus: "",
        interval: null,
        SecondKillTime: {
            hours: 0,
            minutes: 0,
            seconds: 0,
            remaining_time: 0
        },
        offsetDis: 0,
        categoryList: [],
        productListByCate: {},
        secKillProducts: []
    },
    onLoad: function() {
        var t = this;
        t.getScrollHeight(), t.loadBaseSecKillMsg(), a.setPopupFromShare();
    },
    onShow: function() {},
    getScrollHeight: function() {
        this.setData({
            scrollHeight: wx.getSystemInfoSync().windowHeight
        });
    },
    initBaseInfo: function() {
        var t = this;
        t.data.currentPinTuanId = t.data.pintuanCategory[0].id, t.pinTuanColByCate(t.data.currentPinTuanId);
        var a = t.data.pintuanCategory[0].remain_start_time, e = t.data.pintuanCategory[0].remain_end_time, r = t.data.pintuanCategory[0].status;
        2 == r ? (t.setData({
            categoryState: r
        }), clearInterval(t.data.interval), t.data.interval = setInterval(function() {
            --e <= 0 && (e = 0, t.loadBasePinTuanMsg(), clearInterval(t.data.interval)), t.forMatterTime(e);
        }, 1e3)) : 1 == r && (t.setData({
            categoryState: r
        }), clearInterval(t.data.interval), t.data.interval = setInterval(function() {
            --a <= 0 && (a = 0, t.loadBasePinTuanMsg(), clearInterval(t.data.interval)), t.forMatterTime(a);
        }, 1e3));
    },
    loadBaseSecKillMsg: function() {
        var a = this;
        t.sendRequest({
            url: "/index.php?c=front/WxApp/SecKill&a=getCategory",
            method: "GET",
            success: function(t) {
                if (200 != t.code) console.log("getSecKillCategory fail：" + t.msg); else {
                    for (var e = 0; e < t.data.categoryList.length; e++) t.data.categoryList[e].remain_start_time > Math.ceil(new Date().getTime() / 1e3) ? t.data.categoryList[e].status = 1 : t.data.categoryList[e].remain_start_time < Math.ceil(new Date().getTime() / 1e3) && t.data.categoryList[e].remain_end_time > Math.ceil(new Date().getTime() / 1e3) ? t.data.categoryList[e].status = 2 : t.data.categoryList[e].remain_end_time < Math.ceil(new Date().getTime() / 1e3) && (t.data.categoryList[e].status = 3);
                    a.setData({
                        categoryList: t.data.categoryList
                    }), a.getInitMsg();
                }
            },
            fail: function(t) {
                console.log("getSecKillCategory fail");
            }
        });
    },
    forMatterTime: function(t) {
        var a = parseInt(t / 60 / 60 % 24, 10), e = parseInt(t / 60 % 60, 10), r = parseInt(t % 60, 10);
        a = this.checkTime(a), e = this.checkTime(e), r = this.checkTime(r), this.setData({
            SecondKillTime: {
                hours: a,
                minutes: e,
                seconds: r
            }
        });
    },
    checkTime: function(t) {
        return t < 10 && (t = "0" + t), t;
    },
    hasCategoryPro: function(t) {
        for (var a = 0; a < this.data.secKillProducts.length; a++) if (this.data.secKillProducts[a].id == t) return !1;
        return !0;
    },
    moreSecKillPro: function() {
        var a = this, e = a.data.productListByCate.id, r = a.data.reload, i = Math.ceil(a.data.productListByCate.data.length / 20) + 1;
        r && (a.setData({
            reload: !1
        }), t.sendRequest({
            url: "/index.php?c=front/WxApp/SecKill&a=getProductsList&activeId=" + e + "&page=" + i,
            method: "GET",
            success: function(t) {
                if (4800 == t.code || 5806 == t.code) console.log("getSecKillColByCate fail：" + t.msg), 
                a.setData({
                    reload: !1,
                    showNoMore: !0
                }); else if (0 != t.data.result.length) {
                    for (i = 0; i < t.data.result.length; i++) {
                        t.data.result[i].status = a.data.categoryStatus;
                        var r = t.data.result[i];
                        0 == r.amount ? (r.remainPercent = "100%", r.progressLen = 208) : (r.remainPercent = Math.floor((r.productQuantity - r.amount) / r.productQuantity * 100) + "%", 
                        r.progressLen = (r.productQuantity - r.amount) / r.productQuantity * 208);
                    }
                    for (var i = 0; i < a.data.secKillProducts.length; i++) a.data.secKillProducts[i].id == e && (a.data.secKillProducts[i].data = a.data.secKillProducts[i].data.concat(t.data.result), 
                    a.setData({
                        secKillProducts: a.data.secKillProducts
                    }));
                    a.setData({
                        productListByCate: {
                            id: e,
                            data: a.data.productListByCate.data.concat(t.data.result)
                        },
                        reload: !0,
                        secKillProducts: a.data.secKillProducts
                    });
                }
            },
            fail: function(t) {
                console.log("getSecKillColByCate fail");
            }
        }));
    },
    changeCategorySite: function(a) {
        var e = a.currentTarget.dataset.index, r = this;
        if (clearInterval(r.data.interval), r.data.currentIndex != e) {
            r.setData({
                reload: !0
            });
            var i = 0, s = a.currentTarget.dataset.id;
            r.hasCategoryPro(s) && t.sendRequest({
                url: "/index.php?c=front/WxApp/SecKill&a=getProductsList&activeId=" + s + "&page=1",
                method: "GET",
                success: function(t) {
                    if (200 != t.code) console.log("getSecKillColByCate fail"); else {
                        for (i = 0; i < t.data.result.length; i++) {
                            var a = t.data.result[i];
                            0 == a.amount ? (a.remainPercent = "100%", a.progressLen = 208) : (a.remainPercent = Math.floor((a.productQuantity - a.amount) / a.productQuantity * 100) + "%", 
                            a.progressLen = (a.productQuantity - a.amount) / a.productQuantity * 208), a.status = r.data.categoryList[e].status;
                        }
                        r.data.secKillProducts.push({
                            id: s,
                            data: t.data.result
                        });
                        for (var i = 0; i < r.data.secKillProducts.length; i++) r.data.secKillProducts[i].id == s && r.setData({
                            productListByCate: {
                                id: s,
                                data: r.data.secKillProducts[i].data
                            }
                        });
                    }
                },
                fail: function(t) {
                    console.log("getsecKillColByCate fail");
                }
            });
            for (var o = 0; o < r.data.secKillProducts.length; o++) r.data.secKillProducts[o].id == s && r.setData({
                productListByCate: {
                    id: s,
                    data: r.data.secKillProducts[o].data
                }
            });
            t.sendRequest({
                url: "/index.php?c=front/WxApp/SecKill&a=getCategory",
                method: "GET",
                success: function(t) {
                    if (200 != t.code) console.log("getSecKillCategory fail：" + t.msg); else {
                        for (var a = 0; a < t.data.categoryList.length; a++) t.data.categoryList[a].remain_start_time > Math.ceil(new Date().getTime() / 1e3) ? t.data.categoryList[a].status = 1 : t.data.categoryList[a].remain_start_time < Math.ceil(new Date().getTime() / 1e3) && t.data.categoryList[a].remain_end_time > Math.ceil(new Date().getTime() / 1e3) ? t.data.categoryList[a].status = 2 : t.data.categoryList[a].remain_end_time < Math.ceil(new Date().getTime() / 1e3) && (t.data.categoryList[a].status = 3), 
                        e == a && (1 == t.data.categoryList[e].status ? i = t.data.categoryList[e].time : 2 == t.data.categoryList[e].status && (i = t.data.categoryList[e].remaining_time));
                        clearInterval(r.data.interval), 0 != i && (r.data.interval = setInterval(function() {
                            i--, r.forMatterTime(i), i <= 0 && (clearInterval(r.data.interval), r.loadBaseSecKillMsg());
                        }, 1e3));
                    }
                },
                fail: function(t) {
                    console.log("getPintuanCategory fail");
                }
            });
            var n;
            n = e >= 3 ? 170 * (e - 2) / 2 + 30 : 0, r.setData({
                offsetDis: n,
                currentIndex: e,
                categoryStatus: this.data.categoryList[e].status,
                showNoMore: !1
            });
        }
    },
    getInitMsg: function() {
        for (var a = 0, e = 0, r = this, i = !1, s = 0; s < r.data.categoryList.length; s++) {
            if (2 == r.data.categoryList[s].status) {
                i = !0;
                o = r.data.categoryList[a].remaining_time;
                e = r.data.categoryList[a].id, r.data.interval = setInterval(function() {
                    o--, r.forMatterTime(o), o <= 0 && (clearInterval(r.data.interval), r.loadBaseSecKillMsg());
                }, 1e3);
                break;
            }
            a++;
        }
        if (0 == i) {
            for (var a = 0, s = 0; s < r.data.categoryList.length; s++) {
                if (1 == r.data.categoryList[s].status) {
                    i = !0;
                    var o = r.data.categoryList[a].time;
                    e = r.data.categoryList[a].id, r.data.interval = setInterval(function() {
                        o--, r.forMatterTime(o), o <= 0 && (clearInterval(r.data.interval), r.loadBaseSecKillMsg());
                    }, 1e3);
                    break;
                }
                a++;
            }
            0 == i && (e = r.data.categoryList[0].id);
        }
        t.sendRequest({
            url: "/index.php?c=front/WxApp/SecKill&a=getProductsList&activeId=" + e + "&page=1",
            method: "GET",
            success: function(t) {
                if (200 != t.code) console.log("getSecKillColByCate fail"); else {
                    for (var i = 0; i < t.data.result.length; i++) {
                        var s = t.data.result[i];
                        0 == s.amount ? (s.remainPercent = "100%", s.progressLen = 208) : (s.remainPercent = Math.floor((s.productQuantity - s.amount) / s.productQuantity * 100) + "%", 
                        s.progressLen = (s.productQuantity - s.amount) / s.productQuantity * 208), s.status = r.data.categoryList[a].status;
                    }
                    var o;
                    o = a >= 3 ? 170 * (a - 2) / 2 + 30 : 0, r.setData({
                        productListByCate: {
                            id: e,
                            data: t.data.result
                        },
                        categoryStatus: r.data.categoryList[a].status,
                        offsetDis: o
                    }), r.data.secKillProducts.push({
                        id: e,
                        data: t.data.result
                    });
                    var n = r.data.productListByCate;
                    r.setData({
                        productListByCate: n,
                        currentIndex: a
                    });
                }
            },
            fail: function(t) {
                console.log("getSecKillColByCate fail");
            }
        });
    },
    goSecKillProDetail: function(t) {
        var a = this;
        a.setData({
            buttonClicked: !0
        }), setTimeout(function() {
            a.setData({
                buttonClicked: !1
            });
        }, 500), wx.navigateTo({
            url: "./productdetail?ms_id=" + t.currentTarget.dataset.msid + "&ms_proid=" + t.currentTarget.dataset.msproid + "&proid=" + t.currentTarget.dataset.proid
        });
    },
    goProductDetail: function(t) {
        console.log(t);
        var a = this;
        a.setData({
            buttonClicked: !0
        }), setTimeout(function() {
            a.setData({
                buttonClicked: !1
            });
        }, 500), wx.navigateTo({
            url: "../shop/productdetail?id=" + t.currentTarget.dataset.proid
        });
    }
});