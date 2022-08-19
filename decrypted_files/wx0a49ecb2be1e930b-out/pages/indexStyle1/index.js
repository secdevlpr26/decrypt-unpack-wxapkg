var t = getApp(), a = "", e = "", o = 1, i = 1, n = "", s = "", r = "", c = !1, l = [ "LynxProductList", "LynxAbout_Merchant", "LynxPhoto_Info_Post_Tab", "LynxPhoto_H_Info_Tab_Level2", "Photo-Info-Tab-Level2", "Video_Gallery", "Flexi-Form", "Online-Chat", "Activity", "LynxApplyFor_About_Merchant", "Activity-Group", "About-Merchant", "Activity-Kill" ];

Page({
    data: {
        styleConfig: t.globalData.styleConfig,
        advertisements: [],
        PCAdevertising_top: "",
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
        hideNews: !0,
        hasBranch: !1,
        minaInfo: {},
        hiddenMerchant: !0,
        activityInfo: "",
        isGroup: "",
        isPerson: t.globalData.isPerson,
        isQuery: 1 == t.globalData.isPerson,
        isLoading: !1,
        videoLink: "",
        netWorkType: !1,
        videoList: {},
        couponAdImg: "",
        activitySeckill: {},
        activityStart: "",
        hasSeckill: "",
        advertiseProducts: [],
        couponList: [],
        loadCount: 1,
        recProStyle: ""
    },
    checkIfHasAutoId: function(a) {
        var e = this;
        if ("undefined" != typeof sessionStorage && (!sessionStorage.getItem("globalAutoId") || a && a.autoId || (a = {
            autoId: sessionStorage.getItem("globalAutoId")
        })), a && a.autoId) {
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
    onShow: function() {
        this.data.loadCount > 1 && this.initData(), this.setData({
            loadCount: this.data.loadCount + 1
        });
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
        console.log(t.globalData.city), i.getJoinPhone(), wx.setNavigationBarTitle({
            title: a.projectName
        }), "" == t.globalData.city ? (n = "", o = 1, i.setData({
            posCity: "",
            productArr: []
        }), clearInterval(s), i.getHomepageBaseInfo().then(function(a) {
            i.getHomePageTop(), i.getCouponList(), i.getCustomizeTabList().then(function() {
                "1" == t.globalData.isGroup && i.getActivity(), "1" == i.data.hasSeckill && i.getSeckillActivity(), 
                i.getHomepageAdvertise(), i.getHomepageProduct();
            }), a.minaInfo.showCategory ? i.getProCategory() : i.getReommendProducts();
        }), i.getBranchList()) : void 0 == t.globalData.city || "{}" == JSON.stringify(t.globalData.city) ? (t.globalData.city = {}, 
        o = 1, i.setData({
            productArr: []
        }), clearInterval(s), i.getHomepageBaseInfo().then(function(a) {
            i.getHomePageTop(), i.getCouponList(), i.getCustomizeTabList().then(function() {
                "1" == t.globalData.isGroup && i.getActivity(), "1" == i.data.hasSeckill && i.getSeckillActivity(), 
                i.getHomepageAdvertise(), i.getHomepageProduct();
            }), a.minaInfo.showCategory ? i.getProCategory() : i.getReommendProducts();
        }), i.getLocation().then(function(t) {
            i.getBranchList();
        })) : t.globalData.city.cityName == this.data.posCity || (n = t.globalData.city.cityID, 
        o = 1, i.setData({
            posCity: t.globalData.city.cityName
        }), clearInterval(s), i.getHomepageBaseInfo().then(function(a) {
            i.getHomePageTop(), i.getCouponList(), i.getCustomizeTabList().then(function() {
                "1" == t.globalData.isGroup && i.getActivity(), "1" == i.data.hasSeckill && i.getSeckillActivity(), 
                i.getHomepageAdvertise(), i.getHomepageProduct();
            }), a.minaInfo.showCategory ? i.getProCategory() : i.getReommendProducts();
        }), i.getBranchList()));
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
                }), wx.stopPullDownRefresh();
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
                    e.setData({
                        minaInfo: i.minaInfo,
                        isQuery: i.minaInfo.allHidden,
                        isLoading: !0,
                        recProStyle: i.minaInfo.showCategory ? 2 : 1
                    }), t.globalData.isQuery = i.minaInfo.allHidden, i.minaInfo.rollNewsHidden || e.getCategory().then(function(t) {
                        e.getNewsInfo(t);
                    }), i.minaInfo.listNewsHidden || e.getcyCategory().then(function(t) {
                        e.getcyNewsInfo(t), e.getcyAdList();
                    }), i.minaInfo.videoHidden || e.getVideoList(), o(i);
                }
            });
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
    getActivity: function() {
        var a = this;
        wx.request({
            url: t.globalData.comUrl + "activityProduct_groupsIndex.action",
            data: {
                appId: t.globalData.projectInfo.appId
            },
            success: function(t) {
                clearInterval(s);
                var e = new Date(t.data.beginTime), o = new Date(t.data.nowTime), i = parseInt((e - o) / 1e3);
                if (i > 0) t.data.activityStart = !1, t.data.countDown = a.secondToTime(i), s = setInterval(function() {
                    i--, t.data.countDown = a.secondToTime(i), a.setData({
                        activityInfo: t.data
                    }), i < 1 && (clearInterval(s), a.refresh());
                }, 1e3); else {
                    if (t.data.activityTime <= 0) return;
                    t.data.activityStart = !0, t.data.countDown = a.secondToTime(t.data.activityTime), 
                    s = setInterval(function() {
                        t.data.activityTime--, t.data.countDown = a.secondToTime(t.data.activityTime), a.setData({
                            activityInfo: t.data
                        }), t.data.activityTime <= 0 && (clearInterval(s), a.refresh());
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
    getCouponList: function() {
        var a = this, e = t.getMemberId() || "";
        wx.request({
            url: t.globalData.comUrl + "act_getActivityList.action",
            data: {
                branchInfoId: "",
                customizetabId: t.getCustomizeId("Activity"),
                memberId: e
            },
            success: function(e) {
                var o = t.getJsonData(e.data);
                a.setData({
                    couponList: o
                });
            },
            fail: function(a) {
                t.hint();
            }
        });
    },
    coupontap: function(a) {
        var e = this, o = t.getMemberId() || "";
        "" != o ? 0 != a.currentTarget.dataset.info.getCoupon && wx.request({
            url: t.globalData.comUrl + "act_addMemberActivity.action",
            data: {
                activityId: a.currentTarget.dataset.info.id,
                memberId: o,
                customizetabId: t.getCustomizeId("Activity")
            },
            success: function(a) {
                "0" != t.getJsonData(a.data).code ? wx.showToast({
                    title: "领取成功",
                    icon: "success"
                }) : t.hint("领取失败"), e.getCouponList();
            },
            fail: function(a) {
                t.hint();
            }
        }) : wx.navigateTo({
            url: "../../login/login"
        });
    },
    getLocation: function() {
        var a = this;
        return new Promise(function(e, o) {
            wx.getLocation({
                type: "wgs84",
                success: function(o) {
                    t.globalData.location = {
                        lat: o.latitude,
                        lng: o.longitude
                    }, wx.request({
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
                    for (var i = t.getJsonData(a.data), n = !0, s = 0; s < i.length; s++) "Activity-Group" == i[s].sysTabName && (t.globalData.isGroup = "1", 
                    e.setData({
                        isGroup: "1"
                    })), "Activity-Kill" == i[s].sysTabName && e.setData({
                        hasSeckill: "1"
                    }), "LynxAbout_Merchant" == i[s].sysTabNameTag && (n = !1);
                    e.setData({
                        hiddenMerchant: n
                    });
                    for (var r = l, c = [], u = 0; u < i.length; u++) for (var g = 0; g < r.length; g++) "" != i[u].sysTabNameTag && i[u].sysTabNameTag == r[g] ? c.push(i[u]) : "" == i[u].sysTabNameTag && i[u].sysTabName == r[g] && c.push(i[u]);
                    if ("O2O_V1" == e.data.minaInfo.subVersion) {
                        for (var d = Math.ceil(c.length / 8), p = [], h = 0; h < d; h++) p[h] = [], p[h].push(c.slice(8 * h, 8 * (h + 1)));
                        console.log(p), e.setData({
                            moreArr: p
                        });
                    } else e.setData({
                        moreArr: c
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
            break;

          case "About-Merchant":
            1 == this.data.isPerson ? wx.switchTab({
                url: "../about-us/about-us"
            }) : wx.navigateTo({
                url: "../about-us/about-us"
            });
            break;

          case "Activity-Kill":
            wx.navigateTo({
                url: "../seckill/seckill"
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
                for (var e = t.getJsonData(a.data), o = [], n = Math.ceil(e.pageList.length / 2), s = 0; s < n; s++) o[s] = [], 
                o[s].push(e.pageList.slice(2 * s, 2 * (s + 1)));
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
                isGroup: t.globalData.isGroup
            },
            success: function(t) {
                var a = '{"list":' + t.data.substring(1).slice(0, -1) + "}", e = JSON.parse(a);
                console.log(e.list), o.setData({
                    proList: e.list
                });
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
    getReommendProducts: function() {
        if (!c) {
            c = !0;
            var n = this;
            wx.request({
                url: t.globalData.comUrl + "tabs_getAppProductByCity.action",
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
                    i = e.pages;
                    for (var o = 0; o < e.pageList.length; o++) e.pageList[o].productModelList[0] && String(e.pageList[o].productModelList[0].stock).length > 3 && (e.pageList[o].productModelList[0].stock = String(e.pageList[o].productModelList[0].stock).substring(0, 3)), 
                    String(Math.abs(e.pageList[o].quantity)).length > 3 && (e.pageList[o].quantity = String(Math.abs(e.pageList[o].quantity)).substring(0, 3)), 
                    String(e.pageList[o].readTimes).length > 3 && (e.pageList[o].readTimes = String(e.pageList[o].readTimes).substring(0, 3));
                    n.setData({
                        productArr: n.data.productArr.concat(e.pageList)
                    }), c = !1;
                }
            });
        }
    },
    joinPhoneCall: function() {
        var t = this;
        t.data.joinPhone && wx.makePhoneCall({
            phoneNumber: t.data.joinPhone
        });
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
    toGroupActivity: function() {
        wx.navigateTo({
            url: "../group/group-prolist/group-prolist"
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
    toMyCoupon: function() {
        wx.navigateTo({
            url: "../self/mycoupon/mycoupon"
        });
    },
    toSeckillActivity: function() {
        wx.navigateTo({
            url: "../seckill/seckill"
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
        }, 2e3)) : this.warn("预约不能为空") : this.warn("邮箱不能为空") : this.warn("请输入您的问题描述!") : this.warn("请输入您的联系方式!!") : this.warn("请输入您的年龄!") : this.warn("请输入您的名字!");
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
            productArr: [],
            activityInfo: "",
            posCity: t.globalData.city.cityName
        }), n = "", clearInterval(s);
        var a = this;
        a.getHomepageBaseInfo().then(function(e) {
            a.getHomePageTop(), a.getCouponList(), a.getCustomizeTabList().then(function() {
                "1" == t.globalData.isGroup && a.getActivity(), "1" == a.data.hasSeckill && a.getSeckillActivity(), 
                a.getHomepageAdvertise(), a.getHomepageProduct();
            }), e.minaInfo.showCategory ? a.getProCategory() : a.getReommendProducts();
        }), a.getBranchList();
    },
    refresh: function() {
        this.setData({
            productArr: [],
            activityInfo: "",
            posCity: t.globalData.city.cityName
        }), n = "", clearInterval(s);
        var a = this;
        a.getHomepageBaseInfo().then(function(e) {
            a.getHomePageTop(), a.getCouponList(), a.getCustomizeTabList().then(function() {
                "1" == t.globalData.isGroup && a.getActivity(), "1" == a.data.hasSeckill && a.getSeckillActivity(), 
                a.getHomepageAdvertise(), a.getHomepageProduct();
            }), e.minaInfo.showCategory ? a.getProCategory() : a.getReommendProducts();
        }), a.getBranchList();
    },
    onReachBottom: function() {
        1 == this.data.recProStyle && o < i && (o++, this.getReommendProducts());
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