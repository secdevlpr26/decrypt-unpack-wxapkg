var e, t, o = getApp(), a = require("../../utils/util.js"), s = require("../../module/getPhone.js"), n = o.globalData.httpUrl, c = o.globalData.tuhttpUrl;

Page({
    data: {
        wntjUrls: "http://qiniu.shoukaikeji.com/FjFB_bsTw1h2iQz5BMo6uYEFOob-",
        httpUrl: n,
        tuhttpUrl: c,
        description: "参加摇一摇活动，摇出丰厚大奖",
        isShow: !1,
        allowShake: !0,
        shake: "",
        shakeBackUrl: "http://qiniu.shoukaikeji.com/Fmmg4emGpeNKhCIDwCaieZE9WKMp",
        shakeBottomUrl: "http://qiniu.shoukaikeji.com/FkwlQKSsYO8hXmFiKSuZ70KXqb1_",
        noShakeUrl: "http://qiniu.shoukaikeji.com/FiDHGGf_-zAXB3Sk05E4FJECH6lT",
        hasShakeUrl: "http://qiniu.shoukaikeji.com/FhisIFTWxtV-1qCfU4EThVspKi5w",
        shakeMp3: "http://qiniu.shoukaikeji.com/FniUyJC9NddXGl5CMAIPAVfsDJRf",
        hasShake: !1,
        noShake: !1,
        prizeInfo: "电视机一台",
        confirm: "好 的",
        phone: "",
        display: "none",
        session_key: ""
    },
    onLoad: function(o) {
        console.log("===============摇一摇情况================="), console.log(o), (e = this).setData({
            allowShake: !1
        }), "1" == o.secondIn ? (e.setData({
            secondIn: !0,
            session_key: o.sessionkey
        }), t = o.sessionkey) : e.setData({
            secondIn: !1
        }), e.setData({
            jiazaizhong: !0
        }), a.setCompanyId(e, o);
        var s = decodeURIComponent(o.scene);
        if (console.log("scene====>" + s), "undefined" != s && void 0 != s && "" != s && null != s) {
            wx.setStorage({
                key: "saomajin",
                data: !0
            }), wx.onSocketOpen(function() {
                wx.closeSocket({
                    success: function(e) {
                        console.log("======初始化关闭socket======="), wx.onSocketClose(function(e) {
                            console.log("========没有socket连接==========");
                        });
                    }
                });
            }), e.setData({
                saoma: !0,
                scene: s
            }), console.log("扫码进入");
            var c = s.split(",")[0].replace('"', "");
            e.setData({
                pid: c
            }), wx.request({
                url: n + "skstoremodel/findStoreById",
                data: {
                    pid: c
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(t) {
                    console.log("=====摇一摇进入===="), console.log(t), wx.setStorage({
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
        } else a.getShareInfos(e, n), e.setData({
            saoma: !1
        }), console.error("扫码状态-----------", o.saoma), 0 == o.saoma && (console.error("判断-----------", o.saoma), 
        e.setData({
            saoma: !0
        })), console.log("从小程序进入"), wx.getStorage({
            key: "storeId",
            success: function(t) {
                e.setData({
                    storeId: t.data
                }), e.resendIndex(t.data), e.getShakeListWX(t.data);
            },
            fail: function(e) {
                console.log(e.data);
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
        e = this, wx.onSocketMessage(function(t) {
            console.log("收到服务器内容："), console.log(t), "shakeAShake" != t.data.split(",")[0] ? "NoShakeAShake" != t.data.split(",")[0] ? (console.log("===========接收到服务器信息=============="), 
            console.log(t.data), a.getTkInfos(e, t), a.playMusic(e, t)) : e.setData({
                hasShake: !1,
                noShake: !0,
                prizeInfo: "未中奖"
            }) : e.setData({
                hasShake: !0,
                noShake: !1,
                prizeInfo: t.data.split(",")[1]
            });
        }), e.data.isShow = !0, wx.onAccelerometerChange(function(t) {
            e.data.isShow && (wx.onSocketClose(function(e) {
                console.log("WebSocket连接已关闭！"), console.log(e.reason), "interrupted" == e.reason || "abnormal closure" == e.reason ? wx.getStorage({
                    key: "userId",
                    success: function(e) {
                        a.conSocket(e.data, n);
                    }
                }) : (console.log("WebSocket连接已关闭！"), wx.setStorage({
                    key: "connectedSocket",
                    data: !1
                }));
            }), (t.x > 1 || t.y > 1) && (e.playShakeAudio(), setTimeout(function() {
                e.setData({
                    allowShake: !0
                });
            }, 1e3)));
        }), e.onLoad();
    },
    onHide: function() {
        e.setData({
            isShow: !1
        });
    },
    onUnload: function() {
        e.setData({
            isShow: !1
        }), wx.closeSocket({
            success: function(e) {
                console.log("======success======="), wx.setStorage({
                    key: "connectedSocket",
                    data: !1
                }), console.log(e);
            },
            fail: function(e) {
                console.log("======fail======="), console.log(e);
            }
        });
    },
    onPullDownRefresh: function() {},
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
    playShakeAudio: function() {
        e.data.allowShake && (e.setData({
            allowShake: !1
        }), wx.request({
            url: n + "skordermodel/getShakeListWX",
            data: {
                storeId: e.data.storeId
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                t.data.isExistence ? (e.setData({
                    shake: "shake 1s linear infinite"
                }), "undefined" == e.data.userId || void 0 == e.data.userId || "" == e.data.userId || "null" == e.data.userId || null == e.data.userId ? e.playShakeAudio() : (wx.request({
                    url: n + "skordermodel/instersShakeRosterWX",
                    data: {
                        userId: e.data.userId,
                        storeId: e.data.storeId
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        1 == t.data.isExistence ? wx.showToast({
                            title: "摇一摇成功"
                        }) : wx.showToast({
                            title: "活动已结束"
                        }), e.setData({
                            shake: ""
                        });
                    }
                }), wx.playBackgroundAudio({
                    dataUrl: e.data.shakeMp3,
                    title: "",
                    coverImgUrl: ""
                }), wx.onBackgroundAudioStop(function() {
                    e.setData({
                        shake: ""
                    }), console.log("开始调用getShakeListWX");
                }))) : wx.showToast({
                    title: "活动未开始"
                });
            }
        }));
    },
    getShakeListWX: function(t) {
        console.log("====================进入getShakeListWX============"), wx.request({
            url: n + "skordermodel/getShakeListWX",
            data: {
                storeId: t
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log("getShakeListWX返回数据======》"), console.log(t.data), e.setData({
                    getShakeListWX: t.data
                });
            }
        });
    },
    confirm: function() {
        e.setData({
            hasShake: !1,
            noShake: !1
        });
    },
    resendIndex: function(t) {
        e.data.secondIn ? wx.getStorage({
            key: "userId",
            success: function(o) {
                var a = o.data;
                e.loadActive(t, a);
            }
        }) : wx.getStorage({
            key: "code",
            success: function(a) {
                if ("" != a.data && null != a.data && void 0 != a.data && "null" != a.data && "undefined" != a.data) {
                    e.setData({
                        code: a.data
                    });
                    var s = a.data;
                    wx.getSetting({
                        success: function(a) {
                            console.log("====wx.getSetting success===="), console.log(a), console.log(a.authSetting["scope.userInfo"]), 
                            a.authSetting["scope.userInfo"] ? wx.getUserInfo({
                                success: function(a) {
                                    console.log("====wx.getUserInfo success===="), wx.setStorage({
                                        key: "userName",
                                        data: a.userInfo.nickName
                                    }), wx.setStorage({
                                        key: "avatarUrl",
                                        data: a.userInfo.avatarUrl
                                    }), wx.request({
                                        url: n + "skmembermodel/getOpenidS",
                                        data: {
                                            code: s,
                                            AppID: o.globalData.appId,
                                            Secret: o.globalData.Secret,
                                            storeUuid: t,
                                            wxUserNickName: a.userInfo.nickName,
                                            headImgUrl: a.userInfo.avatarUrl
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(o) {
                                            wx.setStorage({
                                                key: "session_key",
                                                data: o.data.session_key
                                            }), console.log("这里走了么--------", o.data.session_key), wx.setStorage({
                                                key: "code",
                                                data: ""
                                            }), e.setData({
                                                code: ""
                                            });
                                            var a = o.data.wechatUser.wechatUserId;
                                            wx.setStorage({
                                                key: "userId",
                                                data: o.data.wechatUser.wechatUserId
                                            }), e.loadActive(t, a);
                                        }
                                    });
                                },
                                fali: function(e) {
                                    console.log("====wx.login fail====");
                                }
                            }) : (console.log("======未授权"), console.log("=====storeId=====>" + t), wx.request({
                                url: n + "skstoremodel/findStoreById",
                                data: {
                                    pid: e.data.pid
                                },
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(o) {
                                    e.setData({
                                        shouquanImg: o.data.storeInfoHeadImgUrl
                                    }), wx.redirectTo({
                                        url: "../welcome/accredit/accredit?goActive=true&goUser=false&store_uuid=" + t + "&imgurl=" + e.data.shouquanImg + "&data=" + e.data.code + "&scene=" + e.data.scene
                                    });
                                }
                            }));
                        },
                        fail: function(e) {
                            console.log("====wx.getSetting fail====");
                        }
                    });
                } else wx.getStorage({
                    key: "userId",
                    success: function(o) {
                        if ("" != o.data && null != o.data && void 0 != o.data && "null" != o.data && "undefined" != o.data) {
                            var a = o.data;
                            e.loadActive(t, a);
                        } else e.resendIndex(t);
                    },
                    fail: function() {
                        e.resendIndex(t);
                    }
                });
            },
            fail: function(o) {
                console.log("获取code失败"), e.resendIndex(t);
            }
        });
    },
    quxiao: function() {
        e.setData({
            display: "none"
        }), wx.switchTab({
            url: "../user/user"
        });
    },
    getPhone: function(e) {
        var a = this;
        a.data.isVip;
        "getPhoneNumber:fail user deny" == e.detail.errMsg || "getPhoneNumber:fail:cancel to confirm login" == e.detail.errMsg || (a.setData({
            display: "none"
        }), t ? s.getPhoneNum(e.detail.encryptedData, e.detail.iv, o.globalData.appId, t).then(function(e) {
            a.setData({
                toGotoActive: !0
            }), setTimeout(function() {
                wx.redirectTo({
                    url: "../user/myCard/myCard?toGotoActive=0&saoma=0"
                });
            }, 500);
        }) : s.getPhoneNum(e.detail.encryptedData, e.detail.iv, o.globalData.appId, wx.getStorageSync("session_key")).then(function(e) {
            a.setData({
                toGotoActive: !0
            }), setTimeout(function() {
                wx.redirectTo({
                    url: "../user/myCard/myCard?toGotoActive=0&saoma=0"
                });
            }, 500);
        }));
    },
    loadActive: function(t, o) {
        wx.request({
            url: n + "skmembermodel/updatVipCardStore",
            data: {
                wechatUserId: o,
                wechatUserStoreStoreInfoStoreId: t,
                companyId: e.data.companyId
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(e) {}
        }), wx.request({
            url: n + "skmembermodel/findVipCardBy",
            data: {
                companyId: e.data.companyId,
                storeId: t
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(s) {
                wx.getStorage({
                    key: "companyId",
                    success: function(e) {
                        wx.request({
                            url: n + "skmembermodel/updatEquitycardStore",
                            data: {
                                wxUserId: o,
                                storeId: t,
                                companyId: e.data
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {}
                        });
                    }
                }), wx.setStorage({
                    key: "vipCard",
                    data: s.data
                });
                s.data;
                var c = s.data.isExistence;
                wx.request({
                    url: n + "skmembermodel/findWechatUserById",
                    data: {
                        wechatUserId: o,
                        wechatUserStoreStoreInfoStoreId: t
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(s) {
                        var d = s.data;
                        wx.request({
                            url: n + "skordermodel/getShakeActivityByIdWX",
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: {
                                storeId: t
                            },
                            success: function(s) {
                                var r = s.data.isUseVip;
                                e.setData({
                                    jiazaizhong: !1
                                }), "v" != d.wechatUserStoreIdentity && r ? c ? (wx.request({
                                    url: n + "skmembermodel/findVipCardBy",
                                    data: {
                                        companyId: e.data.companyId,
                                        storeId: t
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(e) {
                                        var o = e.data.id;
                                        wx.setStorage({
                                            key: "cardId",
                                            data: o
                                        }), wx.setStorage({
                                            key: "storeId",
                                            data: t
                                        });
                                    }
                                }), e.setData({
                                    display: "block"
                                })) : wx.showModal({
                                    title: "商家无会员卡可领",
                                    content: "无法参与活动",
                                    success: function(t) {
                                        t.confirm ? (e.setData({
                                            display: "none"
                                        }), wx.switchTab({
                                            url: "../index/index"
                                        })) : t.cancel && (e.setData({
                                            display: "none"
                                        }), wx.switchTab({
                                            url: "../index/index"
                                        }));
                                    }
                                }) : (e.setData({
                                    allowShake: !0
                                }), a.getShareInfos(e, n), e.getShakeListWX(e.data.storeId), wx.getStorage({
                                    key: "connectedSocket",
                                    success: function(e) {
                                        1 == e.data ? console.log("======已有连接socket不连接=========") : a.conSocket(o, n);
                                    },
                                    fail: function(e) {
                                        a.conSocket(o, n);
                                    }
                                }), wx.onSocketOpen(function(e) {
                                    wx.setStorage({
                                        key: "connectedSocket",
                                        data: !0
                                    }), console.log("WebSocket连接已打开！"), console.log(e);
                                }), wx.onSocketClose(function(e) {
                                    console.log("WebSocket连接已关闭！"), console.log(e.reason), "interrupted" == e.reason || "abnormal closure" == e.reason ? a.conSocket(o, n) : (console.log("WebSocket连接已关闭！"), 
                                    wx.setStorage({
                                        key: "connectedSocket",
                                        data: !1
                                    }));
                                }), wx.onSocketError(function(e) {
                                    console.log("WebSocket连接打开失败，请检查！"), console.log(e);
                                }), wx.setStorage({
                                    key: "storeId",
                                    data: t
                                }), wx.setStorage({
                                    key: "userId",
                                    data: o
                                }), e.setData({
                                    userId: o
                                }), console.log("userId====>" + o));
                            }
                        });
                    }
                });
            }
        });
    },
    close: function() {
        wx.switchTab({
            url: "../user/user"
        });
    }
});