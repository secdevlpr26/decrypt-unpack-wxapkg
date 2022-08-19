var a, t = require("../../utils/util.js"), e = (require("../wxParse/wxParse.js"), 
getApp().globalData.httpUrl), n = getApp();

Page({
    data: {
        httpUrl: e,
        latitude: "",
        longitude: "",
        markers: [],
        storeInfoTelephoneNum: ""
    },
    goToUser: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    onLoad: function(n) {
        a = this, console.log("=============开始定位========="), "1" == n.secondIn ? a.setData({
            secondIn: !0
        }) : a.setData({
            secondIn: !1
        });
        var o = decodeURIComponent(n.scene);
        if ("undefined" != o && void 0 != o && null != o && "null" != o) {
            var d = o.split(",")[0].replace('"', "");
            o.split(",")[1].replace('"', "");
            a.setData({
                scene: o,
                saoma: !0
            }), wx.request({
                url: e + "skstoremodel/findStoreById",
                data: {
                    pid: d
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(o) {
                    a.setData({
                        storeInfo: o.data
                    }), wx.setStorage({
                        key: "storeInfo",
                        data: o.data
                    }), wx.setStorage({
                        key: "storeName",
                        data: o.data.storeInfoName
                    }), wx.setNavigationBarTitle({
                        title: o.data.storeInfoName
                    });
                    var d = o.data.storeInfoStoreId;
                    a.setData({
                        storeId: d
                    }), wx.setStorageSync("storeId", d), a.resendIndex(d), t.getShareInfos(a, e), t.setCompanyId(a, n), 
                    t.setStoreId(a), wx.getLocation({
                        type: "wgs84",
                        success: function(t) {
                            console.log(t), console.log("地图的精度", t.longitude), console.log("地图的维度", t.latitude), 
                            a.setData({
                                latitude: t.latitude,
                                longitude: t.longitude,
                                markers: [ {
                                    iconPath: "",
                                    id: 0,
                                    latitude: t.latitude,
                                    longitude: t.longitude,
                                    width: 0,
                                    height: 0,
                                    title: "",
                                    borderRadius: 20,
                                    callout: {
                                        padding: 0,
                                        content: "",
                                        bgColor: "#DC143C",
                                        color: "#FFFF00",
                                        display: "ALWAYS"
                                    },
                                    label: {
                                        content: ""
                                    },
                                    anchor: {}
                                } ],
                                circles: [ {
                                    latitude: t.latitude,
                                    longitude: t.longitude,
                                    radius: 10,
                                    strokeWidth: 2,
                                    fillColor: "#FAFAD2",
                                    color: "#90EE90"
                                } ]
                            });
                        }
                    }), t.getShareInfos(a, e), wx.getStorage({
                        key: "storeInfo",
                        success: function(t) {
                            wx.setNavigationBarTitle({
                                title: t.data.storeInfoName
                            }), a.setData({
                                storeInfoName: t.data.storeInfoName,
                                storeInfoAddress: t.data.storeInfoAddress,
                                storeInfoHeadImgUrl: t.data.storeInfoHeadImgUrl,
                                storeInfoBusinessTime: t.data.storeInfoBusinessStartTime + "-" + t.data.storeInfoBusinessEndTime
                            });
                        }
                    }), t.setCompanyId(a, n), wx.getStorage({
                        key: "storeId",
                        success: function(t) {
                            a.setData({
                                storeId: t.data
                            }), console.log("====wx.getStorage storeId success===="), wx.request({
                                url: e + "skstoremodel/findBrandConfigById",
                                data: {
                                    storeId: t.data
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(t) {
                                    console.log("====findBrandConfigById success===="), console.log(t.data);
                                    var e = [];
                                    null != t.data.brandConfigImgUrl1 && "" != t.data.brandConfigImgUrl1 && e.push({
                                        imgurl: t.data.brandConfigImgUrl1
                                    }), null != t.data.brandConfigImgUrl2 && "" != t.data.brandConfigImgUrl2 && e.push({
                                        imgurl: t.data.brandConfigImgUrl2
                                    }), null != t.data.brandConfigImgUrl3 && "" != t.data.brandConfigImgUrl3 && e.push({
                                        imgurl: t.data.brandConfigImgUrl3
                                    }), null != t.data.brandConfigImgUrl4 && "" != t.data.brandConfigImgUrl4 && e.push({
                                        imgurl: t.data.brandConfigImgUrl4
                                    }), null != t.data.brandConfigImgUrl5 && "" != t.data.brandConfigImgUrl5 && e.push({
                                        imgurl: t.data.brandConfigImgUrl5
                                    }), null != t.data.brandConfigImgUrl6 && "" != t.data.brandConfigImgUrl6 && e.push({
                                        imgurl: t.data.brandConfigImgUrl6
                                    }), null != t.data.brandConfigImgUrl7 && "" != t.data.brandConfigImgUrl7 && e.push({
                                        imgurl: t.data.brandConfigImgUrl7
                                    }), null != t.data.brandConfigImgUrl8 && "" != t.data.brandConfigImgUrl8 && e.push({
                                        imgurl: t.data.brandConfigImgUrl8
                                    }), null != t.data.brandConfigImgUrl9 && "" != t.data.brandConfigImgUrl9 && e.push({
                                        imgurl: t.data.brandConfigImgUrl9
                                    }), null != t.data.brandConfigImgUrl10 && "" != t.data.brandConfigImgUrl10 && e.push({
                                        imgurl: t.data.brandConfigImgUrl10
                                    }), a.setData({
                                        storeInfoTelephoneNum: t.data.storeInfoTelephoneNum,
                                        brandConfigPhoneNum: t.data.brandConfigPhoneNum,
                                        brandConfigContact: t.data.brandConfigContact,
                                        brandSlideUrls: e
                                    }), null == t.data.content && (t.data.content = "");
                                }
                            });
                        },
                        fail: function(a) {
                            console.log("====wx.getStorage storeId fail====");
                        }
                    });
                }
            });
        } else t.getShareInfos(a, e), t.setCompanyId(a, n), t.setStoreId(a), wx.getLocation({
            type: "wgs84",
            success: function(t) {
                console.log(t), console.log("地图的精度", t.longitude), console.log("地图的维度", t.latitude), 
                a.setData({
                    latitude: t.latitude,
                    longitude: t.longitude,
                    markers: [ {
                        iconPath: "",
                        id: 0,
                        latitude: t.latitude,
                        longitude: t.longitude,
                        width: 0,
                        height: 0,
                        title: "",
                        borderRadius: 20,
                        callout: {
                            padding: 0,
                            content: "",
                            bgColor: "#DC143C",
                            color: "#FFFF00",
                            display: "ALWAYS"
                        },
                        label: {
                            content: ""
                        },
                        anchor: {}
                    } ],
                    circles: [ {
                        latitude: t.latitude,
                        longitude: t.longitude,
                        radius: 10,
                        strokeWidth: 2,
                        fillColor: "#FAFAD2",
                        color: "#90EE90"
                    } ]
                });
            }
        }), t.getShareInfos(a, e), wx.getStorage({
            key: "storeInfo",
            success: function(t) {
                wx.setNavigationBarTitle({
                    title: t.data.storeInfoName
                }), a.setData({
                    storeInfoName: t.data.storeInfoName,
                    storeInfoAddress: t.data.storeInfoAddress,
                    storeInfoHeadImgUrl: t.data.storeInfoHeadImgUrl,
                    storeInfoBusinessTime: t.data.storeInfoBusinessStartTime + "-" + t.data.storeInfoBusinessEndTime
                });
            }
        }), t.setCompanyId(a, n), wx.getStorage({
            key: "storeId",
            success: function(t) {
                a.setData({
                    storeId: t.data
                }), console.log("====wx.getStorage storeId success===="), wx.request({
                    url: e + "skstoremodel/findBrandConfigById",
                    data: {
                        storeId: t.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        console.log("====findBrandConfigById success===="), console.log(t.data);
                        var e = [];
                        null != t.data.brandConfigImgUrl1 && "" != t.data.brandConfigImgUrl1 && e.push({
                            imgurl: t.data.brandConfigImgUrl1
                        }), null != t.data.brandConfigImgUrl2 && "" != t.data.brandConfigImgUrl2 && e.push({
                            imgurl: t.data.brandConfigImgUrl2
                        }), null != t.data.brandConfigImgUrl3 && "" != t.data.brandConfigImgUrl3 && e.push({
                            imgurl: t.data.brandConfigImgUrl3
                        }), null != t.data.brandConfigImgUrl4 && "" != t.data.brandConfigImgUrl4 && e.push({
                            imgurl: t.data.brandConfigImgUrl4
                        }), null != t.data.brandConfigImgUrl5 && "" != t.data.brandConfigImgUrl5 && e.push({
                            imgurl: t.data.brandConfigImgUrl5
                        }), null != t.data.brandConfigImgUrl6 && "" != t.data.brandConfigImgUrl6 && e.push({
                            imgurl: t.data.brandConfigImgUrl6
                        }), null != t.data.brandConfigImgUrl7 && "" != t.data.brandConfigImgUrl7 && e.push({
                            imgurl: t.data.brandConfigImgUrl7
                        }), null != t.data.brandConfigImgUrl8 && "" != t.data.brandConfigImgUrl8 && e.push({
                            imgurl: t.data.brandConfigImgUrl8
                        }), null != t.data.brandConfigImgUrl9 && "" != t.data.brandConfigImgUrl9 && e.push({
                            imgurl: t.data.brandConfigImgUrl9
                        }), null != t.data.brandConfigImgUrl10 && "" != t.data.brandConfigImgUrl10 && e.push({
                            imgurl: t.data.brandConfigImgUrl10
                        }), a.setData({
                            storeInfoTelephoneNum: t.data.storeInfoTelephoneNum,
                            brandConfigPhoneNum: t.data.brandConfigPhoneNum,
                            brandConfigContact: t.data.brandConfigContact,
                            brandSlideUrls: e
                        }), null == t.data.content && (t.data.content = "");
                    }
                });
            },
            fail: function(a) {
                console.log("====wx.getStorage storeId fail====");
            }
        });
    },
    resendIndex: function(t) {
        a.setData({
            dcFlg: !0,
            orderType: "D"
        }), wx.request({
            url: e + "skstoremodel/findCompanyByAppid",
            data: {
                xcxAppid: n.globalData.appId
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                wx.setStorage({
                    key: "companyInfo",
                    data: a.data
                }), wx.setStorage({
                    key: "companyId",
                    data: a.data.companyInfoId
                });
            }
        }), a.data.secondIn ? wx.getStorage({
            key: "userId",
            success: function(a) {
                a.data;
            }
        }) : wx.getStorage({
            key: "code",
            success: function(o) {
                if ("" != o.data && null != o.data && void 0 != o.data && "undefined" != o.data && "null" != o.data) {
                    a.setData({
                        code: o.data
                    });
                    var d = o.data;
                    wx.getSetting({
                        success: function(o) {
                            if (o.authSetting["scope.userInfo"]) console.log("============已授权==============="), 
                            wx.getUserInfo({
                                success: function(o) {
                                    a.setData({
                                        userInfo: o.userInfo
                                    }), wx.setStorage({
                                        key: "userName",
                                        data: o.userInfo.nickName
                                    }), wx.request({
                                        url: e + "skmembermodel/getOpenidS",
                                        data: {
                                            code: d,
                                            AppID: n.globalData.appId,
                                            Secret: n.globalData.Secret,
                                            storeUuid: t,
                                            wxUserNickName: o.userInfo.nickName,
                                            headImgUrl: a.data.userInfo.avatarUrl
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(a) {
                                            var e = a.data.wechatUser.wechatUserId;
                                            if (null != a.data.openid && "" != a.data.openid) {
                                                var n = a.data.wechatUser.wechatUserStoreIdentity;
                                                wx.setStorage({
                                                    key: "StoreIdentity",
                                                    data: n
                                                }), wx.setStorage({
                                                    key: "session_key",
                                                    data: a.data.session_key
                                                }), wx.setStorage({
                                                    key: "openId",
                                                    data: a.data.openid
                                                }), wx.setStorage({
                                                    key: "userId",
                                                    data: e
                                                }), wx.setStorage({
                                                    key: "storeId",
                                                    data: t
                                                });
                                            } else wx.showToast({
                                                title: "登录失败"
                                            });
                                        }
                                    });
                                },
                                fali: function(a) {}
                            }); else {
                                console.log("==============未授权=================");
                                var r = "";
                                r = a.data.storeInfo.storeInfoHeadImgUrl, wx.reLaunch({
                                    url: "../welcome/accredit/accredit?data=" + d + "&store_uuid=" + t + "&imgurl=" + r + "&goDaohang=true&scene=" + a.data.scene,
                                    success: function(a) {},
                                    fail: function(a) {}
                                });
                            }
                        },
                        fail: function(a) {}
                    });
                } else wx.getStorage({
                    key: "userId",
                    success: function(e) {
                        if (e.data) e.data; else a.resendIndex(t);
                    },
                    fail: function() {
                        a.resendIndex(t);
                    }
                });
            },
            fail: function(e) {
                a.resendIndex(t);
            }
        });
    },
    onReady: function() {},
    locationClick: function(t) {
        wx.getLocation({
            type: "wgs84",
            success: function(t) {
                console.log(t), a.setData({
                    latitude: t.latitude,
                    longitude: t.longitude,
                    markers: [ {
                        iconPath: "",
                        id: 0,
                        latitude: t.latitude,
                        longitude: t.longitude,
                        width: 0,
                        height: 0,
                        title: "当前位置",
                        callout: {
                            padding: 10,
                            content: "当前位置",
                            bgColor: "#DC143C",
                            color: "#FFFF00",
                            display: "ALWAYS"
                        },
                        label: {
                            content: ""
                        },
                        anchor: {}
                    } ]
                });
            }
        });
    },
    closeTk: function() {
        a.setData({
            displa: !1
        });
    },
    onShow: function() {
        console.log("=========地图onShow========="), a = this, wx.onSocketMessage(function(e) {
            console.log("===========接收到服务器信息=============="), console.log(e.data), t.getTkInfos(a, e), 
            t.playMusic(a, e);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(a) {
                    t.conSocket(a.data, e);
                }
            });
        });
    },
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
            path: "/pages/index/index?storeId=" + a.data.storeId + "&companyId=" + a.data.companyId,
            success: function(a) {
                console.log("转发成功");
            },
            fail: function(a) {
                console.log("转发失败");
            }
        };
    },
    call: function() {
        var t = a.data.storeInfoTelephoneNum;
        wx.makePhoneCall({
            phoneNumber: t,
            success: function() {
                console.log("拨打电话成功！");
            },
            fail: function() {
                console.log("拨打电话失败！");
            }
        });
    },
    dh: function() {
        wx.navigateTo({
            url: "../map/map"
        });
    }
});