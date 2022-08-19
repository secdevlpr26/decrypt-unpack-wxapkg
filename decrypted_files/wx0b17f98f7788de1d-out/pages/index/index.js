function e() {
    for (var e = [], t = 0; t < 3; ++t) {
        var a = Math.floor(256 * Math.random()).toString(16);
        a = 1 == a.length ? "0" + a : a, e.push(a);
    }
    return "#" + e.join("");
}

var t, a, o = require("../../utils/util.js"), s = require("../../module/getPhone.js"), n = require("../../module/findAllMenuStorePower.js"), r = getApp(), d = r.globalData.httpUrl, i = r.globalData.tuhttpUrl;

r.globalData.testhttpUrl;

Page({
    data: {
        isPlay: !1,
        src: "",
        describe: "",
        desc: "",
        homePageimg: "",
        coverFlg: !1,
        videoCover: "http://qiniu.shoukaikeji.com/FkvxMcZloG6t1ZrxZlb3LX9ZSPbh",
        dianUrl: "http://qiniu.shoukaikeji.com/Fv2jhbGuGlGHLtBixVHMkUOEmE3C",
        vipUrl: "http://qiniu.shoukaikeji.com/FgdPeEuxFyAfoUK-dkmtmIqNjMtr",
        wntjUrls: "http://qiniu.shoukaikeji.com/FrecMOHfCdA8Vb1q9THBwB4ozYcx",
        wntjUrls1: "http://qiniu.shoukaikeji.com/FlYKx1bXrk8RbCTm1vQuRbjzhVgi",
        wntjUrls2: "http://qiniu.shoukaikeji.com/Ftpj8aVwFVJ94iSKX91w5bHBRTkQ",
        wntjUrls3: "http://qiniu.shoukaikeji.com/FmhD6wldZQYRZhahCQBvgb7fwyPA",
        storeId: "",
        httpUrl: d,
        tuhttpUrl: i,
        ydFlag: !1,
        pdFlag: !1,
        syFlag: !1,
        movies: [],
        cutfoods: [],
        tsfoods: [],
        wntjName: "",
        wntjName1: "",
        wntjName2: "",
        wntjName3: "",
        urls: "",
        urls1: "",
        urls2: "",
        urls3: "",
        specialitiesId: "",
        specialitiesId1: "",
        specialitiesId2: "",
        specialitiesId3: "",
        StoreIdentity: "",
        displa: !1,
        displayy: "none"
    },
    onLoad: function(e) {
        (a = this).ss(), wx.setStorage({
            key: "goods",
            data: []
        }), wx.setStorage({
            key: "receiverNotes",
            data: {
                wechatUserAddressReceiverName: "",
                wechatUserAddressReceiverPhoneNum: "",
                wechatUserAddressFullAddress: "",
                wechatUserAddressAddress: "",
                addressId: ""
            }
        });
        var t = decodeURIComponent(e.scene);
        if ("undefined" != t && void 0 != t && "" != t && null != t) {
            var s = t.split(",")[0].replace('"', ""), i = t.split(",")[1].replace('"', "");
            console.error(i), console.log(s), wx.request({
                url: d + "skstoremodel/findStoreById",
                data: {
                    pid: s
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    var s = t.data, c = t.data.storeInfoStoreId;
                    wx.setStorage({
                        key: "storeInfo",
                        data: s
                    }), wx.setNavigationBarTitle({
                        title: t.data.storeInfoName
                    }), "'Y'" == i && (a.setData({
                        waimaiHidden: !0
                    }), wx.request({
                        url: d + "skstoremodel/selSingleConfListByStoreIdWX",
                        data: {
                            storeId: c
                        },
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            var t = e.data, s = !0, n = !0;
                            if (console.log(JSON.stringify(t) + "====singleConfBean====>"), t) {
                                var r = o.formatTimeOnly(new Date()).replace(":", ""), d = t.reservedBegin.replace(":", ""), i = t.reservedEnd.replace(":", ""), c = t.takeoutBegin.replace(":", ""), l = t.takeoutEnd.replace(":", "");
                                parseInt(d) < parseInt(i) || parseInt(c) < parseInt(l) ? (s = parseInt(d) < parseInt(r) && parseInt(i) > parseInt(r), 
                                n = parseInt(c) < parseInt(r) && parseInt(l) > parseInt(r)) : (s = parseInt(d) < parseInt(r) || parseInt(i) > parseInt(r), 
                                n = parseInt(c) < parseInt(r) || parseInt(l) > parseInt(r));
                            }
                            console.log("yudingIsuse ==> " + s), console.log("waimaiIsuse ==> " + n), a.setData({
                                singleConfBean: e.data,
                                yudingIsuse: s,
                                waimaiIsuse: n
                            }), a.takeOut();
                        }
                    })), wx.setStorageSync("storeId", c), a.resendIndex(c), o.getShareInfos(a, d), o.setCompanyId(a, e), 
                    o.setStoreId(a), o.setStoreInfo(a), o.setUserId(a), o.setStoreInfoName(a), wx.setStorage({
                        key: "collectMoney",
                        data: 0
                    }), wx.setStorage({
                        key: "couponInfo",
                        data: ""
                    }), r.getUserInfo(function(e) {
                        console.log(e), a.setData({
                            userInfo: e
                        });
                    }), wx.getStorage({
                        key: "companyId",
                        success: function(e) {
                            wx.getLocation({
                                type: "wgs84",
                                success: function(t) {
                                    wx.request({
                                        url: d + "skstoremodel/wxSelectStoreByCompanyId",
                                        data: {
                                            storeInfoCompanyInfoId: e.data,
                                            storeInfoLongitude: t.longitude,
                                            storeInfoLatitude: t.latitude,
                                            condition: "",
                                            storeInfoName: "",
                                            storeInfoAddress: ""
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(e) {
                                            for (var t = 0; t < e.data.length; t++) if (e.data[t].storeInfoStoreId == c) {
                                                var a = e.data[t].takeOutDispatchType;
                                                wx.setStorage({
                                                    key: "takeOutDispatchType",
                                                    data: a
                                                });
                                            }
                                        }
                                    });
                                }
                            });
                        }
                    });
                    var l = wx.createVideoContext("myVideo");
                    a.setData({
                        videoContext: l
                    }), wx.getStorage({
                        key: "storeId",
                        success: function(e) {
                            wx.request({
                                url: d + "skstoremodel/getDesktopcycleDateNew",
                                data: {
                                    desktopCycleConfigStoreInfoStoreId: e.data,
                                    desktopCycleConfigIsUseFlg: "0"
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(e) {
                                    var t = e.data.videoFlg;
                                    a.setData({
                                        videoFlg: t
                                    });
                                    var o = [];
                                    if ("1" == t) {
                                        var s = e.data.videoUrl;
                                        console.log(s), a.setData({
                                            src: s
                                        }), o.push({
                                            desktopCycleConfigImgUrl: a.data.src,
                                            marks: 0
                                        }), console.log("========视频文件名称=========="), console.log(o[0].desktopCycleConfigImgUrl), 
                                        console.log("========轮播列表=========="), console.log(o);
                                    } else {
                                        for (var r in e.data.imgList) o.push({
                                            desktopCycleConfigImgUrl: e.data.imgList[r].desktopCycleConfigImgUrl,
                                            marks: "1"
                                        });
                                        console.log("============lunboMovie========="), console.log(o);
                                    }
                                    a.setData({
                                        lunboMovie: o
                                    }), n.getmenus(d).then(function(e) {
                                        var t = [];
                                        console.log("=====findAllMenuStorePower success======="), console.log(e.data);
                                        var o = void 0, s = void 0;
                                        for (var n in e.data) t.push({
                                            buttonName: e.data[n].buttonName,
                                            menuStorePowerisUser: e.data[n].menuStorePowerisUser,
                                            menuStorePowerisShow: e.data[n].menuStorePowerisShow
                                        }), "点餐" == e.data[n].buttonName ? o = e.data[n].imgUrl : "会员" == e.data[n].buttonName && (s = e.data[n].imgUrl);
                                        console.log(t), a.setData({
                                            menus: t,
                                            dianMenuImgUrl: o,
                                            vipMenuImgUrl: s
                                        }), a.chkShowFlag(), wx.setStorage({
                                            key: "menus",
                                            data: t
                                        });
                                    });
                                }
                            });
                        }
                    }), wx.getStorage({
                        key: "storeId",
                        success: function(e) {
                            wx.request({
                                url: d + "skfoodmodel/findFoodInfoWX",
                                data: {
                                    storeId: c,
                                    discountFlg: "1"
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(e) {
                                    console.log("========what you are======", e), a.setData({
                                        cutfoods: e.data
                                    });
                                }
                            });
                        }
                    }), wx.getStorage({
                        key: "storeId",
                        success: function(e) {
                            wx.request({
                                url: d + "skfoodmodel/selFoodSpecialitiesflg",
                                data: {
                                    storeId: c,
                                    specialitiesFlg: "1"
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(e) {
                                    a.setData({
                                        tsfoods: e.data
                                    });
                                    for (var t = 0; t < e.data.length; t++) 0 == t ? a.setData({
                                        wntjName: e.data[t].name,
                                        urls: e.data[t].url,
                                        specialitiesId: e.data[t].id
                                    }) : 1 == t ? a.setData({
                                        urls1: e.data[t].url,
                                        wntjName1: e.data[t].name,
                                        specialitiesId1: e.data[t].id
                                    }) : 2 == t ? a.setData({
                                        urls2: e.data[t].url,
                                        wntjName2: e.data[t].name,
                                        specialitiesId2: e.data[t].id
                                    }) : 3 == t && a.setData({
                                        urls3: e.data[t].url,
                                        wntjName3: e.data[t].name,
                                        specialitiesId3: e.data[t].id
                                    });
                                }
                            }), wx.request({
                                url: d + "skstoremodel/selSingleConfListByStoreIdWX",
                                data: {
                                    storeId: e.data
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(e) {
                                    var t = e.data, s = !0, n = !0;
                                    if (console.log(JSON.stringify(t) + "====singleConfBean====>"), t) {
                                        var r = o.formatTimeOnly(new Date()).replace(":", ""), d = t.reservedBegin.replace(":", ""), i = t.reservedEnd.replace(":", ""), c = t.takeoutBegin.replace(":", ""), l = t.takeoutEnd.replace(":", "");
                                        console.log("====selSingleConfListByStoreIdWX====="), console.log(r), console.log(d), 
                                        console.log(i), console.log(c), console.log(l), console.log("====selSingleConfListByStoreIdWX====="), 
                                        console.log("reservedBegin ==> " + (parseInt(d) < parseInt(r))), console.log("reservedEnd ==> " + i > r), 
                                        console.log("reservedBegin ==> " + c < r), console.log("reservedEnd ==> " + l > r), 
                                        parseInt(d) < parseInt(i) || parseInt(c) < parseInt(l) ? (s = parseInt(d) < parseInt(r) && parseInt(i) > parseInt(r), 
                                        n = parseInt(c) < parseInt(r) && parseInt(l) > parseInt(r)) : (s = parseInt(d) < parseInt(r) || parseInt(i) > parseInt(r), 
                                        n = parseInt(c) < parseInt(r) || parseInt(l) > parseInt(r));
                                    }
                                    console.log("yudingIsuse ==> " + s), console.log("waimaiIsuse ==> " + n), a.setData({
                                        singleConfBean: e.data,
                                        yudingIsuse: s,
                                        waimaiIsuse: n
                                    });
                                }
                            });
                        }
                    }), wx.getStorage({
                        key: "companyId",
                        success: function(e) {
                            var t = e.data;
                            wx.getStorage({
                                key: "storeId",
                                success: function(e) {
                                    var o = e.data;
                                    wx.request({
                                        url: d + "skmembermodel/findVipCardBy",
                                        data: {
                                            companyId: t,
                                            storeId: o
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(e) {
                                            var t = e.data.id;
                                            a.setData({
                                                cardId: t,
                                                vipCard: e.data
                                            }), wx.setStorage({
                                                key: "cardId",
                                                data: e.data.id
                                            }), wx.setStorage({
                                                key: "vipCard",
                                                data: e.data
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    }), wx.getStorage({
                        key: "userId",
                        success: function(e) {
                            wx.getStorage({
                                key: "connectedSocket",
                                success: function(t) {
                                    1 == t.data ? console.log("======已有连接socket不连接=========") : o.conSocket(e.data, d);
                                },
                                fail: function(t) {
                                    o.conSocket(e.data, d);
                                }
                            });
                        }
                    });
                }
            });
        } else if (void 0 != e.storeId && "undefined" != e.storeId && null != e.storeId && "null" != e.storeId && "" != e.storeId) {
            console.log("========转发进入=========");
            var c = e.storeId, l = e.companyId;
            wx.setStorageSync("storeId", c), wx.setStorageSync("companyId", l), console.log(c), 
            console.log(l), wx.request({
                url: d + "skstoremodel/wxSelectStoreByCompanyId",
                data: {
                    storeInfoCompanyInfoId: l,
                    storeInfoLongitude: "",
                    storeInfoLatitude: "",
                    condition: "",
                    storeInfoName: "",
                    storeInfoAddress: ""
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(e) {
                    var t = e.data;
                    for (var o in t) if (t[o].storeInfoStoreId == c) {
                        var s = t[o];
                        wx.setStorage({
                            key: "storeInfo",
                            data: s
                        }), wx.setNavigationBarTitle({
                            title: s.storeInfoName
                        }), a.setData({
                            storeInfo: s
                        });
                    }
                    a.resendIndex(c);
                }
            });
        } else {
            o.getShareInfos(a, d), o.setCompanyId(a, e), o.setStoreId(a), o.setStoreInfo(a), 
            o.setUserId(a), o.setStoreInfoName(a), wx.setStorage({
                key: "collectMoney",
                data: 0
            }), wx.setStorage({
                key: "couponInfo",
                data: ""
            }), r.getUserInfo(function(e) {
                console.log(e), a.setData({
                    userInfo: e
                });
            });
            var u = wx.createVideoContext("myVideo");
            a.setData({
                videoContext: u
            }), wx.getStorage({
                key: "storeId",
                success: function(e) {
                    wx.request({
                        url: d + "skstoremodel/getDesktopcycleDateNew",
                        data: {
                            desktopCycleConfigStoreInfoStoreId: e.data,
                            desktopCycleConfigIsUseFlg: "0"
                        },
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            var t = e.data.videoFlg;
                            a.setData({
                                videoFlg: t
                            });
                            var o = [];
                            if ("1" == t) {
                                var s = e.data.videoUrl;
                                console.log(s), a.setData({
                                    src: s
                                }), o.push({
                                    desktopCycleConfigImgUrl: a.data.src,
                                    marks: 0
                                }), console.log("========视频文件名称=========="), console.log(o[0].desktopCycleConfigImgUrl), 
                                console.log("========轮播列表=========="), console.log(o);
                            } else {
                                for (var r in e.data.imgList) o.push({
                                    desktopCycleConfigImgUrl: e.data.imgList[r].desktopCycleConfigImgUrl,
                                    marks: "1"
                                });
                                console.log("============lunboMovie========="), console.log(o);
                            }
                            a.setData({
                                lunboMovie: o
                            }), n.getmenus(d).then(function(e) {
                                var t = [];
                                console.log("=====findAllMenuStorePower success======="), console.log(e.data);
                                var o = void 0, s = void 0;
                                for (var n in e.data) t.push({
                                    buttonName: e.data[n].buttonName,
                                    menuStorePowerisUser: e.data[n].menuStorePowerisUser,
                                    menuStorePowerisShow: e.data[n].menuStorePowerisShow
                                }), "点餐" == e.data[n].buttonName ? o = e.data[n].imgUrl : "会员" == e.data[n].buttonName && (s = e.data[n].imgUrl);
                                console.log(t), a.setData({
                                    menus: t,
                                    dianMenuImgUrl: o,
                                    vipMenuImgUrl: s
                                }), a.chkShowFlag(), wx.setStorage({
                                    key: "menus",
                                    data: t
                                });
                            });
                        }
                    });
                }
            }), wx.getStorage({
                key: "storeId",
                success: function(e) {
                    wx.request({
                        url: d + "skfoodmodel/findFoodInfoWX",
                        data: {
                            storeId: e.data,
                            discountFlg: "1"
                        },
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            console.log("========what you are======", e), a.setData({
                                cutfoods: e.data
                            });
                        }
                    });
                }
            }), wx.getStorage({
                key: "storeId",
                success: function(e) {
                    wx.request({
                        url: d + "skfoodmodel/selFoodSpecialitiesflg",
                        data: {
                            storeId: e.data,
                            specialitiesFlg: "1"
                        },
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            a.setData({
                                tsfoods: e.data
                            });
                            for (var t = 0; t < e.data.length; t++) 0 == t ? a.setData({
                                wntjName: e.data[t].name,
                                urls: e.data[t].url,
                                specialitiesId: e.data[t].id
                            }) : 1 == t ? a.setData({
                                urls1: e.data[t].url,
                                wntjName1: e.data[t].name,
                                specialitiesId1: e.data[t].id
                            }) : 2 == t ? a.setData({
                                urls2: e.data[t].url,
                                wntjName2: e.data[t].name,
                                specialitiesId2: e.data[t].id
                            }) : 3 == t && a.setData({
                                urls3: e.data[t].url,
                                wntjName3: e.data[t].name,
                                specialitiesId3: e.data[t].id
                            });
                        }
                    }), wx.request({
                        url: d + "skstoremodel/selSingleConfListByStoreIdWX",
                        data: {
                            storeId: e.data
                        },
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            var t = e.data, s = !0, n = !0;
                            if (console.log(JSON.stringify(t) + "====singleConfBean====>"), t) {
                                var r = o.formatTimeOnly(new Date()).replace(":", ""), d = t.reservedBegin.replace(":", ""), i = t.reservedEnd.replace(":", ""), c = t.takeoutBegin.replace(":", ""), l = t.takeoutEnd.replace(":", "");
                                parseInt(d) < parseInt(i) || parseInt(c) < parseInt(l) ? (s = parseInt(d) < parseInt(r) && parseInt(i) > parseInt(r), 
                                n = parseInt(c) < parseInt(r) && parseInt(l) > parseInt(r)) : (s = parseInt(d) < parseInt(r) || parseInt(i) > parseInt(r), 
                                n = parseInt(c) < parseInt(r) || parseInt(l) > parseInt(r));
                            }
                            console.log("yudingIsuse ==> " + s), console.log("waimaiIsuse ==> " + n), a.setData({
                                singleConfBean: e.data,
                                yudingIsuse: s,
                                waimaiIsuse: n
                            });
                        }
                    });
                }
            }), wx.getStorage({
                key: "companyId",
                success: function(e) {
                    var t = e.data;
                    wx.getStorage({
                        key: "storeId",
                        success: function(e) {
                            var o = e.data;
                            wx.request({
                                url: d + "skmembermodel/findVipCardBy",
                                data: {
                                    companyId: t,
                                    storeId: o
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(e) {
                                    var t = e.data.id;
                                    a.setData({
                                        cardId: t,
                                        vipCard: e.data
                                    }), wx.setStorage({
                                        key: "cardId",
                                        data: e.data.id
                                    }), wx.setStorage({
                                        key: "vipCard",
                                        data: e.data
                                    });
                                }
                            });
                        }
                    });
                }
            }), wx.getStorage({
                key: "userId",
                success: function(e) {
                    wx.getStorage({
                        key: "connectedSocket",
                        success: function(t) {
                            1 == t.data ? console.log("======已有连接socket不连接=========") : o.conSocket(e.data, d);
                        },
                        fail: function(t) {
                            o.conSocket(e.data, d);
                        }
                    });
                }
            });
        }
    },
    closeTk: function(e) {
        console.log("=====index closeTk start====="), a.setData({
            displa: !1
        });
    },
    ss: function() {
        wx.getStorage({
            key: "userId",
            success: function(e) {
                wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        wx.request({
                            url: d + "skmembermodel/findWechatUserById",
                            data: {
                                wechatUserId: e.data,
                                wechatUserStoreStoreInfoStoreId: t.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                console.log("结果=====》", e.data.wechatUserStoreIdentity), "v" == e.data.wechatUserStoreIdentity ? a.setData({
                                    StoreIdentity: "v"
                                }) : a.setData({
                                    StoreIdentity: "f"
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    selOperationRecord: function() {
        wx.getStorage({
            key: "storeId",
            success: function(e) {
                wx.getStorage({
                    key: "userId",
                    success: function(t) {
                        wx.request({
                            url: d + "skmembermodel/getOperationRecordNum",
                            data: {
                                wxUserUuid: t.data,
                                storeUuid: e.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                console.log(e.data + "===res.data提醒信息量===>");
                                var t = e.data, a = String(t);
                                t > 0 && wx.setTabBarBadge({
                                    index: 3,
                                    text: a
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    onShow: function() {
        wx.getStorage({
            key: "priceT",
            success: function(e) {
                a.setData({
                    priceT: e.data
                });
            }
        }), (a = this).ss(), wx.onSocketMessage(function(e) {
            console.log("===========接收到服务器信息=============="), console.log(e.data), o.getTkInfos(a, e), 
            o.playMusic(a, e);
        }), wx.getStorage({
            key: "saomajin",
            success: function(e) {
                e.data && (a.onLoad(), wx.setStorage({
                    key: "saomajin",
                    data: !1
                }));
            }
        }), console.log("=====isPlay=====:" + a.data.isPlay), wx.onSocketOpen(function(e) {
            wx.setStorage({
                key: "connectedSocket",
                data: !0
            }), console.log("WebSocket连接已打开！"), console.log(e);
        }), wx.onSocketClose(function(e) {
            console.log("WebSocket连接已关闭！"), wx.getStorage({
                key: "userId",
                success: function(e) {
                    o.conSocket(e.data, d);
                },
                fail: function() {
                    console.log("连接socket失败"), wx.setStorage({
                        key: "connectedSocket",
                        data: !1
                    });
                }
            });
        }), wx.onSocketError(function(e) {
            console.log("WebSocket连接打开失败，请检查！"), console.log(e), wx.setStorage({
                key: "connectedSocket",
                data: !1
            });
        }), a.selOperationRecord();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), a = this, setTimeout(function() {
            a.onPullDownRefresh();
        }, 500);
    },
    onShareAppMessage: function() {
        return console.log("======share开始======="), {
            title: a.data.shareTitle,
            desc: "",
            imageUrl: a.data.shareImgUrl,
            path: "/pages/index/index?storeId=" + a.data.storeId + "&companyId=" + a.data.companyId,
            success: function(e) {
                console.log("转发成功");
            },
            fail: function(e) {
                console.log("转发失败");
            }
        };
    },
    onUnload: function() {
        (a = this).toStop(), wx.closeSocket({
            success: function(e) {
                console.log("======success======="), console.log(e), wx.setStorage({
                    key: "connectedSocket",
                    data: !1
                });
            },
            fail: function(e) {
                console.log("======fail======="), console.log(e);
            }
        });
    },
    onHide: function() {
        a = this;
    },
    goToActive: function() {
        wx.navigateTo({
            url: "../active/active"
        });
    },
    wifi: function(e) {
        wx.navigateTo({
            url: "../index/wifi/wifi"
        });
    },
    map: function() {
        wx.navigateTo({
            url: "../maps/maps"
        });
    },
    wntjDetail: function(e) {
        var t = e.currentTarget.dataset.specialitiesId;
        wx.setStorage({
            key: "specialitiesId",
            data: t
        }), console.log(e), wx.navigateTo({
            url: "../index/wntjDetail/wntjDetail"
        });
    },
    yhtjDetail: function(e) {
        console.log("进入次数"), clearTimeout(t), t = setTimeout(function() {
            console.log("优惠推荐", e);
            var t = e.currentTarget.dataset.id, o = e.currentTarget.dataset.index;
            wx.setStorage({
                key: "foodId",
                data: t
            }), wx.navigateTo({
                url: "../index/takeOut/queryOrder/queryOrder?yhtj=1&yhtjindex=" + o + "&yhtjinNum=" + a.data.cutfoods.length
            });
        }, 1e3);
    },
    destine: function(e) {
        var t = this;
        if (t.chkUserFlag("预订")) if (t.data.yudingIsuse) {
            wx.setStorage({
                key: "currentTab",
                data: 0
            });
            wx.setStorage({
                key: "ydFlg",
                data: !0
            }), wx.setStorage({
                key: "dcFlg",
                data: !1
            }), wx.setStorage({
                key: "wmFlg",
                data: !1
            }), wx.setStorage({
                key: "carArray",
                data: []
            }), wx.getStorage({
                key: "userId",
                success: function(e) {
                    wx.getStorage({
                        key: "storeId",
                        success: function(a) {
                            wx.request({
                                url: d + "skordermodel/selUnpaidOrder",
                                data: {
                                    wechatUserId: e.data,
                                    orderType: "Y",
                                    storeId: a.data
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(e) {
                                    "操作成功！" == e.data.msg ? e.data.count > 0 ? (wx.setStorage({
                                        key: "orderId",
                                        data: e.data.orderId
                                    }), wx.request({
                                        url: d + "skordermodel/getOrderById",
                                        data: {
                                            orderType: "Y",
                                            id: e.data.orderId
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(e) {
                                            console.log(e.data.orderState);
                                            var t = "destine/destine";
                                            "1" == e.data.orderState ? t = "destine/waitReceipt/waitReceipt?orderId=" + e.data.id + "&orderState=1&orderType=Y" : "2" == e.data.orderState && (t = e.data.foodList.length > 0 ? "takeOut/takeOut?flag=Y&orderId=" + e.data.id + "&editType=N" : "destine/Receipt/Receipt?flag=Y&orderId=" + e.data.id + "&editType=N&orderState=2"), 
                                            wx.navigateTo({
                                                url: t
                                            });
                                        }
                                    })) : wx.navigateTo({
                                        url: "destine/destine"
                                    }) : t.setData({
                                        displayy: "block",
                                        titlename: "获取未支付订单操作失败",
                                        carname: "请联系后台管理员"
                                    });
                                }
                            });
                        }
                    });
                }
            });
        } else t.setData({
            displayy: "block",
            titlename: "提示",
            carname: "不在预定时间范围内"
        }); else t.setData({
            displayy: "block",
            titlename: "提示",
            carname: "没有预定功能"
        });
    },
    checkBusinessTime: function() {
        var e = a.data.storeInfo.storeInfoBusinessStartTime.replace(":", ""), t = a.data.storeInfo.storeInfoBusinessEndTime.replace(":", ""), s = o.formatTime(new Date()).split(" ")[1].split(":")[0] + o.formatTime(new Date()).split(" ")[1].split(":")[1];
        console.log("=========查看时间==========="), console.log(e), console.log(t), console.log(s), 
        1 * e < 1 * t ? (console.log("======起始时间小于结束时间========"), 1 * e > 1 * s || 1 * s > 1 * t ? a.setData({
            businessTime: !1
        }) : a.setData({
            businessTime: !0
        })) : 1 * e > 1 * t && (console.log("======起始时间大于结束时间========"), 1 * e > 1 * s && 1 * s > 1 * t ? a.setData({
            businessTime: !1
        }) : a.setData({
            businessTime: !0
        }));
    },
    fellin: function(e) {
        a.checkBusinessTime(), a.data.businessTime ? a.chkUserFlag("排队") ? wx.getStorage({
            key: "openId",
            success: function(e) {
                wx.getStorage({
                    key: "storeId",
                    success: function(t) {
                        wx.request({
                            url: d + "skordermodel/findlPersonNumLineUpByOpenId",
                            data: {
                                openId: e.data,
                                storeId: t.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                console.log("===findlPersonNumLineUpByOpenId success==="), e.data > 0 ? wx.navigateTo({
                                    url: "../index/fellin/queuingNumber/queuingNumber"
                                }) : wx.navigateTo({
                                    url: "../index/fellin/fellin"
                                });
                            }
                        });
                    }
                });
            }
        }) : a.setData({
            displayy: "block",
            titlename: "提示",
            carname: "没有排队功能"
        }) : a.setData({
            displayy: "block",
            titlename: "不在店铺营业时间",
            carname: "不在店铺营业时间"
        });
    },
    collect: function(e) {
        if (a.checkBusinessTime(), a.data.businessTime) if (a.chkUserFlag("收银")) {
            wx.navigateTo({
                url: "../index/collect/collect"
            });
        } else a.setData({
            displayy: "block",
            titlename: "提示",
            carname: "没有收银功能"
        }); else a.setData({
            displayy: "block",
            titlename: "不在店铺营业时间",
            carname: "功能不可用"
        });
    },
    member: function() {
        wx.getStorage({
            key: "vipCard",
            success: function(e) {
                "Y" == a.data.vipUseFlg ? (console.log("======有会员卡======="), wx.getStorage({
                    key: "userId",
                    success: function(e) {
                        wx.getStorage({
                            key: "storeId",
                            success: function(t) {
                                wx.request({
                                    url: d + "skmembermodel/findWechatUserById",
                                    data: {
                                        wechatUserId: e.data,
                                        wechatUserStoreStoreInfoStoreId: t.data
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(e) {
                                        "v" == e.data.wechatUserStoreIdentity ? a.setData({
                                            isVip: !0
                                        }) : a.setData({
                                            isVip: !1
                                        });
                                        var t = a.data.isVip;
                                        console.log("===myCard==="), console.log(t), console.log("===myCard==="), t ? wx.navigateTo({
                                            url: "../user/myCard/receiveMyCard/receiveMyCard"
                                        }) : wx.showToast({
                                            title: "请先领卡",
                                            success: function() {
                                                wx.navigateTo({
                                                    url: "../user/myCard/myCard"
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                })) : wx.getStorage({
                    key: "companyId",
                    success: function(e) {
                        wx.getStorage({
                            key: "storeId",
                            success: function(t) {
                                wx.request({
                                    url: d + "skmembermodel/selEquityCardWX",
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        companyId: e.data,
                                        storeId: t.data
                                    },
                                    success: function(e) {
                                        e.data.isExistence || "Y" != a.data.forceUseFlg ? e.data.isExistence || "N" != a.data.forceUseFlg ? e.data.isExistence && "N" == a.data.forceUseFlg ? a.setData({
                                            displayy: "block",
                                            titlename: "提示",
                                            carname: "商家无会员卡功能且商家无权益卡功能"
                                        }) : wx.getStorage({
                                            key: "userId",
                                            success: function(e) {
                                                wx.getStorage({
                                                    key: "storeId",
                                                    success: function(t) {
                                                        wx.request({
                                                            url: d + "skmembermodel/selEquitycardByWX",
                                                            method: "POST",
                                                            header: {
                                                                "content-type": "application/x-www-form-urlencoded"
                                                            },
                                                            data: {
                                                                userId: e.data,
                                                                storeId: t.data
                                                            },
                                                            success: function(e) {
                                                                "Y" == e.data.isEquitycard ? wx.navigateTo({
                                                                    url: "../user/forceCard/alterForceCard/alterForceCard"
                                                                }) : wx.navigateTo({
                                                                    url: "../user/forceCard/receiveForceCard/receiveForceCard"
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        }) : a.setData({
                                            displayy: "block",
                                            titlename: "提示",
                                            carname: "商家无会员卡功能且商家无权益卡功能"
                                        }) : a.setData({
                                            displayy: "block",
                                            titlename: "提示",
                                            carname: "商家无会员卡功能且没有权益卡可购买"
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    member1: function() {
        "1" == a.data.hasReceived ? wx.navigateTo({
            url: "../user/myCard/receiveMyCard/receiveMyCard"
        }) : a.member();
    },
    getPhoneNumber: function(e) {
        console.log("=======首页点击会员 开始获取手机号======"), a = this, console.log(e.detail.iv + "看"), 
        console.log(e.detail.encryptedData + "再看"), "getPhoneNumber:fail user deny" == e.detail.errMsg || "getPhoneNumber:fail:cancel to confirm login" == e.detail.errMsg ? console.log("======拒绝授权========") : (console.log("======确认授权========"), 
        console.log("======开始获取session_key========"), wx.getStorage({
            key: "session_key",
            success: function(t) {
                console.log("session_key===>" + t.data), a.setData({
                    session_key: t.data
                }), console.log("======准备进入解密========"), s.getPhoneNum(e.detail.encryptedData, e.detail.iv, r.globalData.appId, a.data.session_key).then(function(e) {
                    a.member1();
                });
            }
        })), console.log("=======首页点击会员 开始获取手机号 结束======");
    },
    takeOut: function(e) {
        if (a.chkUserFlag("外卖")) if (a.data.waimaiIsuse) {
            wx.setStorage({
                key: "currentTab",
                data: 2
            }), wx.setStorage({
                key: "wmFlg",
                data: !0
            }), wx.setStorage({
                key: "dcFlg",
                data: !1
            }), wx.setStorage({
                key: "ydFlg",
                data: !1
            }), wx.setStorage({
                key: "orderType",
                data: "W"
            }), wx.setStorage({
                key: "carArray",
                data: []
            }), wx.navigateTo({
                url: "../index/takeOut/takeOut?editType=Y"
            });
        } else a.setData({
            displayy: "block",
            titlename: "提示",
            carname: "不在可接单时间范围"
        }); else a.setData({
            displayy: "block",
            titlename: "提示",
            carname: "没有外卖功能"
        });
    },
    cutUsername: function() {
        wx.reLaunch({
            url: "../welcome/welcome"
        });
    },
    orderBut: function(e) {
        if (wx.setStorage({
            key: "wmFlg",
            data: !1
        }), wx.setStorage({
            key: "dcFlg",
            data: !0
        }), wx.setStorage({
            key: "ydFlg",
            data: !1
        }), wx.setStorage({
            key: "orderType",
            data: "D"
        }), wx.setStorage({
            key: "carArray",
            data: []
        }), a.setData({
            showModalStatus: !1
        }), a.checkBusinessTime(), a.data.businessTime) if (a.chkUserFlag("点餐")) {
            var t = e.currentTarget.dataset.statu;
            wx.setStorage({
                key: "currentTab",
                data: 1
            }), a.util(t), wx.navigateTo({
                url: "../index/takeOut/takeOut?editType=Y"
            });
        } else a.setData({
            displayy: "block",
            titlename: "提示",
            carname: "没有点餐功能"
        }); else a.setData({
            displayy: "block",
            titlename: "不在店铺营业时间",
            carname: "功能不可用"
        });
    },
    zhijieDian: function() {
        wx.setStorage({
            key: "wmFlg",
            data: !1
        }), wx.setStorage({
            key: "dcFlg",
            data: !0
        }), wx.setStorage({
            key: "ydFlg",
            data: !1
        }), wx.setStorage({
            key: "orderType",
            data: "D"
        }), wx.setStorage({
            key: "carArray",
            data: []
        }), wx.navigateTo({
            url: "../index/takeOut/takeOut?editType=Y"
        }), a.setData({
            showModalStatus: !1
        });
    },
    saomaDian: function() {
        wx.scanCode({
            success: function(e) {
                console.log("结果:" + e.result + "二维码类型:" + e.scanType + "字符集:" + e.charSet), new RegExp("zhuohao:").test(e.result) ? (wx.showToast({
                    title: "成功",
                    icon: "success",
                    duration: 2e3
                }), wx.setStorage({
                    key: "wmFlg",
                    data: !1
                }), wx.setStorage({
                    key: "dcFlg",
                    data: !0
                }), wx.setStorage({
                    key: "ydFlg",
                    data: !1
                }), wx.setStorage({
                    key: "orderType",
                    data: "D"
                }), wx.setStorage({
                    key: "carArray",
                    data: []
                }), wx.setStorage({
                    key: "dc",
                    data: 1
                }), wx.navigateTo({
                    url: "../index/takeOut/takeOut?zuohao=" + e.result.replace("zhuohao:", "") + "&editType=Y"
                })) : wx.showToast({
                    title: "未获取桌号",
                    icon: "loading",
                    mask: !0,
                    duration: 2e3
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "未获取桌号",
                    icon: "success",
                    duration: 2e3
                });
            },
            complete: function(e) {}
        }), a.setData({
            showModalStatus: !1
        });
    },
    util: function(e) {
        var t = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        });
        this.animation = t, t.opacity(0).rotateX(-100).step(), this.setData({
            animationData: t.export()
        }), setTimeout(function() {
            t.opacity(1).rotateX(0).step(), this.setData({
                animationData: t
            }), "close" == e && this.setData({
                showModalStatus: !1
            });
        }.bind(this), 200), "open" == e && this.setData({
            showModalStatus: !0
        });
    },
    chkUserFlag: function(e) {
        var t = a.data.menus, o = !0;
        for (var s in t) t[s].buttonName == e && "N" == t[s].menuStorePowerisUser && (console.log(t[s].buttonName + " , " + t[s].menuStorePowerisUser), 
        o = !1);
        return o;
    },
    chkShowFlag: function() {
        var e = a.data.menus;
        console.log("chkShowFlag ==> "), console.log(e);
        for (var t in e) if ("预订" == e[t].buttonName) a.setData({
            yuding: e[t].menuStorePowerisShow
        }); else if ("排队" == e[t].buttonName) a.setData({
            paidui: e[t].menuStorePowerisShow
        }); else if ("收银" == e[t].buttonName) a.setData({
            shouyin: e[t].menuStorePowerisShow
        }); else if ("外卖" == e[t].buttonName) a.setData({
            waimai: e[t].menuStorePowerisShow
        }); else if ("点餐" == e[t].buttonName) a.setData({
            diancan: e[t].menuStorePowerisShow
        }); else if ("会员" == e[t].buttonName) {
            var o = e[t].menuStorePowerisShow, s = e[t].menuStorePowerisUser;
            a.setData({
                vipShowFlg: o,
                vipUseFlg: s
            }), "N" == e[t].menuStorePowerisShow ? a.setData({
                huiyuan: "N"
            }) : a.setData({
                huiyuan: "Y"
            });
        } else if ("权益卡" == e[t].buttonName) {
            var r = e[t].menuStorePowerisShow, i = e[t].menuStorePowerisUser;
            a.setData({
                forceShowFlg: r,
                forceUseFlg: i
            }), "N" == e[t].menuStorePowerisShow ? a.setData({
                quanyika: "N"
            }) : a.setData({
                quanyika: "Y"
            });
        } else "首页广告" == e[t].buttonName && ("N" == e[t].menuStorePowerisShow ? a.setData({
            coverFlgCheck: "N"
        }) : a.setData({
            coverFlgCheck: "Y"
        }), "N" == a.data.coverFlgCheck ? a.setData({
            coverFlg: !1,
            heightFlg: "",
            overflowFlg: ""
        }) : n.getindeximg(d).then(function(e) {
            "" != e.data.title && void 0 != e.data.title && null != e.data.title ? a.setData({
                describe: e.data.title,
                desc: e.data.content,
                homePageimg: e.data.imgUrl,
                coverFlg: !0,
                heightFlg: "100vh",
                overflowFlg: "hidden"
            }) : "" != e.data.imgUrl && void 0 != e.data.imgUrl && null != e.data.imgUrl ? a.setData({
                describe: e.data.title,
                desc: e.data.content,
                homePageimg: e.data.imgUrl,
                coverFlg: !0,
                heightFlg: "100vh",
                overflowFlg: "hidden"
            }) : a.go();
        }));
    },
    go: function() {
        console.log(a), a.setData({
            coverFlg: !1,
            heightFlg: "",
            overflowFlg: ""
        }), a.toPlay(), console.log("videoFlg:" + a.data.videoFlg), console.log("isPlay:" + a.data.isPlay), 
        a.data.videoContext.play();
    },
    toPlay: function() {
        console.log("========播放视频========"), "1" == a.data.videoFlg ? a.setData({
            isPlay: !0
        }) : a.setData({
            isPlay: !1
        }), setTimeout(function() {
            a.data.videoContext.play();
        }, 100), console.log("isPlay:" + a.data.isPlay);
    },
    toStop: function() {
        a.data.videoContext.stop(), a.setData({
            isPlay: !1
        });
    },
    onReady: function() {
        a = this;
    },
    bindInputBlur: function(e) {
        console.log(e.detail.value), a.setData({
            inputValue: e.detail.value
        });
    },
    bindSendDanmu: function() {
        a.videoContext.sendDanmu({
            text: a.data.inputValue,
            color: e()
        });
    },
    resendIndex: function(e) {
        console.log("=========进入跳转主页========="), wx.login({
            success: function(t) {
                console.log("====wx.login success====");
                var o = t.code;
                t.code ? (console.log("====get code===="), console.log("res.code ==> " + t.code), 
                wx.getSetting({
                    success: function(t) {
                        if (console.log("====wx.getSetting success===="), console.log(t), console.log(t.authSetting["scope.userInfo"]), 
                        t.authSetting["scope.userInfo"]) wx.getUserInfo({
                            success: function(t) {
                                console.log("====wx.getUserInfo success===="), wx.setStorage({
                                    key: "userName",
                                    data: t.userInfo.nickName
                                }), wx.setStorage({
                                    key: "avatarUrl",
                                    data: t.userInfo.avatarUrl
                                }), wx.request({
                                    url: d + "skmembermodel/getOpenidS",
                                    data: {
                                        code: o,
                                        AppID: r.globalData.appId,
                                        Secret: r.globalData.Secret,
                                        storeUuid: e,
                                        wxUserNickName: t.userInfo.nickName,
                                        headImgUrl: t.userInfo.avatarUrl
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(t) {
                                        var o = t.data.wechatUser.wechatUserId;
                                        if (a.setData({
                                            onClickFlag: !0,
                                            clickedStore: !1,
                                            userId: o
                                        }), null != t.data.openid && "" != t.data.openid) {
                                            var s = t.data.wechatUser.wechatUserStoreIdentity;
                                            wx.setStorage({
                                                key: "StoreIdentity",
                                                data: s
                                            }), wx.setStorage({
                                                key: "session_key",
                                                data: t.data.session_key
                                            }), wx.setStorage({
                                                key: "openId",
                                                data: t.data.openid
                                            }), wx.setStorage({
                                                key: "userId",
                                                data: t.data.wechatUser.wechatUserId
                                            }), wx.setStorage({
                                                key: "storeId",
                                                data: e
                                            }), wx.getStorage({
                                                key: "companyId",
                                                success: function(a) {
                                                    console.log("=============判断是否为该商户下的会员==========="), wx.request({
                                                        url: d + "skmembermodel/updatVipCardStore",
                                                        data: {
                                                            wechatUserId: t.data.wechatUser.wechatUserId,
                                                            wechatUserStoreStoreInfoStoreId: e,
                                                            companyId: a.data
                                                        },
                                                        method: "POST",
                                                        header: {
                                                            "content-type": "application/x-www-form-urlencoded"
                                                        },
                                                        success: function(e) {
                                                            console.log("=============判断结果为===========");
                                                        }
                                                    }), wx.request({
                                                        url: d + "skmembermodel/updatEquitycardStore",
                                                        data: {
                                                            wxUserId: t.data.wechatUser.wechatUserId,
                                                            storeId: e,
                                                            companyId: a.data
                                                        },
                                                        method: "POST",
                                                        header: {
                                                            "content-type": "application/x-www-form-urlencoded"
                                                        },
                                                        success: function(e) {}
                                                    });
                                                }
                                            });
                                        } else wx.showToast({
                                            title: "登录失败"
                                        });
                                    }
                                });
                            },
                            fali: function(e) {
                                console.log("====wx.login fail====");
                            }
                        }); else {
                            console.log("======未授权");
                            var s = "";
                            wx.getStorage({
                                key: "storeInfo",
                                success: function(t) {
                                    console.log("storeInfo ==>", a.data.waimai), console.log(t.data), s = t.data.storeInfoHeadImgUrl, 
                                    a.data.waimaiHidden ? wx.reLaunch({
                                        url: "/pages/welcome/accredit/accredit?data=" + o + "&store_uuid=" + e + "&imgurl=" + s + "&goWaimai=true"
                                    }) : wx.reLaunch({
                                        url: "/pages/welcome/accredit/accredit?data=" + o + "&store_uuid=" + e + "&imgurl=" + s
                                    });
                                }
                            });
                        }
                    },
                    fail: function(e) {
                        console.log("====wx.getSetting fail====");
                    }
                })) : console.log("获取用户登录态失败！" + t.errMsg);
            },
            fail: function(e) {
                console.log("====wx.login fail===="), console.log("错误信息"), console.log(e);
            }
        });
    }
});