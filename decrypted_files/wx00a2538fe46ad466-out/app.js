var t = require("/qqmap/qqmap-wx-jssdk.js"), e = require("/utils/util.js");

App({
    onLaunch: function(t) {
        var e = this;
        wx.request({
            url: this.globalData.url + this.globalData.parameter + "&do=sysset",
            success: function(t) {
                wx.setStorageSync("sysset", t.data.result.sysset), wx.setStorageSync("make", t.data.result.make);
            }
        }), e.setEnter(t), e.globalData.pages.share = t.query.share;
    },
    onShow: function() {
        this.initLogin();
    },
    initLogin: function() {
        var t = this;
        t.globalData.pages.share || !t.globalData.session_login_id ? t.userLogin({
            success: function() {
                return t.initLocation();
            },
            fail: function() {
                return wx.reLaunch({
                    url: t.globalData.pages.login
                });
            }
        }) : this.initLocation();
    },
    initLocation: function() {
        function t() {
            wx.request({
                url: a.globalData.url + a.globalData.parameter + "&do=my",
                header: {
                    Cookie: a.globalData.session_login_id
                },
                success: function(t) {
                    if (1 == t.data.status) {
                        var a = t.data.result.user;
                        a.money = t.data.result.money, a.weidu_num = t.data.result.weidu_num, a.vip_endtime = e.timestampToLast(1e3 * a.vip_endtime), 
                        wx.setStorageSync("userInfo", a), getCurrentPages()[getCurrentPages().length - 1].onShow();
                    }
                }
            });
        }
        var a = this;
        wx.getStorageSync("city") ? t() : a.getlocate({
            success: function() {
                return t();
            },
            fail: function() {
                return a.modaltem({
                    success: function() {
                        return t();
                    }
                });
            }
        });
    },
    setEnter: function(t) {
        var e = t.path + "?", a = t.query;
        for (var s in a) e = e + s + "=" + a[s] + "&";
        this.globalData.pages.enter = "/" + e;
    },
    userLogin: function(t) {
        var e = this;
        wx.login({
            success: function(a) {
                if (a.code) {
                    var s = a.code;
                    e.getSession(s, t);
                } else console.log("获取用户登录态失败！" + a.errMsg);
            }
        });
    },
    getSession: function(t, e) {
        var a = this;
        wx.request({
            url: a.globalData.url + a.globalData.parameter + "&do=sessioncode",
            data: {
                appid: a.globalData.appid,
                secret: a.globalData.secret,
                js_code: t
            },
            method: "POST",
            success: function(t) {
                t.data.result.message.openid;
                a.globalData.sessionKey = t.data.result.message.session_key, wx.getUserInfo({
                    withCredentials: !0,
                    success: function(t) {
                        a.getUserInfo(t, e);
                    },
                    fail: function() {
                        e && e.fail && e.fail();
                    },
                    complete: function() {
                        e && e.complete && e.complete();
                    }
                });
            },
            fail: function() {
                wx.showModal({
                    content: "网络连接失败",
                    showCancel: !1,
                    success: function(t) {
                        t.confirm ? wx.reLaunch({
                            url: a.globalData.pages.login
                        }) : wx.navigateBack();
                    }
                });
            }
        });
    },
    getUserInfo: function(t, e) {
        wx.showLoading({
            title: "授权中"
        });
        var a = this;
        a.globalData.userInfo = t.userInfo, wx.setStorage({
            key: "userInfo",
            data: a.globalData.userInfo
        }), wx.request({
            url: a.globalData.url + a.globalData.parameter + "&do=main" + (a.globalData.pages.share ? "&share=" + a.globalData.pages.share : ""),
            method: "POST",
            data: {
                appid: a.globalData.appid,
                sessionKey: a.globalData.sessionKey,
                encryptedData: t.encryptedData,
                iv: t.iv
            },
            success: function(t) {
                a.globalData.session_login_id = t.data.result.cookie + "; PHPSESSID=" + t.data.result.session_id, 
                a.globalData.userInfo = t.data.result.openid, wx.setStorageSync("userInfo", t.data.result.openid), 
                wx.hideLoading(), e && e.success && e.success();
            },
            fail: function() {
                wx.showModal({
                    content: "网络连接失败",
                    showCancel: !1,
                    success: function(t) {
                        t.confirm ? wx.reLaunch({
                            url: a.globalData.pages.login
                        }) : wx.navigateBack();
                    }
                });
            }
        });
    },
    modaltem: function(t) {
        function e(e) {
            wx.hideLoading(), wx.showModal({
                title: "提示",
                content: e,
                showCancel: !1,
                success: function(e) {
                    e.confirm ? wx.openSetting({
                        success: function(e) {
                            e.authSetting["scope.userLocation"] && e.authSetting["scope.userInfo"] ? a.getlocate({
                                success: function() {
                                    t && t.success && t.success(e);
                                }
                            }) : a.modaltem(t);
                        }
                    }) : wx.navigateBack();
                }
            });
        }
        var a = this;
        wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userLocation"] ? t.authSetting["scope.userInfo"] || e("请您授权您的用户信息，否则核心功能将无法使用") : e("需要获取您的地理位置，请确认授权，否则地图功能将无法使用");
            }
        });
    },
    getlocate: function(e) {
        var a = this;
        wx.getLocation({
            success: function(s) {
                wx.showLoading({
                    title: "定位中"
                });
                var o = s.latitude, n = s.longitude, i = wx.getStorageSync("make").make_key_qq ? wx.getStorageSync("make").make_key_qq : "B4YBZ-IS33V-3NWPV-URRKY-S7262-HSBD6";
                new t({
                    key: i
                }).reverseGeocoder({
                    location: {
                        latitude: o,
                        longitude: n
                    },
                    success: function(t) {
                        var s = t.result.address_component.city, i = t.result.address_component.district, l = t.result.location, c = t.result.address;
                        wx.setStorageSync("location", l), wx.setStorageSync("packetadd", c), 1 == wx.getStorageSync("make").make_addcity_if ? a.getaddcity(o, n) : a.getid(s, i), 
                        wx.hideLoading(), e && e.success && e.success();
                    },
                    fail: function(t) {
                        wx.showModal({
                            content: "网络连接失败",
                            showCancel: !1,
                            success: function(t) {
                                t.confirm ? wx.reLaunch({
                                    url: a.globalData.pages.login
                                }) : wx.navigateBack();
                            }
                        });
                    }
                });
            },
            fail: function() {
                e && e.fail && e.fail();
            },
            complete: function() {
                e && e.complete && e.complete();
            }
        });
    },
    getid: function(t, e) {
        var a = this;
        wx.request({
            url: a.globalData.url + a.globalData.parameter + "&do=city_make",
            header: {
                Cookie: a.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                city_name: t
            },
            success: function(t) {
                if (1 == t.data.status) {
                    if (t.data.result.city) e = t.data.result.city; else var e = t.data.result.citydefault;
                    wx.request({
                        url: a.globalData.url + a.globalData.parameter + "&do=city_make&city=" + e.city_id,
                        header: {
                            Cookie: a.globalData.session_login_id,
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            if (1 == t.data.status) {
                                if (t.data.result.city) e = t.data.result.city; else var e = t.data.result.citydefault;
                                wx.setStorageSync("city", e), wx.setStorageSync("localcity", e);
                            }
                        }
                    });
                }
            }
        }), wx.request({
            url: a.globalData.url + a.globalData.parameter + "&do=city_make",
            header: {
                Cookie: a.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                city_name: e
            },
            success: function(t) {
                1 == t.data.status && t.data.result.city && wx.setStorageSync("district", t.data.result.city);
            }
        });
    },
    getaddcity: function(t, e) {
        var a = this;
        wx.request({
            url: a.globalData.url + a.globalData.parameter + "&do=addcity",
            header: {
                Cookie: a.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                lat: t,
                lng: e,
                key: "B4YBZ-IS33V-3NWPV-URRKY-S7262-HSBD6"
            },
            success: function(t) {
                var e = t.data.result.districtdata, s = t.data.result.citydata, o = t.data.result.res_district, n = t.data.result.res_shi;
                e ? (wx.setStorageSync("city", s[0]), wx.setStorageSync("localcity", s[0]), wx.setStorageSync("district", e[0])) : (wx.request({
                    url: a.globalData.url + a.globalData.parameter + "&do=city_make&city=" + n[0].city_id,
                    header: {
                        Cookie: a.globalData.session_login_id,
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {}
                }), wx.setStorageSync("city", n[0]), wx.setStorageSync("localcity", n[0]), wx.setStorageSync("district", o[0]));
            }
        });
    },
    listpage: function(t, e, a, s) {
        if (0 == t) s.setData({
            infolist: a,
            page: t + 1
        }); else if (a.length > 0) {
            for (var o = 0; o < a.length; o++) e.push(a[o]);
            s.setData({
                infolist: e,
                page: t + 1
            });
        } else s.setData({
            loadhidden: !1
        });
    },
    globalData: {
        pages: {
            index: "/pages/index/index",
            login: "/pages/mine/login/login"
        },
        userInfo: null,
        subDomain: "mall",
        merchid: 0,
        appid: "wx00a2538fe46ad466",
        secret: "0b7ee622a89392c46b2d271da9f2b448",
        token: "",
        session_code_id: null,
        session_login_id: null,
        publicid: "643",
        url: "https://user.ssyd.org/app/index.php?",
        imgurl: "https://user.ssyd.org/attachment/",
        parameter: "i=643&c=entry&a=wxapp&m=hulu_info",
        mallName: "",
        local_city: ""
    }
});