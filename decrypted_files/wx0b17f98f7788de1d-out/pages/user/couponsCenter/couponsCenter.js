var e, t = require("../../../utils/util.js"), a = getApp(), o = a.globalData.httpUrl;

Page({
    data: {
        coupones: [],
        geted: !1,
        receive: !1,
        nowDate: t.formatDate(new Date()),
        dcd: !0,
        displayy: "none"
    },
    trimString: function(e) {
        var t = e.split("年"), a = t[1].split("月"), o = a[1].split("日");
        return t[0] + "-" + a[0] + "-" + o[0];
    },
    trimString1: function(e) {
        var t = e.split("年"), a = t[1].split("月"), o = a[1].split("日");
        return t[0] + a[0] + o[0];
    },
    trimString2: function(e) {
        var t = e.split("/"), a = t[2].split(" ");
        return t[0] + t[1] + a[0];
    },
    fixNull: function(e) {
        return null == e && (e = 0), e;
    },
    fixNulls: function(e) {
        return null == e && (e = ""), e;
    },
    goToUser: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    onLoad: function(a) {
        console.log("现在的时间--------", this.data.nowDate), e = this, "1" == a.secondIn ? e.setData({
            secondIn: !0
        }) : e.setData({
            secondIn: !1
        });
        var n = decodeURIComponent(a.scene);
        if ("undefined" != n && void 0 != n && null != n && "null" != n) {
            var s = n.split(",")[0].replace('"', "");
            n.split(",")[1].replace('"', "");
            e.setData({
                scene: n,
                saoma: !0
            }), wx.request({
                url: o + "skstoremodel/findStoreById",
                data: {
                    pid: s
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(n) {
                    e.setData({
                        storeInfo: n.data
                    }), wx.setStorage({
                        key: "storeInfo",
                        data: n.data
                    }), wx.setStorage({
                        key: "storeName",
                        data: n.data.storeInfoName
                    }), wx.setNavigationBarTitle({
                        title: n.data.storeInfoName
                    });
                    var s = n.data.storeInfoStoreId;
                    e.setData({
                        storeId: s
                    }), wx.setStorageSync("storeId", s), t.getShareInfos(e, o), e.resendIndex(s), t.getShareInfos(e, o), 
                    t.setCompanyId(e, a), t.setStoreId(e), t.setStoreInfo(e), 1 == e.data.geted && (e.setData({
                        geted: !1,
                        receive: !1
                    }), e.setData({
                        displayy: "block",
                        titlename: "恭喜",
                        carname: "已领取一张优惠券"
                    })), wx.getStorage({
                        key: "userId",
                        success: function(t) {
                            wx.getStorage({
                                key: "storeId",
                                success: function(a) {
                                    wx.getStorage({
                                        key: "companyId",
                                        success: function(n) {
                                            wx.request({
                                                url: o + "skcouponmodel/selCouponByApply",
                                                data: {
                                                    userId: t.data,
                                                    applyStoreId: a.data,
                                                    companyId: n.data
                                                },
                                                method: "POST",
                                                header: {
                                                    "content-type": "application/x-www-form-urlencoded"
                                                },
                                                success: function(t) {
                                                    console.log(t.data);
                                                    var a = t.data;
                                                    e.setData({
                                                        coupones: a
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        } else t.getShareInfos(e, o), t.setCompanyId(e, a), t.setStoreId(e), t.setStoreInfo(e), 
        1 == e.data.geted && (e.setData({
            geted: !1,
            receive: !1
        }), e.setData({
            displayy: "block",
            titlename: "恭喜",
            carname: "已领取一张优惠券"
        })), wx.getStorage({
            key: "userId",
            success: function(t) {
                wx.getStorage({
                    key: "storeId",
                    success: function(a) {
                        wx.getStorage({
                            key: "companyId",
                            success: function(n) {
                                wx.request({
                                    url: o + "skcouponmodel/selCouponByApply",
                                    data: {
                                        userId: t.data,
                                        applyStoreId: a.data,
                                        companyId: n.data
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(t) {
                                        console.log(t.data);
                                        var a = t.data;
                                        e.setData({
                                            coupones: a
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
            success: function(n) {
                if ("" != n.data && null != n.data && void 0 != n.data && "undefined" != n.data && "null" != n.data) {
                    e.setData({
                        code: n.data
                    });
                    var s = n.data;
                    wx.getSetting({
                        success: function(n) {
                            if (n.authSetting["scope.userInfo"]) console.log("============已授权==============="), 
                            wx.getUserInfo({
                                success: function(n) {
                                    e.setData({
                                        userInfo: n.userInfo
                                    }), wx.setStorage({
                                        key: "userName",
                                        data: n.userInfo.nickName
                                    }), wx.request({
                                        url: o + "skmembermodel/getOpenidS",
                                        data: {
                                            code: s,
                                            AppID: a.globalData.appId,
                                            Secret: a.globalData.Secret,
                                            storeUuid: t,
                                            wxUserNickName: n.userInfo.nickName,
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
                                    url: "../../welcome/accredit/accredit?data=" + s + "&store_uuid=" + t + "&imgurl=" + d + "&goLingquan=true&scene=" + e.data.scene,
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
        (e = this).setData({
            dcd: !0
        }), wx.onSocketMessage(function(a) {
            console.log("===========接收到服务器信息=============="), console.log(a.data), t.getTkInfos(e, a), 
            t.playMusic(e, a);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    t.conSocket(e.data, o);
                }
            });
        }), e.onLoad();
    },
    onHide: function() {},
    onUnload: function() {
        t.closeSock();
    },
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
    getIt: function(t) {
        if (e.data.dcd) {
            e.setData({
                dcd: !1
            }), console.log(t.detail.formId);
            var a = t.detail.formId, n = t.currentTarget.dataset.cardId, s = t.currentTarget.dataset.putId, d = t.currentTarget.dataset.voucherrestrictId, r = t.currentTarget.dataset.ids, c = e.data.coupones[r].id;
            e.data.receive || (console.log(e.data.receive), wx.getStorage({
                key: "userId",
                success: function(e) {
                    var t = e.data;
                    wx.getStorage({
                        key: "storeId",
                        success: function(e) {
                            var r = e.data;
                            wx.request({
                                url: o + "skcouponmodel/alreadyReceivedNumber",
                                data: {
                                    userId: t,
                                    putId: s,
                                    cardId: n
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(e) {
                                    console.log("剩余优惠卷领取数量" + e.data.number), e.data.number < d && (console.log("剩余优惠卷领取数量" + e.data.number), 
                                    wx.setStorage({
                                        key: "id",
                                        data: c
                                    }), wx.setStorage({
                                        key: "userId",
                                        data: t
                                    }), wx.setStorage({
                                        key: "putId",
                                        data: s
                                    }), wx.setStorage({
                                        key: "cardId",
                                        data: n
                                    }), wx.setStorage({
                                        key: "storeId",
                                        data: r
                                    }), wx.setStorage({
                                        key: "formId",
                                        data: a
                                    }), wx.navigateTo({
                                        url: "../cardDetail/cardDetail"
                                    }));
                                }
                            });
                        }
                    });
                }
            }));
        }
    }
});