var e, t = getApp(), a = t.globalData.httpUrl;

Page({
    data: {
        othercity: "其它",
        httpUrl: a,
        stores: [],
        spCitys: [],
        citys: [],
        disFlag: "none",
        scroFlag: "",
        starurls: [],
        slider: [ {
            picUrl: "../../images/swiper1.jpg"
        }, {
            picUrl: "../../images/swiper1.jpg"
        }, {
            picUrl: "../../images/swiper1.jpg"
        } ],
        onClickFlag: !0
    },
    onLoad: function(t) {
        (e = this).setInit(), wx.getStorage({
            key: "companyId",
            success: function(t) {
                e.setData({
                    companyId: t.data
                }), wx.request({
                    url: a + "skstoremodel/WXfindWelcomeForward",
                    data: {
                        companyId: e.data.companyId
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        var o = t.data;
                        console.log("shareInfo:"), console.log(o);
                        var s = o.img.split("/"), r = s.length - 1, n = a + "image/" + s[r];
                        console.log("shareImgUrl:" + n), e.setData({
                            shareTitle: o.title,
                            shareImgUrl: n
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "avatarUrl",
            success: function(t) {
                e.setData({
                    avatarUrl: t.data
                });
            }
        }), wx.getStorage({
            key: "latitude",
            success: function(t) {
                wx.getStorage({
                    key: "longitude",
                    success: function(o) {
                        wx.getStorage({
                            key: "companyId",
                            success: function(s) {
                                wx.request({
                                    url: a + "skstoremodel/selCityByUser",
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    data: {
                                        storeInfoCompanyInfoId: s.data
                                    },
                                    success: function(a) {
                                        console.log(a.data);
                                        for (var r = e.data.citys, n = e.data.spCitys, c = a.data, d = 0; d < c.length; d++) c[d].cityxs.indexOf("沈阳") < 0 && n.length < 3 ? n.push({
                                            cityName1: c[d].cityxs
                                        }) : n.length >= 3 && r.push({
                                            cityName1: c[d].cityxs
                                        });
                                        e.setData({
                                            spCitys: n,
                                            citys: r
                                        }), n.length > 0 && e.getStroeList(s.data, o.data, t.data, "距离最近", "", n[0].cityName1, "");
                                    },
                                    fail: function(e) {}
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), e = this, setTimeout(function() {
            e.onPullDownRefresh();
        }, 500);
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: e.data.shareTitle,
            desc: "",
            imageUrl: e.data.shareImgUrl,
            path: "/pages/welcome/welcome",
            success: function(e) {
                console.log("转发成功");
            },
            fail: function(e) {
                console.log("转发失败");
            }
        };
    },
    gotoIndex: function(t) {
        if (console.log("that.data.onClickFlag"), console.log(e.data.onClickFlag), e.data.onClickFlag) {
            e.setData({
                onClickFlag: !1
            });
            var a = t.currentTarget.dataset.storeName, o = t.currentTarget.dataset.storeuid, s = t.currentTarget.dataset.storeInfo, r = t.currentTarget.dataset.storeInfoDeliveryPrice;
            wx.setStorage({
                key: "storeInfo",
                data: s
            }), wx.setStorage({
                key: "deliveryPrice",
                data: r
            }), wx.setStorage({
                key: "storeName",
                data: a
            }), console.log("====gotoIndex===="), e.resendIndex(o);
        }
    },
    disOther: function() {
        var t = [], a = [];
        for (var o in e.data.spCitys) t[o] = "#ddd", a[o] = "#555";
        e.setData({
            disFlag: "block",
            scroFlag: "hidden",
            wordColor: "#313330",
            bgColor: "#fcc11f",
            wordColors: t,
            bgColors: a
        });
    },
    resume: function() {
        e.setData({
            disFlag: "none",
            scroFlag: ""
        });
    },
    area: function(t) {
        e.resume();
        var a = t.currentTarget.dataset.cityname;
        wx.getStorage({
            key: "companyId",
            success: function(t) {
                wx.getStorage({
                    key: "latitude",
                    success: function(o) {
                        wx.getStorage({
                            key: "longitude",
                            success: function(s) {
                                e.getStroeList(t.data, s.data, o.data, "距离最近", "", a, "");
                            }
                        });
                    }
                });
            }
        });
    },
    getStroeList: function(t, o, s, r, n, c, d) {
        wx.request({
            url: a + "skstoremodel/wxSelectStoreByCompanyId",
            data: {
                storeInfoCompanyInfoId: t,
                storeInfoLongitude: o,
                storeInfoLatitude: s,
                condition: r,
                storeInfoName: n,
                storeInfoAddress: c
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                e.setData({
                    stores: t.data
                });
                for (var a = t.data, o = e.data.starurls, s = 0; s < a.length; s++) o[s] = e.setStart(a[s].storeRatedServiceStartLevel);
                e.setData({
                    starurls: o
                });
            }
        });
    },
    setInit: function(t) {
        var a = [], o = [];
        for (var s in e.data.spCitys) a[s] = "#ddd", o[s] = "#555";
        a[0] = "#313330", o[0] = "#fcc11f", e.setData({
            wordColors: a,
            bgColors: o,
            wordColor: "#ddd",
            bgColor: "#555"
        });
    },
    fushun: function(t) {
        var a = t.currentTarget.dataset.clickIndex, o = [], s = [];
        for (var r in e.data.spCitys) o[r] = "#ddd", s[r] = "#555";
        o[a] = "#313330", s[a] = "#fcc11f", e.setData({
            wordColors: o,
            bgColors: s,
            wordColor: "#ddd",
            bgColor: "#555"
        }), e.area(t);
    },
    setStart: function(e) {
        this.data.starurls;
        var t = {};
        console.log("storeRatedServiceStartLevel ==> " + e);
        for (var a = 0; a < 5; a++) t[a] = a <= e - 1 ? {
            starurl: "../../../images/star.png"
        } : a - e > 0 && a - e < 1 ? {
            starurl: "../../../images/halfstar.png"
        } : {
            starurl: "../../../images/emptystar.png"
        };
        return t;
    },
    resendIndex: function(o) {
        wx.login({
            success: function(s) {
                console.log("====wx.login success====");
                s.code;
                s.code ? wx.getStorage({
                    key: "userName",
                    success: function(r) {
                        console.log("resi.data ==> " + r.data), wx.request({
                            url: a + "skmembermodel/getOpenidS",
                            data: {
                                code: s.code,
                                AppID: t.globalData.appId,
                                Secret: t.globalData.Secret,
                                storeUuid: o,
                                wxUserNickName: r.data,
                                headImgUrl: e.data.avatarUrl
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                if (e.setData({
                                    onClickFlag: !0
                                }), null != t.data.openid && "" != t.data.openid) {
                                    var a = t.data.wechatUser.wechatUserStoreIdentity;
                                    wx.setStorage({
                                        key: "StoreIdentity",
                                        data: a
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
                                        data: o
                                    }), wx.switchTab({
                                        url: "../../index/index"
                                    });
                                } else wx.showToast({
                                    title: "登录失败"
                                });
                            }
                        });
                    }
                }) : console.log("获取用户登录态失败！" + s.errMsg);
            },
            fail: function() {
                console.log("====wx.login fail====");
            }
        });
    }
});