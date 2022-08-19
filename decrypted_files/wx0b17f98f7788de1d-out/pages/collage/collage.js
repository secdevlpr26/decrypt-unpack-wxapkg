var e, t = getApp(), o = require("../../utils/util.js"), a = t.globalData.httpUrl, n = t.globalData.tuhttpUrl;

Page({
    data: {
        wntjUrls: "http://qiniu.shoukaikeji.com/FjFB_bsTw1h2iQz5BMo6uYEFOob-",
        httpUrl: a,
        tuhttpUrl: n,
        jiazaizhong: !0,
        displayy_2: "none",
        displayy_1: "none",
        displayy_3: "none"
    },
    onLoad: function(t) {
        e = this, "1" == t.secondIn ? e.setData({
            secondIn: !0
        }) : e.setData({
            secondIn: !1
        }), e.setData({
            jiazaizhong: !0
        }), o.setCompanyId(e, t), wx.getStorage({
            key: "companyInfo",
            success: function(t) {
                e.setData({
                    companyName: t.data.companyInfoName
                });
            },
            fail: function(o) {
                console.log(o), setTimeout(function() {
                    e.onLoad(t);
                }, 2e3);
            }
        });
        var n = decodeURIComponent(t.scene);
        if (console.log("scene====>" + n), "undefined" != n && void 0 != n && "" != n && null != n) {
            e.setData({
                saoma: !0,
                scene: n
            }), console.log("扫码进入");
            var s = n.split(",")[0].replace('"', "");
            wx.request({
                url: a + "skstoremodel/findStoreById",
                data: {
                    pid: s
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    wx.setStorage({
                        key: "storeInfo",
                        data: t.data
                    });
                    var o = t.data.storeInfoStoreId;
                    e.resendIndex(o), e.setData({
                        storeId: o
                    }), wx.setStorage({
                        key: "storeId",
                        data: o
                    });
                }
            });
        } else e.setData({
            displayy_0: "block",
            carname_0: "未获取扫码信息,请检查二维码",
            titlename_0: "提示信息"
        }), o.getShareInfos(e, a);
        wx.getStorage({
            key: "connectedSocket",
            success: function(e) {
                e.data ? console.log("============已有socket不连接=============") : wx.getStorage({
                    key: "userId",
                    success: function(e) {
                        o.conSocket(e.data, a);
                    }
                });
            }
        });
    },
    closeTk: function() {
        e.setData({
            displa: !1
        });
    },
    onShow: function() {
        e = this, wx.onSocketMessage(function(t) {
            console.log("===========接收到服务器信息=============="), console.log(t.data), o.getTkInfos(e, t), 
            o.playMusic(e, t);
        }), wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    o.conSocket(e.data, a);
                }
            });
        });
    },
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
    onUnload: function() {
        o.closeSock();
    },
    resendIndex: function(o) {
        e.data.secondIn ? wx.getStorage({
            key: "userId",
            success: function(t) {
                var a = t.data;
                e.loadOther(o, a);
            }
        }) : wx.getStorage({
            key: "code",
            success: function(n) {
                if ("" != n.data && "null" != n.data && "undefined" != n.data && null != n.data && void 0 != n.data) {
                    var s = n.data;
                    wx.setStorage({
                        key: "code",
                        data: ""
                    }), e.setData({
                        code: ""
                    }), wx.getSetting({
                        success: function(n) {
                            console.log("====wx.getSetting success===="), console.log(n), console.log(n.authSetting["scope.userInfo"]), 
                            n.authSetting["scope.userInfo"] ? wx.getUserInfo({
                                success: function(n) {
                                    console.log("====wx.getUserInfo success===="), wx.setStorage({
                                        key: "userName",
                                        data: n.userInfo.nickName
                                    }), wx.setStorage({
                                        key: "avatarUrl",
                                        data: n.userInfo.avatarUrl
                                    }), wx.request({
                                        url: a + "skmembermodel/getOpenidS",
                                        data: {
                                            code: s,
                                            AppID: t.globalData.appId,
                                            Secret: t.globalData.Secret,
                                            storeUuid: o,
                                            wxUserNickName: n.userInfo.nickName,
                                            headImgUrl: n.userInfo.avatarUrl
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(t) {
                                            var a = t.data.wechatUser.wechatUserStoreIdentity;
                                            wx.setStorage({
                                                key: "StoreIdentity",
                                                data: a
                                            }), wx.setStorage({
                                                key: "session_key",
                                                data: t.data.session_key
                                            });
                                            var n = t.data.wechatUser.wechatUserId;
                                            wx.setStorage({
                                                key: "userId",
                                                data: n
                                            }), e.loadOther(o, n);
                                        }
                                    });
                                },
                                fali: function(e) {
                                    console.log("====wx.login fail====");
                                }
                            }) : (console.log("======未授权"), console.log("=====storeId=====>" + o), wx.getStorage({
                                key: "companyId",
                                success: function(t) {
                                    wx.request({
                                        url: a + "skstoremodel/wxSelectStoreByCompanyId",
                                        data: {
                                            storeInfoCompanyInfoId: t.data,
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
                                        success: function(t) {
                                            e.setData({
                                                shouquanImg: t.data[0].storeInfoHeadImgUrl
                                            }), wx.redirectTo({
                                                url: "../welcome/accredit/accredit?goCollage=true&store_uuid=" + o + "&imgurl=" + e.data.shouquanImg + "&data=" + s + "&scene=" + e.data.scene
                                            });
                                        }
                                    });
                                }
                            }));
                        },
                        fail: function(e) {
                            console.log("====wx.getSetting fail====");
                        }
                    });
                } else e.resendIndex(o);
            },
            fail: function(t) {
                e.resendIndex(o);
            }
        });
    },
    chkOrder0_1: function() {
        wx.request({
            url: a + "skmembermodel/findVipCardBy",
            data: {
                companyId: e.data.companyId,
                storeId: e.data.storeuid
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var o = t.data.id;
                wx.setStorage({
                    key: "cardId",
                    data: o
                }), wx.setStorage({
                    key: "userId",
                    data: e.data.userId
                }), wx.setStorage({
                    key: "storeId",
                    data: e.data.storeuid
                }), wx.redirectTo({
                    url: "../user/myCard/myCard?toGotoActive=0&saoma=0"
                });
            }
        });
    },
    chkOrder1_1: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    loadOther: function(t, n) {
        wx.request({
            url: a + "skmembermodel/findVipCardBy",
            data: {
                companyId: e.data.companyId,
                storeId: t
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(s) {
                wx.setStorage({
                    key: "vipCard",
                    data: s.data
                });
                var c = s.data.isExistence;
                wx.request({
                    url: a + "skmembermodel/findWechatUserById",
                    data: {
                        wechatUserId: n,
                        wechatUserStoreStoreInfoStoreId: t
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(s) {
                        var d = s.data;
                        e.setData({
                            jiazaizhong: !1
                        }), "v" != d.wechatUserStoreIdentity ? c ? e.setData({
                            displayy_1: "block",
                            carname_1: "请先领取会员卡",
                            titlename_1: "提示信息",
                            storeuid: t
                        }) : e.setData({
                            displayy_2: "block",
                            carname_2: "商家无会员卡可领",
                            titlename_2: "无法参与活动"
                        }) : (o.getShareInfos(e, a), wx.getStorage({
                            key: "connectedSocket",
                            success: function(e) {
                                1 == e.data ? console.log("======已有连接socket不连接=========") : o.conSocket(n, a);
                            },
                            fail: function(e) {
                                o.conSocket(n, a);
                            }
                        }), wx.onSocketOpen(function(e) {
                            wx.setStorage({
                                key: "connectedSocket",
                                data: !0
                            }), console.log("WebSocket连接已打开！"), console.log(e);
                        }), wx.onSocketClose(function(e) {
                            console.log("WebSocket连接已关闭！"), console.log(e.reason), "interrupted" == e.reason || "abnormal closure" == e.reason ? o.conSocket(n, a) : (console.log("WebSocket连接已关闭！"), 
                            wx.setStorage({
                                key: "connectedSocket",
                                data: !1
                            }));
                        }), wx.onSocketError(function(e) {
                            console.log("WebSocket连接打开失败，请检查！"), console.log(e);
                        }), e.setData({
                            displayy_3: "block",
                            carname_3: "即将跳转进入团购",
                            titlename_3: "确定前往"
                        }));
                    }
                });
            }
        });
    },
    chkOrder0_2: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    chkOrder1_2: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    chkOrder0_3: function() {
        wx.navigateToMiniProgram({
            appId: "wxe89bfe0adae77728"
        });
    },
    chkOrder1_3: function() {
        console.log("======用户已取消=======");
    },
    goToTuanGou: function() {
        wx.navigateToMiniProgram({
            appId: "wxe89bfe0adae77728"
        });
    },
    backToUser: function() {
        wx.switchTab({
            url: "../user/user"
        });
    }
});