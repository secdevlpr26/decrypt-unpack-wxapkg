var e, t = require("../../../utils/util.js"), o = getApp(), a = o.globalData.httpUrl;

Page({
    data: {
        wifi_password: "",
        wifi_name: "",
        netWorkType: "",
        display: "none"
    },
    goToUser: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    onLoad: function(o) {
        e = this, "1" == o.secondIn ? e.setData({
            secondIn: !0
        }) : e.setData({
            secondIn: !1
        });
        var s = decodeURIComponent(o.scene);
        if ("undefined" != s && void 0 != s && null != s && "null" != s) {
            var n = s.split(",")[0].replace('"', "");
            s.split(",")[1].replace('"', "");
            e.setData({
                scene: s,
                saoma: !0
            }), wx.request({
                url: a + "skstoremodel/findStoreById",
                data: {
                    pid: n
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(s) {
                    e.setData({
                        storeInfo: s.data
                    }), wx.setStorage({
                        key: "storeInfo",
                        data: s.data
                    }), wx.setStorage({
                        key: "storeName",
                        data: s.data.storeInfoName
                    }), wx.setNavigationBarTitle({
                        title: s.data.storeInfoName
                    });
                    var n = s.data.storeInfoStoreId;
                    e.setData({
                        storeId: n
                    }), wx.setStorageSync("storeId", n), t.getShareInfos(e, a), e.resendIndex(n), t.getShareInfos(e, a), 
                    t.setCompanyId(e, o), t.setStoreId(e), t.setStoreInfo(e), t.getWifiDates(e, a);
                }
            });
        } else t.getShareInfos(e, a), t.setCompanyId(e, o), t.setStoreId(e), t.setStoreInfo(e), 
        t.getWifiDates(e, a);
    },
    resendIndex: function(t) {
        e.setData({
            dcFlg: !0,
            orderType: "D"
        }), wx.request({
            url: a + "skstoremodel/findCompanyByAppid",
            data: {
                xcxAppid: o.globalData.appId
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
                                        url: a + "skmembermodel/getOpenidS",
                                        data: {
                                            code: n,
                                            AppID: o.globalData.appId,
                                            Secret: o.globalData.Secret,
                                            storeUuid: t,
                                            wxUserNickName: s.userInfo.nickName,
                                            headImgUrl: e.data.userInfo.avatarUrl
                                        },
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(e) {
                                            var o = e.data.wechatUser.wechatUserId;
                                            if (null != e.data.openid && "" != e.data.openid) {
                                                var a = e.data.wechatUser.wechatUserStoreIdentity;
                                                wx.setStorage({
                                                    key: "StoreIdentity",
                                                    data: a
                                                }), wx.setStorage({
                                                    key: "session_key",
                                                    data: e.data.session_key
                                                }), wx.setStorage({
                                                    key: "openId",
                                                    data: e.data.openid
                                                }), wx.setStorage({
                                                    key: "userId",
                                                    data: o
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
                                var i = "";
                                i = e.data.storeInfo.storeInfoHeadImgUrl, wx.reLaunch({
                                    url: "../../welcome/accredit/accredit?data=" + n + "&store_uuid=" + t + "&imgurl=" + i + "&goWifi=true&scene=" + e.data.scene,
                                    success: function(e) {},
                                    fail: function(e) {}
                                });
                            }
                        },
                        fail: function(e) {}
                    });
                } else wx.getStorage({
                    key: "userId",
                    success: function(o) {
                        if (o.data) o.data; else e.resendIndex(t);
                    },
                    fail: function() {
                        e.resendIndex(t);
                    }
                });
            },
            fail: function(o) {
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
        e = this, wx.onSocketMessage(function(o) {
            console.log("===========接收到服务器信息=============="), console.log(o.data), t.getTkInfos(e, o), 
            t.playMusic(e, o);
        }), e = this, wx.onSocketClose(function() {
            console.log("=======webSocket已关闭========="), wx.getStorage({
                key: "userId",
                success: function(e) {
                    t.conSocket(e.data, a);
                }
            });
        });
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
        return console.log("=========onShareAppMessage==========="), {
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
    btn_lianjie: function(t) {
        "" == e.data.wifi_name && "" == e.data.wifi_password ? wx.showToast({
            title: "店铺未配置wifi"
        }) : wx.getSystemInfo({
            success: function(t) {
                console.log(t.platform + "系统"), console.log(t.system + "版本");
                var o = "";
                if ("android" == t.platform && (o = parseInt(t.system.substr(8))), "ios" == t.platform && (o = parseInt(t.system.substr(4))), 
                console.log(o + "返回数虚拟无数"), "android" == t.platform && o < 6) wx.showToast({
                    title: "系统版本过低"
                }); else {
                    if ("ios" == t.platform && o < 11) return console.log("================版本低================"), 
                    void wx.showToast({
                        title: "系统版本过低"
                    });
                    console.log("=================调用初始化==============="), e.startWifi();
                }
            }
        });
    },
    startWifi: function() {
        console.log("=================进入初始化===============");
        var e = this;
        wx.startWifi({
            success: function() {
                e.Connected();
            },
            fail: function(e) {
                console.log(e.errMsg + "什么情况"), wx.showToast({
                    title: "接口调用失败"
                });
            }
        });
    },
    Connected: function() {
        console.log("=================开始执行连接==============="), console.log("账号=======》" + e.data.wifi_name), 
        console.log("密码=======》" + e.data.wifi_password), wx.connectWifi({
            SSID: e.data.wifi_name,
            password: e.data.wifi_password,
            success: function(e) {
                console.log("=================连接成功==============="), wx.showToast({
                    title: "wifi连接成功"
                });
            },
            fail: function(t) {
                console.log("具体", t.errCode), console.log("=================连接失败==============="), 
                console.log(t.errMsg + "怎末错了"), t.errCode && e.setData({
                    display: "block",
                    titlename: "温馨提示",
                    carname: "请打开WLAN!"
                });
            }
        });
    },
    chkOrder: function(t) {
        wx.setClipboardData({
            data: e.data.wifi_password,
            success: function(e) {}
        });
    }
});