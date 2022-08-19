var t = getApp(), a = "", e = "", o = "", i = [], r = !0, n = !0, d = !1, c = "", s = 0, u = 0, l = 0, p = 0, h = 0, g = 0, m = [], I = [], f = "", y = "", v = "", T = "";

Page({
    data: {
        likeProductList: [],
        styleConfig: t.globalData.styleConfig,
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
        isPerson: t.globalData.isPerson,
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
        projectType: t.globalData.projectInfo.projectType,
        showComment: !1
    },
    onLoad: function(o) {
        var i = this;
        if (a = t.globalData.projectInfo, e = t.globalData.customizeTabId, this.setData({
            productId: o.productId,
            showComment: t.globalData.showComment
        }), o.parentId) wx.setStorageSync("parentId" + t.globalData.autoId, o.parentId), 
        i.loginVzSystem(o.parentId); else {
            var r = wx.getStorageSync("memberType" + t.globalData.autoId);
            this.setData({
                memberType: r
            }), i.loginVzSystem(o.parentId), i.initData();
        }
        wx.getNetworkType({
            success: function(t) {
                i.setData({
                    netWorkType: t.networkType
                });
            }
        }), this.getStoreHidden();
    },
    onShow: function() {
        d ? d = !1 : 1 != this.data.loadCount ? (clearInterval(c), this.initData()) : this.setData({
            loadCount: this.data.loadCount + 1
        });
    },
    initData: function() {
        var t = this;
        t.getProDetail().then(function(a) {
            t.getCollectStatus(), t.getCommentList(), t.getCouponInfo(a.branchInfoId), t.getGroupList(a.id);
        });
    },
    loginVzSystem: function(a) {
        if (wx.canIUse("login")) {
            var e = this;
            wx.login({
                success: function(o) {
                    var i = o.code;
                    t.getOpenId(i).then(function(o) {
                        if (o && !(o.length < 1)) {
                            var i = {
                                appId: t.globalData.projectInfo.appId,
                                openId: o
                            };
                            a && (i.parentId = a), wx.request({
                                url: t.globalData.comUrl + "member_memberRegistration.action",
                                data: i,
                                success: function(o) {
                                    console.log(o.data);
                                    var i = t.getJsonData(o.data);
                                    i.parentId == a ? (wx.setStorageSync("parentId" + t.globalData.autoId, a), e.setData({
                                        parentId: a
                                    })) : wx.removeStorageSync("parentId" + t.globalData.autoId), wx.setStorageSync("memberId" + t.globalData.autoId, i.memberId), 
                                    i.isDistributor && "3" == i.type && (wx.setStorageSync("memberType" + t.globalData.autoId, i.type), 
                                    e.setData({
                                        memberType: i.type
                                    })), e.initData();
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
        var a = this, e = wx.getStorageSync("cartData" + t.globalData.autoId);
        e && e.length > 0 ? a.setData({
            showCartPoint: !1
        }) : a.setData({
            showCartPoint: !0
        });
    },
    proImageNavTap: function(t) {
        this.setData({
            proImageNavIdx: t.currentTarget.dataset.idx
        });
    },
    getGroupList: function(e) {
        var o = this;
        wx.request({
            url: t.globalData.comUrl + "activityOrder_getGroupList.action",
            data: {
                appId: a.appId,
                produceId: e
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                "0" != e.code && (o.setData({
                    groupList: e
                }), c = setInterval(function() {
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
    getCouponInfo: function(a) {
        var e = this, o = t.getMemberId() || "";
        wx.request({
            url: t.globalData.comUrl + "act_getActivityList.action",
            data: {
                branchInfoId: a,
                customizetabId: t.getCustomizeId("Activity"),
                memberId: o
            },
            success: function(a) {
                var o = t.getJsonData(a.data);
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
            fail: function(a) {
                t.hint(a);
            }
        });
    },
    getProDetail: function() {
        var e = this;
        return i = [], m = [], I = [], f = "", y = "", v = "", T = "", e.setData({
            moduleId: y,
            modelName: T
        }), e.getCartData(), new Promise(function(o, i) {
            wx.request({
                url: t.globalData.comUrl + "tabs_getZXProductDetail.action",
                data: {
                    appId: a.appId,
                    productId: e.data.productId,
                    type: 1
                },
                success: function(a) {
                    var i = t.getJsonData(a.data);
                    if (1 == i.status) wx.hideToast(), wx.showModal({
                        title: "该商品已下架！",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm && wx.navigateBack({
                                delta: 1
                            });
                        }
                    }); else {
                        i.productModelList[0] && (s = i.productModelList[0].price, u = i.productModelList[0].originalprice, 
                        l = i.productModelList[0].activityPrice, p = i.productModelList[0].stock), h = Math.abs(i.quantity);
                        for (var r = 0; r < i.attributeKeyVOList.length; r++) {
                            I[r] = [];
                            for (var n = 0; n < i.attributeKeyVOList[r].valueList.length; n++) I[r][n] = !1;
                        }
                        var d = new Date(), g = Date.parse(new Date(i.activityBeginTime)), m = Date.parse(new Date(i.activityEndTime));
                        if (parseInt((g - d) / 1e3) > 0) {
                            var f = parseInt((g - d) / 1e3);
                            c = setInterval(function() {
                                f--, e.setData({
                                    seckillCount: e.seckillToTime(f),
                                    seckillStart: !1
                                }), f < 1 && (clearInterval(c), e.refresh());
                            }, 1e3);
                        } else {
                            var y = parseInt((m - d) / 1e3);
                            c = setInterval(function() {
                                y--, e.setData({
                                    seckillCount: e.seckillToTime(y),
                                    seckillStart: !0
                                }), y < 1 && (clearInterval(c), e.refresh());
                            }, 1e3);
                        }
                        i.video && e.setData({
                            hasVideo: !0,
                            video: i.video
                        });
                        var v = t.filterSpecialSymbol(i.remark);
                        e.setData({
                            proInfoDetail: i,
                            price: s,
                            originalPrice: u,
                            stock: p,
                            quantity: h,
                            active: I,
                            activityType: i.activityType,
                            activityPrice: l,
                            remark: v
                        }), e.getLikeProduct(i.bigCateGoryCode), o(e.data.proInfoDetail), wx.hideToast();
                    }
                }
            });
        });
    },
    getLikeProduct: function(a) {
        var o = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getLikeProductByPage.action",
            data: {
                customizeTabId: e.LynxProductList,
                bigCateGoryCode: a,
                status: 2,
                actType: "",
                current: 1
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                console.log(e), o.setData({
                    likeProductList: e.pageList
                });
            }
        });
    },
    addCart: function(a) {
        console.log(a);
        var e = this;
        if (e.setData({
            buyType: a
        }), "" == y) return g = "51" == e.data.buyType || "52" == e.data.buyType || "6" == e.data.buyType && ("3" == e.data.memberType || e.data.parentId) ? this.data.activityPrice * this.data.count : "" != e.data.buyType || "5" != e.data.activityType && ("6" != e.data.activityType || "3" != e.data.memberType && !e.data.parentId) ? this.data.price * this.data.count : this.data.activityPrice * this.data.count, 
        void e.setData({
            totalPrice: g,
            showProAttr: !0
        });
        if (e.data.stock <= 0 || e.data.count > e.data.stock) this.setData({
            showProAttr: !0
        }), t.hint("该商品库存不足"); else {
            var r = {
                productId: e.data.proInfoDetail.id,
                productName: e.data.proInfoDetail.productName,
                productCode: e.data.proInfoDetail.productCode,
                count: e.data.count,
                pic_url: e.data.pic_url,
                price: e.data.price,
                moduleId: y,
                proAttrName: v,
                modelName: e.data.modelName,
                branchInfoId: e.data.proInfoDetail.branchInfoId,
                branchName: e.data.proInfoDetail.branchName,
                isSelected: !0
            };
            if ("51" != a && "52" != a && "3" != a && "6" != a || (r.price = e.data.activityPrice), 
            "3" == e.data.proInfoDetail.purpose) {
                var d = [], c = [], s = {};
                d.push(r), s.branchInfoId = r.branchInfoId, s.isSelected = !0, s.branchName = r.branchName, 
                s.pro = d, c.push(s), wx.setStorageSync("bookingDataList" + t.globalData.autoId, c), 
                wx.setStorageSync("bookingData" + t.globalData.autoId, d), o ? wx.navigateTo({
                    url: "../../order/order?proPrice=" + e.data.price * e.data.count + "&status=booking"
                }) : (n = !0, wx.navigateTo({
                    url: "../../login/login"
                }));
            } else if ("51" == a || "52" == a || "3" == a || "6" == a) {
                var u = [], l = [], p = {};
                u.push(r), p.branchInfoId = r.branchInfoId, p.isSelected = !0, p.branchName = r.branchName, 
                p.groupOrderNo = "51" == a ? "0" : e.data.groupOrderNo, p.pro = u, l.push(p), wx.setStorageSync("groupProDataList" + t.globalData.autoId, l), 
                wx.setStorageSync("groupProData" + t.globalData.autoId, u), o ? 3 == e.data.proInfoDetail.activityType ? e.checkSeckillCount().then(function(o) {
                    console.log(o), 0 == o.data.code ? t.hint("活动已经结束") : 2 == o.data.code ? t.hint("产品已经退出该活动") : e.data.count + o.data.buyCount <= o.data.limitCount ? wx.navigateTo({
                        url: "../../order/order?proPrice=" + e.data.activityPrice * e.data.count + "&status=" + a + "&activityId=" + e.data.proInfoDetail.activityId
                    }) : wx.showModal({
                        title: "",
                        content: "当前活动最多可购买" + o.data.limitCount + "件，您已超出购买数量，是否以原价购买",
                        success: function(t) {
                            t.confirm ? e.originalPriceBuy() : t.cancel;
                        }
                    });
                }) : wx.navigateTo({
                    url: "../../order/order?proPrice=" + e.data.activityPrice * e.data.count + "&status=" + a + "&activityId=" + e.data.proInfoDetail.activityId
                }) : (n = !0, wx.navigateTo({
                    url: "../../login/login"
                }));
            } else {
                var h = wx.getStorageSync("cartData" + t.globalData.autoId);
                if (h) {
                    i = h;
                    for (var m = !1, I = 0; I < i.length; I++) if (i[I].moduleId == y) return m = !0, 
                    void wx.showModal({
                        title: "提示",
                        content: "该商品已在购物车中！",
                        confirmText: "去购物车",
                        success: function(t) {
                            t.confirm && (e.data.isPerson || "meirong" == e.data.projectType || "education" == e.data.projectType || "enterprise" == e.data.projectType ? wx.navigateTo({
                                url: "../../self/cart/cart"
                            }) : wx.switchTab({
                                url: "../../self/cart/cart"
                            }));
                        }
                    });
                    if (m && (i.push(r), "1" == a)) return void (e.data.isPerson || "meirong" == e.data.projectType || "education" == e.data.projectType || "enterprise" == e.data.projectType ? wx.navigateTo({
                        url: "../../self/cart/cart"
                    }) : wx.switchTab({
                        url: "../../self/cart/cart"
                    }));
                } else i = [];
                i.push(r), e.setData({
                    showCartPoint: !1
                });
                try {
                    wx.setStorageSync("cartData" + t.globalData.autoId, i), "1" == a ? setTimeout(function() {
                        e.data.isPerson || "meirong" == e.data.projectType || "education" == e.data.projectType || "enterprise" == e.data.projectType ? wx.navigateTo({
                            url: "../../self/cart/cart"
                        }) : wx.switchTab({
                            url: "../../self/cart/cart"
                        });
                    }, 500) : (e.setData({
                        showProAttr: !1
                    }), wx.showToast({
                        title: "添加成功",
                        icon: "success",
                        duration: 2e3
                    }));
                } catch (a) {
                    a = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(a);
                    t.hint("添加购物车失败");
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
        "" != y ? "6" != this.data.activityType || "3" != this.data.memberType && !this.data.parentId ? this.addCart("1") : this.addCart("6") : t.hint("请选择商品属性");
    },
    carttap: function() {
        var t = this;
        t.data.isPerson || "meirong" == t.data.projectType || "education" == t.data.projectType || "enterprise" == t.data.projectType ? wx.navigateTo({
            url: "../../self/cart/cart"
        }) : wx.switchTab({
            url: "../../self/cart/cart"
        });
    },
    toSeckill: function() {
        this.addCart("3");
    },
    checkSeckillCount: function() {
        var e = this;
        return new Promise(function(o, i) {
            wx.request({
                url: t.globalData.comUrl + "activityProduct_checkActivityStatus.action",
                data: {
                    appId: a.appId,
                    productId: e.data.productId,
                    activityId: e.data.proInfoDetail.activityId,
                    memberId: t.getMemberId()
                },
                success: function(t) {
                    o(t);
                }
            });
        });
    },
    originalPriceBuy: function() {
        var a = this, e = {
            productId: a.data.proInfoDetail.id,
            productName: a.data.proInfoDetail.productName,
            productCode: a.data.proInfoDetail.productCode,
            count: a.data.count,
            pic_url: a.data.pic_url,
            price: a.data.price,
            moduleId: y,
            proAttrName: v,
            modelName: a.data.modelName,
            branchInfoId: a.data.proInfoDetail.branchInfoId,
            branchName: a.data.proInfoDetail.branchName,
            isSelected: !0
        }, o = wx.getStorageSync("cartData" + t.globalData.autoId);
        if (console.log(o), 0 != o) {
            i = o, console.log(y);
            for (var r = !1, n = 0; n < i.length; n++) if (i[n].moduleId == y) return r = !0, 
            void wx.showModal({
                title: "提示",
                content: "该商品已在购物车中！",
                confirmText: "去购物车",
                success: function(t) {
                    t.confirm && (a.data.isPerson || "meirong" == a.data.projectType || "education" == a.data.projectType || "enterprise" == a.data.projectType ? wx.navigateTo({
                        url: "../../self/cart/cart"
                    }) : wx.switchTab({
                        url: "../../self/cart/cart"
                    }));
                }
            });
            if (!r) return i.push(e), wx.setStorageSync("cartData" + t.globalData.autoId, i), 
            void (a.data.isPerson || "meirong" == a.data.projectType || "education" == a.data.projectType || "enterprise" == a.data.projectType ? wx.navigateTo({
                url: "../../self/cart/cart"
            }) : wx.switchTab({
                url: "../../self/cart/cart"
            }));
        } else (i = []).push(e), wx.setStorageSync("cartData" + t.globalData.autoId, i), 
        setTimeout(function() {
            a.data.isPerson || "meirong" == a.data.projectType || "education" == a.data.projectType || "enterprise" == a.data.projectType ? wx.navigateTo({
                url: "../../self/cart/cart"
            }) : wx.switchTab({
                url: "../../self/cart/cart"
            });
        }, 500);
    },
    toCreateGroup: function() {
        var e = this;
        wx.request({
            url: t.globalData.comUrl + "activityProduct_checkActivityStatus.action",
            data: {
                appId: a.appId,
                productId: e.data.productId,
                activityId: e.data.proInfoDetail.activityId
            },
            success: function(a) {
                0 == a.data.code ? t.hint("活动已经结束") : 2 == a.data.code ? t.hint("产品已经退出该活动") : e.addCart("51");
            }
        });
    },
    addcarttap: function() {
        this.setData({
            attrBtnStatus: "1"
        }), this.addCart("2");
    },
    addcarttap1: function() {
        "" != y ? this.addCart("2") : t.hint("请选择商品属性");
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
        if (t.getMemberId()) {
            var a = this;
            wx.navigateTo({
                url: "../comment/publish-comment/publish-comment?productId=" + a.data.productId
            });
        } else wx.navigateTo({
            url: "../../login/login"
        });
    },
    getModelInfo: function(t) {
        var a = this;
        if (!I[t.currentTarget.dataset.index][t.currentTarget.dataset.attrindex]) {
            for (var e = 0; e < I[t.currentTarget.dataset.index].length; e++) m[t.currentTarget.dataset.index] = [], 
            I[t.currentTarget.dataset.index][e] = !1;
            I[t.currentTarget.dataset.index][t.currentTarget.dataset.attrindex] = !t.currentTarget.dataset.status, 
            m[t.currentTarget.dataset.index] = t.currentTarget.dataset.typeid, f = m.join(";"), 
            "" != (y = a.getModuleId(f)) && a.setData({
                showCurAttr: !1
            }), a.setData({
                active: I
            });
        }
    },
    getModuleId: function(t) {
        for (var a = this, e = t.split(";"), o = a.data.proInfoDetail.productModelList, i = e[1] + ";" + e[0], r = 0; r < o.length; r++) if (o[r].valueIds == t || o[r].valueIds == i) {
            y = o[r].id, v = o[r].originalAttr, T = o[r].modelName, a.setData({
                stock: o[r].stock,
                price: o[r].price,
                activityPrice: o[r].activityPrice,
                originalPrice: o[r].originalprice,
                modelName: o[r].modelName,
                modelImage: o[r].modelImage
            }), g = "51" == a.data.buyType || "52" == a.data.buyType || "6" == a.data.buyType && ("3" == a.data.memberType || a.data.parentId) ? this.data.activityPrice * this.data.count : "" != a.data.buyType || "5" != a.data.activityType && ("6" != a.data.activityType || "3" != a.data.memberType && !a.data.parentId) ? this.data.price * this.data.count : this.data.activityPrice * this.data.count, 
            this.setData({
                totalPrice: g
            }), a.data.proInfoDetail.productImageVOList.length > 0 && a.setData({
                pic_url: a.data.proInfoDetail.productImageVOList[0].imageURL
            });
            break;
        }
        return y;
    },
    countAdd: function() {
        var t = this;
        this.data.count++, g = "51" == t.data.buyType || "52" == t.data.buyType || "6" == t.data.buyType && ("3" == t.data.memberType || t.data.parentId) ? this.data.activityPrice * this.data.count : "" != t.data.buyType || "5" != t.data.activityType && ("6" != t.data.activityType || "3" != t.data.memberType && !t.data.parentId) ? this.data.price * this.data.count : this.data.activityPrice * this.data.count, 
        this.setData({
            totalPrice: g,
            count: this.data.count
        });
    },
    countSubtract: function() {
        var t = this;
        this.data.count > 1 && (this.data.count--, g = "51" == t.data.buyType || "52" == t.data.buyType || "6" == t.data.buyType && ("3" == t.data.memberType || t.data.parentId) ? this.data.activityPrice * this.data.count : "" != t.data.buyType || "5" != t.data.activityType && ("6" != t.data.activityType || "3" != t.data.memberType && !t.data.parentId) ? this.data.price * this.data.count : this.data.activityPrice * this.data.count, 
        this.setData({
            totalPrice: g,
            count: this.data.count
        }));
    },
    bindCountInput: function(t) {
        var a = this;
        this.setData({
            count: t.detail.value
        }), g = "51" == a.data.buyType || "52" == a.data.buyType || "6" == a.data.buyType && ("3" == a.data.memberType || a.data.parentId) ? this.data.activityPrice * this.data.count : "" != a.data.buyType || "5" != a.data.activityType && ("6" != a.data.activityType || "3" != a.data.memberType && !a.data.parentId) ? this.data.price * this.data.count : this.data.activityPrice * this.data.count, 
        this.setData({
            totalPrice: g
        });
    },
    changeProAttrFrame: function() {
        "" != y ? (this.setData({
            showProAttr: !this.data.showProAttr
        }), "" != this.data.buyType && this.addCart(this.data.buyType)) : t.hint("请选择商品属性");
    },
    toggleProAttrFrame: function() {
        g = 6 == this.data.activityType && 3 != this.data.memberType ? this.data.price : 0 == this.data.activityPrice ? this.data.price : this.data.activityPrice, 
        this.setData({
            totalPrice: g * this.data.count,
            showProAttr: !this.data.showProAttr,
            buyType: ""
        }), 0 == this.data.activityType && 1 == this.data.proInfoDetail.purpose && this.setData({
            attrBtnStatus: 2
        });
    },
    getCollectStatus: function() {
        if (o = t.getMemberId()) {
            var e = this;
            wx.request({
                url: t.globalData.comUrl + "tabs_checkCollection.action",
                data: {
                    appId: a.appId,
                    memberId: o,
                    id: e.data.proInfoDetail.id
                },
                success: function(a) {
                    var o = t.getJsonData(a.data);
                    e.setData({
                        collectStatus: o.isExisted
                    });
                },
                fail: function(a) {
                    t.hint();
                },
                complete: function() {
                    r = !0, n = !0;
                }
            });
        }
    },
    collect: function() {
        if (0 != r) {
            r = !1;
            var e = this;
            (o = t.getMemberId()) ? wx.request({
                url: t.globalData.comUrl + "tabs_addCollection.action",
                data: {
                    appId: a.appId,
                    type: 1,
                    name: e.data.proInfoDetail.productName,
                    objId: e.data.proInfoDetail.id,
                    memberId: o,
                    pic_url: e.data.proInfoDetail.productImageVOList[0].imageURL || "",
                    price: e.data.proInfoDetail.price
                },
                success: function(t) {
                    wx.showToast({
                        title: "收藏成功",
                        icon: "success",
                        duration: 2e3
                    }), e.getCollectStatus();
                },
                fail: function(a) {
                    t.hint("收藏失败");
                }
            }) : (r = !0, wx.navigateTo({
                url: "../../login/login"
            }));
        }
    },
    cancelCollect: function() {
        if (0 != n) {
            n = !1;
            var a = this;
            (o = t.getMemberId()) ? wx.request({
                url: t.globalData.comUrl + "tabs_delCollectionByObjId.action",
                data: {
                    id: a.data.proInfoDetail.id,
                    memberId: o
                },
                success: function(t) {
                    wx.showToast({
                        title: "已取消收藏",
                        icon: "success",
                        duration: 2e3
                    }), a.getCollectStatus();
                },
                fail: function(a) {
                    t.hint("取消收藏失败");
                }
            }) : (n = !0, wx.navigateTo({
                url: "../../login/login"
            }));
        }
    },
    makeCall: function() {
        var a = this.data.proInfoDetail.telNum;
        a && a.length > 1 ? wx.makePhoneCall({
            phoneNumber: a
        }) : t.hint("客服电话无效！");
    },
    getStoreHidden: function() {
        var o = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getCustomizeTabsById.action",
            data: {
                appId: a.appId,
                customizeTabId: e.LynxAbout_Merchant
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                o.setData({
                    isStoreHidden: e.isDeleted
                });
            }
        });
    },
    toProDetail: function(t) {
        wx.redirectTo({
            url: "pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    beforehand: function() {
        var t = this;
        o ? wx.navigateTo({
            url: "../beforehand/beforehand?productName=" + t.data.proInfoDetail.productName + t.data.modelName + "&branchName=" + t.data.proInfoDetail.branchName + "&branchId=" + t.data.proInfoDetail.merchantId
        }) : (n = !0, wx.navigateTo({
            url: "../../login/login"
        }));
    },
    onShareAppMessage: function() {
        var a = this;
        a.setData({
            showShareBox: !1
        });
        var e = "";
        return e = "3" == a.data.memberType && "6" == a.data.activityType ? "/pages/product/pro-detail/pro-detail?productId=" + a.data.proInfoDetail.id + "&parentId=" + t.getMemberId() : "/pages/product/pro-detail/pro-detail?productId=" + a.data.proInfoDetail.id, 
        {
            title: a.data.proInfoDetail.productName,
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
    getCoupon: function(a) {
        var e = this, o = t.getMemberId() || "";
        "" != o ? 0 != a.currentTarget.dataset.getcoupon && wx.request({
            url: t.globalData.comUrl + "act_addMemberActivity.action",
            data: {
                activityId: a.currentTarget.dataset.id,
                memberId: o,
                customizetabId: t.getCustomizeId("Activity")
            },
            success: function(a) {
                "0" != t.getJsonData(a.data).code ? (t.hint("领取成功"), e.setData({
                    hiddenCouponList: !0
                }), e.getCouponInfo(e.data.proInfoDetail.branchInfoId)) : t.hint("领取失败");
            },
            fail: function(a) {
                t.hint();
            }
        }) : wx.navigateTo({
            url: "../../login/login"
        });
    },
    getCommentList: function() {
        console.log(t.globalData.wxUserInfo);
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getCommentList.action",
            data: {
                current: 1,
                productId: a.data.productId
            },
            success: function(e) {
                var o = t.getJsonData(e.data);
                a.setData({
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
        d = !0, wx.previewImage({
            current: t.data.modelImage,
            urls: a
        });
    }
});