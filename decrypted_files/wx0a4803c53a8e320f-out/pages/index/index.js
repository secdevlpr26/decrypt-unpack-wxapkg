var t = getApp(), a = t.globalData.projectInfo, e = t.globalData.customizeTabId, o = 1, i = 1, s = "", n = "", r = "", c = [ "LynxProductList", "LynxAbout_Merchant", "LynxPhoto_Info_Post_Tab", "LynxPhoto_H_Info_Tab_Level2", "Photo-Info-Tab-Level2", "Video_Gallery", "Flexi-Form", "Online-Chat", "Activity", "LynxApplyFor_About_Merchant", "Activity-Group", "About-Merchant", "Activity-Kill", "Activity-Distribution", "CardNo" ];

Page({
    data: {
        styleConfig: t.globalData.styleConfig,
        isPerson: t.globalData.isPerson,
        advertisements: [],
        advertiseProducts: [],
        PCAdevertising_top: "",
        couponAdImg: "",
        productArr: [],
        productClass: [],
        moreArr: [],
        headlineImage: "",
        headlineArr: [],
        recommendNews: [],
        entrepreneurshipList: [],
        adcyList: [],
        proList: [],
        hotSaleList: [],
        hotSaleList1: [],
        hotSaleList2: [],
        branchInfo: [],
        bottomHint: !0,
        posCity: "",
        hasBranch: !1,
        hiddenBranch: !0,
        minaInfo: {},
        subVersion: "",
        oneKeyHidden: !0,
        isGroup: "",
        activityInfo: "",
        isQuery: 1 == t.globalData.isPerson,
        isLoading: !1,
        videoLink: "",
        netWorkType: !1,
        videoList: {},
        activitySeckill: {},
        activityStart: "",
        loadCount: 1,
        hasSeckill: "",
        hideBigImg: !0,
        adBigImage: "",
        actDistribution: {},
        memberType: "",
        hideShareCoupon: !0
    },
    checkIfHasAutoId: function(a) {
        var e = this;
        if ("undefined" != typeof sessionStorage && (!sessionStorage.getItem("globalAutoId") || a && a.autoId || (a = {
            autoId: sessionStorage.getItem("globalAutoId")
        })), !a || !a.autoId) return e.initData(), void t.refreshProjectData(t.globalData.autoId).then(function(a) {
            wx.setStorageSync("autoId" + t.globalData.autoId, a), wx.setNavigationBarTitle({
                title: a.projectName
            });
        });
        if (a.autoId) {
            "undefined" != typeof sessionStorage && sessionStorage.setItem("globalAutoId", a.autoId);
            var o = a.autoId, i = wx.getStorageSync("data_js");
            i.autoId == o ? (i.autoId = o, t.initProjectData(i), t.getProjectData(), t.refreshProjectData(o).then(function(t) {
                wx.setStorageSync("data_js", t);
            }), e.initData()) : t.refreshProjectData(o).then(function(a) {
                a.autoId = o, wx.setStorageSync("data_js", a), t.initProjectData(a), t.getProjectData(), 
                e.initData();
            });
        }
    },
    onLoad: function(a) {
        console.log(" ------------ index:onLoad ------------- ");
        var e = this, o = decodeURIComponent(a.scene);
        o && "undefined" != o && wx.setStorageSync("parentId" + t.globalData.autoId, o), 
        t.loginVzSystem(), wx.getNetworkType({
            success: function(t) {
                e.setData({
                    netWorkType: t.networkType
                });
            }
        }), e.checkIfHasAutoId(a);
    },
    onShow: function() {
        this.data.loadCount > 1 && this.initData(), this.setData({
            loadCount: this.data.loadCount + 1
        });
    },
    initData: function() {
        a = t.globalData.projectInfo, e = t.globalData.customizeTabId, console.log(" ------------ index:onShow ------------- ");
        var i = wx.getStorageSync("memberType" + t.globalData.autoId);
        this.setData({
            memberType: i
        });
        var r = wx.getStorageSync("autoId" + t.globalData.autoId);
        r.projectName ? wx.setNavigationBarTitle({
            title: r.projectName
        }) : wx.setNavigationBarTitle({
            title: t.globalData.projectInfo.projectName
        });
        var c = this;
        if (a.appId && !(a.appId.length < 1)) {
            if ("" == t.globalData.city) s = "", o = 1, c.setData({
                posCity: "",
                productArr: []
            }), c.getLocation().then(function(t) {
                c.getBranchList();
            }); else if (void 0 == t.globalData.city || "{}" == JSON.stringify(t.globalData.city)) t.globalData.city = {}, 
            o = 1, c.setData({
                productArr: []
            }), c.getLocation().then(function(t) {
                c.getBranchList();
            }); else {
                if (t.globalData.city.cityName == this.data.posCity) return;
                s = t.globalData.city.cityID, o = 1, c.setData({
                    posCity: t.globalData.city.cityName
                });
            }
            clearInterval(n), c.getHomepageBaseInfo().then(function() {
                c.getHomePageTop(), c.getCustomizeTabList().then(function() {
                    "1" == t.globalData.isGroup && c.getActivity(), "1" == c.data.hasSeckill && c.getSeckillActivity(), 
                    "1" == c.data.hasDistribution && "3" == c.data.memberType ? (c.checkDistribuction().then(function() {
                        c.getHomepageProduct(), c.getProCategory();
                    }), c.getDistributeProduct()) : (c.getHomepageProduct(), c.getProCategory());
                });
            }), c.getHomepageAdvertise(), c.getBranchList();
        }
    },
    getHomePageTop: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getHomepageTop.action",
            data: {
                advertisementsCId: e.LynxHomePage,
                informationsCId: e.LynxPhoto_H_Info_Tab_Level2,
                productCId: e.LynxProductList
            },
            success: function(e) {
                for (var o = t.getJsonData(e.data), i = 0; i < o.advertisements.length; i++) o.advertisements[i].image = t.modifyPicSize(o.advertisements[i].image, "_r750x400p");
                if ("O2O_V2" == a.data.minaInfo.subVersion) {
                    for (var s = Math.ceil(o.productClass.length / 10), n = [], r = 0; r < s; r++) n[r] = [], 
                    n[r].push(o.productClass.slice(10 * r, 10 * (r + 1)));
                    a.setData({
                        advertisements: o.advertisements,
                        productClass: n
                    });
                } else {
                    for (var c = Math.ceil(o.productClass.length / 5), l = [], u = 0; u < c; u++) l[u] = [], 
                    l[u].push(o.productClass.slice(5 * u, 5 * (u + 1)));
                    a.setData({
                        advertisements: o.advertisements,
                        productClass: l
                    });
                }
                wx.stopPullDownRefresh();
            }
        });
    },
    getHomepageBaseInfo: function() {
        var e = this;
        return new Promise(function(o, i) {
            wx.request({
                url: t.globalData.comUrl + "tabs_getHomepageBaseInfo.action",
                data: {
                    projectId: a.appId
                },
                success: function(a) {
                    var i = t.getJsonData(a.data);
                    t.globalData.changeClassify = i.minaInfo.productCategory, t.globalData.topayHidden = i.minaInfo.showCashOnDelivery, 
                    t.globalData.showComment = i.minaInfo.showComment, e.setData({
                        minaInfo: i.minaInfo,
                        isQuery: i.minaInfo.allHidden,
                        isLoading: !0
                    }), i.minaInfo.rollNewsHidden || e.getCategory().then(function(t) {
                        e.getNewsInfo(t);
                    }), i.minaInfo.videoHidden || e.getVideoList(), getApp().globalData.isQuery = i.minaInfo.allHidden, 
                    o(i);
                }
            });
        });
    },
    getVideoList: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getVideoGalleryList.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                customizeTabId: t.globalData.customizeTabId.Video_Gallery,
                isNeedHttps: 0
            },
            success: function(e) {
                var o = t.getJsonData(e.data);
                a.setData({
                    videoList: o
                });
            },
            fail: function() {}
        });
    },
    getDistributeProduct: function() {
        var a = this;
        t.request({
            url: t.globalData.comUrl + "activityProduct_findGroupsProduceList.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                groupsId: "distribution",
                current: 1,
                isHomePage: 1
            },
            success: function(t) {
                console.log(t.data);
                var e = t.data;
                a.setData({
                    disProList: e.pageList
                });
            }
        });
    },
    checkDistribuction: function() {
        var a = this;
        return new Promise(function(e, o) {
            wx.request({
                url: t.globalData.comUrl + "dis_checkDistribuction.action",
                data: {
                    appId: t.globalData.projectInfo.appId,
                    memberId: t.getMemberId()
                },
                success: function(o) {
                    var i = t.getJsonData(o.data);
                    t.globalData.actDistribution = i.activityDistribution, a.setData({
                        actDistribution: i.activityDistribution
                    }), e();
                },
                fail: function() {
                    t.hint(), e();
                }
            });
        });
    },
    getSeckillActivity: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "activityProduct_groupsIndex.action",
            data: {
                appId: t.globalData.projectInfo.appId,
                actType: "3"
            },
            success: function(t) {
                clearInterval(r);
                var e = new Date(t.data.beginTime), o = new Date(t.data.nowTime), i = parseInt((e - o) / 1e3);
                if (i > 0) t.data.activityStart = !1, t.data.countDown = a.secondToTime(i), r = setInterval(function() {
                    i--, t.data.countDown = a.secondToTime(i), a.setData({
                        activitySeckill: t.data
                    }), i < 1 && (clearInterval(r), a.refresh());
                }, 1e3); else {
                    if (t.data.activityTime <= 0) return;
                    t.data.activityStart = !0, t.data.countDown = a.secondToTime(t.data.activityTime), 
                    r = setInterval(function() {
                        t.data.activityTime--, t.data.countDown = a.secondToTime(t.data.activityTime), a.setData({
                            activitySeckill: t.data
                        }), t.data.activityTime <= 0 && (clearInterval(r), a.refresh());
                    }, 1e3);
                }
            }
        });
    },
    getHomepageProduct: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getHomepageProduct.action",
            data: {
                advertise: "advertise",
                cityId: "",
                hotSale: "hotSale",
                isGroup: "1",
                productCId: e.LynxProductList,
                scroll: ""
            },
            success: function(e) {
                for (var o = t.getJsonData(e.data), i = 0; i < o.advertiseProducts.length; i++) o.advertiseProducts[i].advertisingImage = t.modifyPicSize(o.advertiseProducts[i].advertisingImage, "_r750x200p");
                for (var s = 0; s < o.hotSaleList.length; s++) o.hotSaleList[s].hotSaleImage = t.modifyPicSize(o.hotSaleList[s].hotSaleImage, "_r220x220p"), 
                "5" == o.hotSaleList[s].actType || "3" == o.hotSaleList[s].actType || "6" == o.hotSaleList[s].actType && "3" == a.data.memberType && a.data.actDistribution.enable ? o.hotSaleList[s].curPrice = o.hotSaleList[s].groupsPrice : 1 != o.hotSaleList[s].purpose && 3 != o.hotSaleList[s].purpose || (o.hotSaleList[s].curPrice = o.hotSaleList[s].price);
                a.setData({
                    hotSaleList: o.hotSaleList,
                    hotSaleList1: o.hotSaleList.slice(0, 5),
                    hotSaleList2: o.hotSaleList.slice(5, 10),
                    advertiseProducts: o.advertiseProducts
                });
            }
        });
    },
    getHomepageAdvertise: function() {
        var e = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getHomepageAdvertising.action",
            data: {
                projectId: a.appId
            },
            success: function(a) {
                var o = t.getJsonData(a.data);
                o.PCAdevertising_activity[0] && e.setData({
                    couponAdImg: o.PCAdevertising_activity[0].picture1
                }), o.PCAdevertising_top[0] && e.setData({
                    PCAdevertising_top: o.PCAdevertising_top[0].picture1
                });
            }
        });
    },
    getBranchList: function() {
        var e = this, o = {
            appId: a.appId
        };
        t.globalData.city.cityID > 0 && (o.cityId = t.globalData.city.cityID), t.request({
            url: t.globalData.comUrl + "tabs_getRecommendBranch",
            data: o,
            success: function(a) {
                var o = a.data.content;
                if (o.list.length > 0) {
                    for (var i = 0; i < o.list.length; i++) o.list[i].pic1 = t.modifyPicSize(o.list[i].pic1, "_r192x90p");
                    e.setData({
                        branchInfo: o.list,
                        hasBranch: !0
                    });
                } else e.setData({
                    hasBranch: !1
                });
            },
            fail: function(a) {
                t.hint();
            }
        });
    },
    getActivity: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "activityProduct_groupsIndex.action",
            data: {
                appId: t.globalData.projectInfo.appId
            },
            success: function(t) {
                clearInterval(n);
                var e = new Date(t.data.beginTime), o = new Date(t.data.nowTime), i = parseInt((e - o) / 1e3);
                if (i > 0) t.data.activityStart = !1, t.data.countDown = a.secondToTime(i), n = setInterval(function() {
                    i--, t.data.countDown = a.secondToTime(i), a.setData({
                        activityInfo: t.data
                    }), i < 1 && (clearInterval(n), a.refresh());
                }, 1e3); else {
                    if (t.data.activityTime <= 0) return;
                    t.data.activityStart = !0, t.data.countDown = a.secondToTime(t.data.activityTime), 
                    n = setInterval(function() {
                        t.data.activityTime--, t.data.countDown = a.secondToTime(t.data.activityTime), a.setData({
                            activityInfo: t.data
                        }), t.data.activityTime <= 0 && (clearInterval(n), a.refresh());
                    }, 1e3);
                }
            }
        });
    },
    secondToTime: function(t) {
        var a = Math.floor(t / 3600 / 24), e = Math.floor(t / 3600 % 24), o = Math.floor(t / 60 % 60), i = Math.floor(t % 60);
        return e < 10 && (e = "0" + e), o < 10 && (o = "0" + o), i < 10 && (i = "0" + i), 
        {
            d: a,
            h: e,
            m: o,
            s: i
        };
    },
    getHomePageInfo: function(e) {
        var o = this;
        return new Promise(function(i, s) {
            wx.request({
                url: t.globalData.comUrl + "tabs_getIndexDetail3.action",
                data: {
                    appId: a.appId,
                    projectId: a.appId,
                    status: "2",
                    isGroup: 1
                },
                success: function(a) {
                    var s = t.getJsonData(a.data);
                    getApp().globalData.isQuery = s.minaInfo.allHidden, console.log(t.globalData.isQuery), 
                    o.setData({
                        isQuery: s.minaInfo.allHidden
                    });
                    for (var n = 0; n < s.advertisements.length; n++) s.advertisements[n].image = t.modifyPicSize(s.advertisements[n].image, "_r750x250p");
                    for (var r = 0; r < s.hotSaleList.length; r++) s.hotSaleList[r].hotSaleImage = t.modifyPicSize(s.hotSaleList[r].hotSaleImage, "_r330x330p"), 
                    s.hotSaleList[r].hotRecommendImage = t.modifyPicSize(s.hotSaleList[r].hotRecommendImage, "_r350x180p");
                    for (var l = 0; l < s.productClass.length; l++) s.productClass[l].categoryPicture = t.modifyPicSize(s.productClass[l].categoryPicture, "_r106x106p");
                    for (var u = Math.ceil(s.productClass.length / 10), d = [], g = 0; g < u; g++) d[g] = [], 
                    d[g].push(s.productClass.slice(10 * g, 10 * (g + 1)));
                    for (var p = Math.ceil(s.productClass.length / 5), h = [], m = 0; m < p; m++) h[m] = [], 
                    h[m].push(s.productClass.slice(5 * m, 5 * (m + 1)));
                    o.setData({
                        indexData: s,
                        productClass: d,
                        platformProductClass: h,
                        hideNews: s.minaInfo.homeOnekeyHidden,
                        hotSaleList: s.hotSaleList,
                        hotSaleList1: s.hotSaleList.slice(0, 5),
                        hotSaleList2: s.hotSaleList.slice(5, 10),
                        subVersion: s.minaInfo.subVersion,
                        oneKeyHidden: s.minaInfo.homeOnekeyHidden
                    }), t.globalData.projectInfo.subVersion = s.minaInfo.subVersion, t.globalData.projectInfo.oneKeyHidden = s.minaInfo.homeOnekeyHidden, 
                    s.minaInfo.homeOnekeyHidden || (o.getCategory().then(function(t) {
                        o.getNewsInfo(t);
                    }), o.getcyCategory().then(function(t) {
                        o.getcyNewsInfo(t), o.getcyAdList();
                    }));
                    for (var f = c, b = [], y = 0; y < e.length; y++) for (var v = 0; v < f.length; v++) "" != e[y].sysTabNameTag && e[y].sysTabNameTag == f[v] ? b.push(e[y]) : "" == e[y].sysTabNameTag && e[y].sysTabName == f[v] && b.push(e[y]);
                    if ("O2O_V1" == o.data.subVersion) {
                        for (var I = Math.ceil(b.length / 5), D = [], T = 0; T < I; T++) D[T] = [], D[T].push(b.slice(5 * T, 5 * (T + 1)));
                        console.log(D), o.setData({
                            moreArr: D
                        });
                    } else o.setData({
                        moreArr: b
                    });
                    wx.hideToast(), wx.stopPullDownRefresh(), i(s);
                }
            });
        });
    },
    getLocation: function() {
        var a = this;
        return new Promise(function(e, o) {
            wx.getLocation({
                type: "wgs84",
                success: function(o) {
                    wx.request({
                        url: "https://api.map.baidu.com/geocoder/v2/?ak=9pCIOciquD3x9af5NWpsNnxtAwjczvhD&location=" + o.latitude + "," + o.longitude + "&output=json&pois=1",
                        data: {},
                        jsonp: !0,
                        success: function(o) {
                            t.globalData.city.cityName = o.data.result.addressComponent.city, wx.request({
                                method: "GET",
                                url: t.globalData.comUrl + "tabs_getCityIdByName.action",
                                data: {
                                    cityName: o.data.result.addressComponent.city
                                },
                                success: function(o) {
                                    t.globalData.city.cityID = o.data.cityId, t.globalData.city.provinceId = "", a.setData({
                                        posCity: t.globalData.city.cityName
                                    }), e(t.globalData.city);
                                }
                            });
                        }
                    });
                },
                fail: function(t) {
                    console.log(t), e();
                }
            });
        });
    },
    getCategory: function() {
        var o = this;
        return new Promise(function(i, s) {
            wx.request({
                url: t.globalData.comUrl + "tabs_getPhotoInfoTabCategory.action",
                data: {
                    appId: a.appId,
                    customizeTabId: e["Photo-Info-Tab-Level2"]
                },
                success: function(a) {
                    var e = t.getJsonData(a.data);
                    o.setData({
                        headlineImage: e[0].categoryIcon
                    }), i(e);
                }
            });
        });
    },
    getcyCategory: function() {
        return new Promise(function(o, i) {
            wx.request({
                url: t.globalData.comUrl + "tabs_getPhotoInfoTabCategory.action",
                data: {
                    appId: a.appId,
                    customizeTabId: e.LynxPhoto_H_Info_Tab_Level2
                },
                success: function(a) {
                    var e = t.getJsonData(a.data);
                    o(e);
                }
            });
        });
    },
    getCustomizeTabList: function() {
        var e = this;
        return new Promise(function(o, i) {
            wx.request({
                url: t.globalData.comUrl + "tabs_getCustomizeTabList.action",
                data: {
                    appId: a.appId
                },
                success: function(a) {
                    for (var i = t.getJsonData(a.data), s = !0, n = 0; n < i.length; n++) "Activity-Group" == i[n].sysTabName && (t.globalData.isGroup = "1", 
                    e.setData({
                        isGroup: "1"
                    })), "Activity-Kill" == i[n].sysTabName && e.setData({
                        hasSeckill: "1"
                    }), "Activity-Distribution" == i[n].sysTabName && (t.globalData.isGroup = "1", e.setData({
                        hasDistribution: "1"
                    })), "LynxAbout_Merchant" == i[n].sysTabNameTag && (s = !1), "CardNo" == i[n].sysTabNameTag && (t.globalData.isShowPrePay = "1");
                    for (var r = c, l = [], u = 0; u < i.length; u++) for (var d = 0; d < r.length; d++) "" != i[u].sysTabNameTag && i[u].sysTabNameTag == r[d] ? l.push(i[u]) : "" == i[u].sysTabNameTag && i[u].sysTabName == r[d] && l.push(i[u]);
                    e.setData({
                        moreArr: l,
                        hiddenBranch: s
                    }), o(i);
                }
            });
        });
    },
    toMoreFunction: function(a) {
        switch (console.log(a.currentTarget.dataset.title), a.currentTarget.dataset.location) {
          case "LynxProductList":
            t.globalData.isPerson ? wx.navigateTo({
                url: "/pages/product/product"
            }) : wx.switchTab({
                url: "/pages/product/product"
            }), this.setData({
                hideShareCoupon: !0
            });
            break;

          case "LynxAbout_Merchant":
            1 == this.data.isPerson ? wx.navigateTo({
                url: "/pages/store/layout-o2o/store"
            }) : wx.switchTab({
                url: "/pages/store/layout-o2o/store"
            });
            break;

          case "LynxPhoto_Info_Post_Tab":
            wx.navigateTo({
                url: "/pages/supply/supply"
            });
            break;

          case "LynxPhoto_H_Info_Tab_Level2":
            wx.navigateTo({
                url: "/pages/news/news?sysTabName=LynxPhoto_H_Info_Tab_Level2&title=" + a.currentTarget.dataset.title
            });
            break;

          case "Photo-Info-Tab-Level2":
            wx.navigateTo({
                url: "/pages/news/news?sysTabName=Photo-Info-Tab-Level2&title=" + a.currentTarget.dataset.title
            });
            break;

          case "Video_Gallery":
            wx.navigateTo({
                url: "/pages/publicity/publicity"
            });
            break;

          case "Flexi-Form":
            wx.navigateTo({
                url: "/pages/store/custom/custom"
            });
            break;

          case "Activity":
            wx.navigateTo({
                url: "/pages/self/mycoupon/mycoupon"
            });
            break;

          case "LynxApplyFor_About_Merchant":
            t.getMemberId() ? wx.navigateTo({
                url: "/pages/join/join"
            }) : wx.navigateTo({
                url: "/pages/login/login"
            });
            break;

          case "Activity-Group":
            wx.navigateTo({
                url: "/pages/group/group-prolist/group-prolist"
            });
            break;

          case "About-Merchant":
            1 == this.data.isPerson ? wx.switchTab({
                url: "/pages/about-us/about-us"
            }) : wx.navigateTo({
                url: "/pages/about-us/about-us"
            });
            break;

          case "Activity-Kill":
            wx.navigateTo({
                url: "/pages/seckill/seckill"
            });
            break;

          case "CardNo":
            t.getMemberId() ? wx.navigateTo({
                url: "/pages/self/card/card"
            }) : wx.navigateTo({
                url: "/pages/login/login"
            });
            break;

          case "Activity-Distribution":
            t.getMemberId() ? wx.navigateTo({
                url: "/pages/distribute/distribute"
            }) : wx.navigateTo({
                url: "/pages/login/login"
            });
        }
    },
    getNewsInfo: function(o) {
        var i = this;
        o.length >= 1 && wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTabFromL2ToL1.action",
            data: {
                appId: a.appId,
                customizeTabId: e["Photo-Info-Tab-Level2"],
                categoryId: o[0].code,
                current: 1
            },
            success: function(a) {
                for (var e = t.getJsonData(a.data), o = [], s = Math.ceil(e.pageList.length / 3), n = 0; n < s; n++) o[n] = [], 
                o[n].push(e.pageList.slice(3 * n, 3 * (n + 1)));
                for (var r = 0; r < e.pageList.length; r++) e.pageList[r].picture1 = t.modifyPicSize(e.pageList[r].picture1, "_r140x140p");
                i.setData({
                    recommendNews: e.pageList.slice(0, 3),
                    headlineArr: o
                });
            }
        });
    },
    getcyNewsInfo: function(o) {
        var i = this;
        o.length >= 1 && wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTabFromL2ToL1.action",
            data: {
                appId: a.appId,
                customizeTabId: e.LynxPhoto_H_Info_Tab_Level2,
                categoryId: o[0].code,
                current: 1
            },
            success: function(a) {
                for (var e = t.getJsonData(a.data), o = [], s = Math.ceil(e.pageList.length / 3), n = 0; n < s; n++) o[n] = [], 
                o[n].push(e.pageList.slice(3 * n, 3 * (n + 1)));
                for (var r = 0; r < e.pageList.length; r++) e.pageList[r].picture1 = t.modifyPicSize(e.pageList[r].picture1, "_r140x140p");
                i.setData({
                    entrepreneurshipList: e.pageList.slice(0, 3),
                    headlineArr: o
                });
            }
        });
    },
    getcyAdList: function() {
        var o = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTabFromL2ToL1.action",
            data: {
                appId: a.appId,
                customizeTabId: e.LynxAdvertisingH_Photo_Info_Tab_Level1,
                current: 1
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                o.setData({
                    adcyList: e.pageList
                });
            },
            fail: function() {
                t.hint();
            }
        });
    },
    getProCategory: function() {
        var o = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getAppCategoryProductByCity.action",
            data: {
                appId: a.appId,
                customizeTabId: e.LynxProductList,
                count: 4,
                jsoncallback: "",
                productName: "",
                isGroup: 1,
                advertiseroll: 1
            },
            success: function(t) {
                var a = '{"list":' + t.data.substring(1).slice(0, -1) + "}", e = JSON.parse(a);
                console.log(e.list);
                for (var i = 0; i < e.list.length; i++) for (var s = 0; s < e.list[i].productList.length; s++) 3 == e.list[i].productList[s].actType || 5 == e.list[i].productList[s].actType || 6 == e.list[i].productList[s].actType && 3 == o.data.memberType && o.data.actDistribution.enable ? e.list[i].productList[s].curPrice = e.list[i].productList[s].groupsPrice : 1 != e.list[i].productList[s].purpose && 3 != e.list[i].productList[s].purpose || (e.list[i].productList[s].curPrice = e.list[i].productList[s].price);
                o.setData({
                    proList: e.list
                });
            }
        });
    },
    getJoinPhone: function() {
        wx.request({
            url: t.globalData.comUrl + "tabs_getAboutMerchant.action",
            data: {
                customizetabId: e.LynxApplyFor_About_Merchant
            },
            success: function(a) {
                var e = t.getJsonData(a.data);
                wx.makePhoneCall({
                    phoneNumber: e.phone
                });
            }
        });
    },
    getReommendProducts: function() {
        var o = this, s = {
            appId: a.appId,
            customizeTabId: e.LynxProductList,
            proId: "",
            disId: "",
            productName: "",
            current: 4
        };
        wx.request({
            url: t.globalData.comUrl + "tabs_getAppProductByCity.action",
            data: s,
            success: function(a) {
                var e = t.getJsonData(a.data);
                i = e.pages;
                for (var s = 0; s < e.pageList.length; s++) 3 == e.pageList[s].actType || 5 == e.pageList[s].actType || 6 == e.pageList[s].actType && 3 == o.data.memberType && o.data.actDistribution.enable ? e.pageList[s].curPrice = e.pageList[s].groupsPrice : 1 != e.pageList[s].purpose && 3 != e.pageList[s].purpose || (e.pageList[s].curPrice = e.pageList[s].price), 
                String(Math.abs(e.pageList[s].quantity)).length > 3 && (e.pageList[s].quantity = String(Math.abs(e.pageList[s].quantity)).substring(0, 3)), 
                String(e.pageList[s].readTimes).length > 3 && (e.pageList[s].readTimes = String(e.pageList[s].readTimes).substring(0, 3));
                o.setData({
                    productArr: o.data.productArr.concat(e.pageList)
                });
            }
        });
    },
    adtap: function(t) {
        var a = this.data.advertisements[t.target.dataset.idx];
        switch (a.type) {
          case "1":
            break;

          case "2":
            wx.navigateTo({
                url: "rich-text/rich-text?index=" + t.target.dataset.idx
            });
            break;

          case "3":
            this.setData({
                adBigImage: a.image,
                hideBigImg: !1
            });
            break;

          case "4":
            wx.navigateTo({
                url: "/pages/store/store-detail/store-detail?tabContentId=" + a.branchInfoId
            });
            break;

          case "5":
            wx.navigateTo({
                url: "/pages/product/pro-detail/pro-detail?productId=" + a.productId
            });
        }
    },
    exitBigImage: function() {
        this.setData({
            hideBigImg: !0
        });
    },
    joinPhoneCall: function() {
        that.getJoinPhone();
    },
    toSearch: function(t) {
        wx.navigateTo({
            url: "/pages/search/search?type=0"
        });
    },
    toSeckillActivity: function() {
        wx.navigateTo({
            url: "/pages/seckill/seckill"
        });
    },
    toPosition: function() {
        wx.navigateTo({
            url: "/pages/position/position"
        });
    },
    toProductList: function(t) {
        wx.navigateTo({
            url: "/pages/product/pro-list/pro-list?bigCateCode=" + t.currentTarget.dataset.code + "&title=" + t.currentTarget.dataset.title
        });
    },
    toProductDetail: function(t) {
        wx.navigateTo({
            url: "/pages/product/pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    toGroupActivity: function() {
        wx.navigateTo({
            url: "/pages/group/group-prolist/group-prolist"
        });
    },
    toStoreDetail: function(t) {
        wx.navigateTo({
            url: "/pages/store/store-detail/store-detail?tabContentId=" + t.currentTarget.dataset.sid
        });
    },
    toDistributePro: function() {
        wx.navigateTo({
            url: "/pages/distribute/distribute-product/distribute-product"
        });
    },
    toNewsList: function() {
        wx.navigateTo({
            url: "/pages/news/news?sysTabName=Photo-Info-Tab-Level2"
        });
    },
    toNewsDetail: function(t) {
        wx.navigateTo({
            url: "/pages/news/news-detail/news-detail?tabContentId=" + t.currentTarget.dataset.nid + "&type=4"
        });
    },
    toMyCoupon: function() {
        wx.navigateTo({
            url: "/pages/self/mycoupon/mycoupon"
        });
    },
    toAdvertis: function() {
        wx.navigateTo({
            url: "/pages/recommproducts/recommproducts"
        });
    },
    formSubmit: function(t) {
        "" != t.detail.value.branchName ? "" != t.detail.value.mainProject ? "" != t.detail.value.phone ? "" != t.detail.value.textCon ? "" != t.detail.value.email ? "" != t.detail.value.project ? (wx.showToast({
            title: "正在提交...",
            icon: "loading",
            duration: 2e3,
            mask: !0
        }), setTimeout(function() {
            wx.showToast({
                title: "提交成功",
                icon: "success",
                duration: 2e3,
                mask: !0,
                success: function() {}
            });
        }, 2e3)) : this.warn("预约项目不能为空") : this.warn("邮箱不能为空") : this.warn("请输入您的问题描述!") : this.warn("请输入您的联系方式!!") : this.warn("请输入您的年龄!") : this.warn("请输入您的名字!");
    },
    bindDateChange: function(t) {
        this.setData({
            date: t.detail.value
        });
    },
    warn: function(t) {
        wx.showModal({
            title: "提示",
            content: t,
            showCancel: !1
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            indexData: {},
            productArr: [],
            bottomHint: !0,
            posCity: t.globalData.city.cityName
        }), clearInterval(n), s = "", o = 1;
        var a = this;
        a.getHomepageBaseInfo().then(function() {
            a.getHomePageTop(), a.getCustomizeTabList().then(function() {
                "1" == t.globalData.isGroup && a.getActivity(), "1" == a.data.hasSeckill && a.getSeckillActivity(), 
                "1" == a.data.hasDistribution && "3" == a.data.memberType ? (a.checkDistribuction().then(function() {
                    a.getHomepageProduct(), a.getProCategory();
                }), a.getDistributeProduct()) : (a.getHomepageProduct(), a.getProCategory());
            });
        }), a.getHomepageAdvertise(), a.getBranchList();
    },
    onReachBottom: function() {
        o < i && (o++, this.getNewsInfo());
    },
    refresh: function() {
        this.setData({
            indexData: {},
            productArr: [],
            bottomHint: !0,
            posCity: t.globalData.city.cityName
        }), clearInterval(n), s = "", o = 1;
        var a = this;
        a.getHomepageBaseInfo().then(function() {
            a.getHomePageTop(), a.getCustomizeTabList().then(function() {
                "1" == t.globalData.isGroup && a.getActivity(), "1" == a.data.hasSeckill && a.getSeckillActivity(), 
                a.getHomepageAdvertise(), a.getHomepageProduct(), a.getProCategory();
            });
        }), a.getBranchList();
    },
    onShareAppMessage: function() {
        var o = this;
        return {
            title: a.productName,
            path: "/pages/index/index",
            success: function(a) {
                wx.request({
                    url: t.globalData.comUrl + "act_addShareMemberActivity.action",
                    data: {
                        memberId: t.getMemberId(),
                        customizetabId: e.Activity
                    },
                    success: function(a) {
                        var e = t.getJsonData(a.data);
                        1 == e.code && (e.endTime = e.endTime.substring(0, 10), o.setData({
                            hideShareCoupon: !1,
                            shareActivity: e
                        }));
                    }
                });
            },
            fail: function(t) {}
        };
    }
});