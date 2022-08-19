var e, a = getApp(), t = a.globalData.httpUrl;

Page({
    data: {
        httpUrl: t,
        onClickFlag: !1,
        shouye: !1
    },
    onLoad: function(a) {
        e = this, console.log(a), console.log(a.imgurl), e.setData({
            data: a.data,
            store_uuid: a.store_uuid,
            imgurl: a.imgurl,
            goUser: a.goUser,
            goActive: a.goActive,
            goDiancan: a.goDiancan,
            goCollage: a.goCollage,
            goQuanyi: a.goQuanyi,
            goHuiyuan: a.goHuiyuan,
            goShouyin: a.goShouyin,
            goPaidui: a.goPaidui,
            goYuding: a.goYuding,
            goLingquan: a.goLingquan,
            goWifi: a.goWifi,
            goDaohang: a.goDaohang,
            goChuizhi: a.goChuizhi,
            goWaimai: a.goWaimai
        }), a.scene && e.setData({
            scene: a.scene
        });
    },
    onReady: function() {},
    onShow: function() {
        var e = this;
        wx.login({
            success: function(a) {
                console.log("====wx.login success====");
                a.code;
                a.code && (console.log("====get code===="), console.log("res.code ==> " + a.code), 
                wx.getSetting({
                    success: function(a) {
                        a.authSetting["scope.userInfo"] ? (console.error("已经授权"), e.setData({
                            shouye: !0
                        })) : (console.error("还没授权"), e.setData({
                            shouye: !1
                        }));
                    }
                }));
            }
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
    onShareAppMessage: function() {},
    goToUser: function(e) {
        wx.switchTab({
            url: "../../index/index"
        });
    },
    goDetail: function(o) {
        if (!e.data.onClickFlag) {
            e.setData({
                onClickFlag: !0
            }), console.log(o.detail.userInfo);
            var n = e.data.data, s = (e.data.openid, e.data.store_uuid);
            if (console.log(n), o.detail.userInfo) {
                e.setData({
                    onClickFlag: !0
                }), wx.getLocation({
                    type: "wgs84",
                    success: function(e) {
                        wx.setStorage({
                            key: "latitude",
                            data: e.latitude
                        }), wx.setStorage({
                            key: "longitude",
                            data: e.longitude
                        });
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
                        });
                    }
                });
                var i = o.detail.userInfo.nickName, r = o.detail.userInfo.avatarUrl;
                wx.request({
                    url: t + "skmembermodel/getOpenidS",
                    data: {
                        code: n,
                        AppID: a.globalData.appId,
                        Secret: a.globalData.Secret,
                        storeUuid: s,
                        wxUserNickName: i,
                        headImgUrl: r
                    },
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(a) {
                        if (wx.setStorage({
                            key: "code",
                            data: ""
                        }), null != a.data.openid && "" != a.data.openid) {
                            var t = a.data.wechatUser.wechatUserStoreIdentity;
                            wx.setStorage({
                                key: "StoreIdentity",
                                data: t
                            }), wx.setStorage({
                                key: "openId",
                                data: a.data.openid
                            }), wx.setStorage({
                                key: "userId",
                                data: a.data.wechatUser.wechatUserId
                            }), wx.setStorage({
                                key: "userName",
                                data: i
                            }), wx.setStorage({
                                key: "avatarUrl",
                                data: r
                            }), wx.setStorage({
                                key: "storeId",
                                data: s
                            }), wx.setStorage({
                                key: "session_key",
                                data: a.data.session_key,
                                success: function(t) {
                                    if ("true" == e.data.goUser) wx.switchTab({
                                        url: "../../user/user"
                                    }); else if ("quanyi" == e.data.goUser) wx.redirectTo({
                                        url: "/pages/user/forceCard/receiveForceCard/receiveForceCard?scene=" + e.data.scene + "&secondIn=1"
                                    }); else if ("true" == e.data.goActive) wx.redirectTo({
                                        url: "../../active/active?sessionkey=" + a.data.session_key + "&scene=" + e.data.scene + "&secondIn=1"
                                    }); else if ("true" == e.data.goDiancan) wx.redirectTo({
                                        url: "../../index/takeOut/takeOutSM?scene=" + e.data.scene + "&secondIn=1"
                                    }); else if ("true" == e.data.goQuanyi) wx.redirectTo({
                                        url: "/pages/user/forceCard/receiveForceCard/receiveForceCard?scene=" + e.data.scene + "&secondIn=1"
                                    }); else if ("true" == e.data.goHuiyuan) wx.redirectTo({
                                        url: "/pages/user/myCard/myCard?scene=" + e.data.scene + "&secondIn=1"
                                    }); else if ("true" == e.data.goShouyin) wx.redirectTo({
                                        url: "/pages/index/collect/collect?scene=" + e.data.scene + "&secondIn=1"
                                    }); else if ("true" == e.data.goPaidui) wx.redirectTo({
                                        url: "/pages/index/fellin/fellin?scene=" + e.data.scene + "&secondIn=1"
                                    }); else if ("true" == e.data.goYuding) wx.redirectTo({
                                        url: "/pages/index/destine/destine?scene=" + e.data.scene + "&secondIn=1"
                                    }); else if ("true" == e.data.goLingquan) wx.redirectTo({
                                        url: "/pages/user/couponsCenter/couponsCenter?scene=" + e.data.scene + "&secondIn=1"
                                    }); else if ("true" == e.data.goWifi) wx.redirectTo({
                                        url: "/pages/index/wifi/wifi?scene=" + e.data.scene + "&secondIn=1"
                                    }); else if ("true" == e.data.goDaohang) wx.redirectTo({
                                        url: "/pages/maps/maps?scene=" + e.data.scene + "&secondIn=1"
                                    }); else if ("true" == e.data.goChuizhi) wx.redirectTo({
                                        url: "/pages/user/myCash/myCash?scene=" + e.data.scene + "&secondIn=1"
                                    }); else if ("true" == e.data.goCollage) wx.redirectTo({
                                        url: "../../collage/collage?scene=" + e.data.scene + "&secondIn=1"
                                    }); else if ("true" == e.data.goWaimai) {
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
                                            url: "/pages/index/takeOut/takeOut?editType=Y"
                                        });
                                    } else wx.switchTab({
                                        url: "../../index/index"
                                    });
                                }
                            });
                        } else wx.showToast({
                            title: "登录失败"
                        });
                    }
                });
            } else e.setData({
                onClickFlag: !1
            });
        }
    }
});