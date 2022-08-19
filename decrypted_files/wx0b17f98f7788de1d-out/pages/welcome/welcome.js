function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t, a, o = getApp(), n = o.globalData.httpUrl, s = o.globalData.tuhttpUrl;

Page({
    data: (t = {
        clickedStore: !1,
        storeName: "",
        httpUrl: n,
        tuhttpUrl: s,
        shopTime: "",
        position: "",
        rightText: "距我最近",
        leftText: "选择区域",
        leftText0: "",
        i: 0,
        j: 0,
        starurls: [],
        slider: [],
        stores: [],
        rows: [ [ {
            areaName: "和平区"
        }, {
            areaName: "沈河区"
        } ], [ {
            areaName: "皇姑区"
        }, {
            areaName: "大东区"
        } ], [ {
            areaName: "铁西区"
        }, {
            areaName: "浑南区"
        } ], [ {
            areaName: "于洪区"
        }, {
            areaName: "沈北新区"
        } ] ],
        disLeft: "none",
        disRight: "none",
        scroFlag: "",
        latitude: "",
        longitude: "",
        onClickFlag: !0,
        storeInfoCompanyInfoId: "",
        storeInfoLongitude: "",
        storeInfoLatitude: "",
        condition: ""
    }, e(t, "storeName", ""), e(t, "storeInfoAddress", ""), t),
    disRight: function() {
        a.data.canotClick ? wx.showToast({
            title: "加载中不可点击！"
        }) : a.setData({
            disRight: "block",
            disLeft: "none",
            scroFlag: "hidden"
        });
    },
    disLeft: function() {
        a.data.canotClick ? wx.showToast({
            title: "加载中不可点击！"
        }) : a.setData({
            disLeft: "block",
            disRight: "none",
            scroFlag: "hidden"
        });
    },
    cancel: function() {
        a.data.canotClick ? wx.showToast({
            title: "加载中不可点击！"
        }) : a.setData({
            disLeft: "none",
            disRight: "none",
            scroFlag: ""
        });
    },
    goDetail: function(e) {
        e.detail.userInfo && (a.setData({
            shouquan: !1
        }), a.onLoad());
    },
    onLoad: function(e) {
        (a = this).setData({
            canotClick: !0
        }), wx.getStorage({
            key: "companyId",
            success: function(e) {
                a.setData({
                    companyId: e.data
                }), void 0 == e.data || null == e.data || "undefined" == e.data || "null" == e.data || "" == e.data ? (console.log("============companyId未获取================="), 
                setTimeout(function() {
                    a.onLoad();
                }, 2e3)) : (console.log("===================已获取companyId========================="), 
                wx.request({
                    url: n + "skstoremodel/WXfindWelcomeForward",
                    data: {
                        companyId: a.data.companyId
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        var t = e.data;
                        if (console.log("shareInfo:"), console.log(t), "" != t.img && null != t.img && void 0 != t.img) {
                            var o = t.img.split("/"), n = "http://qiniu.shoukaikeji.com/" + o[o.length - 1];
                            console.log("shareImgUrl:" + n), a.setData({
                                shareImgUrl: n
                            });
                        }
                        a.setData({
                            shareTitle: t.title
                        });
                    }
                }), wx.getSetting({
                    success: function(e) {
                        e.authSetting["scope.userInfo"] ? (o.getUserInfo(function(e) {
                            console.log(e), a.setData({
                                userInfo: e
                            });
                        }), wx.setStorage({
                            key: "submitFlg",
                            data: !1
                        }), wx.getLocation({
                            type: "wgs84",
                            success: function(e) {
                                wx.setStorage({
                                    key: "latitude",
                                    data: e.latitude
                                }), wx.setStorage({
                                    key: "longitude",
                                    data: e.longitude
                                }), a.finishOnload(e);
                            },
                            fail: function() {
                                var e = {
                                    longitude: "",
                                    latitude: ""
                                };
                                wx.setStorage({
                                    key: "latitude",
                                    data: e.latitude
                                }), wx.setStorage({
                                    key: "longitude",
                                    data: e.longitude
                                }), a.finishOnload(e);
                            }
                        })) : wx.getStorage({
                            key: "companyId",
                            success: function(e) {
                                wx.request({
                                    url: n + "skstoremodel/wxSelectStoreByCompanyId",
                                    data: {
                                        storeInfoCompanyInfoId: e.data,
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
                                        var t = e.data[0].takeOutDispatchType;
                                        console.log("只有一个配送状态===>", t), wx.setStorage({
                                            key: "deliveryPrice",
                                            data: t
                                        }), a.setData({
                                            shouquanImg: e.data[0].storeInfoHeadImgUrl,
                                            shouquan: !0
                                        });
                                    }
                                });
                            }
                        });
                    },
                    fail: function() {
                        a.onLoad();
                    }
                }));
            },
            fail: function(e) {
                console.log(e), setTimeout(function() {
                    a.onLoad();
                }, 2e3);
            }
        });
    },
    finishOnload: function(e) {
        wx.getStorage({
            key: "companyId",
            success: function(t) {
                wx.request({
                    url: n + "skstoremodel/getCarouselInfoDateWX",
                    data: {
                        companyId: t.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(e) {
                        var t = e.data, o = a.data.slider;
                        for (var n in t) t[n].desktopCycleConfigImgUrl && o.push({
                            picUrl: t[n].desktopCycleConfigImgUrl
                        });
                        a.setData({
                            slider: o
                        }), console.log(o);
                    }
                }), a.getStroeList(t.data, e.longitude, e.latitude, "距离最近", "", "", !0);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), a = this, setTimeout(function() {
            a.onPullDownRefresh();
        }, 500);
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: a.data.shareTitle,
            desc: "",
            imageUrl: a.data.shareImgUrl,
            path: "/pages/welcome/welcome",
            success: function(e) {
                console.log("转发成功");
            },
            fail: function(e) {
                console.log("转发失败");
            }
        };
    },
    stroeList: function(e) {
        wx.request({
            url: n + "skstoremodel/wxSelectStoreByCompanyId",
            data: {
                storeInfoCompanyInfoId: a.data.storeInfoCompanyInfoId,
                storeInfoLongitude: a.data.storeInfoLongitude,
                storeInfoLatitude: a.data.storeInfoLatitude,
                condition: a.data.condition,
                storeInfoName: a.data.storeName,
                storeInfoAddress: a.data.storeInfoAddress
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var a = t.data[e].takeOutDispatchType;
                console.log("配送状态为=====>", a), wx.setStorage({
                    key: "takeOutDispatchType",
                    data: a
                });
            }
        });
    },
    gotoIndex: function(e) {
        if (!a.data.clickedStore) {
            a.setData({
                clickedStore: !0
            });
            var t = e.currentTarget.dataset.storeName, o = e.currentTarget.dataset.storeuid, n = e.currentTarget.dataset.storeInfo, s = e.currentTarget.dataset.storeInfoDeliveryPrice, r = e.currentTarget.dataset.id;
            wx.setStorage({
                key: "storeInfo",
                data: n
            }), wx.setStorage({
                key: "deliveryPrice",
                data: s
            }), wx.setStorage({
                key: "storeName",
                data: t
            }), a.stroeList(r), console.log("====gotoIndex===="), a.resendIndex(o);
        }
    },
    toOther: function() {
        a.cancel(), wx.navigateTo({
            url: "otherStore/otherStore"
        });
    },
    setStorName: function(e) {
        var t = e.detail.value;
        a.setData({
            storeName: t
        });
    },
    searchStoreByName: function(e) {
        var t = a.data.storeName;
        wx.getStorage({
            key: "companyId",
            success: function(e) {
                wx.getStorage({
                    key: "longitude",
                    success: function(o) {
                        wx.getStorage({
                            key: "latitude",
                            success: function(n) {
                                "距我最近" == a.data.rightText ? a.getStroeList(e.data, o.data, n.data, "距离最近", t, "") : a.getStroeList(e.data, o.data, n.data, a.data.rightText, t, "");
                            }
                        });
                    }
                });
            }
        });
    },
    nearBy: function(e) {
        a.setData({
            rightText: "距我最近",
            disLeft: "none",
            disRight: "none",
            scroFlag: ""
        }), wx.getStorage({
            key: "latitude",
            success: function(e) {
                wx.getStorage({
                    key: "longitude",
                    success: function(t) {
                        wx.getStorage({
                            key: "companyId",
                            success: function(o) {
                                console.log("zhesha", a.data.leftText0), a.getStroeList(o.data, t.data, e.data, "距离最近", "", a.data.leftText0);
                            }
                        });
                    }
                });
            }
        });
    },
    maxPopu: function() {
        var e = this;
        e.setData({
            rightText: "人气最高",
            disLeft: "none",
            disRight: "none",
            scroFlag: ""
        }), wx.getStorage({
            key: "companyId",
            success: function(t) {
                e.getStroeList(t.data, "", "", "人气最高", "", e.data.leftText0);
            }
        });
    },
    maxSale: function() {
        var e = this;
        e.setData({
            rightText: "销量最高",
            disLeft: "none",
            disRight: "none",
            scroFlag: ""
        }), wx.getStorage({
            key: "companyId",
            success: function(t) {
                e.getStroeList(t.data, "", "", "销量最高", "", e.data.leftText0);
            }
        });
    },
    area: function(e) {
        var t = this, a = e.currentTarget.dataset.areaname;
        t.setData({
            disLeft: "none",
            disRight: "none",
            scroFlag: "",
            leftText: a,
            leftText0: a
        }), wx.getStorage({
            key: "latitude",
            success: function(e) {
                wx.getStorage({
                    key: "longitude",
                    success: function(o) {
                        wx.getStorage({
                            key: "companyId",
                            success: function(n) {
                                t.getStroeList(n.data, o.data, e.data, "距离最近", "", a);
                            }
                        });
                    }
                });
            }
        });
    },
    getStroeList: function(e, t, o, s, r, d, c) {
        a.setData({
            storeInfoCompanyInfoId: e,
            storeInfoLongitude: t,
            storeInfoLatitude: o,
            condition: s,
            storeName: r,
            storeInfoAddress: d
        }), console.log(e, t, o, s, r, d, c), wx.request({
            url: n + "skstoremodel/wxSelectStoreByCompanyId",
            data: {
                storeInfoCompanyInfoId: e,
                storeInfoLongitude: t,
                storeInfoLatitude: o,
                condition: s,
                storeInfoName: r,
                storeInfoAddress: d
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                if (console.log("=====welcome getStroeList wxSelectStoreByCompanyId success====="), 
                console.log(e.data), a.setData({
                    canotClick: !1
                }), c && 1 == e.data.length) {
                    var t = e.data[0].storeInfoName, o = e.data[0].storeInfoStoreId, n = (e.data[0].storeInfoDeliveryPrice, 
                    e.data[0].takeOutDispatchType);
                    console.log("只有一个店铺配送状态===>", n), wx.setStorage({
                        key: "deliveryPrice",
                        data: n
                    }), wx.setStorage({
                        key: "storeInfo",
                        data: e.data[0]
                    }), wx.setStorage({
                        key: "storeId",
                        data: e.data[0].storeInfoStoreId
                    }), wx.setStorage({
                        key: "storeName",
                        data: t
                    }), wx.setStorage({
                        key: "takeOutDispatchType",
                        data: n
                    }), a.resendIndex(o);
                } else {
                    a.setData({
                        stores: e.data
                    });
                    var s = e.data, r = a.data.starurls;
                    for (var d in s) r[d] = a.setStart(s[d].storeRatedServiceStartLevel);
                    a.setData({
                        starurls: r
                    });
                }
                a.setData({
                    onClickFlag: !0
                });
            }
        });
    },
    setStart: function(e) {
        var t = {};
        console.log("storeRatedServiceStartLevel ==> " + e);
        for (var a = 0; a < 5; a++) t[a] = a <= e - 1 ? {
            starurl: "../../images/star.png"
        } : e - a > 0 && e - a < 1 ? {
            starurl: "../../images/halfStar.png"
        } : {
            starurl: "../../images/emptyStar.png"
        };
        return t;
    },
    resendIndex: function(e) {
        console.log("=========进入跳转主页========="), wx.login({
            success: function(t) {
                console.log("====wx.login success====");
                var s = t.code;
                t.code ? (console.log("====get code===="), console.log("res.code ==> " + t.code), 
                wx.getUserInfo({
                    success: function(t) {
                        console.log("====wx.getUserInfo success===="), wx.setStorage({
                            key: "userName",
                            data: t.userInfo.nickName
                        }), wx.setStorage({
                            key: "avatarUrl",
                            data: t.userInfo.avatarUrl
                        }), wx.request({
                            url: n + "skmembermodel/getOpenidS",
                            data: {
                                code: s,
                                AppID: o.globalData.appId,
                                Secret: o.globalData.Secret,
                                storeUuid: e,
                                wxUserNickName: t.userInfo.nickName,
                                headImgUrl: t.userInfo.avatarUrl
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                if (a.setData({
                                    onClickFlag: !0,
                                    clickedStore: !1
                                }), null != t.data.openid && "" != t.data.openid) {
                                    var o = t.data.wechatUser.wechatUserStoreIdentity;
                                    wx.setStorage({
                                        key: "StoreIdentity",
                                        data: o
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
                                    }), wx.switchTab({
                                        url: "../index/index"
                                    }), wx.getStorage({
                                        key: "companyId",
                                        success: function(a) {
                                            wx.request({
                                                url: n + "skmembermodel/updatVipCardStore",
                                                data: {
                                                    wechatUserId: t.data.wechatUser.wechatUserId,
                                                    wechatUserStoreStoreInfoStoreId: e,
                                                    companyId: a.data
                                                },
                                                method: "POST",
                                                header: {
                                                    "content-type": "application/x-www-form-urlencoded"
                                                },
                                                success: function(e) {}
                                            }), wx.request({
                                                url: n + "skmembermodel/updatEquitycardStore",
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
                            },
                            fail: function(e) {
                                console.log("jfkjsdkglds"), console.log(e.data);
                            }
                        });
                    },
                    fali: function(e) {
                        console.log("====wx.login fail====");
                    }
                })) : console.log("获取用户登录态失败！" + t.errMsg);
            },
            fail: function(e) {
                console.log("====wx.login fail===="), console.log("错误信息"), console.log(e);
            }
        });
    },
    onMyEvent: function(e) {
        console.log(e);
    }
});