(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/tabBar/home/index" ], {
    3919: function(e, t, o) {
        o.r(t);
        var n = o("6a06"), a = o.n(n);
        for (var i in n) "default" !== i && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(i);
        t.default = a.a;
    },
    "5f9a": function(e, t, o) {
        o.r(t);
        var n = o("7b97"), a = o("3919");
        for (var i in a) "default" !== i && function(e) {
            o.d(t, e, function() {
                return a[e];
            });
        }(i);
        o("db69");
        var r = o("f0c5"), s = Object(r.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = s.exports;
    },
    "6a06": function(e, t, o) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o("b787"), a = o("6ce5"), i = o("58a5"), r = {
                components: {
                    uniIcon: (o("8456"), function() {
                        o.e("components/uni-icon").then(function() {
                            return resolve(o("cab8"));
                        }.bind(null, o)).catch(o.oe);
                    })
                },
                data: function() {
                    return {
                        indicatorDots: !1,
                        circular: !0,
                        seachkeywords: "",
                        autoplay: !0,
                        interval: 4e3,
                        duration: 1e3,
                        currentSwiperIndex: 0,
                        homeJson: [],
                        home: [],
                        renderImage: !1,
                        renderPage: !1,
                        productList: [],
                        showGoTop: !1,
                        ShareUserId: 0,
                        recommendProduct: []
                    };
                },
                onLoad: function(e) {
                    var t = this, o = this, n = (0, i.getStorageCache)("user_oauth");
                    if (n && (o.$store.commit("setOpenid", n.openId), o.$store.commit("setUnionId", n.unionId), 
                    o.$store.commit("setUserKey", n.userKey), o.$store.commit("setUserId", n.userId)), 
                    setTimeout(function() {
                        t.renderImage = !0;
                    }, 300), null != e.ShareUserId) {
                        this.ShareUserId = e.ShareUserId;
                        var a = (0, i.getStorageCache)("user_oauth");
                        (0, i.addLoginCache)("user_oauth", {
                            userId: a.userId,
                            userKey: a.userKey,
                            openId: a.openId,
                            unionId: a.unionId,
                            ShareUserId: e.ShareUserId
                        });
                    }
                },
                onShareAppMessage: function() {
                    var e = (0, i.getStorageCache)("user_oauth").userId;
                    return console.log(e), {
                        title: "汉欧国际带你品味一带一路沿线国家优品、优生活。",
                        path: "/pages/tabBar/home/index?ShareUserId=" + e
                    };
                },
                onShow: function() {
                    e.showLoading(), setTimeout(function() {
                        e.hideLoading();
                    }, 2e3), this.getHomeJsonConfig(), this.getRecommendProduct();
                },
                onPageScroll: function(e) {
                    e.scrollTop > 300 ? this.showGoTop = !0 : this.showGoTop = !1;
                },
                methods: {
                    getRecommendProduct: function() {
                        var e = this, t = {
                            type: 1
                        };
                        (0, a.GetRecommendProduct)(t, function(t) {
                            if (t.data && 200 == t.statusCode && t.data.Success) {
                                for (var o in t.data.Products) t.data.Products[o].MinSalePrice = t.data.Products[o].MinSalePrice.toFixed(2), 
                                t.data.Products[o].MarketPrice = t.data.Products[o].MarketPrice.toFixed(2);
                                e.recommendProduct = t.data.Products;
                            }
                        });
                    },
                    SlideRedirectProduct: function(t) {
                        e.navigateTo({
                            url: "/pages/product/index?pid=" + t
                        });
                    },
                    CountryProductList: function(t) {
                        e.navigateTo({
                            url: "/pages/product/productCategoryList?categoryId=" + t
                        });
                    },
                    openShop: function() {
                        e.navigateTo({
                            url: "/pages/openshop/index"
                        });
                    },
                    wxShare: function() {
                        var t = (0, i.getStorageCache)("user_oauth").userId;
                        e.share({
                            provider: "weixin",
                            scene: "WXSceneSession",
                            type: 5,
                            imageUrl: "https://coin.pupuxing.com/bussiness/201901141405092318900.png",
                            title: "汉欧国际带你品味一带一路沿线国家优品、优生活。",
                            miniProgram: {
                                id: n.SmallProgramParam.ID,
                                path: "/pages/tabBar/home/index?ShareUserId=" + t,
                                type: n.APPToMiniprogramType,
                                webUrl: n.HOST_URI
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
                    confirm: function(t) {
                        var o = t.detail.value;
                        if (!o) return this.$messageModel("提示", "请输入搜索关键词！"), !1;
                        this.seachkeywords = "", (0, i.getStorageCache)("keywords"), (0, i.addKeyWordsCache)("keywords", {
                            keywords: o,
                            cid: 0
                        }), e.switchTab({
                            url: "/pages/tabBar/products/index"
                        });
                    },
                    getHomeJsonConfig: function() {
                        var e = this, t = {
                            vs: 1
                        };
                        (0, a.GetHomeJson)(t, function(t) {
                            t.data && 200 == t.statusCode && (e.homeJson = t.data, setTimeout(function() {
                                e.renderPage = !0;
                            }, 300));
                        });
                        var o = {
                            pageno: 1,
                            pagesize: 100
                        };
                        (0, a.GetHome)(o, function(t) {
                            t.data && 200 == t.statusCode && (e.home = t.data, e.productList = t.data.Product);
                        });
                    },
                    swiperChange: function(e) {
                        this.currentSwiperIndex = e.detail.current;
                    },
                    inviteWxFriends: function() {
                        var t = (0, i.getStorageCache)("user_oauth");
                        if (!t || !t.userKey && !this.$store.state.hasLogin) return e.navigateTo({
                            url: "/pages/login/index"
                        }), !1;
                        e.share({
                            provider: "weixin",
                            scene: "WXSceneSession",
                            type: 0,
                            href: n.HOST_URI + "m-wap/home/RecruitPlan?shopType=1&uid=" + this.$store.state.userId,
                            title: "丝路优优店主和我一起来省钱吧",
                            summary: "购买开店礼包，即可注册丝路优优，高佣金轻松赚",
                            imageUrl: n.HOST_URI + "Content/webpage/app/shareicon.png",
                            success: function(t) {
                                e.showToast({
                                    title: "分享成功",
                                    icon: "success",
                                    duration: 1500
                                });
                            },
                            fail: function(e) {}
                        });
                    },
                    inviteWxTimeLine: function() {
                        var t = (0, i.getStorageCache)("user_oauth");
                        if (!t || !t.userKey && !this.$store.state.hasLogin) return e.navigateTo({
                            url: "/pages/login/index"
                        }), !1;
                        e.share({
                            provider: "weixin",
                            scene: "WXSenceTimeline",
                            type: 0,
                            href: n.HOST_URI + "m-wap/home/RecruitPlan?shopType=1&uid=" + this.$store.state.userId,
                            title: "丝路优优店主和我一起来省钱吧",
                            summary: "购买开店礼包，即可注册丝路优优，高佣金轻松赚",
                            imageUrl: n.HOST_URI + "Content/webpage/app/shareicon.png",
                            success: function(t) {
                                e.showToast({
                                    title: "分享成功",
                                    icon: "success",
                                    duration: 1500
                                });
                            },
                            fail: function(e) {}
                        });
                    },
                    inviteWxFriendsPoster: function() {
                        e.share({
                            provider: "weixin",
                            scene: "WXSceneSession",
                            type: 2,
                            imageUrl: this.inviteQrPoster,
                            success: function(t) {
                                e.showToast({
                                    title: "分享成功",
                                    icon: "success",
                                    duration: 1500
                                });
                            },
                            fail: function(e) {}
                        });
                    },
                    inviteWxTimeLinePoster: function() {
                        e.share({
                            provider: "weixin",
                            scene: "WXSenceTimeline",
                            type: 2,
                            imageUrl: this.inviteQrPoster,
                            success: function(t) {
                                e.showToast({
                                    title: "分享成功",
                                    icon: "success",
                                    duration: 1500
                                });
                            },
                            fail: function(e) {}
                        });
                    },
                    goPage: function(t) {
                        var o = t.currentTarget.dataset.url, r = t.currentTarget.dataset.title, s = t.currentTarget.dataset.pagetype;
                        if ("link" == s) e.navigateTo({
                            url: "/pages/webview/index?title=" + r + "&url=" + encodeURIComponent(o)
                        }); else if ("linkLogin" == s) {
                            var u = this, c = (0, i.getStorageCache)("user_oauth");
                            if (!c || !c.userKey && !this.$store.state.hasLogin) return e.navigateTo({
                                url: "/pages/login/index"
                            }), !1;
                            var d = {
                                userKey: this.$store.state.userKey,
                                sellerId: n.SellerId,
                                path: "pages/openshop/index",
                                couponCode: "0",
                                productId: "0",
                                shareUserId: (0, i.getStorageCache)("user_oauth").userId
                            };
                            (0, a.GetDownloadAppShareImg)(d, function(e) {
                                e.data && 200 == e.statusCode && (u.inviteQrPoster = e.data.Data);
                            }), this.showInvitePopup();
                        } else "couponLink" == s ? e.navigateTo({
                            url: "/pages/coupon/list"
                        }) : (console.log(o), e.navigateTo({
                            url: o
                        }));
                    },
                    gotoProductDetails: function(t) {
                        e.navigateTo({
                            url: "/pages/product/index?pid=" + t
                        });
                    },
                    viewMoreProducts: function() {
                        e.switchTab({
                            url: "/pages/tabBar/category/index"
                        });
                    },
                    gotoLimitTimeBuy: function() {
                        e.navigateTo({
                            url: "/pages/LimitTimeBuy/index"
                        });
                    }
                }
            };
            t.default = r;
        }).call(this, o("543d").default);
    },
    "7b97": function(e, t, o) {
        o.d(t, "b", function() {
            return n;
        }), o.d(t, "c", function() {
            return a;
        }), o.d(t, "a", function() {});
        var n = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    },
    "800d": function(e, t, o) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            o("414e"), t(o("66fd")), e(t(o("5f9a")).default);
        }).call(this, o("543d").createPage);
    },
    db69: function(e, t, o) {
        var n = o("f32e");
        o.n(n).a;
    },
    f32e: function(e, t, o) {}
}, [ [ "800d", "common/runtime", "common/vendor" ] ] ]);