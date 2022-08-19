var t = getApp(), a = t.globalData.projectInfo, e = t.globalData.customizeTabId, o = 1, i = 1, n = "", s = !1, r = "", c = [ "LynxProductList", "LynxAbout_Merchant", "LynxPhoto_Info_Post_Tab", "LynxPhoto_H_Info_Tab_Level2", "Photo-Info-Tab-Level2", "Video_Gallery", "Flexi-Form", "Online-Chat", "Activity", "LynxApplyFor_About_Merchant", "Activity-Group" ];

Page({
    data: {
        styleConfig: t.globalData.styleConfig,
        indexData: {},
        productArr: [],
        productClass: [],
        moreArr: [],
        headlineImage: "",
        headlineArr: [],
        recommendNews: [],
        hotSaleList: [],
        hotSaleList1: [],
        hotSaleList2: [],
        branchInfo: [],
        bottomHint: !0,
        posCity: "",
        hideNews: !0,
        hasBranch: !1,
        styleStatus: 1,
        subVersion: "",
        oneKeyHidden: !0,
        hiddenMerchant: !0,
        joinPhone: "",
        activityInfo: "",
        isGroup: "",
        isPerson: t.globalData.isPerson,
        isQuery: 1 == t.globalData.isPerson,
        minaInfo: {},
        couponAdImg: "",
        netWorkType: !1
    },
    checkIfHasAutoId: function(a) {
        var e = this;
        if (!sessionStorage.getItem("globalAutoId") || a && a.autoId || (a = {
            autoId: sessionStorage.getItem("globalAutoId")
        }), a && a.autoId) {
            if (a.autoId) {
                sessionStorage.setItem("globalAutoId", a.autoId);
                var o = a.autoId, i = wx.getStorageSync("autoId-" + o);
                i ? (t.initProjectData(i), t.getProjectData(), t.refreshProjectData(o).then(function(t) {
                    wx.clearStorage(), wx.setStorageSync("autoId-" + o, t);
                }), e.initData()) : t.refreshProjectData(o).then(function(a) {
                    wx.setStorageSync("autoId-" + o, a), t.initProjectData(a), t.getProjectData(), e.initData();
                });
            }
        } else e.initData();
    },
    onLoad: function(t) {
        console.log(" ------------ index:onLoad ------------- ");
        var a = this;
        wx.getNetworkType({
            success: function(t) {
                a.setData({
                    netWorkType: t.networkType
                });
            }
        }), a.checkIfHasAutoId(t);
    },
    initData: function() {
        var i = this;
        a = t.globalData.projectInfo, e = t.globalData.customizeTabId, !a.appId || a.appId.length < 1 || (console.log(" ------------ index:onShow ------------- "), 
        console.log(t.globalData.city), i.getMerchantHidden(), wx.setNavigationBarTitle({
            title: a.projectName
        }), "" == t.globalData.city ? (n = "", o = 1, i.setData({
            posCity: "",
            productArr: []
        }), clearInterval(r), i.getHomepageBaseInfo().then(function() {
            i.getHomePageTop(), i.getCustomizeTabList().then(function() {
                "1" == t.globalData.isGroup && i.getActivity(), i.getHomepageAdvertise(), i.getHomepageProduct(), 
                i.getReommendProducts();
            });
        }), i.getBranchList()) : void 0 == t.globalData.city || "{}" == JSON.stringify(t.globalData.city) ? (t.globalData.city = {}, 
        o = 1, i.setData({
            productArr: []
        }), clearInterval(r), i.getHomepageBaseInfo().then(function() {
            i.getHomePageTop(), i.getCustomizeTabList().then(function() {
                "1" == t.globalData.isGroup && i.getActivity(), i.getHomepageAdvertise(), i.getHomepageProduct(), 
                i.getReommendProducts();
            });
        }), i.getLocation().then(function(t) {
            i.getBranchList();
        })) : t.globalData.city.cityName == this.data.posCity || (n = t.globalData.city.cityID, 
        o = 1, i.setData({
            posCity: t.globalData.city.cityName
        }), clearInterval(r), i.getHomepageBaseInfo().then(function() {
            i.getHomePageTop(), i.getCustomizeTabList().then(function() {
                "1" == t.globalData.isGroup && i.getActivity(), i.getHomepageAdvertise(), i.getHomepageProduct(), 
                i.getReommendProducts();
            });
        }), i.getBranchList()));
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
                    e.setData({
                        minaInfo: i.minaInfo,
                        isQuery: i.minaInfo.allHidden,
                        isLoading: !0
                    }), getApp().globalData.isQuery = i.minaInfo.allHidden, i.minaInfo.rollNewsHidden || e.getCategory().then(function(t) {
                        e.getNewsInfo(t);
                    }), i.minaInfo.listNewsHidden, o(i);
                }
            });
        });
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
                for (var n = Math.ceil(o.productClass.length / 8), s = [], r = 0; r < n; r++) s[r] = [], 
                s[r].push(o.productClass.slice(8 * r, 8 * (r + 1)));
                a.setData({
                    advertisements: o.advertisements,
                    productClass: s
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
                for (var n = 0; n < o.hotSaleList.length; n++) o.hotSaleList[n].hotSaleImage = t.modifyPicSize(o.hotSaleList[n].hotSaleImage, "_r220x220p");
                a.setData({
                    hotSaleList: o.hotSaleList,
                    hotSaleList1: o.hotSaleList.slice(0, 5),
                    hotSaleList2: o.hotSaleList.slice(5, 10),
                    advertiseProducts: o.advertiseProducts
                }), a.getJoinPhone();
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
                clearInterval(r);
                var e = new Date(t.data.beginTime), o = new Date(t.data.nowTime), i = parseInt((e - o) / 1e3);
                if (i > 0) t.data.activityStart = !1, t.data.countDown = a.secondToTime(i), r = setInterval(function() {
                    i--, t.data.countDown = a.secondToTime(i), a.setData({
                        activityInfo: t.data
                    }), i < 1 && (clearInterval(r), a.refresh());
                }, 1e3); else {
                    if (t.data.activityTime <= 0) return;
                    t.data.activityStart = !0, t.data.countDown = a.secondToTime(t.data.activityTime), 
                    r = setInterval(function() {
                        t.data.activityTime--, t.data.countDown = a.secondToTime(t.data.activityTime), a.setData({
                            activityInfo: t.data
                        }), t.data.activityTime <= 0 && (clearInterval(r), a.refresh());
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
    getMerchantHidden: function() {
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
                    hiddenMerchant: e.isDeleted
                });
            }
        });
    },
    getHomePageInfo: function(e) {
        var o = this;
        return new Promise(function(e, i) {
            wx.request({
                url: t.globalData.comUrl + "tabs_getIndexDetail3.action",
                data: {
                    appId: a.appId,
                    projectId: a.appId,
                    status: "2",
                    isGroup: t.globalData.isGroup
                },
                success: function(a) {
                    var i = t.getJsonData(a.data);
                    getApp().globalData.isQuery = i.minaInfo.allHidden, console.log(t.globalData.isQuery), 
                    o.setData({
                        isQuery: i.minaInfo.allHidden
                    });
                    for (var n = 0; n < i.advertisements.length; n++) i.advertisements[n].image = t.modifyPicSize(i.advertisements[n].image, "_r750x400p");
                    for (var s = 0; s < i.hotSaleList.length; s++) i.hotSaleList[s].hotSaleImage = t.modifyPicSize(i.hotSaleList[s].hotSaleImage, "_r330x330p");
                    for (var r = 0; r < i.productClass.length; r++) i.productClass[r].categoryPicture = t.modifyPicSize(i.productClass[r].categoryPicture, "_r106x106p");
                    for (var c = Math.ceil(i.productClass.length / 8), l = [], u = 0; u < c; u++) l[u] = [], 
                    l[u].push(i.productClass.slice(8 * u, 8 * (u + 1)));
                    console.log(l), o.setData({
                        indexData: i,
                        productClass: l,
                        hideNews: i.minaInfo.homeOnekeyHidden,
                        hotSaleList: i.hotSaleList,
                        hotSaleList1: i.hotSaleList.slice(0, 5),
                        hotSaleList2: i.hotSaleList.slice(5, 10),
                        subVersion: i.minaInfo.subVersion,
                        oneKeyHidden: i.minaInfo.homeOnekeyHidden
                    }), t.globalData.projectInfo.subVersion = i.minaInfo.subVersion, t.globalData.projectInfo.oneKeyHidden = i.minaInfo.homeOnekeyHidden, 
                    i.minaInfo.homeOnekeyHidden || o.getCategory().then(function(t) {
                        o.getNewsInfo(t);
                    }), wx.hideToast(), wx.stopPullDownRefresh(), e(i);
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
                        url: "https://api.map.baidu.com/geocoder/v2/?ak=KM5p19PFWrU83vSkqpuC01LLCzlEFZpw&location=" + o.latitude + "," + o.longitude + "&output=json&pois=1",
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
                }
            });
        });
    },
    getCouponInfo: function(a) {
        var e = this;
        t.getMemberId();
        wx.request({
            url: t.globalData.comUrl + "act_getActivityList.action",
            data: {
                branchInfoId: -1,
                customizetabId: t.getCustomizeId("Activity")
            },
            success: function(a) {
                var o = t.getJsonData(a.data);
                console.log(o), e.setData({
                    couponList: validCoupon
                });
            },
            fail: function(a) {
                t.hint(a);
            }
        });
    },
    getJoinPhone: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "tabs_getAboutMerchant.action",
            data: {
                customizetabId: e.LynxApplyFor_About_Merchant
            },
            success: function(e) {
                var o = t.getJsonData(e.data);
                a.setData({
                    joinPhone: o.phone
                });
            }
        });
    },
    getCategory: function() {
        return new Promise(function(o, i) {
            wx.request({
                url: t.globalData.comUrl + "tabs_getPhotoInfoTabCategory.action",
                data: {
                    appId: a.appId,
                    customizeTabId: e["Photo-Info-Tab-Level2"]
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
                    for (var i = t.getJsonData(a.data), n = 0; n < i.length; n++) "Activity-Group" == i[n].sysTabName && (t.globalData.isGroup = "1", 
                    e.setData({
                        isGroup: "1"
                    }));
                    for (var s = c, r = [], l = 0; l < i.length; l++) for (var u = 0; u < s.length; u++) "" != i[l].sysTabNameTag && i[l].sysTabNameTag == s[u] ? r.push(i[l]) : "" == i[l].sysTabNameTag && i[l].sysTabName == s[u] && r.push(i[l]);
                    if ("O2O_V1" == e.data.minaInfo.subVersion) {
                        for (var d = Math.ceil(r.length / 8), g = [], p = 0; p < d; p++) g[p] = [], g[p].push(r.slice(8 * p, 8 * (p + 1)));
                        console.log(g), e.setData({
                            moreArr: g
                        });
                    } else e.setData({
                        moreArr: r
                    });
                    o(i);
                }
            });
        });
    },
    toMoreFunction: function(a) {
        switch (console.log(a.currentTarget.dataset.title), a.currentTarget.dataset.location) {
          case "LynxProductList":
            t.globalData.isPerson ? wx.navigateTo({
                url: "../product/product"
            }) : wx.switchTab({
                url: "../product/product"
            });
            break;

          case "LynxAbout_Merchant":
            1 == this.data.isPerson ? wx.navigateTo({
                url: "../store/store"
            }) : wx.switchTab({
                url: "../store/store"
            });
            break;

          case "LynxPhoto_Info_Post_Tab":
            wx.navigateTo({
                url: "../supply/supply"
            });
            break;

          case "LynxPhoto_H_Info_Tab_Level2":
            wx.navigateTo({
                url: "../news/news?sysTabName=LynxPhoto_H_Info_Tab_Level2&title=" + a.currentTarget.dataset.title
            });
            break;

          case "Photo-Info-Tab-Level2":
            wx.navigateTo({
                url: "../news/news?sysTabName=Photo-Info-Tab-Level2&title=" + a.currentTarget.dataset.title
            });
            break;

          case "Video_Gallery":
            wx.navigateTo({
                url: "../publicity/publicity"
            });
            break;

          case "Flexi-Form":
            wx.navigateTo({
                url: "../store/store-detail/custom/custom"
            });
            break;

          case "Activity":
            wx.navigateTo({
                url: "../self/mycoupon/mycoupon"
            });
            break;

          case "LynxApplyFor_About_Merchant":
            t.getMemberId() ? wx.navigateTo({
                url: "../join/join"
            }) : wx.navigateTo({
                url: "../login/login"
            });
            break;

          case "Activity-Group":
            wx.navigateTo({
                url: "../group/group-prolist/group-prolist"
            });
        }
    },
    getBranchList: function() {
        var o = this, i = {
            appId: a.appId,
            customizeTabId: e.LynxAbout_Merchant,
            advertisement: 1,
            current: 1,
            level: 0
        };
        t.globalData.city.cityID > 0 && (i.cityId = t.globalData.city.cityID), t.globalData.city.provinceId > 0 && (i.provinceId = t.globalData.city.provinceId), 
        wx.request({
            url: t.globalData.comUrl + "mctab_searchBranchInfo.action",
            data: i,
            success: function(a) {
                var e = t.getJsonData(a.data);
                if (e.pageList.length > 0) {
                    for (var i = 0; i < e.pageList.length; i++) e.pageList[i].pic1 = t.modifyPicSize(e.pageList[i].pic1, "_r192x90p");
                    o.setData({
                        branchInfo: e.pageList,
                        hasBranch: !0
                    });
                } else o.setData({
                    hasBranch: !1
                });
            },
            fail: function(a) {
                t.hint();
            }
        });
    },
    getNewsInfo: function(o) {
        var i = this;
        o.length >= 1 && (i.setData({
            headlineImage: o[0].categoryIcon
        }), wx.request({
            url: t.globalData.comUrl + "tabs_getPhotoInfoTabFromL2ToL1.action",
            data: {
                appId: a.appId,
                customizeTabId: e["Photo-Info-Tab-Level2"],
                categoryId: o[0].code,
                current: 1
            },
            success: function(a) {
                for (var e = t.getJsonData(a.data), o = [], n = Math.ceil(e.pageList.length / 2), s = 0; s < n; s++) o[s] = [], 
                o[s].push(e.pageList.slice(2 * s, 2 * (s + 1)));
                for (var r = 0; r < e.pageList.length; r++) e.pageList[r].picture1 = t.modifyPicSize(e.pageList[r].picture1, "_r140x140p");
                i.setData({
                    recommendNews: e.pageList.slice(0, 3),
                    headlineArr: o
                });
            }
        }));
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
    getReommendProducts: function() {
        if (!s) {
            s = !0;
            var n = this;
            wx.request({
                url: t.globalData.comUrl + "tabs_getProdPage.action",
                data: {
                    appId: a.appId,
                    customizeTabId: e.LynxProductList,
                    proId: "",
                    disId: "",
                    productName: "",
                    current: o,
                    cityId: "",
                    isGroup: t.globalData.isGroup
                },
                success: function(a) {
                    var e = t.getJsonData(a.data);
                    console.log(e), i = e.pages, n.setData({
                        productArr: n.data.productArr.concat(e.productList)
                    }), s = !1;
                }
            });
        }
    },
    toSearch: function(t) {
        wx.navigateTo({
            url: "../search/search?type=0"
        });
    },
    toPosition: function() {
        wx.navigateTo({
            url: "../position/position"
        });
    },
    toProductList: function(t) {
        wx.navigateTo({
            url: "../product/pro-list/pro-list?bigCateCode=" + t.currentTarget.dataset.code + "&title=" + t.currentTarget.dataset.title
        });
    },
    toProductDetail: function(t) {
        wx.navigateTo({
            url: "../product/pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
        });
    },
    toStore: function() {
        wx.switchTab({
            url: "../store/store"
        });
    },
    toStoreDetail: function(t) {
        wx.navigateTo({
            url: "../store/store-detail/store-detail?tabContentId=" + t.currentTarget.dataset.sid
        });
    },
    toNewsList: function() {
        wx.navigateTo({
            url: "../news/news?sysTabName=Photo-Info-Tab-Level2"
        });
    },
    toNewsDetail: function(t) {
        wx.navigateTo({
            url: "../news/news-detail/news-detail?tabContentId=" + t.currentTarget.dataset.nid + "&type=4"
        });
    },
    joinPhoneCall: function() {
        var t = this;
        t.data.joinPhone && wx.makePhoneCall({
            phoneNumber: t.data.joinPhone
        });
    },
    toMyCoupon: function() {
        wx.navigateTo({
            url: "../self/mycoupon/mycoupon"
        });
    },
    toGroupActivity: function() {
        wx.navigateTo({
            url: "../group/group-prolist/group-prolist"
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            indexData: {},
            productArr: [],
            bottomHint: !0,
            posCity: t.globalData.city.cityName
        }), clearInterval(r), n = "", o = 1;
        var a = this;
        a.getHomepageBaseInfo().then(function() {
            a.getHomePageTop(), a.getCustomizeTabList().then(function() {
                "1" == t.globalData.isGroup && a.getActivity(), a.getHomepageAdvertise(), a.getHomepageProduct(), 
                a.getReommendProducts();
            });
        }), a.getBranchList();
    },
    refresh: function() {
        this.setData({
            indexData: {},
            productArr: [],
            bottomHint: !0,
            activityInfo: "",
            posCity: t.globalData.city.cityName
        }), n = "", o = 1, clearInterval(r);
        var a = this;
        a.getHomepageBaseInfo().then(function() {
            a.getHomePageTop(), a.getCustomizeTabList().then(function() {
                "1" == t.globalData.isGroup && a.getActivity(), a.getHomepageAdvertise(), a.getHomepageProduct(), 
                a.getReommendProducts();
            });
        }), a.getBranchList();
    },
    onReachBottom: function() {
        o < i && (o++, this.getReommendProducts());
    },
    onShareAppMessage: function() {
        return {
            title: a.productName,
            path: "/pages/index/index",
            success: function(t) {},
            fail: function(t) {}
        };
    }
});