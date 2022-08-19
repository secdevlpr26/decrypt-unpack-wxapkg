function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = getApp(), o = e.globalData.projectInfo, i = e.globalData.customizeTabId, s = 1, n = 1, r = !1, c = "", u = "";

Page((a = {
    data: {
        styleConfig: e.globalData.styleConfig,
        productArr: [],
        productClass: [],
        moreArr: [],
        hotSaleList: [],
        adBranchList: [],
        posCity: "",
        minaInfo: "",
        hasBranch: !0,
        styleStatus: 1,
        hiddenMerchant: !0,
        joinPhone: "",
        activityInfo: "",
        isGroup: "",
        isPerson: e.globalData.isPerson,
        isQuery: 1 == e.globalData.isPerson,
        showAddress: "",
        location: {},
        lat: "",
        lng: "",
        couponAdImg: "",
        advertisements: [],
        topHeight: "",
        isLoading: !1,
        activitySeckill: {},
        activityStart: "",
        hasSeckill: "",
        hideBigImg: !0,
        adBigImage: "",
        hiddenAiImg: !0,
        videoList: {},
        disProList: [],
        actDistribution: {},
        memberType: "",
        hideShareCoupon: !0,
        currentSwipermoreArr: 0
    },
    swiperChange_advertisemore: function(t) {
        this.setData({
            currentSwipermoreArr: t.detail.current
        });
    },
    checkIfHasAutoId: function(t) {
        var a = this;
        if ("undefined" != typeof sessionStorage && (!sessionStorage.getItem("globalAutoId") || t && t.autoId || (t = {
            autoId: sessionStorage.getItem("globalAutoId")
        })), !t || !t.autoId) return a.initData(), void e.refreshProjectData(e.globalData.autoId).then(function(t) {
            wx.setStorageSync("autoId" + e.globalData.autoId, t), wx.setNavigationBarTitle({
                title: t.projectName
            });
        });
        if (t.autoId) {
            "undefined" != typeof sessionStorage && sessionStorage.setItem("globalAutoId", t.autoId);
            var o = t.autoId, i = wx.getStorageSync("data_js");
            i.autoId == o ? (i.autoId = o, e.initProjectData(i), e.getProjectData(), e.refreshProjectData(o).then(function(t) {
                wx.setStorageSync("data_js", t);
            }), a.initData()) : e.refreshProjectData(o).then(function(t) {
                t.autoId = o, wx.setStorageSync("data_js", t), e.initProjectData(t), e.getProjectData(), 
                a.initData();
            });
        }
    },
    initData: function() {
        o = e.globalData.projectInfo, i = e.globalData.customizeTabId;
        var t = wx.getStorageSync("autoId" + e.globalData.autoId);
        t.projectName ? wx.setNavigationBarTitle({
            title: t.projectName
        }) : wx.setNavigationBarTitle({
            title: e.globalData.projectInfo.projectName
        });
        var a = this, s = wx.getStorageSync("memberType" + e.globalData.autoId);
        a.setData({
            memberType: s
        }), a.getCustAndCateList(), a.getHomepageBaseInfo().then(function() {
            a.getHomePageTop(), a.getCustomizeTabList().then(function() {
                "1" == e.globalData.isGroup && a.getActivity(), "1" == a.data.hasSeckill && a.getSeckillActivity(), 
                "1" == a.data.hasDistribution && "3" == a.data.memberType ? (a.checkDistribuction().then(function() {
                    a.getHomepageProduct(), a.getReommendProducts();
                }), a.getDistributeProduct()) : (a.getHomepageProduct(), a.getReommendProducts());
            });
        }), a.getHomepageAdvertise(), a.getLocation().then(function() {
            a.getBranchInfo();
        }), a.getMerchantHidden();
    },
    onLoad: function(t) {
        console.log(" ------------ index:onLoad ------------- ");
        var a = this, o = decodeURIComponent(t.scene);
        o && "undefined" != o && wx.setStorageSync("parentId" + e.globalData.autoId, o), 
        e.loginVzSystem(), wx.getNetworkType({
            success: function(t) {
                a.setData({
                    netWorkType: t.networkType
                });
            }
        }), this.checkIfHasAutoId(t);
    },
    getHomePageTop: function() {
        var t = this;
        wx.request({
            url: e.globalData.comUrl + "tabs_getHomepageTop.action",
            data: {
                advertisementsCId: i.LynxHomePage,
                informationsCId: i.LynxPhoto_H_Info_Tab_Level2,
                productCId: i.LynxProductList
            },
            success: function(a) {
                for (var o = e.getJsonData(a.data), i = 0; i < o.advertisements.length; i++) o.advertisements[i].image = e.modifyPicSize(o.advertisements[i].image, "_r750x400p");
                if ("O2O_V2" == t.data.minaInfo.subVersion) {
                    for (var s = Math.ceil(o.productClass.length / 8), n = [], r = 0; r < s; r++) n[r] = [], 
                    n[r].push(o.productClass.slice(8 * r, 8 * (r + 1)));
                    t.setData({
                        advertisements: o.advertisements,
                        productClass: n
                    });
                } else {
                    for (var c = Math.ceil(o.productClass.length / 4), u = [], l = 0; l < c; l++) u[l] = [], 
                    u[l].push(o.productClass.slice(4 * l, 4 * (l + 1)));
                    t.setData({
                        advertisements: o.advertisements,
                        productClass: u
                    });
                }
                wx.stopPullDownRefresh();
            }
        });
    },
    getHomepageBaseInfo: function() {
        var t = this;
        return new Promise(function(a, i) {
            wx.request({
                url: e.globalData.comUrl + "tabs_getHomepageBaseInfo.action",
                data: {
                    projectId: o.appId
                },
                success: function(o) {
                    var i = e.getJsonData(o.data);
                    e.globalData.changeClassify = i.minaInfo.productCategory, e.globalData.topayHidden = i.minaInfo.showCashOnDelivery, 
                    e.globalData.showComment = i.minaInfo.showComment, e.globalData.isQuery = i.minaInfo.allHidden, 
                    i.minaInfo.defShowAI && !t.hasGoAI && (t.hasGoAI = !0, wx.navigateTo({
                        url: "/pages/packages/AI/index/index"
                    })), t.setData({
                        minaInfo: i.minaInfo,
                        isQuery: i.minaInfo.allHidden,
                        isLoading: !0
                    }), i.minaInfo.videoHidden || t.getVideoList(), a(i);
                }
            });
        });
    },
    getDistributeProduct: function() {
        var t = this;
        e.request({
            url: e.globalData.comUrl + "activityProduct_findGroupsProduceList.action",
            data: {
                appId: e.globalData.projectInfo.appId,
                groupsId: "distribution",
                current: 1,
                isHomePage: 1
            },
            success: function(a) {
                console.log(a.data);
                var e = a.data;
                t.setData({
                    disProList: e.pageList
                });
            }
        });
    },
    checkDistribuction: function() {
        var t = this;
        return new Promise(function(a, o) {
            wx.request({
                url: e.globalData.comUrl + "dis_checkDistribuction.action",
                data: {
                    appId: e.globalData.projectInfo.appId,
                    memberId: e.getMemberId()
                },
                success: function(o) {
                    var i = e.getJsonData(o.data);
                    e.globalData.actDistribution = i.activityDistribution, t.setData({
                        actDistribution: i.activityDistribution
                    }), a();
                },
                fail: function() {
                    e.hint(), a();
                }
            });
        });
    },
    getVideoList: function() {
        var t = this;
        wx.request({
            url: e.globalData.comUrl + "tabs_getVideoGalleryList.action",
            data: {
                appId: e.globalData.projectInfo.appId,
                customizeTabId: e.globalData.customizeTabId.Video_Gallery,
                isNeedHttps: 0
            },
            success: function(a) {
                console.log(a);
                var o = e.getJsonData(a.data);
                t.setData({
                    videoList: o
                });
            }
        });
    },
    getBranchInfo: function(t) {
        var a = this, s = {
            appId: o.appId,
            projectId: o.appId,
            adLBSBranchCId: i.LynxAbout_Merchant,
            adProdCount: 4,
            isAdvertisement: 1,
            latitude: a.data.lat,
            longitude: a.data.lng,
            checkDistributionScope: 1
        };
        t && (s.latitude = "23.131687", s.longitude = "113.36391", s.checkDistributionScope = ""), 
        wx.request({
            url: e.globalData.comUrl + "tabs_getHomepageBranch.action",
            data: s,
            success: function(t) {
                for (var o = e.getJsonData(t.data), i = [], s = 0; s < o.adLBSBranchInfoList.pageList.length; s++) {
                    var n = o.adLBSBranchInfoList.pageList[s];
                    n.pic1 = e.modifyPicSize(n.pic1, "_r150x100p"), n.distance >= 1e3 ? n.distance = n.distance / 1e3 + "km" : n.distance = n.distance + "m";
                    for (var r = 0; r < n.productList.length; r++) n.productList[r].image = e.modifyPicSize(n.productList[r].image, "_r125x125p");
                    i.push(n);
                }
                a.setData({
                    adBranchList: i,
                    hasBranch: 0 != o.adLBSBranchInfoList.pageList.length
                });
            }
        });
    },
    getCustAndCateList: function() {
        var t = this;
        e.request({
            url: e.globalData.comUrl + "tabs_getCustAndCateList.action",
            data: {
                projectId: o.appId
            },
            success: function(a) {
                console.log(a.data);
                var e = a.data.content, o = e.pageList;
                if (0 != o.length) {
                    var i = [], s = void 0, n = 0 == e.lineNum ? 2 : e.lineNum, r = 0 == e.lineLimit ? 5 : e.lineLimit, c = r * n;
                    console.log(c), s = Math.ceil(o.length / c);
                    for (var u = 0; u < s; u++) i[u] = [], i[u].push(o.slice(c * u, c * (u + 1)));
                    var l = 0, d = 400;
                    i.length > 0 && (d = (l = 170 * Math.ceil(i[0][0].length / r) - 20) + 420), t.setData({
                        HidePlaceImage: !0,
                        moreArr: i,
                        label: e,
                        customHeight: l,
                        topHeight: d
                    });
                }
            }
        });
    },
    getHomepageProduct: function() {
        var t = this;
        wx.request({
            url: e.globalData.comUrl + "tabs_getHomepageProduct.action",
            data: {
                advertise: "",
                cityId: "",
                hotSale: "hotSale",
                isGroup: "1",
                productCId: i.LynxProductList,
                scroll: ""
            },
            success: function(a) {
                for (var o = e.getJsonData(a.data), i = 0; i < o.hotSaleList.length; i++) o.hotSaleList[i].hotSaleImage = e.modifyPicSize(o.hotSaleList[i].hotSaleImage, "_r220x220p"), 
                "5" == o.hotSaleList[i].actType || "3" == o.hotSaleList[i].actType || "6" == o.hotSaleList[i].actType && "3" == t.data.memberType && t.data.actDistribution.enable ? o.hotSaleList[i].curPrice = o.hotSaleList[i].groupsPrice : 1 != o.hotSaleList[i].purpose && 3 != o.hotSaleList[i].purpose || (o.hotSaleList[i].curPrice = o.hotSaleList[i].price);
                t.setData({
                    hotSaleList: o.hotSaleList
                }), t.getJoinPhone();
            }
        });
    },
    getHomepageAdvertise: function() {
        var t = this;
        wx.request({
            url: e.globalData.comUrl + "tabs_getHomepageAdvertising.action",
            data: {
                projectId: o.appId
            },
            success: function(a) {
                var o = e.getJsonData(a.data);
                o.PCAdevertising_activity[0] && t.setData({
                    couponAdImg: o.PCAdevertising_activity[0].picture1
                }), o.PCAdevertising_mid.length > 0 && (o.PCAdevertising_mid[0] && t.setData({
                    PCAdevertising_mid: o.PCAdevertising_mid[0].picture1
                }), "" == o.PCAdevertising_mid[0].picture1 || void 0 == o.PCAdevertising_mid[0].picture1 ? t.setData({
                    hiddenAiImg: !0
                }) : t.setData({
                    hiddenAiImg: !1
                }));
            }
        });
    },
    getActivity: function() {
        var t = this;
        wx.request({
            url: e.globalData.comUrl + "activityProduct_groupsIndex.action",
            data: {
                appId: e.globalData.projectInfo.appId
            },
            success: function(a) {
                clearInterval(c);
                var e = new Date(a.data.beginTime), o = new Date(a.data.nowTime), i = parseInt((e - o) / 1e3);
                if (i > 0) a.data.activityStart = !1, a.data.countDown = t.secondToTime(i), c = setInterval(function() {
                    i--, a.data.countDown = t.secondToTime(i), t.setData({
                        activityInfo: a.data
                    }), i < 1 && (clearInterval(c), t.refresh());
                }, 1e3); else {
                    if (a.data.activityTime <= 0) return;
                    a.data.activityStart = !0, console.log(a.data), a.data.countDown = t.secondToTime(a.data.activityTime), 
                    c = setInterval(function() {
                        a.data.activityTime--, a.data.countDown = t.secondToTime(a.data.activityTime), t.setData({
                            activityInfo: a.data
                        }), a.data.activityTime <= 0 && (clearInterval(c), t.refresh());
                    }, 1e3);
                }
            }
        });
    },
    getSeckillActivity: function() {
        var t = this;
        wx.request({
            url: e.globalData.comUrl + "activityProduct_groupsIndex.action",
            data: {
                appId: e.globalData.projectInfo.appId,
                actType: "3"
            },
            success: function(a) {
                clearInterval(u);
                var e = new Date(a.data.beginTime), o = new Date(a.data.nowTime), i = parseInt((e - o) / 1e3);
                if (i > 0) a.data.activityStart = !1, a.data.countDown = t.secondToTime(i), u = setInterval(function() {
                    i--, a.data.countDown = t.secondToTime(i), t.setData({
                        activitySeckill: a.data
                    }), i < 1 && (clearInterval(u), t.refresh());
                }, 1e3); else {
                    if (a.data.activityTime <= 0) return;
                    a.data.activityStart = !0, a.data.countDown = t.secondToTime(a.data.activityTime), 
                    u = setInterval(function() {
                        a.data.activityTime--, a.data.countDown = t.secondToTime(a.data.activityTime), t.setData({
                            activitySeckill: a.data
                        }), a.data.activityTime <= 0 && (clearInterval(u), t.refresh());
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
        var t = this;
        wx.request({
            url: e.globalData.comUrl + "tabs_getCustomizeTabsById.action",
            data: {
                appId: o.appId,
                customizeTabId: i.LynxAbout_Merchant
            },
            success: function(a) {
                var o = e.getJsonData(a.data);
                t.setData({
                    hiddenMerchant: o.isDeleted
                });
            }
        });
    },
    getLocation: function(t) {
        var a = this;
        return new Promise(function(t, o) {
            wx.getLocation({
                type: "wgs84",
                success: function(o) {
                    console.log(o), wx.request({
                        url: "https://api.map.baidu.com/geocoder/v2/",
                        data: {
                            ak: "RPmvxqIQFLLaG05xh1nEWhCCevcfR4oF",
                            coordtype: "wgs84ll",
                            location: o.latitude + "," + o.longitude,
                            output: "json",
                            pois: 1,
                            latest_admin: 1
                        },
                        jsonp: !0,
                        success: function(o) {
                            console.log("百度接口", o);
                            var i = o.data.result.addressComponent.city + o.data.result.addressComponent.district + o.data.result.addressComponent.street + o.data.result.addressComponent.street_number;
                            a.setData({
                                address: o.data.result.addressComponent,
                                showAddress: i,
                                location: o.data.result.location,
                                lat: o.data.result.location.lat,
                                lng: o.data.result.location.lng
                            }), e.globalData.g_location = o.data.result.location, e.globalData.g_showAddress = o.data.result.addressComponent.city, 
                            t();
                        }
                    });
                },
                fail: function() {
                    a.getBranchInfo(!0), a.setData({
                        address: "全国",
                        showAddress: "全国"
                    });
                }
            });
        });
    },
    getCouponInfo: function(t) {
        var a = this;
        e.getMemberId();
        wx.request({
            url: e.globalData.comUrl + "act_getActivityList.action",
            data: {
                branchInfoId: -1,
                customizetabId: e.getCustomizeId("Activity")
            },
            success: function(t) {
                var o = e.getJsonData(t.data);
                console.log(o), a.setData({
                    couponList: validCoupon
                });
            },
            fail: function(t) {
                e.hint(t);
            }
        });
    },
    getJoinPhone: function() {
        var t = this;
        wx.request({
            url: e.globalData.comUrl + "tabs_getAboutMerchant.action",
            data: {
                customizetabId: i.LynxApplyFor_About_Merchant
            },
            success: function(a) {
                var o = e.getJsonData(a.data);
                t.setData({
                    joinPhone: o.phone
                });
            }
        });
    },
    getCategory: function() {
        return new Promise(function(t, a) {
            wx.request({
                url: e.globalData.comUrl + "tabs_getPhotoInfoTabCategory.action",
                data: {
                    appId: o.appId,
                    customizeTabId: i["Photo-Info-Tab-Level2"]
                },
                success: function(a) {
                    var o = e.getJsonData(a.data);
                    t(o);
                }
            });
        });
    },
    getCustomizeTabList: function() {
        var t = this;
        return new Promise(function(a, i) {
            wx.request({
                url: e.globalData.comUrl + "tabs_getCustomizeTabList.action",
                data: {
                    appId: o.appId
                },
                success: function(o) {
                    for (var i = e.getJsonData(o.data), s = 0; s < i.length; s++) "Activity-Group" == i[s].sysTabName && (e.globalData.isGroup = "1", 
                    t.setData({
                        isGroup: "1"
                    })), "Activity-Kill" == i[s].sysTabName && (e.globalData.isGroup = "1", t.setData({
                        hasSeckill: "1"
                    })), "Activity-Distribution" == i[s].sysTabName && (e.globalData.isGroup = "1", 
                    t.setData({
                        hasDistribution: "1"
                    })), "CardNo" != i[s].sysTabNameTag && "CardNo" != i[s].sysTabName || (e.globalData.isShowPrePay = "1"), 
                    "Online-Chat" == i[s].sysTabName && t.setData({
                        hiddenService: !0
                    });
                    a(i);
                }
            });
        });
    },
    getProCategory: function() {
        var t = this;
        wx.request({
            url: e.globalData.comUrl + "tabs_getAppCategoryProductByCity.action",
            data: {
                appId: o.appId,
                customizeTabId: i.LynxProductList,
                count: 6,
                jsoncallback: "",
                productName: "",
                isGroup: 1
            },
            success: function(a) {
                for (var o = a.data.substring(1).slice(0, -1), i = JSON.parse(o), s = 0; s < i.length; s++) for (var n = 0; n < i[s].productList.length; n++) i[s].productList[n].productImageList[0].imageURL && (i[s].productList[n].productImageList[0].imageURL = e.modifyPicSize(i[s].productList[n].productImageList[0].imageURL, "_r300x300p"));
                t.setData({
                    productArr: i
                });
            }
        });
    },
    getReommendProducts: function() {
        if (!r) {
            r = !0;
            var t = this;
            wx.request({
                url: e.globalData.comUrl + "tabs_getAppProductByCity.action",
                data: {
                    appId: o.appId,
                    customizeTabId: i.LynxProductList,
                    proId: "",
                    disId: "",
                    productName: "",
                    current: s,
                    cityId: "",
                    isGroup: 1
                },
                success: function(a) {
                    var o = e.getJsonData(a.data);
                    n = o.pages;
                    for (var i = 0; i < o.pageList.length; i++) 3 == o.pageList[i].actType || 5 == o.pageList[i].actType || 6 == o.pageList[i].actType && 3 == t.data.memberType && t.data.actDistribution.enable ? o.pageList[i].curPrice = o.pageList[i].groupsPrice : 1 != o.pageList[i].purpose && 3 != o.pageList[i].purpose || (o.pageList[i].curPrice = o.pageList[i].price), 
                    o.pageList[i].productModelList[0] && String(o.pageList[i].productModelList[0].stock).length > 3 && (o.pageList[i].productModelList[0].stock = String(o.pageList[i].productModelList[0].stock).substring(0, 3)), 
                    String(Math.abs(o.pageList[i].quantity)).length > 3 && (o.pageList[i].quantity = String(Math.abs(o.pageList[i].quantity)).substring(0, 3)), 
                    String(o.pageList[i].readTimes).length > 3 && (o.pageList[i].readTimes = String(o.pageList[i].readTimes).substring(0, 3)), 
                    o.pageList[i].productImageVOList[0].imageURL = e.modifyPicSize(o.pageList[i].productImageVOList[0].imageURL, "_r200x200p");
                    t.setData({
                        productArr: t.data.productArr.concat(o.pageList)
                    }), r = !1;
                }
            });
        }
    },
    toMoreFunction: function(t) {
        switch (console.log(t.currentTarget.dataset.title), t.currentTarget.dataset.location) {
          case "LynxProductList":
            1 == this.data.isPerson ? wx.navigateTo({
                url: "/pages/product/product"
            }) : wx.switchTab({
                url: "/pages/product/product"
            }), this.setData({
                hideShareCoupon: !0
            });
            break;

          case "LynxAbout_Merchant":
            1 == this.data.isPerson ? wx.navigateTo({
                url: "/pages/store/layout-meirong/store"
            }) : wx.switchTab({
                url: "/pages/store/layout-meirong/store"
            });
            break;

          case "LynxPhoto_Info_Post_Tab":
            wx.navigateTo({
                url: "/pages/supply/supply"
            });
            break;

          case "LynxPhoto_H_Info_Tab_Level2":
            wx.navigateTo({
                url: "/pages/news/news"
            });
            break;

          case "Photo-Info-Tab-Level2":
            wx.navigateTo({
                url: "/pages/news/layout-o2o/news?sysTabName=Photo-Info-Tab-Level2&title=" + t.currentTarget.dataset.title
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
            e.getMemberId() ? wx.navigateTo({
                url: "/pages/join/join"
            }) : wx.navigateTo({
                url: "/pages/login/login"
            });
            break;

          case "About-Merchant":
            1 == this.data.isPerson ? wx.switchTab({
                url: "/pages/about-us/about-us"
            }) : wx.navigateTo({
                url: "/pages/about-us/about-us"
            });
            break;

          case "Activity-Group":
            wx.navigateTo({
                url: "/pages/packages/group/group-prolist/group-prolist"
            });
            break;

          case "Activity-Kill":
            wx.navigateTo({
                url: "/pages/seckill/seckill"
            });
            break;

          case "CardNo":
            e.getMemberId() ? wx.navigateTo({
                url: "/pages/self/card/card"
            }) : wx.navigateTo({
                url: "/pages/login/login"
            });
            break;

          case "Activity-Distribution":
            e.getMemberId() ? wx.navigateTo({
                url: "/pages/packages/distribute/distribute"
            }) : wx.navigateTo({
                url: "/pages/login/login"
            });
            break;

          case "AI":
            wx.navigateTo({
                url: "/pages/packages/AI/index/index"
            });
        }
    }
}, t(a, "toMoreFunction", function(t) {
    switch (console.log(t.currentTarget.dataset.location), t.currentTarget.dataset.location) {
      case "LynxProductList":
        e.globalData.isPerson ? wx.navigateTo({
            url: e.globalData.pagesPath.proPath
        }) : wx.switchTab({
            url: e.globalData.pagesPath.proPath
        }), this.setData({
            hideShareCoupon: !0
        });
        break;

      case "LynxAbout_Merchant":
        1 == this.data.isPerson ? wx.navigateTo({
            url: e.globalData.pagesPath.storePath
        }) : wx.switchTab({
            url: e.globalData.pagesPath.storePath
        });
        break;

      case "LynxPhoto_Info_Post_Tab":
        wx.navigateTo({
            url: "/pages/supply/supply"
        });
        break;

      case "LynxPhoto_H_Info_Tab_Level2":
        wx.navigateTo({
            url: "/pages/news/news?sysTabName=LynxPhoto_H_Info_Tab_Level2&title=" + t.currentTarget.dataset.title
        });
        break;

      case "Photo-Info-Tab-Level2":
        wx.navigateTo({
            url: "/pages/news/news?sysTabName=Photo-Info-Tab-Level2&title=" + t.currentTarget.dataset.title
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
        e.getMemberId() ? wx.navigateTo({
            url: "/pages/join/join"
        }) : wx.navigateTo({
            url: "/pages/login/login"
        });
        break;

      case "Activity-Group":
        wx.navigateTo({
            url: "/pages/packages/group/group-prolist/group-prolist"
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
        e.getMemberId() ? wx.navigateTo({
            url: "/pages/self/card/card"
        }) : wx.navigateTo({
            url: "/pages/login/login"
        });
        break;

      case "Activity-Distribution":
        e.getMemberId() ? wx.navigateTo({
            url: "/pages/packages/distribute/distribute"
        }) : wx.navigateTo({
            url: "/pages/login/login"
        });
        break;

      case "AI":
        wx.navigateTo({
            url: "/pages/packages/AI/index/index"
        });
    }
}), t(a, "getBranchList", function() {
    var t = this, a = {
        appId: o.appId,
        customizeTabId: i.LynxAbout_Merchant,
        advertisement: 1,
        current: 1,
        level: 0
    };
    wx.request({
        url: e.globalData.comUrl + "mctab_searchBranchInfo.action",
        data: a,
        success: function(a) {
            var o = e.getJsonData(a.data);
            if (o.pageList.length > 0) {
                for (var i = 0; i < o.pageList.length; i++) o.pageList[i].pic1 = e.modifyPicSize(o.pageList[i].pic1, "_r192x90p");
                t.setData({
                    branchInfo: o.pageList,
                    hasBranch: !0
                });
            } else t.setData({
                hasBranch: !1
            });
        },
        fail: function(t) {
            e.hint();
        }
    });
}), t(a, "adtap", function(t) {
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
}), t(a, "exitBigImage", function() {
    this.setData({
        hideBigImg: !0
    });
}), t(a, "toSearch", function(t) {
    wx.navigateTo({
        url: "/pages/search/search?type=0"
    });
}), t(a, "toPosition", function() {
    var t = this;
    wx.chooseLocation({
        success: function(a) {
            console.log(a), e.globalData.g_cityName = a.address, t.setData({
                showAddress: a.address,
                lat: a.latitude,
                lng: a.longitude
            });
            var o = {
                lat: a.latitude,
                lng: a.longitude
            };
            e.globalData.g_location = o, t.getBranchInfo();
        }
    });
}), t(a, "toProductList", function(t) {
    console.log(t), "" != t.currentTarget.dataset.idx ? wx.navigateTo({
        url: "/pages/product/pro-list/pro-list?bigCateCode=" + t.currentTarget.dataset.idx + "&title=" + t.currentTarget.dataset.title
    }) : this.toMoreFunction(t);
}), t(a, "toProductDetail", function(t) {
    wx.navigateTo({
        url: "/pages/product/pro-detail/pro-detail?productId=" + t.currentTarget.dataset.pid
    });
}), t(a, "toStore", function() {
    1 == this.data.isPerson ? wx.navigateTo({
        url: "/pages/store/layout-meirong/store"
    }) : wx.switchTab({
        url: "/pages/store/layout-meirong/store"
    });
}), t(a, "toStoreDetail", function(t) {
    wx.navigateTo({
        url: "/pages/store/store-detail/store-detail?tabContentId=" + t.currentTarget.dataset.sid
    });
}), t(a, "toDistributePro", function() {
    wx.navigateTo({
        url: "/pages/packages/distribute/distribute-product/distribute-product"
    });
}), t(a, "toNewsList", function() {
    wx.navigateTo({
        url: "/pages/news/news?sysTabName=Photo-Info-Tab-Level2"
    });
}), t(a, "toNewsDetail", function(t) {
    wx.navigateTo({
        url: "/pages/news/news-detail/news-detail?tabContentId=" + t.currentTarget.dataset.nid + "&type=4"
    });
}), t(a, "toGroupActivity", function() {
    wx.navigateTo({
        url: "/pages/packages/group/group-prolist/group-prolist"
    });
}), t(a, "toSeckillActivity", function() {
    wx.navigateTo({
        url: "/pages/seckill/seckill"
    });
}), t(a, "toAIRecognize", function() {
    wx.navigateTo({
        url: "/pages/packages/AI/index/index"
    });
}), t(a, "joinPhoneCall", function() {
    var t = this;
    t.data.joinPhone && wx.makePhoneCall({
        phoneNumber: t.data.joinPhone
    });
}), t(a, "toMyCoupon", function() {
    wx.navigateTo({
        url: "/pages/self/mycoupon/mycoupon"
    });
}), t(a, "onPullDownRefresh", function() {
    var t = this;
    s = 1, t.setData({
        productArr: []
    }), t.getCustAndCateList(), t.getHomepageBaseInfo().then(function() {
        t.getHomePageTop(), t.getCustomizeTabList().then(function() {
            "1" == e.globalData.isGroup && t.getActivity(), "1" == t.data.hasSeckill && t.getSeckillActivity(), 
            "1" == t.data.hasDistribution && "3" == t.data.memberType ? (t.checkDistribuction().then(function() {
                t.getHomepageProduct(), t.getReommendProducts();
            }), t.getDistributeProduct()) : (t.getHomepageProduct(), t.getReommendProducts());
        });
    }), t.getHomepageAdvertise(), t.getBranchInfo(), t.getMerchantHidden();
}), t(a, "formSubmit", function(t) {
    "" != t.detail.value.branchName ? "" != t.detail.value.mainProject ? "" != t.detail.value.phone ? "" != t.detail.value.textCon ? "" != t.detail.value.email ? "" != t.detail.value.project ? "" != t.detail.value.beizhu ? (wx.showToast({
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
    }, 2e3)) : this.warn("备注不能为空") : this.warn("预约不能为空") : this.warn("邮箱不能为空") : this.warn("请输入您的问题描述!") : this.warn("请输入您的联系方式!!") : this.warn("请输入您的年龄!") : this.warn("请输入您的名字!");
}), t(a, "bindDateChange", function(t) {
    this.setData({
        date: t.detail.value
    });
}), t(a, "warn", function(t) {
    wx.showModal({
        title: "提示",
        content: t,
        showCancel: !1
    });
}), t(a, "onReachBottom", function() {
    s < n && (s++, this.getReommendProducts());
}), t(a, "refresh", function() {
    var t = this;
    s = 1, t.setData({
        productArr: []
    }), t.getCustAndCateList(), t.getHomepageBaseInfo().then(function() {
        t.getHomePageTop(), t.getCustomizeTabList().then(function() {
            "1" == e.globalData.isGroup && t.getActivity(), "1" == t.data.hasSeckill && t.getSeckillActivity(), 
            t.getHomepageProduct(), t.getReommendProducts(), t.getHomepageAdvertise();
        });
    }), t.getBranchInfo();
}), t(a, "onShareAppMessage", function() {
    var t = this;
    return {
        title: o.productName,
        path: "/pages/index/index",
        success: function(a) {
            wx.request({
                url: e.globalData.comUrl + "act_addShareMemberActivity.action",
                data: {
                    memberId: e.getMemberId(),
                    customizetabId: i.Activity
                },
                success: function(a) {
                    var o = e.getJsonData(a.data);
                    1 == o.code && (o.endTime = o.endTime.substring(0, 10), t.setData({
                        hideShareCoupon: !1,
                        shareActivity: o
                    }));
                }
            });
        },
        fail: function(t) {}
    };
}), a));