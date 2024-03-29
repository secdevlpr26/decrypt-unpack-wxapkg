var t = getApp(), a = require("../../components/utils/imgutil.js"), e = require("../../components/utils/util.js"), i = require("ShopUtil.js"), s = require("../../common.js");

Page({
    isloading: !1,
    url: !1,
    onShareAppMessage: function() {
        return t.shareAppMessage({
            url: this.url,
            title: this.data.productInfo.Name
        });
    },
    data: {
        backselectFlag: !1,
        currentTab: 0,
        bannerHeight: 150,
        hasPrice: !0,
        productImgs: [],
        count: 1,
        minusStatus: "disabled",
        flag: !1,
        flag2: !1,
        flag4: !1,
        flag3: !1,
        list: [],
        sortcol: "",
        sort: "",
        attrs: [],
        getPageFlag: !0,
        toFixed: !1,
        scrviewFlag: !1,
        buttonClicked: !1,
        videoshow: !1,
        baseUrl: t.globalData.cdnBaseUrl
    },
    onLoad: function(a) {
        var e = this;
        e.url = t.getPageUrl(e, a), t.registerGlobalFunctions(e), s.initCommonModules(), 
        this.setData({
            queryparams: a,
            scrviewFlag: !1
        }), i.loadCouponList(!0, function(t) {
            e.setData({
                list: t.list
            });
        });
    },
    onShow: function() {
        var t = this;
        this.loadCartNum(), this.loadProduct(), this.setData({
            selectedAttrNames: ""
        }), t.data.flag4 ? this.setData({
            scrviewFlag: !0
        }) : this.setData({
            scrviewFlag: !1
        });
    },
    onPageScroll: function() {},
    loadProduct: function() {
        var a = this;
        if (!a.isloading) {
            a.isloading = !0;
            var i = 0;
            a.data.queryparams.id && (i = a.data.queryparams.id), t.sendRequest({
                url: "/index.php?c=Front/WxApp/JsonApi&a=getProductInfo&id=" + i + "&updateHits=1",
                method: "GET",
                success: function(i) {
                    if (a.isloading = !1, i.success) {
                        for (var s = i.info.BigImages.split(","), n = 0; n < s.length; n++) s[n] = t.globalData.siteBaseUrl + "/comdata/" + i.info.SiteID + "/product/" + s[n];
                        0 == parseFloat(i.info.Price) && (i.info.Price = "面议", a.setData({
                            hasPrice: !1
                        })), 0 == parseFloat(i.info.FreightMoney) && (i.info.FreightMoney = "包邮"), i.info.Content = e.replaceRichHtml(i.info.Content) || "";
                        a.data.attrs;
                        for (var o = i.info.Skus2, r = null, n = 0; n < o.length; n++) r += parseInt(o[n].ProductQuantity);
                        0 == o.length ? a.setData({
                            ProductQuantity: i.info.ProductQuantity
                        }) : a.setData({
                            ProductQuantity: r
                        });
                        var u = i.info.ProDesc;
                        u = u.replace(/[\r\n]/g, ""), i.info.ProDesc = u, a.setData({
                            productInfo: i.info,
                            productImgs: s,
                            PriceShow: i.info.Price,
                            attrs: i.info.Attrs,
                            proImg: s[0],
                            collection: 1 == i.info.collection
                        });
                        var c = {};
                        a.setData({
                            selectedAttrs: c
                        });
                    } else ;
                },
                fail: function(t) {
                    a.isloading = !1;
                }
            });
        }
    },
    loadCartNum: function() {
        var a = this;
        t.sendRequest({
            url: "/index.php?c=Front/WxApp/ShopApi&a=getCartProNum",
            method: "GET",
            success: function(t) {
                a.isloading = !1, t.success ? a.setData({
                    cartnum: t.num
                }) : console.log("loadCartNum fail：" + t.msg);
            },
            fail: function(t) {
                a.isloading = !1, console.log("loadCartNum fail");
            }
        });
    },
    getCoupon: function(t) {
        var a = this;
        a.setData({
            buttonClicked: !0
        }), setTimeout(function() {
            a.setData({
                buttonClicked: !1
            });
        }, 500), i.getCoupon(t.currentTarget.dataset.couponid, function() {
            i.loadCouponList(!0, function(t) {
                a.setData({
                    list: t.list
                }), wx.showToast({
                    title: "领取成功",
                    icon: "success"
                });
            });
        });
    },
    onListScroll: function(t) {},
    findAttrValItemById: function(t) {
        for (var a = this.data.attrs, e = 0; e < a.length; e++) for (var i = 0; i < a[e].AttrVals.length; i++) if (t == a[e].AttrVals[i].AttrValID) return a[e].AttrVals[i];
        return null;
    },
    doAttrChange: function(a, e) {
        this.data.count;
        if (this.setData({
            count: 1,
            minusStatus: "disabled",
            canNoClick: ""
        }), this.data.noQuantityList) for (var i in this.data.noQuantityList) if (this.data.noQuantityList[i].AttrValID == e) return !1;
        var s = this.data.attrs, n = this.data.selectedAttrs;
        n[a] = e, n || (n = {});
        var o = [];
        for (var r in n) o.push(n[r]);
        if (o.length >= s.length - 1) {
            var u = t.cloneObj(o);
            u.length >= s.length && (u.sort(), u.pop());
            var c = this.getNoQuantityAttrList(this.data.productInfo.Skus2, u);
            for (var i in c) a != c[i].AttrKeyID && n[c[i].AttrKeyID] == c[i].AttrValID && (delete n[c[i].AttrKeyID], 
            o.pop());
            this.setData({
                noQuantityList: c
            });
        }
        var l = [];
        for (var r in n) {
            var g = this.findAttrValItemById(n[r]);
            if (g.AttrValBigImg) {
                var d = t.globalData.siteBaseUrl + g.AttrValBigImg;
                this.setData({
                    attrImg: d
                });
            }
            l.push(g.AttrValName);
        }
        this.setData({
            selectedAttrNames: l.join(" ; ")
        });
        var h = t.analyseProductSkusPrice(this.data.productInfo.Skus2, n);
        this.setData({
            selectedAttrs: n,
            SkuID: h.skuid
        }), o.length >= s.length && this.setData({
            PriceShow2: h.price,
            ProductQuantity: h.productQuantity
        });
    },
    onAttrChange: function(t) {
        var a = t.currentTarget.dataset.attrkeyid, e = t.currentTarget.dataset.attrvalid;
        this.doAttrChange(a, e);
    },
    getNoQuantityAttrList: function(t, a) {
        var e = [];
        for (var i in a) e.push(a[i]);
        var s = e.join(",");
        s = (s = s.replace(/(^,)|(,$)/g, "")).split(",").sort().join(",");
        for (var n = [], o = 0; o < t.length; o++) {
            var r = t[o].Path.replace(/(^,)|(,$)/g, "").split(",").sort().join(","), u = new RegExp("(," + s + ")$"), c = new RegExp("^(" + s + ",)");
            if ((u.test(r) || c.test(r)) && "0" == t[o].ProductQuantity) {
                var l = r.split(","), g = l[l.length - 1], d = this.findAttrValItemById(g);
                n.push(d);
            }
        }
        return n;
    },
    onBannerImgLoad: function(t) {
        var e = this, i = a.imageUtil(t);
        0 == t.currentTarget.dataset.index && e.setData({
            bannerHeight: i.imageHeight
        });
    },
    getRect: function() {
        var t = this;
        wx.createSelectorQuery().select(".particulars-text").boundingClientRect(function(a) {
            t.setData({
                particularsHeight: a.height
            });
        }).exec();
    },
    addToCart: function() {
        var t = this;
        if (this.data.getPageFlag) {
            this.setData({
                getPageFlag: !1
            });
            var a = t.data.cartnum;
            i.addProcuctToCart(this.data.productInfo.ProductID, this.data.SkuID, this.data.count, 0, function(e) {
                e && (t.isbuying = !1, setTimeout(function() {
                    wx.showToast({
                        title: "加入成功",
                        image: "../../images/shopcart.png"
                    }), t.setData({
                        flag2: !1,
                        flag: !1,
                        scrviewFlag: !1
                    });
                }, 500), setTimeout(function() {
                    t.setData({
                        getPageFlag: !0
                    });
                }, 600), a += t.data.count, t.setData({
                    cartnum: a
                }));
            }, function(a) {
                a.success || t.setData({
                    getPageFlag: !0
                });
            });
        }
    },
    navbarTap: function(t) {
        this.setData({
            currentTab: t.currentTarget.dataset.idx
        });
    },
    buyNow: function() {
        var t = this;
        this.data.getPageFlag && (this.setData({
            getPageFlag: !1
        }), setTimeout(function() {
            t.setData({
                scrviewFlag: !1
            });
        }, 500), t.data.productInfo.Skus.length > 0 ? void 0 == this.data.SkuID || 0 == this.data.SkuID ? (setTimeout(function() {
            wx.showToast({
                title: "请选择规格",
                image: "../../images/choose-type_21.png",
                duration: 1e3
            });
        }, 500), t.setData({
            getPageFlag: !0
        })) : i.addProcuctToCart(this.data.productInfo.ProductID, this.data.SkuID, this.data.count, 1, function(a) {
            t.setData({
                flag2: !1,
                flag: !1,
                flag3: !1
            }), wx.navigateTo({
                url: "square?pkeys=" + a.pkey,
                success: function() {
                    setTimeout(function() {
                        t.setData({
                            getPageFlag: !0
                        });
                    }, 100);
                }
            });
        }, function(a) {
            a.success || t.setData({
                getPageFlag: !0
            });
        }) : 0 == t.data.ProductQuantity ? (setTimeout(function() {
            wx.showToast({
                title: "库存不足",
                image: "../../images/choose-type_21.png",
                duration: 1e3
            });
        }, 500), t.setData({
            getPageFlag: !0
        })) : i.addProcuctToCart(this.data.productInfo.ProductID, this.data.SkuID, this.data.count, 1, function(a) {
            t.setData({
                flag2: !1,
                flag: !1,
                flag3: !1
            }), wx.navigateTo({
                url: "square?pkeys=" + a.pkey,
                success: function() {
                    setTimeout(function() {
                        t.setData({
                            getPageFlag: !0
                        });
                    }, 100);
                }
            });
        }, function(a) {
            a.success || t.setData({
                getPageFlag: !0
            });
        }));
    },
    decrease: function() {
        var t = this.data.count;
        t > 1 && (t--, this.setData({
            canNoClick: ""
        }));
        var a = t <= 1 ? "disabled" : "normal";
        this.setData({
            count: t,
            minusStatus: a
        });
    },
    increase: function() {
        this.data.selectedAttrs;
        var a = e <= 1 ? "disabled" : "normal", e = this.data.count, i = this.data.ProductQuantity, s = this.data.productInfo.BuyLimit <= 0 ? i + 1 : this.data.productInfo.BuyLimit, n = s > i ? i : s;
        if (this.data.attrs.length > 0) if (this.data.SkuID) if (e < n) ++e == n && this.setData({
            canNoClick: "disabled"
        }), this.setData({
            count: e,
            minusStatus: a
        }); else {
            this.setData({
                count: e,
                canNoClick: "disabled"
            });
            var o;
            e > s ? o = "超出限购数量！" : e > i && (o = "超出商品库存量！"), t.showModal({
                title: "提示",
                content: o,
                showCancel: !1
            });
        } else wx.showModal({
            title: "提示",
            content: "请选择规格",
            showCancel: !1
        }); else e < n ? (++e == n && this.setData({
            canNoClick: "disabled"
        }), this.setData({
            count: e,
            minusStatus: a
        })) : this.setData({
            count: e,
            canNoClick: "disabled"
        });
    },
    bindManual: function(t) {
        var a = t.detail.value;
        this.setData({
            count: a
        });
    },
    choose: function() {
        this.setData({
            flag: !0,
            scrviewFlag: !0
        });
    },
    close: function() {
        this.setData({
            flag: !1,
            flag2: !1,
            flag3: !1,
            flag4: !1,
            scrviewFlag: !1
        });
    },
    discount: function() {
        this.setData({
            flag4: !0,
            scrviewFlag: !0
        });
    },
    addToshopCart: function() {
        this.setData({
            flag: !0,
            flag2: !0,
            scrviewFlag: !0
        });
    },
    shopCart: function() {
        wx.navigateTo({
            url: "shopcart?one=1"
        });
    },
    AddCollection: function(t) {
        var a = this;
        if (this.data.getPageFlag) {
            this.setData({
                getPageFlag: !1
            });
            var e = t.currentTarget.dataset.proid;
            i.AddCollection(e, function(t) {
                a.setData({
                    getPageFlag: !0
                });
            });
        }
    },
    CanleCollection: function(t) {
        var a = this;
        if (this.data.getPageFlag) {
            this.setData({
                getPageFlag: !1
            });
            var e = t.currentTarget.dataset.proid;
            i.CancelCollection(e, function(t) {
                a.setData({
                    getPageFlag: !0
                });
            });
        }
    },
    videobofang: function() {
        this.setData({
            videoshow: !0
        });
    },
    videoguanbi: function() {
        this.setData({
            videoshow: !1
        });
    },
    buyNow2: function() {
        this.setData({
            flag: !0,
            flag3: !0,
            scrviewFlag: !0
        });
    },
    backToHome: function() {
        wx.reLaunch({
            url: "index"
        });
    }
});