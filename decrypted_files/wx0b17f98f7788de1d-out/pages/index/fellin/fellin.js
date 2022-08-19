var e, t = require("../../../utils/util.js"), a = getApp(), o = a.globalData.httpUrl;

a.globalData.testhttpUrl;

Page({
    data: {
        tableNum: "",
        minute: "",
        hotline: "",
        address: "",
        startTime: "",
        endTime: "",
        display: "none",
        select: !1,
        personNum: "2",
        selectArea: !1
    },
    bindShowMsg: function() {
        e = this;
        var t = this.data.selectArea;
        console.log(this.data.selectArea + "selectArea"), 0 == t ? e.setData({
            select: !e.data.select,
            selectArea: !0
        }) : e.setData({
            select: !e.data.select,
            selectArea: !1
        });
    },
    mySelect: function(t) {
        e = this;
        var a = t.currentTarget.dataset.name;
        console.log("人数是几====》", a), e.setData({
            personNum: a,
            select: !1,
            selectArea: !1
        });
    },
    myS: function(t) {
        (e = this).setData({
            select: !1,
            selectArea: !1
        });
    },
    goToUser: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    onLoad: function(a) {
        e = this, t.getShareInfos(e, o), e.setData({
            queuingNumber: !0
        }), t.setStoreInfo(e), t.setUserId(e), t.setCompanyId(e, a), "1" == a.secondIn ? e.setData({
            secondIn: !0
        }) : e.setData({
            secondIn: !1
        });
        var s = decodeURIComponent(a.scene);
        if ("undefined" != s && void 0 != s && null != s && "null" != s) {
            var n = s.split(",")[0].replace('"', "");
            s.split(",")[1].replace('"', "");
            e.setData({
                scene: s,
                saoma: !0
            }), wx.request({
                url: o + "skstoremodel/findStoreById",
                data: {
                    pid: n
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(a) {
                    e.setData({
                        storeInfo: a.data
                    }), wx.setStorage({
                        key: "storeInfo",
                        data: a.data
                    }), wx.setStorage({
                        key: "storeName",
                        data: a.data.storeInfoName
                    }), wx.setNavigationBarTitle({
                        title: a.data.storeInfoName
                    });
                    var s = a.data.storeInfoStoreId;
                    e.setData({
                        storeId: s
                    }), wx.setStorageSync("storeId", s), t.getShareInfos(e, o), e.resendIndex(s), wx.request({
                        url: o + "skstoremodel/findStoreById",
                        data: {
                            storeId: s
                        },
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            e.setData({
                                hotline: t.data.storeInfoTelephoneNum,
                                address: t.data.storeInfoAddress,
                                startTime: t.data.storeInfoBusinessStartTime,
                                endTime: t.data.storeInfoBusinessEndTime
                            });
                        }
                    }), wx.getStorage({
                        key: "openId",
                        success: function(t) {
                            wx.request({
                                url: o + "skordermodel/findlPersonNumLineUp",
                                data: {
                                    storeId: s,
                                    openId: t.data
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(t) {
                                    e.setData({
                                        tableNum: t.data.personNum,
                                        minute: t.data.lineUpTime
                                    });
                                }
                            });
                        }
                    }), wx.getStorage({
                        key: "openId",
                        success: function(e) {
                            wx.getStorage({
                                key: "storeId",
                                success: function(t) {
                                    wx.request({
                                        url: o + "skordermodel/findlPersonNumLineUpByOpenId",
                                        data: {
                                            openId: e.data,
                                            storeId: t.data
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(e) {
                                            console.log("===findlPersonNumLineUpByOpenId success==="), e.data > 0 && wx.redirectTo({
                                                url: "/pages/index/fellin/queuingNumber/queuingNumber"
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        } else wx.getStorage({
            key: "storeId",
            success: function(t) {
                e.setData({
                    storeId: t.data
                }), wx.request({
                    url: o + "skstoremodel/findStoreById",
                    data: {
                        storeId: t.data
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        e.setData({
                            hotline: t.data.storeInfoTelephoneNum,
                            address: t.data.storeInfoAddress,
                            startTime: t.data.storeInfoBusinessStartTime,
                            endTime: t.data.storeInfoBusinessEndTime
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "storeId",
            success: function(t) {
                wx.getStorage({
                    key: "openId",
                    success: function(a) {
                        wx.request({
                            url: o + "skordermodel/findlPersonNumLineUp",
                            data: {
                                storeId: t.data,
                                openId: a.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                e.setData({
                                    tableNum: t.data.personNum,
                                    minute: t.data.lineUpTime
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    resendIndex: function(t) {
        e.setData({
            dcFlg: !0,
            orderType: "D"
        }), wx.request({
            url: o + "skstoremodel/findCompanyByAppid",
            data: {
                xcxAppid: a.globalData.appId
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
                wx.setStorage({
                    key: "companyInfo",
                    data: e.data
                }), wx.setStorage({
                    key: "companyId",
                    data: e.data.companyInfoId
                });
            }
        }), e.data.secondIn ? wx.getStorage({
            key: "userId",
            success: function(e) {
                e.data;
            }
        }) : wx.getStorage({
            key: "code",
            success: function(s) {
                if ("" != s.data && null != s.data && void 0 != s.data && "undefined" != s.data && "null" != s.data) {
                    e.setData({
                        code: s.data
                    });
                    var n = s.data;
                    wx.getSetting({
                        success: function(s) {
                            if (s.authSetting["scope.userInfo"]) console.log("============已授权==============="), 
                            wx.getUserInfo({
                                success: function(s) {
                                    e.setData({
                                        userInfo: s.userInfo
                                    }), wx.setStorage({
                                        key: "userName",
                                        data: s.userInfo.nickName
                                    }), wx.request({
                                        url: o + "skmembermodel/getOpenidS",
                                        data: {
                                            code: n,
                                            AppID: a.globalData.appId,
                                            Secret: a.globalData.Secret,
                                            storeUuid: t,
                                            wxUserNickName: s.userInfo.nickName,
                                            headImgUrl: e.data.userInfo.avatarUrl
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(e) {
                                            var a = e.data.wechatUser.wechatUserId;
                                            if (null != e.data.openid && "" != e.data.openid) {
                                                var o = e.data.wechatUser.wechatUserStoreIdentity;
                                                wx.setStorage({
                                                    key: "StoreIdentity",
                                                    data: o
                                                }), wx.setStorage({
                                                    key: "session_key",
                                                    data: e.data.session_key
                                                }), wx.setStorage({
                                                    key: "openId",
                                                    data: e.data.openid
                                                }), wx.setStorage({
                                                    key: "userId",
                                                    data: a
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
                                fali: function(e) {}
                            }); else {
                                console.log("==============未授权=================");
                                var d = "";
                                d = e.data.storeInfo.storeInfoHeadImgUrl, wx.reLaunch({
                                    url: "../../welcome/accredit/accredit?data=" + n + "&store_uuid=" + t + "&imgurl=" + d + "&goPaidui=true&scene=" + e.data.scene,
                                    success: function(e) {},
                                    fail: function(e) {}
                                });
                            }
                        },
                        fail: function(e) {}
                    });
                } else wx.getStorage({
                    key: "userId",
                    success: function(a) {
                        if (a.data) a.data; else e.resendIndex(t);
                    },
                    fail: function() {
                        e.resendIndex(t);
                    }
                });
            },
            fail: function(a) {
                e.resendIndex(t);
            }
        });
    },
    onReady: function() {},
    closeTk: function() {
        e.setData({
            displa: !1
        });
    },
    onShow: function() {
        e = this, wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    t.conSocket(e.data, o);
                }
            });
        }), wx.onSocketMessage(function(a) {
            console.log("收到服务器内容："), console.log(a), "skip" == a.data && e.onLoad(), t.getTkInfos(e, a), 
            t.playMusic(e, a);
        });
    },
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
            path: "/pages/index/index?storeId=" + e.data.storeId + "&companyId=" + e.data.companyId,
            success: function(e) {
                console.log("转发成功");
            },
            fail: function(e) {
                console.log("转发失败");
            }
        };
    },
    qr: function() {
        e.setData({
            display: "block"
        });
    },
    resume: function() {
        e.setData({
            display: "none"
        });
    },
    queuingNumber: function() {
        e.data.queuingNumber && (e.setData({
            queuingNumber: !1
        }), wx.getStorage({
            key: "openId",
            success: function(t) {
                wx.getStorage({
                    key: "storeId",
                    success: function(a) {
                        wx.request({
                            url: o + "skordermodel/insertLineUp",
                            data: {
                                storeId: a.data,
                                openId: t.data,
                                wechatUserId: e.data.userId,
                                personNum: e.data.personNum
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                wx.setStorage({
                                    key: "waitId",
                                    data: e.data.id
                                }), wx.redirectTo({
                                    url: "../fellin/queuingNumber/queuingNumber"
                                });
                            }
                        });
                    }
                });
            }
        }));
    }
});