var a = require("/qqmap/qqmap-wx-jssdk.js");

App({
    onLaunch: function(a) {
        var e = this;
        e.setUrl(a), wx.setStorageSync("fatherid" + e.globalData.publicid, a.query.fatherid);
    },
    setUrl: function(a) {
        var e = a.path + "?", t = a.query;
        for (var s in t) e = e + s + "=" + t[s] + "&";
        this.globalData.pages.enter = "/" + e, this.globalData.distribution_param = a;
    },
    requirejs: function(a) {
        return require("utils/" + a + ".js");
    },
    onShow: function() {
        var a = this;
        setTimeout(function() {
            a.globalData.fatherid = wx.getStorageSync("fatherid" + a.globalData.publicid);
        }, 1500), wx.request({
            url: this.globalData.url + this.globalData.parameter + "&r=getshop&uniacid=" + this.globalData.publicid,
            success: function(a) {
                wx.setStorageSync("mallName", a.data.result.shop.name), a.data.result.copyright[0] && "" != a.data.result.copyright[0].copyright && wx.setStorageSync("copyright", a.data.result.copyright[0].copyright);
            }
        }), wx.getStorageSync("session_login_id") && (a.globalData.session_login_id = wx.getStorageSync("session_login_id"), 
        a.globalData.userInfo = wx.getStorageSync("userInfo"));
    },
    mobileBind: function(a, e, t) {
        var s = this;
        wx.request({
            url: this.globalData.url + this.globalData.parameter + "&r=account.isbindphone",
            header: {
                Cookie: s.globalData.session_login_id
            },
            data: {
                openid: e,
                mobile: this.globalData.mobile
            },
            method: "POST",
            success: function(e) {
                if ("pages/mine/index" == a.__route__) {
                    var t = a.data.userListInfo;
                    1 == e.data.status ? (t[1].bindNav = "unbind", t[1].phoneNum = e.data.result.mobile) : (t[1].pagePath = "../bind-phone/index", 
                    t[1].phoneNum = "未绑定", t[1].bindNav = "cartList"), a.setData({
                        userListInfo: t
                    });
                }
            }
        });
    },
    getUserInfo: function(a) {
        if (this.globalData.userInfo) {
            var e = wx.getStorageSync("userInfo");
            e && a.setData({
                userInfo: e
            });
        }
    },
    userLogin: function(a, e) {
        var t = this;
        wx.login({
            success: function(s) {
                if (s.code) {
                    var i = s.code;
                    wx.request({
                        url: t.globalData.url + "i=" + t.globalData.publicid + "&c=entry&m=ewei_shopv2&do=mobile&r=wxaes.demo1.sessioncode",
                        data: {
                            appid: t.globalData.appid,
                            secret: t.globalData.secret,
                            js_code: i
                        },
                        method: "POST",
                        success: function(s) {
                            var i = s.data.result.message.session_key;
                            s.data.result.message.openid;
                            t.globalData.sessionKey = i, t.getInfo(a, i, e);
                        },
                        fail: function() {
                            wx.showModal({
                                content: "网络连接失败",
                                showCancel: !1,
                                success: function(a) {
                                    a.confirm ? wx.reLaunch({
                                        url: t.globalData.pages.login
                                    }) : wx.navigateBack();
                                }
                            });
                        }
                    });
                } else console.log("获取用户登录态失败！" + s.errMsg);
            }
        });
    },
    getInfo: function(a, e, t) {
        wx.showLoading({
            title: "授权中"
        });
        var s = this;
        wx.setStorage({
            key: "userInfo",
            data: a.userInfo
        }), wx.request({
            url: s.globalData.url + "i=" + s.globalData.publicid + "&c=entry&m=ewei_shopv2&do=mobile&r=wxaes.demo1&mid=" + wx.getStorageSync("fatherid" + s.globalData.publicid),
            method: "POST",
            data: {
                appid: s.globalData.appid,
                sessionKey: e,
                encryptedData: a.encryptedData,
                iv: a.iv
            },
            success: function(a) {
                1 == a.data.status && (wx.request({
                    url: s.globalData.url + s.globalData.parameter + "&r=member.wxapp_getmember",
                    header: {
                        Cookie: a.data.result.cookie + "; PHPSESSID=" + a.data.result.session_id
                    },
                    success: function(a) {
                        1 == a.data.status && wx.setStorageSync("agentid", a.data.result.member.agentid);
                    }
                }), wx.setStorageSync("isnew", a.data.result.isnew), wx.setStorageSync("session_login_id", a.data.result.cookie + "; PHPSESSID=" + a.data.result.session_id), 
                s.globalData.session_login_id = a.data.result.cookie + "; PHPSESSID=" + a.data.result.session_id, 
                s.globalData.userInfo = a.data.result.userinfo, s.globalData.userInfo.mid = a.data.result.mid), 
                wx.setStorage({
                    key: "userInfo",
                    data: s.globalData.userInfo
                }), wx.setStorage({
                    key: "session_login_id",
                    data: s.globalData.session_login_id
                }), wx.setStorage({
                    key: "demo1",
                    data: a.data
                }), wx.request({
                    url: s.globalData.url + s.globalData.parameter + "&r=wxapp_main",
                    header: {
                        Cookie: s.globalData.session_login_id
                    },
                    success: function(a) {
                        wx.setStorageSync("cpinfos", a.data.result.cpinfos);
                    }
                }), wx.hideLoading(), t && t.success && t.success();
            },
            fail: function() {
                wx.showModal({
                    content: "网络连接失败",
                    showCancel: !1,
                    success: function(a) {
                        a.confirm ? wx.reLaunch({
                            url: s.globalData.pages.login
                        }) : wx.navigateBack();
                    }
                });
            }
        });
    },
    loginNav: function() {
        wx.checkSession({
            success: function(a) {},
            fail: function(a) {
                wx.reLaunch({
                    url: "/page/tabBar/mine/login/login"
                });
            }
        }), this.globalData.session_login_id || wx.reLaunch({
            url: "/page/tabBar/mine/login/login"
        });
    },
    modaltem: function(a) {
        function e(a) {
            wx.hideLoading(), wx.showModal({
                title: "提示",
                content: a,
                showCancel: !1,
                success: function(a) {
                    a.confirm || wx.navigateBack();
                }
            });
        }
        wx.getSetting({
            success: function(a) {
                a.authSetting["scope.userLocation"] ? a.authSetting["scope.userInfo"] || e("请您授权您的用户信息，否则核心功能将无法使用") : e("需要获取您的地理位置，请确认授权，否则地图功能将无法使用");
            }
        });
    },
    getlocate: function(e) {
        var t = this;
        wx.getLocation({
            success: function(s) {
                wx.showLoading({
                    title: "定位中"
                }), new a({
                    key: "B4YBZ-IS33V-3NWPV-URRKY-S7262-HSBD6"
                }).reverseGeocoder({
                    location: {
                        latitude: s.latitude,
                        longitude: s.longitude
                    },
                    success: function(a) {
                        var s = a.result.address_component.city;
                        wx.setStorageSync("city", s), wx.setStorageSync("localcity", s), t.globalData.city = s, 
                        wx.hideLoading(), e && e.success && e.success(), wx.reLaunch({
                            url: t.globalData.pages.index
                        });
                    },
                    fail: function(a) {
                        wx.showModal({
                            content: "网络连接失败",
                            showCancel: !1,
                            success: function(a) {
                                a.confirm ? wx.reLaunch({
                                    url: t.globalData.pages.login
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
    checkMemberInfo: function(a) {
        var e = this;
        wx.request({
            url: e.globalData.url + e.globalData.parameter + "&r=member.wxapp_getmember",
            header: {
                Cookie: e.globalData.session_login_id
            },
            success: function(e) {
                "" == e.data.result.member.mobile || null == e.data.result.member.mobile || "" == e.data.result.member.realname || null == e.data.result.member.realname ? a && a.fail && a.fail() : a && a.success && a.success();
            }
        });
    },
    globalData: {
        userInfo: null,
        index_url: "/page/tabBar/index/index",
        subDomain: "mall",
        merchid: 0,
        fatherid: 0,
        token: "",
        session_code_id: null,
        session_login_id: null,
        appid: "wx0b07368fd4373dde",
        secret: "3c68b23cc4f344657f0f76e0d765d461",
        publicid: "1434",
        fileimg: "https://file.aikst.cn/",
        url: "https://api.aikst.cn/app/index.php?",
        imgurl: "https://api.aikst.cn/attachment/",
        parameter: "i=1434&c=entry&m=ewei_shopv2&do=mobile",
        mallName: "",
        yuming: "https://api.aikst.cn/",
        pages: {
            index: "/page/tabBar/index/index",
            login: "/page/tabBar/mine/login/login",
            mine_index: "/page/tabBar/mine/index"
        }
    }
});