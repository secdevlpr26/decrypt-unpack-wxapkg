(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/tabBar/me/index" ], {
    b4b7: function(e, t, r) {
        var n = r("dba3");
        r.n(n).a;
    },
    cac8: function(e, t, r) {
        (function(e) {
            function n(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), r.push.apply(r, n);
                }
                return r;
            }
            function a(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r("2f62"), i = r("8456"), s = (r("d61d"), r("b787")), u = r("58a5"), c = r("6ce5"), d = {
                data: function() {
                    return {
                        hasUserInfo: !1,
                        userInfo: {
                            avatarUrl: "",
                            nickName: "",
                            userName: ""
                        },
                        appVersion: s.APP_VERSION,
                        userOauth: {},
                        userBaseData: {},
                        gradeName: "",
                        memberOrderList: [],
                        isiosaudit: !0,
                        sessionfromString: "",
                        recommendProduct: []
                    };
                },
                components: {
                    uniBadge: function() {
                        r.e("components/uni-badge").then(function() {
                            return resolve(r("dc2c"));
                        }.bind(null, r)).catch(r.oe);
                    }
                },
                computed: function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? n(Object(r), !0).forEach(function(t) {
                            a(e, t, r[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        });
                    }
                    return e;
                }({}, (0, o.mapState)({
                    loginProvider: function(e) {
                        return e.loginProvider;
                    }
                })),
                onShow: function() {
                    this.loadUserInfo(), this.getHomeJsonConfig(), this.getRecommendProduct();
                },
                methods: {
                    gotoProductDetails: function(t) {
                        e.navigateTo({
                            url: "/pages/product/index?pid=" + t
                        });
                    },
                    getRecommendProduct: function() {
                        var e = this, t = {
                            type: 3
                        };
                        (0, c.GetRecommendProduct)(t, function(t) {
                            if (t.data && 200 == t.statusCode && t.data.Success) {
                                for (var r in t.data.Products) t.data.Products[r].MinSalePrice = t.data.Products[r].MinSalePrice.toFixed(2);
                                e.recommendProduct = t.data.Products;
                            }
                        });
                    },
                    getHomeJsonConfig: function() {
                        var e = this, t = {
                            vs: 1
                        };
                        (0, c.GetHomeJson)(t, function(t) {
                            t.data && 200 == t.statusCode && (e.isiosaudit = t.data.isiosaudit);
                        });
                    },
                    loadUserInfo: function() {
                        var t = (0, u.getStorageCache)("user_oauth");
                        if (t && (t.userKey || this.$store.state.hasLogin)) {
                            this.$store.commit("setUserKey", t.userKey), this.$store.commit("setUserId", t.userId);
                            var r = (0, u.getStorageCache)("user_info");
                            this.userInfo = r;
                            var n = {
                                nickName: this.userInfo.nickName,
                                avatarUrl: this.userInfo.avatarUrl
                            };
                            this.sessionfromString = JSON.stringify(n), this.toBindphonePage(), this.getMemberOrderList();
                        } else e.navigateTo({
                            url: "/pages/login/index"
                        });
                    },
                    getMemberOrderList: function() {
                        var e = this, t = {
                            userKey: this.$store.state.userKey,
                            orderStatus: 0,
                            pageNo: 1,
                            pageSize: 2
                        };
                        (0, c.GetOrders)(t, function(t) {
                            t.data && 200 == t.statusCode && t.data.Success && (e.memberOrderList = t.data);
                        });
                    },
                    getUserInfo: function() {
                        var t = this;
                        e.getUserInfo({
                            provider: this.loginProvider,
                            success: function(r) {
                                t.hasUserInfo = !0, t.userInfo = r.userInfo;
                                try {
                                    var n = e.getStorageSync("user_oauth");
                                    n && (t.userOauth = n.data, e.request({
                                        url: s.API.getUserBaseData + t.userOauth.UserKey,
                                        success: function(e) {
                                            t.userBaseData = e;
                                        }
                                    }));
                                } catch (r) {}
                            },
                            fail: function(t) {
                                e.navigateTo({
                                    url: "/pages/login/index?returnurl=pages/tabBar/home/index"
                                });
                            }
                        });
                    },
                    getUserInfoByCellphone: function() {
                        var t = this, r = {
                            userkey: this.$store.state.userKey
                        }, n = (0, i.geneRequestUrlParam)(r, s.AppParam.APP_KEY, s.AppParam.APP_SECRET);
                        e.request({
                            url: s.API.getUserBaseData + r.userkey + n,
                            success: function(e) {
                                t.userBaseData = e, t.userInfo = {
                                    avatarUrl: e.data.Photo,
                                    nickName: e.data.Nick,
                                    userName: e.data.UserName,
                                    cellphone: e.data.CellPhone
                                }, (0, u.addUserCache)("user_info", t.userInfo);
                            },
                            fail: function(e) {}
                        });
                    },
                    toBindphonePage: function() {
                        (0, u.getStorageCache)("user_info").cellphone || e.navigateTo({
                            url: "/pages/me/account/bindphone"
                        });
                    },
                    memberRefundOrders: function() {
                        e.navigateTo({
                            url: "/pages/me/orders/orderRefund"
                        });
                    },
                    viewMyOrders: function(t) {
                        e.navigateTo({
                            url: "/pages/me/orders/list?type=" + t
                        });
                    },
                    viewMyFavorites: function() {
                        e.navigateTo({
                            url: "/pages/me/favorites/index"
                        });
                    },
                    viewMyCoupons: function() {
                        e.navigateTo({
                            url: "/pages/me/coupons/list"
                        });
                    },
                    viewMyAddress: function() {
                        e.navigateTo({
                            url: "/pages/me/address/index"
                        });
                    },
                    viewMyAccount: function() {
                        e.navigateTo({
                            url: "/pages/me/account/index"
                        });
                    },
                    viewStoreKeeper: function() {
                        e.navigateTo({
                            url: "/pages/storekeeper/index"
                        });
                    },
                    viewEnterprise: function() {
                        e.navigateTo({
                            url: "/pages/enterprise/list"
                        });
                    },
                    viewHistoryVisite: function() {
                        e.navigateTo({
                            url: "/pages/product/historyList"
                        });
                    },
                    viewMerchantsJoin: function() {
                        e.navigateTo({
                            url: "/pages/webview/index?title=招商加盟&url=" + encodeURIComponent("https://s.wcd.im/v/2mkn7Z36/")
                        });
                    },
                    getMemberLevels: function() {
                        var e = this, t = {
                            userKey: this.$store.state.userKey
                        };
                        (0, c.getMemberLevel)(t, function(t) {
                            t.data && 200 == t.statusCode ? t.data.Success ? e.gradeName = t.data.GradeName : t.data.IsPromoter : e.$messageModel("提示", "获取用户等级异常");
                        });
                    },
                    goMeiQia: function(t) {
                        var r = t.currentTarget.dataset.link.trim(), n = t.currentTarget.dataset.title;
                        e.navigateTo({
                            url: "/pages/webview/index?title=" + n + "&url=" + encodeURIComponent(r)
                        });
                    }
                }
            };
            t.default = d;
        }).call(this, r("543d").default);
    },
    ce43: function(e, t, r) {
        r.r(t);
        var n = r("d12f"), a = r("d287");
        for (var o in a) "default" !== o && function(e) {
            r.d(t, e, function() {
                return a[e];
            });
        }(o);
        r("b4b7");
        var i = r("f0c5"), s = Object(i.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = s.exports;
    },
    d12f: function(e, t, r) {
        r.d(t, "b", function() {
            return n;
        }), r.d(t, "c", function() {
            return a;
        }), r.d(t, "a", function() {});
        var n = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    },
    d287: function(e, t, r) {
        r.r(t);
        var n = r("cac8"), a = r.n(n);
        for (var o in n) "default" !== o && function(e) {
            r.d(t, e, function() {
                return n[e];
            });
        }(o);
        t.default = a.a;
    },
    dba3: function(e, t, r) {},
    e3ae: function(e, t, r) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            r("414e"), t(r("66fd")), e(t(r("ce43")).default);
        }).call(this, r("543d").createPage);
    }
}, [ [ "e3ae", "common/runtime", "common/vendor" ] ] ]);