(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/tabBar/products/index" ], {
    "1c1d": function(e, t, o) {
        var r = o("4403");
        o.n(r).a;
    },
    "35e0": function(e, t, o) {
        o.d(t, "b", function() {
            return r;
        }), o.d(t, "c", function() {
            return a;
        }), o.d(t, "a", function() {});
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    },
    "36bb": function(e, t, o) {
        o.r(t);
        var r = o("cb3d"), a = o.n(r);
        for (var n in r) "default" !== n && function(e) {
            o.d(t, e, function() {
                return r[e];
            });
        }(n);
        t.default = a.a;
    },
    4403: function(e, t, o) {},
    "73e5": function(e, t, o) {
        o.r(t);
        var r = o("35e0"), a = o("36bb");
        for (var n in a) "default" !== n && function(e) {
            o.d(t, e, function() {
                return a[e];
            });
        }(n);
        o("1c1d");
        var i = o("f0c5"), d = Object(i.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        t.default = d.exports;
    },
    bd87: function(e, t, o) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            o("414e"), t(o("66fd")), e(t(o("73e5")).default);
        }).call(this, o("543d").createPage);
    },
    cb3d: function(e, t, o) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = o("b787"), a = o("6ce5"), n = o("58a5"), i = {
                components: {
                    uniIcon: function() {
                        o.e("components/uni-icon").then(function() {
                            return resolve(o("cab8"));
                        }.bind(null, o)).catch(o.oe);
                    }
                },
                data: function() {
                    return {
                        Products: [],
                        cid: 0,
                        orderKey: 1,
                        orderType: 2,
                        keywords: "",
                        renderImage: !1,
                        isBottom: !1,
                        gridView: !0,
                        pageNo: 1,
                        pageSize: 15,
                        showGoTop: !1,
                        ShareUserId: 0
                    };
                },
                onLoad: function(e) {
                    var t = this;
                    if (null != e.ShareUserId) {
                        this.ShareUserId = e.ShareUserId;
                        var o = (0, n.getStorageCache)("user_oauth");
                        (0, n.addLoginCache)("user_oauth", {
                            userId: o.userId,
                            userKey: o.userKey,
                            openId: o.openId,
                            unionId: o.unionId,
                            ShareUserId: e.ShareUserId
                        });
                    }
                    setTimeout(function() {
                        t.renderImage = !0;
                    }, 300);
                },
                onShareAppMessage: function() {
                    return {
                        title: "汉欧国际带你品味一带一路沿线国家优品、优生活。",
                        path: "/pages/search/index?ShareUserId=" + (0, n.getStorageCache)("user_oauth").userId
                    };
                },
                onShow: function() {
                    this.keywords = "", this.cid = 0;
                    var e = (0, n.getStorageCache)("keywords");
                    e && (this.keywords = e.keywords, this.cid = e.cid, (0, n.removeStorageCache)("keywords")), 
                    this.getCategoryProducts();
                },
                onPullDownRefresh: function() {
                    this.getCategoryProducts("refresh");
                },
                onReachBottom: function() {
                    this.pageSize = this.pageSize + 10, this.getCategoryProducts(), this.isBottom = !0;
                },
                onPageScroll: function(e) {
                    e.scrollTop > 300 ? this.showGoTop = !0 : this.showGoTop = !1;
                },
                methods: {
                    wxShare: function() {
                        var t = (0, n.getStorageCache)("user_oauth").userId;
                        e.share({
                            provider: "weixin",
                            scene: "WXSceneSession",
                            type: 5,
                            imageUrl: "https://coin.pupuxing.com/bussiness/201901141405092318900.png",
                            title: "汉欧国际带你品味一带一路沿线国家优品、优生活。",
                            miniProgram: {
                                id: r.SmallProgramParam.ID,
                                path: "/pages/search/index?ShareUserId=" + t,
                                type: r.APPToMiniprogramType,
                                webUrl: r.HOST_URI
                            },
                            success: function(e) {
                                console.log(JSON.stringify(e));
                            }
                        });
                    },
                    goTop: function() {
                        e.pageScrollTo({
                            scrollTop: 0,
                            duration: 500
                        });
                    },
                    viewCategory: function() {
                        e.navigateTo({
                            url: "/pages/product/category/index"
                        });
                    },
                    getCategoryProducts: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "add", o = this, r = {
                            cid: o.cid,
                            orderKey: 1,
                            orderType: 1,
                            keywords: o.keywords,
                            pageNo: 1,
                            pageSize: o.pageSize
                        };
                        (0, a.GetSearchProducts)(r, function(t) {
                            if (t.data && 200 == t.statusCode && t.data.Success) {
                                for (var r in t.data.Product) t.data.Product[r].SalePrice = t.data.Product[r].SalePrice.toFixed(2);
                                o.Products = t.data.Product, setTimeout(function() {
                                    e.stopPullDownRefresh();
                                }, 2e3);
                            }
                        }), "refresh" === t && (this.Products = []);
                    },
                    gotoProductDetails: function(t) {
                        e.navigateTo({
                            url: "/pages/product/index?pid=" + t
                        });
                    },
                    switchSorter: function(t) {
                        var o = this, r = t.currentTarget.dataset.orderkey, n = o.orderType, i = o.cid;
                        o.orderType = 1 == n ? 2 : 1, 1 == r && (o.orderType = 1), o.keywords && (i = 0);
                        var d = {
                            cid: i,
                            orderKey: r,
                            orderType: n,
                            keywords: o.keywords,
                            pageNo: 1,
                            pageSize: o.pageSize
                        };
                        (0, a.GetSearchProducts)(d, function(t) {
                            t.data && 200 == t.statusCode && t.data.Success && (o.Products = t.data.Product, 
                            o.orderKey = r, setTimeout(function() {
                                e.stopPullDownRefresh();
                            }, 2e3));
                        });
                    },
                    switchView: function() {
                        this.gridView = !this.gridView;
                    },
                    confirm: function(t) {
                        var o = t.detail.value, r = this;
                        if (r.keywords = o, !o) return r.$messageModel("提示", "请输入搜索关键词！"), !1;
                        r.cid = 0;
                        var n = {
                            cid: 0,
                            orderKey: 1,
                            orderType: 1,
                            keywords: o,
                            pageNo: 1,
                            pageSize: r.pageSize
                        };
                        (0, a.GetSearchProducts)(n, function(t) {
                            t.data && 200 == t.statusCode && t.data.Success && (r.Products = t.data.Product, 
                            setTimeout(function() {
                                e.stopPullDownRefresh();
                            }, 2e3));
                        });
                    }
                }
            };
            t.default = i;
        }).call(this, o("543d").default);
    }
}, [ [ "bd87", "common/runtime", "common/vendor" ] ] ]);