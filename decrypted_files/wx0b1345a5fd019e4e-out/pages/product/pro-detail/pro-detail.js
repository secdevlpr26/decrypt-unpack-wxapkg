var t = require("../../../utils/wxParse/wxParse.js"), a = getApp(), e = "", o = "", i = "", r = [], n = !0, d = !0, c = !1, s = "", l = a.globalData.md5, u = 0, p = 0, h = 0, g = 0, m = 0, I = 0, f = [], y = [], v = "", b = "", D = "", T = "", w = "", x = "", P = "";

Page({
    data: {
        likeProductList: [],
        styleConfig: a.globalData.styleConfig,
        productId: "",
        proInfoDetail: {},
        price: 0,
        proImageNavIdx: 0,
        originalPrice: 0,
        activityPrice: 0,
        stock: 0,
        quantity: 0,
        showProAttr: !1,
        active: [],
        count: 1,
        modelName: "",
        modelImage: "",
        pic_url: "",
        showCurAttr: !0,
        collectStatus: 0,
        showCartPoint: !0,
        isPerson: a.globalData.isPerson,
        couponList: [],
        hiddenCouponList: !0,
        isStoreHidden: !0,
        activityType: "",
        groupList: [],
        groupOrderNo: "",
        hasVideo: !1,
        video: "",
        group: "",
        navIdx: 0,
        netWorkType: !1,
        commentList: [],
        totalPrice: "",
        currentPrice: "",
        seckillCount: {},
        seckillStart: "",
        memberType: "",
        loadCount: 1,
        attrBtnStatus: "1",
        buyType: "",
        projectType: a.globalData.projectInfo.projectType,
        showComment: a.globalData.showComment,
        hiddenMulType: !1,
        hideBox: !0,
        hidden: !0
    },
    onLoad: function(t) {
        var i = this, r = decodeURIComponent(t.scene);
        if (r && "undefined" != r ? i.setData({
            productId: r
        }) : i.setData({
            productId: t.productId
        }), e = a.globalData.projectInfo, o = a.globalData.customizeTabId, this.setData({
            showComment: !0
        }), t.parentId) wx.setStorageSync("parentId" + a.globalData.autoId, t.parentId), 
        i.loginVzSystem(t.parentId); else {
            var n = wx.getStorageSync("memberType" + a.globalData.autoId);
            this.setData({
                memberType: n
            }), i.loginVzSystem(t.parentId), i.initData();
        }
        wx.getNetworkType({
            success: function(t) {
                i.setData({
                    netWorkType: t.networkType
                });
            }
        }), this.getStoreHidden(), this.getPointsSet();
    },
    getPointsSet: function() {
        var t = this;
        a.request({
            url: a.globalData.comUrl + "tabs_getPointsSet.action",
            data: {
                projectId: e.appId
            },
            cache: !0,
            success: function(a) {
                var e = a.data, o = {
                    pointsSwitch: e.content.pointsSwitch,
                    autoAllocatePoints: e.content.autoAllocatePoints,
                    shopRateMoney: e.content.shopRateMoney,
                    shopRatePoint: e.content.shopRatePoint
                };
                t.pointsSet = a.data.content, t.setData({
                    pointsSet: o
                });
            }
        });
    },
    onShow: function() {
        c ? c = !1 : 1 != this.data.loadCount ? (clearInterval(s), this.initData()) : this.setData({
            loadCount: this.data.loadCount + 1
        });
    },
    onReady: function() {
        c ? c = !1 : 1 != this.data.loadCount ? (clearInterval(s), this.initData()) : this.setData({
            loadCount: this.data.loadCount + 1
        });
    },
    initData: function() {
        var t = this;
        t.getProDetail().then(function(a) {
            t.getCollectStatus(), t.getCommentList(), t.getCouponInfo(a.branchInfoId), t.getGroupList(a.id), 
            console.log(a.mulType), 2 == a.mulType ? t.setData({
                hiddenMulType: !0
            }) : t.setData({
                hiddenMulType: !1
            });
        });
    },
    loginVzSystem: function(t) {
        if (wx.canIUse("login")) {
            var e = this;
            wx.login({
                success: function(o) {
                    var i = o.code;
                    a.getOpenId(i).then(function(o) {
                        if (o && !(o.length < 1)) {
                            var i = {
                                appId: a.globalData.projectInfo.appId,
                                openId: o
                            };
                            t && (i.parentId = t), wx.request({
                                url: a.globalData.comUrl + "member_memberRegistration.action",
                                data: i,
                                success: function(o) {
                                    console.log(o.data);
                                    var i = a.getJsonData(o.data);
                                    i.parentId == t ? (wx.setStorageSync("parentId" + a.globalData.autoId, t), e.setData({
                                        parentId: t
                                    })) : wx.removeStorageSync("parentId" + a.globalData.autoId), wx.setStorageSync("memberId" + a.globalData.autoId, i.memberId), 
                                    i.isDistributor && "3" == i.type ? (wx.setStorageSync("memberType" + a.globalData.autoId, i.type), 
                                    e.setData({
                                        memberType: i.type
                                    })) : wx.setStorageSync("memberType" + a.globalData.autoId, ""), e.initData();
                                },
                                fail: function() {
                                    console.log("login failed");
                                }
                            });
                        }
                    });
                }
            });
        }
    },
    getCartData: function() {
        var t = this, e = wx.getStorageSync("cartData" + a.globalData.autoId);
        e && e.length > 0 ? t.setData({
            showCartPoint: !1
        }) : t.setData({
            showCartPoint: !0
        });
    },
    proImageNavTap: function(t) {
        this.setData({
            proImageNavIdx: t.currentTarget.dataset.idx
        });
    },
    getGroupList: function(t) {
        var o = this;
        wx.request({
            url: a.globalData.comUrl + "activityOrder_getGroupList.action",
            data: {
                appId: e.appId,
                produceId: t
            },
            success: function(t) {
                var e = a.getJsonData(t.data);
                "0" != e.code && (o.setData({
                    groupList: e
                }), s = setInterval(function() {
                    for (var t = !1, a = 0; a < o.data.groupList.length; a++) o.data.groupList[a].remainTime > 0 && (t = !0, 
                    o.data.groupList[a].remainTime--, o.data.groupList[a].timeFormat = o.secondToTime(o.data.groupList[a].remainTime));
                    o.setData({
                        groupList: o.data.groupList
                    }), t || o.onShow();
                }, 1e3));
            }
        });
    },
    secondToTime: function(t) {
        var a = Math.floor(t / 3600), e = Math.floor(t / 60 % 60), o = Math.floor(t % 60);
        return a < 10 && (a = "0" + a), e < 10 && (e = "0" + e), o < 10 && (o = "0" + o), 
        t = a + ":" + e + ":" + o;
    },
    seckillToTime: function(t) {
        var a = Math.floor(t / 3600 / 24), e = Math.floor(t / 3600 % 24), o = Math.floor(t / 60 % 60), i = Math.floor(t % 60);
        return e < 10 && (e = "0" + e), o < 10 && (o = "0" + o), i < 10 && (i = "0" + i), 
        {
            day: a,
            hours: e,
            minute: o,
            second: i
        };
    },
    getCouponInfo: function(t) {
        var e = this, o = a.getMemberId() || "";
        wx.request({
            url: a.globalData.comUrl + "act_getActivityList.action",
            data: {
                branchInfoId: t,
                customizetabId: a.getCustomizeId("Activity"),
                memberId: o
            },
            success: function(t) {
                var o = a.getJsonData(t.data);
                console.log(o);
                for (var i = [], r = 0; r < o.length; r++) {
                    var n = o[r];
                    n.beginTime = n.beginTime.replace(" ", "-"), n.endTime = n.endTime.replace(" ", "-");
                    var d = n.beginTime.split("-"), c = n.endTime.split("-");
                    d.length > 3 && c.length > 3 && (n.validDate = d[1] + "月" + d[2] + "日-" + c[1] + "月" + c[2] + "日"), 
                    void 0 != n.getCoupon && 1 != n.getCoupon || i.push(n);
                }
                e.setData({
                    couponList: i
                });
            },
            fail: function(t) {
                a.hint(t);
            }
        });
    },
    getProDetail: function() {
        var o = this;
        return r = [], f = [], y = [], v = "", b = "", D = "", T = "", o.setData({
            moduleId: b,
            modelName: T
        }), o.getCartData(), new Promise(function(i, r) {
            wx.request({
                url: a.globalData.comUrl + "tabs_getZXProductDetail.action",
                data: {
                    appId: e.appId,
                    productId: o.data.productId,
                    type: 1
                },
                success: function(e) {
                    var r = a.getJsonData(e.data);
                    if (console.log(r), 1 == r.status) wx.hideToast(), wx.showModal({
                        title: "该商品已下架！",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm && wx.navigateBack({
                                delta: 1
                            });
                        }
                    }); else {
                        t.wxParse("remark_detail", "html", r.remark, o, 10), r.productModelList[0] && (u = r.productModelList[0].price, 
                        p = r.productModelList[0].originalprice, h = r.productModelList[0].activityPrice, 
                        g = r.productModelList[0].stock), m = Math.abs(r.quantity);
                        for (var n = 0; n < r.attributeKeyVOList.length; n++) {
                            y[n] = [];
                            for (var d = 0; d < r.attributeKeyVOList[n].valueList.length; d++) y[n][d] = !1;
                        }
                        var c = new Date(), l = Date.parse(new Date(r.activityBeginTime)), I = Date.parse(new Date(r.activityEndTime));
                        if (parseInt((l - c) / 1e3) > 0) {
                            var f = parseInt((l - c) / 1e3);
                            s = setInterval(function() {
                                f--, o.setData({
                                    seckillCount: o.seckillToTime(f),
                                    seckillStart: !1
                                }), f < 1 && (clearInterval(s), o.refresh());
                            }, 1e3);
                        } else {
                            var v = parseInt((I - c) / 1e3);
                            s = setInterval(function() {
                                v--, o.setData({
                                    seckillCount: o.seckillToTime(v),
                                    seckillStart: !0
                                }), v < 1 && (clearInterval(s), o.refresh());
                            }, 1e3);
                        }
                        r.video && o.setData({
                            hasVideo: !0,
                            video: r.video
                        });
                        a.filterSpecialSymbol(r.remark);
                        r.productModelList.length > 0 && o.setData({
                            maxPoints: r.productModelList[0].maxPoints,
                            gotPoint: r.productModelList[0].gotPoint
                        }), o.setData({
                            proInfoDetail: r,
                            price: u,
                            originalPrice: p,
                            stock: g,
                            quantity: m,
                            active: y,
                            activityType: r.activityType,
                            activityPrice: h
                        }), o.getLikeProduct(r.bigCateGoryCode), i(o.data.proInfoDetail), wx.hideToast();
                    }
                }
            });
        });
    },
    getLikeProduct: function(t) {
        var e = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_getLikeProductByPage.action",
            data: {
                customizeTabId: o.LynxProductList,
                bigCateGoryCode: t,
                status: 2,
                actType: "",
                current: 1
            },
            success: function(t) {
                var o = a.getJsonData(t.data);
                console.log(o), e.setData({
                    likeProductList: o.pageList
                });
            }
        });
    },
    addCart: function(t) {
        console.log(t);
        var e = this;
        if (e.setData({
            buyType: t
        }), "" == b) return I = "51" == e.data.buyType || "52" == e.data.buyType || "3" == e.data.buyType || "6" == e.data.buyType && ("3" == e.data.memberType || e.data.parentId) ? this.data.activityPrice * this.data.count : "" != e.data.buyType || "5" != e.data.activityType && ("6" != e.data.activityType || "3" != e.data.memberType && !e.data.parentId) ? this.data.price * this.data.count : this.data.activityPrice * this.data.count, 
        void e.setData({
            totalPrice: I,
            showProAttr: !0
        });
        if (e.data.stock <= 0 || e.data.count > e.data.stock) this.setData({
            showProAttr: !0
        }), a.hint("该商品库存不足"); else {
            console.log(w);
            var o = {
                productId: e.data.proInfoDetail.id,
                productName: e.data.proInfoDetail.productName,
                productCode: e.data.proInfoDetail.productCode,
                count: e.data.count,
                pic_url: e.data.pic_url,
                price: e.data.price,
                moduleId: b,
                proAttrName: D,
                modelName: e.data.modelName,
                gotPoints: w,
                maxPoints: P,
                pricePerPoint: x,
                branchInfoId: e.data.proInfoDetail.branchInfoId,
                branchName: e.data.proInfoDetail.branchName,
                isSelected: !0
            };
            if (console.log(o), "3" == e.data.proInfoDetail.purpose) {
                var n = [], c = [], s = {};
                n.push(o), s.branchInfoId = o.branchInfoId, s.isSelected = !0, s.branchName = o.branchName, 
                s.pro = n, c.push(s), wx.setStorageSync("bookingDataList" + a.globalData.autoId, c), 
                wx.setStorageSync("bookingData" + a.globalData.autoId, n), i ? wx.navigateTo({
                    url: "../../order/order?proPrice=" + e.data.price * e.data.count + "&status=booking&roomType=" + e.data.proInfoDetail.roomType
                }) : (d = !0, wx.navigateTo({
                    url: "../../login/login"
                }));
            } else if ("51" == t || "52" == t || "3" == t || "6" == t) {
                o.price = e.data.activityPrice;
                var l = [], u = [], p = {};
                l.push(o), p.branchInfoId = o.branchInfoId, p.isSelected = !0, p.branchName = o.branchName, 
                p.groupOrderNo = "51" == t ? "0" : e.data.groupOrderNo, p.pro = l, u.push(p), wx.setStorageSync("groupProDataList" + a.globalData.autoId, u), 
                wx.setStorageSync("groupProData" + a.globalData.autoId, l), i ? 3 == e.data.proInfoDetail.activityType ? e.checkSeckillCount().then(function(o) {
                    console.log(o), 0 == o.data.code ? a.hint("活动已经结束") : 2 == o.data.code ? a.hint("产品已经退出该活动") : e.data.count + o.data.buyCount <= o.data.limitCount ? wx.navigateTo({
                        url: "../../order/order?proPrice=" + e.data.activityPrice * e.data.count + "&status=" + t + "&activityId=" + e.data.proInfoDetail.activityId
                    }) : wx.showModal({
                        title: "",
                        content: "当前活动最多可购买" + o.data.limitCount + "件，您已超出购买数量，是否以原价购买",
                        success: function(t) {
                            t.confirm ? e.originalPriceBuy() : t.cancel;
                        }
                    });
                }) : wx.navigateTo({
                    url: "../../order/order?proPrice=" + e.data.activityPrice * e.data.count + "&status=" + t + "&activityId=" + e.data.proInfoDetail.activityId
                }) : (d = !0, wx.navigateTo({
                    url: "../../login/login"
                }));
            } else {
                var h = wx.getStorageSync("cartData" + a.globalData.autoId);
                if (h) {
                    r = h;
                    for (var g = !1, m = 0; m < r.length; m++) if (r[m].moduleId == b) return g = !0, 
                    void wx.showModal({
                        title: "提示",
                        content: "该商品已在购物车中！",
                        confirmText: "去购物车",
                        success: function(t) {
                            t.confirm && (e.data.isPerson || "meirong" == e.data.projectType || "education" == e.data.projectType || "enterprise" == e.data.projectType ? wx.navigateTo({
                                url: a.globalData.pagesPath.cartPath
                            }) : wx.switchTab({
                                url: a.globalData.pagesPath.cartPath
                            }));
                        }
                    });
                    if (g && (r.push(o), "1" == t)) return void (e.data.isPerson || "meirong" == e.data.projectType || "education" == e.data.projectType || "enterprise" == e.data.projectType ? wx.navigateTo({
                        url: a.globalData.pagesPath.cartPath
                    }) : wx.switchTab({
                        url: a.globalData.pagesPath.cartPath
                    }));
                } else r = [];
                r.push(o), e.setData({
                    showCartPoint: !1
                });
                try {
                    wx.setStorageSync("cartData" + a.globalData.autoId, r), "1" == t ? setTimeout(function() {
                        e.data.isPerson || "meirong" == e.data.projectType || "education" == e.data.projectType || "enterprise" == e.data.projectType ? wx.navigateTo({
                            url: a.globalData.pagesPath.cartPath
                        }) : wx.switchTab({
                            url: a.globalData.pagesPath.cartPath
                        });
                    }, 500) : (e.setData({
                        showProAttr: !1
                    }), wx.showToast({
                        title: "添加成功",
                        icon: "success",
                        duration: 2e3
                    }));
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    a.hint("添加购物车失败");
                }
            }
        }
    },
    toBuy: function() {
        this.setData({
            attrBtnStatus: "1"
        }), "6" != this.data.activityType || "3" != this.data.memberType && !this.data.parentId ? this.addCart("1") : this.addCart("6");
    },
    toBuy1: function() {
        "" != b ? "6" != this.data.activityType || "3" != this.data.memberType && !this.data.parentId ? this.addCart("1") : this.addCart("6") : a.hint("请选择商品属性");
    },
    carttap: function() {
        var t = this;
        t.data.isPerson || "meirong" == t.data.projectType || "education" == t.data.projectType || "enterprise" == t.data.projectType ? wx.navigateTo({
            url: a.globalData.pagesPath.cartPath
        }) : wx.switchTab({
            url: a.globalData.pagesPath.cartPath
        });
    },
    toSeckill: function() {
        this.addCart("3");
    },
    checkSeckillCount: function() {
        var t = this;
        return new Promise(function(o, i) {
            wx.request({
                url: a.globalData.comUrl + "activityProduct_checkActivityStatus.action",
                data: {
                    appId: e.appId,
                    productId: t.data.productId,
                    activityId: t.data.proInfoDetail.activityId,
                    memberId: a.getMemberId()
                },
                success: function(t) {
                    o(t);
                }
            });
        });
    },
    originalPriceBuy: function() {
        var t = this, e = {
            productId: t.data.proInfoDetail.id,
            productName: t.data.proInfoDetail.productName,
            productCode: t.data.proInfoDetail.productCode,
            count: t.data.count,
            pic_url: t.data.pic_url,
            price: t.data.price,
            moduleId: b,
            proAttrName: D,
            modelName: t.data.modelName,
            branchInfoId: t.data.proInfoDetail.branchInfoId,
            branchName: t.data.proInfoDetail.branchName,
            isSelected: !0
        }, o = wx.getStorageSync("cartData" + a.globalData.autoId);
        if (console.log(o), 0 != o) {
            r = o, console.log(b);
            for (var i = !1, n = 0; n < r.length; n++) if (r[n].moduleId == b) return i = !0, 
            void wx.showModal({
                title: "提示",
                content: "该商品已在购物车中！",
                confirmText: "去购物车",
                success: function(e) {
                    e.confirm && (t.data.isPerson || "meirong" == t.data.projectType || "education" == t.data.projectType || "enterprise" == t.data.projectType ? wx.navigateTo({
                        url: a.globalData.pagesPath.cartPath
                    }) : wx.switchTab({
                        url: a.globalData.pagesPath.cartPath
                    }));
                }
            });
            if (!i) return r.push(e), wx.setStorageSync("cartData" + a.globalData.autoId, r), 
            void (t.data.isPerson || "meirong" == t.data.projectType || "education" == t.data.projectType || "enterprise" == t.data.projectType ? wx.navigateTo({
                url: a.globalData.pagesPath.cartPath
            }) : wx.switchTab({
                url: a.globalData.pagesPath.cartPath
            }));
        } else (r = []).push(e), wx.setStorageSync("cartData" + a.globalData.autoId, r), 
        setTimeout(function() {
            t.data.isPerson || "meirong" == t.data.projectType || "education" == t.data.projectType || "enterprise" == t.data.projectType ? wx.navigateTo({
                url: a.globalData.pagesPath.cartPath
            }) : wx.switchTab({
                url: a.globalData.pagesPath.cartPath
            });
        }, 500);
    },
    toCreateGroup: function() {
        var t = this;
        wx.request({
            url: a.globalData.comUrl + "activityProduct_checkActivityStatus.action",
            data: {
                appId: e.appId,
                productId: t.data.productId,
                activityId: t.data.proInfoDetail.activityId
            },
            success: function(e) {
                0 == e.data.code ? a.hint("活动已经结束") : 2 == e.data.code ? a.hint("产品已经退出该活动") : t.addCart("51");
            }
        });
    },
    addcarttap: function() {
        var t = this;
        console.log(t.data.hiddenMulType), this.setData({
            attrBtnStatus: "1"
        }), this.addCart("2");
    },
    addcarttap1: function() {
        "" != b ? this.addCart("2") : a.hint("请选择商品属性");
    },
    joinGroup: function(t) {
        this.setData({
            groupOrderNo: t.currentTarget.dataset.no
        }), this.addCart("52");
    },
    navtap: function(t) {
        this.setData({
            navIdx: t.currentTarget.dataset.idx
        });
    },
    commenttap: function() {
        if (a.getMemberId()) {
            var t = this;
            wx.navigateTo({
                url: "../comment/publish-comment/publish-comment?productId=" + t.data.productId
            });
        } else wx.navigateTo({
            url: "../../login/login"
        });
    },
    getModelInfo: function(t) {
        var a = this;
        if (!y[t.currentTarget.dataset.index][t.currentTarget.dataset.attrindex]) {
            for (var e = 0; e < y[t.currentTarget.dataset.index].length; e++) f[t.currentTarget.dataset.index] = [], 
            y[t.currentTarget.dataset.index][e] = !1;
            y[t.currentTarget.dataset.index][t.currentTarget.dataset.attrindex] = !t.currentTarget.dataset.status, 
            f[t.currentTarget.dataset.index] = t.currentTarget.dataset.typeid, v = f.join(";"), 
            "" != (b = a.getModuleId(v)) && a.setData({
                showCurAttr: !1
            }), a.setData({
                active: y
            });
        }
    },
    getModuleId: function(t) {
        for (var a = this, e = t.split(";"), o = a.data.proInfoDetail.productModelList, i = e[1] + ";" + e[0], r = 0; r < o.length; r++) if (o[r].valueIds == t || o[r].valueIds == i) {
            b = o[r].id, D = o[r].originalAttr, T = o[r].modelName, w = o[r].gotPoint, P = o[r].maxPoints, 
            x = o[r].pricePerPoint, a.setData({
                stock: o[r].stock,
                price: o[r].price,
                activityPrice: o[r].activityPrice,
                originalPrice: o[r].originalprice,
                modelName: o[r].modelName,
                modelImage: o[r].modelImage
            }), I = "3" == a.data.buyType || "51" == a.data.buyType || "52" == a.data.buyType || "6" == a.data.buyType && ("3" == a.data.memberType || a.data.parentId) ? this.data.activityPrice * this.data.count : "" != a.data.buyType || "5" != a.data.activityType && ("6" != a.data.activityType || "3" != a.data.memberType && !a.data.parentId) ? this.data.price * this.data.count : this.data.activityPrice * this.data.count, 
            this.setData({
                totalPrice: Number(I.toFixed(2))
            }), a.data.proInfoDetail.productImageVOList.length > 0 && a.setData({
                pic_url: a.data.proInfoDetail.productImageVOList[0].imageURL
            });
            break;
        }
        return b;
    },
    countAdd: function() {
        var t = this;
        this.data.count++, I = "3" == t.data.buyType || "51" == t.data.buyType || "52" == t.data.buyType || "6" == t.data.buyType && ("3" == t.data.memberType || t.data.parentId) ? this.data.activityPrice * this.data.count : "" != t.data.buyType || "5" != t.data.activityType && ("6" != t.data.activityType || "3" != t.data.memberType && !t.data.parentId) ? this.data.price * this.data.count : this.data.activityPrice * this.data.count, 
        this.setData({
            totalPrice: Number(I.toFixed(2)),
            count: this.data.count
        });
    },
    countSubtract: function() {
        var t = this;
        this.data.count > 1 && (this.data.count--, I = "3" == t.data.buyType || "51" == t.data.buyType || "52" == t.data.buyType || "6" == t.data.buyType && ("3" == t.data.memberType || t.data.parentId) ? this.data.activityPrice * this.data.count : "" != t.data.buyType || "5" != t.data.activityType && ("6" != t.data.activityType || "3" != t.data.memberType && !t.data.parentId) ? this.data.price * this.data.count : this.data.activityPrice * this.data.count, 
        this.setData({
            totalPrice: Number(I.toFixed(2)),
            count: this.data.count
        }));
    },
    bindCountInput: function(t) {
        var a = this;
        this.setData({
            count: t.detail.value
        }), I = "3" == a.data.buyType || "51" == a.data.buyType || "52" == a.data.buyType || "6" == a.data.buyType && ("3" == a.data.memberType || a.data.parentId) ? this.data.activityPrice * this.data.count : "" != a.data.buyType || "5" != a.data.activityType && ("6" != a.data.activityType || "3" != a.data.memberType && !a.data.parentId) ? this.data.price * this.data.count : this.data.activityPrice * this.data.count, 
        this.setData({
            totalPrice: Number(I.toFixed(2))
        });
    },
    changeProAttrFrame: function() {
        "" != b ? (this.setData({
            showProAttr: !this.data.showProAttr
        }), "" != this.data.buyType && this.addCart(this.data.buyType)) : a.hint("请选择商品属性");
    },
    toggleProAttrFrame: function() {
        I = 6 == this.data.activityType && 3 != this.data.memberType ? this.data.price : 0 == this.data.activityPrice ? this.data.price : this.data.activityPrice, 
        this.setData({
            totalPrice: I * this.data.count,
            showProAttr: !this.data.showProAttr,
            buyType: ""
        }), 0 == this.data.activityType && 1 == this.data.proInfoDetail.purpose && this.setData({
            attrBtnStatus: 2
        });
    },
    getCollectStatus: function() {
        if (i = a.getMemberId()) {
            var t = this;
            wx.request({
                url: a.globalData.comUrl + "tabs_checkCollection.action",
                data: {
                    appId: e.appId,
                    memberId: i,
                    id: t.data.proInfoDetail.id
                },
                success: function(e) {
                    var o = a.getJsonData(e.data);
                    t.setData({
                        collectStatus: o.isExisted
                    });
                },
                fail: function(t) {
                    a.hint();
                },
                complete: function() {
                    n = !0, d = !0;
                }
            });
        }
    },
    collect: function() {
        if (0 != n) {
            n = !1;
            var t = this;
            (i = a.getMemberId()) ? wx.request({
                url: a.globalData.comUrl + "tabs_addCollection.action",
                data: {
                    appId: e.appId,
                    type: 1,
                    name: t.data.proInfoDetail.productName,
                    objId: t.data.proInfoDetail.id,
                    memberId: i,
                    pic_url: t.data.proInfoDetail.productImageVOList[0].imageURL || "",
                    price: t.data.proInfoDetail.price
                },
                success: function(a) {
                    wx.showToast({
                        title: "收藏成功",
                        icon: "success",
                        duration: 2e3
                    }), t.getCollectStatus();
                },
                fail: function(t) {
                    a.hint("收藏失败");
                }
            }) : (n = !0, wx.navigateTo({
                url: "../../login/login"
            }));
        }
    },
    cancelCollect: function() {
        if (0 != d) {
            d = !1;
            var t = this;
            (i = a.getMemberId()) ? wx.request({
                url: a.globalData.comUrl + "tabs_delCollectionByObjId.action",
                data: {
                    id: t.data.proInfoDetail.id,
                    memberId: i
                },
                success: function(a) {
                    wx.showToast({
                        title: "已取消收藏",
                        icon: "success",
                        duration: 2e3
                    }), t.getCollectStatus();
                },
                fail: function(t) {
                    a.hint("取消收藏失败");
                }
            }) : (d = !0, wx.navigateTo({
                url: "../../login/login"
            }));
        }
    },
    makeCall: function() {
        var t = this.data.proInfoDetail.telNum;
        t && t.length > 1 ? wx.makePhoneCall({
            phoneNumber: t
        }) : a.hint("客服电话无效！");
    },
    getStoreHidden: function() {
        var t = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_getCustomizeTabsById.action",
            data: {
                appId: e.appId,
                customizeTabId: o.LynxAbout_Merchant
            },
            success: function(e) {
                var o = a.getJsonData(e.data);
                t.setData({
                    isStoreHidden: o.isDeleted
                });
            }
        });
    },
    toProDetail: function(t) {
        wx.navigateTo({
            url: "pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    beforehand: function() {
        var t = this;
        i ? wx.navigateTo({
            url: "../beforehand/beforehand?productName=" + t.data.proInfoDetail.productName + t.data.modelName + "&branchName=" + t.data.proInfoDetail.branchName + "&branchId=" + t.data.proInfoDetail.merchantId + "&roomType=" + t.data.proInfoDetail.roomType
        }) : (d = !0, wx.navigateTo({
            url: "../../login/login"
        }));
    },
    getPoint: function(t) {
        var e = new Date().valueOf(), o = "action=ShareProd&appId=" + a.globalData.projectInfo.appId + "&memberId=" + a.getMemberId() + "&time=" + e + "&key=DOTI#!81a335op77CYlo541f6eb5555m", i = l.hexMD5(o);
        wx.request({
            url: a.globalData.comUrl + "wallet_addMemberMPointRecord.action",
            data: {
                action: "ShareProd",
                appId: a.globalData.projectInfo.appId,
                memberId: a.getMemberId(),
                time: e,
                sign: i.toLocaleUpperCase()
            }
        });
    },
    onShareAppMessage: function() {
        var t = this;
        t.setData({
            showShareBox: !1
        });
        var e = "";
        return e = "3" == t.data.memberType && "6" == t.data.activityType ? "/pages/product/pro-detail/pro-detail?productId=" + t.data.proInfoDetail.id + "&parentId=" + a.getMemberId() : "/pages/product/pro-detail/pro-detail?productId=" + t.data.proInfoDetail.id, 
        t.pointsSet.pointsSwitch && t.getPoint(), {
            title: t.data.proInfoDetail.productName,
            path: e,
            success: function(t) {},
            fail: function(t) {}
        };
    },
    onShowShareBox: function() {
        var t = this;
        t.setData({
            showShareBox: !t.data.showShareBox
        });
    },
    showCouponList: function() {
        this.setData({
            hiddenCouponList: !this.data.hiddenCouponList
        });
    },
    getCoupon: function(t) {
        var e = this, o = a.getMemberId() || "";
        "" != o ? 0 != t.currentTarget.dataset.getcoupon && wx.request({
            url: a.globalData.comUrl + "act_addMemberActivity.action",
            data: {
                activityId: t.currentTarget.dataset.id,
                memberId: o,
                customizetabId: a.getCustomizeId("Activity")
            },
            success: function(t) {
                "0" != a.getJsonData(t.data).code ? (a.hint("领取成功"), e.setData({
                    hiddenCouponList: !0
                }), e.getCouponInfo(e.data.proInfoDetail.branchInfoId)) : a.hint("领取失败");
            },
            fail: function(t) {
                a.hint();
            }
        }) : wx.navigateTo({
            url: "../../login/login"
        });
    },
    getCommentList: function() {
        console.log(a.globalData.wxUserInfo);
        var t = this;
        wx.request({
            url: a.globalData.comUrl + "tabs_getCommentList.action",
            data: {
                current: 1,
                productId: t.data.productId
            },
            success: function(e) {
                var o = a.getJsonData(e.data);
                t.setData({
                    commentList: o.pageList
                });
            }
        });
    },
    hometap: function() {
        wx.switchTab({
            url: "../../index/index"
        });
    },
    refresh: function() {
        var t = this;
        wx.showLoading({
            title: "加载中..."
        }), t.setData({
            showShareBox: !1
        }), t.getProDetail().then(function(a) {
            wx.hideLoading(), t.getCollectStatus(), t.getCommentList(), t.getCouponInfo(a.branchInfoId), 
            t.getGroupList(a.id);
        });
    },
    seeAllComment: function() {
        var t = this;
        wx.navigateTo({
            url: "../comment/comment?productId=" + t.data.productId
        });
    },
    previewImage: function() {
        var t = this, a = [];
        if (t.data.modelImage.length > 0) for (var e = 0; e < t.data.proInfoDetail.productModelList.length; e++) {
            var o = t.data.proInfoDetail.productModelList[e];
            o.modelImage && o.modelImage.length > 0 && a.push(o.modelImage);
        } else a.push(t.data.proInfoDetail.productImageVOList[0].imageURL);
        c = !0, wx.previewImage({
            current: t.data.modelImage,
            urls: a
        });
    },
    showBox: function() {
        var t = this;
        this.setData({
            hideBox: !this.data.hideBox
        }), wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    canvasWidth: a.windowWidth,
                    canvasHeight: a.windowHeight + 64
                });
            }
        });
        var a = t.data.proInfoDetail.productImageVOList[0].imageURL.replace("http", "https");
        wx.getImageInfo({
            src: a,
            success: function(a) {
                var e = a.path;
                t.getQRCode().then(function(a) {
                    t.data.proInfoDetail.productName.length > 11 && (t.data.proInfoDetail.productName = t.data.proInfoDetail.productName.slice(0, 11) + "...");
                    var o = wx.createCanvasContext("shareImg");
                    if (o.setFillStyle("#fff"), o.fillRect(0, 0, t.data.canvasWidth, t.data.canvasHeight), 
                    o.drawImage(e, (t.data.canvasWidth - 270) / 2, 30, 270, 270), o.setTextAlign("center"), 
                    o.setFillStyle("#000"), o.setFontSize(22), o.fillText(t.data.proInfoDetail.productName, t.data.canvasWidth / 2, 340), 
                    1 == t.data.proInfoDetail.purpose || 3 == t.data.proInfoDetail.purpose) {
                        o.setTextAlign("center"), o.setFillStyle("#FF3939"), o.setFontSize(18);
                        var i = 0 == t.data.activityPrice ? t.data.price : t.data.activityPrice;
                        o.fillText("￥" + i, t.data.canvasWidth / 2, 376);
                    }
                    o.setTextAlign("center"), o.setFillStyle("#a4a4a4"), o.setFontSize(14), o.fillText("长按保存图片识别二维码", t.data.canvasWidth / 2, 410), 
                    o.drawImage(t.data.localQrCodeUrl, (t.data.canvasWidth - 190) / 2, 430, 190, 190), 
                    o.stroke(), o.draw(), setTimeout(function() {
                        wx.canvasToTempFilePath({
                            x: 0,
                            y: 0,
                            width: t.data.canvasWidth,
                            height: t.data.canvasHeight,
                            destWidth: t.data.canvasWidth,
                            destHeight: t.data.canvasHeight,
                            canvasId: "shareImg",
                            success: function(a) {
                                console.log(a.tempFilePath), t.setData({
                                    prurl: a.tempFilePath
                                }), wx.hideLoading();
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    }, 500);
                });
            },
            fail: function(t) {}
        });
    },
    getQRCode: function() {
        var t = this;
        return new Promise(function(e, o) {
            wx.request({
                url: a.globalData.paymentUrl + "/WechatAlipay/getWXAcode",
                data: {
                    page: "pages/product/pro-detail/pro-detail",
                    projectId: a.globalData.projectInfo.appId,
                    scene: t.data.productId
                },
                success: function(a) {
                    console.log(a), wx.getImageInfo({
                        src: a.data.content.miniQRCode,
                        success: function(a) {
                            var o = a.path;
                            t.setData({
                                localQrCodeUrl: o
                            }), e(t.data.localQrCodeUrl);
                        },
                        fail: function(t) {}
                    });
                },
                fail: function() {
                    a.hint();
                }
            });
        });
    },
    generateImage: function() {
        var t = this;
        "" == t.data.prurl || void 0 == t.data.prurl ? (wx.showLoading({
            title: "努力生成中..."
        }), setTimeout(function() {
            "" != t.data.prurl && void 0 != t.data.prurl && wx.previewImage({
                current: t.data.prurl,
                urls: [ t.data.prurl ]
            });
        }, 3e3)) : wx.previewImage({
            current: t.data.prurl,
            urls: [ t.data.prurl ]
        }), t.setData({
            hideBox: !t.data.hideBox
        });
    }
});